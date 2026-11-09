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
fs.writeFileSync('mlb-data.js','// Verified 2026 MLB snapshot with substantial team roles and primary-only league pools.\n'+Object.entries(d).map(([k,v])=>'const '+k+' = '+JSON.stringify(v,null,2)+';').join('\n'));
fs.writeFileSync('assets/mlb/roster-audit.json',JSON.stringify(audit,null,2)+'\n');
let doc=fs.readFileSync('MLB-SOURCES.md','utf8');doc+='\n## Team-card secondary positions\n\n'+d.MLB_POSITION_INFO.rules.teamPositions+'\n';fs.writeFileSync('MLB-SOURCES.md',doc);
const index=JSON.parse(fs.readFileSync('assets/roster-snapshots/index.json','utf8'));
for(const [team,players]of Object.entries(d.MLB_ROSTERS)){
 const info=d.MLB_TEAM_INFO[team],file='assets/roster-snapshots/MLB/'+info.code+'/'+T.stamp(players)+'.json';
 T.writeJSON(file,{version:1,sport:'MLB',team,code:info.code,verified:info.verified,players,headshots:Object.fromEntries(players.map(p=>[p.id,d.MLB_HEADSHOTS[p.id]||null]))});
 for(const pos of ['ALL',...Object.keys(d.MLB_POSITION_INFO.counts)]){const ps=T.filtered(players,pos);if(ps.length)index.snapshots[['MLB',info.code,pos,T.stamp(ps)].join('.')]={path:file,verified:info.verified};}
}
T.writeJSON('assets/roster-snapshots/index.json',index);
console.log('MLB_FINALIZED '+JSON.stringify({clement:d.MLB_ROSTERS['Toronto Blue Jays'].find(p=>p.name==='Ernie Clement'),ohtani:d.MLB_ROSTERS['Los Angeles Dodgers'].find(p=>p.mlbId===660271),multipleTeams:Object.values(d.MLB_ROSTERS).flat().filter(p=>p.positions.length>1).length}));
