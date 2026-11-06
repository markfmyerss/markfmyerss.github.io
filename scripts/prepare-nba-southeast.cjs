// Prepare only the new Southeast Division on GitHub; preserve the published Atlantic snapshot.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const teams={
 ATL:{name:'Atlanta Hawks',code:'ATL',nickname:'Hawks',singular:'Hawk',nbaId:1610612737,slug:'hawks',primary:'#E03A3E',accent:'#C1D32F',highlight:'#ffb0b4'},
 CHA:{name:'Charlotte Hornets',code:'CHA',nickname:'Hornets',singular:'Hornet',nbaId:1610612766,slug:'hornets',primary:'#1D1160',accent:'#00788C',highlight:'#82d8dc'},
 MIA:{name:'Miami Heat',code:'MIA',nickname:'Heat',singular:'Heat player',nbaId:1610612748,slug:'heat',primary:'#98002E',accent:'#F9A01B',highlight:'#ffc879'},
 ORL:{name:'Orlando Magic',code:'ORL',nickname:'Magic',singular:'Magic player',nbaId:1610612753,slug:'magic',primary:'#0077C0',accent:'#C4CED4',highlight:'#9ed7ff'},
 WAS:{name:'Washington Wizards',code:'WAS',nickname:'Wizards',singular:'Wizard',nbaId:1610612764,slug:'wizards',primary:'#002B5C',accent:'#E31837',highlight:'#a9c9ff'}
};
function emit(prefix,value){const source=typeof value==='string'?value:JSON.stringify(value);for(let i=0,n=0;i<source.length;i+=8000,n++)console.log(prefix+'_CHUNK_'+String(n).padStart(4,'0')+':'+JSON.stringify(source.slice(i,i+8000)));}
(async()=>{
 const t=teams[process.argv[2]];assert.ok(t,'known Southeast team');
 const box={};vm.runInNewContext(fs.readFileSync('nba-data.js','utf8')+fs.readFileSync('nba-central-data.js','utf8')+';existing=Object.values(NBA_ROSTERS).flat().map(p=>p.nbaId);',box);const existing=new Set(box.existing);
 const source='https://www.nba.com/team/'+t.nbaId+'/'+t.slug,r=await fetch(source,{headers:{'user-agent':'Mozilla/5.0'},signal:AbortSignal.timeout(40000)});assert.ok(r.ok,t.name+' roster '+r.status);
 const html=await r.text(),match=html.match(/<script[^>]*id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);assert.ok(match,'NBA structured roster');
 const rows=JSON.parse(match[1]).props.pageProps.team.roster;assert.ok(rows.length>=12&&rows.length<=21,'reasonable official roster count');
 const info={name:t.name,code:t.code,nickname:t.nickname,singular:t.singular,nbaId:t.nbaId,league:'NBA',conference:'Eastern',division:'Southeast',verified:'November 6, 2026',source,logo:'assets/nba/logos/'+t.code+'.svg',colors:{primary:t.primary,accent:t.accent,highlight:t.highlight,ink:'#101014'}};
 const logoSource='https://cdn.nba.com/logos/nba/'+t.nbaId+'/primary/L/logo.svg',lr=await fetch(logoSource,{signal:AbortSignal.timeout(20000)});assert.ok(lr.ok,'logo '+t.name);const svg=await lr.text();assert.ok(svg.includes('<svg')&&!/<script|<foreignObject/i.test(svg));
 emit('SOUTHEAST_LOGO_'+t.code,svg);
 console.log('SOUTHEAST_PALETTE '+JSON.stringify({code:t.code,configured:info.colors,svgColors:[...new Set(svg.match(/#[0-9a-fA-F]{6}/g)||[])]}));
 const roster=[],shots={},portraits=[],fallbacks=[],seen=new Set();
 for(const p of rows){
  assert.equal(Number(p.TeamID),t.nbaId);assert.ok(p.PLAYER_ID&&!seen.has(p.PLAYER_ID),'unique roster player');assert.ok(!existing.has(p.PLAYER_ID),'player already listed on a published NBA roster: '+p.PLAYER);seen.add(p.PLAYER_ID);
  const positions=p.POSITION.split('-');assert.ok(positions.every(v=>['G','F','C'].includes(v)));
  const id='NBA-'+p.PLAYER_ID,player={id,nbaId:p.PLAYER_ID,name:p.PLAYER,number:String(p.NUM??''),position:positions[0],positions,rosterPosition:p.POSITION,team:t.name,source};roster.push(player);
  const url='https://cdn.nba.com/headshots/nba/latest/260x190/'+p.PLAYER_ID+'.png',pr=await fetch(url,{headers:{accept:'image/png'},signal:AbortSignal.timeout(25000)});assert.ok(pr.ok,'portrait '+p.PLAYER);
  const bytes=Buffer.from(await pr.arrayBuffer());assert.equal(bytes.subarray(0,8).toString('hex'),'89504e470d0a1a0a');assert.equal(bytes.readUInt32BE(16),260);assert.equal(bytes.readUInt32BE(20),190);
  const sha=crypto.createHash('sha256').update(bytes).digest('hex'),profile='https://www.nba.com/player/'+p.PLAYER_ID+'/'+p.PLAYER_SLUG;
  if(sha==='b3ebe78bfd1cecb8880e51e6a48c9093c5cfb7065f981826d12fb4c01a1b0965'){
   shots[id]={url:null,originalUrl:url,source:profile,unavailableReason:'Official NBA portrait endpoint returns a generic placeholder.'};fallbacks.push(id);continue;
  }
  shots[id]={url:'assets/nba/headshots/'+p.PLAYER_ID+'.png',originalUrl:url,source:profile};
  const encoded=bytes.toString('base64');for(let i=0,n=0;i<encoded.length;i+=16000,n++)console.log('SOUTHEAST_IMAGE_'+p.PLAYER_ID+'_CHUNK_'+String(n).padStart(4,'0')+':'+encoded.slice(i,i+16000));
  portraits.push({id:p.PLAYER_ID,url,path:shots[id].url,bytes:bytes.length,sha256:sha});
 }
 emit('SOUTHEAST_TEAM_'+t.code,{info,roster,shots,logoSource,portraits,fallbacks});
 console.log('PASS SOUTHEAST '+JSON.stringify({team:t.name,players:roster.length,portraits:portraits.length,fallbacks}));
})().catch(e=>{console.error(e);process.exitCode=1;});