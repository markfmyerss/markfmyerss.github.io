// Prepare only the new Central Division on GitHub; preserve the published Atlantic snapshot.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const teams={
 CHI:{name:'Chicago Bulls',code:'CHI',nickname:'Bulls',singular:'Bull',nbaId:1610612741,slug:'bulls',primary:'#CD1F43',accent:'#000000',highlight:'#ffadb9'},
 CLE:{name:'Cleveland Cavaliers',code:'CLE',nickname:'Cavaliers',singular:'Cavalier',nbaId:1610612739,slug:'cavaliers',primary:'#860038',accent:'#BC945C',highlight:'#e7c79b'},
 DET:{name:'Detroit Pistons',code:'DET',nickname:'Pistons',singular:'Piston',nbaId:1610612765,slug:'pistons',primary:'#C8102E',accent:'#1D428A',highlight:'#ffadb9'},
 IND:{name:'Indiana Pacers',code:'IND',nickname:'Pacers',singular:'Pacer',nbaId:1610612754,slug:'pacers',primary:'#0C2340',accent:'#FFD520',highlight:'#FFD520'},
 MIL:{name:'Milwaukee Bucks',code:'MIL',nickname:'Bucks',singular:'Buck',nbaId:1610612749,slug:'bucks',primary:'#00471A',accent:'#EDE0C5',highlight:'#b6dfc1'}
};
function emit(prefix,value){const source=typeof value==='string'?value:JSON.stringify(value);for(let i=0,n=0;i<source.length;i+=8000,n++)console.log(prefix+'_CHUNK_'+String(n).padStart(4,'0')+':'+JSON.stringify(source.slice(i,i+8000)));}
(async()=>{
 const t=teams[process.argv[2]];assert.ok(t,'known Central team');
 const box={};vm.runInNewContext(fs.readFileSync('nba-data.js','utf8')+';existing=Object.values(NBA_ROSTERS).flat().map(p=>p.nbaId);',box);const existing=new Set(box.existing);
 const source='https://www.nba.com/team/'+t.nbaId+'/'+t.slug,r=await fetch(source,{headers:{'user-agent':'Mozilla/5.0'},signal:AbortSignal.timeout(40000)});assert.ok(r.ok,t.name+' roster '+r.status);
 const html=await r.text(),match=html.match(/<script[^>]*id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);assert.ok(match,'NBA structured roster');
 const rows=JSON.parse(match[1]).props.pageProps.team.roster;assert.ok(rows.length>=12&&rows.length<=21,'reasonable official roster count');
 const info={name:t.name,code:t.code,nickname:t.nickname,singular:t.singular,nbaId:t.nbaId,league:'NBA',conference:'Eastern',division:'Central',verified:'November 6, 2026',source,logo:'assets/nba/logos/'+t.code+'.svg',colors:{primary:t.primary,accent:t.accent,highlight:t.highlight,ink:'#101014'}};
 const logoSource='https://cdn.nba.com/logos/nba/'+t.nbaId+'/primary/L/logo.svg',lr=await fetch(logoSource,{signal:AbortSignal.timeout(20000)});assert.ok(lr.ok,'logo '+t.name);const svg=await lr.text();assert.ok(svg.includes('<svg')&&!/<script|<foreignObject/i.test(svg));
 emit('CENTRAL_LOGO_'+t.code,svg);
 console.log('CENTRAL_PALETTE '+JSON.stringify({code:t.code,configured:info.colors,svgColors:[...new Set(svg.match(/#[0-9a-fA-F]{6}/g)||[])]}));
 const roster=[],shots={},portraits=[],fallbacks=[],seen=new Set();
 for(const p of rows){
  assert.equal(Number(p.TeamID),t.nbaId);assert.ok(p.PLAYER_ID&&!seen.has(p.PLAYER_ID),'unique roster player');assert.ok(!existing.has(p.PLAYER_ID),'player already listed on an Atlantic roster: '+p.PLAYER);seen.add(p.PLAYER_ID);
  const positions=p.POSITION.split('-');assert.ok(positions.every(v=>['G','F','C'].includes(v)));
  const id='NBA-'+p.PLAYER_ID,player={id,nbaId:p.PLAYER_ID,name:p.PLAYER,number:String(p.NUM??''),position:positions[0],positions,rosterPosition:p.POSITION,team:t.name,source};roster.push(player);
  const url='https://cdn.nba.com/headshots/nba/latest/260x190/'+p.PLAYER_ID+'.png',pr=await fetch(url,{headers:{accept:'image/png'},signal:AbortSignal.timeout(25000)});assert.ok(pr.ok,'portrait '+p.PLAYER);
  const bytes=Buffer.from(await pr.arrayBuffer());assert.equal(bytes.subarray(0,8).toString('hex'),'89504e470d0a1a0a');assert.equal(bytes.readUInt32BE(16),260);assert.equal(bytes.readUInt32BE(20),190);
  const sha=crypto.createHash('sha256').update(bytes).digest('hex'),profile='https://www.nba.com/player/'+p.PLAYER_ID+'/'+p.PLAYER_SLUG;
  if(sha==='b3ebe78bfd1cecb8880e51e6a48c9093c5cfb7065f981826d12fb4c01a1b0965'){
   shots[id]={url:null,originalUrl:url,source:profile,unavailableReason:'Official NBA portrait endpoint returns a generic placeholder.'};fallbacks.push(id);continue;
  }
  shots[id]={url:'assets/nba/headshots/'+p.PLAYER_ID+'.png',originalUrl:url,source:profile};
  const encoded=bytes.toString('base64');for(let i=0,n=0;i<encoded.length;i+=16000,n++)console.log('CENTRAL_IMAGE_'+p.PLAYER_ID+'_CHUNK_'+String(n).padStart(4,'0')+':'+encoded.slice(i,i+16000));
  portraits.push({id:p.PLAYER_ID,url,path:shots[id].url,bytes:bytes.length,sha256:sha});
 }
 emit('CENTRAL_TEAM_'+t.code,{info,roster,shots,logoSource,portraits,fallbacks});
 console.log('PASS CENTRAL '+JSON.stringify({team:t.name,players:roster.length,portraits:portraits.length,fallbacks}));
})().catch(e=>{console.error(e);process.exitCode=1;});