const get=async url=>{const r=await fetch(url,{signal:AbortSignal.timeout(35000)});if(!r.ok)throw Error(r.status+' '+url);return r.json();};
(async()=>{
 const teams=await get('https://statsapi.mlb.com/api/v1/teams?sportId=1&season=2026');console.log('TEAMS '+JSON.stringify(teams.teams.map(t=>({id:t.id,name:t.name,code:t.abbreviation,league:t.league,division:t.division}))));
 const schedule=await get('https://statsapi.mlb.com/api/v1/schedule?sportId=1&season=2026&gameType=R,F,D,L,W');
 const games=schedule.dates.flatMap(d=>d.games.map(g=>({date:d.date,type:g.gameType,away:g.teams.away.team,home:g.teams.home.team,status:g.status.abstractGameState,pk:g.gamePk})));
 console.log('SEASON '+JSON.stringify({games:games.length,lastRegular:games.filter(g=>g.type==='R').slice(-3),postseason:games.filter(g=>g.type!=='R')}));
 for(const id of [110,158,139])for(const type of ['active','postseason','40Man','fullSeason','fullRoster']){
 const date=id===110?'09/27/2026':'10/23/2026',url='https://statsapi.mlb.com/api/v1/teams/'+id+'/roster?rosterType='+type+'&season=2026&date='+date+'&hydrate=person';
 try{const x=await get(url);console.log('ROSTER_PROBE '+JSON.stringify({id,type,url,count:x.roster?.length,rows:x.roster?.map(p=>({id:p.person?.id,name:p.person?.fullName,status:p.status,position:p.position,jerseyNumber:p.jerseyNumber,primary:p.person.primaryPosition}))}));}catch(e){console.log('PROBE_ERROR '+e.message);}
 }
})().catch(e=>{console.error(e);process.exit(1)});
