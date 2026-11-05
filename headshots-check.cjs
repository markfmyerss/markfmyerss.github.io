// Runs on GitHub's runner; no images are saved to disk.
const fs=require('node:fs'),vm=require('node:vm');
const {ROSTERS,HEADSHOTS}=vm.runInNewContext(fs.readFileSync(__dirname+'/data.js','utf8')+';({ROSTERS,HEADSHOTS})');
(async()=>{
 const players=Object.values(ROSTERS).flat();const pending=[...players],failed=[];let passed=0;
 await Promise.all(Array.from({length:6},async()=>{while(pending.length){const p=pending.shift(),record=HEADSHOTS[p.id];try{if(!record?.url||!record?.source)throw Error('missing source');const r=await fetch(record.url,{signal:AbortSignal.timeout(30000)});if(!r.ok)throw Error('HTTP '+r.status);if(!(r.headers.get('content-type')||'').startsWith('image/'))throw Error('not an image');const bytes=await r.arrayBuffer();if(bytes.byteLength<500)throw Error('empty image');passed++;}catch(e){failed.push(p.name+': '+e.message);}}}));
 console.log(passed+'/'+players.length+' official headshot URLs returned images');if(failed.length){console.error(failed.join('\n'));process.exitCode=1;}
})().catch(e=>{console.error(e);process.exitCode=1;});
