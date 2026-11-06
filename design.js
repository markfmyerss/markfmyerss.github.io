/* Design trial: only its own preference key is written; ranking data is untouched. */
(() => {
 const root=document.documentElement,key='nfl-sorter-design-v1';
 let mode='fresh';try{if(localStorage.getItem(key)==='original')mode='original';}catch{}
 root.dataset.design=mode;
 function apply(next){
  root.dataset.design=next;
  try{localStorage.setItem(key,next);}catch{}
  document.querySelectorAll('[data-design-choice]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.designChoice===next)));
  const status=document.getElementById('design-status');if(status)status.textContent=next==='fresh'?'Fresh trial on. Switch to Original anytime.':'Original design restored. Your rankings are unchanged.';
 }
 document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-design-choice]').forEach(b=>b.addEventListener('click',()=>apply(b.dataset.designChoice)));
  apply(mode);
 });
})();
