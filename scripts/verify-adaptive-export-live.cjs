const fs=require('node:fs/promises'),assert=require('node:assert/strict');
(async()=>{for(const file of ['index.html','exports.js']){
 const expected=await fs.readFile(file,'utf8');let okay=false;
 for(let n=0;n<75;n++){const r=await fetch('https://markfmyerss.github.io/'+file+'?verify=adaptive-layout-v5-'+n,{cache:'no-store'});if(r.ok&&await r.text()===expected){okay=true;break;}await new Promise(r=>setTimeout(r,4000));}
 assert.ok(okay,'Published file differs: '+file);console.log('LIVE VERIFIED '+file);
}})().catch(e=>{console.error(e);process.exit(1)});
