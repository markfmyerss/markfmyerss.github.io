// Runs on GitHub with Chromium and WebKit; native iOS Photos UI is not automated.
const {chromium,webkit,devices}=require('@playwright/test'),http=require('node:http'),fs=require('node:fs/promises'),path=require('node:path'),assert=require('node:assert/strict');
(async()=>{
 const server=http.createServer(async(req,res)=>{try{const file=path.resolve('.',decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/$/,'/index.html').slice(1));if(!file.startsWith(process.cwd()+path.sep))throw Error('path');res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':'text/html');res.end(await fs.readFile(file));}catch{res.statusCode=404;res.end('not found');}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const url='http://127.0.0.1:'+server.address().port;
 try{
 for(const [name,engine] of [['Chromium',chromium],['WebKit',webkit]]){
  const browser=await engine.launch();
  try{
   const context=await browser.newContext({...devices['iPhone 13']}),page=await context.newPage(),downloads=[],errors=[];
   page.on('download',d=>downloads.push(d));page.on('pageerror',e=>errors.push(e.message));await page.goto(url);
   await page.evaluate(()=>{
    state={team:'Baltimore Ravens',pos:'ALL',players:ROSTERS['Baltimore Ravens'],stack:[],history:[],comparisons:200,done:true,sorted:[...ROSTERS['Baltimore Ravens']].reverse()};save();render();
   });
   const sizes=await page.locator('#export-size option').evaluateAll(os=>os.map(o=>o.value));
   assert.deepEqual(sizes,['1x1','3x4','4x5','9x16']);
   assert.ok(await page.locator('#export-type-field').isHidden());assert.ok(await page.locator('#export-type').isDisabled());assert.ok(await page.locator('#export-all').isHidden());assert.ok(await page.locator('#export-all').isDisabled());
   assert.deepEqual(await page.locator('#export-scope option').evaluateAll(os=>os.map(o=>o.value)),['all','10','25']);
   console.log('PASS '+name+' iPhone: four sizes, three ranges, no file format or ZIP');

   // Hidden desktop format must never affect the phone's PNG image.
   await page.evaluate(()=>{document.getElementById('export-type').value='jpg';});
   await page.click('#export-preview');
   await page.waitForFunction(()=>!document.getElementById('export-download').disabled&&document.getElementById('export-preview-image').naturalWidth===1080);
   assert.equal(await page.locator('#export-download').textContent(),'Save image');
   assert.match(await page.locator('#export-preview-image').getAttribute('src'),/^data:image\/png;base64,/);
   assert.equal(await page.locator('#export-page-label').textContent(),'Page 1 of 6');
   assert.equal(downloads.length,0);
   if(name==='WebKit'&&await page.evaluate(()=>CSS.supports('-webkit-touch-callout','default')))assert.equal(await page.locator('#export-preview-image').evaluate(i=>getComputedStyle(i).getPropertyValue('-webkit-touch-callout')),'default');
   console.log('PASS '+name+' iPhone: real PNG image is shown directly; no automatic download');

   // Verify native sharing receives a ready PNG during the trusted button tap.
   await page.evaluate(()=>{
    window.shared=[];
    Object.defineProperty(navigator,'canShare',{configurable:true,value:data=>data.files?.length===1&&data.files[0].type==='image/png'});
    Object.defineProperty(navigator,'share',{configurable:true,value:async data=>{const f=data.files[0];window.shared.push({type:f.type,name:f.name,size:f.size,active:navigator.userActivation?.isActive??null});}});
   });
   await page.click('#export-download');
   const shared=await page.evaluate(()=>window.shared);
   assert.equal(shared.length,1);assert.equal(shared[0].type,'image/png');assert.match(shared[0].name,/-01-of-06\.png$/);assert.ok(shared[0].size>2000);if(shared[0].active!==null)assert.equal(shared[0].active,true);
   assert.equal(downloads.length,0);
   console.log('PASS '+name+' iPhone: Save image invokes file sharing from the tap with a PNG');

   await page.evaluate(()=>Object.defineProperty(navigator,'canShare',{configurable:true,value:()=>false}));
   await page.click('#export-download');assert.match(await page.locator('#export-status').textContent(),/Touch and hold.*Save Image/);
   assert.ok(await page.locator('#export-preview-image').isVisible());assert.equal(downloads.length,0);
   console.log('PASS '+name+' iPhone: unavailable sharing falls back to press-and-hold image saving');

   await page.click('#export-next');await page.waitForFunction(()=>document.getElementById('export-page-label').textContent==='Page 2 of 6'&&!document.getElementById('export-download').disabled);
   assert.match(await page.locator('#export-preview-image').getAttribute('src'),/^data:image\/png;base64,/);
   assert.match(await page.locator('#export-status').textContent(),/Ranks 11–20/);
   for(const [scope,pages] of [['10',1],['25',3],['all',6]]){
    await page.selectOption('#export-scope',scope);await page.click('#export-preview');await page.waitForFunction(()=>!document.getElementById('export-download').disabled);
    assert.equal(await page.locator('#export-page-label').textContent(),'Page 1 of '+pages);
    assert.ok(await page.locator('#export-all').isHidden());
   }
   console.log('PASS '+name+' iPhone: All, Top 10, Top 25 and individual page navigation');

   for(const [size,width,height] of [['1x1',1080,1080],['3x4',1080,1440],['4x5',1080,1350],['9x16',1080,1920]]){
    await page.selectOption('#export-size',size);await page.click('#export-preview');
    await page.waitForFunction(({width,height})=>{const i=document.getElementById('export-preview-image');return !document.getElementById('export-download').disabled&&i.naturalWidth===width&&i.naturalHeight===height;},{width,height});
    assert.match(await page.locator('#export-preview-image').getAttribute('src'),/^data:image\/png;base64,/);
   }
   console.log('PASS '+name+' iPhone: all four choices create the exact requested PNG dimensions');

   await page.evaluate(()=>{
    Object.defineProperty(navigator,'canShare',{configurable:true,value:()=>true});
    Object.defineProperty(navigator,'share',{configurable:true,value:async()=>{throw new DOMException('cancelled','AbortError');}});
   });
   await page.click('#export-download');assert.ok(await page.locator('#export-preview-image').isVisible());assert.equal(downloads.length,0);

   await page.setViewportSize({width:844,height:390});assert.equal(await page.locator('#export-size option').count(),4);assert.ok(await page.locator('#export-all').isHidden());
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   await page.setViewportSize({width:320,height:1000});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   await fs.mkdir('qa',{recursive:true});await page.locator('.export-panel').screenshot({path:'qa/mobile-save-'+name.toLowerCase()+'.png'});
   assert.deepEqual(errors,[]);console.log('PASS '+name+' mobile landscape/narrow layout and share cancellation; no exceptions');
  }finally{await browser.close();}
 }

 const desktop=await chromium.launch();try{
  const page=await desktop.newPage({viewport:{width:1440,height:1000}});await page.goto(url);
  await page.evaluate(()=>{state={team:'Baltimore Ravens',pos:'ALL',players:ROSTERS['Baltimore Ravens'],stack:[],history:[],comparisons:200,done:true,sorted:ROSTERS['Baltimore Ravens']};render();});
  assert.equal(await page.locator('#export-size option').count(),9);assert.ok(await page.locator('#export-type-field').isVisible());assert.ok(await page.locator('#export-all').isVisible());
  await page.selectOption('#export-size','16x9');await page.selectOption('#export-type','webp');
  await page.setViewportSize({width:390,height:844});await page.waitForFunction(()=>document.getElementById('export-size').options.length===4);
  assert.equal(await page.locator('#export-size').inputValue(),'1x1');assert.ok(await page.locator('#export-type-field').isHidden());assert.ok(await page.locator('#export-all').isHidden());
  await page.setViewportSize({width:1440,height:1000});await page.waitForFunction(()=>document.getElementById('export-size').options.length===9);
  assert.ok(await page.locator('#export-type-field').isVisible());assert.equal(await page.locator('#export-type').inputValue(),'webp');assert.ok(await page.locator('#export-all').isVisible());
  console.log('PASS desktop options remain available; resizing switches modes and resets unsupported mobile sizes');
 }finally{await desktop.close();}
 }finally{await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
