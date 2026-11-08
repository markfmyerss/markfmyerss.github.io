const fs=require('node:fs'),assert=require('node:assert/strict');
const {get,normalize,mapLimit}=require('./roster-tools.cjs');
const alias=s=>normalize(s).replace(/(?:jr|sr|iii|ii|iv|v)$/,'');
const nameAliases={"Dax Hill":"Daxton Hill","T.J. Slaton Jr.":"Tedarrell Slaton","Mike Hall Jr.":"Michael Hall","Mike Danna":"Michael Danna","Greg Rousseau":"Gregory Rousseau","JuJu Brents":"Julius Brents","Josh Uche":"Joshua Uche","Cam Bynum":"Camryn Bynum","Jaylahn Tuimoloau":"JT Tuimoloau","Que Robinson":"Quandarrius Robinson","Pat Surtain II":"Patrick Surtain II","Chris Roland-Wallace":"Christian Roland-Wallace","Cam Lewis":"Cameron Lewis","Joshua Metellus":"Josh Metellus","Dru Phillips":"Andru Phillips","Mike Reid":"Michael Reid","Kam Curl":"Kamren Curl","Nate Landman":"Nathan Landman","Mike Jackson":"Michael Jackson"};
const base='https://site.api.espn.com/apis/site/v2/sports/football/nfl/';
(async()=>{
const snapshot=JSON.parse(fs.readFileSync('research/2026-defensive-position-baselines/role-source-snapshot.json'));
const list=await get(base+'teams?limit=100','json');const teams=list.sports[0].leagues[0].teams.map(x=>x.team);assert.equal(teams.length,32);
const data=await mapLimit(teams,4,async team=>{
const rosterURL=base+'teams/'+team.id+'/roster?season=2026',depthURL=base+'teams/'+team.id+'/depthcharts';
const [roster,depth]=await Promise.all([get(rosterURL,'json'),get(depthURL,'json')]);assert.equal(+roster.season.year,2026,'ESPN season mismatch '+team.displayName);
const athletes=roster.athletes.flatMap(g=>g.items||[]).map(a=>({id:a.id,name:a.displayName||a.fullName,position:a.position?.abbreviation,source:rosterURL}));
const slots=[];for(const chart of depth.depthchart||[]){if(!/defen|\bD\b/i.test(chart.name))continue;
for(const [key,pos]of Object.entries(chart.positions||{})){for(const [rank,a]of (pos.athletes||[]).entries())slots.push({id:a.id,name:a.displayName,key:key.toUpperCase(),position:pos.position?.abbreviation||key.toUpperCase(),parent:pos.position?.parent?.abbreviation,formation:chart.name,rank,source:depthURL});}}
assert(slots.length,'No defense chart '+team.displayName);return {team:team.displayName,id:team.id,rosterURL,depthURL,athletes,slots};
});
function slotGroup(s,parent){
const k=s.position.toUpperCase(),p=(s.parent||'').toUpperCase(),f=s.formation;
if(['CB','LCB','RCB','NB','NCB','SCB'].includes(k)||p==='CB')return 'CB';
if(['S','FS','SS'].includes(k)||p==='S')return 'S';
if(['DT','LDT','RDT','NT','IDL'].includes(k)||p==='DT')return 'IDL';
if(['DE','LDE','RDE'].includes(k)||p==='DE')return parent==='LB'?'EDGE':'DE';
if(['ILB','LILB','RILB','MLB','MIKE'].includes(k)||p==='ILB')return 'ILB';
if(['EDGE','RUSH','LEO','JACK'].includes(k))return 'EDGE';
if(['OLB','LOLB','ROLB'].includes(k)||p==='OLB')return /3.?4/.test(f)?'EDGE':/4.?3/.test(f)?'ILB':null;
if(['WLB','SLB','WILL','SAM'].includes(k))return /3.?4/.test(f)?'EDGE':'ILB';
return null;
}
const players=snapshot.players.map(p=>{
const team=data.find(t=>normalize(t.team)===normalize(p.team));assert(team,'Missing ESPN team '+p.team);
const names=new Set([p.name,nameAliases[p.name],...(p.matchedNames||[])].filter(Boolean).map(alias));
let athlete=team.athletes.filter(a=>names.has(alias(a.name)));assert(athlete.length<=1,'Ambiguous roster '+p.name);
const slots=team.slots.filter(s=>athlete[0]?s.id===athlete[0].id:names.has(alias(s.name)));
const raw=p.rosterPosition||'',parts=raw.split(/[/-]/),parent=p.positions.includes('DB')?'DB':p.positions.includes('LB')?'LB':'DL';
const espn=athlete[0]?.position;
let target=null,method=null;
if(parent==='DB'){if(parts.includes('CB')){target='CB';method='official-roster';}else if(parts.some(x=>['S','FS','SS'].includes(x))){target='S';method='official-roster';}else if(espn==='CB'){target='CB';method='ESPN-roster';}else if(['S','FS','SS'].includes(espn)){target='S';method='ESPN-roster';}}
if(parent==='DL'){if(parts.some(x=>['DT','NT','IDL'].includes(x))){target='IDL';method='official-roster';}else if(parts.includes('DE')){target='DE';method='official-roster';}else if(['DT','NT'].includes(espn)){target='IDL';method='ESPN-roster';}else if(espn==='DE'){target='DE';method='ESPN-roster';}}
if(parent==='LB'){if(parts.includes('EDGE')){target='EDGE';method='official-roster';}else if(parts.some(x=>['ILB','MLB'].includes(x))){target='ILB';method='official-roster';}else if(espn==='DE'||espn==='EDGE'){target='EDGE';method='ESPN-roster';}}
const allowed=parent==='DL'?['IDL','DE']:parent==='LB'?['ILB','EDGE']:['CB','S'];
const depthGroups=[...new Set(slots.map(s=>slotGroup(s,parent)).filter(x=>allowed.includes(x)))];
if(!target&&depthGroups.length===1){target=depthGroups[0];method='ESPN-depth-chart';}
if(!target&&parts.includes('OLB')&&slots.some(s=>/3.?4/.test(s.formation))){target='EDGE';method='official-OLB-and-ESPN-3-4';}
if(!target&&p.snapPositions?.length===1){const pos=p.snapPositions[0];const mapped={DT:'IDL',NT:'IDL',DE:parent==='LB'?'EDGE':'DE',ILB:'ILB',CB:'CB',S:'S',FS:'S',SS:'S'}[pos];if(allowed.includes(mapped)){target=mapped;method='snap-source-listed-position';}}
return {...p,defensiveGroup:target,roleStatus:target?'classified':'needs-review',roleMethod:method,espnRosterPosition:espn||null,espnId:athlete[0]?.id||null,espnRosterSource:team.rosterURL,espnDepthSource:team.depthURL,depthSlots:slots,depthGroupAlternatives:depthGroups};
});
const qualifies=players.filter(p=>p.qualifiesGamesPlayed===true);const summary=['IDL','DE','ILB','EDGE','CB','S'].map(position=>({position,count:qualifies.filter(p=>p.defensiveGroup===position).length,active:qualifies.filter(p=>p.defensiveGroup===position&&p.status==='Current site pool').length,injured:qualifies.filter(p=>p.defensiveGroup===position&&p.status!=='Current site pool').length}));
const report={status:'research-only-not-deployed',checkedAt:new Date().toISOString(),snapCheckedAt:snapshot.checkedAt,minimumShare:.25,denominator:'games with recorded player appearance; no absolute snap floor',definitions:{IDL:'Listed DT/NT/interior defensive linemen',DE:'Listed defensive ends within the original DL pool',ILB:'Inside and other off-ball linebackers within the original LB pool',EDGE:'Explicit EDGE players and outside rush linebackers within the original LB pool',CB:'Cornerbacks, including nickel/slot corners',S:'Safeties, including free and strong safety'},classificationPolicy:'Exactly one group per defender. Preserve original DL/LB/DB parent. Prefer precise official roster labels; use ESPN roster/depth roles for broad labels. DE and EDGE are separate listed-role buckets, not disjoint football skills. Conflicting or missing roles remain for review.',summary,totalQualified:qualifies.length,unresolvedQualified:qualifies.filter(p=>!p.defensiveGroup),players,teamSources:data.map(t=>({team:t.team,rosterURL:t.rosterURL,depthURL:t.depthURL,formations:[...new Set(t.slots.map(s=>s.formation))]}))};
assert.equal(summary.reduce((n,s)=>n+s.count,0)+report.unresolvedQualified.length,qualifies.length,'Partition mismatch');
fs.mkdirSync('research-output',{recursive:true});fs.writeFileSync('research-output/defensive-six-groups.json',JSON.stringify(report,null,2));
console.log('GROUP_SUMMARY',JSON.stringify({summary,totalQualified:qualifies.length,unresolved:report.unresolvedQualified.map(p=>({name:p.name,team:p.team,raw:p.rosterPosition,espn:p.espnRosterPosition,alternatives:p.depthGroupAlternatives}))}));
const raw=JSON.stringify(report);for(let i=0;i<raw.length;i+=12000)console.log('GROUP_CHUNK',i,raw.slice(i,i+12000));console.log('GROUP_COMPLETE',report.checkedAt);
})().catch(e=>{console.error(e);process.exit(1)});
