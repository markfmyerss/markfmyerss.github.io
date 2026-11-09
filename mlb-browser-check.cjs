const {chromium,webkit}=require('@playwright/test'),fs=require('node:fs/promises'),http=require('node:http'),path=require('node:path'),assert=require('node:assert/strict');
(async()=>{const server=http.createServer(async(req,res)=>{try{const p=path.resolve('.','.'+new URL(req.url,'http://x').pathname.replace(/^\/$/,'/index.html'));res.setHeader('content-type',p.endsWith('.js')?'text/javascript':p.endsWith('.css')?'text/css':p.endsWith('.jpg')?'image/jpeg':p.endsWith('.svg')?'image/svg+xml':p.endsWith('.json')?'application/json':'text/html');res.end(await fs.readFile(p));}catch{res.statusCode=404;res.end();}});await new Promise(r=>server.listen(0,'127.0.0.1',r));const root=process.env.MLB_CHECK_URL||'http://127.0.0.1:'+server.address().port;
try{for(const engine of [chromium,webkit]){const browser=await engine.launch();try{
 const page=await browser.newPage({viewport:{width:390,height:1100},isMobile:true,hasTouch:true}),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(root);await page.evaluate(()=>document.fonts.ready);
 await page.evaluate(()=>{start();choose('left');selectSport('NBA');start();choose('right');});const old=await page.evaluate(()=>Object.fromEntries([...memory].filter(([k])=>/sorter-v[13]:/.test(k))));
 await page.locator('[data-sport="MLB"]').tap();assert.equal(await page.evaluate(()=>activeSport),'MLB');assert.equal(await page.locator('#conference-picker button').count(),2);assert.equal(await page.locator('#sport-picker button').count(),3);
 const teams=await page.evaluate(()=>teamsFor('MLB'));
 for(const team of teams){
  await page.evaluate(team=>{$('team').value=team;$('position').value='ALL';selectTeam();start();},team);
  await page.locator('#left img').waitFor();assert.equal(await page.locator('#left').evaluate(e=>getComputedStyle(e.querySelector('.pick-label')).backgroundColor),await page.evaluate(()=>{const c=ALL_TEAM_INFO[state.team].colors.primary;return 'rgb('+c.slice(1).match(/../g).map(x=>parseInt(x,16)).join(', ')+')';}));
  await page.locator('#left').tap();await page.locator('#exclude-right').tap();assert.equal(await page.evaluate(()=>state.excluded.length),1);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth),0);
 }
 await page.evaluate(()=>{selectRankingMode('positions');});
 for(const pos of ['C','1B','2B','3B','SS','LF','CF','RF','DH','SP','RP']){
  await page.selectOption('#position',pos);await page.locator('#start').tap();await page.locator('#left').tap();await page.reload();
  assert.equal(await page.evaluate(()=>state.pos),pos);assert(await page.evaluate(()=>valid(state,state.team,state.pos)));
  const ctx=await page.evaluate(()=>{const c=state.stack.at(-1);return [c.left[c.i],c.right[c.j]].map(p=>({id:p.id,roles:p.positions}));});for(const p of ctx)assert(p.roles.includes(pos));
  for(const appearance of ['light','dim','black']){
   await page.locator('[data-appearance-choice='+appearance+']').tap();
   for(const width of [320,390,430,768,1440]){await page.setViewportSize({width,height:1100});const rects=await page.evaluate(()=>['left','right'].map(id=>{const e=$(id),r=e.getBoundingClientRect();return {w:r.width,h:r.height,top:r.top,filter:getComputedStyle(e).filter};}));assert(Math.abs(rects[0].w-rects[1].w)<1);assert(Math.abs(rects[0].h-rects[1].h)<1);assert(Math.abs(rects[0].top-rects[1].top)<1);assert(rects.every(r=>r.filter==='none'));assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth),0);}
  }
 }
 await page.setViewportSize({width:390,height:1100});await page.selectOption('#position','SP');await page.evaluate(()=>{const o=state.players.find(p=>p.mlbId===660271);renderPlayer('left',o);});assert.match(await page.locator('#left .player-meta').textContent(),/^SP /);
 await page.locator('#exclude-right').tap();await page.evaluate(()=>{while(!state.done)choose('left');});
 const result=await page.evaluate(()=>state.sorted.map(p=>p.id));await page.locator('#edit-ranking').tap();const last=page.locator('.ranking-editor-row').last();const moved=await last.getAttribute('data-player-id');await last.locator('input').fill('1');await last.locator('.editor-move').tap();await page.locator('#save-ranking-edits').tap();assert.equal(await page.evaluate(()=>state.sorted[0].id),moved);
 const exports=await page.evaluate(async()=>{const out=[];for(const size of ['1x1','3x4','4x5','9x16']){const r=await ResultsExport.createImage({team:state.team,pos:state.pos,players:state.sorted},{size,scope:'all',type:'png'});out.push({ids:r.players,pages:r.pages,missing:r.missingPhotos,logo:r.logoIncluded,type:r.blob.type});}return out;});const expected=await page.evaluate(()=>state.sorted.map(p=>p.id));for(const r of exports){assert.deepEqual(r.ids,expected);assert.equal(r.pages,1);assert.equal(r.missing,0);assert(r.logo);assert.equal(r.type,'image/png');}
 const hash=await page.evaluate(()=>new URL(encodeRankingLink(state)).hash),shared=await browser.newPage();await shared.goto(root+hash);await shared.locator('#shared-notice').waitFor();assert.deepEqual(await shared.evaluate(()=>sharedRanking.sorted.map(p=>p.id)),expected);await shared.close();
 await page.locator('#my-rankings').tap();await page.selectOption('#dashboard-sport','MLB');assert.equal(await page.locator('.saved-ranking').count(),41);await page.keyboard.press('Escape');
 await page.evaluate(()=>{selectRankingMode('teams');$('team').value='Toronto Blue Jays';$('position').value='ALL';selectTeam();const p=rosterFor(state.team).find(p=>p.name==='Ernie Clement');renderPlayer('left',p);});assert.match(await page.locator('#left .player-meta').textContent(),/2B\/3B\/SS/);
 await page.locator('[data-appearance-choice=light]').tap();console.log('MLB_SCREENSHOT '+engine.name()+' '+(await page.locator('header').screenshot()).toString('base64'));
 const saved=await page.evaluate(keys=>Object.fromEntries(keys.map(k=>[k,read(k)])),Object.keys(old));for(const [k,v]of Object.entries(old))assert.equal(saved[k],v);
 assert.deepEqual(errors,[]);console.log('PASS '+engine.name()+': 30 MLB teams, 11 position pools, 3 appearances, 320–1440px, Ohtani roles, Clement, editing, exclusions, all mobile image sizes, shared order and My Rankings');
 }finally{await browser.close();}}}finally{await new Promise(r=>server.close(r));}})().catch(e=>{console.error(e);process.exit(1)});
