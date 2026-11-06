// Browser checks and screenshots run on GitHub; no browser is installed on the user's Mac.
const {chromium,webkit}=require('@playwright/test'),http=require('node:http'),fs=require('node:fs/promises'),path=require('node:path'),assert=require('node:assert/strict');
(async()=>{
 const server=http.createServer(async(req,res)=>{try{const file=path.resolve('.',decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/$/,'/index.html').slice(1));if(!file.startsWith(process.cwd()+path.sep))throw Error('path');const body=await fs.readFile(file);res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.svg')?'image/svg+xml':file.endsWith('.png')?'image/png':'text/html');res.end(body);}catch{res.statusCode=404;res.end('Not found');}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const url='http://127.0.0.1:'+server.address().port;

 try{
 await fs.mkdir('qa',{recursive:true});
 for(const engine of [chromium,webkit]){
  const browser=await engine.launch();
  try{
   const page=await browser.newPage({viewport:{width:390,height:1000}}),errors=[];
   page.on('pageerror',e=>errors.push(e.message));await page.goto(url);
   assert.equal(await page.locator('.sport-button').count(),2);
   await page.selectOption('#team','Philadelphia Eagles');await page.click('#start');await page.click('#left');
   const nfl=await page.evaluate(()=>localStorage.getItem('nfl-sorter-v3:PHI:ALL'));
   await page.click('[data-sport=NBA].sport-button');
   assert.equal(await page.locator('#team option').count(),15);
   assert.equal(await page.locator('#conference-picker [aria-pressed=true]').textContent(),'Eastern');
   assert.equal(await page.locator('#division-picker [aria-pressed=true]').textContent(),'Atlantic');
   assert.deepEqual(await page.locator('#position option').evaluateAll(os=>os.map(o=>o.value)),['ALL','G','F','C']);
   const teams=await page.locator('#team option').evaluateAll(os=>os.map(o=>o.value));
   for(const team of teams){
    await page.selectOption('#team',team);await page.selectOption('#position','ALL');await page.click('#start');
    assert.ok(await page.locator('#left .portrait img, #left .fallback').count()===1);
    const original=await page.locator('#progress').textContent();await page.click('#left');await page.click('#undo');assert.equal(await page.locator('#progress').textContent(),original);
    await page.click('#right');const saved=await page.locator('#progress').textContent();await page.reload();
    assert.equal(await page.locator('#progress').textContent(),saved);
    assert.equal(await page.locator('.sport-button[aria-pressed=true]').textContent(),'NBA');
    for(const mode of ['light','dim','black']){
     await page.click('[data-appearance-choice='+mode+']');
     for(const width of [320,390,768,1440]){
      await page.setViewportSize({width,height:1000});
      assert.equal(await page.locator('.team-tile').count(),5);
      assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'NBA overflow '+team+' '+mode+' '+width);
     }
    }
    await page.selectOption('#position','G');if(await page.locator('#start').isVisible())await page.click('#start');
    let picks=0;while(await page.locator('#sort').isVisible()){await page.click('#left');if(++picks>70)throw Error('NBA guard ranking stalled');}
    assert.ok(await page.locator('.rank').count()>1);
    assert.equal(await page.locator('#results .builder-credit').textContent(),'built by @markfm18');
    await page.click('#share-ranking');assert.equal(await page.evaluate(()=>document.activeElement.id),'export-heading');
    await page.setViewportSize({width:390,height:1000});
    await page.click('#export-preview');
    await page.waitForFunction(()=>!document.getElementById('export-download').disabled&&document.getElementById('export-preview-image').naturalWidth===1080);
    assert.match(await page.locator('#export-preview-image').getAttribute('src'),/^data:image\/png;base64,/);
    assert.equal(await page.locator('#export-size option').count(),4);
    assert.ok(await page.locator('#export-type-field').isHidden());assert.ok(await page.locator('#export-all').isHidden());
    await page.locator('#results').screenshot({path:'qa/nba-results-'+engine.name()+'-'+(await page.locator('body').getAttribute('data-team'))+'.png'});
    await page.click('#undo-result');assert.ok(await page.locator('#sort').isVisible());
    await page.selectOption('#position','ALL');
    console.log('PASS '+engine.name()+' NBA team cards, sorting, undo, reload, appearances and mobile image: '+team);
   }
   // Check NBA image sources, full names, logos and one-image output in every size.
   const generated=await page.evaluate(async()=>{
    const log=[];
    for(const [team,players] of Object.entries(NBA_ROSTERS)){
     const result={team,pos:'ALL',players:[...players].reverse()};
     for(const size of ResultsExport.SIZES){
      const options={size:size.id,type:'png',scope:'all'},names=[],original=CanvasRenderingContext2D.prototype.fillText;
      CanvasRenderingContext2D.prototype.fillText=function(value,...args){if(players.some(p=>p.name===value))names.push(value);return original.call(this,value,...args);};
      let image;try{image=await ResultsExport.createImage(result,options);}finally{CanvasRenderingContext2D.prototype.fillText=original;}
      if(image.missingPhotos!==result.players.filter(p=>!NBA_HEADSHOTS[p.id]?.url).length)throw Error('Unexpected missing NBA photos '+team);
      if(!image.logoIncluded||image.pages!==1)throw Error('NBA logo or pagination '+team);
      if(JSON.stringify(names)!==JSON.stringify(result.players.map(p=>p.name)))throw Error('NBA names missing '+team);
      if(JSON.stringify(image.players)!==JSON.stringify(result.players.map(p=>p.id)))throw Error('NBA IDs reordered');
      const bitmap=await createImageBitmap(image.blob);if(bitmap.width!==size.width||bitmap.height!==size.height)throw Error('NBA image dimensions');bitmap.close();
      if(!ResultsExport.filename(result,options,image).startsWith('nba-favorites-'))throw Error('Wrong NBA filename');
     }
     for(const type of ['jpg','webp']){
      const image=await ResultsExport.createImage(result,{size:'1x1',type,scope:'all'});
      if(image.blob.type!==ResultsExport.TYPES[type].mime)throw Error('NBA file encoding');
     }
     log.push(team);
    }
    return log;
   });
   assert.equal(generated.length,15);
   await page.click('[data-sport=NFL].sport-button');
   assert.equal(await page.locator('#team').inputValue(),'Philadelphia Eagles');
   assert.equal(await page.evaluate(()=>localStorage.getItem('nfl-sorter-v3:PHI:ALL')),nfl);
   await page.click('[data-sport=NBA].sport-button');await page.selectOption('#team','Philadelphia 76ers');await page.selectOption('#position','ALL');
   assert.ok(await page.evaluate(()=>localStorage.getItem('nba-sorter-v1:PHI:ALL')));
   await page.reload();assert.equal(await page.locator('.sport-button[aria-pressed=true]').textContent(),'NBA');
   assert.equal(await page.locator('#team').inputValue(),'Philadelphia 76ers');
   assert.deepEqual(errors,[]);
   console.log('PASS '+engine.name()+': NBA all nine image sizes, PNG/JPG/WebP, official logos, all names and independent NFL/NBA PHI progress');
  }finally{await browser.close();}
 }
 }finally{await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
