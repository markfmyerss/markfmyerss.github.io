const get=async url=>{const r=await fetch(url,{signal:AbortSignal.timeout(35000)});if(!r.ok)throw Error(r.status+' '+url);return r.json();};
(async()=>{
 for(const season of [2026,2025]){
 const url='https://statsapi.mlb.com/api/v1/people?personIds=676059,660271,683002&hydrate=stats(group=[hitting,pitching,fielding],type=[season],season='+season+')';
 const x=await get(url);console.log('PEOPLE_STATS '+JSON.stringify({season,url,people:x.people}));
 }
 const t=await get('https://statsapi.mlb.com/api/v1/teams/110/roster?rosterType=40Man&season=2026&date=09/27/2026&hydrate=person');console.log('IL_ROWS '+JSON.stringify(t.roster.filter(p=>p.status.description.includes('Injured')).map(p=>({id:p.person.id,name:p.person.fullName,status:p.status,position:p.position}))));
 for(const endpoint of ['https://img.mlbstatic.com/team-logos/110.svg','https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676059/headshot/67/2026','https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/676059/headshot/67/current']){
 const r=await fetch(endpoint);console.log('ASSET_PROBE '+JSON.stringify({url:endpoint,status:r.status,type:r.headers.get('content-type'),bytes:(await r.arrayBuffer()).byteLength}));
 }
})().catch(e=>{console.error(e);process.exit(1)});