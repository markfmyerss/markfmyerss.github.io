const {chromium,webkit}=require('@playwright/test'),assert=require('node:assert/strict'),fs=require('node:fs/promises'),http=require('node:http'),path=require('node:path');
(async()=>{const server=http.createServer(async(req,res)=>{try{const f=path.resolve('.','.'+new URL(req.url,'http://x').pathname.replace(/^\/$/,'/index.html'));res.setHeader('content-type',f.endsWith('.js')?'text/javascript':f.endsWith('.css')?'text/css':f.endsWith('.svg')?'image/svg+xml':f.endsWith('.png')?'image/png':f.endsWith('.json')?'application/json':'text/html');res.end(await fs.readFile(f));}catch{res.statusCode=404;res.end();}});await new Promise(r=>server.listen(0,'127.0.0.1',r));const root=process.env.CARD_APPEARANCE_PREVIEW_URL||'http://127.0.0.1:'+server.address().port+'/previews/card-appearance/index.html';
try{for(const engine of [chromium,webkit]){const browser=await engine.launch();try{
 const page=await browser.newPage({viewport:{width:390,height:1100}}),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.addInitScript(()=>localStorage.setItem('main-save-sentinel','unchanged'));await page.goto(root);await page.evaluate(()=>document.fonts.ready);
 await page.addStyleTag({content:'*{transition:none!important;animation:none!important}'});
 const check=async selector=>{const rows=await page.locator(selector).evaluateAll(es=>es.map(e=>{const s=getComputedStyle(e);return {bg:s.backgroundColor,image:s.backgroundImage};}));assert(rows.length>0,selector);const mode=await page.locator('html').getAttribute('data-appearance'),expected={light:'rgb(255, 253, 248)',dim:'rgb(25, 36, 55)',black:'rgb(0, 0, 0)'}[mode];for(const r of rows){assert.equal(r.bg,expected,selector+' '+mode);assert.equal(r.image,'none');}};
 for(const sport of ['NFL','NBA','MLB'])for(const ranking of ['teams','positions']){
  await page.evaluate(({sport,ranking})=>{selectSport(sport);selectRankingMode(ranking);start();},{sport,ranking});
  for(const mode of ['light','dim','black']){
   await page.locator('[data-appearance-choice='+mode+']').click();
   for(const width of [320,390,1440]){
    await page.setViewportSize({width,height:1100});await check('.player,.portrait');
    await page.locator('#left').hover();await check('.player');
    const picks=await page.locator('.player').evaluateAll(es=>es.map(e=>{const s=getComputedStyle(e.querySelector('.pick-label'));return {bg:s.backgroundColor,primary:getComputedStyle(e).getPropertyValue('--primary').trim()};}));for(const p of picks)assert.equal(p.bg,'rgb('+p.primary.slice(1).match(/../g).map(x=>parseInt(x,16)).join(', ')+')');
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth),0);
   }
  }
  await page.evaluate(()=>{state.done=true;state.sorted=includedPlayers(state);state.stack=[];save();render();});
  for(const mode of ['light','dim','black']){
   await page.locator('[data-appearance-choice='+mode+']').click();await check('.podium-card,.podium-photo,#rankings .rank-thumb');
   await page.locator('#edit-ranking').click();await check('.ranking-editor-row .rank-thumb');await page.locator('#cancel-ranking-edits').click();
   await page.locator('#preview-player-pool').click();await check('.pool-player-photo');await page.locator('#roster-dialog-close').click();
  }
 }
 await page.evaluate(()=>{selectSport('NBA');selectRankingMode('teams');start();});await page.setViewportSize({width:390,height:1100});
 for(const mode of ['light','dim','black']){await page.locator('[data-appearance-choice='+mode+']').click();await check('.player,.portrait');if(engine.name()==='chromium')console.log('CARD_APPEARANCE_SAMPLE '+mode+' '+(await page.locator('.match').screenshot()).toString('base64'));}
 await page.locator('[data-card-trial=off]').click();assert.equal(await page.locator('html').getAttribute('data-card-preview'),'off');assert.notEqual(await page.locator('.portrait').first().evaluate(e=>getComputedStyle(e).backgroundImage),'none');
 await page.locator('[data-card-trial=on]').click();await check('.player,.portrait');
 await page.locator('#left').click();const saved=await page.evaluate(()=>JSON.stringify(state));await page.reload();assert.equal(await page.evaluate(()=>JSON.stringify(state)),saved);await check('.player,.portrait');
 const storage=await page.evaluate(()=>Object.fromEntries(Object.entries(localStorage)));assert.equal(storage['main-save-sentinel'],'unchanged');assert(Object.keys(storage).every(k=>k==='main-save-sentinel'||k.startsWith('fan-favorites-card-appearance-preview-v1:')),'Trial wrote live-site storage');assert.deepEqual(errors,[]);
 console.log('PASS '+engine.name()+': NFL/NBA/MLB; teams and positions; three appearances at 320/390/1440; comparison, podium, results, editor and preview thumbnails; primary buttons, toggle and isolated saves');
 }finally{await browser.close();}}}finally{await new Promise(r=>server.close(r));}})().catch(e=>{console.error(e);process.exit(1)});
