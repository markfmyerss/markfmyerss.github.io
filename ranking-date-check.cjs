const {chromium,webkit}=require('@playwright/test'),assert=require('node:assert/strict'),fs=require('node:fs/promises'),http=require('node:http'),path=require('node:path');
(async()=>{const server=http.createServer(async(req,res)=>{try{const f=path.resolve('.','.'+new URL(req.url,'http://x').pathname.replace(/^\/$/,'/index.html'));res.setHeader('content-type',f.endsWith('.js')?'text/javascript':f.endsWith('.css')?'text/css':f.endsWith('.json')?'application/json':'text/html');res.end(await fs.readFile(f));}catch{res.statusCode=404;res.end();}});await new Promise(r=>server.listen(0,'127.0.0.1',r));
try{for(const engine of [chromium,webkit]){const browser=await engine.launch();try{
 const page=await browser.newPage({timezoneId:'America/New_York',viewport:{width:1440,height:1100}});
 await page.route('**/*',r=>r.request().resourceType()==='image'?r.abort():r.continue());
 await page.goto('http://127.0.0.1:'+server.address().port);
 await page.evaluate(()=>{const original=CanvasRenderingContext2D.prototype.fillText;window.exportTexts=[];CanvasRenderingContext2D.prototype.fillText=function(value,...args){window.exportTexts.push(String(value));return original.call(this,value,...args);};});
 const preview=async expected=>{await page.evaluate(()=>window.exportTexts=[]);await page.locator('#export-preview').click();await page.waitForFunction(()=>!document.getElementById('export-download').disabled);const texts=await page.evaluate(()=>window.exportTexts);assert(texts.includes(expected),'Expected ranking date '+expected);assert(!texts.some(t=>/^\d+ FAVORITES$/.test(t)),'Footer still contains favorites count');};
 for(const sport of ['NFL','NBA','MLB']){
  await page.evaluate(sport=>{selectSport(sport);selectRankingMode('teams');const team=$('team').value,players=rosterFor(team);state={team,pos:'ALL',players,stack:[],history:[],comparisons:100,done:true,sorted:players,updatedAt:Date.UTC(2026,10,10,3,30)};save();render();},sport);
  await preview('Nov 9, 2026');
  await page.reload();await page.evaluate(()=>{const original=CanvasRenderingContext2D.prototype.fillText;window.exportTexts=[];CanvasRenderingContext2D.prototype.fillText=function(value,...args){window.exportTexts.push(String(value));return original.call(this,value,...args);};});
  assert.equal(await page.evaluate(()=>state.updatedAt),Date.UTC(2026,10,10,3,30));await preview('Nov 9, 2026');
  await page.evaluate(()=>{state.updatedAt=Date.UTC(2026,10,11,3,30);save();render();});await preview('Nov 10, 2026');
 }
 const direct=await page.evaluate(async()=>{const team='Baltimore Ravens',players=rosterFor(team).slice(0,4);
  for(const size of ResultsExport.SIZES){window.exportTexts=[];await ResultsExport.createImage({team,pos:'QB',players,updatedAt:Date.UTC(2025,0,2,12)},{size:size.id,type:'png',scope:'all'});if(!window.exportTexts.includes('Jan 2, 2025'))throw Error('Saved date lost '+size.id);}
  window.exportTexts=[];await ResultsExport.createImage({team,pos:'QB',players},{size:'1x1',type:'png',scope:'all'});return window.exportTexts.includes('Date unavailable');
 });assert(direct,'Undated legacy rankings must not invent a ranking date');
 console.log('PASS '+engine.name()+': saved ranking date for NFL/NBA/MLB, local timezone near midnight, reload persistence, date-only preview invalidation, all nine sizes and honest undated fallback');
 await page.close();
 }finally{await browser.close();}}}finally{await new Promise(r=>server.close(r));}})().catch(e=>{console.error(e);process.exit(1)});
