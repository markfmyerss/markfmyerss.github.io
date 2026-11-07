const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const DATA_FILES=['data.js','nba-data.js','nba-central-data.js','nba-southeast-data.js','nba-northwest-data.js','nba-pacific-data.js','nba-southwest-data.js','weekly-rosters.js'];
const NFL_POS=['ALL','QB','RB','WR','TE','OL','DL','LB','DB','ST'],NBA_POS=['ALL','G','F','C'];
function loadData(root='.'){const source=DATA_FILES.filter(p=>fs.existsSync(path.join(root,p))).map(p=>fs.readFileSync(path.join(root,p),'utf8')).join('\n');return vm.runInNewContext(source+';({TEAM_INFO,ROSTERS,HEADSHOTS,NBA_TEAM_INFO,NBA_ROSTERS,NBA_HEADSHOTS,KNOWN_ROSTER_IDS:typeof ROSTER_KNOWN_IDS==="undefined"?null:ROSTER_KNOWN_IDS})');}
const clean=s=>s.replace(/<[^>]*>/g,'').replace(/&#x([0-9a-f]+);/gi,(_,h)=>String.fromCodePoint(parseInt(h,16))).replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n)).replace(/&apos;|&rsquo;|&#39;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&').replace(/&nbsp;/g,' ').trim();
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const group=p=>({FB:'RB',HB:'RB',T:'OL',G:'OL',C:'OL',OT:'OL',OG:'OL','C/G':'OL','G/T':'OL','T/G':'OL','G/C':'OL',DT:'DL',DE:'DL',NT:'DL',EDGE:'LB',ILB:'LB',OLB:'LB',CB:'DB',S:'DB',SS:'DB',FS:'DB',K:'ST',P:'ST',LS:'ST',RS:'ST',KR:'ST',PR:'ST'})[p]||p;
async function get(url,kind='text'){let failure;for(let attempt=0;attempt<3;attempt++){try{const r=await fetch(url,{headers:{'user-agent':'Mozilla/5.0 FanFavoritesRosterCheck'},signal:AbortSignal.timeout(35000)});if(!r.ok)throw Error('HTTP '+r.status+' '+url);return kind==='bytes'?Buffer.from(await r.arrayBuffer()):kind==='json'?r.json():r.text();}catch(e){failure=e;if(attempt<2)await new Promise(r=>setTimeout(r,1000*(attempt+1)));}}throw failure;}
function parseNFL(html,info,team){
 const table=[...html.matchAll(/<table\b[\s\S]*?<\/table>/gi)].map(m=>m[0]).find(t=>/<caption[^>]*>\s*Active\s*<\/caption>/i.test(t));assert.ok(table,'Official Active roster table unavailable');
 const players=[];
 for(const row of [...table.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)]){
  const cells=[...row[1].matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)].map(m=>m[1]);if(!cells.length)continue;assert.ok(cells.length>=3,'Malformed active roster row');
  const name=clean(cells[0].match(/class="[^"]*\bnfl-o-roster__player-name\b[^"]*"[^>]*>([\s\S]*?)<\/span>/)?.[1]||'');assert.ok(name,'Player name missing');
  const href=cells[0].match(/href="([^"]+)"/)?.[1];assert.ok(href,'Player profile missing');const profile=new URL(href,info.source).href;
  const rosterPosition=clean(cells[2]).toUpperCase(),positions=[...new Set(rosterPosition.split(/[/-]/).map(group))];assert.ok(positions.every(p=>NFL_POS.includes(p)&&p!=='ALL'),'Unknown NFL position '+rosterPosition);
  const urls=[...cells[0].matchAll(/https:\/\/static\.clubs\.nfl\.com\/[^"\s<>]+/g)].map(m=>m[0].replace(/,+$/,'').replace(/&amp;/g,'&').replace('/t_lazy/',''));
  const imageCandidate=urls.find(u=>u.includes('t_thumb_squared_3x'))||urls[0]||null;
  players.push({name,number:clean(cells[1]),position:positions[0],...(positions.length>1?{positions}:{}),rosterPosition,team,profile,imageCandidate});
 }
 assert.ok(players.length>=40&&players.length<=100,'Suspicious NFL active roster count '+players.length);
 assert.equal(new Set(players.map(p=>p.profile)).size,players.length,'Duplicate NFL profile');
 return players;
}
function parseNBA(html,info,team){
 const match=html.match(/<script[^>]*id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);assert.ok(match,'NBA structured roster unavailable');
 const rows=JSON.parse(match[1]).props.pageProps.team.roster;assert.ok(rows.length>=12&&rows.length<=25,'Suspicious NBA roster count');
 const players=rows.map(p=>{assert.equal(Number(p.TeamID),info.nbaId,'NBA team mismatch');assert.ok(Number.isSafeInteger(p.PLAYER_ID)&&p.PLAYER_ID>0);const positions=p.POSITION.split(/[-/]/);assert.ok(positions.every(p=>['G','F','C'].includes(p)),'NBA position');return {id:'NBA-'+p.PLAYER_ID,nbaId:p.PLAYER_ID,name:p.PLAYER,number:String(p.NUM??''),position:positions[0],positions,rosterPosition:p.POSITION,team,source:info.source,profile:'https://www.nba.com/player/'+p.PLAYER_ID+'/'+p.PLAYER_SLUG};});
 assert.equal(new Set(players.map(p=>p.id)).size,players.length,'Duplicate NBA player');return players;
}
function assignNFLIds(players,previous){
 const all=Object.values(previous).flat();
 for(const p of players){const alias=n=>normalize(n)==='olaivavegaioane'?'vegaioane':normalize(n);let matches=all.filter(old=>old.profile&&old.profile.replace(/\/$/,'')===p.profile.replace(/\/$/,''));if(matches.length!==1)matches=(previous[p.team]||[]).filter(old=>alias(old.name)===alias(p.name));
 p.id=matches.length===1?matches[0].id:'NFL-'+crypto.createHash('sha256').update(p.profile).digest('hex').slice(0,16);
 }
 assert.equal(new Set(players.map(p=>p.id)).size,players.length,'Ambiguous NFL identity');return players;
}
const canonical=players=>JSON.stringify(players.map(p=>[p.id,p.name,p.number,p.position,p.rosterPosition,p.positions||[]]));
function stamp(players){const value=canonical(players);let hash=2166136261;for(let i=0;i<value.length;i++){hash^=value.charCodeAt(i);hash=Math.imul(hash,16777619);}return (hash>>>0).toString(16).padStart(8,'0');}
const filtered=(players,pos)=>players.filter(p=>pos==='ALL'||(p.positions||[p.position]).includes(pos));
function writeJSON(file,value){fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,JSON.stringify(value)+'\n');}
function archiveData(data,root='.'){
 const indexFile=path.join(root,'assets/roster-snapshots/index.json'),index=fs.existsSync(indexFile)?JSON.parse(fs.readFileSync(indexFile,'utf8')):{version:1,snapshots:{}};
 for(const sport of ['NFL','NBA']){const info=sport==='NFL'?data.TEAM_INFO:data.NBA_TEAM_INFO,rosters=sport==='NFL'?data.ROSTERS:data.NBA_ROSTERS,shots=sport==='NFL'?data.HEADSHOTS:data.NBA_HEADSHOTS;
  for(const [team,players]of Object.entries(rosters)){const meta=info[team],verified=meta.verified||(sport==='NFL'?'November 5, 2026':'November 6, 2026'),file='assets/roster-snapshots/'+sport+'/'+meta.code+'/'+stamp(players)+'.json',snapshot={version:1,sport,team,code:meta.code,verified,players,headshots:Object.fromEntries(players.map(p=>[p.id,shots[p.id]||null]))};
   if(!fs.existsSync(path.join(root,file)))writeJSON(path.join(root,file),snapshot);else assert.equal(canonical(JSON.parse(fs.readFileSync(path.join(root,file),'utf8')).players),canonical(players),'Roster archive hash collision');
   for(const pos of sport==='NFL'?NFL_POS:NBA_POS){const roster=filtered(players,pos);if(roster.length){const key=[sport,meta.code,pos,stamp(roster)].join('.');const old=index.snapshots[key];if(old&&old.path!==file){const saved=JSON.parse(fs.readFileSync(path.join(root,old.path),'utf8'));assert.equal(canonical(filtered(saved.players,pos)),canonical(roster),'Filtered roster archive hash collision');}index.snapshots[key]={path:file,verified};}}
  }
 }
 writeJSON(indexFile,index);return index;
}
async function mapLimit(items,limit,fn){const queue=[...items],out=[];await Promise.all(Array.from({length:limit},async()=>{while(queue.length){const item=queue.shift();out.push(await fn(item));}}));return out;}
module.exports={DATA_FILES,NFL_POS,NBA_POS,loadData,clean,normalize,group,get,parseNFL,parseNBA,assignNFLIds,canonical,stamp,filtered,writeJSON,archiveData,mapLimit};
