const fs=require('node:fs'),assert=require('node:assert/strict');
const {get,clean,loadData,normalize,group,mapLimit}=require('./roster-tools.cjs');
const root='research/2026-offensive-position-baselines/';
const baseline=JSON.parse(fs.readFileSync(root+'results.json')),policy=JSON.parse(fs.readFileSync(root+'eligibility-policy.json')),data=loadData();
const alias=s=>normalize(s).replace(/(?:jr|sr|iii|ii|iv)$/,'');
const matches=(a,b)=>normalize(a)===normalize(b)||alias(a)===alias(b);
(async()=>{
const audits=await mapLimit(Object.entries(data.TEAM_INFO),4,async([team,info])=>{
const html=await get(info.source);const tables=[...html.matchAll(/<table\b[\s\S]*?<\/table>/gi)].map(x=>x[0]);assert(tables.length,'No roster tables '+team);
const captions=[],reserves=[];
for(const table of tables){const caption=clean(table.match(/<caption[^>]*>([\s\S]*?)<\/caption>/i)?.[1]||'');captions.push(caption);
if(!/reserve|injur|physically|non.football|pup/i.test(caption)||/practice/i.test(caption))continue;
for(const row of table.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)){
const cells=[...row[1].matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)].map(x=>x[1]);if(!cells.length)continue;assert(cells.length>=3);
const name=clean(cells[0].match(/class="[^"]*\bnfl-o-roster__player-name\b[^"]*"[^>]*>([\s\S]*?)<\/span>/)?.[1]||'');assert(name,'No reserve name '+team);
const raw=clean(cells[2]).toUpperCase();const positions=[...new Set(raw.split(/[/-]/).map(group))];
const href=cells[0].match(/href="([^"]+)"/)?.[1];reserves.push({name,team,caption,rosterPosition:raw,positions,profile:href?new URL(href,info.source).href:null,injuryRelated:/injur|physically|non.football|pup/i.test(caption),source:info.source});
}}
assert(captions.includes('Active'),'Active table missing '+team);
return {team,source:info.source,captions,reserves};
});
const qualified=[],otherReserves=[],alreadyPresent=[];
for(const p of audits.flatMap(t=>t.reserves)){
if(!p.positions.some(x=>['QB','RB','WR','TE'].includes(x)))continue;
const stats={};for(const cat of ['passing','rushing','receiving']){const found=baseline.stats[cat].filter(x=>matches(x.name,p.name));assert(found.length<=1,'Ambiguous stats '+p.name);stats[cat]=found[0]?.value??null;}
const qualifyingPositions=p.positions.filter(pos=>pos==='QB'?stats.passing>=50:pos==='RB'?stats.rushing>=25||stats.receiving>=10:['WR','TE'].includes(pos)?stats.receiving>=10:false);
if(!qualifyingPositions.length)continue;
const row={...p,statTotals:stats,qualifyingPositions};
if(baseline.roster.some(x=>matches(x.name,p.name))){alreadyPresent.push(row);continue;}
if(p.injuryRelated)qualified.push(row);else otherReserves.push(row);
}
assert.equal(new Set(qualified.map(x=>alias(x.name))).size,qualified.length,'Duplicate reserve identity');
const totals=['QB','RB','WR','TE'].map(pos=>{
const base=baseline.summaries.find(s=>s.position===pos).qualified;
const overrides=policy.approvedPlayerExceptions.filter(p=>p.position===pos&&!baseline.roster.find(x=>x.id===p.id)?.qualifies);
const additions=qualified.filter(p=>p.qualifyingPositions.includes(pos));
return {position:pos,statisticalBaseline:base,namedExceptions:overrides.map(p=>p.name),injuredAdditions:additions.map(p=>p.name),total:base+overrides.length+additions.length};
});
const report={checkedAt:new Date().toISOString(),baselineStatsCollectedAt:baseline.collectedAt,status:'research-only-not-deployed',policy,totals,qualifiedInjuredAdditions:qualified,qualifyingOtherReserveStatuses:otherReserves,alreadyInBaseline:alreadyPresent,teamAudits:audits.map(t=>({team:t.team,source:t.source,captions:t.captions,reservePlayers:t.reserves.length})),notes:['Totals combine the saved statistic snapshot with current official team reserve tables. Named exceptions are unique current roster players. Injury-related reserve captions are eligible; other reserve reasons are listed for review, never automatically counted.']};
fs.mkdirSync('research-output',{recursive:true});fs.writeFileSync('research-output/updated-eligibility.json',JSON.stringify(report,null,2));
console.log('TALLY_JSON',JSON.stringify(report));console.log('TALLY_COMPLETE',report.checkedAt);
})().catch(e=>{console.error(e);process.exit(1)});
