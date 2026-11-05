'use strict';
const $ = id => document.getElementById(id);
const positions = ['ALL','QB','RB','WR','TE','OL','DL','LB','DB','ST'];
const normalizedName = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
// Preserve the Vega Ioane fix: licensed providers may use his full given name.
const headshotAliases = new Map([[normalizedName('Vega Ioane'), normalizedName('Olaivavega Ioane')]]);
// Official team/NFL portrait URLs are stored separately so existing saved players get photos too.
let state = null;
const memory = new Map();
const keyFor = (team, pos) => `nfl-sorter-v3:${TEAM_INFO[team].code}:${pos}`;
function read(key) { if(memory.has(key))return memory.get(key);try { return localStorage.getItem(key); } catch { return null; } }
function write(key, value) { memory.set(key,value); try { localStorage.setItem(key,value); } catch { $('storage-note').hidden = false; } }
function remove(key) { memory.set(key,null); try { localStorage.removeItem(key); } catch { $('storage-note').hidden=false; } }
function valid(s, team, pos) {
  if (!s || s.team !== team || s.pos !== pos || !Array.isArray(s.players) || !s.players.length || !Array.isArray(s.stack) || !Number.isInteger(s.comparisons) || s.comparisons < 0) return false;
  const allowed = new Set(ROSTERS[team].filter(p => pos === 'ALL' || p.position === pos).map(p=>p.id));
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
  if(!small){const t=document.createElement('span');t.className='jersey-team';t.textContent=TEAM_INFO[p.team].code;d.append(t);}
  return d;
}
function makePortrait(p, small=false) {
  const url=HEADSHOTS[p.id]?.url;
  if(!url)return makeFallback(p,small);
  const img=document.createElement('img');img.alt=p.name+' headshot';img.loading=small?'lazy':'eager';img.decoding='async';img.referrerPolicy='no-referrer';
  img.onerror=()=>img.replaceWith(makeFallback(p,small));img.src=url;return img;
}
function applyTheme() {
  renderTeamPicker();
  const team=$('team').value, c=TEAM_INFO[team];
  for(const [key,value] of Object.entries(c.colors))document.documentElement.style.setProperty('--'+key,value);
  document.body.dataset.team=c.code;
  $('eyebrow').textContent=team+' · Favorites sorter';
  $('question').textContent='Who is your favorite '+c.singular+'?';
  $('results-title').textContent='Your '+c.nickname+' favorites';
  $('source').href=c.source;$('source').textContent='Official '+c.nickname+' roster ↗';
  $('roster-summary').textContent=`${ROSTERS[team].length} active-roster players · Verified November 5, 2026`;
  $('position-count').textContent=ROSTERS[team].filter(p=>$('position').value==='ALL'||p.position===$('position').value).length+' players in this filter';
  for(const b of $('team-grid').children){b.setAttribute('aria-pressed',String(b.dataset.team===team));const s=stored(b.dataset.team,$('position').value);b.querySelector('small').textContent=s?(s.done?'Ranking complete':s.comparisons+' picks saved'):'Ready to sort';}
}
function selectTeam() { save(); write('nfl-sorter-last-team:'+divisionFor($('team').value),$('team').value); state=stored($('team').value,$('position').value);write('nfl-sorter-selection',JSON.stringify({team:$('team').value,pos:$('position').value}));if(state&&!state.done)mergeNext();else render(); }
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
function choose(side) {
  if(!state||state.done||!['left','right'].includes(side))return;
  state.history=state.history||[];state.history.push(JSON.stringify({...state,history:[]}));if(state.history.length>100)state.history.shift();
  const f=state.stack.at(-1);f.out.push(side==='left'?f.left[f.i++]:f.right[f.j++]);state.comparisons++;mergeNext();
}
function start() {
  if(state)return;
  const team=$('team').value,pos=$('position').value,players=ROSTERS[team].filter(p=>pos==='ALL'||p.position===pos);
  if(!players.length)return;
  state={team,pos,players,history:[],stack:[{items:players,stage:0}],comparisons:0,done:false,sorted:null};mergeNext();
}
function undo() { if(!state?.history?.length)return;const history=state.history;state=JSON.parse(history.pop());state.history=history;save();render(); }
function reset() { if(state&&!confirm('Clear this '+TEAM_INFO[state.team].nickname+' ranking for '+(state.pos==='ALL'?'all positions':state.pos)+'? Other rankings stay saved.'))return;remove(keyFor($('team').value,$('position').value));state=null;render(); }
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
  applyTheme();$('intro').hidden=!!state;$('sort').hidden=!state||!!state.done;$('results').hidden=!state?.done;
  $('start').hidden=!!state;$('reset').disabled=!state;
  if(!state)return;
  if(state.done){
    $('rankings').replaceChildren(...state.sorted.map((p,i)=>{
      const d=document.createElement('li');d.className='rank';
      const number=document.createElement('span');number.className='rank-num';number.textContent=String(i+1).padStart(2,'0');
      const thumb=document.createElement('span');thumb.className='rank-thumb';thumb.append(makePortrait(p,true));
      const text=document.createElement('span');text.className='rank-text';const name=document.createElement('strong');name.textContent=p.name;const meta=document.createElement('small');meta.textContent=(p.rosterPosition||p.position)+' · #'+p.number;text.append(name,meta);d.append(number,thumb,text);return d;
    }));$('undo-result').disabled=!state.history?.length;return;
  }
  const f=state.stack.at(-1);if(!f||!f.right||f.i>=f.left.length||f.j>=f.right.length)return;
  renderPlayer('left',f.left[f.i]);renderPlayer('right',f.right[f.j]);
  const n=state.players.length, max=n*Math.ceil(Math.log2(n))-2**Math.ceil(Math.log2(n))+1;
  const percent=Math.min(99,Math.round(100*state.comparisons/Math.max(1,max)));
  $('progress').textContent=`${state.comparisons} picks made · ${n} players · Up to ${Math.max(0,max-state.comparisons)} picks remaining`;
  $('progressbar').style.width=percent+'%';$('progress-track').setAttribute('aria-valuenow',percent);$('undo').disabled=!state.history?.length;
}
const divisionFor = team => TEAM_INFO[team].division || 'AFC North';
function teamButton(team,info) {
 const b=document.createElement('button');b.className='team-tile';b.dataset.team=team;
 b.style.setProperty('--tile-color',info.colors.highlight);
 const code=document.createElement('span');code.className='team-code';code.textContent=info.code;
 const name=document.createElement('strong');name.textContent=info.nickname;
 const status=document.createElement('small');b.append(code,name,status);
 b.onclick=()=>{$('team').value=team;selectTeam();};return b;
}
function renderTeamPicker() {
 const division=divisionFor($('team').value);
 if($('team-grid').dataset.division!==division){
  $('team-grid').replaceChildren(...Object.entries(TEAM_INFO).filter(([team])=>divisionFor(team)===division).map(([team,info])=>teamButton(team,info)));
  $('team-grid').dataset.division=division;
 }
 for(const b of $('division-picker').children)b.setAttribute('aria-pressed',String(b.dataset.division===division));
 $('division-summary').textContent=division+' · '+$('team-grid').children.length+' teams';
 $('team-grid').setAttribute('aria-label',division+' teams');
}
function selectDivision(division) {
 write('nfl-sorter-last-team:'+divisionFor($('team').value),$('team').value);
 const teams=Object.keys(TEAM_INFO).filter(team=>divisionFor(team)===division);
 if(!teams.length)return;
 const previous=read('nfl-sorter-last-team:'+division);
 $('team').value=teams.includes(previous)?previous:teams[0];selectTeam();
}
for(const team of Object.keys(TEAM_INFO))$('team').add(new Option(team,team));
for(const division of ['AFC North','AFC East']){const b=document.createElement('button');b.className='division-button';b.dataset.division=division;b.textContent=division;b.onclick=()=>selectDivision(division);$('division-picker').append(b);}
for(const pos of positions)$('position').add(new Option(pos==='ALL'?'All positions':pos,pos));
$('team').value='Baltimore Ravens';
try{const selection=JSON.parse(read('nfl-sorter-selection'));if(TEAM_INFO[selection?.team])$('team').value=selection.team;if(positions.includes(selection?.pos))$('position').value=selection.pos;}catch{}
// One-time, non-destructive migration of existing Ravens rankings.
try{const old=JSON.parse(read('nfl-sorter-ravens-v2'));if(!read('nfl-sorter-legacy-migrated')&&valid(old,'Baltimore Ravens',old?.pos)){if(!read(keyFor(old.team,old.pos)))write(keyFor(old.team,old.pos),JSON.stringify(old));if(!read('nfl-sorter-selection'))$('position').value=old.pos;write('nfl-sorter-legacy-migrated','true');write('nfl-sorter-selection',JSON.stringify({team:$('team').value,pos:$('position').value}));}}catch{}
state=stored($('team').value,$('position').value);
$('team').onchange=selectTeam;$('position').onchange=selectTeam;$('start').onclick=start;$('reset').onclick=reset;
$('left').onclick=()=>choose('left');$('right').onclick=()=>choose('right');$('undo').onclick=undo;$('undo-result').onclick=undo;
$('again').onclick=()=>{reset();if(!state)start();};
$('copy').onclick=async()=>{if(!state?.done)return;const s=`My ${state.team} favorites (${state.pos})\n`+state.sorted.map((p,i)=>`${i+1}. ${p.name} (${p.position})`).join('\n');try{await navigator.clipboard.writeText(s);$('copy-status').textContent='Rankings copied.';}catch{$('copy-text').value=s;$('copy-text').hidden=false;$('copy-text').focus();$('copy-text').select();$('copy-status').textContent='Select and copy the rankings below.';}};
document.addEventListener('keydown',e=>{if(e.target.closest?.('input,select,textarea')||e.altKey)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){if(state?.history?.length){e.preventDefault();undo();}return;}if(!state||state.done||e.ctrlKey||e.metaKey)return;if(e.key==='ArrowLeft'){e.preventDefault();choose('left');}if(e.key==='ArrowRight'){e.preventDefault();choose('right');}});
if(state&&!state.done)mergeNext();else render();
