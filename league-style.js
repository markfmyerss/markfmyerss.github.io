(() => {
 const apply=()=>{
  const sport=document.body.dataset.sport||'NFL';
  document.getElementById('league-name').textContent=sport;
  document.getElementById('league-tagline').textContent='FAN FAVORITES';
  document.getElementById('league-season').textContent=sport==='NFL'?'2026 SEASON':'2026–27 SEASON';
  const headline='Your teams.<br>Your favorites.';
  const heading=document.querySelector('header h1');if(heading.innerHTML!==headline)heading.innerHTML=headline;
  document.querySelector('header .compact-brand').textContent='Your teams. Your favorites.';
 };
 const requested=new URL(location.href).searchParams.get('sport');
 if((requested==='NFL'||requested==='NBA')&&!sharedRanking)selectSport(requested);
 new MutationObserver(apply).observe(document.body,{attributes:true,attributeFilter:['data-sport']});
 apply();
})();