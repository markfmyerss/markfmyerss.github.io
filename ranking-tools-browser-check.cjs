const {chromium,webkit}=require('@playwright/test'),assert=require('node:assert/strict'),fs=require('node:fs/promises'),http=require('node:http'),path=require('node:path');
(async()=>{
 const server=http.createServer(async(req,res)=>{try{let p=new URL(req.url,'http://localhost').pathname;if(p==='/')p='/index.html';const file=path.resolve('.','.'+p);res.setHeader('content-type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.png')?'image/png':file.endsWith('.svg')?'image/svg+xml':file.endsWith('.json')?'application/json':'text/html');res.end(await fs.readFile(file));}catch{res.statusCode=404;res.end();}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const root=process.env.PERSONAL_RANKINGS_URL||'http://127.0.0.1:'+server.address().port;
 try{for(const engine of [chromium,webkit]){
  const browser=await engine.launch();try{
   const page=await browser.newPage({viewport:{width:390,height:1000},isMobile:true,hasTouch:true});const errors=[];page.on('pageerror',e=>errors.push(e.message));
   await page.goto(root);await page.evaluate(()=>document.fonts.ready);
   await page.locator('#my-rankings').tap();await page.locator('.rankings-empty').waitFor();assert.equal(await page.locator('#ranking-tools-dialog').getAttribute('open'),'');await page.keyboard.press('Escape');
   // Real exclusion/undo/reload on a team ranking.
   await page.locator('#start').tap();const original=await page.evaluate(()=>JSON.stringify(state));
   const excludedId=await page.evaluate(()=>{const f=state.stack.at(-1);return f.left[f.i].id;});
   await page.locator('#exclude-left').tap();assert.deepEqual(await page.evaluate(()=>state.excluded),[excludedId]);
   await page.reload();assert.deepEqual(await page.evaluate(()=>state.excluded),[excludedId]);assert(await page.locator('#excluded-summary').isVisible());
   await page.locator('#view-excluded').tap();assert.equal(await page.locator('.excluded-player-list li').count(),1);const beforeDialog=await page.evaluate(()=>JSON.stringify(state));
   await page.keyboard.press('ArrowLeft');await page.keyboard.press('Control+z');assert.equal(await page.evaluate(()=>JSON.stringify(state)),beforeDialog);await page.keyboard.press('Escape');
   await page.locator('#undo').tap();assert.deepEqual(await page.evaluate(()=>JSON.parse(JSON.stringify(state))),JSON.parse(original));
   await page.locator('#exclude-right').tap();
   // Save a separate in-progress NBA position ranking.
   await page.evaluate(()=>{selectSport('NBA');selectRankingMode('positions');document.getElementById('position').value='PG';selectTeam();start();choose('left');});
   await page.locator('#exclude-left').tap();const nbaSave=await page.evaluate(()=>JSON.stringify(state));
   await page.locator('#my-rankings').tap();assert.equal(await page.locator('.saved-ranking').count(),2);
   await page.selectOption('#dashboard-sport','NFL');assert.equal(await page.locator('.saved-ranking').count(),1);
   await page.selectOption('#dashboard-sport','NBA');assert.equal(await page.locator('.saved-ranking').count(),1);
   await page.locator('#dashboard-search').fill('point guards');assert.equal(await page.locator('.saved-ranking').count(),1);
   const whileDashboard=await page.evaluate(()=>JSON.stringify(state));await page.keyboard.press('ArrowRight');assert.equal(await page.evaluate(()=>JSON.stringify(state)),whileDashboard);
   await page.locator('.saved-ranking-open').tap();assert.equal(await page.evaluate(()=>JSON.stringify(state)),nbaSave);
   // Finish with an independent deterministic preference; excluded players must stay absent.
   await page.evaluate(()=>{while(!state.done){const f=state.stack.at(-1);choose(f.left[f.i].name.localeCompare(f.right[f.j].name)>0?'left':'right');}});
   const initial=await page.evaluate(()=>state.sorted.map(p=>p.id)),rankKey=await page.evaluate(()=>keyFor(state.team,state.pos));
   assert.equal(await page.locator('#rankings>li').count(),initial.length);
   // Draft arrows and Cancel cannot alter saved results.
   await page.locator('#edit-ranking').tap();console.log('EDITOR_SCREENSHOT '+engine.name()+' '+(await page.locator('#ranking-tools-dialog').screenshot()).toString('base64'));const first=page.locator('.ranking-editor-row').first();await first.locator('.editor-down').tap();
   assert.deepEqual(await page.evaluate(()=>state.sorted.map(p=>p.id)),initial);
   await page.locator('#cancel-ranking-edits').tap();assert.deepEqual(await page.evaluate(()=>state.sorted.map(p=>p.id)),initial);
   // Direct rank entry and Save update podium, list, storage and export/share order.
   await page.locator('#edit-ranking').tap();const last=page.locator('.ranking-editor-row').last(),moved=await last.getAttribute('data-player-id');
   await last.locator('input').fill('1');await last.locator('.editor-move').tap();
   assert.equal(await page.locator('.ranking-editor-row').first().getAttribute('data-player-id'),moved);
   await page.locator('#save-ranking-edits').tap();const edited=await page.evaluate(()=>state.sorted.map(p=>p.id));assert.equal(edited[0],moved);assert.notDeepEqual(edited,initial);
   assert.equal(await page.locator('#top-three .podium-name').first().textContent(),await page.evaluate(()=>state.sorted[0].name));
   const image=await page.evaluate(async()=>{const r=await ResultsExport.createImage({team:state.team,pos:state.pos,players:state.sorted},{size:'1x1',type:'png',scope:'all'});return {ids:r.players,width:r.width,height:r.height,bytes:r.blob.size,type:r.blob.type};});assert.deepEqual(image.ids,edited);assert.equal(image.width,image.height);assert(image.bytes>1000);assert.equal(image.type,'image/png');
   const stored=await page.evaluate(k=>localStorage.getItem(k),rankKey);await page.reload();assert.deepEqual(await page.evaluate(()=>state.sorted.map(p=>p.id)),edited);assert.equal(await page.evaluate(k=>localStorage.getItem(k),rankKey),stored);
   const link=await page.evaluate(()=>encodeRankingLink(state));const shared=await browser.newPage({viewport:{width:390,height:1000},isMobile:true,hasTouch:true});
   await shared.goto(root.replace(/#.*$/,'')+new URL(link).hash);await shared.locator('#shared-notice').waitFor();assert.deepEqual(await shared.evaluate(()=>sharedRanking.sorted.map(p=>p.id)),edited);assert(await shared.locator('#edit-ranking').isHidden());await shared.close();
   await page.locator('#undo-result').tap();assert.deepEqual(await page.evaluate(()=>state.sorted.map(p=>p.id)),initial);
   await page.locator('#my-rankings').tap();await page.selectOption('#dashboard-status','done');assert.equal(await page.locator('.saved-ranking').count(),1);
   await page.selectOption('#dashboard-status','progress');assert.equal(await page.locator('.saved-ranking').count(),1);await page.locator('.saved-ranking-open').tap();assert.equal(await page.evaluate(()=>activeSport),'NFL');
   // Layout and appearance controls: My Rankings must be above and right-aligned with them.
   for(const appearance of ['light','dim','black']){
    await page.locator('[data-appearance-choice='+appearance+']').tap();
    for(const width of [320,375,390,430,768,1440]){
     await page.setViewportSize({width,height:1100});
     const layout=await page.evaluate(()=>{const r=e=>{const b=e.getBoundingClientRect();return {top:b.top,right:b.right,bottom:b.bottom};};return {overflow:document.documentElement.scrollWidth-innerWidth,account:r(document.getElementById('my-rankings')),appearance:r(document.querySelector('.appearance-options'))};});
     assert.equal(layout.overflow,0);assert(layout.account.bottom<=layout.appearance.top,'Dashboard overlaps appearance: '+JSON.stringify({appearance,width,...layout}));assert(Math.abs(layout.account.right-layout.appearance.right)<2,'Dashboard is not above appearance at right');
     await page.locator('#my-rankings').tap();assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth),0);
     assert.equal(await page.evaluate(()=>{const d=document.getElementById('ranking-tools-dialog').getBoundingClientRect();return d.left>=0&&d.right<=innerWidth&&d.top>=0&&d.bottom<=innerHeight;}),true,'Dialog leaves viewport');
     await page.keyboard.press('Escape');
    }
   }
   await page.setViewportSize({width:390,height:1100});await page.locator('#my-rankings').tap();
   console.log('RANKING_TOOLS_SCREENSHOT '+engine.name()+' '+(await page.locator('#ranking-tools-dialog').screenshot()).toString('base64'));
   await page.keyboard.press('Escape');console.log('HEADER_SCREENSHOT '+engine.name()+' '+(await page.locator('header').screenshot()).toString('base64'));assert.deepEqual(errors,[]);
   // Desktop drag and drop offers the same order editing as mobile buttons.
   const desktop=await browser.newPage({viewport:{width:1200,height:1000}});await desktop.goto(root);
   await desktop.evaluate(()=>{start();while(!state.done)choose('left');});await desktop.locator('#edit-ranking').click();
   const firstId=await desktop.locator('.ranking-editor-row').first().getAttribute('data-player-id'),secondId=await desktop.locator('.ranking-editor-row').nth(1).getAttribute('data-player-id');
   await desktop.locator('.ranking-editor-row').first().dragTo(desktop.locator('.ranking-editor-row').nth(1));assert.equal(await desktop.locator('.ranking-editor-row').first().getAttribute('data-player-id'),secondId);
   await desktop.locator('#save-ranking-edits').click();assert.equal(await desktop.evaluate(()=>state.sorted[1].id),firstId);await desktop.close();
   // Blocked storage still works for this visit.
   const blocked=await browser.newPage();await blocked.addInitScript(()=>{Object.defineProperty(window,'localStorage',{get(){throw Error('blocked');}});});await blocked.goto(root);
   await blocked.evaluate(()=>{start();excludePlayer('left');});await blocked.locator('#my-rankings').click();assert.equal(await blocked.locator('.saved-ranking').count(),1);await blocked.close();
   console.log('PASS '+engine.name()+': exclusions, undo/reload, editor Save/Cancel/drag, exact shared order, mixed-sport dashboard, three appearances, 320–1440px and blocked storage');
  }finally{await browser.close();}
 }}finally{await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exit(1)});
