// All generated test downloads remain on GitHub's runner.
const {chromium}=require('@playwright/test'),http=require('node:http'),fs=require('node:fs/promises'),path=require('node:path'),assert=require('node:assert/strict'),{execFileSync}=require('node:child_process');
(async()=>{
 const server=http.createServer(async(req,res)=>{try{const file=path.resolve('.',decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/$/,'/index.html').slice(1));if(!file.startsWith(process.cwd()+path.sep))throw Error('path');res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':'text/html');res.end(await fs.readFile(file));}catch{res.statusCode=404;res.end('not found');}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const url='http://127.0.0.1:'+server.address().port,browser=await chromium.launch();

 try{
  await fs.mkdir('qa',{recursive:true});
  const page=await browser.newPage({viewport:{width:1440,height:1100}}),errors=[],downloads=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('download',d=>downloads.push(d));
  await page.goto(url);
  await page.selectOption('#position','QB');await page.click('#start');
  while(await page.locator('#sort').isVisible())await page.click('#left');
  assert.equal(await page.locator('#results .builder-credit').textContent(),'built by @markfm18');
  await page.click('#export-preview');await page.waitForFunction(()=>!document.getElementById('export-download').disabled);
  assert.equal(downloads.length,0);
  assert.ok(await page.locator('#export-pages').isHidden());assert.ok(await page.locator('#export-all').isHidden());
  console.log('PASS completed ranking previews one image without automatic downloads or pagination');

  const logos=await page.evaluate(async()=>{
   const sources=[],original=CanvasRenderingContext2D.prototype.drawImage;
   CanvasRenderingContext2D.prototype.drawImage=function(image,...args){
    if(image.src?.includes('/clubs/logos/'))sources.push(image.src);
    return original.call(this,image,...args);
   };
   try{
    for(const team of Object.keys(TEAM_INFO)){
     const image=await ResultsExport.createImage({team,pos:'ALL',players:ROSTERS[team].slice(0,1)},{size:'1x1',type:'png',scope:'all'});
     if(!image.logoIncluded)throw Error('Official logo unavailable with anonymous CORS: '+team+' '+ResultsExport.logoUrl(team));
     const bitmap=await createImageBitmap(image.blob);bitmap.close();
    }
   }finally{CanvasRenderingContext2D.prototype.drawImage=original;}
   if(sources.length!==32||new Set(sources).size!==32)throw Error('Each team needs its own logo drawn');
   if(!sources.some(s=>s.endsWith('/LA'))||!sources.some(s=>s.endsWith('/WAS')))throw Error('Incorrect official logo code aliases');
   return sources.length;
  });
  assert.equal(logos,32);console.log('PASS all 32 official NFL logos load anonymously, are drawn and encode safely in PNG');
  const layout=await page.evaluate(()=>{
   let count=0;
   for(const [team,players] of Object.entries(ROSTERS))for(const size of ResultsExport.SIZES)for(const scope of ['all','10','25']){
    const p=ResultsExport.plan({team,pos:'ALL',players},{size:size.id,type:'png',scope});
    const expected=scope==='all'?players.length:Math.min(Number(scope),players.length);
    if(p.pages!==1||p.players.length!==expected||p.boxes.length!==expected)throw Error('Dropped players '+team+' '+size.id+' '+scope);
    for(const [i,b] of p.boxes.entries()){
     if(b.x<0||b.y<p.header||b.x+b.width>p.W+.1||b.y+b.height>p.H-p.footer+.1||b.width<=0||b.height<=0)throw Error('Out of bounds '+team+' '+size.id+' rank '+(i+1));
     for(const other of p.boxes.slice(i+1)){
      if(b.x<other.x+other.width-.1&&b.x+b.width>other.x+.1&&b.y<other.y+other.height-.1&&b.y+b.height>other.y+.1)throw Error('Overlapping rows');
     }
    }
    count++;
   }
   return count;
  });
  assert.equal(layout,32*9*3);console.log('PASS all '+layout+' team/size/range layouts retain every player with no overlap');

  const variants=await page.evaluate(async()=>{
   const [team,players]=Object.entries(ROSTERS).sort((a,b)=>b[1].length-a[1].length)[0];
   const result={team,pos:'ALL',players:[...players].reverse()},log=[];
   for(const size of ResultsExport.SIZES)for(const type of Object.keys(ResultsExport.TYPES)){
    const options={size:size.id,type,scope:'all'},drawn=[],credits=[],original=CanvasRenderingContext2D.prototype.fillText;
    CanvasRenderingContext2D.prototype.fillText=function(value,x,y,max){
     if(result.players.some(p=>p.name===value)){
      if(!this.font.includes('DM Sans')||this.font.includes('Barlow'))throw Error('Export player names must use smooth DM Sans typography');
      if(this.measureText(value).width>max+.5)throw Error('Name does not fit '+value+' '+size.id);
      drawn.push(value);
     }
     if(value==='Fan Favorites · built by @markfm18')credits.push(value);
     return original.call(this,value,x,y,max);
    };
    let image;try{image=await ResultsExport.createImage(result,options);}finally{CanvasRenderingContext2D.prototype.fillText=original;}
    const bitmap=await createImageBitmap(image.blob);
    if(bitmap.width!==size.width||bitmap.height!==size.height)throw Error('Wrong dimensions '+size.id);
    if(image.blob.type!==ResultsExport.TYPES[type].mime||image.blob.size<2000)throw Error('Wrong/empty encoding');
    if(!image.logoIncluded)throw Error('Missing logo in '+size.id+' '+type);
    if(image.pages!==1||JSON.stringify(image.players)!==JSON.stringify(result.players.map(p=>p.id)))throw Error('Incomplete ranking');
    if(JSON.stringify(drawn)!==JSON.stringify(result.players.map(p=>p.name)))throw Error('Missing, repeated or reordered names');
    if(credits.length!==1)throw Error('Missing creator credit');
    bitmap.close();log.push(size.id+' '+type+' '+players.length+' names');
   }
   for(const scope of ['10','25']){
    const image=await ResultsExport.createImage(result,{size:'1x1',type:'png',scope});
    if(JSON.stringify(image.players)!==JSON.stringify(result.players.slice(0,Number(scope)).map(p=>p.id)))throw Error('Wrong top range');
   }
   return log;
  });
  assert.equal(variants.length,27);
  console.log('PASS all 27 size/encoding variants contain the largest roster, every full name and creator credit in one image');
  await page.evaluate(()=>{state={team:'Baltimore Ravens',pos:'ALL',players:ROSTERS['Baltimore Ravens'],stack:[],history:[],comparisons:200,done:true,sorted:[...ROSTERS['Baltimore Ravens']].reverse()};save();render();});
  await page.selectOption('#export-type','jpg');await page.click('#export-preview');await page.waitForFunction(()=>!document.getElementById('export-download').disabled);
  assert.ok(await page.locator('#export-pages').isHidden());assert.ok(await page.locator('#export-all').isHidden());
  const promise=page.waitForEvent('download');await page.click('#export-download');const file=await promise;
  assert.match(file.suggestedFilename(),/-1x1\.jpg$/);const bytes=await fs.readFile(await file.path());assert.equal(bytes[0],0xff);assert.equal(bytes[1],0xd8);
  await file.saveAs('qa/complete-ranking-square.jpg');
  console.log('PASS single complete JPEG download; no ZIP or page controls');

  // Save actual image artifacts on GitHub for visual review, including the densest short format.
  for(const size of ['1x1','3x4','4x5','9x16','16x9','link']){
   const data=await page.evaluate(async size=>{
    const result={team:'Philadelphia Eagles',pos:'ALL',players:ROSTERS['Philadelphia Eagles']};
    const image=await ResultsExport.createImage(result,{size,type:'png',scope:'all'});
    return new Promise(resolve=>{const r=new FileReader();r.onload=()=>resolve(r.result.split(',')[1]);r.readAsDataURL(image.blob);});
   },size);
   await fs.writeFile('qa/complete-ranking-'+size+'.png',Buffer.from(data,'base64'));
  }

  const fallback=await browser.newPage();
  await fallback.route(/https:\/\/static\.(?:clubs|www)\.nfl\.com\/.*/,r=>r.abort());
  await fallback.route(/fonts\.(googleapis|gstatic)\.com/,r=>r.abort());
  await fallback.goto(url);
  const blocked=await fallback.evaluate(async()=>{
   const result={team:'Baltimore Ravens',pos:'ALL',players:ROSTERS['Baltimore Ravens']};
   const drawn=[],original=CanvasRenderingContext2D.prototype.fillText;
   CanvasRenderingContext2D.prototype.fillText=function(value,...args){if(result.players.some(p=>p.name===value))drawn.push(value);return original.call(this,value,...args);};
   let image;try{image=await ResultsExport.createImage(result,{size:'link',type:'png',scope:'all'});}finally{CanvasRenderingContext2D.prototype.fillText=original;}
   return {missing:image.missingPhotos,count:result.players.length,drawn,expected:result.players.map(p=>p.name),pages:image.pages,logoIncluded:image.logoIncluded};
  });
  assert.equal(blocked.missing,blocked.count);assert.equal(blocked.pages,1);assert.equal(blocked.logoIncluded,false);assert.deepEqual(blocked.drawn,blocked.expected);await fallback.close();
  console.log('PASS unavailable logos, missing photos and blocked fonts retain the full ranking in one image');

  const cancel=await browser.newPage();await cancel.route(/https:\/\/static\.(?:clubs|www)\.nfl\.com\/.*/,async route=>{await new Promise(r=>setTimeout(r,800));await route.abort();});await cancel.goto(url);
  await cancel.evaluate(()=>{ResultsExport.setResults({team:'Baltimore Ravens',pos:'ALL',players:ROSTERS['Baltimore Ravens']});document.getElementById('export-preview').click();ResultsExport.setResults(null);});
  await cancel.waitForTimeout(1000);assert.ok(await cancel.locator('#export-preview-image').isHidden());assert.ok(await cancel.locator('#export-download').isDisabled());await cancel.close();
  for(const width of [320,390,768,1440]){
   await page.setViewportSize({width,height:1000});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   await page.locator('.export-panel').screenshot({path:'qa/results-export-'+width+'.png'});
  }
  assert.deepEqual(errors,[]);console.log('PASS responsive export controls, stale preview cancellation and no browser exceptions');
 }finally{await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
