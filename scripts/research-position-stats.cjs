const {get,clean,loadData}=require('./scripts/roster-tools.cjs');
(async()=>{
const d=loadData();console.log('ROSTER_SAMPLE',JSON.stringify(Object.values(d.ROSTERS).flat().filter(x=>['QB','RB','WR','TE'].includes(x.position)).slice(0,3)));
for(const [cat,sort]of [['passing','passingattempts'],['rushing','rushingattempts'],['receiving','receivingreceptions']]){
const url='https://www.nfl.com/stats/player-stats/category/'+cat+'/2026/REG/all/'+sort+'/desc';const html=await get(url);
console.log('PROBE',cat,html.length,'rows',[...html.matchAll(/<tr\b/gi)].length);
console.log('PAGINATION',cat,[...html.matchAll(/.{0,180}(?:pagination|Next Page|next-page|load-more|after=|page=).{0,300}/gi)].map(x=>x[0]).slice(-20));
console.log('ROW',cat,html.match(/<tbody[\s\S]*?<\/tr>/)?.[0]?.slice(0,3500));
}
})().catch(e=>{console.error(e);process.exit(1)});
