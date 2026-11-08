const fs=require('node:fs'),path=require('node:path');
const textFiles={},binaryFiles={};for(const p of ['weekly-rosters.js','nba-position-data.js','assets/nba-position-status.json','index.html','assets/roster-refresh-status.json'])textFiles[p]=fs.readFileSync(p,'utf8');
function walk(dir){if(!fs.existsSync(dir))return;for(const item of fs.readdirSync(dir,{withFileTypes:true})){const p=path.posix.join(dir,item.name);if(item.isDirectory())walk(p);else if(p.endsWith('.json'))textFiles[p]=fs.readFileSync(p,'utf8');else if(p.endsWith('.png'))binaryFiles[p]=fs.readFileSync(p).toString('base64');}}
walk('assets/roster-snapshots');walk('assets/roster-headshots');
const source=JSON.stringify({textFiles,binaryFiles});for(let i=0,n=0;i<source.length;i+=10000,n++)console.log('WEEKLY_CANDIDATE_CHUNK_'+String(n).padStart(4,'0')+':'+JSON.stringify(source.slice(i,i+10000)));
console.log('PASS candidate export '+Object.keys(textFiles).length+' text files and '+Object.keys(binaryFiles).length+' immutable portraits');
