/* Native browser image exports. No backend, upload or production dependencies. */
(() => {
 'use strict';
 const SIZES=[
  {id:'1x1',label:'Square · 1:1',width:1080,height:1080},
  {id:'3x4',label:'Portrait · 3:4',width:1080,height:1440},
  {id:'4x5',label:'Feed · 4:5',width:1080,height:1350},
  {id:'9x16',label:'Story · 9:16',width:1080,height:1920},
  {id:'16x9',label:'Widescreen · 16:9',width:1920,height:1080},
  {id:'4x3',label:'Landscape · 4:3',width:1440,height:1080},
  {id:'3x2',label:'Landscape · 3:2',width:1620,height:1080},
  {id:'2x3',label:'Portrait · 2:3',width:1080,height:1620},
  {id:'link',label:'Link card · 1.91:1',width:1200,height:630}
 ];
 const TYPES={png:{mime:'image/png',extension:'png'},jpg:{mime:'image/jpeg',extension:'jpg'},webp:{mime:'image/webp',extension:'webp'}};
 const $=id=>document.getElementById(id),photoCache=new Map(),logoCache=new Map();
 const mobileQuery=matchMedia('(max-width:700px), (pointer:coarse)');let mobile=mobileQuery.matches;
 let current=null,fingerprint='',revision=0,busy=false,pageIndex=0,preview=null,previewUrl=null;
 function config(){return {size:$('export-size').value,type:mobile?'png':$('export-type').value,scope:$('export-scope').value};}
 function updateMode(){
  const league=!!current&&ALL_TEAM_INFO[current.team]?.scope==='league';
  const selected=$('export-size').value;$('export-size').replaceChildren();
  for(const size of (mobile?SIZES.slice(0,4):SIZES))$('export-size').add(new Option(mobile||league?size.label:size.label+' · '+size.width+'×'+size.height,size.id));
  $('export-size').value=(mobile?SIZES.slice(0,4):SIZES).some(s=>s.id===selected)?selected:'1x1';
  $('export-type-field').hidden=mobile;$('export-panel').classList.toggle('mobile-export',mobile);
  $('export-intro').textContent=mobile?'Choose a size and range. Every name fits in one image.':'One complete ranking image, in any size. Choose All, Top 10 or Top 25.';
  $('export-note').textContent=mobile?'Create your image, then tap Save image or touch and hold it. Your entire selected ranking fits in one image.':'Your selected ranking fits in one image. Dense rankings use smaller text. Images are created in your browser; unavailable photos use jersey numbers.';
 }
 function plan(result,options){
  const preset=SIZES.find(s=>s.id===options.size)||SIZES[0];
  const limit=options.scope==='all'?result.players.length:Number(options.scope);
  const players=result.players.slice(0,Math.min(result.players.length,limit||result.players.length));
  const league=ALL_TEAM_INFO[result.team]?.scope==='league',density=league&&players.length>80?Math.ceil(players.length/90):1;
  const outputScale=Math.max(1,Math.min(density,Math.floor(4096/preset.width),Math.floor(4096/preset.height),Math.floor(Math.sqrt(16000000/(preset.width*preset.height)))));
  const size={...preset,width:preset.width*outputScale,height:preset.height*outputScale},W=1080*density,H=preset.height*W/preset.width;

  const wide=W/H>=1.25,pad=wide?42:48,gutter=wide?14:16,header=wide?112:172,footer=league?Math.max(wide?58:72,56/(size.width/W)):wide?58:72;
  const featured=Math.min(3,players.length),rest=players.slice(featured),boxes=[];
  const base=wide?82:Math.max(154,Math.min(210,H*.15));
  const featureWidth=(W-2*pad-gutter*(featured-1))/Math.max(1,featured);
  const y=header+base+18;
  for(let i=0;i<featured;i++)boxes.push({x:pad+i*(featureWidth+gutter),y:header,width:featureWidth,height:base,featured:true});
  const available=Math.max(1,H-footer-y),longest=Math.max(12,...rest.map(p=>p.name.length));
  let best={score:-1,columns:1,rows:Math.max(1,rest.length),width:W-2*pad,rowHeight:available};
  for(let columns=1;columns<=Math.min(6,Math.max(1,rest.length));columns++){
   const rows=Math.ceil(rest.length/columns)||1,width=(W-2*pad-gutter*(columns-1))/columns,rowHeight=available/rows;
   const photo=Math.max(12,Math.min(40,rowHeight-10)),rank=rowHeight<30?24:30,textWidth=width-photo-rank-24;
   const score=Math.min(26,Math.max(8,(rowHeight-4)*.68),textWidth/(longest*.54));
   if(score>best.score)best={score,columns,rows,width,rowHeight};
  }
  rest.forEach((p,i)=>{
   const column=Math.floor(i/best.rows),row=i%best.rows;
   boxes.push({x:pad+column*(best.width+gutter),y:y+row*best.rowHeight,width:best.width,height:best.rowHeight-4,featured:false});
  });
  return {size,W,H,pad,header,footer,columns:best.columns,rows:best.rows,capacity:players.length,players,pages:1,boxes};
 }
 function loadPhoto(player,thumbnail=false){
  const url=player.headshotUrl||ALL_HEADSHOTS[player.id]?.url;if(!url)return Promise.resolve(null);
  const key=url+(thumbnail?'#thumb':'');if(photoCache.has(key))return photoCache.get(key);
  const promise=new Promise(resolve=>{
   const image=new Image();let done=false;
   const finish=value=>{if(done)return;done=true;clearTimeout(timer);image.onload=null;image.onerror=null;resolve(value);};
   const timer=setTimeout(()=>finish(null),8000);
   image.crossOrigin='anonymous';image.referrerPolicy='no-referrer';image.onload=async()=>{if(!image.naturalWidth){finish(null);return;}if(thumbnail&&globalThis.createImageBitmap){try{const ratio=Math.min(1,160/image.naturalWidth,160/image.naturalHeight),bitmap=await createImageBitmap(image,{resizeWidth:Math.max(1,Math.round(image.naturalWidth*ratio)),resizeHeight:Math.max(1,Math.round(image.naturalHeight*ratio))});finish({drawable:bitmap,naturalWidth:bitmap.width,naturalHeight:bitmap.height});image.src='';return;}catch{}}finish(image);};image.onerror=()=>finish(null);image.src=url;
  });if(photoCache.size>=96)photoCache.delete(photoCache.keys().next().value);photoCache.set(key,promise);return promise;
 }
 function logoUrl(team){
  const info=ALL_TEAM_INFO[team];
  if(info?.scope==='league')return new URL(info.logo,document.baseURI).href;
  if(info?.league==='NBA')return new URL(info.logo,document.baseURI).href;
  const code=info?.code;
  if(!code)return null;
  const official={LAR:'LA',WSH:'WAS'}[code]||code;
  return 'https://static.www.nfl.com/t_q-best/league/api/clubs/logos/'+official;
 }
 async function loadPhotos(players,thumbnail){
  if(!thumbnail)return Promise.all(players.map(p=>loadPhoto(p)));
  const result=Array(players.length);let next=0;
  await Promise.all(Array.from({length:8},async()=>{while(next<players.length){const i=next++;result[i]=await loadPhoto(players[i],true);}}));return result;
 }
 function loadLogo(team){
  const url=logoUrl(team);if(!url)return Promise.resolve(null);
  if(logoCache.has(url))return logoCache.get(url);
  const promise=new Promise(resolve=>{
   const image=new Image();let finished=false;
   const finish=value=>{if(finished)return;finished=true;clearTimeout(timer);image.onload=null;image.onerror=null;resolve(value);};
   const timer=setTimeout(()=>finish(null),8000);
   image.crossOrigin='anonymous';image.referrerPolicy='no-referrer';
   image.onload=()=>finish(image.naturalWidth?image:null);image.onerror=()=>finish(null);image.src=url;
  });
  logoCache.set(url,promise);return promise;
 }
 function rect(ctx,x,y,w,h,r,fill,stroke){
  ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1;ctx.stroke();}
 }
 function text(ctx,value,x,y,max,font,color,weight=600,align='left'){
  const minimum=Math.max(8,Math.ceil(8/(ctx.getTransform().a||1)));let n=Math.max(minimum,Math.floor(font));ctx.textAlign=align;
  const family='"DM Sans",system-ui,-apple-system,sans-serif';
  do{ctx.font=weight+' '+n+'px '+family;if(ctx.measureText(value).width<=max||n<=minimum)break;n--;}while(n>=minimum);
  ctx.fillStyle=color;ctx.fillText(value,x,y,max);ctx.textAlign='left';
 }
 function blend(a,b,amount){
  const rgb=hex=>hex.replace('#','').match(/../g).map(n=>parseInt(n,16));
  const aa=rgb(a),bb=rgb(b);
  return '#'+aa.map((v,i)=>Math.round(v*(1-amount)+bb[i]*amount).toString(16).padStart(2,'0')).join('');
 }
 async function createImage(result,options,index=0){
  if(!result?.players?.length||!ALL_TEAM_INFO[result.team])throw Error('Finish a ranking first.');
  if(index!==0)throw Error('The whole ranking fits in one image.');
  // Use the site's distinctive fonts when available; full names also fit with fallback fonts.
  if(document.fonts)await Promise.all([
   document.fonts.load('700 24px "DM Sans"'),document.fonts.load('600 20px "DM Sans"'),document.fonts.load('500 16px "DM Sans"')
  ]).catch(()=>{});
  const p=plan(result,options),type=TYPES[options.type]||TYPES.png,info=ALL_TEAM_INFO[result.team],colors=info.colors,league=info.scope==='league';
  const canvas=document.createElement('canvas');canvas.width=p.size.width;canvas.height=p.size.height;
  const ctx=canvas.getContext('2d');if(!ctx)throw Error('Image export is unavailable in this browser.');
  ctx.scale(p.size.width/p.W,p.size.width/p.W);
  const paper='#101923',ink='#f0f4f8',brandInk=colors.highlight,wide=p.W/p.H>=1.25,pad=p.pad;
  ctx.fillStyle=paper;ctx.fillRect(0,0,p.W,p.H);
  const atmosphere=ctx.createRadialGradient(p.W,0,20,p.W,0,p.W*.72);
  atmosphere.addColorStop(0,blend(colors.primary,paper,.76));atmosphere.addColorStop(1,paper);
  ctx.fillStyle=atmosphere;ctx.fillRect(0,0,p.W,p.H);
  // Quiet circular accents create depth without full-width team stripes.
  ctx.save();ctx.globalAlpha=.18;ctx.strokeStyle=colors.highlight;ctx.lineWidth=1.5;
  for(const radius of [135,185,240]){ctx.beginPath();ctx.arc(p.W-52,22,radius,0,Math.PI*2);ctx.stroke();}
  ctx.restore();
  const badge=wide?66:96,top=wide?18:26;
  const [logo,photos]=await Promise.all([loadLogo(result.team),loadPhotos(p.players,league)]),outputRatio=canvas.width/p.W;
  if(logo){
   const scale=Math.min(badge/logo.naturalWidth,badge/logo.naturalHeight),w=logo.naturalWidth*scale,h=logo.naturalHeight*scale;
   ctx.drawImage(logo,pad+(badge-w)/2,top+(badge-h)/2,w,h);
  }else{
   // Keep exports available if the remote logo fails; no placeholder box is shown.
   text(ctx,info.code,pad+badge/2,top+badge*.64,badge-8,wide?24:32,ink,700,'center');
  }
  const titleX=pad+badge+22,titleWidth=p.W-pad-titleX;
  text(ctx,'MY FAVORITES',titleX,top+12,titleWidth,12,brandInk,600);
  text(ctx,league?info.league+' · '+result.pos+' FAVORITES':result.team,titleX,top+(wide?43:56),titleWidth,wide?33:44,ink,700);
  const scope=p.players.length<result.players.length?'Top '+p.players.length+' of '+result.players.length:'All '+p.players.length+' players';
  text(ctx,(league?'Across all '+(info.league==='NBA'?'30':'32')+' teams':result.pos==='ALL'?'All positions':result.pos)+' · '+scope,titleX,top+(wide?65:84),titleWidth,wide?13:16,'#b4c0ce',500);
  let missingPhotos=0;
  p.players.forEach((player,i)=>{
   const b=p.boxes[i],featured=b.featured,rank=i+1,mid=b.y+b.height/2,podium=featured&&!wide;
   rect(ctx,b.x,b.y,b.width,b.height,featured?18:8,featured?(i===0?blend(colors.primary,'#233142',.7):'#202c3b'):'#ffffff07',featured?(i===0?colors.highlight:'#ffffff18'):null);
   const rankWidth=league?Math.max(32/outputRatio,featured?(wide?32:38):(b.height<30?24:30)):featured?(wide?32:38):(b.height<30?24:30);
   const photoSize=podium?Math.min(96,b.height-68):featured?Math.min(52,b.height-12):Math.max(12,Math.min(40,b.height-6));
   const photoX=podium?b.x+(b.width-photoSize)/2:b.x+rankWidth+(featured?12:6);
   const photoY=podium?b.y+12:mid-photoSize/2,photoMid=photoY+photoSize/2;
   text(ctx,String(rank),b.x+(featured?14:8),podium?b.y+29:mid+(featured?10:6),rankWidth-8,featured?(podium?22:28):Math.min(22,b.height*.68),brandInk,700);
   ctx.save();ctx.beginPath();ctx.arc(photoX+photoSize/2,photoMid,photoSize/2,0,Math.PI*2);ctx.clip();
   ctx.fillStyle=blend(colors.primary,'#273747',.55);ctx.fillRect(photoX,photoY,photoSize,photoSize);
   if(photos[i]){
    const image=photos[i],scale=Math.min(photoSize/image.naturalWidth,photoSize/image.naturalHeight),iw=image.naturalWidth*scale,ih=image.naturalHeight*scale;
    ctx.drawImage(image.drawable||image,photoX+(photoSize-iw)/2,photoY+(photoSize-ih)/2,iw,ih);
   }else{
    missingPhotos++;text(ctx,player.number||'—',photoX+photoSize/2,photoMid+photoSize*.16,photoSize-4,photoSize*.4,'#fff',600,'center');
   }
   ctx.restore();
   const tx=podium?b.x+14:photoX+photoSize+(featured?14:8);
   const max=podium?b.width-28:b.x+b.width-tx-(featured?16:8);
   const nameFont=featured?(podium?24:26):Math.min(24,Math.max(10,b.height*(league?0.48:0.66)));
   text(ctx,player.name,tx,podium?b.y+b.height-34:featured||league?mid-1:mid+nameFont*.33,max,nameFont,ink,600);
   if(featured||league)text(ctx,(league?(ALL_TEAM_INFO[player.team]?.code||player.team)+' · ':'')+(player.rosterPosition||player.position)+' · #'+player.number,tx,podium?b.y+b.height-14:mid+(league?Math.max(14,8/outputRatio):18),max,league&&!featured?Math.min(12,b.height*.26):podium?13:12,'#b4c0ce',500);
  });
  ctx.fillStyle='#ffffff18';ctx.fillRect(pad,p.H-p.footer+(league?10/outputRatio:10),p.W-2*pad,1);
  text(ctx,'Fan Favorites · built by @markfm18',pad,p.H-(league?30/outputRatio:30),p.W-2*pad-260,league?Math.max(14,12/outputRatio):14,brandInk,600);
  text(ctx,p.players.length+' FAVORITES',p.W-pad,p.H-(league?30/outputRatio:30),220,league?Math.max(14,12/outputRatio):14,brandInk,700,'right');
  text(ctx,'Fan-made · Personal preferences · Images belong to their respective rights holders',pad,p.H-(league?10/outputRatio:10),p.W-pad*2,league?Math.max(10,8/outputRatio):10,'#9aa9b9',400);
  const blob=await new Promise((resolve,reject)=>{try{canvas.toBlob(b=>b?resolve(b):reject(Error('Could not create the image.')),type.mime,.94);}catch(e){reject(e);}});
  const actual=Object.values(TYPES).find(t=>t.mime===blob.type);if(!actual)throw Error('Unsupported image format.');
  return {blob,width:canvas.width,height:canvas.height,pages:1,index:0,start:1,end:p.players.length,missingPhotos,logoIncluded:!!logo,extension:actual.extension,players:p.players.map(p=>p.id)};
 }
 function crc32(bytes){let crc=0xffffffff;for(const b of bytes){crc^=b;for(let i=0;i<8;i++)crc=(crc>>>1)^((crc&1)?0xedb88320:0);}return (crc^0xffffffff)>>>0;}
 function zip(files){
  const encoder=new TextEncoder(),chunks=[],directory=[];let offset=0;
  const u16=(view,pos,n)=>view.setUint16(pos,n,true),u32=(view,pos,n)=>view.setUint32(pos,n,true);
  for(const file of files){
   const name=encoder.encode(file.name),data=file.bytes,crc=crc32(data),header=new Uint8Array(30+name.length),h=new DataView(header.buffer);
   u32(h,0,0x04034b50);u16(h,4,20);u16(h,6,0x800);u16(h,10,0);u16(h,12,0x21);u32(h,14,crc);u32(h,18,data.length);u32(h,22,data.length);u16(h,26,name.length);header.set(name,30);
   const entry=new Uint8Array(46+name.length),d=new DataView(entry.buffer);u32(d,0,0x02014b50);u16(d,4,20);u16(d,6,20);u16(d,8,0x800);u16(d,14,0x21);u32(d,16,crc);u32(d,20,data.length);u32(d,24,data.length);u16(d,28,name.length);u32(d,42,offset);entry.set(name,46);
   chunks.push(header,data);directory.push(entry);offset+=header.length+data.length;
  }
  const centralSize=directory.reduce((n,b)=>n+b.length,0),end=new Uint8Array(22),v=new DataView(end.buffer);
  u32(v,0,0x06054b50);u16(v,8,files.length);u16(v,10,files.length);u32(v,12,centralSize);u32(v,16,offset);
  return new Blob([...chunks,...directory,end],{type:'application/zip'});
 }
 function filename(result,options,image){
  const code=ALL_TEAM_INFO[result.team].code.toLowerCase(),scope=options.scope==='all'?'all':'top-'+options.scope;
  return (ALL_TEAM_INFO[result.team].scope==='league'?(ALL_TEAM_INFO[result.team].league.toLowerCase()+'-position-favorites-'):(ALL_TEAM_INFO[result.team].league==='NBA'?'nba-favorites-':'nfl-favorites-'))+code+'-'+result.pos.toLowerCase()+'-'+scope+'-'+options.size+(image?'.'+image.extension:'.zip');
 }
 function releasePreview(){if(previewUrl?.startsWith('blob:'))URL.revokeObjectURL(previewUrl);previewUrl=null;preview=null;$('export-preview-image').removeAttribute('src');$('export-preview-image').hidden=true;}
 function controls(){
  const pages=current?plan(current,config()).pages:1;
  for(const id of ['export-size','export-type','export-scope','export-preview'])$(id).disabled=busy||!current;
  $('export-download').disabled=busy||!preview;
  $('export-type').disabled=mobile||busy||!current;
  $('export-all').disabled=true;$('export-all').hidden=mobile||pages===1;
  $('export-all').textContent='Download all '+pages+' pages (ZIP)';
  $('export-prev').disabled=busy||!preview||pageIndex===0;$('export-next').disabled=busy||!preview||pageIndex>=pages-1;
  $('export-pages').hidden=!preview||pages===1;
  $('export-page-label').textContent='Page '+(pageIndex+1)+' of '+pages;
  $('export-download').textContent=mobile?'Save image':preview?'Download '+preview.extension.toUpperCase():'Download image';
  $('export-preview').textContent=busy?'Creating…':mobile?'Create image':'Preview image';
 }
 function changed(){revision++;busy=false;pageIndex=0;releasePreview();$('export-status').textContent=current?(mobile?'Choose a size and range, then create your image.':'Choose a size, file format and range, then preview.'):'';controls();}
 function setResults(result){
  const next=result?JSON.stringify([result.team,result.pos,result.players.map(p=>[p.id,p.name,p.team,p.number,p.position,p.rosterPosition,p.headshotUrl||''])]):'';
  if(next===fingerprint)return;fingerprint=next;current=result?{team:result.team,pos:result.pos,players:result.players.map(p=>({...p}))}:null;updateMode();changed();
 }
 async function showPreview(index){
  if(!current||busy)return;
  const ticket=++revision,result=current,options=config();busy=true;controls();$('export-status').textContent='Creating your results image…';
  try{
   const image=await createImage(result,options,index);if(ticket!==revision)return;
   const source=mobile?await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(Error('Could not open the image.'));reader.readAsDataURL(image.blob);}):URL.createObjectURL(image.blob);
   if(ticket!==revision){if(source.startsWith('blob:'))URL.revokeObjectURL(source);return;}
   releasePreview();preview=image;pageIndex=index;previewUrl=source;$('export-preview-image').src=previewUrl;$('export-preview-image').hidden=false;
   $('export-status').textContent=(mobile?'':image.width+' × '+image.height+' · ')+'All '+image.end+' selected players · One image'+(image.missingPhotos?' · '+image.missingPhotos+' unavailable photos use jersey numbers.':'');
  }catch(e){if(ticket===revision)$('export-status').textContent='Could not create the image. Please try again.';console.info('Results export:',e.message);}
  finally{if(ticket===revision){busy=false;controls();}}
 }
 function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);}
 async function downloadAll(){
  if(mobile||!current||busy)return;
  const ticket=++revision,result=current,options=config(),pages=plan(result,options).pages,files=[];busy=true;controls();
  try{
   for(let i=0;i<pages;i++){
    $('export-status').textContent='Creating page '+(i+1)+' of '+pages+'…';
    const image=await createImage(result,options,i);if(ticket!==revision)return;
    files.push({name:filename(result,options,image),bytes:new Uint8Array(await image.blob.arrayBuffer())});
   }
   if(ticket!==revision)return;download(zip(files),filename(result,options));
   $('export-status').textContent='Your ZIP contains all '+pages+' images, in ranking order.';
  }catch(e){if(ticket===revision)$('export-status').textContent='Could not create the download. Please try again.';console.info('Results ZIP:',e.message);}
  finally{if(ticket===revision){busy=false;controls();}}
 }
 async function saveImage(){
  if(!preview||!current||busy)return;
  if(!mobile){download(preview.blob,filename(current,config(),preview));return;}
  const file=new File([preview.blob],filename(current,config(),preview),{type:'image/png'});
  // Call share directly from the tap, after the image is ready, to retain user activation.
  if(navigator.share&&navigator.canShare?.({files:[file]})){
   try{await navigator.share({files:[file],title:'My '+current.team+' favorites'});return;}
   catch(e){if(e.name==='AbortError')return;}
  }
  $('export-status').textContent='Touch and hold the image, then choose Save Image or Save to Photos.';
  $('export-preview-image').scrollIntoView({behavior:'smooth',block:'center'});
 }
 updateMode();
 mobileQuery.addEventListener('change',()=>{mobile=mobileQuery.matches;updateMode();changed();});
 for(const id of ['export-size','export-type','export-scope'])$(id).addEventListener('change',changed);
 $('export-preview').onclick=()=>showPreview(0);
 $('export-prev').onclick=()=>showPreview(pageIndex-1);$('export-next').onclick=()=>showPreview(pageIndex+1);
 $('export-download').onclick=saveImage;
 $('export-all').onclick=downloadAll;controls();
 globalThis.ResultsExport={setResults,SIZES,TYPES,plan,createImage,zip,filename,logoUrl};
})();
