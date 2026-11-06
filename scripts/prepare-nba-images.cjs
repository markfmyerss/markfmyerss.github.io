// Fetch original NBA thumbnails on GitHub and emit immutable, reviewable PNG assets.
const fs=require('node:fs'),vm=require('node:vm'),crypto=require('node:crypto'),assert=require('node:assert/strict');
(async()=>{
 const box={};vm.runInNewContext(fs.readFileSync('nba-data.js','utf8')+';result={info:NBA_TEAM_INFO,rosters:NBA_ROSTERS,shots:NBA_HEADSHOTS};',box);
 const {info,rosters,shots}=box.result,code=process.argv[2],team=Object.values(info).find(t=>t.code===code);assert.ok(team,'known NBA team');
 let count=0;
 for(const player of rosters[team.name]){
  const meta=shots[player.id];if(!meta?.url){console.log('NBA_IMAGE_FALLBACK '+player.id);continue;}
  const remote=(meta.originalUrl||meta.url).replace('/1040x760/','/260x190/');
  assert.equal(new URL(remote).hostname,'cdn.nba.com');
  const r=await fetch(remote,{headers:{accept:'image/png'},signal:AbortSignal.timeout(25000)});assert.ok(r.ok,'NBA image '+player.name+' '+r.status);
  const bytes=Buffer.from(await r.arrayBuffer());assert.equal(bytes.subarray(0,8).toString('hex'),'89504e470d0a1a0a');
  const sha=crypto.createHash('sha256').update(bytes).digest('hex');
  if(sha==='b3ebe78bfd1cecb8880e51e6a48c9093c5cfb7065f981826d12fb4c01a1b0965'){console.log('NBA_IMAGE_FALLBACK '+player.id);continue;}
  assert.equal(bytes.readUInt32BE(16),260);assert.equal(bytes.readUInt32BE(20),190);
  const encoded=bytes.toString('base64');
  for(let i=0,n=0;i<encoded.length;i+=16000,n++)console.log('NBA_IMAGE_'+player.nbaId+'_CHUNK_'+String(n).padStart(4,'0')+':'+encoded.slice(i,i+16000));
  console.log('NBA_IMAGE_SOURCE '+JSON.stringify({id:player.nbaId,url:remote,bytes:bytes.length,sha256:sha}));count++;
 }
 console.log('PASS '+team.name+': '+count+' official PNG thumbnails prepared on GitHub');
})().catch(e=>{console.error(e);process.exitCode=1;});