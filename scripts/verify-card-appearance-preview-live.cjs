const fs=require('node:fs/promises'),assert=require('node:assert/strict');
(async()=>{for(const file of ['index.html','trial.css','app.js','appearance.js','bootstrap.js','trial.js']){
 const expected=await fs.readFile('previews/card-appearance/'+file,'utf8');let okay=false;
 for(let n=0;n<75;n++){const r=await fetch('https://markfmyerss.github.io/previews/card-appearance/'+file+'?verify=card-preview-'+n,{cache:'no-store'});if(r.ok&&await r.text()===expected){okay=true;break;}await new Promise(r=>setTimeout(r,4000));}assert.ok(okay,'Preview not published: '+file);console.log('LIVE PREVIEW VERIFIED '+file);}
 assert.ok(!(await fs.readFile('index.html','utf8')).includes('card-appearance/trial.css'),'Main site unexpectedly uses trial');
})().catch(e=>{console.error(e);process.exit(1)});
