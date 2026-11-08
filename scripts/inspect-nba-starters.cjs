const T=require('./scripts/roster-tools.cjs');(async()=>{for(const [label,url]of [
['depthGS','https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/9/depthcharts'],
['rosterGS','https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/9/roster'],
['scheduleGS','https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/9/schedule'],
['depthPageGS','https://www.espn.com/nba/team/depth/_/name/gs'],
['nbaRosterGS','https://cdn.nba.com/static/json/staticData/roster_Warriors.json']
]){try{const raw=await T.get(url);console.log('PROBE '+label+' '+raw.slice(0,label==='depthGS'?18000:label==='rosterGS'?14000:label==='depthPageGS'?1000:4000));if(label==='depthPageGS'){const tables=[...raw.matchAll(/<table[\\s\\S]*?<\\/table>/gi)];console.log('DEPTH_TABLES '+JSON.stringify(tables.map(m=>m[0]).join('')).slice(0,18000));}}catch(e){console.log('PROBE_ERROR '+label+' '+e.message);}}})().catch(e=>{console.error(e);process.exit(1)});