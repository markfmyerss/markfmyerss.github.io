const {chromium,webkit}=require('@playwright/test'),assert=require('node:assert/strict'),fs=require('node:fs/promises'),http=require('node:http'),path=require('node:path');
(async()=>{const server=http.createServer(async(req,res)=>{try{const f=path.resolve('.','.'+new URL(req.url,'http://x').pathname.replace(/^\/$/,'/index.html'));res.setHeader('content-type',f.endsWith('.js')?'text/javascript':f.endsWith('.css')?'text/css':f.endsWith('.jpg')?'image/jpeg':f.endsWith('.svg')?'image/svg+xml':f.endsWith('.json')?'application/json':'text/html');res.end(await fs.readFile(f));}catch{res.statusCode=404;res.end();}});await new Promise(r=>server.listen(0,'127.0.0.1',r));const root=process.env.PORTRAIT_CHECK_URL||'http://127.0.0.1:'+server.address().port;
try{for(const engine of [chromium,webkit]){const browser=await engine.launch();try{
 const page=await browser.newPage({viewport:{width:390,height:1100},isMobile:true,hasTouch:true}),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(root);await page.evaluate(()=>document.fonts.ready);await page.evaluate(()=>{selectSport('MLB');selectRankingMode('teams');});
 const inspect=async selector=>{
  await page.locator(selector).evaluateAll(async es=>{for(const e of es){const i=e.querySelector('img');if(i){i.loading='eager';await i.decode();}}});
  const rows=await page.locator(selector).evaluateAll(es=>es.map(e=>{const i=e.querySelector('img');if(!i)return {error:'Missing portrait'};const a=e.getBoundingClientRect(),b=i.getBoundingClientRect(),style=getComputedStyle(i);return {name:i.alt,slot:{x:a.x,y:a.y,w:a.width,h:a.height,right:a.right,bottom:a.bottom},image:{x:b.x,y:b.y,w:b.width,h:b.height,right:b.right,bottom:b.bottom},fit:style.objectFit};}));
  assert(rows.length>0,selector+' has no images');for(const r of rows){assert(!r.error,selector+' missing headshot');assert(r.image.w>0&&r.image.h>0,r.name+' collapsed');assert(r.image.x>=r.slot.x-1&&r.image.y>=r.slot.y-1&&r.image.right<=r.slot.right+1&&r.image.bottom<=r.slot.bottom+1,JSON.stringify({selector,...r}));assert.equal(r.fit,'contain',r.name+' crops source');}
  return rows.length;
 };
 const teams=await page.evaluate(()=>teamsFor('MLB'));let portraits=0;
 for(const team of teams){
  const count=await page.evaluate(team=>{$('team').value=team;$('position').value='ALL';selectTeam();start();return state.players.length;},team);
  for(let i=0;i<count;i+=2){await page.evaluate(i=>{renderPlayer('left',state.players[i]);renderPlayer('right',state.players[(i+1)%state.players.length]);},i);portraits+=await inspect('.portrait');}
 }
 assert(portraits>=966);
 await page.evaluate(()=>{$('team').value='Baltimore Orioles';selectTeam();});
 for(const appearance of ['light','dim','black']){
  await page.locator('[data-appearance-choice='+appearance+']').click();
  for(const width of [320,390,768,1440]){
   await page.setViewportSize({width,height:1100});
   await page.evaluate(()=>{renderPlayer('left',state.players.find(p=>p.name==='Jordan Westburg'));renderPlayer('right',state.players.find(p=>p.name==='Gunnar Henderson'));});
   await inspect('.portrait');
   const cards=await page.locator('.player').evaluateAll(es=>es.map(e=>{const a=e.getBoundingClientRect(),p=e.querySelector('.portrait').getBoundingClientRect(),b=e.querySelector('.player-body').getBoundingClientRect(),pick=e.querySelector('.pick-label').getBoundingClientRect();return {height:a.height,width:a.width,bodyBottom:b.bottom,cardBottom:a.bottom,photoHeight:p.height,bodyHeight:b.height,pickHeight:pick.height};}));
   assert(Math.abs(cards[0].height-cards[1].height)<1);assert(Math.abs(cards[0].width-cards[1].width)<1);for(const c of cards){assert(c.bodyBottom<=c.cardBottom+1);assert(c.height>=c.photoHeight+c.bodyHeight);assert(c.pickHeight>=44);}
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth),0);
  }
 }
 await page.setViewportSize({width:390,height:1100});console.log('FULL_MLB_FACE '+engine.name()+' '+(await page.locator('.match').screenshot()).toString('base64'));
 await page.evaluate(()=>{while(!state.done)choose('left');});
 for(const appearance of ['light','dim','black']){
  await page.locator('[data-appearance-choice='+appearance+']').click();
  for(const width of [320,390,768,1440]){
   await page.setViewportSize({width,height:1100});await inspect('.podium-photo');await inspect('#rankings .rank-thumb');
   await page.locator('#edit-ranking').click();await inspect('.ranking-editor-row .rank-thumb');await page.locator('#cancel-ranking-edits').click();
   await page.locator('#preview-player-pool').click();await inspect('.pool-player-photo');await page.locator('#roster-dialog-close').click();
  }
 }
 // Other leagues keep their original layout and comparison behavior.
 for(const sport of ['NFL','NBA']){await page.evaluate(s=>{selectSport(s);selectRankingMode('teams');start();choose('left');},sport);assert.equal(await page.evaluate(()=>state.comparisons),1);await page.reload();assert.equal(await page.evaluate(()=>state.comparisons),1);}
 assert.deepEqual(errors,[]);console.log('PASS '+engine.name()+': '+portraits+' MLB source portraits fit; comparison/results/editor/previews at 320/390/768/1440px in Light/Dim/Lights Out; aligned cards and NFL/NBA save controls');
 }finally{await browser.close();}}}finally{await new Promise(r=>server.close(r));}})().catch(e=>{console.error(e);process.exit(1)});
