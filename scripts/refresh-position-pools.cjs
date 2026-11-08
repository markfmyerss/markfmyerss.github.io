// GitHub-only generation: current official rosters, reviewed rules, and attributed snap data.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict'),T=require('./roster-tools.cjs'),{nflPortrait}=require('./refresh-rosters.cjs');
const norm=s=>T.normalize(s).replace(/(?:jr|sr|iii|ii|iv|v)$/,'');
function parseCSV(s){const lines=[];let row=[],cell='',q=false;for(let i=0;i<s.length;i++){const c=s[i];if(c==='"'){if(q&&s[i+1]==='"'){cell+='"';i++;}else q=!q;}else if(c===','&&!q){row.push(cell);cell='';}else if(/[\r\n]/.test(c)&&!q){if(c==='\r'&&s[i+1]==='\n')i++;row.push(cell);if(row.some(Boolean))lines.push(row);row=[];cell='';}else cell+=c;}if(cell||row.length){row.push(cell);lines.push(row);}const keys=lines.shift();return lines.map(row=>Object.fromEntries(keys.map((k,i)=>[k,row[i]||''])));}
async function passingStats(){const out={};for(const [cat,sort,index,min]of [['passing','passingattempts',3,50],['rushing','rushingattempts',2,25],['receiving','receivingreceptions',1,10]]){
let url='https://www.nfl.com/stats/player-stats/category/'+cat+'/2026/REG/all/'+sort+'/desc',all=[],seen=new Set();
for(let page=0;url&&page<40;page++){assert(!seen.has(url),'Repeated stat cursor');seen.add(url);let html,rows;
for(const candidate of [url,url.replace('/REG/','/reg/'),url.replace('www.nfl.com','amp.nfl.com'),url.replace('/DESC','/desc')]){
try{const h=await T.get(candidate),list=[];for(const row of h.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)){const cells=[...row[1].matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)].map(x=>x[1]);if(!cells.length)continue;const a=[...cells[0].matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)].find(x=>/\/players\//.test(x[1])&&T.clean(x[2]));assert(a);list.push({name:T.clean(a[2]),value:+T.clean(cells[index]).replace(/,/g,''),profile:a[1]});}
if(list.length&&!list.some(x=>all.some(p=>p.profile===x.profile))){html=h;rows=list;break;}
}catch{}}assert(rows,'Fresh official statistics page unavailable');if(all.length)assert(rows[0].value<=all.at(-1).value);all.push(...rows);if(rows.at(-1).value<min){url=null;break;}const footer=html.slice(html.lastIndexOf('<footer class="d3-o-table__footer">'));const next=footer.match(/<a\b[^>]*href="([^"]+)"[^>]*class="[^"]*nfl-o-table-pagination__next[^"]*"/i);url=next?new URL(next[1].replace(/&amp;/g,'&'),'https://www.nfl.com').href:null;
}assert(all.at(-1)?.value<min,'Statistics did not cover qualifying boundary '+cat);out[cat]=all;}return out;}
function roleFor(p,policy,espn,depth){
const old=policy.roles.filter(x=>norm(x.name)===norm(p.name));if(old.length===1&&old[0].group)return old[0].group;
const raw=p.rosterPosition.split(/[/-]/);for(const [keys,g]of [[['DT','NT'],'IDL'],[['DE'],'DE'],[['EDGE'],'EDGE'],[['ILB','MLB'],'ILB'],[['CB'],'CB'],[['S','SS','FS'],'S']])if(raw.some(x=>keys.includes(x)))return g;
const a=espn.find(x=>norm(x.displayName||x.fullName)===norm(p.name)),pos=a?.position?.abbreviation;if(['DT','NT'].includes(pos))return 'IDL';if(pos==='DE')return p.position==='LB'?'EDGE':'DE';if(pos==='CB')return 'CB';if(['S','SS','FS'].includes(pos))return 'S';
const roles=[];for(const chart of depth.depthchart||[])for(const slot of Object.values(chart.positions||{})){if(!(slot.athletes||[]).some(x=>a?x.id===a.id:norm(x.displayName)===norm(p.name)))continue;const k=slot.position?.abbreviation||'',parent=slot.position?.parent?.abbreviation||'';if(/CB|NCB|NB/.test(k)||parent==='CB')roles.push('CB');else if(['S','SS','FS'].includes(k))roles.push('S');else if(/ILB|MLB/.test(k))roles.push('ILB');else if(/OLB|WLB|SLB/.test(k))roles.push(/3.?4/.test(chart.name)?'EDGE':'ILB');else if(/DE/.test(k))roles.push(p.position==='LB'?'EDGE':'DE');else if(/DT|NT/.test(k))roles.push('IDL');}
return new Set(roles).size===1?roles[0]:null;
}
async function main(){
const reviewed=process.argv.includes('--reviewed'),policy=JSON.parse(fs.readFileSync('assets/nfl-position-policy.json')),data=T.loadData();
const previous=data.NFL_POSITION_PLAYERS||[],history={};for(const [team,ps]of Object.entries(data.ROSTERS))history[team]=[...ps];
for(const f of fs.readdirSync('assets/roster-snapshots/NFL')){if(f==='NFL')continue;const dir='assets/roster-snapshots/NFL/'+f;if(!fs.statSync(dir).isDirectory())continue;for(const file of fs.readdirSync(dir)){const s=JSON.parse(fs.readFileSync(dir+'/'+file));for(const p of s.players)if(!history[p.team].some(x=>x.id===p.id))history[p.team].push(p);}}
for(const p of previous)if(!history[p.team].some(x=>x.id===p.id))history[p.team].push(p);
const shots={...data.HEADSHOTS,...data.NFL_POSITION_HEADSHOTS},teamSources=[];
const candidates=(await T.mapLimit(Object.entries(data.TEAM_INFO),4,async([team,info])=>{
const html=await T.get(info.source),players=[];let active=false;for(const t of html.matchAll(/<table\b[\s\S]*?<\/table>/gi)){const caption=T.clean(t[0].match(/<caption[^>]*>([\s\S]*?)<\/caption>/i)?.[1]||'');if(caption==='Active')active=true;if(caption!=='Active'&&(!/injur|physically|non.football|pup/i.test(caption)||/practice/i.test(caption)))continue;
for(const row of t[0].matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)){const c=[...row[1].matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)].map(x=>x[1]);if(!c.length)continue;const name=T.clean(c[0].match(/class="[^"]*\bnfl-o-roster__player-name\b[^"]*"[^>]*>([\s\S]*?)<\/span>/)?.[1]||'');assert(name);const raw=T.clean(c[2]).toUpperCase(),groups=[...new Set(raw.split(/[/-]/).map(T.group))],profile=new URL(c[0].match(/href="([^"]+)"/)[1],info.source).href;
const images=[...c[0].matchAll(/https:\/\/static\.clubs\.nfl\.com\/[^"\s<>]+/g)].map(x=>x[0].replace('/t_lazy/',''));players.push({name,team,number:T.clean(c[1]),position:groups[0],positions:groups,rosterPosition:raw,profile,rosterStatus:caption,imageCandidate:images.find(x=>x.includes('t_thumb_squared_3x'))||images[0]||null});
}}assert(active,'Active table missing '+team);teamSources.push({team,source:info.source});return T.assignNFLIds(players,history);
})).flat();
assert.equal(new Set(candidates.map(p=>p.id)).size,candidates.length,'Repeated NFL identities');
let stats,snaps,crosswalk,espnTeams;const sourceStatus={};
if(!reviewed){
stats=await passingStats();const csv=await T.get('https://github.com/nflverse/nflverse-data/releases/download/snap_counts/snap_counts_2026.csv');snaps=parseCSV(csv).filter(x=>+x.season===2026&&x.game_type==='REG');assert(snaps.length>1000);sourceStatus.snapSHA256=crypto.createHash('sha256').update(csv).digest('hex');
const cross=await T.get('https://github.com/nflverse/nflverse-data/releases/download/players/players.csv');crosswalk=parseCSV(cross);assert(crosswalk.length>1000);const teams=await T.get('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams?limit=100','json');espnTeams=teams.sports[0].leagues[0].teams.map(x=>x.team);
}
const selected=new Map(),unresolved=[],noParticipation=[];const add=(p,group)=>{const old=selected.get(p.id);if(old){if(!old.positions.includes(group))old.positions.push(group);return;}const {imageCandidate,...fields}=p;selected.set(p.id,{...fields,position:group,positions:[group]});};
const exact=(name,list)=>list.filter(x=>norm(x.name)===norm(name));
const records=reviewed?[...policy.offense,...policy.defense]:null;
if(reviewed){for(const row of records){const found=candidates.filter(p=>norm(p.name)===norm(row.name)&&p.team===row.team);assert.equal(found.length,1,'Reviewed player missing '+row.name);add(found[0],row.group);}}
else{
const snapGames=new Map();for(const r of snaps){const k=r.game_id+':'+r.team;if(!snapGames.has(k))snapGames.set(k,[]);snapGames.get(k).push(r);}
const opportunities=new Map();for(const [k,rows]of snapGames){const max=Math.max(...rows.map(r=>+r.defense_snaps)),possible=[];for(let n=max;n<=Math.max(max,400);n++)if(rows.every(r=>Math.abs(+r.defense_snaps/n-+r.defense_pct)<=.005000001))possible.push(n);assert.equal(possible.length,1,'Ambiguous defensive opportunity '+k);opportunities.set(k,possible[0]);}
const teamESPN=new Map();for(const [team,info]of Object.entries(data.TEAM_INFO)){const t=espnTeams.find(t=>T.normalize(t.displayName)===T.normalize(team));assert(t);const [r,d]=await Promise.all([T.get('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/'+t.id+'/roster?season=2026','json'),T.get('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/'+t.id+'/depthcharts','json')]);teamESPN.set(team,{roster:r.athletes.flatMap(g=>g.items||[]),depth:d});}
for(const p of candidates){
for(const g of p.positions.filter(g=>['QB','RB','WR','TE'].includes(g))){
const totals=Object.fromEntries(Object.entries(stats).map(([cat,rows])=>{const aliases={ 'Hollywood Brown':'Marquise Brown','Kenny Gainwell':'Kenneth Gainwell' };const found=exact(p.name,rows);const fallback=found.length?found:exact(aliases[p.name]||p.name,rows);assert(fallback.length<=1);return [cat,fallback[0]?.value||0];}));
const qualifies=g==='QB'?totals.passing>=50:g==='RB'?totals.rushing>=25||totals.receiving>=10:totals.receiving>=10;
if(qualifies||policy.offensePolicy.approvedPlayerExceptions.some(e=>norm(e.name)===norm(p.name)))add(p,g);
}
if(!p.positions.some(g=>['DL','LB','DB'].includes(g)))continue;
const espn=teamESPN.get(p.team),role=roleFor(p,policy,espn.roster,espn.depth),known=policy.roles.find(x=>norm(x.name)===norm(p.name)),a=espn.roster.filter(x=>norm(x.displayName||x.fullName)===norm(p.name)),cross=a.length===1?crosswalk.filter(x=>String(x.espn_id)===String(a[0].id)):[];
const id=known?.pfrId||(cross.length===1?cross[0].pfr_id:null),rows=id?snaps.filter(x=>x.pfr_player_id===id):snaps.filter(x=>norm(x.player)===norm(p.name));
const exception=policy.defensePolicy.approvedPlayerExceptions.some(x=>norm(x.name)===norm(p.name));
if(!rows.length){if(id){noParticipation.push({name:p.name,pfrId:id});}else unresolved.push(p.name);if(exception&&role)add(p,role);continue;}
const numerator=rows.reduce((n,r)=>n+(+r.defense_snaps),0),denominator=rows.reduce((n,r)=>n+opportunities.get(r.game_id+':'+r.team),0),share=numerator/denominator;
if(!role){if(share>=.25)unresolved.push('Role: '+p.name);continue;}if(share>=policy.defensePolicy.minimumDefensiveSharePercent[role]/100||exception)add(p,role);
}
assert(unresolved.length===0,'Unresolved participating identities/roles; retain published pools: '+unresolved.join(', '));
}
for(const p of candidates.filter(p=>p.positions.includes('OL')&&p.rosterStatus==='Active'))add(p,'OL');
const counts=new Map();for(const p of candidates)counts.set(p.imageCandidate,(counts.get(p.imageCandidate)||0)+1);
await T.mapLimit([...selected.values()],6,async p=>{if(!shots[p.id]?.url){const original=candidates.find(c=>c.id===p.id);shots[p.id]=await nflPortrait(original,counts);}});
const players=[...selected.values()].sort((a,b)=>a.id<b.id?-1:a.id>b.id?1:0),groups=['QB','RB','WR','TE','OL','IDL','DE','ILB','EDGE','CB','S'],tallies=Object.fromEntries(groups.map(g=>[g,players.filter(p=>p.positions.includes(g)).length]));
for(const g of groups)assert(tallies[g]>0&&tallies[g]<400,'Suspicious '+g+' pool');
for(const p of players)assert(shots[p.id]?.url&&shots[p.id]?.source,'Portrait provenance '+p.name);
const known={};for(const [team,ps]of Object.entries(history))known[team]=[...new Set([...ps.map(p=>p.id),...players.filter(p=>p.team===team).map(p=>p.id)])];
const verified=new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',month:'long',day:'numeric',year:'numeric'}).format(new Date()),status={version:1,checkedAt:new Date().toISOString(),verified,season:2026,seasonType:'REG',mode:reviewed?'approved-reviewed-snapshot':'weekly-statistics',counts:tallies,sourceStatus,noParticipation,unresolved,teamSources,snapAttribution:'nflverse / Pro Football Reference, CC BY 4.0',sourceNote:'Official NFL regular-season attempts/receptions; defensive snap share in recorded appearances; ESPN detailed roles; approved named exceptions.'};
const source='// Generated and validated on GitHub. League-wide pools only; team rosters stay complete.\nconst NFL_POSITION_INFO = '+JSON.stringify(status)+';\nconst NFL_POSITION_PLAYERS = '+JSON.stringify(players)+';\nconst NFL_POSITION_HEADSHOTS = '+JSON.stringify(Object.fromEntries(players.map(p=>[p.id,shots[p.id]])))+';\nconst NFL_POSITION_KNOWN_IDS = '+JSON.stringify(known)+';\nObject.assign(HEADSHOTS,NFL_POSITION_HEADSHOTS);\n';
fs.writeFileSync('nfl-position-data.js',source);T.writeJSON('assets/nfl-position-status.json',status);const hash=crypto.createHash('sha256').update(source).digest('hex').slice(0,12);fs.writeFileSync('index.html',fs.readFileSync('index.html','utf8').replace(/nfl-position-data\.js\?v=[^"]+/,'nfl-position-data.js?v='+hash));T.archiveData(T.loadData());console.log('POSITION_ELIGIBILITY '+JSON.stringify(status));
}
module.exports={main,parseCSV,roleFor};if(require.main===module)main().catch(e=>{console.error(e);process.exit(1)});
