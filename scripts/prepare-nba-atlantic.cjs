// Reviewable official NBA snapshot, generated only on GitHub. Never refreshes or changes NFL data.
const fs=require('node:fs/promises'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const teams=[
 {name:'Boston Celtics',code:'BOS',nickname:'Celtics',singular:'Celtic',nbaId:1610612738,slug:'celtics',primary:'#008348',accent:'#BB9753',highlight:'#8bd9b0'},
 {name:'Brooklyn Nets',code:'BKN',nickname:'Nets',singular:'Net',nbaId:1610612751,slug:'nets',primary:'#000000',accent:'#FFFFFF',highlight:'#d2d7da'},
 {name:'New York Knicks',code:'NYK',nickname:'Knicks',singular:'Knick',nbaId:1610612752,slug:'knicks',primary:'#1D428A',accent:'#F58426',highlight:'#ffb57b'},
 {name:'Philadelphia 76ers',code:'PHI',nickname:'76ers',singular:'76er',nbaId:1610612755,slug:'76ers',primary:'#1D428A',accent:'#C8102E',highlight:'#a9c9ff'},
 {name:'Toronto Raptors',code:'TOR',nickname:'Raptors',singular:'Raptor',nbaId:1610612761,slug:'raptors',primary:'#BC2126',accent:'#000000',highlight:'#ffadb5'}
];
(async()=>{
 const info={},rosters={},headshots={},ids=new Set(),checks=[];
 for(const t of teams){
  const source='https://www.nba.com/team/'+t.nbaId+'/'+t.slug;
  const r=await fetch(source,{headers:{'user-agent':'Mozilla/5.0'},signal:AbortSignal.timeout(45000)});assert.ok(r.ok,t.name+' roster HTTP '+r.status);
  const html=await r.text(),match=html.match(/<script[^>]*id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);assert.ok(match,t.name+' structured roster');
  const raw=JSON.parse(match[1]).props.pageProps.team.roster;assert.ok(raw.length>=12&&raw.length<=21,t.name+' roster count');
  info[t.name]={name:t.name,code:t.code,nickname:t.nickname,singular:t.singular,source,league:'NBA',conference:'Eastern',division:'Atlantic',nbaId:t.nbaId,verified:'November 6, 2026',colors:{primary:t.primary,accent:t.accent,highlight:t.highlight,ink:'#101014'}};
  rosters[t.name]=raw.map(p=>{
   assert.equal(Number(p.TeamID),t.nbaId);assert.ok(p.PLAYER_ID&&!ids.has(p.PLAYER_ID),'unique official player '+p.PLAYER);ids.add(p.PLAYER_ID);
   const positions=p.POSITION.split('-');assert.ok(positions.every(p=>['G','F','C'].includes(p)));
   const player={id:'NBA-'+p.PLAYER_ID,nbaId:p.PLAYER_ID,name:p.PLAYER,number:String(p.NUM??''),position:positions[0],positions,rosterPosition:p.POSITION,team:t.name,source};
   headshots[player.id]={url:'https://cdn.nba.com/headshots/nba/latest/1040x760/'+p.PLAYER_ID+'.png',source:'https://www.nba.com/player/'+p.PLAYER_ID+'/'+p.PLAYER_SLUG};
   return player;
  });
 }
 const entries=Object.entries(headshots),hashes=new Map();let cursor=0;
 async function worker(){
  while(cursor<entries.length){
   const [id,p]=entries[cursor++];const r=await fetch(p.url,{signal:AbortSignal.timeout(25000)});assert.ok(r.ok,'portrait '+id+' '+r.status);
   assert.ok(r.headers.get('content-type')?.startsWith('image/'),'portrait content '+id);
   const bytes=Buffer.from(await r.arrayBuffer());assert.ok(bytes.length>1000,'portrait content '+id);
   const hash=crypto.createHash('sha256').update(bytes).digest('hex');if(!hashes.has(hash))hashes.set(hash,[]);hashes.get(hash).push(id);checks.push(id);
  }
 }
 await Promise.all(Array.from({length:6},worker));
 const duplicates=[...hashes.values()].filter(v=>v.length>1);console.log('PORTRAIT_CHECK '+JSON.stringify({count:checks.length,duplicateImages:duplicates}));
 for(const group of duplicates){
  for(const size of ['260x190','2026/1040x760']){
   const results=[];
   for(const id of group){
    const person=id.replace('NBA-',''),url=size.includes('/')?'https://cdn.nba.com/headshots/nba/'+size+'/'+person+'.png':'https://cdn.nba.com/headshots/nba/latest/'+size+'/'+person+'.png';
    try{const r=await fetch(url,{signal:AbortSignal.timeout(12000)});const bytes=Buffer.from(await r.arrayBuffer());results.push({id,url,status:r.status,type:r.headers.get('content-type'),bytes:bytes.length,sha:crypto.createHash('sha256').update(bytes).digest('hex')});}catch(e){results.push({id,url,error:e.message});}
   }
   console.log('PORTRAIT_ALTERNATES '+JSON.stringify(results));
  }
 }
 const source='// Official NBA Atlantic roster snapshot verified November 6, 2026. Generated on GitHub from NBA.com.\nconst NBA_TEAM_INFO = '+JSON.stringify(info,null,2)+';\nconst NBA_ROSTERS = '+JSON.stringify(rosters,null,2)+';\nconst NBA_HEADSHOTS = '+JSON.stringify(headshots,null,2)+';\n';
 await fs.mkdir('qa/nba-probe',{recursive:true});await fs.writeFile('qa/nba-probe/nba-data.js',source);
 for(let i=0,n=0;i<source.length;i+=8000,n++)console.log('NBA_SNAPSHOT_CHUNK_'+String(n).padStart(4,'0')+':'+JSON.stringify(source.slice(i,i+8000)));
 console.log('NBA_ROSTERS '+JSON.stringify(Object.fromEntries(Object.entries(rosters).map(([name,ps])=>[name,ps.map(p=>p.name)]))));
 console.log('PASS '+teams.length+' official NBA teams, '+ids.size+' unique players and '+checks.length+' official portraits');
})().catch(e=>{console.error(e);process.exitCode=1;});