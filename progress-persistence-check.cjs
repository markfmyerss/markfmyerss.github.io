const {chromium,webkit}=require('@playwright/test'),assert=require('node:assert/strict'),fs=require('node:fs/promises'),http=require('node:http'),path=require('node:path');
(async()=>{const server=http.createServer(async(req,res)=>{try{const f=path.resolve('.','.'+new URL(req.url,'http://x').pathname.replace(/^\/$/,'/index.html'));res.setHeader('content-type',f.endsWith('.js')?'text/javascript':f.endsWith('.css')?'text/css':f.endsWith('.json')?'application/json':'text/html');res.end(await fs.readFile(f));}catch{res.statusCode=404;res.end();}});await new Promise(r=>server.listen(0,'127.0.0.1',r));const root=process.env.PERSISTENCE_CHECK_URL||'http://127.0.0.1:'+server.address().port;
const setup=async(browser,mobile=false)=>{const page=await browser.newPage({viewport:{width:mobile?390:1440,height:1100},isMobile:mobile,hasTouch:mobile});await page.route('**/*',r=>r.request().resourceType()==='image'?r.abort():r.continue());await page.goto(root);return page;};
const finish=async page=>page.evaluate(()=>{const order=new Map([...state.players].reverse().map((p,i)=>[p.id,i]));let picks=0;while(!state.done){const f=state.stack.at(-1);choose(order.get(f.left[f.i].id)<order.get(f.right[f.j].id)?'left':'right');if(++picks>2000)throw Error('Loop');}return {ids:state.sorted.map(p=>p.id),comparisons:state.comparisons,bytes:localStorage.getItem(keyFor(state.team,state.pos)).length};});
try{for(const engine of [chromium,webkit]){const browser=await engine.launch();try{
 const page=await setup(browser);
 await page.evaluate(()=>{localStorage.clear();localStorage.setItem('unrelated-saved-data','x'.repeat(2*1024*1024));memory.clear();$('team').value='Baltimore Ravens';$('position').value='ALL';selectTeam();start();});
 const done=await finish(page);
 const disk=await page.evaluate(()=>{const raw=localStorage.getItem(keyFor(state.team,state.pos)),parsed=JSON.parse(raw),decoded=parseSavedState(raw);return {done:decoded.done,ids:decoded.sorted.map(p=>p.id),encoding:parsed.encoding,history:parsed.history.length,compactHistory:parsed.history.every(h=>{const s=JSON.parse(h);return s.encoding==='league-indices-v1'&&!s.players;}),filler:localStorage.getItem('unrelated-saved-data').length,warning:!$('storage-note').hidden};});
 assert(disk.done);assert.deepEqual(disk.ids,done.ids);assert(disk.compactHistory);assert.equal(disk.encoding,'league-indices-v1');assert.equal(disk.filler,2*1024*1024);assert(done.bytes<750000,'Compact save still too large');assert(!disk.warning);
 await page.locator('#share-ranking').click();await page.locator('#export-preview').click();await page.waitForFunction(()=>!document.getElementById('export-download').disabled);
 await page.reload();assert(await page.evaluate(()=>state.done));assert.deepEqual(await page.evaluate(()=>state.sorted.map(p=>p.id)),done.ids);assert.equal(await page.evaluate(()=>state.comparisons),done.comparisons);
 await page.locator('#undo-result').click();assert(!await page.evaluate(()=>state.done));const beforeReload=await page.evaluate(()=>JSON.stringify(state));await page.reload();assert.equal(await page.evaluate(()=>JSON.stringify(state)),beforeReload);await finish(page);await page.reload();assert(await page.evaluate(()=>state.done));
 console.log('PASS '+engine.name()+': native browser quota with 2 MiB of unrelated data; complete Ravens ranking, generate image, reload, undo and re-complete; '+done.bytes+' characters persisted');
 await page.close();
 // Legacy uncompressed undo steps migrate in place for all sports.
 const migration=await setup(browser);
 for(const [sport,team] of [['NFL','Baltimore Ravens'],['NBA','Boston Celtics'],['MLB','Baltimore Orioles']]){
  const fixture=await migration.evaluate(({sport,team})=>{selectSport(sport);selectRankingMode('teams');$('team').value=team;$('position').value='ALL';selectTeam();state=null;start();for(let i=0;i<7;i++)choose(i%2?'right':'left');const prior=unpackLeagueState(JSON.parse(state.history.at(-1)),state.players),legacy={...state,history:state.history.map(h=>JSON.stringify(unpackLeagueState(JSON.parse(h),state.players)))};localStorage.setItem(keyFor(team,'ALL'),JSON.stringify(legacy));return {comparisons:state.comparisons,previous:JSON.parse(JSON.stringify({...prior,history:[]}))};},{sport,team});
  await migration.reload();assert.equal(await migration.evaluate(()=>state.comparisons),fixture.comparisons);
  assert(await migration.evaluate(()=>{const p=JSON.parse(localStorage.getItem(keyFor(state.team,state.pos)));return p.encoding==='league-indices-v1'&&p.history.every(h=>!JSON.parse(h).players);}));
  await migration.locator('#undo').click();assert.deepEqual(await migration.evaluate(()=>JSON.parse(JSON.stringify({...state,history:[]}))),fixture.previous);
  await migration.reload();assert.equal(await migration.evaluate(()=>state.comparisons),fixture.comparisons-1);
 }
 console.log('PASS '+engine.name()+': existing NFL/NBA/MLB saves and undo histories migrate without resetting player pools or picks');await migration.close();
 // Saving prioritizes the current ranking over expendable old undo steps.
 const pressure=await setup(browser);
 await pressure.evaluate(()=>{$('team').value='Baltimore Ravens';$('position').value='ALL';selectTeam();start();const original=Storage.prototype.setItem;window.quotaRetries=0;Storage.prototype.setItem=function(k,v){if(k===keyFor(state.team,state.pos)){const p=JSON.parse(v),core=JSON.stringify({...p,history:[]});if(v.length>core.length+2000){window.quotaRetries++;throw new DOMException('Test quota','QuotaExceededError');}}return original.call(this,k,v);};});
 const pressureDone=await finish(pressure);assert(await pressure.evaluate(()=>window.quotaRetries>0));assert(await pressure.evaluate(()=>parseSavedState(localStorage.getItem(keyFor(state.team,state.pos))).done));assert(await pressure.locator('#storage-note').isHidden());await pressure.reload();assert.deepEqual(await pressure.evaluate(()=>state.sorted.map(p=>p.id)),pressureDone.ids);await pressure.close();
 console.log('PASS '+engine.name()+': low-space retry shortens undo history and persists the complete result');
 // Completely blocked storage must never claim the current picks were saved.
 const blocked=await setup(browser);
 await blocked.evaluate(()=>{start();window.realSetItem=Storage.prototype.setItem;Storage.prototype.setItem=function(){throw new DOMException('Blocked','SecurityError');};});
 await blocked.locator('#left').click();assert(await blocked.locator('#storage-note').isVisible());assert.match(await blocked.locator('#save-note').textContent(),/not saved/i);
 assert(await blocked.evaluate(()=>{const event=new Event('beforeunload',{cancelable:true});dispatchEvent(event);return event.defaultPrevented;}));
 await blocked.evaluate(()=>{Storage.prototype.setItem=window.realSetItem;save();render();});assert(await blocked.locator('#storage-note').isHidden());const picks=await blocked.evaluate(()=>state.comparisons);await blocked.reload();assert.equal(await blocked.evaluate(()=>state.comparisons),picks);await blocked.close();
 console.log('PASS '+engine.name()+': blocked saves show an honest warning and prevent silent refresh loss; recovery persists current picks');
 const contrast=await setup(browser,true);
 const checked=await contrast.evaluate(()=>{
  const rgb=s=>(s.match(/[\d.]+/g)||[]).slice(0,3).map(Number),lum=c=>c.map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4;}).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0),ratio=(a,b)=>(Math.max(lum(a),lum(b))+.05)/(Math.min(lum(a),lum(b))+.05);
  const background=e=>{for(let p=e;p;p=p.parentElement){const bg=getComputedStyle(p).backgroundColor;if(!bg.startsWith('rgba')&&bg!=='transparent')return rgb(bg);if(bg.startsWith('rgba')&&Number((bg.match(/[\d.]+/g)||[])[3])===1)return rgb(bg);}throw Error('No opaque background');};
  let count=0;
  for(const sport of Object.keys(SPORTS))for(const team of teamsFor(sport)){
   selectSport(sport);selectRankingMode('teams');$('team').value=team;$('position').value='ALL';selectTeam();const players=rosterFor(team);state={team,pos:'ALL',players,sorted:players,stack:[],history:[],comparisons:100,done:true};render();
   for(const appearance of ['light','dim','black']){
    document.documentElement.dataset.appearance=appearance;
    for(const selector of ['#export-preview','#share-link','#share-ranking','#copy','.rank-num','.podium-place'])for(const e of document.querySelectorAll(selector)){const fg=rgb(getComputedStyle(e).color),bg=background(e);if(ratio(fg,bg)<4.5)throw Error(team+' '+appearance+' unreadable '+selector+' '+ratio(fg,bg));}
    count++;
   }
  }return count;
 });assert.equal(checked,92*3);await contrast.close();console.log('PASS '+engine.name()+': readable create-image, share-link, copy-list and rank labels across all 92 teams in Light/Dim/Lights Out');
 }finally{await browser.close();}}}finally{await new Promise(r=>server.close(r));}})().catch(e=>{console.error(e);process.exit(1)});
