const fs=require('node:fs'),assert=require('node:assert/strict');
const {get,clean,loadData,normalize}=require('./roster-tools.cjs');
const out='research-output';fs.mkdirSync(out,{recursive:true});
const alias=s=>normalize(s).replace(/(?:jr|sr|iii|ii|iv)$/,'');
(async()=>{
const data=loadData(),stats={},sources=[];
for(const [cat,sort,index]of [['passing','passingattempts',3],['rushing','rushingattempts',2],['receiving','receivingreceptions',1]]){
let url='https://www.nfl.com/stats/player-stats/category/'+cat+'/2026/REG/all/'+sort+'/desc';const seen=new Set(),records=[];
for(let page=1;url;page++){
assert(page<=40,'Too many pages');if(seen.has(url)) { console.log('REPEAT_SOURCE',cat,url); break; }seen.add(url);
const requestURL=new URL(url);requestURL.searchParams.set('research',Date.now()+'-'+cat+'-'+page);const html=await get(requestURL.href);fs.writeFileSync(out+'/'+cat+'-'+page+'.html',html);
const rows=[...html.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)];
let n=0;
for(const row of rows){
const cells=[...row[1].matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)].map(x=>x[1]);if(!cells.length)continue;
const a=[...cells[0].matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)].find(x=>/\/players\//.test(x[1])&&clean(x[2]));
assert(a,'No player link');const value=Number(clean(cells[index]).replace(/,/g,''));assert(Number.isInteger(value)&&value>=0,'Invalid statistic');
records.push({name:clean(a[2]),profile:new URL(a[1],url).href,value});n++;
}
assert(n>0,'Empty statistics page '+url);
sources.push({category:cat,page,url,rows:n});
const anchors=[...html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)];
console.log('PAGE',cat,page,url,'rows',n,'first',records.at(-n),'last',records.at(-1),'links',JSON.stringify(anchors.filter(x=>/Page/i.test(clean(x[2]))).map(x=>({href:x[1],text:clean(x[2])}))));
const nav=html.slice(html.lastIndexOf('<footer class="d3-o-table__footer">'));const next=nav.match(/<a\b[^>]*href="([^"]+)"[^>]*class="[^"]*nfl-o-table-pagination__next[^\"]*"/i);
if(records.at(-1).value < (cat==='passing'?50:cat==='rushing'?25:10)){console.log('THRESHOLD_COVERED',cat,records.at(-1).value);url=null;break;}
if(next){const u=new URL(next[1].replace(/&amp;/g,'&'),'https://www.nfl.com');const cursor=u.search.match(/[?&]aftercursor=([^&]+)/)?.[1];assert(cursor,'Missing pagination cursor');u.search='?aftercursor='+encodeURIComponent(decodeURIComponent(cursor));url=u.href;}else url=null;
}
assert(records.at(-1).value < (cat==='passing'?50:cat==='rushing'?25:10),'Source pagination did not reach eligibility threshold: '+cat);
const unique=new Map();for(const r of records){const old=unique.get(r.profile);if(old)assert.equal(old.value,r.value,'Conflicting repeated player');unique.set(r.profile,r);}
stats[cat]=[...unique.values()];console.log('SOURCE_TOTAL',cat,stats[cat].length,'pages',seen.size);
}
const roster=Object.values(data.ROSTERS).flat().filter(p=>(p.positions||[p.position]).some(x=>['QB','RB','WR','TE'].includes(x)));
const matching=[];
for(const p of roster){
const counts={},status={};
for(const cat of Object.keys(stats)){
let found=stats[cat].filter(s=>normalize(s.name)===normalize(p.name));if(!found.length)found=stats[cat].filter(s=>alias(s.name)===alias(p.name));
assert(found.length<=1,'Ambiguous stat match '+p.name);counts[cat]=found[0]?.value??null;status[cat]=found[0]?'matched':'not_in_collected_threshold_range';
if(found[0])matching.push({id:p.id,category:cat,rosterName:p.name,statName:found[0].name,profile:found[0].profile});
}
p.statTotals=counts;p.statMatch=status;p.qualifies=p.position==='QB'?counts.passing>=50:p.position==='RB'?counts.rushing>=25||counts.receiving>=10:counts.receiving>=10;
}
const summaries=['QB','RB','WR','TE'].map(pos=>{
const all=roster.filter(p=>(p.positions||[p.position]).includes(pos)),qualified=all.filter(p=>p.qualifies);
return {position:pos,current:all.length,qualified:qualified.length,excluded:all.length-qualified.length,
...(pos==='RB'?{rushingOnly:all.filter(p=>p.statTotals.rushing>=25&&p.statTotals.receiving<10).length,receivingOnly:all.filter(p=>p.statTotals.rushing<25&&p.statTotals.receiving>=10).length,both:all.filter(p=>p.statTotals.rushing>=25&&p.statTotals.receiving>=10).length}:{}),
nearCutoff:all.filter(p=>pos==='QB'?p.statTotals.passing>=35&&p.statTotals.passing<=65:pos==='RB'?(p.statTotals.rushing>=15&&p.statTotals.rushing<=35)||(p.statTotals.receiving>=7&&p.statTotals.receiving<=12):p.statTotals.receiving>=7&&p.statTotals.receiving<=12).map(p=>({name:p.name,team:p.team,stats:p.statTotals,qualifies:p.qualifies})),
alternatives:pos==='QB'?[50,75,100].map(t=>({minimum:t,count:all.filter(p=>p.statTotals.passing>=t).length})):pos==='RB'?[25,40,50].map(t=>({rushingMinimum:t,receptionsMinimum:10,count:all.filter(p=>p.statTotals.rushing>=t||p.statTotals.receiving>=10).length})):[10,15,20].map(t=>({minimum:t,count:all.filter(p=>p.statTotals.receiving>=t).length}))};
});
const outside={};for(const cat of Object.keys(stats)){const threshold=cat==='passing'?50:cat==='rushing'?25:10;outside[cat]=stats[cat].filter(s=>s.value>=threshold&&!roster.some(p=>alias(p.name)===alias(s.name)));}
const report={collectionScope:'Descending statistics collected through each qualifying threshold; unlisted totals are below threshold, not confirmed zero.',season:2026,seasonType:'REG',collectedAt:new Date().toISOString(),rosterCommit:process.env.GITHUB_SHA,proposedOnly:true,criteria:{QB:{passingAttempts:50},RB:{rushingAttempts:25,OR_receptions:10},WR:{receptions:10},TE:{receptions:10}},summaries,sources,stats,roster,matching,qualifyingOutsideCurrentOffenseRoster:outside};
fs.writeFileSync(out+'/position-eligibility.json',JSON.stringify(report,null,2));
const csv=['position,team,name,passing_attempts,rushing_attempts,receptions,qualifies',...roster.map(p=>[p.position,p.team,p.name,p.statTotals.passing,p.statTotals.rushing,p.statTotals.receiving,p.qualifies].map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(','))].join('\n');
fs.writeFileSync(out+'/position-eligibility.csv',csv);
console.log('SUMMARY_JSON',JSON.stringify({summaries,outside}));
const compact=JSON.stringify(report);for(let i=0;i<compact.length;i+=12000)console.log('REPORT_CHUNK',i,compact.slice(i,i+12000));
console.log('COLLECTION_COMPLETE',report.collectedAt);
})().catch(e=>{console.error(e);process.exit(1)});
