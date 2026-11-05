// All generated test downloads remain on GitHub's runner.
const {chromium}=require('@playwright/test'),http=require('node:http'),fs=require('node:fs/promises'),path=require('node:path'),assert=require('node:assert/strict'),{execFileSync}=require('node:child_process');
(async()=>{
 const server=http.createServer(async(req,res)=>{try{const file=path.resolve('.',decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/$/,'/index.html').slice(1));if(!file.startsWith(process.cwd()+path.sep))throw Error('path');res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':'text/html');res.end(await fs.readFile(file));}catch{res.statusCode=404;res.end('not found');}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const url='http://127.0.0.1:'+server.address().port,browser=await chromium.launch();
 try{
  const page=await browser.newPage({viewport:{width:390,height:844}}),errors=[],downloads=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('download',d=>downloads.push(d));
  await page.goto(url);assert.equal(downloads.length,0);
  // Complete a small ranking through the actual controls to check integration.
  await page.selectOption('#position','QB');await page.click('#start');
  while(await page.locator('#sort').isVisible())await page.click('#left');
  assert.ok(await page.locator('.export-panel').isVisible());assert.equal(downloads.length,0);
  await page.click('#export-preview');await page.waitForFunction(()=>!document.getElementById('export-download').disabled);
  assert.equal(downloads.length,0,'preview must not start a download');
  await page.waitForFunction(()=>document.getElementById('export-preview-image').complete&&document.getElementById('export-preview-image').naturalWidth>0);
  const realPreview=await page.locator('#export-preview-image').evaluate(i=>({width:i.naturalWidth,height:i.naturalHeight}));
  assert.deepEqual(realPreview,{width:1080,height:1080});
  console.log('PASS real completed ranking enables export; preview downloads nothing');

  const variants=await page.evaluate(async()=>{
   const result={team:'Baltimore Ravens',pos:'ALL',players:[...ROSTERS['Baltimore Ravens']].reverse()},log=[];
   for(const size of ResultsExport.SIZES)for(const type of Object.keys(ResultsExport.TYPES)){
    const options={size:size.id,type,scope:'all'},plan=ResultsExport.plan(result,options),seen=[];
    for(let index=0;index<plan.pages;index++){
     const image=await ResultsExport.createImage(result,options,index),bitmap=await createImageBitmap(image.blob);
     if(bitmap.width!==size.width||bitmap.height!==size.height)throw Error('Wrong encoded dimensions '+size.id);
     if(image.blob.type!==ResultsExport.TYPES[type].mime)throw Error('Wrong file encoding '+type);
     if(image.blob.size<2000)throw Error('Image is empty');
     seen.push(...image.players);bitmap.close();
    }
    if(JSON.stringify(seen)!==JSON.stringify(result.players.map(p=>p.id)))throw Error('Missing, duplicated or reordered players');
    log.push(size.id+' '+type+' '+plan.pages+' pages');
   }
   // Verify top-10 and top-25 ranges include the correct leading subset.
   for(const scope of ['10','25']){
    const options={size:'1x1',type:'png',scope},plan=ResultsExport.plan(result,options),seen=[];
    for(let i=0;i<plan.pages;i++)seen.push(...(await ResultsExport.createImage(result,options,i)).players);
    if(JSON.stringify(seen)!==JSON.stringify(result.players.slice(0,Number(scope)).map(p=>p.id)))throw Error('Wrong top range');
   }
   return log;
  });
  console.log('PASS all '+variants.length+' size/encoding variants decode correctly; every page preserves full ranking order');
  console.log('PASS top-10 and top-25 image ranges');

  // Track actual text rendering as an independent check of the visible ranking.
  const drawn=await page.evaluate(async()=>{
   const result={team:'Baltimore Ravens',pos:'ALL',players:ROSTERS['Baltimore Ravens'].slice(0,3)},names=[],original=CanvasRenderingContext2D.prototype.fillText;
   CanvasRenderingContext2D.prototype.fillText=function(value,...args){names.push(value);return original.call(this,value,...args);};
   try{await ResultsExport.createImage(result,{size:'4x5',type:'png',scope:'all'},0);}finally{CanvasRenderingContext2D.prototype.fillText=original;}
   return {drawn:names.filter(n=>result.players.some(p=>p.name===n)),expected:result.players.map(p=>p.name)};
  });assert.deepEqual(drawn.drawn,drawn.expected);
  console.log('PASS canvas draws the actual ordered player names');

  // Fill a complete ordered ranking fixture; existing sorting is covered separately.
  await page.evaluate(()=>{
   state={team:'Baltimore Ravens',pos:'ALL',players:ROSTERS['Baltimore Ravens'],stack:[],history:[],comparisons:200,done:true,sorted:[...ROSTERS['Baltimore Ravens']].reverse()};save();render();
  });
  await page.selectOption('#export-type','jpg');await page.click('#export-preview');await page.waitForFunction(()=>!document.getElementById('export-download').disabled);
  assert.equal(await page.locator('#export-page-label').textContent(),'Page 1 of 6');
  await page.click('#export-next');await page.waitForFunction(()=>document.getElementById('export-page-label').textContent==='Page 2 of 6'&&!document.getElementById('export-download').disabled);
  const onePromise=page.waitForEvent('download');await page.click('#export-download');const one=await onePromise;
  assert.match(one.suggestedFilename(),/-02-of-06\.jpg$/);const bytes=await fs.readFile(await one.path());assert.equal(bytes[0],0xff);assert.equal(bytes[1],0xd8);
  console.log('PASS single-page download has correct rank page, filename and JPEG bytes');

  const zipPromise=page.waitForEvent('download');await page.click('#export-all');const archive=await zipPromise;
  assert.match(archive.suggestedFilename(),/\.zip$/);const archivePath=await archive.path();const listing=execFileSync('unzip',['-Z1',archivePath],{encoding:'utf8'}).trim().split('\n');
  assert.equal(listing.length,6);assert.match(listing[0],/-01-of-06\.jpg$/);assert.match(listing.at(-1),/-06-of-06\.jpg$/);
  execFileSync('unzip',['-t',archivePath]);console.log('PASS ZIP passes standard CRC validation and contains all six ranking pages');

  await page.waitForFunction(()=>!document.getElementById('export-size').disabled);await page.selectOption('#export-size','9x16');
  assert.ok(await page.locator('#export-download').isDisabled());assert.ok(await page.locator('#export-preview-image').isHidden());
  await page.click('#export-preview');await page.waitForFunction(()=>!document.getElementById('export-download').disabled);
  await page.waitForFunction(()=>document.getElementById('export-preview-image').naturalHeight===1920);
  const story=await page.locator('#export-preview-image').evaluate(i=>[i.naturalWidth,i.naturalHeight]);assert.deepEqual(story,[1080,1920]);
  console.log('PASS changing options clears stale preview and creates correct story size');

  // Export works even when every external photo is unavailable; the canvas remains readable.
  const fallback=await browser.newPage();await fallback.route(/https:\/\/static\.(?:clubs|www)\.nfl\.com\/.*/,route=>route.abort());await fallback.goto(url);
  const blocked=await fallback.evaluate(async()=>{
   const result={team:'Baltimore Ravens',pos:'QB',players:ROSTERS['Baltimore Ravens'].filter(p=>p.position==='QB')},image=await ResultsExport.createImage(result,{size:'1x1',type:'png',scope:'all'});
   const decoded=await createImageBitmap(image.blob);return {missing:image.missingPhotos,count:result.players.length,width:decoded.width};
  });assert.equal(blocked.missing,blocked.count);assert.equal(blocked.width,1080);await fallback.close();
  console.log('PASS blocked/missing photos use jerseys and never prevent image download');

  // Interrupted generation must not surface or download a different team's old ranking.
  const cancel=await browser.newPage();await cancel.route(/https:\/\/static\.(?:clubs|www)\.nfl\.com\/.*/,async route=>{await new Promise(r=>setTimeout(r,800));await route.abort();});await cancel.goto(url);
  await cancel.evaluate(()=>{ResultsExport.setResults({team:'Baltimore Ravens',pos:'ALL',players:ROSTERS['Baltimore Ravens']});document.getElementById('export-preview').click();ResultsExport.setResults(null);});
  await cancel.waitForTimeout(1000);assert.ok(await cancel.locator('#export-preview-image').isHidden());assert.ok(await cancel.locator('#export-download').isDisabled());await cancel.close();
  console.log('PASS changing results cancels stale exports');

  await fs.mkdir('qa',{recursive:true});
  for(const width of [320,390,768,1440]){
   await page.setViewportSize({width,height:1000});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'export controls overflow '+width);
   await page.locator('.export-panel').screenshot({path:'qa/results-export-'+width+'.png'});console.log('PASS export controls viewport '+width);
  }
  assert.deepEqual(errors,[]);console.log('PASS no browser exceptions; test downloads remained on GitHub');
 }finally{await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
