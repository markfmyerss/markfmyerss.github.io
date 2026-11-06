// Browser checks and screenshots run on GitHub; no browser is installed on the user's Mac.
const {chromium}=require('@playwright/test'),http=require('node:http'),fs=require('node:fs/promises'),path=require('node:path'),assert=require('node:assert/strict');
(async()=>{
 const server=http.createServer(async(req,res)=>{try{const file=path.resolve('.',decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/$/,'/index.html').slice(1));if(!file.startsWith(process.cwd()+path.sep))throw Error('path');const body=await fs.readFile(file);res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':'text/html');res.end(body);}catch{res.statusCode=404;res.end('Not found');}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const url='http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch();try{
 const page=await browser.newPage({viewport:{width:390,height:844}}),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(url);
 assert.equal(await page.locator('.division-button').count(),4);
 assert.equal(await page.locator('.conference-button').count(),2);
 for(const division of ['AFC North','AFC East','AFC South','AFC West','NFC North','NFC East','NFC South','NFC West']){
  const conference=division.split(' ')[0];await page.locator('.conference-button').filter({hasText:conference}).click();
  await page.locator('.division-button').filter({hasText:division}).click();
  assert.equal(await page.locator('.team-tile').count(),4);
  const teams=await page.locator('.team-tile').evaluateAll(bs=>bs.map(b=>b.dataset.team));
  for(const team of teams){
   await page.selectOption('#team',team);await page.selectOption('#position','QB');
   if(await page.locator('#start').isVisible())await page.click('#start');
   assert.equal(await page.locator('.team-tile[aria-pressed=true]').getAttribute('data-team'),team);
   await page.waitForFunction(()=>[...document.querySelectorAll('.portrait img')].length===2&&[...document.querySelectorAll('.portrait img')].every(i=>i.complete&&i.naturalWidth>0),{},{timeout:30000});
   const before=await page.locator('#progress').textContent();await page.click('#left');await page.click(await page.locator('#results').isVisible()?'#undo-result':'#undo');assert.equal(await page.locator('#progress').textContent(),before);
   let n=0;while(await page.locator('#sort').isVisible()){await page.click('#left');if(++n>30)throw Error('QB sorting did not finish');}
   assert.ok(await page.locator('.rank').count()>=2);
   if(conference==='NFC'){
    await page.click('#export-preview');await page.waitForFunction(()=>!document.getElementById('export-download').disabled&&document.getElementById('export-preview-image').naturalWidth===1080);
    assert.match(await page.locator('#export-preview-image').getAttribute('src'),/^data:image\/png;base64,/);assert.ok(await page.locator('#export-type-field').isHidden());assert.ok(await page.locator('#export-all').isHidden());
    console.log('PASS NFC mobile PNG export: '+team);
   }
   await page.click('#undo-result');assert.ok(await page.locator('#sort').isVisible());
   console.log('PASS browser team, portraits, sorting and undo: '+team);
  }
 }
 await page.selectOption('#team','Los Angeles Chargers');await page.selectOption('#position','ALL');if(await page.locator('#start').isVisible())await page.click('#start');await page.click('#left');
 const saved=await page.locator('#progress').textContent();await page.reload();assert.equal(await page.locator('#progress').textContent(),saved);assert.equal(await page.locator('#division-picker [aria-pressed=true]').textContent(),'AFC West');
 await fs.mkdir('qa',{recursive:true});
 for(const width of [320,390,768,1440]){
  await page.setViewportSize({width,height:1000});await page.evaluate(()=>scrollTo(0,0));assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'layout overflow '+width);
  await page.screenshot({path:'qa/all-32-'+width+'.png',fullPage:true});console.log('PASS viewport '+width+'px');
 }
 assert.deepEqual(errors,[]);console.log('PASS reload and division restoration; no browser errors');
 }finally{await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
