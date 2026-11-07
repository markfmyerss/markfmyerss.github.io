// Prepare only the new Southwest Division on GitHub; preserve the published Atlantic snapshot.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const teams={
 DAL:{name:'Dallas Mavericks',code:'DAL',nickname:'Mavericks',singular:'Maverick',nbaId:1610612742,slug:'mavericks',espn:6,primary:'#0064B1',accent:'#BBC4CA',highlight:'#a7dcff'},
 HOU:{name:'Houston Rockets',code:'HOU',nickname:'Rockets',singular:'Rocket',nbaId:1610612745,slug:'rockets',espn:10,primary:'#CE0E2D',accent:'#FFD520',highlight:'#ffbacb'},
 MEM:{name:'Memphis Grizzlies',code:'MEM',nickname:'Grizzlies',singular:'Grizzly',nbaId:1610612763,slug:'grizzlies',espn:29,primary:'#5D76A9',accent:'#FFBB22',highlight:'#c3d4f5'},
 NOP:{name:'New Orleans Pelicans',code:'NOP',nickname:'Pelicans',singular:'Pelican',nbaId:1610612740,slug:'pelicans',espn:3,primary:'#0A2240',accent:'#B4975A',highlight:'#ebd49d'},
 SAS:{name:'San Antonio Spurs',code:'SAS',nickname:'Spurs',singular:'Spur',nbaId:1610612759,slug:'spurs',espn:24,primary:'#000000',accent:'#C2CCD2',highlight:'#dce4e9'}
};
function emit(prefix,value){const source=typeof value==='string'?value:JSON.stringify(value);for(let i=0,n=0;i<source.length;i+=8000,n++)console.log(prefix+'_CHUNK_'+String(n).padStart(4,'0')+':'+JSON.stringify(source.slice(i,i+8000)));}
(async()=>{
 const t=teams[process.argv[2]];assert.ok(t,'known Southwest team');
 const box={};vm.runInNewContext(fs.readFileSync('nba-data.js','utf8')+fs.readFileSync('nba-central-data.js','utf8')+fs.readFileSync('nba-southeast-data.js','utf8')+(fs.existsSync('nba-northwest-data.js')?fs.readFileSync('nba-northwest-data.js','utf8'):'')+(fs.existsSync('nba-pacific-data.js')?fs.readFileSync('nba-pacific-data.js','utf8'):'')+';existing=Object.values(NBA_ROSTERS).flat().map(p=>p.nbaId);',box);const existing=new Set(box.existing);
 const source='https://www.nba.com/team/'+t.nbaId+'/'+t.slug,r=await fetch(source,{headers:{'user-agent':'Mozilla/5.0'},signal:AbortSignal.timeout(40000)});assert.ok(r.ok,t.name+' roster '+r.status);
 const html=await r.text(),match=html.match(/<script[^>]*id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);assert.ok(match,'NBA structured roster');
 const rows=JSON.parse(match[1]).props.pageProps.team.roster;assert.ok(rows.length>=12&&rows.length<=21,'reasonable official roster count');
 const info={name:t.name,code:t.code,nickname:t.nickname,singular:t.singular,nbaId:t.nbaId,league:'NBA',conference:'Western',division:'Southwest',verified:'November 6, 2026',source,logo:'assets/nba/logos/'+t.code+'.svg',colors:{primary:t.primary,accent:t.accent,highlight:t.highlight,ink:'#101014'}};
 const logoSource='https://cdn.nba.com/logos/nba/'+t.nbaId+'/primary/L/logo.svg',lr=await fetch(logoSource,{signal:AbortSignal.timeout(20000)});assert.ok(lr.ok,'logo '+t.name);const svg=await lr.text();assert.ok(svg.includes('<svg')&&!/<script|<foreignObject/i.test(svg));
 emit('SOUTHWEST_LOGO_'+t.code,svg);
 console.log('SOUTHWEST_PALETTE '+JSON.stringify({code:t.code,configured:info.colors,svgColors:[...new Set(svg.match(/#[0-9a-fA-F]{6}/g)||[])]}));
 const roster=[],shots={},portraits=[],fallbacks=[],seen=new Set();
 for(const p of rows){
  assert.equal(Number(p.TeamID),t.nbaId);assert.ok(p.PLAYER_ID&&!seen.has(p.PLAYER_ID),'unique roster player');assert.ok(!existing.has(p.PLAYER_ID),'player already listed on a published NBA roster: '+p.PLAYER);seen.add(p.PLAYER_ID);
  const positions=p.POSITION.split('-');assert.ok(positions.every(v=>['G','F','C'].includes(v)));
  const id='NBA-'+p.PLAYER_ID,player={id,nbaId:p.PLAYER_ID,name:p.PLAYER,number:String(p.NUM??''),position:positions[0],positions,rosterPosition:p.POSITION,team:t.name,source};roster.push(player);
  let url='https://cdn.nba.com/headshots/nba/latest/260x190/'+p.PLAYER_ID+'.png',profile='https://www.nba.com/player/'+p.PLAYER_ID+'/'+p.PLAYER_SLUG,provider='NBA',bytes,sha;
  try{
   const pr=await fetch(url,{signal:AbortSignal.timeout(25000)});if(!pr.ok)throw Error('NBA HTTP '+pr.status);
   bytes=Buffer.from(await pr.arrayBuffer());assert.equal(bytes.subarray(0,8).toString('hex'),'89504e470d0a1a0a');
   sha=crypto.createHash('sha256').update(bytes).digest('hex');
   if(sha==='b3ebe78bfd1cecb8880e51e6a48c9093c5cfb7065f981826d12fb4c01a1b0965')throw Error('NBA generic placeholder');
  }catch(nbaError){
   const er=await fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/'+t.espn+'/roster',{signal:AbortSignal.timeout(25000)});assert.ok(er.ok,'ESPN team roster');
   const espn=await er.json();assert.equal(espn.team.displayName,t.name);
   const normalize=n=>n.normalize('NFD').replace(/[\\u0300-\\u036f]/g,'').toLowerCase().replace(/[^a-z]/g,'');
   const matches=espn.athletes.filter(a=>normalize(a.fullName)===normalize(p.PLAYER));assert.equal(matches.length,1,'unambiguous ESPN match '+p.PLAYER);
   const a=matches[0];assert.ok(a.headshot?.href,'ESPN headshot '+p.PLAYER);url=a.headshot.href;profile=a.links.find(l=>l.rel.includes('playercard')).href;provider='ESPN';
   const pr=await fetch(url,{signal:AbortSignal.timeout(25000)});assert.ok(pr.ok,'ESPN portrait '+p.PLAYER);bytes=Buffer.from(await pr.arrayBuffer());assert.equal(bytes.subarray(0,8).toString('hex'),'89504e470d0a1a0a');sha=crypto.createHash('sha256').update(bytes).digest('hex');
   console.log('SOUTHWEST_ESPN '+JSON.stringify({name:p.PLAYER,team:t.name,id:p.PLAYER_ID,espnId:a.id,url,reason:nbaError.message}));
  }
  shots[id]={url:'assets/nba/headshots/'+p.PLAYER_ID+'.png',originalUrl:url,source:profile,provider};
  const encoded=bytes.toString('base64');for(let i=0,n=0;i<encoded.length;i+=16000,n++)console.log('SOUTHWEST_IMAGE_'+p.PLAYER_ID+'_CHUNK_'+String(n).padStart(4,'0')+':'+encoded.slice(i,i+16000));
  portraits.push({id:p.PLAYER_ID,url,path:shots[id].url,provider,width:bytes.readUInt32BE(16),height:bytes.readUInt32BE(20),bytes:bytes.length,sha256:sha});
 }
 emit('SOUTHWEST_TEAM_'+t.code,{info,roster,shots,logoSource,portraits,fallbacks});
 console.log('PASS SOUTHWEST '+JSON.stringify({team:t.name,players:roster.length,portraits:portraits.length,fallbacks}));
})().catch(e=>{console.error(e);process.exitCode=1;});