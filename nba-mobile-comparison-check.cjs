const {chromium,webkit}=require('@playwright/test');
const assert=require('node:assert/strict'),fs=require('node:fs/promises'),http=require('node:http'),path=require('node:path');
(async()=>{
 const server=http.createServer(async(req,res)=>{try{let p=new URL(req.url,'http://localhost').pathname;if(p==='/')p='/index.html';const file=path.resolve('.','.'+p);res.setHeader('content-type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.png')?'image/png':file.endsWith('.svg')?'image/svg+xml':file.endsWith('.json')?'application/json':'text/html');res.end(await fs.readFile(file));}catch{res.statusCode=404;res.end();}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const root=process.env.CARD_CHECK_URL||'http://127.0.0.1:'+server.address().port;
 try{for(const engine of [chromium,webkit]){
 const browser=await engine.launch();
 try{
 const page=await browser.newPage({viewport:{width:390,height:1000},isMobile:true,hasTouch:true});
 await page.goto(root);await page.evaluate(()=>{selectSport('NBA');selectRankingMode('positions');document.getElementById('position').value='PG';selectTeam();start();});
 await page.evaluate(()=>document.fonts.ready);
 await page.addStyleTag({content:'*{transition:none!important;animation:none!important}'});
 // A real touchscreen tap must advance the ranking without leaving a lifted/tinted card.
 const before=await page.evaluate(()=>state.comparisons);
 await page.locator('#left').tap();await page.waitForTimeout(200);
 assert.equal(await page.evaluate(()=>state.comparisons),before+1);
 const inspect=()=>page.evaluate(()=>{
  const rect=e=>{const r=e.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,bottom:r.bottom};};
  return {overflow:document.documentElement.scrollWidth-innerWidth,cards:['left','right'].map(id=>{
   const c=document.getElementById(id),p=c.querySelector('.pick-label'),s=getComputedStyle(c),ps=getComputedStyle(p);
   const rgb=hex=>'rgb('+hex.replace('#','').match(/../g).map(x=>parseInt(x,16)).join(', ')+')';
   return {card:rect(c),portrait:rect(c.querySelector('.portrait')),choice:rect(p),filter:s.filter,transform:s.transform,tapHighlight:s.webkitTapHighlightColor,background:ps.backgroundColor,expected:rgb(getComputedStyle(c).getPropertyValue('--primary').trim()),ink:ps.color,expectedInk:rgb(getComputedStyle(c).getPropertyValue('--pick-ink').trim()),clipped:[...c.querySelectorAll('.player-name,.player-team,.pick-label')].some(e=>e.scrollWidth>e.clientWidth+1)};
  })};
 });
 const check=r=>{
  assert.equal(r.overflow,0,'Page overflows');
  for(const c of r.cards){assert.equal(c.filter,'none','Touch hover changes team colors');assert.equal(c.tapHighlight,'rgba(0, 0, 0, 0)','Native tap highlight tints the player card');assert.equal(c.transform,'none','Touch hover lifts one card');assert.equal(c.background,c.expected,'Choice does not use player team primary');assert.equal(c.ink,c.expectedInk,'Choice contrast ink changed');assert(!c.clipped,'Player text is clipped');assert(c.choice.height>=44,'Choice touch target too small');}
  for(const key of ['card','portrait','choice'])for(const dim of ['width','height','y','bottom'])assert(Math.abs(r.cards[0][key][dim]-r.cards[1][key][dim])<1,'Asymmetric '+key+' '+dim);
 };
 check(await inspect());
 await page.locator('#undo').tap();assert.equal(await page.evaluate(()=>state.comparisons),before);
 await page.locator('#right').tap();await page.waitForTimeout(200);const saved=await page.evaluate(()=>JSON.stringify(state));
 await page.reload();assert.equal(await page.evaluate(()=>JSON.stringify(state)),saved,'Reload changed saved ranking');
 await page.addStyleTag({content:'*{transition:none!important;animation:none!important}'});
 let pairs=0;
 for(const appearance of ['light','dim','black']){
  await page.locator('[data-appearance-choice='+appearance+']').tap();
  for(const width of [320,375,390,430,768]){
   await page.setViewportSize({width,height:1100});
   for(const pos of ['PG','SG','SF','PF','C']){
    const count=await page.evaluate(pos=>{
     document.getElementById('position').value=pos;selectTeam();start();
     return NBA_POSITION_PLAYERS.filter(p=>p.position===pos).length;
    },pos);
    // Put long names opposite short names; visit every eligible player/team palette.
    for(let n=0;n<Math.ceil(count/2);n++){
     await page.evaluate(({pos,n})=>{const ps=NBA_POSITION_PLAYERS.filter(p=>p.position===pos).sort((a,b)=>b.name.length-a.name.length);renderPlayer('left',ps[n]);renderPlayer('right',ps[ps.length-1-n]);},{pos,n});
     check(await inspect());pairs++;
    }
   }
  }
 }
 // The shared layout must also keep NFL cards and their team colors intact.
 await page.evaluate(()=>{selectSport('NFL');selectRankingMode('positions');document.getElementById('position').value='QB';selectTeam();start();});
 await page.setViewportSize({width:390,height:1000});await page.locator('#left').tap();await page.waitForTimeout(200);check(await inspect());
 console.log('PASS '+engine.name()+': '+pairs+' NBA comparison pairs, all five positions, three appearances, touch/undo/reload, NFL control');
 if(process.env.CARD_SCREENSHOTS==='1'){
  await page.evaluate(()=>{selectSport('NBA');selectRankingMode('positions');document.getElementById('position').value='PF';selectTeam();start();const ps=NBA_POSITION_PLAYERS.filter(p=>p.position==='PF');renderPlayer('left',ps.find(p=>p.name.includes('Antetokounmpo')));renderPlayer('right',ps.find(p=>p.name==='Kyle Kuzma'));});
  await page.locator('[data-appearance-choice=light]').tap();console.log('CARD_SCREENSHOT '+engine.name()+' '+(await page.locator('#sort').screenshot()).toString('base64'));
 }
 }finally{await browser.close();}
 }}finally{await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exit(1)});
