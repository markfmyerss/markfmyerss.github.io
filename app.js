'use strict';
const $ = id => document.getElementById(id);
const positions = ['ALL','QB','RB','WR','TE','OL','DL','LB','DB','ST'];

const nbaReady=typeof NBA_TEAM_INFO!=='undefined';
const ALL_TEAM_INFO={...TEAM_INFO,...(nbaReady?NBA_TEAM_INFO:{})};
const ALL_HEADSHOTS={...HEADSHOTS,...(nbaReady?NBA_HEADSHOTS:{})};
const SPORTS={NFL:{teams:TEAM_INFO,positions},...(nbaReady?{NBA:{teams:NBA_TEAM_INFO,positions:['ALL','G','F','C']}}:{})};
let activeSport='NFL';
const leagueFor=team=>ALL_TEAM_INFO[team]?.league||'NFL';
const rosterFor=team=>leagueFor(team)==='NBA'?NBA_ROSTERS[team]:ROSTERS[team];
const teamsFor=sport=>Object.keys(SPORTS[sport].teams);
const prefixFor=sport=>sport==='NBA'?'nba-sorter':'nfl-sorter';
const selectionKey=sport=>prefixFor(sport)+'-selection';

const normalizedName = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
// Preserve the Vega Ioane fix: licensed providers may use his full given name.
const headshotAliases = new Map([[normalizedName('Vega Ioane'), normalizedName('Olaivavega Ioane')]]);
// Official team/NFL portrait URLs are stored separately so existing saved players get photos too.
let state = null;
let sharedRanking = null;
const memory = new Map();
const keyFor=(team,pos)=>(leagueFor(team)==='NBA'?'nba-sorter-v1:':'nfl-sorter-v3:')+ALL_TEAM_INFO[team].code+':'+pos;
function read(key) { if(memory.has(key))return memory.get(key);try { return localStorage.getItem(key); } catch { return null; } }
function write(key, value) { memory.set(key,value); try { localStorage.setItem(key,value); } catch { $('storage-note').hidden = false; } }
function remove(key) { memory.set(key,null); try { localStorage.removeItem(key); } catch { $('storage-note').hidden=false; } }
const matchesPosition = (p,pos) => pos==='ALL'||(p.positions||[p.position]).includes(pos);
function valid(s, team, pos) {
  if (!s || s.team !== team || s.pos !== pos || !Array.isArray(s.players) || !s.players.length || !Array.isArray(s.stack) || !Number.isInteger(s.comparisons) || s.comparisons < 0) return false;
  const allowed = new Set(rosterFor(team).filter(p => matchesPosition(p,pos)).map(p=>p.id));
  const ids = s.players.map(p=>p.id);
  const listOK = items => Array.isArray(items) && items.every(p=>p && allowed.has(p.id) && p.team===team);
  if (ids.length !== allowed.size || new Set(ids).size !== ids.length || !listOK(s.players)) return false;
  if (s.done) return listOK(s.sorted) && s.sorted.length === ids.length && new Set(s.sorted.map(p=>p.id)).size===ids.length;
  const last=s.stack.at(-1);
  return last?.stage===2 && listOK(last.left) && listOK(last.right) && last.i<last.left.length && last.j<last.right.length && s.stack.every(f => listOK(f.items) && [0,1,2].includes(f.stage) && (f.stage!==2 || (listOK(f.left) && (!f.right || (listOK(f.right) && listOK(f.out) && Number.isInteger(f.i) && Number.isInteger(f.j) && f.i>=0 && f.j>=0 && f.i<=f.left.length && f.j<=f.right.length)))));
}
function stored(team, pos) { try { const s=JSON.parse(read(keyFor(team,pos))); return valid(s,team,pos)?s:null; } catch { return null; } }
function save() { if (state) write(keyFor(state.team,state.pos),JSON.stringify(state)); }
function makeFallback(p, small=false) {
  const d=document.createElement('span'); d.className=small?'fallback small':'fallback';
  const n=document.createElement('span'); n.className='jersey-number'; n.textContent=p.number||'—'; d.append(n);
  if(!small){const t=document.createElement('span');t.className='jersey-team';t.textContent=ALL_TEAM_INFO[p.team].code;d.append(t);}
  return d;
}
function makePortrait(p, small=false) {
  const url=ALL_HEADSHOTS[p.id]?.url;
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
  const team=$('team').value, c=ALL_TEAM_INFO[team];
  for(const [key,value] of Object.entries(c.colors))document.documentElement.style.setProperty('--'+key,value);
  document.documentElement.style.setProperty('--pick-ink',primaryTextColor(c.colors.primary));
  globalThis.SiteAppearance?.setTeamColors(c.colors);
  document.body.dataset.team=c.code;
  document.body.dataset.sport=activeSport;
  $('league-summary').textContent=activeSport+' · '+divisionFor(team).toUpperCase();
  for(const b of $('sport-picker').children)b.setAttribute('aria-pressed',String(b.dataset.sport===activeSport));
  $('eyebrow').textContent=team+' · Favorites sorter';
  $('question').textContent='Who is your favorite '+c.singular+'?';
  $('results-title').textContent='Your '+c.nickname+' favorites';
  $('source').href=c.source;$('source').textContent='Official '+c.nickname+' roster ↗';
  $('roster-date').textContent='Roster verified '+(c.verified||'November 5, 2026').replace('November ','Nov. ');
  $('roster-summary').textContent=`${rosterFor(team).length} ${activeSport==='NBA'?'roster':'active-roster'} players · Verified ${c.verified||'November 5, 2026'}`;
  $('position-count').textContent=rosterFor(team).filter(p=>matchesPosition(p,$('position').value)).length+' players in this filter';
  for(const b of $('team-grid').children){b.setAttribute('aria-pressed',String(b.dataset.team===team));const s=stored(b.dataset.team,$('position').value);b.querySelector('small').textContent=s?(s.done?'Ranking complete':s.comparisons+' picks saved'):'Ready to sort';}
}
function selectTeam() {
 clearSharedLink();save();const team=$('team').value;
 if(!ALL_TEAM_INFO[team]||leagueFor(team)!==activeSport)return;
 write(prefixFor(activeSport)+'-last-team:'+divisionFor(team),team);
 state=stored(team,$('position').value);
 write(selectionKey(activeSport),JSON.stringify({team,pos:$('position').value}));
 if(state&&!state.done)mergeNext();else render();
}
function receive(items) { const p=state.stack.at(-1);if(p.stage===1)p.left=items;else if(p.stage===2){p.right=items;p.i=0;p.j=0;p.out=[];}else throw Error('Invalid merge state'); }
function finish(items) { state.sorted=items;state.done=true;save();render(); }
function mergeNext() {
  while(state.stack.length){const f=state.stack.at(-1);
    if(f.stage===0){if(f.items.length<=1){state.stack.pop();if(state.stack.length)receive(f.items);else finish(f.items);continue;}f.stage=1;state.stack.push({items:f.items.slice(0,Math.floor(f.items.length/2)),stage:0});continue;}
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
    const meta=document.createElement('span');meta.className='podium-meta';meta.textContent=(p.rosterPosition||p.position)+' · #'+p.number;
    card.append(photo,place,name,meta);return card;
  }));
}

function choose(side) { if(sharedRanking)return;
  if(!state||state.done||!['left','right'].includes(side))return;
  state.history=state.history||[];state.history.push(JSON.stringify({...state,history:[]}));if(state.history.length>100)state.history.shift();
  const f=state.stack.at(-1);f.out.push(side==='left'?f.left[f.i++]:f.right[f.j++]);state.comparisons++;mergeNext();animateNextMatch();
}
function start() { if(sharedRanking)return;
  if(state)return;
  const team=$('team').value,pos=$('position').value,players=rosterFor(team).filter(p=>matchesPosition(p,pos));
  if(!players.length)return;
  state={team,pos,players,history:[],stack:[{items:players,stage:0}],comparisons:0,done:false,sorted:null};mergeNext();
}
function undo() { if(sharedRanking)return; if(!state?.history?.length)return;const history=state.history;state=JSON.parse(history.pop());state.history=history;save();render(); }
function reset() { if(sharedRanking)return; if(state&&!confirm('Clear this '+ALL_TEAM_INFO[state.team].nickname+' ranking for '+(state.pos==='ALL'?'all positions':state.pos)+'? Other rankings stay saved.'))return;remove(keyFor($('team').value,$('position').value));state=null;render(); }
function renderPlayer(id,p) {
  const b=$(id);b.replaceChildren();b.setAttribute('aria-label','Choose '+p.name+' as your favorite');
  const photo=document.createElement('div');photo.className='portrait';photo.append(makePortrait(p));
  const body=document.createElement('div');body.className='player-body';
  const meta=document.createElement('span');meta.className='player-meta';meta.textContent=(p.rosterPosition||p.position)+' · #'+p.number;
  const name=document.createElement('strong');name.className='player-name';name.textContent=p.name;
  const team=document.createElement('span');team.className='player-team';team.textContent=p.team;
  const pick=document.createElement('span');pick.className='pick-label';pick.textContent='Choose favorite →';
  body.append(meta,name,team,pick);b.append(photo,body);
}
function render() {
  const result=sharedRanking||state;
  document.body.dataset.view=!result?'intro':result.done?'results':'sorting';
  applyTheme();$('intro').hidden=!!result;$('sort').hidden=!result||!!result.done;$('results').hidden=!result?.done;
  $('reset').disabled=!!sharedRanking||!state;
  $('start').hidden=!!sharedRanking||!!state;
  $('link-status').textContent='';$('ranking-link').hidden=true;
  $('results-description').textContent=sharedRanking?'A shared list of favorites, from top to bottom.':'Your personal favorites, from top to bottom.';
  $('shared-notice').hidden=!sharedRanking;$('undo-result').hidden=!!sharedRanking;$('again').hidden=!!sharedRanking;
  $('rank-yours').textContent=state?.done?'View your ranking':'Rank these players';
  if(sharedRanking)$('results-title').textContent='Shared '+ALL_TEAM_INFO[result.team].nickname+' favorites';
  globalThis.ResultsExport?.setResults(result?.done?{team:result.team,pos:result.pos,players:result.sorted}:null);
  if(!result)return;
  if(result.done){
    renderTopThree(result);
    $('rankings').replaceChildren(...result.sorted.map((p,i)=>{
      const d=document.createElement('li');d.className='rank';
      const number=document.createElement('span');number.className='rank-num';number.textContent=String(i+1).padStart(2,'0');
      const thumb=document.createElement('span');thumb.className='rank-thumb';thumb.append(makePortrait(p,true));
      const text=document.createElement('span');text.className='rank-text';const name=document.createElement('strong');name.textContent=p.name;const meta=document.createElement('small');meta.textContent=(p.rosterPosition||p.position)+' · #'+p.number;text.append(name,meta);d.append(number,thumb,text);return d;
    }));$('undo-result').disabled=!result.history?.length;return;
  }
  const f=state.stack.at(-1);if(!f||!f.right||f.i>=f.left.length||f.j>=f.right.length)return;
  renderPlayer('left',f.left[f.i]);renderPlayer('right',f.right[f.j]);
  const remaining=remainingPicks();
  const percent=Math.min(99,Math.floor(100*state.comparisons/Math.max(1,state.comparisons+remaining)));
  $('progress').textContent=`${state.comparisons} picks made · ${state.players.length} players · At least ${percent}% complete`;
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
 $('division-summary').textContent=(activeSport==='NBA'?conference+' · ':'')+division+' · '+$('team-grid').children.length+' teams';
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
 const teams=teamsFor(activeSport),allowed=SPORTS[activeSport].positions;
 let selection=null;try{selection=JSON.parse(read(selectionKey(activeSport)));}catch{}
 $('team').replaceChildren();for(const team of teams)$('team').add(new Option(team,team));
 $('position').replaceChildren();for(const pos of allowed){
  const label=pos==='ALL'?'All positions':activeSport==='NBA'?{G:'Guards',F:'Forwards',C:'Centers'}[pos]:pos;
  $('position').add(new Option(label,pos));
 }
 $('team').value=teams.includes(selection?.team)?selection.team:teams[0];
 $('position').value=allowed.includes(selection?.pos)?selection.pos:'ALL';
 $('conference-picker').replaceChildren(...[...new Set(teams.map(conferenceFor))].map(conference=>{
  const b=document.createElement('button');b.className='conference-button';b.dataset.conference=conference;b.textContent=conference;b.onclick=()=>selectConference(conference);return b;
 }));
}
function selectSport(sport){
 if(!SPORTS[sport]||sport===activeSport)return;
 clearSharedLink();save();write(selectionKey(activeSport),JSON.stringify({team:$('team').value,pos:$('position').value}));
 activeSport=sport;write('fan-favorites-sport',sport);populateSport();
 state=stored($('team').value,$('position').value);if(state&&!state.done)mergeNext();else render();
}
for(const sport of Object.keys(SPORTS)){
 const b=document.createElement('button');b.className='sport-button';b.dataset.sport=sport;b.textContent=sport;b.onclick=()=>selectSport(sport);$('sport-picker').append(b);
}
if(SPORTS[read('fan-favorites-sport')])activeSport=read('fan-favorites-sport');
populateSport();
// Preserve the existing one-time Ravens migration and every NFL storage key.
try{
 const old=JSON.parse(read('nfl-sorter-ravens-v2'));
 if(!read('nfl-sorter-legacy-migrated')&&valid(old,'Baltimore Ravens',old?.pos)){
  if(!read(keyFor(old.team,old.pos)))write(keyFor(old.team,old.pos),JSON.stringify(old));
  if(!read('nfl-sorter-selection')){
   write('nfl-sorter-selection',JSON.stringify({team:old.team,pos:old.pos}));
   if(activeSport==='NFL'){$('team').value=old.team;$('position').value=old.pos;}
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
$('copy').onclick=async()=>{const result=sharedRanking||state;if(!result?.done)return;const s=`My ${result.team} favorites (${result.pos})\n`+result.sorted.map((p,i)=>`${i+1}. ${p.name} (${p.position})`).join('\n');try{await navigator.clipboard.writeText(s);$('copy-status').textContent='Rankings copied.';}catch{$('copy-text').value=s;$('copy-text').hidden=false;$('copy-text').focus();$('copy-text').select();$('copy-status').textContent='Select and copy the rankings below.';}};
document.addEventListener('keydown',e=>{if(e.target.closest?.('input,select,textarea')||e.altKey)return;if(!sharedRanking&&(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){if(state?.history?.length){e.preventDefault();undo();}return;}if(sharedRanking||!state||state.done||e.ctrlKey||e.metaKey)return;if(e.key==='ArrowLeft'){e.preventDefault();choose('left');}if(e.key==='ArrowRight'){e.preventDefault();choose('right');}});

function rankingRoster(team,pos){return rosterFor(team).filter(p=>matchesPosition(p,pos));}
function rankingStamp(team,pos){
 const value=JSON.stringify(rankingRoster(team,pos).map(p=>[p.id,p.name,p.number,p.position,p.rosterPosition,p.positions||[]]));
 let hash=2166136261;for(let i=0;i<value.length;i++){hash^=value.charCodeAt(i);hash=Math.imul(hash,16777619);}
 return (hash>>>0).toString(16).padStart(8,'0');
}
function encodeRankingLink(result){
 const sport=leagueFor(result.team),roster=rankingRoster(result.team,result.pos);
 if(!roster.length||roster.length>255||result.sorted.length!==roster.length)throw Error('This ranking cannot be shared as a link.');
 const order=result.sorted.map(p=>{const i=roster.findIndex(r=>r.id===p.id&&r.name===p.name);if(i<0)throw Error('This ranking uses an older roster. Save an image or start a fresh ranking to share a link.');return i;});
 if(new Set(order).size!==roster.length)throw Error('This ranking cannot be shared as a link.');
 const encoded=btoa(String.fromCharCode(...order)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
 return 'https://markfmyerss.github.io/#ranking='+['v1',sport,ALL_TEAM_INFO[result.team].code,result.pos,rankingStamp(result.team,result.pos),encoded].join('.');
}
function decodeRankingLink(hash){
 if(!hash.startsWith('#ranking='))return null;
 const invalid=()=>{throw Error('This ranking link is incomplete or invalid. Your saved rankings are unchanged.');};
 if(hash.length>1024)invalid();
 const parts=hash.slice(9).split('.');if(parts.length!==6)invalid();
 const [version,sport,code,pos,stamp,encoded]=parts;
 if(version!=='v1'||!Object.prototype.hasOwnProperty.call(SPORTS,sport)||!SPORTS[sport].positions.includes(pos)||! /^[a-f0-9]{8}$/.test(stamp)||! /^[A-Za-z0-9_-]+$/.test(encoded))invalid();
 const team=teamsFor(sport).find(t=>ALL_TEAM_INFO[t].code===code);if(!team)invalid();
 if(stamp!==rankingStamp(team,pos))throw Error('This link uses a different roster snapshot. Your saved rankings are unchanged. Ask the sender for an image or a fresh link.');
 let binary;try{const base=encoded.replace(/-/g,'+').replace(/_/g,'/');binary=atob(base.padEnd(Math.ceil(base.length/4)*4,'='));}catch{invalid();}
 if(btoa(binary).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')!==encoded)invalid();
 const roster=rankingRoster(team,pos),order=Array.from(binary,c=>c.charCodeAt(0));
 if(order.length!==roster.length||new Set(order).size!==roster.length||order.some(i=>i>=roster.length))invalid();
 return {team,pos,players:roster,sorted:order.map(i=>roster[i]),done:true};
}
function clearSharedLink(){
 sharedRanking=null;
 if(globalThis.location?.hash.startsWith('#ranking='))globalThis.history?.replaceState(null,'',location.pathname+location.search);
 $('shared-status').hidden=true;
}
function viewOwnRanking(){
 clearSharedLink();write('fan-favorites-sport',activeSport);write(selectionKey(activeSport),JSON.stringify({team:$('team').value,pos:$('position').value}));state=stored($('team').value,$('position').value);
 if(state&&!state.done)mergeNext();else render();
}
function openSharedRanking(){
 let incoming;
 try{incoming=decodeRankingLink(globalThis.location?.hash||'');}
 catch(e){sharedRanking=null;$('shared-status').textContent=e.message;$('shared-status').hidden=false;if(state&&!state.done)mergeNext();else render();return;}
 if(!incoming){if(sharedRanking)viewOwnRanking();return;}
 save();sharedRanking=incoming;activeSport=leagueFor(incoming.team);populateSport();
 $('team').value=incoming.team;$('position').value=incoming.pos;state=stored(incoming.team,incoming.pos);
 $('shared-status').hidden=true;render();
}
async function shareRankingLink(){
 const result=sharedRanking||state;if(!result?.done)return;
 let url;try{url=encodeRankingLink(result);}catch(e){$('link-status').textContent=e.message;return;}
 $('ranking-link').hidden=true;$('link-status').textContent='';
 if(navigator.share){
  try{await navigator.share({title:'My '+result.team+' favorites',text:'See my '+result.team+' favorites ranking.',url});return;}
  catch(e){if(e.name==='AbortError')return;}
 }
 try{await navigator.clipboard.writeText(url);$('link-status').textContent='Ranking link copied. Send it to a friend.';}
 catch{$('ranking-link').value=url;$('ranking-link').hidden=false;$('ranking-link').focus();$('ranking-link').select();$('link-status').textContent='Copy the link below to share this exact ranking.';}
}

$('share-link').onclick=shareRankingLink;$('rank-yours').onclick=viewOwnRanking;
globalThis.addEventListener?.('hashchange',openSharedRanking);
if(state&&!state.done)mergeNext();else render();
openSharedRanking();
