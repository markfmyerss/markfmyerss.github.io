// Browser checks and screenshots run on GitHub; no browser is installed on the user's Mac.
const {chromium,webkit}=require('@playwright/test'),http=require('node:http'),fs=require('node:fs/promises'),path=require('node:path'),assert=require('node:assert/strict');
(async()=>{
 const server=http.createServer(async(req,res)=>{try{const file=path.resolve('.',decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/$/,'/index.html').slice(1));if(!file.startsWith(process.cwd()+path.sep))throw Error('path');const body=await fs.readFile(file);res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':'text/html');res.end(body);}catch{res.statusCode=404;res.end('Not found');}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const url='http://127.0.0.1:'+server.address().port;


 try{
 await fs.mkdir('qa',{recursive:true});
 for(const engine of [chromium,webkit]){
  const browser=await engine.launch();
  try{
   for(const width of engine===chromium?[320,390,768,1440]:[390]){
    const page=await browser.newPage({viewport:{width,height:1000}}),errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.goto(url);
    const introHeight=await page.locator('header').evaluate(e=>e.getBoundingClientRect().height);
    await page.selectOption('#position','QB');await page.click('#start');
    assert.equal(await page.locator('body').getAttribute('data-view'),'sorting');
    assert.ok(await page.locator('header').evaluate(e=>e.getBoundingClientRect().height)<introHeight/2);
    assert.ok(await page.locator('header h1').isHidden());
    let previous=0,picks=0;
    while(await page.locator('#sort').isVisible()){
     const value=Number(await page.locator('#progress-track').getAttribute('aria-valuenow'));
     assert.ok(value>=previous&&value<100);previous=value;
     assert.match(await page.locator('#progress-track').getAttribute('aria-valuetext'),/^At least \d+% complete\.$/);
     assert.doesNotMatch(await page.locator('#progress').textContent(),/remaining/i);
     await page.click('#left');if(++picks>30)throw Error('QB ranking did not complete');
    }
    assert.equal(await page.locator('body').getAttribute('data-view'),'results');
    const ranks=await page.locator('.rank-text strong').allTextContents();
    assert.deepEqual(await page.locator('.podium-name').allTextContents(),ranks.slice(0,3));
    await page.click('#share-ranking');
    assert.equal(await page.evaluate(()=>document.activeElement.id),'export-heading');
    assert.ok(await page.locator('#export-preview').isVisible());
    if(width<=700){
     assert.equal(await page.locator('#export-size option').count(),4);
     assert.equal(await page.locator('#export-scope option').count(),3);
     assert.ok(await page.locator('#export-type-field').isHidden());
     assert.ok(await page.locator('#export-all').isHidden());
    }
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    await page.screenshot({path:'qa/flow-results-'+engine.name()+'-'+width+'.png',fullPage:true});
    await page.reload();
    assert.deepEqual(await page.locator('.podium-name').allTextContents(),ranks.slice(0,3));
    await page.click('#undo-result');
    assert.equal(await page.locator('body').getAttribute('data-view'),'sorting');
    await page.emulateMedia({reducedMotion:'reduce'});
    await page.click('#left');
    assert.equal(await page.locator('#left').evaluate(e=>e.getAnimations().length),0);
    page.on('dialog',d=>d.accept());await page.click('#reset');
    assert.equal(await page.locator('body').getAttribute('data-view'),'intro');
    assert.ok(await page.locator('header h1').isVisible());
    // Complete again using keyboard, then check undo across the finish.
    await page.click('#start');await page.locator('#left').focus();
    let keys=0;while(await page.locator('#sort').isVisible()){await page.keyboard.press('ArrowRight');if(++keys>30)throw Error('Keyboard sorting stalled');}
    await page.click('#undo-result');assert.ok(await page.locator('#sort').isVisible());
    assert.deepEqual(errors,[]);await page.close();
    console.log('PASS focused view, progress, top three, share and undo: '+engine.name()+' '+width);
   }
   // Small result sets and unavailable portraits must stay usable.
   const small=await browser.newPage({viewport:{width:320,height:900}});
   await small.route('https://static.**/*',r=>r.abort());
   for(const count of [1,2]){
    await small.goto(url);await small.evaluate(()=>localStorage.clear());await small.reload();
    await small.evaluate(n=>{const team=document.getElementById('team').value;ROSTERS[team]=ROSTERS[team].slice(0,n);},count);
    await small.click('#start');
    if(count===2)await small.click('#left');
    assert.equal(await small.locator('.podium-card').count(),count);
    assert.ok(await small.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    await small.waitForFunction(()=>[...document.querySelectorAll('.podium-photo')].every(e=>e.querySelector('.fallback')));
   }
   await small.close();
  }finally{await browser.close();}
 }
 console.log('PASS small rankings and portrait fallbacks in Chromium and WebKit');
 }finally{await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
