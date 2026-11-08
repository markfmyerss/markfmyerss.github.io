(() => {
 const apply=()=>{
  const sport=document.body.dataset.sport||'NFL',nfl=sport==='NFL';
  document.getElementById('trial-league-name').textContent=sport;
  document.getElementById('trial-tagline').textContent=nfl?'THE FIELD IS YOURS':'MAKE YOUR COURT CALL';
  document.getElementById('trial-season').textContent=nfl?'2026 SEASON':'2026–27 SEASON';
  const headline=nfl?'Pick your<br>playmakers.':'Your court.<br>Your call.';
  const h=document.querySelector('header h1');if(h.innerHTML!==headline)h.innerHTML=headline;
  document.querySelector('header .compact-brand').textContent=nfl?'NFL · Your team. Your favorites.':'NBA · Your court. Your favorites.';
  document.title=sport+' style trial · Fan Favorites';
  const url=new URL(location.href);if(url.searchParams.get('sport')!==sport){url.searchParams.set('sport',sport);history.replaceState(null,'',url);}
 };
 const requested=new URL(location.href).searchParams.get('sport');
 if(requested&&SPORTS[requested])selectSport(requested);
 new MutationObserver(apply).observe(document.body,{attributes:true,attributeFilter:['data-sport']});apply();
})();