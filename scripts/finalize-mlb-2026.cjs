const fs=require('node:fs'),vm=require('node:vm'),T=require('./roster-tools.cjs');
const d=vm.runInNewContext(fs.readFileSync('mlb-data.js','utf8')+';({MLB_TEAM_INFO,MLB_ROSTERS,MLB_HEADSHOTS,MLB_POSITION_PLAYERS,MLB_POSITION_INFO,MLB_KNOWN_IDS})'),audit=JSON.parse(fs.readFileSync('assets/mlb/roster-audit.json','utf8')),byId=new Map(audit.roles.map(r=>[r.id,r]));
for(const ps of Object.values(d.MLB_ROSTERS))for(const p of ps){
 const r=byId.get(p.id),f=Object.keys(r.starts2026).length?r.starts2026:r.starts2025,total=Object.values(f).reduce((n,v)=>n+v,0),outfield=['LF','CF','RF'],ofTotal=outfield.reduce((n,pos)=>n+(f[pos]||0),0),roles=[p.position];
 for(const [pos,n]of Object.entries(f)){
  if(pos===p.position||!['C','1B','2B','3B','SS','LF','CF','RF','DH'].includes(pos))continue;
  const substantial=outfield.includes(pos)?n>=25&&n>=ofTotal*.25:pos==='DH'?n>=25&&n>=total*.25:Object.keys(r.starts2026).length?(n>=20&&n>=total*.15)||(n>=10&&(r.starts2025[pos]||0)>=25):n>=15&&n>=total*.15;
  if(substantial)roles.push(pos);
 }
 if(['SP','RP'].includes(p.position)){
  if(r.startsPitching2026>=5&&r.startsPitching2026>=r.gamesPitching2026*.25&&!roles.includes('SP'))roles.push('SP');
  const relief=r.gamesPitching2026-r.startsPitching2026;if(relief>=10&&relief>=r.gamesPitching2026*.25&&!roles.includes('RP'))roles.push('RP');
 }
 if(p.mlbId===660271&&!roles.includes('SP'))roles.push('SP');
 p.positions=roles;p.rosterPosition=roles.join('/');r.teamPositions=roles;
}
const changes={NYY:'132448',CLE:'002B5C',DET:'0C2C56',MIN:'091F40',AZ:'AA182C',SD:'2F241C',PIT:'FFCE34',STL:'BE0A14'};
for(const info of Object.values(d.MLB_TEAM_INFO))if(changes[info.code])info.colors.primary='#'+changes[info.code];
d.MLB_POSITION_INFO.rules.teamPositions='Primary position plus substantial secondary roles. Infield: 20 starts and 15% of position starts, or 10 current starts plus 25 prior-season starts. Outfield: 25 starts and 25% of outfield starts. DH: 25 starts and 25% of position starts. Injured players without current starts use established prior-season roles. Ohtani is the sole two-way exception.';

const pos=Object.keys(d.MLB_POSITION_INFO.counts),all=Object.values(d.MLB_ROSTERS).flat(),pool=[];
for(const role of pos){
 const eligible=all.filter(p=>p.position===role||(p.mlbId===660271&&role==='SP'));
 const protectedPlayers=eligible.filter(p=>{
  if(p.mlbId===660271&&role==='SP')return true;
  if(!p.injuryInclusion)return false;const r=byId.get(p.id);
  return role==='SP'?r.startsPitching2026>=15||(r.starts2025.P||0)>=20||/Hunter Greene|Corbin Burnes|Pablo López|Spencer Schwellenbach|Shane Bieber/.test(p.name):role==='RP'?r.gamesPitching2026>=45||r.saves2026>=5||/Ryan Helsley|Andrés Muñoz|Jeff Hoffman|Matt Brash|Pete Fairbanks|Randy Rodríguez|Ben Joyce/.test(p.name):true;
 });
 let chosen=[];
 if(['SP','RP'].includes(role)){
  const reserved=new Set(protectedPlayers.map(p=>p.id)),regulars=eligible.filter(p=>{const r=byId.get(p.id);return role==='SP'?r.ipOuts2026>=300&&r.startsPitching2026>=15:r.ipOuts2026>=120||r.saves2026>=10;}).sort((a,b)=>{const x=byId.get(a.id),y=byId.get(b.id);return y.ipOuts2026-x.ipOuts2026+(role==='RP'?6*(y.saves2026-x.saves2026):0)||a.id.localeCompare(b.id);});
  chosen=[...protectedPlayers,...regulars.filter(p=>!reserved.has(p.id)).slice(0,75-protectedPlayers.length)];
 }else{
  for(const team of Object.keys(d.MLB_TEAM_INFO)){const p=eligible.filter(p=>p.team===team&&byId.get(p.id).pa2026>=(role==='C'?100:150)).sort((a,b)=>byId.get(b.id).pa2026-byId.get(a.id).pa2026)[0];if(p)chosen.push(p);}
  chosen=[...new Map([...chosen,...protectedPlayers].map(p=>[p.id,p])).values()];
 }
 pool.push(...chosen.map(p=>({...p,positions:p.mlbId===660271?['DH','SP']:[p.position],rosterPosition:p.position})));
}
d.MLB_POSITION_PLAYERS=[...new Map(pool.map(p=>[p.id,p])).values()].sort((a,b)=>a.id<b.id?-1:1);
d.MLB_POSITION_INFO.counts=Object.fromEntries(pos.map(role=>[role,d.MLB_POSITION_PLAYERS.filter(p=>p.positions.includes(role)).length]));
d.MLB_POSITION_INFO.rules.pitcherInjuries='Protected injured starters: 15 starts in 2026 or 20 in 2025, plus documented notable aces Hunter Greene, Corbin Burnes, Pablo López, Spencer Schwellenbach and Shane Bieber. Protected injured relievers: 45 games or 5 saves in 2026, plus established high-profile bullpen arms. Remaining places use 2026 usage. Both pitching pools cap at 75.';
d.MLB_TEAM_INFO=Object.fromEntries(Object.entries(d.MLB_TEAM_INFO).sort(([a,x],[b,y])=>['AL','NL'].indexOf(x.conference)-['AL','NL'].indexOf(y.conference)||['East','Central','West'].indexOf(x.division)-['East','Central','West'].indexOf(y.division)||a.localeCompare(b)));

fs.writeFileSync('mlb-data.js','// Verified 2026 MLB snapshot with substantial team roles and primary-only league pools.\n'+Object.entries(d).map(([k,v])=>'const '+k+' = '+JSON.stringify(v,null,2)+';').join('\n'));
fs.writeFileSync('assets/mlb/roster-audit.json',JSON.stringify(audit,null,2)+'\n');
let doc=fs.readFileSync('MLB-SOURCES.md','utf8').split('\n## Team-card secondary positions')[0];doc+='\n## Team-card secondary positions\n\n'+d.MLB_POSITION_INFO.rules.teamPositions+'\n';fs.writeFileSync('MLB-SOURCES.md',doc);
const index=JSON.parse(fs.readFileSync('assets/roster-snapshots/index.json','utf8'));
for(const [team,players]of Object.entries(d.MLB_ROSTERS)){
 const info=d.MLB_TEAM_INFO[team],file='assets/roster-snapshots/MLB/'+info.code+'/'+T.stamp(players)+'.json';
 T.writeJSON(file,{version:1,sport:'MLB',team,code:info.code,verified:info.verified,players,headshots:Object.fromEntries(players.map(p=>[p.id,d.MLB_HEADSHOTS[p.id]||null]))});
 for(const pos of ['ALL',...Object.keys(d.MLB_POSITION_INFO.counts)]){const ps=T.filtered(players,pos);if(ps.length)index.snapshots[['MLB',info.code,pos,T.stamp(ps)].join('.')]={path:file,verified:info.verified};}
}
for(const role of Object.keys(d.MLB_POSITION_INFO.counts)){
 const players=d.MLB_POSITION_PLAYERS.filter(p=>p.positions.includes(role)),stamp=T.leagueStamp(players),file='assets/roster-snapshots/MLB/MLB/'+stamp+'.json';
 T.writeJSON(file,{version:2,scope:'league',sport:'MLB',team:'MLB League',code:'MLB',pos:role,verified:d.MLB_POSITION_INFO.verified,players,headshots:Object.fromEntries(players.map(p=>[p.id,d.MLB_HEADSHOTS[p.id]||null]))});
 index.snapshots[['MLB','MLB',role,stamp].join('.')]={path:file,verified:d.MLB_POSITION_INFO.verified};
}
T.writeJSON('assets/roster-snapshots/index.json',index);
console.log('MLB_FINALIZED '+JSON.stringify({clement:d.MLB_ROSTERS['Toronto Blue Jays'].find(p=>p.name==='Ernie Clement'),ohtani:d.MLB_ROSTERS['Los Angeles Dodgers'].find(p=>p.mlbId===660271),multipleTeams:Object.values(d.MLB_ROSTERS).flat().filter(p=>p.positions.length>1).length}));
