(() => {
 'use strict';
 const el=id=>document.getElementById(id),favKey='fan-favorites-pinned-teams-v1',dialog=el('roster-dialog');
 const teams=Object.keys(ALL_TEAM_INFO).filter(t=>!isLeaguePool(t)),key=t=>leagueFor(t)+':'+ALL_TEAM_INFO[t].code,byKey=new Map(teams.map(t=>[key(t),t]));
 let opener=null,request=0,reportPromise=null,favoriteSignature='',searchSignature='';
 const node=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;};
 const normalized=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const favorites=()=>{try{const x=JSON.parse(read(favKey));return Array.isArray(x)?[...new Set(x.filter(k=>typeof k==='string'&&byKey.has(k)))]:[];}catch{return [];}};
 function toggle(k){const old=favorites(),next=old.includes(k)?old.filter(v=>v!==k):[...old,k];write(favKey,JSON.stringify(next));favoriteSignature='';searchSignature='';sync();}
 function openTeam(team){const sport=leagueFor(team);if(activeSport!==sport)selectSport(sport);selectRankingMode('teams');el('team').value=team;selectTeam();el('team-quick-search').value='';searchSignature='';search();if(!el('start').hidden)el('start').focus({preventScroll:true});else el('position').focus({preventScroll:true});}
 function teamButton(team){const b=node('button',leagueFor(team)+' · '+ALL_TEAM_INFO[team].nickname,'quick-team-open');b.type='button';b.setAttribute('aria-label','Open '+team);b.onclick=()=>openTeam(team);return b;}
 function renderFavorites(){
  const pinned=favorites(),selected=el('team').value,signature=JSON.stringify([pinned,selected]);const pin=el('pin-current-team');pin.hidden=isLeaguePool(selected);if(!pin.hidden){const active=pinned.includes(key(selected));pin.textContent=active?'★ Favorited':'☆ Favorite team';pin.setAttribute('aria-pressed',String(active));pin.setAttribute('aria-label',(active?'Unfavorite ':'Favorite ')+selected);}
  if(signature===favoriteSignature)return;favoriteSignature=signature;const box=el('favorite-team-list');box.replaceChildren();box.hidden=!pinned.length;
  for(const k of pinned){const team=byKey.get(k),item=node('div',undefined,'favorite-team-chip'),open=teamButton(team);open.setAttribute('aria-pressed',String(team===selected));const remove=node('button','×','quick-team-remove');remove.type='button';remove.setAttribute('aria-label','Unfavorite '+team);remove.onclick=()=>toggle(k);item.style.setProperty('--favorite-color',ALL_TEAM_INFO[team].colors.primary);item.append(open,remove);box.append(item);}
 }
 function matches(){const words=normalized(el('team-quick-search').value).trim().split(/\s+/).filter(Boolean);if(!words.length)return [];return teams.filter(t=>{const info=ALL_TEAM_INFO[t],text=normalized([t,info.nickname,info.code,leagueFor(t),conferenceFor(t),divisionFor(t)].join(' '));return words.every(w=>text.includes(w));}).sort((a,b)=>(leagueFor(b)===activeSport)-(leagueFor(a)===activeSport)||a.localeCompare(b));}
 function search(){
  const value=el('team-quick-search').value.trim(),pinned=favorites(),signature=JSON.stringify([value,pinned,activeSport]);if(signature===searchSignature)return;searchSignature=signature;const box=el('team-search-results');box.replaceChildren();box.hidden=!value;if(!value)return;
  const list=matches(),caption=node('p',list.length?(list.length>12?'Showing 12 of '+list.length+' teams. Keep typing to narrow the list.':list.length+' '+(list.length===1?'team':'teams')+' found.'):'No teams found. Try a city, nickname or team code.','quick-search-status');caption.setAttribute('role','status');box.append(caption);const ul=node('ul',undefined,'quick-team-results');
  for(const team of list.slice(0,12)){const li=node('li'),open=teamButton(team),fav=node('button',pinned.includes(key(team))?'★':'☆','quick-result-favorite');fav.type='button';fav.setAttribute('aria-label',(pinned.includes(key(team))?'Unfavorite ':'Favorite ')+team);fav.setAttribute('aria-pressed',String(pinned.includes(key(team))));fav.onclick=()=>{toggle(key(team));el('team-quick-search').focus();};li.append(open,fav);ul.append(li);}box.append(ul);
 }
 const context=()=>{const team=el('team').value,pos=el('position').value,selected=sharedRanking||(state?.team===team&&state.pos===pos?state:null);return {team,pos,sport:leagueFor(team),league:isLeaguePool(team),players:selected?.players||rankingRoster(team,pos),verified:selected?.rosterVerified||(isLeaguePool(team)?leagueVerified(leagueFor(team)):ALL_TEAM_INFO[team].verified),saved:!!selected};};
 const scopeTitle=c=>c.league?c.sport+' '+positionLabel(c.sport,c.pos):c.team+(c.pos==='ALL'?'':' · '+c.pos);
 function open(title,button){request++;opener=button;el('roster-dialog-title').textContent=title;el('roster-dialog-content').replaceChildren();if(!dialog.open)dialog.showModal();document.body.classList.add('has-roster-dialog');return request;}
 function close(){if(dialog.open)dialog.close();}
 dialog.addEventListener('keydown',e=>e.stopPropagation());
 dialog.addEventListener('close',()=>{if(dialog.open)return;request++;document.body.classList.remove('has-roster-dialog');const active=document.activeElement;if(active===document.body||dialog.contains(active))opener?.focus?.({preventScroll:true});});
 el('roster-dialog-close').onclick=close;
 function injuryLabel(p,c){
  if(c.sport==='NFL')return /injur|pup|physically/i.test(p.rosterStatus||'')?'Injury inclusion':'';
  if(typeof NBA_POSITION_INFO==='undefined')return '';const role=NBA_POSITION_INFO.roles?.find(r=>r.id===p.id),review=NBA_POSITION_INFO.teamReviews?.find(t=>t.team===p.team),injury=review?.injured?.find(a=>a.id===role?.espnId);return injury?'Injury listing: '+injury.status:'';
 }
 function preview(){
  const c=context(),players=[...c.players].sort((a,b)=>a.name.localeCompare(b.name));open(scopeTitle(c)+' · Players',el('preview-player-pool'));
  const body=el('roster-dialog-content'),intro=node('p',(c.saved?'Players in this ranking':'Current player pool')+' · Verified '+c.verified+'. Alphabetical order.','dialog-note'),label=node('label','Find a player','pool-search-label'),input=node('input');input.type='search';input.id='pool-player-search';input.placeholder='Search name, team or position';input.autocomplete='off';label.append(input);const count=node('p',undefined,'dialog-note'),list=node('ul',undefined,'pool-player-list');count.setAttribute('role','status');body.append(intro,label,count,list);
  const draw=()=>{const query=normalized(input.value),shown=players.filter(p=>normalized([p.name,p.team,p.position,p.rosterPosition,p.number].join(' ')).includes(query));count.textContent=shown.length+' of '+players.length+' players';list.replaceChildren();if(!shown.length){list.append(node('li','No players match that search.','pool-empty'));return;}
   for(const p of shown){const row=node('li',undefined,'pool-player-row'),photo=node('span',undefined,'pool-player-photo');photo.append(makePortrait(p,true));const identity=node('span',undefined,'pool-player-identity');identity.append(node('strong',p.name),node('small',p.team));const details=node('span',(p.rosterPosition||p.position)+(p.number?' · #'+p.number:''),'pool-player-details'),injury=injuryLabel(p,c);if(injury)details.append(node('small',injury,'pool-injury'));row.append(photo,identity,details);list.append(row);}
  };input.oninput=draw;draw();input.focus({preventScroll:true});
 }
 function reports(){if(!reportPromise)reportPromise=fetch(new URL('assets/roster-changes.json',document.baseURI),{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error('Change summary unavailable');return r.json();}).then(d=>{if(d.version!==1||!d.reports)throw Error('Invalid change summary');return d.reports;}).catch(e=>{reportPromise=null;throw e;});return reportPromise;}
 function reportSection(body,title,rows,kind){
  const section=node('section',undefined,'roster-change-section');section.append(node('h3',title+' ('+rows.length+')'));if(!rows.length){section.append(node('p','None.','dialog-note'));body.append(section);return;}
  const list=node('ul',undefined,'roster-change-list');for(const item of rows){const p=kind==='updated'?item.player:item,row=node('li');row.append(node('strong',p.name));let detail=p.team+' · '+(p.rosterPosition||p.position);
   if(kind==='updated'){const labels={name:'Name',team:'Team',number:'Jersey',rosterPosition:'Position',positions:'Position'};detail=Object.entries(item.fields).map(([k,v])=>(labels[k]||k)+': '+v.from+' → '+v.to).join(' · ');}
   else if(kind==='removed'&&item.nowPositions?.length)detail+=' · Now '+item.nowPositions.join('/');row.append(node('small',detail));list.append(row);}section.append(list);body.append(section);
 }
 async function changes(event){
  event?.preventDefault();const c=context(),ticket=open(scopeTitle(c)+' · '+(c.league?'Pool changes':'Roster changes'),el('roster-changes-link')),body=el('roster-dialog-content');body.append(node('p','Loading roster changes…','dialog-note'));
  try{const data=await reports();if(ticket!==request||!dialog.open)return;body.replaceChildren();const report=data[[c.sport,ALL_TEAM_INFO[c.team].code,c.pos].join('.')];if(!report){body.append(node('p','This category uses an archived roster. Weekly changes are tracked for the current categories.','dialog-note'));return;}
   body.append(node('p','Latest verified '+(c.league?'player pool':c.sport==='NFL'?'active roster':'team roster')+' · '+report.verified,'dialog-note'));
   if(!c.league&&c.sport==='NFL')body.append(node('p','This tracks the active roster. Players moving to injury or reserve lists can appear under Removed.','dialog-note'));
   if(c.saved&&c.verified!==report.verified)body.append(node('p','Your saved ranking is kept as it was. This summary describes the latest verified players.','dialog-note'));
   if(report.baselineOnly){body.append(node('p','Change tracking starts with this verified roster. The next successful weekly update will be compared here.','roster-change-empty'));}
   else{body.append(node('p','Compared with '+report.fromVerified+' · '+report.totalBefore+' → '+report.totalAfter+' players.','dialog-note'));if(c.league)body.append(node('p','Pool changes can reflect team moves, starting roles or eligibility updates.','dialog-note'));if(!report.added.length&&!report.removed.length&&!report.updated.length)body.append(node('p','No player changes since the previous verification.','roster-change-empty'));reportSection(body,c.league?'Added to this pool':'Added',report.added,'added');reportSection(body,c.league?'Removed from this pool':'Removed',report.removed,'removed');reportSection(body,'Details updated',report.updated,'updated');}
   const source=node('a','Roster sources ↗','dialog-source');source.href=/^https:\/\//.test(report.source)?report.source:'DATA-SOURCES.md';source.target='_blank';source.rel='noopener noreferrer';body.append(source);
  }catch{if(ticket!==request||!dialog.open)return;body.replaceChildren(node('p','Roster changes could not be loaded. Your ranking is unchanged.','dialog-note'));const retry=node('button','Try again','secondary');retry.type='button';retry.onclick=()=>changes();body.append(retry);}
 }
 function sync(){renderFavorites();search();const c=context();el('preview-player-pool').disabled=!c.players.length;el('preview-player-pool').setAttribute('aria-label','Preview players for '+scopeTitle(c));el('roster-changes-link').setAttribute('aria-label','View roster changes for '+scopeTitle(c));}
 el('pin-current-team').onclick=()=>{const t=el('team').value;if(!isLeaguePool(t))toggle(key(t));};
 el('team-quick-search').oninput=search;
 el('team-quick-search').addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();e.target.value='';searchSignature='';search();}else if(e.key==='ArrowDown'){el('team-search-results').querySelector('button')?.focus();e.preventDefault();}else if(e.key==='Enter'){const found=matches();if(found.length===1){e.preventDefault();openTeam(found[0]);}}});
 el('quick-team-navigation').addEventListener('keydown',e=>e.stopPropagation());
 el('preview-player-pool').onclick=preview;el('roster-changes-link').onclick=changes;
 globalThis.RankingExtras={sync};sync();
})();