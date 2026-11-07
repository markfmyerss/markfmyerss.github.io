// Runs entirely on GitHub. Stage and validate candidates before any commit or deployment.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict'),T=require('./roster-tools.cjs');
const ESPN={ATL:1,BOS:2,BKN:17,CHA:30,CHI:4,CLE:5,DAL:6,DEN:7,DET:8,GSW:9,HOU:10,IND:11,LAC:12,LAL:13,MEM:29,MIA:14,MIL:15,MIN:16,NOP:3,NYK:18,OKC:25,ORL:19,PHI:20,PHX:21,POR:22,SAC:23,SAS:24,TOR:28,UTA:26,WAS:27};
const GENERIC_NBA='b3ebe78bfd1cecb8880e51e6a48c9093c5cfb7065f981826d12fb4c01a1b0965';
const digest=b=>crypto.createHash('sha256').update(b).digest('hex');
function png(bytes){assert.equal(bytes.subarray(0,8).toString('hex'),'89504e470d0a1a0a','Portrait must be PNG');assert.ok(bytes.length>4000,'Empty portrait');assert.ok(bytes.readUInt32BE(16)>=200&&bytes.readUInt32BE(20)>=150,'Portrait dimensions');assert.notEqual(digest(bytes),GENERIC_NBA,'NBA generic placeholder');return bytes;}
function localPortrait(bytes){const file='assets/roster-headshots/'+digest(bytes)+'.png';fs.mkdirSync(path.dirname(file),{recursive:true});if(!fs.existsSync(file))fs.writeFileSync(file,bytes);return file;}
async function nbaPortrait(p,info,espnCache){
 let url='https://cdn.nba.com/headshots/nba/latest/260x190/'+p.nbaId+'.png',source=p.profile,provider='NBA',bytes;
 try{bytes=png(await T.get(url,'bytes'));}
 catch(nbaError){
  let roster=espnCache.get(info.code);if(!roster){const id=ESPN[info.code];assert.ok(id,'ESPN team mapping');roster=await T.get('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/'+id+'/roster','json');assert.equal(roster.team.id,String(id),'ESPN team identity');espnCache.set(info.code,roster);}
  const matches=roster.athletes.filter(a=>T.normalize(a.fullName)===T.normalize(p.name));assert.equal(matches.length,1,'Unambiguous ESPN roster identity for '+p.name);
  const a=matches[0];assert.ok(a.headshot?.href,'ESPN headshot unavailable');url=a.headshot.href;assert.equal(new URL(url).hostname,'a.espncdn.com');bytes=png(await T.get(url,'bytes'));source=a.links.find(l=>l.rel.includes('playercard')).href;provider='ESPN';console.log('ESPN_FALLBACK '+JSON.stringify({player:p.name,team:p.team,espnId:a.id,reason:nbaError.message}));
 }
 return {url:localPortrait(bytes),originalUrl:url,source,provider,sha256:digest(bytes),width:bytes.readUInt32BE(16),height:bytes.readUInt32BE(20)};
}
async function nflPortrait(p,counts){
 let url=p.imageCandidate,source=p.profile;
 if(!url||counts.get(url)>1||/default|silhouette|nsp399n4t89mwbndaoew/i.test(url)){
  const slug=({'Vega Ioane':'olaivavega-ioane','Nate Thomas':'nathan-thomas','Kenny Moore II':'kenny-moore'})[p.name]||p.name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/['’.]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  source='https://www.nfl.com/players/'+slug+'/';const html=await T.get(source),images=[...html.matchAll(/https:\/\/static\.www\.nfl\.com\/image\/[^"\s<>]+/g)].map(m=>m[0].replace(/&amp;/g,'&'));
  url=images.find(u=>/t_player_profile_(?:landscape|square)/.test(u)&&!u.includes('nsp399n4t89mwbndaoew'));assert.ok(url,'Individual NFL portrait unavailable: '+p.name);
 }
 assert.ok(/^https:\/\//.test(url));const response=await fetch(url,{signal:AbortSignal.timeout(25000)});assert.ok(response.ok,'NFL portrait HTTP '+response.status);assert.ok((response.headers.get('content-type')||'').startsWith('image/'),'NFL image response');assert.ok((await response.arrayBuffer()).byteLength>500,'NFL empty portrait');return {url,source};
}
function serialize(data,report){
 return '// Weekly roster overrides. Generated and validated on GitHub; baseline data remains available for regression checks.\nconst ROSTER_REFRESH_STATUS = '+JSON.stringify(report)+';\nconst ROSTER_KNOWN_IDS = '+JSON.stringify(data.KNOWN_ROSTER_IDS)+';\n'+[
  ['TEAM_INFO',data.TEAM_INFO],['ROSTERS',data.ROSTERS],['HEADSHOTS',data.HEADSHOTS],['NBA_TEAM_INFO',data.NBA_TEAM_INFO],['NBA_ROSTERS',data.NBA_ROSTERS],['NBA_HEADSHOTS',data.NBA_HEADSHOTS]
 ].map(([name,value])=>'Object.assign('+name+','+JSON.stringify(value)+');').join('\n')+'\n';
}
function validateLeague(data,sport){
 const rosters=sport==='NFL'?data.ROSTERS:data.NBA_ROSTERS,info=sport==='NFL'?data.TEAM_INFO:data.NBA_TEAM_INFO,shots=sport==='NFL'?data.HEADSHOTS:data.NBA_HEADSHOTS,ids=new Set();
 assert.equal(Object.keys(rosters).length,sport==='NFL'?32:30);
 for(const [team,players]of Object.entries(rosters)){assert.ok(info[team]);assert.ok(players.length>0);
  for(const p of players){assert.equal(p.team,team);assert.ok(!ids.has(p.id),'Duplicate '+sport+' identity '+p.id);ids.add(p.id);assert.ok(p.name&&typeof p.id==='string');assert.ok((p.positions||[p.position]).every(pos=>(sport==='NFL'?T.NFL_POS:T.NBA_POS).includes(pos)&&pos!=='ALL'));assert.ok(shots[p.id]?.url&&shots[p.id]?.source,'Portrait provenance missing for '+p.name);}
 }
}
async function refreshTeam(data,previous,{sport,team,info},date,cache){
 const html=await T.get(info.source),old=(sport==='NFL'?previous.ROSTERS:previous.NBA_ROSTERS)[team],parsed=sport==='NFL'?T.assignNFLIds(T.parseNFL(html,info,team),previous.ROSTERS):T.parseNBA(html,info,team);
 assert.ok(old.length-parsed.length<=Math.max(12,Math.ceil(old.length*.3)),'Large unexplained roster reduction');
 const counts=new Map();for(const p of parsed)counts.set(p.imageCandidate,(counts.get(p.imageCandidate)||0)+1);
 const oldShots=sport==='NFL'?previous.HEADSHOTS:previous.NBA_HEADSHOTS,newShots={},clean=[];
 for(const p of parsed){
  const existing=old.find(o=>o.id===p.id),record=oldShots[p.id];
  if(existing&&record?.url&&record.source){if(record.url.startsWith('assets/'))assert.ok(fs.existsSync(record.url),'Existing portrait asset missing');newShots[p.id]=record;}
  else newShots[p.id]=sport==='NFL'?await nflPortrait(p,counts):await nbaPortrait(p,info,cache);
  const {imageCandidate,profile,...fields}=p;clean.push(sport==='NFL'?{...fields,profile}:{...fields});
 }
 const rosterMap=sport==='NFL'?data.ROSTERS:data.NBA_ROSTERS,infoMap=sport==='NFL'?data.TEAM_INFO:data.NBA_TEAM_INFO,shotMap=sport==='NFL'?data.HEADSHOTS:data.NBA_HEADSHOTS;
 rosterMap[team]=clean;infoMap[team]={...info,verified:date};Object.assign(shotMap,newShots);
 return {sport,team,status:'verified',players:clean.length,changed:T.stamp(old)!==T.stamp(clean),added:clean.filter(p=>!old.some(o=>o.id===p.id)).map(p=>p.name),removed:old.filter(p=>!clean.some(o=>o.id===p.id)).map(p=>p.name)};
}
async function main(){
 const previous=T.loadData(),data=JSON.parse(JSON.stringify(previous)),date=new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',month:'long',day:'numeric',year:'numeric'}).format(new Date()),teams=[...Object.entries(previous.TEAM_INFO).map(([team,info])=>({sport:'NFL',team,info})),...Object.entries(previous.NBA_TEAM_INFO).map(([team,info])=>({sport:'NBA',team,info}))],cache=new Map();
 data.KNOWN_ROSTER_IDS=data.KNOWN_ROSTER_IDS||{NFL:{},NBA:{}};
 for(const sport of ['NFL','NBA'])for(const [team,players]of Object.entries(sport==='NFL'?previous.ROSTERS:previous.NBA_ROSTERS)){data.KNOWN_ROSTER_IDS[sport][team]=[...new Set([...(data.KNOWN_ROSTER_IDS[sport][team]||[]),...players.map(p=>p.id)])];}
 // Archive the live roster before staging its replacement. These files publish atomically with the new snapshot.
 T.archiveData(previous);
 const results=await T.mapLimit(teams,4,async spec=>{try{return await refreshTeam(data,previous,spec,date,cache);}catch(e){return {sport:spec.sport,team:spec.team,status:'retained',reason:e.message};}});
 for(const sport of ['NFL','NBA']){try{validateLeague(data,sport);}catch(e){const fields=sport==='NFL'?['TEAM_INFO','ROSTERS','HEADSHOTS']:['NBA_TEAM_INFO','NBA_ROSTERS','NBA_HEADSHOTS'];for(const key of fields)data[key]=previous[key];for(const row of results.filter(r=>r.sport===sport)){row.status='retained';row.reason='League validation: '+e.message;}}}
 assert.ok(results.some(r=>r.status==='verified'),'No roster sources passed validation; last published rosters retained');
 for(const sport of ['NFL','NBA'])for(const [team,players]of Object.entries(sport==='NFL'?data.ROSTERS:data.NBA_ROSTERS))data.KNOWN_ROSTER_IDS[sport][team]=[...new Set([...data.KNOWN_ROSTER_IDS[sport][team],...players.map(p=>p.id)])];
 T.archiveData(data);
 const report={version:1,checkedAt:new Date().toISOString(),schedule:'Tuesday 08:00 America/New_York',verified:results.filter(r=>r.status==='verified').length,retained:results.filter(r=>r.status==='retained').length,teams:results};
 const source=serialize(data,report);fs.writeFileSync('weekly-rosters.js',source);const version=digest(Buffer.from(source)).slice(0,12);fs.writeFileSync('index.html',fs.readFileSync('index.html','utf8').replace(/weekly-rosters\.js\?v=[^"]+/, 'weekly-rosters.js?v='+version));T.writeJSON('assets/roster-refresh-status.json',report);
 for(const row of results)console.log('WEEKLY_TEAM '+JSON.stringify(row));console.log('WEEKLY_SUMMARY '+JSON.stringify({verified:report.verified,retained:report.retained,date}));
 if(process.env.GITHUB_STEP_SUMMARY)fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY,'## Weekly roster refresh\n\n'+report.verified+' teams verified; '+report.retained+' previous rosters retained.\n\n'+results.map(r=>'- '+r.team+': '+r.status+(r.reason?' — '+r.reason:' ('+r.players+' players)')).join('\n')+'\n');
 if(report.retained)console.log('::warning::Some roster sources could not be verified. Their last published rosters and dates were retained.');
}
module.exports={ESPN,png,nbaPortrait,nflPortrait,serialize,validateLeague,refreshTeam,main};
if(require.main===module)main().catch(e=>{console.error(e);process.exit(1)});
