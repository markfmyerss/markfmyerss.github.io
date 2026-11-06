// Browser checks and screenshots run on GitHub; no browser is installed on the user's Mac.
const {chromium}=require('@playwright/test'),http=require('node:http'),fs=require('node:fs/promises'),path=require('node:path'),assert=require('node:assert/strict');
(async()=>{
 const server=http.createServer(async(req,res)=>{try{const file=path.resolve('.',decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/$/,'/index.html').slice(1));if(!file.startsWith(process.cwd()+path.sep))throw Error('path');const body=await fs.readFile(file);res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':'text/html');res.end(body);}catch{res.statusCode=404;res.end('Not found');}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const url='http://127.0.0.1:'+server.address().port;

 const browser=await chromium.launch();try{
 const page=await browser.newPage({viewport:{width:390,height:844}}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 // Block web fonts in this page to verify the fallback works without that service.
 await page.route(/fonts\.(googleapis|gstatic)\.com/,route=>route.abort());

 // A previous Original preference must not override the permanent design.
 await page.addInitScript(()=>localStorage.setItem('nfl-sorter-design-v1','original'));
 await page.goto(url);
 assert.equal(await page.locator('[data-design-choice]').count(),0);
 assert.match(await page.locator('html').evaluate(el=>getComputedStyle(el).fontFamily),/DM Sans/);
 await page.click('#start');await page.click('#left');
 const saved=await page.evaluate(()=>Object.fromEntries(Object.entries(localStorage).filter(([k])=>k.startsWith('nfl-sorter-v3:'))));
 await page.reload();
 assert.match(await page.locator('html').evaluate(el=>getComputedStyle(el).fontFamily),/DM Sans/);
 assert.deepEqual(await page.evaluate(()=>Object.fromEntries(Object.entries(localStorage).filter(([k])=>k.startsWith('nfl-sorter-v3:')))),saved);
 await page.click('#undo');assert.match(await page.locator('#progress').textContent(),/^0 picks/);
 const teams=await page.locator('#team option').evaluateAll(os=>os.map(o=>o.value));
 assert.equal(teams.length,32);
 await fs.mkdir('qa',{recursive:true});
 for(const width of [320,390,768,1440]){
  await page.setViewportSize({width,height:1000});
  for(const team of teams){
   await page.selectOption('#team',team);
   if(await page.locator('#start').isVisible())await page.click('#start');
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'team overflow '+team+' '+width);
   assert.match(await page.locator('body').evaluate(el=>getComputedStyle(el).backgroundImage),/radial-gradient/);
  }
  await page.evaluate(()=>scrollTo(0,0));
  await page.screenshot({path:'qa/design-fresh-'+width+'.png',fullPage:true});
 }
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.hover('#left');
 assert.equal(await page.locator('#left').evaluate(el=>getComputedStyle(el).transform),'none');
 assert.equal(await page.locator('#left').evaluate(el=>getComputedStyle(el).transitionDuration),'0s');
 await page.emulateMedia({reducedMotion:'no-preference'});
 // Also exercise the normal font-loading path in a separate page.
 const normal=await browser.newPage({viewport:{width:390,height:844}});
 await normal.goto(url);await normal.evaluate(()=>document.fonts.ready);
 await normal.screenshot({path:'qa/design-fresh-fonts.png',fullPage:true});
 assert.ok(await normal.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 assert.deepEqual(errors,[]);
 console.log('PASS permanent Fresh design despite old preferences; rankings preserved; 32 team layouts at 320/390/768/1440; font fallback; reduced motion');
 }finally{await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
