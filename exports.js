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
 const $=id=>document.getElementById(id),photoCache=new Map();
 const mobileQuery=matchMedia('(max-width:700px), (pointer:coarse)');let mobile=mobileQuery.matches;
 let current=null,fingerprint='',revision=0,busy=false,pageIndex=0,preview=null,previewUrl=null;
 function config(){return {size:$('export-size').value,type:mobile?'png':$('export-type').value,scope:$('export-scope').value};}
 function updateMode(){
  const selected=$('export-size').value;$('export-size').replaceChildren();
  for(const size of (mobile?SIZES.slice(0,4):SIZES))$('export-size').add(new Option(mobile?size.label:size.label+' · '+size.width+'×'+size.height,size.id));
  $('export-size').value=(mobile?SIZES.slice(0,4):SIZES).some(s=>s.id===selected)?selected:'1x1';
  $('export-type-field').hidden=mobile;$('export-panel').classList.toggle('mobile-export',mobile);
  $('export-intro').textContent=mobile?'Choose an image size and how many players to include.':'Create a post, story or landscape card. Long rankings become readable pages.';
  $('export-note').textContent=mobile?'Create your image, then tap Save image or touch and hold it. Long rankings are saved one page at a time.':'Images are created in your browser. Nothing is uploaded. Downloads start only when you choose a download button. If a photo cannot be included, its jersey number appears instead.';
 }
 function plan(result,options){
  const size=SIZES.find(s=>s.id===options.size)||SIZES[0],W=1080,H=size.height*W/size.width,columns=size.width/size.height>=1.25?2:1;
  const header=columns===2?188:246,footer=columns===2?64:72;
  const rows=Math.max(1,Math.min(size.height/size.width>1.2?12:10,Math.floor((H-header-footer)/76))),capacity=rows*columns;
  const limit=options.scope==='all'?result.players.length:Number(options.scope);
  const players=result.players.slice(0,Math.min(result.players.length,limit||result.players.length));
  return {size,W,H,columns,header,footer,rows,capacity,players,pages:Math.max(1,Math.ceil(players.length/capacity))};
 }
 function loadPhoto(player){
  const url=HEADSHOTS[player.id]?.url;if(!url)return Promise.resolve(null);
  if(photoCache.has(url))return photoCache.get(url);
  const promise=new Promise(resolve=>{
   const image=new Image();let done=false;
   const finish=value=>{if(done)return;done=true;clearTimeout(timer);image.onload=null;image.onerror=null;resolve(value);};
   const timer=setTimeout(()=>finish(null),8000);
   image.crossOrigin='anonymous';image.referrerPolicy='no-referrer';image.onload=()=>finish(image.naturalWidth>0?image:null);image.onerror=()=>finish(null);image.src=url;
  });if(photoCache.size>=96)photoCache.delete(photoCache.keys().next().value);photoCache.set(url,promise);return promise;
 }
 function rect(ctx,x,y,w,h,r,fill,stroke){
  ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1;ctx.stroke();}
 }
 function text(ctx,value,x,y,max,font,color,weight=600,align='left'){
  let n=font;ctx.textAlign=align;
  do{ctx.font=weight+' '+n+'px system-ui,-apple-system,sans-serif';if(ctx.measureText(value).width<=max||n<=12)break;n--;}while(n>12);
  ctx.fillStyle=color;ctx.fillText(value,x,y,max);ctx.textAlign='left';
 }
 async function createImage(result,options,index=0){
  if(!result?.players?.length||!TEAM_INFO[result.team])throw Error('Finish a ranking first.');
  const p=plan(result,options);if(index<0||index>=p.pages)throw Error('Invalid result page.');
  const type=TYPES[options.type]||TYPES.png,info=TEAM_INFO[result.team],colors=info.colors;
  const canvas=document.createElement('canvas');canvas.width=p.size.width;canvas.height=p.size.height;
  const ctx=canvas.getContext('2d');if(!ctx)throw Error('Image export is unavailable in this browser.');
  ctx.scale(p.size.width/p.W,p.size.width/p.W);
  const bg=ctx.createLinearGradient(0,0,p.W,p.H);bg.addColorStop(0,'#191b25');bg.addColorStop(1,'#090a10');ctx.fillStyle=bg;ctx.fillRect(0,0,p.W,p.H);
  const glow=ctx.createRadialGradient(p.W,0,0,p.W,0,p.W);glow.addColorStop(0,colors.primary);glow.addColorStop(1,'#10111800');ctx.save();ctx.globalAlpha=.5;ctx.fillStyle=glow;ctx.fillRect(0,0,p.W,p.H);ctx.restore();
  const wide=p.columns===2,pad=56,top=wide?34:48;
  rect(ctx,pad,top-10,58,5,2,colors.highlight);
  text(ctx,info.code+'  /  '+(info.division||'NFL'),pad+76,top,450,15,colors.highlight,800);
  text(ctx,'NFL FAVORITES SORTER',p.W-pad,top,300,12,'#d0d2dc',700,'right');
  text(ctx,result.team,pad,wide?82:105,p.W-2*pad,wide?34:43,'#fff',800);
  text(ctx,'My favorites.',pad,wide?132:178,p.W-2*pad,wide?49:73,'#fff',850);
  const scope=p.players.length<result.players.length?'Top '+p.players.length+' of '+result.players.length:'All '+p.players.length+' ranked players';
  text(ctx,(result.pos==='ALL'?'All positions':result.pos)+'  ·  '+scope,pad,wide?163:216,p.W-2*pad,wide?17:20,'#c0c4d1',500);
  const start=index*p.capacity,items=p.players.slice(start,start+p.capacity),photos=await Promise.all(items.map(loadPhoto));
  const gutter=24,columnWidth=(p.W-pad*2-gutter*(p.columns-1))/p.columns,rowHeight=(p.H-p.header-p.footer)/p.rows;
  let missingPhotos=0;
  items.forEach((player,i)=>{
   const column=Math.floor(i/p.rows),row=i%p.rows,x=pad+column*(columnWidth+gutter),y=p.header+row*rowHeight,w=columnWidth,h=rowHeight-8,rank=start+i+1;
   rect(ctx,x,y,w,h,12,rank<=3?'#ffffff0e':'#ffffff06',rank===1?colors.highlight:'#ffffff12');
   const mid=y+h/2,rankWidth=wide?42:53,photoSize=Math.min(wide?56:80,h-16),photoX=x+rankWidth+16,photoY=mid-photoSize/2;
   text(ctx,String(rank).padStart(2,'0'),x+14,mid+9,rankWidth-10,wide?23:28,rank<=3?colors.highlight:'#aeb4c4',800);
   ctx.save();ctx.beginPath();ctx.arc(photoX+photoSize/2,mid,photoSize/2,0,Math.PI*2);ctx.clip();ctx.fillStyle='#232632';ctx.fillRect(photoX,photoY,photoSize,photoSize);
   if(photos[i]){const image=photos[i],scale=Math.min(photoSize/image.naturalWidth,photoSize/image.naturalHeight),iw=image.naturalWidth*scale,ih=image.naturalHeight*scale;ctx.drawImage(image,photoX+(photoSize-iw)/2,photoY+(photoSize-ih)/2,iw,ih);}
   else{missingPhotos++;ctx.fillStyle=colors.primary;ctx.fillRect(photoX,photoY,photoSize,photoSize);text(ctx,player.number||'—',photoX+photoSize/2,mid+photoSize*.14,photoSize-10,photoSize*.42,'#fff',800,'center');}
   ctx.restore();
   const tx=photoX+photoSize+16,max=x+w-tx-18;
   text(ctx,player.name,tx,mid-2,max,Math.min(wide?27:34,h*.34),'#fff',750);
   text(ctx,(player.rosterPosition||player.position)+'  ·  #'+player.number,tx,mid+23,max,wide?15:17,'#b9bfce',500);
  });
  const end=start+items.length;
  text(ctx,'nfl-favorites-sorter',pad,p.H-30,420,14,'#aab1c2',600);
  text(ctx,'Ranks '+(start+1)+'–'+end+'  ·  Page '+(index+1)+' / '+p.pages,p.W-pad,p.H-30,480,15,colors.highlight,700,'right');
  text(ctx,'Fan-made · Personal preferences · Images belong to their respective rights holders',pad,p.H-10,p.W-pad*2,10,'#858d9e',400);
  const blob=await new Promise((resolve,reject)=>{try{canvas.toBlob(b=>b?resolve(b):reject(Error('Could not create the image.')),type.mime,.94);}catch(e){reject(e);}});
  // Unsupported encoders can silently return PNG; keep the extension truthful.
  const actual=Object.values(TYPES).find(t=>t.mime===blob.type);if(!actual)throw Error('Unsupported image format.');
  return {blob,width:canvas.width,height:canvas.height,pages:p.pages,index,start:start+1,end,missingPhotos,extension:actual.extension,players:items.map(p=>p.id)};
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
  const code=TEAM_INFO[result.team].code.toLowerCase(),scope=options.scope==='all'?'all':'top-'+options.scope;
  return 'nfl-favorites-'+code+'-'+result.pos.toLowerCase()+'-'+scope+'-'+options.size+(image?'-'+String(image.index+1).padStart(2,'0')+'-of-'+String(image.pages).padStart(2,'0')+'.'+image.extension:'.zip');
 }
 function releasePreview(){if(previewUrl?.startsWith('blob:'))URL.revokeObjectURL(previewUrl);previewUrl=null;preview=null;$('export-preview-image').removeAttribute('src');$('export-preview-image').hidden=true;}
 function controls(){
  const pages=current?plan(current,config()).pages:1;
  for(const id of ['export-size','export-type','export-scope','export-preview'])$(id).disabled=busy||!current;
  $('export-download').disabled=busy||!preview;
  $('export-type').disabled=mobile||busy||!current;
  $('export-all').disabled=mobile||busy||!current;$('export-all').hidden=mobile||pages===1;
  $('export-all').textContent='Download all '+pages+' pages (ZIP)';
  $('export-prev').disabled=busy||!preview||pageIndex===0;$('export-next').disabled=busy||!preview||pageIndex>=pages-1;
  $('export-pages').hidden=!preview||pages===1;
  $('export-page-label').textContent='Page '+(pageIndex+1)+' of '+pages;
  $('export-download').textContent=mobile?'Save image':preview?'Download '+preview.extension.toUpperCase():'Download image';
  $('export-preview').textContent=busy?'Creating…':mobile?'Create image':'Preview image';
 }
 function changed(){revision++;busy=false;pageIndex=0;releasePreview();$('export-status').textContent=current?(mobile?'Choose a size and range, then create your image.':'Choose a size, file format and range, then preview.'):'';controls();}
 function setResults(result){
  const next=result?JSON.stringify([result.team,result.pos,result.players.map(p=>[p.id,p.name,p.number,p.position,p.rosterPosition])]):'';
  if(next===fingerprint)return;fingerprint=next;current=result?{team:result.team,pos:result.pos,players:result.players.map(p=>({...p}))}:null;changed();
 }
 async function showPreview(index){
  if(!current||busy)return;
  const ticket=++revision,result=current,options=config();busy=true;controls();$('export-status').textContent='Creating your results image…';
  try{
   const image=await createImage(result,options,index);if(ticket!==revision)return;
   const source=mobile?await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(Error('Could not open the image.'));reader.readAsDataURL(image.blob);}):URL.createObjectURL(image.blob);
   if(ticket!==revision){if(source.startsWith('blob:'))URL.revokeObjectURL(source);return;}
   releasePreview();preview=image;pageIndex=index;previewUrl=source;$('export-preview-image').src=previewUrl;$('export-preview-image').hidden=false;
   $('export-status').textContent=(mobile?'':image.width+' × '+image.height+' · ')+'Ranks '+image.start+'–'+image.end+' · Page '+(index+1)+' of '+image.pages+(image.missingPhotos?' · '+image.missingPhotos+' unavailable photos use jersey numbers.':'');
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
 globalThis.ResultsExport={setResults,SIZES,TYPES,plan,createImage,zip,filename};
})();
