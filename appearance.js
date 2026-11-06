(() => {
 'use strict';
 const root=document.documentElement,key='nfl-sorter-appearance-v1',modes=['light','dim','black'];
 let mode='dim';
 try{const saved=localStorage.getItem(key);if(modes.includes(saved))mode=saved;}catch{}
 root.dataset.appearance=mode;
 function readableAccent(hex){
  let rgb=hex.replace('#','').match(/../g).map(n=>parseInt(n,16));
  const luminance=values=>values.map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4;}).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0);
  const paper=luminance([245,241,232]);
  for(let i=0;i<20&&(paper+.05)/(luminance(rgb)+.05)<4.5;i++)rgb=rgb.map(v=>Math.floor(v*.9));
  return '#'+rgb.map(v=>v.toString(16).padStart(2,'0')).join('');
 }
 function setTeamColors(colors){root.style.setProperty('--light-accent',readableAccent(colors.primary));}
 function apply(next,persist=true){
  if(!modes.includes(next))return;
  mode=next;root.dataset.appearance=next;
  if(persist)try{localStorage.setItem(key,next);}catch{}
  document.querySelectorAll('[data-appearance-choice]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.appearanceChoice===next)));
  const meta=document.querySelector('meta[name="theme-color"]');
  if(meta)meta.content={light:'#f5f1e8',dim:'#151b23',black:'#000000'}[next];
 }
 globalThis.SiteAppearance={setTeamColors};
 document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-appearance-choice]').forEach(b=>b.addEventListener('click',()=>apply(b.dataset.appearanceChoice)));
  apply(mode,false);
 });
})();