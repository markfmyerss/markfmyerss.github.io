const fs=require('node:fs/promises'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const PAL={"BAL":["DF4601","000000"],"BOS":["BD3039","0C2340"],"NYY":["003087","E4002C"],"TB":["092C5C","8FBCE6"],"TOR":["134A8E","E8291C"],"CWS":["27251F","C4CED4"],"CLE":["00385D","E50022"],"DET":["0C2340","FA4616"],"KC":["004687","BD9B60"],"MIN":["002B5C","D31145"],"ATH":["003831","EFB21E"],"HOU":["002D62","EB6E1F"],"LAA":["BA0021","003263"],"SEA":["0C2C56","005C5C"],"TEX":["003278","C0111F"],"ATL":["CE1141","13274F"],"MIA":["00A3E0","EF3340"],"NYM":["002D72","FF5910"],"PHI":["E81828","002D72"],"WSH":["AB0003","14225A"],"CHC":["0E3386","CC3433"],"CIN":["C6011F","000000"],"MIL":["12284B","FFC52F"],"PIT":["FDB827","27251F"],"STL":["C41E3A","0C2340"],"AZ":["A71930","E3D4AD"],"COL":["33006F","C4CED4"],"LAD":["005A9C","EF3E42"],"SD":["2F241D","FFC425"],"SF":["FD5A1E","27251F"]},api='https://statsapi.mlb.com/api/v1/',positions=['C','1B','2B','3B','SS','LF','CF','RF','DH','SP','RP'],rounds={R:'Final 28-man roster',F:'Wild Card Series',D:'Division Series',L:'League Championship Series',W:'World Series'};
async function get(url,bytes=false){let err;for(let n=0;n<3;n++)try{const r=await fetch(url,{signal:AbortSignal.timeout(40000)});if(!r.ok)throw Error(r.status+' '+url);return bytes?Buffer.from(await r.arrayBuffer()):r.json();}catch(e){err=e;}throw err;}
const sha=b=>crypto.createHash('sha256').update(b).digest('hex'),json=x=>JSON.stringify(x,null,2)+'\n';
async function write(p,x){await fs.mkdir(require('node:path').dirname(p),{recursive:true});await fs.writeFile(p,typeof x==='string'||Buffer.isBuffer(x)?x:json(x));}
async function parallel(items,fn,limit=5){const results=[];let cursor=0;await Promise.all(Array.from({length:Math.min(limit,items.length)},async()=>{while(cursor<items.length){const i=cursor++;results[i]=await fn(items[i],i);}}));return results;}
const splits=(p,group)=>(p?.stats||[]).filter(s=>s.group.displayName===group).flatMap(s=>s.splits||[]).filter(s=>s.gameType==='R'&&s.sport?.id===1);
function sum(p,group,key){const rows=splits(p,group),totals=rows.filter(s=>!s.team);return (totals.length?totals:rows).reduce((n,s)=>n+(Number(s.stat[key])||0),0);}
function field(p){const m={};for(const s of splits(p,'fielding')){const pos=s.position?.abbreviation||s.stat.position?.abbreviation;if(pos)m[pos]=(m[pos]||0)+(s.stat.gamesStarted||0);}return m;}
function primary(p,prior,roster){
 const f=field(p),old=field(prior),roles=Object.entries(Object.keys(f).length?f:old).filter(([pos])=>positions.includes(pos)||pos==='P').sort((a,b)=>b[1]-a[1]);
 let role=roles[0]?.[0]||roster.position?.abbreviation||p.primaryPosition?.abbreviation;
 if(role==='P'||role==='TWP'){const source=sum(p,'pitching','gamesPlayed')?p:prior,gs=sum(source,'pitching','gamesStarted'),gp=sum(source,'pitching','gamesPlayed');return gs>=Math.max(1,gp/2)?'SP':'RP';}
 assert(positions.includes(role),'Unknown role '+p.fullName+' '+role);return role;
}
(async()=>{
 const teams=(await get(api+'teams?sportId=1&season=2026')).teams.sort((a,b)=>a.league.id-b.league.id||a.division.id-b.division.id||a.name.localeCompare(b.name));assert.equal(teams.length,30);
 const calendar=await get(api+'schedule?sportId=1&season=2026&gameType=R,F,D,L,W'),games=calendar.dates.flatMap(d=>d.games.filter(g=>g.status.abstractGameState==='Final').map(g=>({...g,date:d.date})));
 const records=await parallel(teams,async t=>{
  const played=games.filter(g=>[g.teams.home.team.id,g.teams.away.team.id].includes(t.id)),latest=played.at(-1);assert(latest);
  const type=latest.gameType,series=played.filter(g=>g.gameType===type),date=series.at(-1).date,rosterUrl=api+'teams/'+t.id+'/roster?rosterType=active&season=2026&date='+date+'&hydrate=person';
  const active=await get(rosterUrl),full=await get(api+'teams/'+t.id+'/roster?rosterType=40Man&season=2026&date='+date+'&hydrate=person');
  assert.equal(active.roster.length,type==='R'?28:26,t.name+' incorrect historical active roster');
  assert(active.roster.every(p=>p.status.code==='A'));assert.equal(new Set(active.roster.map(p=>p.person.id)).size,active.roster.length);
  return {t,type,date,rosterUrl,active:active.roster,full:full.roster};
 });
 const ids=[...new Set(records.flatMap(r=>r.full.map(p=>p.person.id).concat(r.active.map(p=>p.person.id))))],people={2026:new Map(),2025:new Map()};
 for(const year of [2026,2025]){
  const groups=Array.from({length:Math.ceil(ids.length/40)},(_,i)=>ids.slice(i*40,i*40+40));
  await parallel(groups,async ids=>{const x=await get(api+'people?personIds='+ids.join(',')+'&hydrate=stats(group=[hitting,pitching,fielding],type=[season],season='+year+')');for(const p of x.people)people[year].set(p.id,p);});
 }
 const info={},rosters={},heads={},audit={season:2026,verified:new Date().toISOString(),teams:[],roles:[],portraitFallbacks:[],paletteChecks:[]};
 for(const r of records){
  const t=r.t,code=t.abbreviation,name=t.name,base=new Set(r.active.map(p=>p.person.id));
  const injured=r.full.filter(p=>!base.has(p.person.id)&&/^D/.test(p.status.code)).filter(p=>{
   const a=people[2026].get(p.person.id),b=people[2025].get(p.person.id);
   return p.person.id===676059||sum(a,'hitting','plateAppearances')>=200||sum(b,'hitting','plateAppearances')>=250||sum(a,'pitching','gamesStarted')>=5||sum(b,'pitching','gamesStarted')>=10||sum(a,'pitching','gamesPlayed')>=25||sum(b,'pitching','gamesPlayed')>=40||sum(a,'pitching','saves')>=5||sum(b,'pitching','saves')>=5;
  });
  const players=[...r.active,...injured].map(row=>{
   const p=people[2026].get(row.person.id)||row.person,prior=people[2025].get(row.person.id),pos=primary(p,prior,row),injury=!base.has(p.id);
   const item={id:'MLB-'+p.id,mlbId:p.id,name:p.fullName,number:String(row.jerseyNumber||p.primaryNumber||''),position:pos,rosterPosition:pos,team:name,profile:'https://www.mlb.com/player/'+(p.nameSlug||p.id),...(injury?{injuryInclusion:p.id===676059?'Missed the 2026 season; elbow surgery':row.status.description+' at the 2026 snapshot'}:{})};
   audit.roles.push({id:item.id,name:item.name,team:name,position:pos,sourcePosition:row.position,starts2026:field(p),starts2025:field(prior),pa2026:sum(p,'hitting','plateAppearances'),pa2025:sum(prior,'hitting','plateAppearances'),ipOuts2026:sum(p,'pitching','outs'),startsPitching2026:sum(p,'pitching','gamesStarted'),gamesPitching2026:sum(p,'pitching','gamesPlayed'),saves2026:sum(p,'pitching','saves'),injury});
   return item;
  }).sort((a,b)=>a.name.localeCompare(b.name));rosters[name]=players;
  const colors=PAL[code];assert(colors,'Palette missing '+code);const logoURL='https://www.mlbstatic.com/team-logos/'+t.id+'.svg',logo=await get(logoURL,true);assert(logo.toString().includes('<svg'),'Invalid logo '+name);await write('assets/mlb/logos/'+code+'.svg',logo);
  audit.paletteChecks.push({team:name,source:logoURL,primary:'#'+colors[0],appearsInLogo:logo.toString().toLowerCase().includes(colors[0].toLowerCase())});
  info[name]={name,code,nickname:t.teamName||name.split(' ').slice(-1)[0],singular:'player',league:'MLB',conference:t.league.id===103?'AL':'NL',division:t.division.name.split(' ').slice(-1)[0],mlbId:t.id,verified:'November 9, 2026',snapshotDate:r.date,snapshotRound:rounds[r.type],baseRosterCount:r.active.length,injuryAdditions:injured.map(p=>p.person.fullName),source:'https://www.mlb.com/'+t.fileCode+'/roster/'+r.date,logo:'assets/mlb/logos/'+code+'.svg',colors:{primary:'#'+colors[0],accent:'#'+colors[1],highlight:'#'+colors[1],ink:'#101014'}};
  audit.teams.push({team:name,mlbId:t.id,code,type:r.type,round:rounds[r.type],date:r.date,source:r.rosterUrl,activeIds:r.active.map(p=>p.person.id),injuryAdditions:injured.map(p=>({id:p.person.id,name:p.person.fullName,status:p.status})),count:players.length});
 }
 assert(rosters['Baltimore Orioles'].some(p=>p.id==='MLB-676059'&&p.injuryInclusion),'Westburg missing');
 const all=Object.values(rosters).flat();assert.equal(new Set(all.map(p=>p.id)).size,all.length,'Player on multiple snapshots');
 const byId=new Map(audit.roles.map(r=>[r.id,r])),pool=[];
 for(const pos of positions){
  const eligible=all.filter(p=>p.position===pos),special=eligible.filter(p=>p.injuryInclusion);
  let chosen=[];
  if(['SP','RP'].includes(pos)){
   const candidates=eligible.filter(p=>{const r=byId.get(p.id);return pos==='SP'?r.ipOuts2026>=300&&r.startsPitching2026>=15:r.ipOuts2026>=120||r.saves2026>=10;}).sort((a,b)=>{
    const x=byId.get(a.id),y=byId.get(b.id);return (pos==='RP'?y.saves2026*6-x.saves2026*6:0)+y.ipOuts2026-x.ipOuts2026||a.id.localeCompare(b.id);
   });
   const protectedIds=new Set(special.map(p=>p.id));chosen=[...special,...candidates.filter(p=>!protectedIds.has(p.id)).slice(0,Math.max(0,75-special.length))];
  }else{
   for(const team of teams.map(t=>t.name)){
    const ranked=eligible.filter(p=>p.team===team).sort((a,b)=>byId.get(b.id).pa2026-byId.get(a.id).pa2026);
    const starter=ranked.find(p=>byId.get(p.id).pa2026>=(pos==='C'?100:150));if(starter)chosen.push(starter);
   }
   chosen=[...new Map([...chosen,...special].map(p=>[p.id,p])).values()];
  }
  assert(chosen.length>=10&&chosen.length<=75,'Suspicious position pool '+pos+' '+chosen.length);pool.push(...chosen);
 }
 assert.equal(new Set(pool.map(p=>p.id)).size,pool.length,'Position overlap');
 await parallel(all,async p=>{
  const source='https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/'+p.mlbId+'/headshot/67/current';
  try{const bytes=await get(source,true);assert(bytes.length>1500,'Small portrait');const file='assets/mlb/headshots/'+p.mlbId+'.jpg';await write(file,bytes);heads[p.id]={url:file,source,provider:'MLB',captured:'2026-11-09',sha256:sha(bytes)};}catch(e){audit.portraitFallbacks.push({id:p.id,name:p.name,source,error:e.message});}
 },8);
 // Reject repeated generic silhouette responses instead of presenting them as player photos.
 const frequencies=new Map();for(const h of Object.values(heads))frequencies.set(h.sha256,(frequencies.get(h.sha256)||0)+1);
 for(const [id,h]of Object.entries(heads))if(frequencies.get(h.sha256)>3){audit.portraitFallbacks.push({id,source:h.source,error:'Repeated provider placeholder'});delete heads[id];}
 const known=Object.fromEntries(Object.entries(rosters).map(([t,ps])=>[t,ps.map(p=>p.id)])),positionInfo={season:2026,verified:'November 9, 2026',source:'MLB-SOURCES.md',counts:Object.fromEntries(positions.map(pos=>[pos,pool.filter(p=>p.position===pos).length])),rules:{batters:'Highest-2026-PA primary-position regular per team (150 PA; catchers 100 PA), plus documented injured regulars.',SP:'100 innings and 15 starts; up to 75, including protected injured regulars.',RP:'40 innings or 10 saves; up to 75, including protected injured regulars. Usage order: outs plus six per save.',primary:'Most 2026 starts by position; 2025 starts then official roster position for injured players with no 2026 position starts. Pitchers use starting/relief appearance majority. Two-way players appear only in their more frequent role.'}};
 const data='// MLB 2026 historical roster snapshots, generated on GitHub from official MLB data.\n'+[['MLB_TEAM_INFO',info],['MLB_ROSTERS',rosters],['MLB_HEADSHOTS',heads],['MLB_POSITION_PLAYERS',pool.sort((a,b)=>a.id.localeCompare(b.id))],['MLB_POSITION_INFO',positionInfo],['MLB_KNOWN_IDS',known]].map(([name,value])=>'const '+name+' = '+JSON.stringify(value,null,2)+';').join('\n');
 await write('mlb-data.js',data);await write('assets/mlb/roster-audit.json',audit);
 await write('MLB-SOURCES.md','# MLB 2026 roster sources\n\nThis is a fixed 2026 snapshot. Offseason transactions do not replace the requested end-of-season teams.\n\n## Scope\n\nNon-playoff teams use the active 28-man roster on their last regular-season game date. Playoff teams use the active 26-man roster on the final game date of the furthest round reached. Documented injured regulars are additional inclusions, never described as official active/postseason roster members. Injury candidates must appear on that team\\'s historical injured list and have meaningful 2026 or 2025 major-league playing time. Jordan Westburg is explicitly included.\n\n## Position pools\n\n'+Object.values(positionInfo.rules).join('\n\n')+'\n\nNo player appears in more than one position pool. Complete per-player position starts, playing-time inputs, injury statuses and roster membership are in [the audit](assets/mlb/roster-audit.json).\n\n## Team snapshots\n\n| Team | Round | Snapshot date | Official roster | Injury additions |\n|---|---|---|---:|---|\n'+audit.teams.map(t=>'| '+t.team+' | '+t.round+' | '+t.date+' | ['+t.activeIds.length+']('+t.source+') | '+t.injuryAdditions.map(p=>p.name).join(', ')+' |').join('\n')+'\n\n## Imagery\n\nPortraits and logos come from official MLB static assets, identified by MLB person/team ID. Copies are hosted with this site for reliable image exports. Source URLs, hashes and capture dates accompany each headshot. MLB\\'s current headshot endpoint is used because its year-specific endpoint was unavailable; capture freezes the image used at publication but cannot guarantee the cap shown matches every historical roster assignment. Failed or generic images use jersey fallbacks. Public availability does not grant an open redistribution license; MLB and relevant rights holders retain their rights.\n');
 console.log('MLB_DATA_READY '+JSON.stringify({teams:30,players:all.length,postseasonTeams:audit.teams.filter(t=>t.type!=='R').length,counts:positionInfo.counts,injuries:audit.teams.filter(t=>t.injuryAdditions.length).map(t=>({team:t.team,names:t.injuryAdditions.map(p=>p.name)})),fallbacks:audit.portraitFallbacks,paletteChecks:audit.paletteChecks}));
})().catch(e=>{console.error(e);process.exit(1)});
