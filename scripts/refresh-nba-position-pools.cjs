// Runs on GitHub; requires complete current ESPN sources and official NBA roster identities.
const fs=require('node:fs'),assert=require('node:assert/strict'),crypto=require('node:crypto'),T=require('./roster-tools.cjs');
const groups=['PG','SG','SF','PF','C'],norm=s=>T.normalize(s).replace(/(?:jr|sr|iii|ii|iv)$/,'');
const aliases={'Nic Claxton':'Nicolas Claxton','Rob Dillingham':'Robert Dillingham','Ron Holland II':'Ronald Holland II','Cam Johnson':'Cameron Johnson','Nate Bittle':'Nathan Bittle'};
function primaryPosition(player,athlete,slots,primary){
 if(primary&&groups.includes(primary.group))return {group:primary.group,method:'ESPN-single-primary-position'};
 const first=player.rosterPosition.split(/[-/]/)[0].toUpperCase();
 if(groups.includes(first))return {group:first,method:'NBA-first-listed-detailed-position'};
 if(groups.includes(athlete.position?.abbreviation))return {group:athlete.position.abbreviation,method:'ESPN-roster-primary'};
 const candidates=slots.flatMap(s=>s.athletes.filter(a=>a.id===athlete.id).map(a=>({group:s.group,rank:a.rank})));
 assert(candidates.length,'Missing detailed primary position '+player.name);
 const best=Math.min(...candidates.map(c=>c.rank)),roles=[...new Set(candidates.filter(c=>c.rank===best).map(c=>c.group))];assert.equal(roles.length,1,'Ambiguous primary position '+player.name);
 return {group:roles[0],method:'ESPN-depth-primary-slot'};
}
async function main(){
 const data=T.loadData(),policy=JSON.parse(fs.readFileSync('assets/nba-position-policy.json','utf8')),reviewed=process.argv.includes('--reviewed'),statsWarnings=[];
 assert.equal(policy.season,2027);const primaryURL='https://lm-api-reads.fantasy.espn.com/apis/v3/games/fba/seasons/2027/players?view=players_wl';
 const res=await fetch(primaryURL,{headers:{'x-fantasy-filter':JSON.stringify({players:{limit:2000,offset:0}})},signal:AbortSignal.timeout(45000)});assert(res.ok,'ESPN primary-position source unavailable');const raw=await res.json(),primary=(Array.isArray(raw)?raw:raw.players);assert(primary.length>=500,'Partial primary-position source');const primaryMap=new Map();for(const p of primary){const group=({1:'PG',2:'SG',3:'SF',4:'PF',5:'C'})[p.defaultPositionId];if(group)primaryMap.set(String(p.id),{name:p.fullName,group});}
 const teams=(await T.get('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams?limit=100','json')).sports[0].leagues[0].teams.map(x=>x.team);assert.equal(Object.keys(data.NBA_TEAM_INFO).length,30);
 const selected=new Map(),teamReviews=[],injuryEvidence=[],roles=[],add=(p,reason)=>{if(selected.has(p.id)){selected.get(p.id).reasons.push(reason);return;}selected.set(p.id,{player:p,reasons:[reason]});};
 await T.mapLimit(Object.entries(data.NBA_TEAM_INFO),4,async([team,info])=>{
  const t=teams.find(t=>T.normalize(t.displayName)===T.normalize(team));assert(t,'ESPN team identity '+team);
  const base='https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/'+t.id,depthURL=base+'/depthcharts',rosterURL=base+'/roster',scheduleURL=base+'/schedule';
  const [depth,roster,schedule]=await Promise.all([T.get(depthURL,'json'),T.get(rosterURL,'json'),T.get(scheduleURL,'json')]);assert.equal(+schedule.season.year,2027,'Stale season '+team);assert.equal(+schedule.season.type,2);
  const slots=Object.entries(depth.depthchart?.[0]?.positions||{}).map(([key,s])=>({group:s.position?.abbreviation||key.toUpperCase(),athletes:(s.athletes||[]).map((a,rank)=>({...a,rank}))}));assert.deepEqual(slots.map(s=>s.group).sort(),[...groups].sort());for(const s of slots)assert(s.athletes.length,'Empty depth slot '+team+' '+s.group);
  const match=a=>{const names=[a.displayName,a.fullName,aliases[a.displayName]].filter(Boolean).map(norm);const found=data.NBA_ROSTERS[team].filter(p=>names.includes(norm(p.name)));assert.equal(found.length,1,'Official NBA identity missing/ambiguous '+team+' '+a.displayName);return found[0];};
  const events=schedule.events.filter(e=>(e.seasonType?.type===2||e.seasonType?.id==='2')&&e.competitions?.[0]?.status?.type?.completed).sort((a,b)=>new Date(b.date)-new Date(a.date));assert(events.length,'No regular-season starting lineup '+team);
  const event=events[0],boxURL='https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event='+event.id,box=await T.get(boxURL,'json');assert.equal(+event.season.year,2027);const club=box.boxscore?.players.find(p=>p.team.id===t.id);
  const starters=(club?.statistics||[]).flatMap(s=>s.athletes||[]).filter(a=>a.starter).map(a=>a.athlete);assert.equal(starters.length,5,'Incomplete confirmed starters '+team);assert.equal(new Set(starters.map(a=>a.id)).size,5);
  const athleteMap=new Map(roster.athletes.map(a=>[a.id,a])),chosen=new Map(starters.map(a=>[a.id,{athlete:athleteMap.get(a.id)||a,reason:'Confirmed starter '+event.id}]));
  for(const slot of slots){const first=slot.athletes[0],a=athleteMap.get(first.id)||first;if(a.injuries?.length||first.injuries?.length)chosen.set(first.id,{athlete:a,reason:'Injured first-choice '+slot.group});}
  const injured=roster.athletes.filter(a=>a.injuries?.length);
  await T.mapLimit(injured,3,async a=>{
   if(policy.reserveExclusions.some(e=>norm(e.name)===norm(a.displayName)))return;
   const protectedPlayer=policy.reviewedInjuredStarters.some(e=>e.espnId===a.id);
   if(protectedPlayer){chosen.set(a.id,{athlete:a,reason:'Reviewed injured regular starter'});return;}
   if(reviewed||chosen.has(a.id))return;
   const statsURL='https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/'+a.id+'/stats';
   let stats;try{stats=await T.get(statsURL,'json');}catch(e){statsWarnings.push({team,name:a.displayName,error:e.message});return;}
   const cat=stats.categories?.find(c=>c.name==='averages');if(!cat)return;
   const rows=cat.statistics.filter(r=>r.season?.year===2027&&(!r.teamId||String(r.teamId)===t.id)),total=rows.find(r=>r.displayName?.includes('Totals')),games=cat.names.indexOf('gamesPlayed'),starts=cat.names.indexOf('gamesStarted');
   assert(games>=0&&starts>=0);const gp=total?+total.stats[games]:rows.reduce((n,r)=>n+(+r.stats[games]),0),gs=total?+total.stats[starts]:rows.reduce((n,r)=>n+(+r.stats[starts]),0);
   if(gp>0&&gs>=gp/2){chosen.set(a.id,{athlete:a,reason:'Injured current-season regular starter'});injuryEvidence.push({team,name:a.displayName,games:gp,starts:gs,statsURL});}
  });
  for(const {athlete:a,reason}of chosen.values()){const p=match(a),primary=primaryMap.get(a.id);if((policy.excludedPlayers||[]).some(e=>e.id===p.id))continue;assert(!primary||norm(aliases[primary.name]||primary.name)===norm(aliases[a.displayName]||a.displayName),'ESPN primary identity mismatch '+a.displayName);const override=(policy.primaryPositionOverrides||[]).find(e=>e.id===p.id&&e.espnId===a.id);const role=override?{group:override.group,method:'User-reviewed-primary-position'}:primaryPosition(p,a,slots,primary);assert(data.NBA_HEADSHOTS[p.id]?.url&&data.NBA_HEADSHOTS[p.id]?.source,'Missing portrait provenance '+p.name);add({...p,officialRosterPosition:p.rosterPosition,rosterPosition:role.group,position:role.group,positions:[role.group]},reason);roles.push({id:p.id,name:p.name,team,espnId:a.id,primary:role.group,officialRosterPosition:p.rosterPosition,espnPrimary:primary?.group||null,method:role.method,reason});}
  teamReviews.push({team,espnId:t.id,depthURL,rosterURL,scheduleURL,boxURL,lastGame:{id:event.id,date:event.date},confirmedStarterIds:starters.map(a=>match(a).id),included:[...selected.values()].filter(v=>v.player.team===team).length,injured:injured.map(a=>({id:a.id,name:a.displayName,status:a.injuries[0]?.status}))});
 });
 assert.equal(teamReviews.length,30);const players=[...selected.values()].map(x=>x.player).sort((a,b)=>a.id<b.id?-1:a.id>b.id?1:0),counts=Object.fromEntries(groups.map(g=>[g,players.filter(p=>p.position===g).length]));
 assert.equal(new Set(players.map(p=>p.id)).size,players.length);assert(players.every(p=>p.positions.length===1&&p.positions[0]===p.position));for(const g of groups)assert(counts[g]>=15&&counts[g]<=65,'Suspicious '+g+' pool size');
 const butler=players.find(p=>p.id===policy.requiredInjuredInclusion);assert(butler,'Required Jimmy Butler injury inclusion missing');assert.equal(butler.position,'SF');
 for(const r of teamReviews)for(const id of r.confirmedStarterIds)assert(selected.has(id)||(policy.excludedPlayers||[]).some(e=>e.id===id),'Missing confirmed starter');
 T.archiveData(data);
 const verified=new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',month:'long',day:'numeric',year:'numeric'}).format(new Date()),status={version:1,season:2027,seasonLabel:'2026-27',checkedAt:new Date().toISOString(),verified,mode:reviewed?'reviewed-starters':'weekly-starters',counts,total:players.length,teamCount:30,primaryPositionRule:policy.primaryPositionRule,starterRule:policy.starterRule,primaryURL,excludedPlayers:policy.excludedPlayers||[],primaryPositionOverrides:policy.primaryPositionOverrides||[],teamReviews:teamReviews.sort((a,b)=>a.team.localeCompare(b.team)),injuryEvidence,roles,statsWarnings};
 const source='// Generated and validated on GitHub. NBA league starter pools; one primary position per player.\nconst NBA_POSITION_INFO = '+JSON.stringify(status)+';\nconst NBA_POSITION_PLAYERS = '+JSON.stringify(players)+';\n';
 fs.writeFileSync('nba-position-data.js',source);T.writeJSON('assets/nba-position-status.json',status);const digest=crypto.createHash('sha256').update(source).digest('hex').slice(0,12);let html=fs.readFileSync('index.html','utf8');if(html.includes('nba-position-data.js?v='))html=html.replace(/nba-position-data\.js\?v=[^"]+/,'nba-position-data.js?v='+digest);else html=html.replace('<script src="app.js','<script src="nba-position-data.js?v='+digest+'"></script><script src="app.js');fs.writeFileSync('index.html',html);
 T.archiveData(T.loadData());console.log('NBA_POSITION_SUMMARY '+JSON.stringify({counts,total:players.length,roles,teamReviews:status.teamReviews,statsWarnings}));
 return status;
}
module.exports={main,primaryPosition};if(require.main===module)main().catch(e=>{console.error(e);process.exit(1)});
