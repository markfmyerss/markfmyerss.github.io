// Generate the static sharing image on GitHub. No assets or dependencies go to the owner's Mac.
const {chromium}=require('@playwright/test'),http=require('node:http'),fs=require('node:fs/promises'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
(async()=>{
 const server=http.createServer(async(req,res)=>{try{const file=path.resolve('.',decodeURIComponent(new URL(req.url,'http://localhost').pathname).slice(1));if(!file.startsWith(process.cwd()+path.sep))throw Error('path');res.setHeader('Content-Type',file.endsWith('.svg')?'image/svg+xml':'text/html');res.end(await fs.readFile(file));}catch{res.statusCode=404;res.end();}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const browser=await chromium.launch();
 try{
  const page=await browser.newPage({viewport:{width:1200,height:630},deviceScaleFactor:1});
  await page.goto('http://127.0.0.1:'+server.address().port+'/assets/link-preview.html');
  await page.evaluate(()=>document.fonts.ready);
  try{await page.waitForFunction(()=>[...document.images].length===9&&[...document.images].every(i=>i.complete&&i.naturalWidth>0));}catch(e){console.log('IMAGE_FAILURES '+JSON.stringify(await page.evaluate(()=>[...document.images].map(i=>({src:i.src,complete:i.complete,width:i.naturalWidth})))));throw e;}
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth===1200&&document.documentElement.scrollHeight===630));
  assert.equal(await page.locator('.league').count(),3);
  for(const league of ['NFL','NBA','MLB'])assert.ok(await page.locator('.leagues').innerText().then(t=>t.includes(league)));
  await fs.mkdir('qa',{recursive:true});
  const png=await page.screenshot({path:'qa/link-preview-v3.png',type:'png'});
  assert.equal(png.readUInt32BE(16),1200);assert.equal(png.readUInt32BE(20),630);assert.ok(png.length<5*1024*1024);
  const encoded=png.toString('base64');
  for(let i=0,n=0;i<encoded.length;i+=16000,n++)console.log('PREVIEW_PNG_CHUNK_'+String(n).padStart(4,'0')+':'+encoded.slice(i,i+16000));
  console.log('PREVIEW_PNG_SHA256:'+crypto.createHash('sha256').update(png).digest('hex'));
  console.log('PASS sharing PNG: 1200x630; '+png.length+' bytes; nine official logos across NFL, NBA and MLB loaded');
 }finally{await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
