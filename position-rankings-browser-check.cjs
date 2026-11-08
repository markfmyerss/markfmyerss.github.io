const {chromium,webkit}=require('@playwright/test'),http=require('node:http'),fs=require('node:fs/promises'),path=require('node:path'),assert=require('node:assert/strict'),T=require('./scripts/roster-tools.cjs');
(async()=>{T.archiveData(T.loadData());const server=http.createServer(async(req,res)=>{try{const file=path.resolve('.',decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/$/,'/index.html').slice(1));if(!file.startsWith(process.cwd()+path.sep))throw Error('path');res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.svg')?'image/svg+xml':file.endsWith('.png')?'image/png':file.endsWith('.json')?'application/json':'text/html');res.end(await fs.readFile(file));}catch{res.statusCode=404;res.end('Not found');}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));const root='http://127.0.0.1:'+server.address().port;await fs.mkdir('qa',{recursive:true});const weekly=await fs.readFile('nba-position-data.js','utf8');
try{for(const engine of [chromium,webkit]){const browser=await engine.launch();try{
 const page=await browser.newPage({viewport:{width:390,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(root);
 await page.click('#start');await page.click('#right');const ownTeam=await page.evaluate(()=>({key:keyFor(state.team,state.pos),value:localStorage.getItem(keyFor(state.team,state.pos))}));
 await page.click('[data-mode=positions]');assert.equal(await page.locator('#team').inputValue(),'NFL League');assert.ok(await page.locator('#team-field').isHidden());assert.ok(await page.locator('#conference-picker').isHidden());assert.ok(await page.locator('#division-row').isHidden());assert.equal(await page.locator('#position option').count(),15);
 for(const sport of ['NFL','NBA']){
  if(sport==='NBA'){await page.click('[data-sport=NBA].sport-button');await page.click('[data-mode=positions]');}
  const positions=await page.locator('#position option').evaluateAll(os=>os.map(o=>o.value));assert.equal(positions.length,sport==='NFL'?15:5);assert.ok(!positions.includes('ALL'));
  for(const pos of positions){
   await page.selectOption('#position',pos);await page.click('#start');const before=await page.locator('#progress').textContent();await page.click('#left');await page.click('#undo');assert.equal(await page.locator('#progress').textContent(),before);await page.click('#right');const saved=await page.locator('#progress').textContent();await page.reload();assert.equal(await page.locator('#progress').textContent(),saved);assert.equal(await page.locator('#position').inputValue(),pos);assert.equal(await page.locator('body').getAttribute('data-ranking-mode'),'positions');
   const identity=await page.evaluate(()=>{const p=state.stack.at(-1).left[state.stack.at(-1).i];const c=ALL_TEAM_INFO[p.team].colors.primary;return {team:p.team,background:'rgb('+c.slice(1).match(/../g).map(n=>parseInt(n,16)).join(', ')+')'};});assert.equal(await page.locator('#left .player-team').textContent(),identity.team);assert.equal(await page.locator('#left .pick-label').evaluate(e=>getComputedStyle(e).backgroundColor),identity.background);
  }
  for(const width of [320,390,768,1440]){await page.setViewportSize({width,height:1000});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));}
  console.log('PASS '+engine.name()+' '+sport+' all position filters, mixed-team cards/colors, undo, separate saves/reload and 320–1440px layouts');
 }
 await page.click('[data-sport=NFL].sport-button');assert.equal(await page.locator('body').getAttribute('data-ranking-mode'),'positions');await page.click('[data-mode=teams]');assert.equal(await page.evaluate(k=>localStorage.getItem(k),ownTeam.key),ownTeam.value);assert.ok(await page.locator('#team-field').isVisible());
 // Complete the largest position pool deterministically to inspect every export layout.
 const output=await page.evaluate(async()=>{
  selectRankingMode('positions');const groups=selectablePositions(activeSport,true),pos=groups.sort((a,b)=>rankingRoster(leagueTeam(activeSport),b).length-rankingRoster(leagueTeam(activeSport),a).length)[0];document.getElementById('position').value=pos;selectTeam();const team=document.getElementById('team').value,players=rankingRoster(team,pos);state={team,pos,players,sorted:[...players].reverse(),done:true,history:[],stack:[],comparisons:0};save();render();const result={team,pos,players:state.sorted},rows=[];
  for(const size of ResultsExport.SIZES){
   const names=[],original=CanvasRenderingContext2D.prototype.fillText,known=new Set(players.map(p=>p.name));CanvasRenderingContext2D.prototype.fillText=function(v,...args){if(known.has(v))names.push(v);return original.call(this,v,...args);};
   let image;try{image=await ResultsExport.createImage(result,{size:size.id,type:'png',scope:'all'});}finally{CanvasRenderingContext2D.prototype.fillText=original;}
   if(JSON.stringify(names)!==JSON.stringify(result.players.map(p=>p.name)))throw Error('Missing names '+size.id);
   if(JSON.stringify(image.players)!==JSON.stringify(result.players.map(p=>p.id)))throw Error('Wrong ranking order');
   const plan=ResultsExport.plan(result,{size:size.id,scope:'all'});if(plan.boxes.some(b=>b.height<8||b.y+b.height>plan.H-plan.footer+1))throw Error('Clipped position rows');
   if(image.pages!==1||!image.logoIncluded||image.width>4096||image.height>4096||image.width*size.height!==image.height*size.width)throw Error('Position image layout');
   rows.push({size:size.id,width:image.width,height:image.height});
  }
  for(const type of ['jpg','webp']){const image=await ResultsExport.createImage(result,{size:'1x1',type,scope:'10'});if(image.blob.type!==ResultsExport.TYPES[type].mime)throw Error('File encoding');}
  return {count:players.length,link:encodeRankingLink(state),names:state.sorted.map(p=>p.name),rows};
 });assert.ok(output.count>0);assert.equal(output.rows.length,9);
 await page.setViewportSize({width:390,height:1000});await page.click('#share-ranking');assert.equal(await page.locator('#export-size option').count(),4);assert.equal(await page.locator('#export-scope option').count(),3);assert.ok(await page.locator('#export-type-field').isHidden());assert.ok(await page.locator('#export-all').isHidden());await page.click('#export-preview');await page.waitForFunction(()=>!document.getElementById('export-download').disabled&&document.getElementById('export-preview-image').naturalWidth>=1080);await page.locator('#export-panel').screenshot({path:'qa/position-export-'+engine.name()+'.png'});
 const recipient=await browser.newPage({viewport:{width:320,height:1000}});await recipient.goto(root);await recipient.evaluate(()=>{selectRankingMode('positions');document.getElementById('position').value='CB';selectTeam();start();choose('left');});const personal=await recipient.evaluate(()=>({key:keyFor(state.team,state.pos),value:localStorage.getItem(keyFor(state.team,state.pos))}));await recipient.goto(root+'/'+new URL(output.link).hash);await recipient.reload();await recipient.waitForFunction(()=>!!sharedRanking);assert.deepEqual(await recipient.locator('.rank-text strong').allTextContents(),output.names);assert.equal(await recipient.evaluate(k=>localStorage.getItem(k),personal.key),personal.value);await recipient.close();
 // Historical removed categories remain readable without reappearing in the picker.
 for(const legacyPos of ['ST','DL','OL']){
  const index=JSON.parse(await fs.readFile('assets/roster-snapshots/index.json','utf8'));
  const key=Object.keys(index.snapshots).find(k=>k.startsWith('NFL.NFL.'+legacyPos+'.'));assert.ok(key);
  const snapshot=JSON.parse(await fs.readFile(index.snapshots[key].path,'utf8')),legacyPlayers=T.filtered(snapshot.players,legacyPos);
  const bytes=Buffer.alloc(legacyPlayers.length*2);for(let i=0;i<legacyPlayers.length;i++)bytes.writeUInt16BE(legacyPlayers.length-1-i,i*2);
  const hash='#ranking=v2.NFL.NFL.'+legacyPos+'.'+key.split('.').at(-1)+'.'+bytes.toString('base64url');
  await page.goto(root+'/'+hash);await page.waitForFunction(pos=>sharedRanking?.pos===pos,legacyPos);
  assert.equal(await page.evaluate(()=>sharedRanking.sorted.length),legacyPlayers.length);
  assert.equal(await page.locator('#league-position-grid [data-position=ST]').count(),0);
 }
 // A real archived league roster must open after a weekly roster change.
 const old=await page.evaluate(()=>{selectSport('NBA');selectRankingMode('positions');document.getElementById('position').value='PG';selectTeam();const team=document.getElementById('team').value,players=rankingRoster(team,'PG');state={team,pos:'PG',players,sorted:[...players].reverse(),done:true,history:[],stack:[],comparisons:0};save();render();return {link:encodeRankingLink(state),players:state.sorted.map(p=>p.id),removed:players[0],stamp:rankingStamp(team,'PG')};});
 const change='\nNBA_POSITION_PLAYERS.splice(NBA_POSITION_PLAYERS.findIndex(p=>p.id==='+JSON.stringify(old.removed.id)+'),1);delete NBA_HEADSHOTS['+JSON.stringify(old.removed.id)+'];';
 await page.route(url=>url.pathname.endsWith('/nba-position-data.js'),r=>r.fulfill({contentType:'text/javascript',body:weekly+change}));await page.goto(root+'/'+new URL(old.link).hash);await page.reload();await page.waitForFunction(()=>!!sharedRanking);assert.deepEqual(await page.evaluate(()=>sharedRanking.sorted.map(p=>p.id)),old.players);
 const historical=await page.evaluate(async()=>{const image=await ResultsExport.createImage({team:sharedRanking.team,pos:sharedRanking.pos,players:sharedRanking.sorted},{size:'1x1',type:'png',scope:'all'});return {missing:image.missingPhotos,ids:image.players};});assert.equal(historical.missing,0);assert.deepEqual(historical.ids,old.players);
 await page.click('#rank-yours');assert.ok(await page.locator('#saved-roster-note').isVisible());await page.click('#latest-roster');assert.equal(await page.evaluate(()=>state.players.length),old.players.length-1);assert.ok(await page.locator('#previous-rankings').isVisible());
 assert.deepEqual(errors,[]);await page.close();console.log('PASS '+engine.name()+' large-pool v2 sharing, all nine single-image sizes, mobile PNG controls, high-resolution limits and archived league photos after weekly updates');
}finally{await browser.close();}}}finally{await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exit(1)});
