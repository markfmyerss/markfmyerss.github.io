(() => {
 'use strict';
 const el=id=>document.getElementById(id),dialog=el('ranking-tools-dialog'),content=el('ranking-tools-content'),footer=el('ranking-tools-footer');
 const node=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;};
 let opener=null,draft=null,editingState=null,dragged=null,lastScope='';
 const button=(text,fn,cls='secondary')=>{const b=node('button',text,cls);b.type='button';b.onclick=fn;return b;};
 function announce(text){el('ranking-tools-status').textContent=text;}
 function close(){if(dialog.open)dialog.close();}
 function open(title,source){
  opener=source;draft=null;editingState=null;dragged=null;content.replaceChildren();footer.replaceChildren();footer.hidden=true;
  el('ranking-tools-title').textContent=title;if(!dialog.open)dialog.showModal();document.body.classList.add('has-ranking-dialog');
 }
 dialog.addEventListener('keydown',e=>e.stopPropagation());
 dialog.addEventListener('close',()=>{
  if(dialog.open)return;draft=null;editingState=null;dragged=null;document.body.classList.remove('has-ranking-dialog');
  const active=document.activeElement;if(active===document.body||dialog.contains(active))opener?.focus({preventScroll:true});
 });
 el('ranking-tools-close').onclick=close;
 function entries(){
  const rows=[];
  for(const sport of Object.keys(SPORTS))for(const team of [...teamsFor(sport),leagueTeam(sport)])for(const pos of SPORTS[sport].positions){
   const saved=stored(team,pos);if(!saved)continue;
   rows.push({team,pos,sport,saved,title:isLeaguePool(team)?sport+' · '+positionLabel(sport,pos):team,subtitle:isLeaguePool(team)?'By position':pos==='ALL'?'All positions':positionLabel(sport,pos)});
  }
  return rows.sort((a,b)=>(b.saved.updatedAt||0)-(a.saved.updatedAt||0)||a.title.localeCompare(b.title)||a.pos.localeCompare(b.pos));
 }
 function openSaved(team,pos){
  save();clearSharedLink();activeSport=leagueFor(team);rankingMode=isLeaguePool(team)?'positions':'teams';
  write('fan-favorites-sport',activeSport);write(prefixFor(activeSport)+'-ranking-mode',rankingMode);populateSport();el('team').value=team;
  if(![...el('position').options].some(o=>o.value===pos))el('position').add(new Option(positionLabel(activeSport,pos)+' · Previous category',pos));
  el('position').value=pos;rememberSelection();state=stored(team,pos);close();if(state&&!state.done)mergeNext();else render();
  const heading=el(state?.done?'results-title':state?'question':'intro');heading.tabIndex=-1;heading.focus({preventScroll:true});el('sport-picker').scrollIntoView({block:'start',behavior:'instant'});
 }
 function dashboard(){
  open('My Rankings',el('my-rankings'));const rows=entries();
  content.append(node('p','Your saved rankings on this browser, across both sports.','dialog-note'));
  if(!rows.length){content.append(node('p','Your rankings will appear here after you start sorting.','rankings-empty'));const start=button('Choose players →',close);content.append(start);return;}
  const filters=node('div',undefined,'dashboard-filters'),sportLabel=node('label','Sport'),sport=node('select'),statusLabel=node('label','Status'),status=node('select'),searchLabel=node('label','Find a ranking','dashboard-search'),search=node('input');
  sport.id='dashboard-sport';for(const value of ['All sports','NFL','NBA'])sport.add(new Option(value,value));
  status.id='dashboard-status';for(const [value,label]of [['all','All rankings'],['progress','In progress'],['done','Complete']])status.add(new Option(label,value));
  search.id='dashboard-search';search.type='search';search.placeholder='Team or position';search.autocomplete='off';sportLabel.append(sport);statusLabel.append(status);searchLabel.append(search);filters.append(sportLabel,statusLabel,searchLabel);
  const count=node('p',undefined,'dialog-note'),list=node('ul',undefined,'saved-ranking-list');count.setAttribute('role','status');content.append(filters,count,list);
  const draw=()=>{
   const query=normalizedName(search.value),shown=rows.filter(r=>(sport.value==='All sports'||r.sport===sport.value)&&(status.value==='all'||(status.value==='done')===!!r.saved.done)&&normalizedName(r.title+' '+r.subtitle+' '+r.sport+' '+r.pos).includes(query));
   count.textContent=shown.length+' '+(shown.length===1?'ranking':'rankings');list.replaceChildren();
   if(!shown.length){list.append(node('li','No saved rankings match these filters.','rankings-empty'));return;}
   for(const row of shown){
    const li=node('li',undefined,'saved-ranking'),image=node('img');image.src=ALL_TEAM_INFO[row.team].logo;image.alt='';image.loading='lazy';image.onerror=()=>image.hidden=true;
    const info=node('div',undefined,'saved-ranking-info');info.append(node('strong',row.title),node('span',row.sport+' · '+row.subtitle),node('small',(row.saved.done?'Complete':'In progress · '+row.saved.comparisons+' picks made')+' · '+includedPlayers(row.saved).length+' players'+(row.saved.excluded?.length?' · '+row.saved.excluded.length+' excluded':'')));
    const openButton=button(row.saved.done?'View results →':'Resume →',()=>openSaved(row.team,row.pos),'saved-ranking-open');openButton.setAttribute('aria-label',(row.saved.done?'View ':'Resume ')+row.title+' '+row.subtitle);
    li.append(image,info,openButton);list.append(li);
   }
  };
  sport.onchange=status.onchange=search.oninput=draw;draw();
 }
 function excluded(){
  const result=sharedRanking||state;if(!result?.excluded?.length)return;
  open('Excluded players',el('view-excluded'));content.append(node('p','These players are left out of this ranking and its shared results. Undo can restore a recent exclusion; resetting includes everyone again.','dialog-note'));
  const list=node('ul',undefined,'excluded-player-list');for(const p of result.players.filter(p=>result.excluded.includes(p.id))){const li=node('li');li.append(node('strong',p.name),node('small',p.team+' · '+(p.rosterPosition||p.position)));list.append(li);}content.append(list);
 }
 function editor(){
  if(sharedRanking||!state?.done)return;
  open('Edit ranking',el('edit-ranking'));editingState=state;draft=state.sorted.map(p=>p.id);const players=new Map(state.sorted.map(p=>[p.id,p]));
  content.append(node('p','Use the arrows, enter a rank and tap Move, or drag a row. Your saved ranking changes only when you tap Save changes.','dialog-note'));
  const status=node('p',undefined,'editor-status');status.setAttribute('role','status');const list=node('ol',undefined,'ranking-editor-list');content.append(status,list);
  const cancel=button('Cancel',close),saveButton=button('Save changes',()=>{
   if(state!==editingState||sharedRanking||!state?.done){status.textContent='This ranking changed. Close and reopen the editor.';return;}
   const ids=[...draft];if(!applyEditedRanking(ids)){status.textContent='These changes could not be saved.';return;}
   close();announce('Ranking updated. New shares and images will use this order.');el('results-title').tabIndex=-1;el('results-title').focus({preventScroll:true});
  },'save-ranking-edits');saveButton.id='save-ranking-edits';cancel.id='cancel-ranking-edits';footer.append(cancel,saveButton);footer.hidden=false;
  function move(id,target,focus){
   const from=draft.indexOf(id);if(!Number.isInteger(target)||target<0||target>=draft.length||from<0){status.textContent='Enter a rank from 1 to '+draft.length+'.';return;}
   if(from===target)return;draft.splice(from,1);draft.splice(target,0,id);draw();status.textContent=players.get(id).name+' moved to #'+(target+1)+'.';
   if(focus){const row=[...list.children].find(r=>r.dataset.playerId===id);row?.querySelector(focus)?.focus({preventScroll:true});}
  }
  function draw(){
   list.replaceChildren();saveButton.disabled=draft.every((id,i)=>id===editingState.sorted[i].id);
   draft.forEach((id,i)=>{
    const p=players.get(id),li=node('li',undefined,'ranking-editor-row');li.dataset.playerId=id;li.draggable=true;
    li.ondragstart=e=>{if(e.target.closest('input,button')){e.preventDefault();return;}dragged=id;e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',id);li.classList.add('is-dragging');};
    li.ondragover=e=>{if(dragged){e.preventDefault();e.dataTransfer.dropEffect='move';}};
    li.ondrop=e=>{e.preventDefault();if(dragged)move(dragged,i,'.editor-down');dragged=null;};li.ondragend=()=>{dragged=null;li.classList.remove('is-dragging');};
    const rank=node('span',String(i+1),'editor-rank'),photo=node('span',undefined,'rank-thumb');photo.append(makePortrait(p,true));const identity=node('span',undefined,'editor-identity');identity.append(node('strong',p.name),node('small',p.team));
    const controls=node('div',undefined,'editor-row-controls'),up=button('↑',()=>move(id,i-1,'.editor-up'),'editor-up'),down=button('↓',()=>move(id,i+1,'.editor-down'),'editor-down');
    up.setAttribute('aria-label','Move '+p.name+' up');down.setAttribute('aria-label','Move '+p.name+' down');up.disabled=i===0;down.disabled=i===draft.length-1;
    const input=node('input');input.type='number';input.min='1';input.max=String(draft.length);input.step='1';input.value=String(i+1);input.inputMode='numeric';input.setAttribute('aria-label','New rank for '+p.name);
    const apply=button('Move',()=>move(id,Number(input.value)-1,'.editor-row-controls input'),'editor-move');apply.setAttribute('aria-label','Move '+p.name+' to entered rank');
    input.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();move(id,Number(input.value)-1,'.editor-row-controls input');}};
    controls.append(up,down,input,apply);li.append(rank,photo,identity,controls);list.append(li);
   });
  }
  draw();
 }
 function sync(){
  const scope=el('team').value+'|'+el('position').value;if(lastScope!==scope){el('ranking-tools-status').textContent='';lastScope=scope;}
  const result=sharedRanking||state,canEdit=!sharedRanking&&!!state?.done;
  el('edit-ranking').parentElement.hidden=!canEdit;
  for(const side of ['left','right']){
   const b=el('exclude-'+side),card=el(side),name=card.querySelector('.player-name')?.textContent;
   b.textContent='Skip '+(name||'this player');b.setAttribute('aria-label','Exclude '+(name||'this player')+' from this ranking');b.disabled=!!sharedRanking||!state||state.done||includedPlayers(state).length<2;
  }
  const excluded=result?.excluded?.length||0;el('excluded-summary').hidden=!excluded;el('excluded-count').textContent=excluded+' '+(excluded===1?'player':'players')+' excluded.';
  for(const id of ['undo','undo-result'])el(id).textContent=result?.lastAction==='edit'?'↶ Undo last change':result?.lastAction==='exclude'?'↶ Undo exclusion':'↶ Undo last pick';
 }
 el('my-rankings').onclick=dashboard;el('edit-ranking').onclick=editor;el('view-excluded').onclick=excluded;
 for(const side of ['left','right'])el('exclude-'+side).onclick=()=>excludePlayer(side);
 globalThis.RankingTools={sync,announce,openSaved};sync();
})();