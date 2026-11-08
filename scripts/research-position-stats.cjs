const {get,clean}=require('./roster-tools.cjs');
(async()=>{
const cursor='AAAAMgAAADJARIAAAAAAADFleUp6WldGeVkyaEJablJsY2lJNld6UXhMQ0l6TWpBd05HSTBNUzAwWkRJMExUUXdOVGd0TldFellpMHdNV0prTXpsbE5tRXlOV1FpTERJd01qWmRmUT09';
for(const prefix of ['https://www.nfl.com/stats/player-stats/category/rushing/2026/REG/all/rushingattempts/DESC','https://www.nfl.com/stats/player-stats/category/rushing/2026/REG/all/rushingattempts/desc','https://www.nfl.com/stats/player-stats/category/rushing/2026/reg/all/rushingattempts/desc','https://amp.nfl.com/stats/player-stats/category/rushing/2026/REG/all/rushingattempts/DESC']){
try {const u=prefix+'?aftercursor='+cursor;const h=await get(u);const rows=[...h.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map(x=>[...x[1].matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)].map(y=>clean(y[1]))).filter(x=>x.length);console.log('VARIANT',u,JSON.stringify(rows.map(x=>[x[0],x[2]])));for(const m of h.matchAll(/Next Page/g))console.log('NAV_RAW',h.slice(Math.max(0,m.index-1500),m.index+600));}
catch(e){console.log('ERROR',prefix,e.message);}
}
try{const u='https://site.web.api.espn.com/apis/fittwo/v3/sports/football/nfl/athletes?region=us&lang=en&limit=1000&season=2026&seasontype=2&sort=rushing.rushingAttempts%3Adesc';const j=await get(u,'json');console.log('ESPN',JSON.stringify(j).slice(0,16000));}catch(e){console.log('ESPN_ERROR',e.message)}
})().catch(e=>{console.error(e);process.exit(1)});
