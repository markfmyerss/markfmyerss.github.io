const {chromium,webkit}=require('@playwright/test'),assert=require('node:assert/strict'),fs=require('node:fs/promises'),http=require('node:http'),path=require('node:path');
(async()=>{const server=http.createServer(async(req,res)=>{try{const f=path.resolve('.','.'+new URL(req.url,'http://x').pathname.replace(/^\/$/,'/index.html'));res.setHeader('content-type',f.endsWith('.js')?'text/javascript':f.endsWith('.css')?'text/css':f.endsWith('.svg')?'image/svg+xml':f.endsWith('.png')?'image/png':f.endsWith('.jpg')?'image/jpeg':f.endsWith('.json')?'application/json':'text/html');res.end(await fs.readFile(f));}catch{res.statusCode=404;res.end();}});await new Promise(r=>server.listen(0,'127.0.0.1',r));const root=process.env.ADAPTIVE_EXPORT_CHECK_URL||'http://127.0.0.1:'+server.address().port;
try{for(const engine of [chromium,webkit]){const browser=await engine.launch();try{
 const page=await browser.newPage({viewport:{width:1440,height:1100}}),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.route('**/*',r=>r.request().resourceType()==='image'?r.abort():r.continue());await page.goto(root);await page.evaluate(()=>document.fonts.ready);
 const report=await page.evaluate(async()=>{
  const sizeIds=ResultsExport.SIZES.map(s=>s.id),orderedNames=['Jayson Tatum','Paul George','Payton Pritchard','Derrick White','Neemias Queta','Baylor Scheierman','Mitchell Robinson','Hugo González','Sam Hauser','Jordan Walsh','Mike Conley','Ron Harper Jr.','Luka Garza','Dillon Mitchell','Chris Cenac Jr.','Amari Williams','Devin Carter'],celtics=rosterFor('Boston Celtics'),ordered=orderedNames.map(n=>celtics.find(p=>p.name===n));
  if(ordered.some(p=>!p))throw Error('Celtics fixture differs from published roster');
  const qbs=rosterFor('Baltimore Ravens').filter(p=>p.position==='QB');if(qbs.length!==4)throw Error('Expected four Ravens quarterbacks, found '+qbs.length);
  const cases=[{team:'Baltimore Ravens',pos:'QB',players:qbs},{team:'Boston Celtics',pos:'ALL',players:ordered},{team:'Baltimore Orioles',pos:'ALL',players:rosterFor('Baltimore Orioles')},{team:'Baltimore Ravens',pos:'ALL',players:rosterFor('Baltimore Ravens')}];
  const pool=Object.keys(ALL_TEAM_INFO).find(t=>isLeaguePool(t)&&ALL_TEAM_INFO[t].league==='NFL');cases.push({team:pool,pos:'ALL',players:rosterFor(pool).slice(0,140)});
  let layouts=0,images=0;const counts=[1,2,3,4,5,6,10,17,25,40,53,75,140];
  for(const count of counts)for(const size of sizeIds)for(const scope of ['all','10','25']){
   const players=Array.from({length:count},(_,i)=>({...celtics[i%celtics.length],id:'layout-'+i})),p=ResultsExport.plan({team:count>80?pool:'Boston Celtics',pos:'ALL',players},{size,scope});
   if(p.players.length!==Math.min(count,scope==='all'?count:Number(scope))||p.pages!==1||p.boxes.length!==p.players.length)throw Error('Missing players');
   for(const [i,b] of p.boxes.entries()){
    if(b.x<0||b.y<p.header||b.x+b.width>p.W+.1||b.y+b.height>p.H-p.footer+.1||b.width<=0||b.height<=0)throw Error('Bounds '+count+' '+size);
    if(b.metrics&&(b.metrics.photoSize>b.height-2||b.metrics.photoSize+b.metrics.rankWidth+b.metrics.gap+24>b.width))throw Error('Row contents do not fit '+count+' '+size);
    for(const other of p.boxes.slice(i+1))if(b.x<other.x+other.width-.1&&b.x+b.width>other.x+.1&&b.y<other.y+other.height-.1&&b.y+b.height>other.y+.1)throw Error('Overlapping boxes');
   }
   const rest=p.boxes.slice(3);for(let i=1;i<rest.length;i++){const a=rest[i-1],b=rest[i];if(b.x<a.x-.1||(Math.abs(b.x-a.x)<.1&&b.y<=a.y))throw Error('Rank order must run down columns');}
   layouts++;
  }
  const cp=ResultsExport.plan(cases[1],{size:'1x1',scope:'all'});if(cp.columns!==2||cp.rows!==7||cp.boxes[9].x!==cp.boxes[3].x||cp.boxes[10].x<=cp.boxes[9].x||cp.boxes[10].y!==cp.boxes[3].y)throw Error('Celtics should read 4–10, then 11–17');
  const qb=ResultsExport.plan(cases[0],{size:'1x1',scope:'all'}).boxes[3];if(qb.metrics.nameFont<60||qb.metrics.photoSize<180)throw Error('Fourth QB still undersized');
  for(const result of cases)for(const size of sizeIds){
   const drawn=[],original=CanvasRenderingContext2D.prototype.fillText;
   CanvasRenderingContext2D.prototype.fillText=function(value,x,y,max){if(result.players.some(p=>p.name===value)){
    if(this.measureText(value).width>max+.5)throw Error('Name does not fit '+value+' '+size);
    const m=this.measureText(value),plan=ResultsExport.plan(result,{size,scope:'all'}),b=plan.boxes[drawn.length];
    if(y-m.actualBoundingBoxAscent<b.y-1||y+m.actualBoundingBoxDescent>b.y+b.height+1)throw Error('Name outside row '+value+' '+size);
    drawn.push(value);
   }return original.call(this,value,x,y,max);};
   let image;try{image=await ResultsExport.createImage(result,{size,type:'png',scope:'all'});}finally{CanvasRenderingContext2D.prototype.fillText=original;}
   if(image.pages!==1||JSON.stringify(image.players)!==JSON.stringify(result.players.map(p=>p.id))||JSON.stringify(drawn)!==JSON.stringify(result.players.map(p=>p.name)))throw Error('Incomplete or reordered export');
   images++;
  }
  return {layouts,images,celticsColumns:cp.columns,qbName:qb.metrics.nameFont,qbPhoto:qb.metrics.photoSize};
 });assert.deepEqual(errors,[]);console.log('PASS '+engine.name()+': '+JSON.stringify(report));
 const real=await browser.newPage();await real.goto(root);await real.evaluate(()=>document.fonts.ready);
 if(engine.name()==='chromium')for(const [team,pos] of [['Baltimore Ravens','QB'],['Boston Celtics','ALL']]){
  const sample=await real.evaluate(async({team,pos})=>{let players=rosterFor(team).filter(p=>pos==='ALL'||p.position===pos);if(team==='Boston Celtics'){const names=['Jayson Tatum','Paul George','Payton Pritchard'];players=[...names.map(n=>players.find(p=>p.name===n)),...players.filter(p=>!names.includes(p.name))];}
   const image=await ResultsExport.createImage({team,pos,players},{size:'1x1',type:'png',scope:'all'});return await new Promise(resolve=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.readAsDataURL(image.blob);});
  },{team,pos});console.log('ADAPTIVE_EXPORT_SAMPLE '+(pos==='QB'?'Ravens':'Celtics')+' '+sample.split(',')[1]);
 }
 await real.close();await page.close();
 }finally{await browser.close();}}}finally{await new Promise(r=>server.close(r));}})().catch(e=>{console.error(e);process.exit(1)});
