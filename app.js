'use strict';
const $ = id => document.getElementById(id);
const positions = ['ALL','QB','RB','WR','TE','OL','DL','LB','DB','ST'];
const LEAGUE_POSITIONS={NFL:['QB','RB','WR','TE','LT','RT','LG','RG','C','IDL','DE','ILB','EDGE','CB','S'],NBA:['PG','SG','SF','PF','C'],MLB:['C','1B','2B','3B','SS','LF','CF','RF','DH','SP','RP']};
const selectablePositions=(sport,league=false)=>league?LEAGUE_POSITIONS[sport]:sport==='MLB'?['ALL',...LEAGUE_POSITIONS.MLB]:sport==='NBA'?['ALL','G','F','C']:SPORTS[sport].positions.filter(p=>!['ST','IDL','DE','ILB','EDGE','CB','S','LT','RT','LG','RG','C'].includes(p));

const mlbReady=typeof MLB_TEAM_INFO!=='undefined';
const nbaReady=typeof NBA_TEAM_INFO!=='undefined';
const ALL_TEAM_INFO={...TEAM_INFO,...(nbaReady?NBA_TEAM_INFO:{}),...(mlbReady?MLB_TEAM_INFO:{})};
const ALL_HEADSHOTS={...HEADSHOTS,...(typeof NFL_POSITION_HEADSHOTS==='undefined'?{}:NFL_POSITION_HEADSHOTS),...(nbaReady?NBA_HEADSHOTS:{}),...(mlbReady?MLB_HEADSHOTS:{})};
const SPORTS={NFL:{teams:TEAM_INFO,positions:[...new Set([...positions,...LEAGUE_POSITIONS.NFL])]},...(nbaReady?{NBA:{teams:NBA_TEAM_INFO,positions:['ALL','G','F','C','PG','SG','SF','PF']}}:{}),...(mlbReady?{MLB:{teams:MLB_TEAM_INFO,positions:['ALL',...LEAGUE_POSITIONS.MLB]}}:{})};
let activeSport='NFL';
const leagueFor=team=>ALL_TEAM_INFO[team]?.league||'NFL';
const rosterFor=team=>isLeaguePool(team)?leaguePlayers(leagueFor(team)):leagueFor(team)==='MLB'?MLB_ROSTERS[team]:leagueFor(team)==='NBA'?NBA_ROSTERS[team]:ROSTERS[team];
const teamsFor=sport=>Object.keys(SPORTS[sport].teams);
const prefixFor=sport=>sport.toLowerCase()+'-sorter';
const selectionKey=sport=>prefixFor(sport)+'-selection';


const LEAGUE_NAMES={NFL:'NFL League',NBA:'NBA League',MLB:'MLB League'};
const POSITION_LABELS={NFL:{QB:'Quarterbacks',RB:'Running backs',WR:'Wide receivers',TE:'Tight ends',OL:'Offensive line',LT:'Left tackles',RT:'Right tackles',LG:'Left guards',RG:'Right guards',C:'Centers',DL:'Defensive line',LB:'Linebackers',DB:'Defensive backs',ST:'Special teams',IDL:'Interior defensive line',DE:'Defensive ends',ILB:'Inside linebackers',EDGE:'Edge rushers',CB:'Cornerbacks',S:'Safeties'},NBA:{G:'Guards',F:'Forwards',PG:'Point guards',SG:'Shooting guards',SF:'Small forwards',PF:'Power forwards',C:'Centers'},MLB:{C:'Catchers','1B':'First basemen','2B':'Second basemen','3B':'Third basemen',SS:'Shortstops',LF:'Left fielders',CF:'Center fielders',RF:'Right fielders',DH:'Designated hitters',SP:'Starting pitchers',RP:'Relief pitchers'}};
const POSITION_SINGULAR={QB:'quarterback',RB:'running back',WR:'wide receiver',TE:'tight end',OL:'offensive lineman',LT:'left tackle',RT:'right tackle',LG:'left guard',RG:'right guard',DL:'defensive lineman',LB:'linebacker',DB:'defensive back',ST:'special teams player',IDL:'interior defensive lineman',DE:'defensive end',ILB:'inside linebacker',EDGE:'edge rusher',CB:'cornerback',S:'safety',PG:'point guard',SG:'shooting guard',SF:'small forward',PF:'power forward',G:'guard',F:'forward',C:'center'};
const leaguePoolCache=new Map();
const leagueTeam=sport=>LEAGUE_NAMES[sport];
const isLeaguePool=team=>ALL_TEAM_INFO[team]?.scope==='league';
const positionLabel=(sport,pos)=>POSITION_LABELS[sport]?.[pos]||pos;
function leaguePlayers(sport){
 const rows=sport==='MLB'?[MLB_POSITION_PLAYERS]:sport==='NFL'&&typeof NFL_POSITION_PLAYERS!=='undefined'?[NFL_POSITION_PLAYERS]:sport==='NBA'&&typeof NBA_POSITION_PLAYERS!=='undefined'?[NBA_POSITION_PLAYERS]:Object.values(sport==='NBA'?NBA_ROSTERS:ROSTERS),cached=leaguePoolCache.get(sport);
 if(cached&&cached.rows.length===rows.length&&rows.every((row,i)=>row===cached.rows[i]&&row.length===cached.lengths[i]))return cached.players;
 const players=rows.flat().sort((a,b)=>a.id<b.id?-1:a.id>b.id?1:0);
 leaguePoolCache.set(sport,{rows,lengths:rows.map(row=>row.length),players});return players;
}
function leagueVerified(sport){
 if(sport==='MLB')return MLB_POSITION_INFO.verified;
 if(sport==='NBA'&&typeof NBA_POSITION_INFO!=='undefined')return NBA_POSITION_INFO.verified;
 if(sport==='NFL'&&typeof NFL_POSITION_INFO!=='undefined')return NFL_POSITION_INFO.verified;
 const dates=Object.values(SPORTS[sport].teams).map(t=>t.verified||(sport==='NFL'?'November 5, 2026':'November 6, 2026'));
 return dates.sort((a,b)=>new Date(a)-new Date(b))[0];
}
for(const sport of Object.keys(SPORTS)){
 const colors=sport==='MLB'?{primary:'#002D72',accent:'#D50032',highlight:'#BBD4F5',ink:'#101014'}:sport==='NFL'?{primary:'#263B50',accent:'#91ADCC',highlight:'#b9d7f2',ink:'#101014'}:{primary:'#3E344E',accent:'#DFB974',highlight:'#e6d2a6',ink:'#101014'};
 ALL_TEAM_INFO[leagueTeam(sport)]={name:leagueTeam(sport),code:sport,nickname:sport,singular:'player',league:sport,scope:'league',source:'DATA-SOURCES.md',logo:'assets/league-'+sport.toLowerCase()+'.svg',colors};
}
let rankingMode='teams';
const belongsToRanking=(p,team)=>isLeaguePool(team)?!!ALL_TEAM_INFO[p.team]&&!isLeaguePool(p.team)&&leagueFor(p.team)===leagueFor(team):p.team===team;
const rankingTitle=result=>isLeaguePool(result.team)?leagueFor(result.team)+' '+positionLabel(leagueFor(result.team),result.pos):result.team;
function rememberSelection(){
 if(isLeaguePool($('team').value))write(prefixFor(activeSport)+'-league-position',$('position').value);
 else write(selectionKey(activeSport),JSON.stringify({team:$('team').value,pos:$('position').value}));
}
function packLeagueState(s,undoOnly=false){
 const indices=new Map(s.players.map((p,i)=>[p.id,i])),copy={...s,encoding:'league-indices-v1'};
 const list=items=>items?.map(p=>{const i=indices.get(p.id);if(i===undefined)throw Error('Unknown player');return i;});
 copy.stack=s.stack.map(frame=>{const f={...frame};for(const k of ['items','left','right','out'])if(Array.isArray(f[k]))f[k]=list(f[k]);return f;});
 if(s.sorted)copy.sorted=list(s.sorted);if(undoOnly){delete copy.players;copy.history=[];}return copy;
}
function unpackLeagueState(s,players=s.players){
 if(s.encoding!=='league-indices-v1')return s;
 if(!Array.isArray(players)||players.length>1000)throw Error('Invalid position ranking');
 const list=items=>items.map(i=>{if(!Number.isInteger(i)||i<0||i>=players.length)throw Error('Invalid saved player');return players[i];});
 const copy={...s,players,stack:s.stack.map(frame=>{const f={...frame};for(const k of ['items','left','right','out'])if(Array.isArray(f[k]))f[k]=list(f[k]);return f;})};
 if(s.sorted)copy.sorted=list(s.sorted);delete copy.encoding;return copy;
}
const savedStateJSON=s=>JSON.stringify(isLeaguePool(s.team)||leagueFor(s.team)==='MLB'?packLeagueState(s):s);
const parseSavedState=value=>{const s=JSON.parse(value);return s?.encoding?unpackLeagueState(s):s;};
function clearRanking(team,pos){remove(keyFor(team,pos));if(isLeaguePool(team))remove(keyFor(team,pos)+':progress');}
function selectRankingMode(mode){
 if(!['teams','positions'].includes(mode)||mode===rankingMode)return;
 clearSharedLink();save();rememberSelection();rankingMode=mode;write(prefixFor(activeSport)+'-ranking-mode',mode);populateSport();
 state=stored($('team').value,$('position').value);if(state&&!state.done)mergeNext();else render();
}
function renderPositionPicker(){
 const team=leagueTeam(activeSport),selected=$('position').value;
 if($('league-position-grid').dataset.sport!==activeSport){
  $('league-position-grid').replaceChildren(...selectablePositions(activeSport,true).map(pos=>{
   const b=document.createElement('button');b.className='team-tile position-tile';b.dataset.position=pos;const c=ALL_TEAM_INFO[team].colors;
   b.style.setProperty('--tile-primary',c.primary);b.style.setProperty('--tile-accent',c.accent);b.style.setProperty('--tile-color',c.highlight);
   const code=document.createElement('span');code.className='team-code';code.textContent=pos;
   const name=document.createElement('strong');name.textContent=positionLabel(activeSport,pos);
   const status=document.createElement('small');b.append(code,name,status);b.onclick=()=>{$('position').value=pos;selectTeam();start();};return b;
  }));$('league-position-grid').dataset.sport=activeSport;
 }
 for(const b of $('league-position-grid').children){
  b.setAttribute('aria-pressed',String(b.dataset.position===selected));let progress=null;
  if(state?.team===team&&state.pos===b.dataset.position)progress=state;else try{progress=JSON.parse(read(keyFor(team,b.dataset.position)+':progress'));}catch{}
  const count=rankingRoster(team,b.dataset.position).length;
  b.querySelector('small').textContent=count+' players · '+(progress?(progress.done?'Ranking complete':progress.comparisons+' picks saved'):'Ready to sort');
 }
}

const normalizedName = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
// Preserve the Vega Ioane fix: licensed providers may use his full given name.
const headshotAliases = new Map([[normalizedName('Vega Ioane'), normalizedName('Olaivavega Ioane')]]);
// Official team/NFL portrait URLs are stored separately so existing saved players get photos too.
let state = null;
let sharedRanking = null;
let sharedRequest = 0;
const memory = new Map();
const keyFor=(team,pos)=>isLeaguePool(team)?leagueFor(team).toLowerCase()+'-position-sorter-v1:'+pos:(leagueFor(team)==='MLB'?'mlb-sorter-v1:':leagueFor(team)==='NBA'?'nba-sorter-v1:':'nfl-sorter-v3:')+ALL_TEAM_INFO[team].code+':'+pos;
function read(key) { if(memory.has(key))return memory.get(key);try { return localStorage.getItem(key); } catch { return null; } }
function write(key, value) { memory.set(key,value); try { localStorage.setItem(key,value);return true; } catch { $('storage-note').hidden = false;return false; } }
function remove(key) { memory.set(key,null); try { localStorage.removeItem(key); } catch { $('storage-note').hidden=false; } }
const matchesPosition = (p,pos) => pos==='ALL'||(p.positions||[p.position]).includes(pos);
function valid(s, team, pos, snapshot=rosterFor(team)) {
  if (!s || s.team !== team || s.pos !== pos || !Array.isArray(s.players) || !s.players.length || !Array.isArray(s.stack) || !Number.isInteger(s.comparisons) || s.comparisons < 0) return false;
  const allowed = new Set(snapshot.filter(p => matchesPosition(p,pos)).map(p=>p.id));
  const ids = s.players.map(p=>p.id);
  const excluded=s.excluded||[];
  if(!Array.isArray(excluded)||new Set(excluded).size!==excluded.length||excluded.some(id=>!allowed.has(id))||excluded.length>=ids.length)return false;
  const omitted=new Set(excluded);
  const listOK = (items,source=false) => Array.isArray(items) && items.every(p=>p && allowed.has(p.id) && belongsToRanking(p,team)&&(source||!omitted.has(p.id)));
  if (ids.length !== allowed.size || new Set(ids).size !== ids.length || !listOK(s.players,true)) return false;
  if (s.done) return listOK(s.sorted) && s.sorted.length === ids.length-excluded.length && new Set(s.sorted.map(p=>p.id)).size===ids.length-excluded.length;
  const last=s.stack.at(-1);
  return last?.stage===2 && listOK(last.left) && listOK(last.right) && last.i<last.left.length && last.j<last.right.length && s.stack.every(f => listOK(f.items,true) && [0,1,2].includes(f.stage) && (f.stage!==2 || (listOK(f.left) && (!f.right || (listOK(f.right) && listOK(f.out) && Number.isInteger(f.i) && Number.isInteger(f.j) && f.i>=0 && f.j>=0 && f.i<=f.left.length && f.j<=f.right.length)))));
}
function earlierRoster(s){return !!s&&stampForScope(s.team,s.players)!==rankingStamp(s.team,s.pos);}
function knownSnapshot(s,team,pos){
 if(!s?.players?.length||s.players.length>(isLeaguePool(team)?1000:leagueFor(team)==='NBA'?25:100))return false;
 const originalCatalog=typeof ROSTER_KNOWN_IDS!=='undefined'?ROSTER_KNOWN_IDS[leagueFor(team)]:null;
 const extra=leagueFor(team)==='MLB'?MLB_KNOWN_IDS:leagueFor(team)==='NFL'&&typeof NFL_POSITION_KNOWN_IDS!=='undefined'?NFL_POSITION_KNOWN_IDS:{};
 const catalog=originalCatalog?Object.fromEntries(Object.keys({...originalCatalog,...extra}).map(t=>[t,[...new Set([...(originalCatalog[t]||[]),...(extra[t]||[])])]])):extra;
 const known=isLeaguePool(team)?catalog:catalog?.[team];
 const groups=SPORTS[leagueFor(team)].positions;
 return !!known&&s.players.every(p=>p&&(isLeaguePool(team)?catalog[p.team]?.includes(p.id):known.includes(p.id))&&belongsToRanking(p,team)&&typeof p.name==='string'&&p.name.length>0&&p.name.length<150&&Array.isArray(p.positions||[p.position])&&(p.positions||[p.position]).every(v=>groups.includes(v)&&v!=='ALL')&&matchesPosition(p,pos));
}
function stored(team,pos){
 try{const s=parseSavedState(read(keyFor(team,pos)));if(valid(s,team,pos)&&!earlierRoster(s))return s;
  if(knownSnapshot(s,team,pos)&&valid(s,team,pos,s.players)){s.rosterVerified=s.rosterVerified||(leagueFor(team)==='NFL'?'November 5, 2026':'November 6, 2026');return s;}
  return null;
 }catch{return null;}
}
function archiveOwnRanking(s){
 if(!s)return true;const base=keyFor(s.team,s.pos),stamp=stampForScope(s.team,s.players);
 if(!write(base+':roster-archive:'+stamp,savedStateJSON({...s,history:[]})))return false;
 let list=[];try{list=JSON.parse(read(base+':roster-archives'))||[];}catch{}
 if(!Array.isArray(list))list=[];
 const entry={stamp,verified:s.rosterVerified||(leagueFor(s.team)==='NFL'?'November 5, 2026':'November 6, 2026'),players:s.players.length,comparisons:s.comparisons,done:!!s.done};
 return write(base+':roster-archives',JSON.stringify([entry,...list.filter(row=>row.stamp!==stamp)]));
}
function useLatestRoster(){
 if(sharedRanking||!state||!earlierRoster(state))return;
 if(!archiveOwnRanking(state)){$('storage-note').textContent='Your previous ranking could not be saved. Your current ranking is unchanged.';$('storage-note').hidden=false;return;}clearRanking(state.team,state.pos);state=null;start();
}
function openPreviousRanking(){
 if(sharedRanking)return;
 const team=$('team').value,pos=$('position').value,stamp=$('roster-history').value;
 if(!/^[a-f0-9]{8}$/.test(stamp))return;
 let previous;try{previous=parseSavedState(read(keyFor(team,pos)+':roster-archive:'+stamp));}catch{return;}
 if(!knownSnapshot(previous,team,pos)||!valid(previous,team,pos,previous.players))return;
 if(!archiveOwnRanking(state))return;write(keyFor(team,pos),savedStateJSON(previous));state=stored(team,pos);
 if(state&&!state.done)mergeNext();else render();
}
function renderRosterHistory(){
 const previousOL=!!state&&isLeaguePool(state.team)&&leagueFor(state.team)==='NFL'&&state.pos==='OL';
 const previousNBA=!!state&&isLeaguePool(state.team)&&leagueFor(state.team)==='NBA'&&['G','F'].includes(state.pos);
 $('latest-roster').hidden=previousOL||previousNBA;
 const older=!sharedRanking&&earlierRoster(state);$('saved-roster-note').hidden=!older;
 if(older)$('saved-roster-message').textContent=previousNBA?'This is your previous combined '+positionLabel('NBA',state.pos).toLowerCase()+' ranking. Continue it here, or choose one of the five new positions.':previousOL?'This is your previous combined offensive-line ranking. Continue it here, or choose one of the five new line positions.':'Your saved ranking uses the '+(state.rosterVerified||'previous')+' roster. '+(state.done?'Keep this list, or rank the latest players.':'Keep going, or start with the latest players.');
 let list=[];try{list=JSON.parse(read(keyFor($('team').value,$('position').value)+':roster-archives'))||[];}catch{}
 if(!Array.isArray(list))list=[];
 const active=state?stampForScope(state.team,state.players):rankingStamp($('team').value,$('position').value);
 const available=list.filter(row=>row&&/^[a-f0-9]{8}$/.test(row.stamp)&&row.stamp!==active);
 $('previous-rankings').hidden=!!sharedRanking||!available.length;$('roster-history').replaceChildren();
 for(const row of available)$('roster-history').add(new Option(row.verified+' · '+row.players+' players'+(row.done?' · Complete':Number.isInteger(row.comparisons)?' · '+row.comparisons+' picks saved':''),row.stamp));
}
function save() { if(state){write(keyFor(state.team,state.pos),savedStateJSON(state));if(isLeaguePool(state.team))write(keyFor(state.team,state.pos)+':progress',JSON.stringify({done:state.done,comparisons:state.comparisons}));} }
function makeFallback(p, small=false) {
  const d=document.createElement('span'); d.className=small?'fallback small':'fallback';
  const n=document.createElement('span'); n.className='jersey-number'; n.textContent=p.number||'—'; d.append(n);
  if(!small){const t=document.createElement('span');t.className='jersey-team';t.textContent=ALL_TEAM_INFO[p.team].code;d.append(t);}
  return d;
}
function makePortrait(p, small=false) {
  const url=p.headshotUrl||ALL_HEADSHOTS[p.id]?.url;
  if(!url)return makeFallback(p,small);
  const img=document.createElement('img');img.alt=p.name+' headshot';img.loading=small?'lazy':'eager';img.decoding='async';img.referrerPolicy='no-referrer';
  img.onerror=()=>img.replaceWith(makeFallback(p,small));img.src=url;return img;
}
function primaryTextColor(hex) {
  const channels=hex.replace('#','').match(/../g).map(part=>{
    const value=parseInt(part,16)/255;
    return value<=.04045?value/12.92:((value+.055)/1.055)**2.4;
  });
  const luminance=.2126*channels[0]+.7152*channels[1]+.0722*channels[2];
  return luminance>.179?'#000000':'#FFFFFF';
}
function applyTheme() {
  renderTeamPicker();
  const team=$('team').value, c=ALL_TEAM_INFO[team],league=isLeaguePool(team);
  document.body.dataset.rankingMode=rankingMode;
  for(const b of $('ranking-mode').children)b.setAttribute('aria-pressed',String(b.dataset.mode===rankingMode));
  $('team-field').hidden=league;$('save-scope-note').textContent=league?'Each position saves separately':'Each team and filter saves separately';
 if(league&&activeSport==='NFL'){const pos=$('position').value,lineMinimum=typeof NFL_POSITION_INFO!=='undefined'?NFL_POSITION_INFO.offensiveLine?.minimumOffensiveSnaps?.[pos]:null,minimum=lineMinimum?lineMinimum+' offensive snaps':{QB:'50 passing attempts',RB:'25 rushes or 10 receptions',WR:'10 receptions',TE:'10 receptions',IDL:'50% defensive snaps',DE:'25% defensive snaps',ILB:'60% defensive snaps',EDGE:'40% defensive snaps',CB:'65% defensive snaps',S:'60% defensive snaps'}[pos];if(minimum)$('save-scope-note').textContent=minimum+(lineMinimum?' · Regular season':' · Notable exceptions included');}
  if(league&&activeSport==='MLB')$('save-scope-note').textContent=$('position').value==='SP'||$('position').value==='RP'?'2026 usage leaders · Injury inclusions':'Regular starters · Injury inclusions';
  if(!league&&activeSport==='MLB')$('save-scope-note').textContent=c.snapshotRound+' · '+c.baseRosterCount+' roster players'+(c.injuryAdditions?.length?' + '+c.injuryAdditions.length+' injury inclusions':'');
  if(league&&activeSport==='NBA')$('save-scope-note').textContent='Starters · Injured starters included';
  for(const [key,value] of Object.entries(c.colors))document.documentElement.style.setProperty('--'+key,value);
  document.documentElement.style.setProperty('--pick-ink',primaryTextColor(c.colors.primary));
  globalThis.SiteAppearance?.setTeamColors(c.colors);
  document.body.dataset.team=c.code;
  document.body.dataset.sport=activeSport;
  $('lede').innerHTML=league?'Choose a position. Pick your favorites across the league.<br>Your progress saves separately for each position.':'Choose your team. Pick the player you like more.<br>Build a ranking that’s entirely yours.';
  $('intro-kicker').textContent=league?'YOUR POSITION. YOUR ORDER.':'YOUR TEAM. YOUR ORDER.';
  $('save-note').textContent='Saved automatically on this browser. Switch '+(league?'positions':'teams')+' whenever you like.';
  $('first-step').innerHTML=league?'<b>01</b> Choose a position':'<b>01</b> Pick a team';
  $('league-summary').textContent=activeSport+' · '+(league?'BY POSITION':(activeSport==='MLB'?conferenceFor(team)+' ':'')+divisionFor(team).toUpperCase());
  for(const b of $('sport-picker').children)b.setAttribute('aria-pressed',String(b.dataset.sport===activeSport));
  $('eyebrow').textContent=league?activeSport+' · '+positionLabel(activeSport,$('position').value):team+' · Favorites sorter';
  $('question').textContent='Who is your favorite '+(league?(activeSport==='MLB'?({C:'catcher','1B':'first baseman','2B':'second baseman','3B':'third baseman',SS:'shortstop',LF:'left fielder',CF:'center fielder',RF:'right fielder',DH:'designated hitter',SP:'starting pitcher',RP:'relief pitcher'}[$('position').value]):POSITION_SINGULAR[$('position').value]):c.singular)+'?';
  $('results-title').textContent=league?'Your favorite '+activeSport+' '+positionLabel(activeSport,$('position').value).toLowerCase():'Your '+c.nickname+' favorites';
  $('source').href=c.source;$('source').textContent=league?'League roster sources ↗':'Official '+c.nickname+' roster ↗';
  const rosterDate=sharedRanking?.rosterVerified||(league?leagueVerified(activeSport):c.verified)||'November 5, 2026';
  $('roster-date').textContent=(league?'Oldest roster verification ':'Roster verified ')+rosterDate.replace('November ','Nov. ');
  $('roster-summary').textContent=league?`${sharedRanking?.players?.length||(state?.team===team&&state.pos===$('position').value?state.players.length:rankingRoster(team,$('position').value).length)} ${positionLabel(activeSport,$('position').value).toLowerCase()} across ${teamsFor(activeSport).length} teams · Verified ${rosterDate}`:`${sharedRanking?.players?.length||rosterFor(team).length} ${activeSport==='MLB'?'2026 snapshot and injury-inclusion':activeSport==='NBA'?'roster':'active-roster'} players · Verified ${rosterDate}`;
  $('position-count').textContent=(sharedRanking?.players||(state?.team===team&&state.pos===$('position').value?state.players:rankingRoster(team,$('position').value))).length+' players in this filter';
  if(!league)for(const b of $('team-grid').children){b.setAttribute('aria-pressed',String(b.dataset.team===team));const s=stored(b.dataset.team,$('position').value);b.querySelector('small').textContent=s?(s.done?'Ranking complete':s.comparisons+' picks saved'):'Ready to sort';}
  globalThis.RankingExtras?.sync();
}
function selectTeam() {
 clearSharedLink();save();const team=$('team').value;
 if(!ALL_TEAM_INFO[team]||leagueFor(team)!==activeSport)return;
 if(!isLeaguePool(team))write(prefixFor(activeSport)+'-last-team:'+divisionFor(team),team);
 state=stored(team,$('position').value);
 rememberSelection();
 if(state&&!state.done)mergeNext();else render();
}
function receive(items) { const p=state.stack.at(-1);if(p.stage===1)p.left=items;else if(p.stage===2){p.right=items;p.i=0;p.j=0;p.out=[];}else throw Error('Invalid merge state'); }
function finish(items) { state.sorted=items;state.done=true;save();render(); }
function mergeNext() {
  while(state.stack.length){const f=state.stack.at(-1);
    if(f.stage===0){f.items=f.items.filter(p=>!(state.excluded||[]).includes(p.id));if(f.items.length<=1){state.stack.pop();if(state.stack.length)receive(f.items);else finish(f.items);continue;}f.stage=1;state.stack.push({items:f.items.slice(0,Math.floor(f.items.length/2)),stage:0});continue;}
    if(f.stage===1){f.stage=2;state.stack.push({items:f.items.slice(Math.floor(f.items.length/2)),stage:0});continue;}
    if(f.i<f.left.length&&f.j<f.right.length){save();render();return;}
    f.out.push(...f.left.slice(f.i),...f.right.slice(f.j));state.stack.pop();if(state.stack.length)receive(f.out);else finish(f.out);
  }
}

function remainingPicks() {
  if(!state||state.done)return 0;
  const worst=n=>n<2?0:n*Math.ceil(Math.log2(n))-2**Math.ceil(Math.log2(n))+1;
  return state.stack.reduce((total,f)=>{
    const n=f.items.length;
    if(f.stage===0)return total+worst(n);
    if(f.stage===1)return total+worst(n-Math.floor(n/2))+Math.max(0,n-1);
    if(!f.right)return total+Math.max(0,n-1);
    const left=f.left.length-f.i,right=f.right.length-f.j;
    return total+(left&&right?left+right-1:0);
  },0);
}
function animateNextMatch() {
  if(!state||state.done||globalThis.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches)return;
  for(const id of ['left','right']){
    const card=$(id);
    card.getAnimations?.().forEach(a=>a.cancel());
    card.animate?.([{opacity:.6},{opacity:1}],{duration:160,easing:'ease-out'});
  }
}
function renderTopThree(result=state) {
  $('top-three').replaceChildren(...result.sorted.slice(0,3).map((p,i)=>{
    const card=document.createElement('li');card.className='podium-card';
    const photo=document.createElement('div');photo.className='podium-photo';photo.append(makePortrait(p));
    const place=document.createElement('span');place.className='podium-place';place.textContent=i===0?'YOUR #1':'#'+(i+1);
    const name=document.createElement('strong');name.className='podium-name';name.textContent=p.name;
    const meta=document.createElement('span');meta.className='podium-meta';meta.textContent=(isLeaguePool((sharedRanking||state)?.team)?ALL_TEAM_INFO[p.team].code+' · ':'')+(isLeaguePool(result?.team)&&leagueFor(result.team)==='MLB'?result.pos:(p.rosterPosition||p.position))+' · #'+p.number;
    card.append(photo,place,name,meta);return card;
  }));
}

function rememberUndo() {
 state.history=state.history||[];
 state.history.push(isLeaguePool(state.team)||leagueFor(state.team)==='MLB'?JSON.stringify(packLeagueState({...state,history:[]},true)):JSON.stringify({...state,history:[]}));
 if(state.history.length>(isLeaguePool(state.team)?40:100))state.history.shift();
}
const includedPlayers=s=>s.players.filter(p=>!(s.excluded||[]).includes(p.id));
function excludePlayer(side){
 if(sharedRanking||!state||state.done||!['left','right'].includes(side)||includedPlayers(state).length<2)return;
 const frame=state.stack.at(-1),player=side==='left'?frame.left[frame.i]:frame.right[frame.j];
 rememberUndo();state.excluded=[...(state.excluded||[]),player.id];state.lastAction='exclude';state.updatedAt=Date.now();
 // Keep each frame's original items: stage 1 still needs its original split boundary.
 for(const f of state.stack){
  for(const [list,index] of [['left','i'],['right','j']])if(Array.isArray(f[list])){
   if(Number.isInteger(f[index]))f[index]-=f[list].slice(0,f[index]).filter(p=>p.id===player.id).length;
   f[list]=f[list].filter(p=>p.id!==player.id);
  }
  if(Array.isArray(f.out))f.out=f.out.filter(p=>p.id!==player.id);
 }
 mergeNext();globalThis.RankingTools?.announce(player.name+' was excluded. Undo restores the previous step.');
}
function applyEditedRanking(ids){
 if(sharedRanking||!state?.done||!Array.isArray(ids))return false;
 const ranked=new Map(state.sorted.map(p=>[p.id,p]));
 if(ids.length!==ranked.size||new Set(ids).size!==ids.length||ids.some(id=>!ranked.has(id)))return false;
 if(ids.every((id,i)=>id===state.sorted[i].id))return true;
 rememberUndo();state.sorted=ids.map(id=>ranked.get(id));state.lastAction='edit';state.updatedAt=Date.now();save();render();return true;
}
function choose(side) { if(sharedRanking)return;
  if(!state||state.done||!['left','right'].includes(side))return;
  rememberUndo();state.lastAction='pick';state.updatedAt=Date.now();
  const f=state.stack.at(-1);f.out.push(side==='left'?f.left[f.i++]:f.right[f.j++]);state.comparisons++;mergeNext();animateNextMatch();
}
function shuffledPlayers(players) {
  const shuffled=[...players];
  for(let i=shuffled.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];}
  return shuffled;
}
function start() { if(sharedRanking)return;
  if(state)return;
  const team=$('team').value,pos=$('position').value,players=rosterFor(team).filter(p=>matchesPosition(p,pos));
  if(!players.length)return;
  state={team,pos,players,rosterVerified:(isLeaguePool(team)?leagueVerified(activeSport):ALL_TEAM_INFO[team].verified)||(activeSport==='NFL'?'November 5, 2026':'November 6, 2026'),history:[],updatedAt:Date.now(),stack:[{items:shuffledPlayers(players),stage:0}],comparisons:0,done:false,sorted:null};mergeNext();
}
function undo() { if(sharedRanking)return; if(!state?.history?.length)return;const history=state.history;state=unpackLeagueState(JSON.parse(history.pop()),state.players);state.history=history;save();render(); }
function reset() { if(sharedRanking)return; if(state&&!confirm('Clear this '+ALL_TEAM_INFO[state.team].nickname+' ranking for '+(state.pos==='ALL'?'all positions':state.pos)+'? Other rankings stay saved.'))return;clearRanking($('team').value,$('position').value);state=null;render(); }
function renderPlayer(id,p) {
  const b=$(id);b.replaceChildren();
  if(isLeaguePool(state.team)){const colors=ALL_TEAM_INFO[p.team].colors;for(const [key,value]of Object.entries(colors))b.style.setProperty('--'+key,value);b.style.setProperty('--pick-ink',primaryTextColor(colors.primary));}else for(const key of ['primary','accent','highlight','ink','pick-ink'])b.style.setProperty('--'+key,'');b.setAttribute('aria-label','Choose '+p.name+' as your favorite');
  const photo=document.createElement('div');photo.className='portrait';photo.append(makePortrait(p));
  const body=document.createElement('div');body.className='player-body';
  const meta=document.createElement('span');meta.className='player-meta';meta.textContent=(isLeaguePool(state?.team)&&leagueFor(state.team)==='MLB'?state.pos:(p.rosterPosition||p.position))+' · #'+p.number;
  const name=document.createElement('strong');name.className='player-name';name.textContent=p.name;
  const team=document.createElement('span');team.className='player-team';team.textContent=p.team;
  const pick=document.createElement('span');pick.className='pick-label';pick.textContent='Choose favorite →';
  body.append(meta,name,team,pick);b.append(photo,body);
}
function render(){renderView();globalThis.RankingTools?.sync();}
function renderView() {
  const result=sharedRanking||state;
  renderRosterHistory();
  document.body.dataset.view=!result?'intro':result.done?'results':'sorting';
  applyTheme();$('intro').hidden=!!result;$('sort').hidden=!result||!!result.done;$('results').hidden=!result?.done;
  $('reset').disabled=!!sharedRanking||!state;
  $('start').hidden=!!sharedRanking||!!state;$('start').disabled=!rankingRoster($('team').value,$('position').value).length;
  $('link-status').textContent='';$('ranking-link').hidden=true;
  $('results-description').textContent=sharedRanking?'A shared list of favorites, from top to bottom.':'Your personal favorites, from top to bottom.';
  $('shared-notice').hidden=!sharedRanking;$('undo-result').hidden=!!sharedRanking;$('again').hidden=!!sharedRanking;
  $('rank-yours').textContent=state?.done?'View your ranking':'Rank these players';
  if(sharedRanking)$('results-title').textContent=isLeaguePool(result.team)?'Shared '+rankingTitle(result)+' favorites':'Shared '+ALL_TEAM_INFO[result.team].nickname+' favorites';
  globalThis.ResultsExport?.setResults(result?.done?{team:result.team,pos:result.pos,players:result.sorted}:null);
  if(!result)return;
  if(result.done){
    renderTopThree(result);
    $('rankings').replaceChildren(...result.sorted.map((p,i)=>{
      const d=document.createElement('li');d.className='rank';
      const number=document.createElement('span');number.className='rank-num';number.textContent=String(i+1).padStart(2,'0');
      const thumb=document.createElement('span');thumb.className='rank-thumb';thumb.append(makePortrait(p,true));
      const text=document.createElement('span');text.className='rank-text';const name=document.createElement('strong');name.textContent=p.name;const meta=document.createElement('small');meta.textContent=(isLeaguePool(result.team)&&leagueFor(result.team)==='MLB'?result.pos:(p.rosterPosition||p.position))+' · #'+p.number;text.append(name,meta);d.append(number,thumb,text);return d;
    }));$('undo-result').disabled=!result.history?.length;return;
  }
  const f=state.stack.at(-1);if(!f||!f.right||f.i>=f.left.length||f.j>=f.right.length)return;
  renderPlayer('left',f.left[f.i]);renderPlayer('right',f.right[f.j]);
  const remaining=remainingPicks();
  const percent=Math.min(99,Math.floor(100*state.comparisons/Math.max(1,state.comparisons+remaining)));
  $('progress').textContent=`${state.comparisons} picks made · ${includedPlayers(state).length} players · At least ${percent}% complete`;
  $('progress-estimate').textContent=percent+'%';
  $('progress-milestone').textContent=percent<35?'Finding your favorites':percent<75?'Your ranking is taking shape':'The final stretch';
  $('progressbar').style.width=percent+'%';$('progress-track').setAttribute('aria-valuenow',percent);
  $('progress-track').setAttribute('aria-valuetext','At least '+percent+'% complete.');
  $('undo').disabled=!result.history?.length;
}
const divisionFor=team=>ALL_TEAM_INFO[team].division||'AFC North';
const conferenceFor=team=>ALL_TEAM_INFO[team].conference||divisionFor(team).split(' ')[0];
const conferenceKey=conference=>prefixFor(activeSport)+'-last-conference-team:'+conference;
function teamButton(team,info) {
 const b=document.createElement('button');b.className='team-tile';b.dataset.team=team;
 b.style.setProperty('--tile-color',info.colors.highlight);
 b.style.setProperty('--tile-primary',info.colors.primary);
 b.style.setProperty('--tile-accent',info.colors.accent);
 const code=document.createElement('span');code.className='team-code';code.textContent=info.code;
 const name=document.createElement('strong');name.textContent=info.nickname;
 const status=document.createElement('small');b.append(code,name,status);
 b.onclick=()=>{$('team').value=team;selectTeam();};return b;
}

function renderTeamPicker(){
 const league=rankingMode==='positions';$('conference-picker').hidden=league;$('division-row').hidden=league;$('team-grid').hidden=league;$('league-position-grid').hidden=!league||!!(sharedRanking||state);
 if(league){renderPositionPicker();return;}
 const team=$('team').value,division=divisionFor(team),conference=conferenceFor(team),teams=teamsFor(activeSport);
 if(read(conferenceKey(conference))!==team)write(conferenceKey(conference),team);
 if($('division-picker').dataset.conference!==conference||$('division-picker').dataset.sport!==activeSport){
  const divisions=[...new Set(teams.filter(t=>conferenceFor(t)===conference).map(divisionFor))];
  $('division-picker').replaceChildren(...divisions.map(division=>{const b=document.createElement('button');b.className='division-button';b.dataset.division=division;b.textContent=division;b.onclick=()=>selectDivision(division);return b;}));
  $('division-picker').dataset.conference=conference;$('division-picker').dataset.sport=activeSport;
 }
 for(const b of $('conference-picker').children)b.setAttribute('aria-pressed',String(b.dataset.conference===conference));
 if($('team-grid').dataset.division!==division||$('team-grid').dataset.sport!==activeSport){
  $('team-grid').replaceChildren(...teams.filter(t=>divisionFor(t)===division).map(t=>teamButton(t,ALL_TEAM_INFO[t])));
  $('team-grid').dataset.division=division;$('team-grid').dataset.sport=activeSport;
 }
 for(const b of $('division-picker').children)b.setAttribute('aria-pressed',String(b.dataset.division===division));
 $('division-summary').textContent=(activeSport!=='NFL'?conference+' · ':'')+division+' · '+$('team-grid').children.length+' teams';
 $('team-grid').setAttribute('aria-label',division+' teams');
}
function selectConference(conference){
 const teams=teamsFor(activeSport).filter(team=>conferenceFor(team)===conference);if(!teams.length)return;
 const previous=read(conferenceKey(conference));$('team').value=teams.includes(previous)?previous:teams[0];selectTeam();
}
function selectDivision(division){
 write(prefixFor(activeSport)+'-last-team:'+divisionFor($('team').value),$('team').value);
 const teams=teamsFor(activeSport).filter(team=>divisionFor(team)===division);if(!teams.length)return;
 const previous=read(prefixFor(activeSport)+'-last-team:'+division);
 $('team').value=teams.includes(previous)?previous:teams[0];selectTeam();
}
function populateSport(){
 const league=rankingMode==='positions',teams=league?[leagueTeam(activeSport)]:teamsFor(activeSport),allowed=[...selectablePositions(activeSport,league)];
 if(league&&activeSport==='NFL'&&stored(leagueTeam('NFL'),'OL'))allowed.push('OL');
 if(league&&activeSport==='NBA')for(const pos of ['G','F'])if(stored(leagueTeam('NBA'),pos))allowed.push(pos);
 let selection=null;try{selection=JSON.parse(read(selectionKey(activeSport)));}catch{}
 $('team').replaceChildren();for(const team of teams)$('team').add(new Option(team,team));
 $('position').replaceChildren();for(const pos of allowed){
  const label=league?(pos==='OL'&&activeSport==='NFL'?'Previous OL ranking':activeSport==='NBA'&&['G','F'].includes(pos)?'Previous '+positionLabel('NBA',pos).toLowerCase()+' ranking':positionLabel(activeSport,pos)):pos==='ALL'?'All positions':activeSport==='MLB'?positionLabel(activeSport,pos):activeSport==='NBA'?{G:'Guards',F:'Forwards',C:'Centers'}[pos]:pos;
  $('position').add(new Option(label,pos));
 }
 $('team').value=teams.includes(selection?.team)?selection.team:teams[0];
 const selected=league?read(prefixFor(activeSport)+'-league-position'):selection?.pos;
 $('position').value=allowed.includes(selected)?selected:allowed[0];
 $('conference-picker').replaceChildren(...[...new Set(teams.map(conferenceFor))].map(conference=>{
  const b=document.createElement('button');b.className='conference-button';b.dataset.conference=conference;b.textContent=conference;b.onclick=()=>selectConference(conference);return b;
 }));
}
function selectSport(sport){
 if(!SPORTS[sport]||sport===activeSport)return;
 clearSharedLink();save();rememberSelection();
 activeSport=sport;write('fan-favorites-sport',sport);rankingMode=read(prefixFor(sport)+'-ranking-mode')==='positions'?'positions':'teams';populateSport();
 state=stored($('team').value,$('position').value);if(state&&!state.done)mergeNext();else render();
}
for(const sport of Object.keys(SPORTS)){
 const b=document.createElement('button');b.className='sport-button';b.dataset.sport=sport;b.textContent=sport;b.onclick=()=>selectSport(sport);$('sport-picker').append(b);
}
if(SPORTS[read('fan-favorites-sport')])activeSport=read('fan-favorites-sport');
rankingMode=read(prefixFor(activeSport)+'-ranking-mode')==='positions'?'positions':'teams';
for(const [mode,label]of [['teams','By team'],['positions','By position']]){const b=document.createElement('button');b.className='mode-button';b.dataset.mode=mode;b.textContent=label;b.onclick=()=>selectRankingMode(mode);$('ranking-mode').append(b);}
populateSport();
// Preserve the existing one-time Ravens migration and every NFL storage key.
try{
 const old=JSON.parse(read('nfl-sorter-ravens-v2'));
 if(!read('nfl-sorter-legacy-migrated')&&(valid(old,'Baltimore Ravens',old?.pos)||(knownSnapshot(old,'Baltimore Ravens',old?.pos)&&valid(old,'Baltimore Ravens',old?.pos,old.players)))){
  if(!read(keyFor(old.team,old.pos)))write(keyFor(old.team,old.pos),JSON.stringify(old));
  if(!read('nfl-sorter-selection')){
   write('nfl-sorter-selection',JSON.stringify({team:old.team,pos:old.pos}));
   if(activeSport==='NFL'&&rankingMode==='teams'){$('team').value=old.team;$('position').value=old.pos;}
  }
  write('nfl-sorter-legacy-migrated','true');
 }
}catch{}
state=stored($('team').value,$('position').value);
$('team').onchange=selectTeam;$('position').onchange=selectTeam;$('start').onclick=start;$('reset').onclick=reset;
$('left').onclick=()=>choose('left');$('right').onclick=()=>choose('right');$('undo').onclick=undo;$('undo-result').onclick=undo;
$('share-ranking').onclick=()=>{
  $('export-heading').focus({preventScroll:true});
  $('export-panel').scrollIntoView({behavior:globalThis.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches?'instant':'smooth',block:'start'});
};
$('again').onclick=()=>{reset();if(!state)start();};
$('copy').onclick=async()=>{const result=sharedRanking||state;if(!result?.done)return;const s=`My ${rankingTitle(result)} favorites (${result.pos})\n`+result.sorted.map((p,i)=>`${i+1}. ${p.name} (${p.position})`).join('\n');try{await navigator.clipboard.writeText(s);$('copy-status').textContent='Rankings copied.';}catch{$('copy-text').value=s;$('copy-text').hidden=false;$('copy-text').focus();$('copy-text').select();$('copy-status').textContent='Select and copy the rankings below.';}};
document.addEventListener('keydown',e=>{if(document.querySelector('dialog[open]')||e.target.closest?.('input,select,textarea')||e.altKey)return;if(!sharedRanking&&(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){if(state?.history?.length){e.preventDefault();undo();}return;}if(sharedRanking||!state||state.done||e.ctrlKey||e.metaKey)return;if(e.key==='ArrowLeft'){e.preventDefault();choose('left');}if(e.key==='ArrowRight'){e.preventDefault();choose('right');}});

function rankingRoster(team,pos){return rosterFor(team).filter(p=>matchesPosition(p,pos));}
function rankingStamp(team,pos){return stampForScope(team,rankingRoster(team,pos));}
function stampForScope(team,players){return isLeaguePool(team)?stampLeaguePlayers(players):stampForPlayers(players);}
function stampLeaguePlayers(players){const value=JSON.stringify(players.map(p=>[p.id,p.name,p.number,p.position,p.rosterPosition,p.positions||[],p.team]));let hash=2166136261;for(let i=0;i<value.length;i++){hash^=value.charCodeAt(i);hash=Math.imul(hash,16777619);}return (hash>>>0).toString(16).padStart(8,'0');}
function stampForPlayers(players){
 const value=JSON.stringify(players.map(p=>[p.id,p.name,p.number,p.position,p.rosterPosition,p.positions||[]]));
 let hash=2166136261;for(let i=0;i<value.length;i++){hash^=value.charCodeAt(i);hash=Math.imul(hash,16777619);}
 return (hash>>>0).toString(16).padStart(8,'0');
}
function encodePartialRankingLink(result){
 const sport=leagueFor(result.team),roster=result.players,order=result.sorted;
 if(!Array.isArray(roster)||!roster.length||roster.length>1000||!order?.length||order.length>roster.length)throw Error('This ranking cannot be shared.');
 const indices=new Map(roster.map((p,i)=>[p.id,i])),bytes=[];
 for(const p of order){const i=indices.get(p.id);if(i===undefined||roster[i].name!==p.name||roster[i].team!==p.team)throw Error('Invalid ranked player');bytes.push(i>>>8,i&255);}
 if(new Set(order.map(p=>p.id)).size!==order.length)throw Error('Duplicate ranked player');
 const encoded=btoa(String.fromCharCode(...bytes)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
 return 'https://markfmyerss.github.io/#ranking='+['v3',sport,isLeaguePool(result.team)?sport:ALL_TEAM_INFO[result.team].code,result.pos,stampForScope(result.team,roster),encoded].join('.');
}
function encodePositionLink(result){
 if(result.excluded?.length)return encodePartialRankingLink(result);
 const sport=leagueFor(result.team),roster=result.players||rankingRoster(result.team,result.pos);
 if(!roster.length||roster.length>1000||result.pos==='ALL'||result.sorted.length!==roster.length)throw Error('This position ranking cannot be shared.');
 const indices=new Map(roster.map((p,i)=>[p.id,i])),bytes=[];
 for(const p of result.sorted){const i=indices.get(p.id);if(i===undefined||roster[i].name!==p.name||roster[i].team!==p.team)throw Error('This ranking cannot be shared.');bytes.push(i>>>8,i&255);}
 if(new Set(result.sorted.map(p=>p.id)).size!==roster.length)throw Error('Duplicate ranked player');
 const encoded=btoa(String.fromCharCode(...bytes)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
 return 'https://markfmyerss.github.io/?v=ol-roles-v1#ranking='+['v2',sport,sport,result.pos,stampForScope(result.team,roster),encoded].join('.');
}
function encodeRankingLink(result){
 if(isLeaguePool(result.team))return encodePositionLink(result);
 if(result.excluded?.length)return encodePartialRankingLink(result);
 const sport=leagueFor(result.team),roster=result.players||rankingRoster(result.team,result.pos);
 if(!roster.length||roster.length>255||result.sorted.length!==roster.length)throw Error('This ranking cannot be shared as a link.');
 const order=result.sorted.map(p=>{const i=roster.findIndex(r=>r.id===p.id&&r.name===p.name);if(i<0)throw Error('This ranking uses an older roster. Save an image or start a fresh ranking to share a link.');return i;});
 if(new Set(order).size!==roster.length)throw Error('This ranking cannot be shared as a link.');
 const encoded=btoa(String.fromCharCode(...order)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
 return 'https://markfmyerss.github.io/#ranking='+['v1',sport,ALL_TEAM_INFO[result.team].code,result.pos,stampForPlayers(roster),encoded].join('.');
}
function decodeRankingLink(hash,snapshot=null){
 if(!hash.startsWith('#ranking='))return null;
 const invalid=()=>{throw Error('This ranking link is incomplete or invalid. Your saved rankings are unchanged.');};
 if(hash.length>8192)invalid();
 const parts=hash.slice(9).split('.');if(parts.length!==6)invalid();
 const [version,sport,code,pos,stamp,encoded]=parts;
 if(!['v1','v2','v3'].includes(version)||!Object.prototype.hasOwnProperty.call(SPORTS,sport)||!SPORTS[sport].positions.includes(pos)||! /^[a-f0-9]{8}$/.test(stamp)||! /^[A-Za-z0-9_-]+$/.test(encoded))invalid();
 const partial=version==='v3',wide=version!=='v1',league=version==='v2'||(partial&&code===sport);if(league&&(code!==sport||pos==='ALL'))invalid();
 const team=league?leagueTeam(sport):teamsFor(sport).find(t=>ALL_TEAM_INFO[t].code===code);if(!team)invalid();
 const roster=snapshot?snapshot.players.filter(p=>matchesPosition(p,pos)):rankingRoster(team,pos);
 if(stamp!==stampForScope(team,roster)){const e=Error('This link uses a different roster snapshot. Loading its saved roster will preserve the original ranking.');e.archiveKey=[sport,code,pos,stamp].join('.');throw e;}
 let binary;try{const base=encoded.replace(/-/g,'+').replace(/_/g,'/');binary=atob(base.padEnd(Math.ceil(base.length/4)*4,'='));}catch{invalid();}
 if(btoa(binary).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')!==encoded)invalid();
 const bytes=Array.from(binary,c=>c.charCodeAt(0));if(wide&&bytes.length%2)invalid();
 const order=wide?Array.from({length:bytes.length/2},(_,i)=>(bytes[i*2]<<8)|bytes[i*2+1]):bytes;
 if(roster.length>(wide?1000:255)||!order.length||(partial?order.length>roster.length:order.length!==roster.length)||new Set(order).size!==order.length||order.some(i=>i>=roster.length))invalid();
 const players=snapshot?roster.map(p=>({...p,headshotUrl:snapshot.headshots?.[p.id]?.url||null})):roster;
 return {team,pos,players,...(partial?{excluded:players.filter((p,i)=>!order.includes(i)).map(p=>p.id)}:{}),sorted:order.map(i=>players[i]),done:true,rosterVerified:snapshot?.verified||(league?leagueVerified(sport):ALL_TEAM_INFO[team].verified)||(sport==='NFL'?'November 5, 2026':'November 6, 2026')};
}
function clearSharedLink(){
 sharedRequest++;sharedRanking=null;
 if(globalThis.location?.hash.startsWith('#ranking='))globalThis.history?.replaceState(null,'',location.pathname+location.search);
 $('shared-status').hidden=true;
}
function viewOwnRanking(){
 clearSharedLink();write('fan-favorites-sport',activeSport);write(prefixFor(activeSport)+'-ranking-mode',rankingMode);rememberSelection();state=stored($('team').value,$('position').value);
 if(state&&!state.done)mergeNext();else render();
}
async function fetchRosterSnapshot(key){
 const response=await fetch('assets/roster-snapshots/index.json',{cache:'no-cache'});if(!response.ok)throw Error('Saved roster index unavailable');
 const index=await response.json(),entry=index.snapshots?.[key];
 if(!entry||!/^assets\/roster-snapshots\/(?:NFL|NBA|MLB)\/[A-Z0-9]{2,4}\/[a-f0-9]{8}\.json$/.test(entry.path))throw Error('Saved roster unavailable');
 const result=await fetch(entry.path);if(!result.ok)throw Error('Saved roster unavailable');const snapshot=await result.json();
 const [sport,code,pos,stamp]=key.split('.'),league=code===sport,team=league?leagueTeam(sport):teamsFor(sport).find(t=>ALL_TEAM_INFO[t].code===code);
 if(snapshot.version!==(league?2:1)||(league&&snapshot.scope!=='league')||snapshot.sport!==sport||snapshot.code!==code||snapshot.team!==team||!Array.isArray(snapshot.players)||!snapshot.players.length||snapshot.players.length>(league?1000:100)||new Set(snapshot.players.map(p=>p.id)).size!==snapshot.players.length)throw Error('Saved roster validation failed');
 if(snapshot.players.some(p=>!belongsToRanking(p,team)||typeof p.id!=='string'||typeof p.name!=='string'||!p.name||p.name.length>150||!(p.positions||[p.position]).every(v=>SPORTS[sport].positions.includes(v)&&v!=='ALL')))throw Error('Saved roster players invalid');
 if(stampForScope(team,snapshot.players.filter(p=>matchesPosition(p,pos)))!==stamp)throw Error('Saved roster version mismatch');
 for(const p of snapshot.players){const url=snapshot.headshots?.[p.id]?.url;if(url&&!/^https:\/\/|^assets\//.test(url))throw Error('Saved portrait source invalid');}
 snapshot.verified=entry.verified||snapshot.verified;return snapshot;
}
async function openSharedRanking(){
 const ticket=++sharedRequest,hash=globalThis.location?.hash||'';let incoming;
 try{incoming=decodeRankingLink(hash);}
 catch(e){
  if(e.archiveKey){
   $('shared-status').textContent='Opening the original roster…';$('shared-status').hidden=false;
   try{const snapshot=await fetchRosterSnapshot(e.archiveKey);if(ticket!==sharedRequest||globalThis.location?.hash!==hash)return;incoming=decodeRankingLink(hash,snapshot);}
   catch{if(ticket!==sharedRequest)return;sharedRanking=null;$('shared-status').textContent='This saved roster could not be loaded. Your rankings are unchanged. Please try again later.';$('shared-status').hidden=false;if(state&&!state.done)mergeNext();else render();return;}
  }else{sharedRanking=null;$('shared-status').textContent=e.message;$('shared-status').hidden=false;if(state&&!state.done)mergeNext();else render();return;}
 }
 if(ticket!==sharedRequest)return;
 if(!incoming){if(sharedRanking)viewOwnRanking();return;}
 save();sharedRanking=incoming;activeSport=leagueFor(incoming.team);rankingMode=isLeaguePool(incoming.team)?'positions':'teams';populateSport();
 $('team').value=incoming.team;if(!Array.from($('position').children).some(o=>o.value===incoming.pos)){const historical=new Option(positionLabel(activeSport,incoming.pos)+' · Previous category',incoming.pos);historical.hidden=true;$('position').add(historical);}$('position').value=incoming.pos;state=stored(incoming.team,incoming.pos);
 $('shared-status').hidden=true;render();
}
async function shareRankingLink(){
 const result=sharedRanking||state;if(!result?.done)return;
 let url;try{url=encodeRankingLink(result);}catch(e){$('link-status').textContent=e.message;return;}
 $('ranking-link').hidden=true;$('link-status').textContent='';
 if(navigator.share){
  try{await navigator.share({title:(sharedRanking?'Shared ':'My ')+rankingTitle(result)+' favorites',text:'See this '+rankingTitle(result)+' favorites ranking.',url});return;}
  catch(e){if(e.name==='AbortError')return;}
 }
 try{await navigator.clipboard.writeText(url);$('link-status').textContent='Ranking link copied. Send it to a friend.';}
 catch{$('ranking-link').value=url;$('ranking-link').hidden=false;$('ranking-link').focus();$('ranking-link').select();$('link-status').textContent='Copy the link below to share this exact ranking.';}
}

$('latest-roster').onclick=useLatestRoster;$('open-previous-ranking').onclick=openPreviousRanking;
$('share-link').onclick=shareRankingLink;$('rank-yours').onclick=viewOwnRanking;
globalThis.addEventListener?.('hashchange',openSharedRanking);
if(state&&!state.done)mergeNext();else render();
openSharedRanking();
