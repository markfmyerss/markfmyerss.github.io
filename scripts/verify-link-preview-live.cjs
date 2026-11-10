const fs=require('node:fs/promises'),assert=require('node:assert/strict'),crypto=require('node:crypto');
(async()=>{for(const file of ['index.html','nfl-favorites-sorter/index.html','assets/link-preview-v3.png']){
 const expected=await fs.readFile(file),hash=b=>crypto.createHash('sha256').update(b).digest('hex');let okay=false;
 for(let n=0;n<75;n++){const r=await fetch('https://markfmyerss.github.io/'+file+'?verify=preview-v3-'+n,{cache:'no-store'});
 if(r.ok){const actual=Buffer.from(await r.arrayBuffer());if(hash(actual)===hash(expected)){if(file.endsWith('.png'))assert.ok((r.headers.get('content-type')||'').includes('image/png'));okay=true;break;}}await new Promise(resolve=>setTimeout(resolve,4000));}
 assert.ok(okay,'Published preview differs: '+file);console.log('LIVE VERIFIED '+file);
}})().catch(e=>{console.error(e);process.exit(1)});
