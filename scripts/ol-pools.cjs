const assert=require('node:assert/strict'),T=require('./roster-tools.cjs');
const name=s=>T.normalize(s).replace(/(?:jr|sr|iii|ii|iv|v)$/,'');
const aliases={'Vega Ioane':'Olaivavega Ioane','Nate Thomas':'Nathan Thomas','A.J. Cann':'AJ Cann','Francis "Sisi" Mauigoa':'Francis Mauigoa'};
const role=s=>({LT:'LT',RT:'RT',LG:'LG',RG:'RG',C:'C',OC:'C'})[String(s||'').toUpperCase()]||null;
function chooseMinimum(rows,cap){assert(rows.filter(p=>p.approvedException).length<=cap,'Approved OL exceptions exceed cap');let minimum=25;const qualifies=p=>p.offensiveSnaps>=minimum||p.approvedException;while(rows.filter(qualifies).length>cap)minimum+=25;return {minimum,players:rows.filter(qualifies)};}
async function build(candidates,parseCSV,options={}){
const snapURL='https://github.com/nflverse/nflverse-data/releases/download/snap_counts/snap_counts_2026.csv';
const [snapText,crossText,teamsJSON]=await Promise.all([T.get(snapURL),T.get('https://github.com/nflverse/nflverse-data/releases/download/players/players.csv'),T.get('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams?limit=100','json')]);
const snaps=parseCSV(snapText).filter(r=>+r.season===2026&&r.game_type==='REG');assert(new Set(snaps.map(r=>r.game_id)).size>=122,'Incomplete offensive snap snapshot');
const cross=parseCSV(crossText),teams=teamsJSON.sports[0].leagues[0].teams.map(x=>x.team),teamNames=[...new Set(candidates.map(p=>p.team))],sources=[];
const info=await T.mapLimit(teamNames,4,async team=>{const t=teams.find(t=>T.normalize(t.displayName)===T.normalize(team));assert(t,'ESPN team '+team);
const rosterURL='https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/'+t.id+'/roster?season=2026',depthURL='https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/'+t.id+'/depthcharts';
const [r,d]=await Promise.all([T.get(rosterURL,'json'),T.get(depthURL,'json')]);assert.equal(+r.season.year,2026);sources.push({team,rosterURL,depthURL});return {team,athletes:r.athletes.flatMap(g=>g.items||[]),depth:d};});
const rows=[],unresolved=[];
for(const p of candidates){const t=info.find(t=>t.team===p.team),names=new Set([p.name,aliases[p.name]].filter(Boolean).map(name));
const athletes=t.athletes.filter(a=>[a.displayName,a.fullName].filter(Boolean).some(n=>names.has(name(n))));assert(athletes.length<=1,'Ambiguous offensive-lineman identity '+p.name);
let identity=athletes.length?cross.filter(r=>String(r.espn_id)===String(athletes[0].id)):[];
if(!identity.length)identity=cross.filter(r=>[r.display_name,r.football_name,r.full_name].filter(Boolean).some(n=>names.has(name(n))));
const verifiedIds={'Francis "Sisi" Mauigoa':'MauiFr01','Bill Murray':'MurrBi00'};const ids=[...new Set([verifiedIds[p.name],...identity.map(r=>r.pfr_id)].filter(Boolean))];assert(ids.length<=1,'Conflicting PFR ID '+p.name);
const played=ids.length?snaps.filter(r=>r.pfr_player_id===ids[0]):snaps.filter(r=>names.has(name(r.player)));
const total=played.reduce((n,r)=>{assert(Number.isInteger(+r.offense_snaps)&&+r.offense_snaps>=0);return n+(+r.offense_snaps);},0);
if(!played.length&&!ids.length){unresolved.push(p.name);continue;}
const raw=p.rosterPosition.split(/[/-]/),direct=[...new Set(raw.map(role).filter(Boolean))];let group=direct.length===1&&direct[0]!=='C'?direct[0]:null,method=group?'official-roster-side':null;
const slots=[];for(const chart of t.depth.depthchart||[])for(const s of Object.values(chart.positions||{}))for(const [rank,a]of (s.athletes||[]).entries())if(athletes[0]?a.id===athletes[0].id:names.has(name(a.displayName))){const g=role(s.position?.abbreviation);if(g)slots.push({group:g,rank});}
if(!group){const best=slots.length?Math.min(...slots.map(s=>s.rank)):Infinity,bestGroups=[...new Set(slots.filter(s=>s.rank===best).map(s=>s.group))];if(bestGroups.length){group=raw.length===1&&bestGroups.includes(role(raw[0]))?role(raw[0]):bestGroups[0];method=bestGroups.length===1?'ESPN-depth-chart-primary-slot':'ESPN-depth-chart-first-listed-at-best-depth';}}
if(!group){const usage={};for(const r of played){const g=role(r.position);if(g)usage[g]=(usage[g]||0)+(+r.offense_snaps);}const sorted=Object.entries(usage).sort((a,b)=>b[1]-a[1]);if(sorted.length&&(!sorted[1]||sorted[0][1]>sorted[1][1])){group=sorted[0][0];method='snap-source-primary-role';}}
if(!group&&athletes[0]){group=role(athletes[0].position?.abbreviation);if(group)method='ESPN-roster';}
if(!group&&raw.length===1&&role(raw[0])){group=role(raw[0]);method='official-roster';}
if(!group&&total>=25){console.log('OL_ROLE_REVIEW',JSON.stringify({name:p.name,team:p.team,raw:p.rosterPosition,espn:athletes[0]?.position,snaps:total,playedPositions:[...new Set(played.map(r=>r.position))]}));unresolved.push('Role: '+p.name);continue;}if(group)rows.push({player:p,group,offensiveSnaps:total,pfrId:ids[0]||played[0]?.pfr_player_id||null,espnId:athletes[0]?.id||null,method});
}
assert.equal(unresolved.length,0,'Unresolved OL records: '+unresolved.join(', '));
const caps=options.caps||{LT:40,RT:40,LG:40,RG:40,C:40},selected=[],thresholds={},counts={},excluded=[];
for(const [g,cap]of Object.entries(caps)){const group=rows.filter(p=>p.group===g).map(p=>({...p,approvedException:(options.approvedPlayerExceptions||[]).some(e=>name(e.name)===name(p.player.name)&&e.group===g)})),chosen=chooseMinimum(group,cap);thresholds[g]=chosen.minimum;counts[g]=chosen.players.length;selected.push(...chosen.players);excluded.push(...group.filter(p=>p.offensiveSnaps<chosen.minimum&&!p.approvedException));assert(counts[g]<=cap&&counts[g]>0);if(chosen.minimum>25)assert(group.filter(p=>p.offensiveSnaps>=chosen.minimum-25||p.approvedException).length>cap);}
assert.equal(new Set(selected.map(p=>p.player.id)).size,selected.length,'Repeated offensive lineman');
const summary={season:2026,seasonType:'REG',caps,minimumOffensiveSnaps:thresholds,counts,reviewed:rows.length,injuredIncluded:selected.filter(p=>p.player.rosterStatus!=='Active').length,source:snapURL,sources,exclusions:excluded.map(p=>({name:p.player.name,team:p.player.team,group:p.group,snaps:p.offensiveSnaps})),approvedPlayerExceptions:selected.filter(p=>p.approvedException).map(p=>({name:p.player.name,group:p.group,snaps:p.offensiveSnaps})),method:'Approved injury exceptions count within each hard cap. Total 2026 regular-season offensive snaps. Choose the lowest multiple of 25 that meets each hard pool cap; ties stay together. One primary listed side per player; ties at the same depth use the first ESPN-listed slot. Active and injury-reserve rosters are eligible.',unresolved};
return {selected,summary};
}
module.exports={build,chooseMinimum,role};
