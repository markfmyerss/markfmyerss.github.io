const { chromium }=require('@playwright/test');
const crypto=require('node:crypto');
(async()=>{
 const rows=[];
 for(const [team,name,id] of [[2,'Dillon Mitchell',1641759],[18,'Jaden Akins',1643022],[1,'Henri Veesaar',1643539]]){
 const r=await fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/'+team+'/roster');if(!r.ok)throw Error(r.status);
 const roster=await r.json();const a=roster.athletes.find(a=>a.fullName===name);if(!a?.headshot?.href)throw Error('Missing '+name);
 const response=await fetch(a.headshot.href);if(!response.ok)throw Error(response.status);
 const b=Buffer.from(await response.arrayBuffer());if(b.subarray(0,8).toString('hex')!=='89504e470d0a1a0a')throw Error('Not PNG');
 const item={id,espnId:a.id,name,team:roster.team?.displayName,url:a.headshot.href,source:a.links.find(x=>x.rel.includes('playercard')).href,path:'assets/nba/headshots/'+id+'.png',bytes:b.length,width:b.readUInt32BE(16),height:b.readUInt32BE(20),sha256:crypto.createHash('sha256').update(b).digest('hex')};
 console.log('ESPN_META:'+JSON.stringify(item));const s=b.toString('base64');for(let n=0;n<s.length;n+=16000)console.log('ESPN_IMAGE_'+id+'_CHUNK_'+String(n/16000).padStart(4,'0')+':'+s.slice(n,n+16000));
 rows.push({...item,data:'data:image/png;base64,'+s});
 }
 const browser=await chromium.launch({headless:true});const page=await browser.newPage({viewport:{width:1100,height:450}});
 await page.setContent('<body style="margin:0;background:#eee;font:20px Arial;display:flex">'+rows.map(r=>'<div style="width:360px;text-align:center"><h3>'+r.name+'</h3><p>'+r.team+'</p><img width="350" src="'+r.data+'"></div>').join('')+'</body>');
 await page.locator('img').evaluateAll(imgs=>Promise.all(imgs.map(i=>i.decode())));
 const sheet=(await page.screenshot()).toString('base64');for(let n=0;n<sheet.length;n+=16000)console.log('ESPN_SHEET_CHUNK_'+String(n/16000).padStart(4,'0')+':'+sheet.slice(n,n+16000));
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
