const {chromium,webkit}=require('@playwright/test'),assert=require('node:assert/strict'),fs=require('node:fs/promises'),http=require('node:http'),path=require('node:path');
(async()=>{const server=http.createServer(async(req,res)=>{try{const f=path.resolve('.','.'+new URL(req.url,'http://x').pathname.replace(/^\/$/,'/index.html'));res.setHeader('content-type',f.endsWith('.js')?'text/javascript':f.endsWith('.css')?'text/css':f.endsWith('.jpg')?'image/jpeg':f.endsWith('.svg')?'image/svg+xml':f.endsWith('.json')?'application/json':'text/html');res.end(await fs.readFile(f));}catch{res.statusCode=404;res.end();}});await new Promise(r=>server.listen(0,'127.0.0.1',r));const root=process.env.CREAM_EXPORT_CHECK_URL||'http://127.0.0.1:'+server.address().port;
try{for(const engine of [chromium,webkit]){const browser=await engine.launch();try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 // Contrast is tested with jersey/logo fallbacks so it cannot depend on external image servers.
 await page.route('**/*',r=>r.request().resourceType()==='image'?r.abort():r.continue());await page.goto(root);await page.evaluate(()=>document.fonts.ready);
 const report=await page.evaluate(async()=>{
  const original=CanvasRenderingContext2D.prototype.fillText;
  CanvasRenderingContext2D.prototype.fillText=function(value,x,y,max){
   if(/^\d+$/.test(String(value))){const m=this.measureText(String(value)),width=Math.min(m.width,max??m.width),start=this.textAlign==='center'?x-width/2:this.textAlign==='right'?x-width:x,t=this.getTransform();(this.canvas._numberDraws??=[]).push({text:String(value),color:this.fillStyle,x:Math.min(this.canvas.width-1,Math.max(0,Math.floor((start+width+1.5)*t.a+t.e))),y:Math.min(this.canvas.height-1,Math.max(0,Math.floor((y-(m.actualBoundingBoxAscent||12)/2)*t.d+t.f)))});}
   return original.call(this,value,x,y,max);
  };
  const toBlob=HTMLCanvasElement.prototype.toBlob;HTMLCanvasElement.prototype.toBlob=function(...args){window._exportCanvas=this;return toBlob.apply(this,args);};
  const rgb=hex=>hex.slice(1).match(/../g).map(x=>parseInt(x,16)),lum=c=>c.map(x=>{x/=255;return x<=.04045?x/12.92:((x+.055)/1.055)**2.4;}).reduce((n,x,i)=>n+x*[.2126,.7152,.0722][i],0);
  const out=[];let least=100;
  try{for(const team of Object.keys(ALL_TEAM_INFO).filter(t=>!isLeaguePool(t))){
   const result={team,pos:'ALL',players:rosterFor(team)},image=await ResultsExport.createImage(result,{size:'1x1',type:'png',scope:'all'}),canvas=window._exportCanvas,ctx=canvas.getContext('2d'),pixels=ctx.getImageData(0,0,canvas.width,canvas.height).data,at=(x,y)=>Array.from(pixels.slice((y*canvas.width+x)*4,(y*canvas.width+x)*4+4));
   const paper=at(0,0);if(!(paper[0]>230&&paper[1]>225&&paper[2]>215&&paper[3]===255))throw Error(team+' background is not light cream');
   if(canvas._numberDraws.length<result.players.length)throw Error(team+' rank labels missing');
   for(const n of canvas._numberDraws){const fg=lum(rgb(n.color)),bg=lum(at(n.x,n.y).slice(0,3)),contrast=(Math.max(fg,bg)+.05)/(Math.min(fg,bg)+.05);least=Math.min(least,contrast);if(contrast<7)throw Error(team+' number '+n.text+' contrast '+contrast);}
   const b=ResultsExport.plan(result,{size:'1x1',scope:'all'}).boxes[0],accent=at(Math.floor(b.x+5),Math.floor(b.y+b.height/2)).slice(0,3),expected=rgb(ALL_TEAM_INFO[team].colors.primary);
   if(accent.some((n,i)=>Math.abs(n-expected[i])>1))throw Error(team+' primary accent changed: '+accent+' expected '+expected);
   out.push({team,count:image.players.length});
  }}finally{CanvasRenderingContext2D.prototype.fillText=original;HTMLCanvasElement.prototype.toBlob=toBlob;}
  return {teams:out.length,leastContrast:least};
 });
 assert.equal(report.teams,92);assert(report.leastContrast>=7);
 // Use actual portraits and logos for previews and format/range checks.
 const real=await browser.newPage({viewport:{width:1440,height:1100}});await real.goto(root);await real.evaluate(()=>document.fonts.ready);
 const formats=await real.evaluate(async()=>{
  const out=[];
  for(const team of ['Baltimore Orioles','Boston Celtics','Baltimore Ravens']){
   const r={team,pos:'ALL',players:rosterFor(team)};
   for(const size of ResultsExport.SIZES)for(const type of ['png','jpg','webp']){
    const image=await ResultsExport.createImage(r,{size:size.id,type,scope:'all'});out.push({team,size:size.id,type,count:image.players.length,pages:image.pages,logo:image.logoIncluded,mime:image.blob.type});
   }
   for(const scope of ['10','25']){const image=await ResultsExport.createImage(r,{size:'4x5',type:'png',scope});out.push({team,scope,count:image.players.length,pages:image.pages,logo:image.logoIncluded});}
  }
  for(const team of ['Chicago White Sox','Pittsburgh Pirates','Colorado Rockies']){
   const image=await ResultsExport.createImage({team,pos:'ALL',players:rosterFor(team)},{size:'1x1',type:'png',scope:'all'});
   out.push({team,size:'1x1',type:'png',count:image.players.length,pages:image.pages,logo:image.logoIncluded,mime:image.blob.type});
  }
  return out;
 });
 for(const r of formats){assert.equal(r.pages,1);assert(r.logo);if(r.scope)assert.equal(r.count,Math.min(Number(r.scope),await real.evaluate(team=>rosterFor(team).length,r.team)));else{assert.equal(r.count,await real.evaluate(team=>rosterFor(team).length,r.team));assert(['image/png','image/jpeg','image/webp'].includes(r.mime));}}
 const sample=await real.evaluate(async()=>{const r=await ResultsExport.createImage({team:'Baltimore Orioles',pos:'ALL',players:MLB_ROSTERS['Baltimore Orioles']},{size:'1x1',type:'png',scope:'all'});return await new Promise(resolve=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.readAsDataURL(r.blob);});});
 console.log('CREAM_EXPORT_SAMPLE '+engine.name()+' '+sample.split(',')[1]);
 await real.close();await page.close();console.log('PASS '+engine.name()+': all 92 team exports use cream, exact primary-color accents and number contrast >=7:1 (minimum '+report.leastContrast.toFixed(2)+'); all nine sizes/three formats and Top 10/25 preserve complete rankings across MLB/NBA/NFL');
 }finally{await browser.close();}}}finally{await new Promise(r=>server.close(r));}})().catch(e=>{console.error(e);process.exit(1)});
