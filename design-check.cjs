// Browser checks and screenshots run on GitHub; no browser is installed on the user's Mac.
const {chromium}=require('@playwright/test'),http=require('node:http'),fs=require('node:fs/promises'),path=require('node:path'),assert=require('node:assert/strict');
(async()=>{
 const server=http.createServer(async(req,res)=>{try{const file=path.resolve('.',decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/$/,'/index.html').slice(1));if(!file.startsWith(process.cwd()+path.sep))throw Error('path');const body=await fs.readFile(file);res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':'text/html');res.end(body);}catch{res.statusCode=404;res.end('Not found');}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const url='http://127.0.0.1:'+server.address().port;

 const browser=await chromium.launch();try{
 const page=await browser.newPage({viewport:{width:390,height:844}}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 // Block web fonts in this page to verify the fallback works without that service.
 await page.route(/fonts\.(googleapis|gstatic)\.com/,route=>route.abort());

 // A previous Original preference must not override the permanent design.
 await page.addInitScript(()=>localStorage.setItem('nfl-sorter-design-v1','original'));
 await page.goto(url);
 assert.equal(await page.locator('[data-design-choice]').count(),0);
 assert.match(await page.locator('html').evaluate(el=>getComputedStyle(el).fontFamily),/DM Sans/);

 async function checkControls(){
  for(const width of [320,390,768,1024,1440]){
   await page.setViewportSize({width,height:1000});
   await page.mouse.move(0,0);
   const rects=await page.evaluate(()=>{
    const rect=id=>{const r=document.getElementById(id).getBoundingClientRect();return {top:r.top,height:r.height,width:r.width,bottom:r.bottom};};
    return {team:rect('team'),position:rect('position'),start:document.getElementById('start').hidden?null:rect('start'),reset:rect('reset')};
   });
   assert.ok(Math.abs(rects.team.top-rects.position.top)<1,'aligned selects '+width);
   for(const r of [rects.team,rects.position,rects.reset,rects.start].filter(Boolean))assert.equal(r.height,48,'consistent control height '+width);
   if(rects.start){
    assert.ok(Math.abs(rects.start.top-rects.reset.top)<1,'aligned actions '+width);
    assert.ok(Math.abs(rects.start.width-rects.reset.width)<1,'balanced action widths '+width);
   }
   if(width>1000)assert.ok(Math.abs(rects.reset.top-rects.team.top)<1,'shared desktop baseline '+width);
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'controls overflow '+width);
  }
 }

 // Primary/secondary brand colors must drive team identity rather than light UI highlights.
 const expected={
  'New York Giants':['#0B2265','#A71930'],
  'Philadelphia Eagles':['#004C54','#A5ACAF'],
  'Detroit Lions':['#0076B6','#B0B7BC']
 };
 const backgrounds=[];
 for(const [team,colors] of Object.entries(expected)){
  await page.selectOption('#team',team);
  await page.mouse.move(0,0);await page.waitForTimeout(250);
  const tile=page.locator('.team-tile[aria-pressed=true]');
  const actual=await tile.evaluate(el=>{
   const style=getComputedStyle(el);
   return {primary:style.getPropertyValue('--tile-primary').trim(),accent:style.getPropertyValue('--tile-accent').trim(),background:style.backgroundColor,rail:getComputedStyle(el,'::before').backgroundImage};
  });
  assert.deepEqual([actual.primary,actual.accent],colors);
  assert.notEqual(actual.background,'rgba(0, 0, 0, 0)');
  assert.match(actual.rail,/linear-gradient/);
  backgrounds.push(actual.background);
 }
 assert.equal(new Set(backgrounds).size,3,'Giants, Eagles and Lions need distinct selection fills');
 await page.selectOption('#team','Baltimore Ravens');
 console.log('PASS distinct Giants, Eagles and Lions brand-color selections');
 await checkControls();
 await page.click('#start');
 await checkControls();
 await page.click('#left');

 const saved=await page.evaluate(()=>Object.fromEntries(Object.entries(localStorage).filter(([k])=>k.startsWith('nfl-sorter-v3:'))));
 await page.reload();
 assert.match(await page.locator('html').evaluate(el=>getComputedStyle(el).fontFamily),/DM Sans/);
 assert.deepEqual(await page.evaluate(()=>Object.fromEntries(Object.entries(localStorage).filter(([k])=>k.startsWith('nfl-sorter-v3:')))),saved);
 await page.click('#undo');assert.match(await page.locator('#progress').textContent(),/^0 picks/);
 const teams=await page.locator('#team option').evaluateAll(os=>os.map(o=>o.value));
 assert.equal(teams.length,32);
 await fs.mkdir('qa',{recursive:true});
 for(const width of [320,390,768,1440]){
  await page.setViewportSize({width,height:1000});
  for(const team of teams){
   await page.selectOption('#team',team);
   if(await page.locator('#start').isVisible())await page.click('#start');
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'team overflow '+team+' '+width);
   assert.equal(await page.locator('body').evaluate(el=>getComputedStyle(el).backgroundImage),'none');
   const contrast=await page.locator('#left .pick-label').evaluate(el=>{
    const css=getComputedStyle(el),hex=TEAM_INFO[document.getElementById('team').value].colors.primary;
    const expected='rgb('+hex.slice(1).match(/../g).map(v=>parseInt(v,16)).join(', ')+')';
    const lum=color=>color.match(/[\d.]+/g).slice(0,3).map(Number).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4;}).reduce((n,v,i)=>n+v*[.2126,.7152,.0722][i],0);
    const bg=lum(css.backgroundColor),fg=lum(css.color);
    return {background:css.backgroundColor,expected,ratio:(Math.max(bg,fg)+.05)/(Math.min(bg,fg)+.05)};
   });
   assert.equal(contrast.background,contrast.expected,'primary pick color '+team);
   assert.ok(contrast.ratio>=4.5,'readable pick label '+team);

  }
  await page.evaluate(()=>scrollTo(0,0));
  await page.screenshot({path:'qa/design-fresh-'+width+'.png',fullPage:true});
 }
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.hover('#left');
 assert.equal(await page.locator('#left').evaluate(el=>getComputedStyle(el).transform),'none');
 assert.equal(await page.locator('#left').evaluate(el=>getComputedStyle(el).transitionDuration),'0s');
 await page.emulateMedia({reducedMotion:'no-preference'});
 // Also exercise the normal font-loading path in a separate page.
 const normal=await browser.newPage({viewport:{width:390,height:844}});
 await normal.goto(url);await normal.evaluate(()=>document.fonts.ready);
 await normal.screenshot({path:'qa/design-fresh-fonts.png',fullPage:true});
 assert.ok(await normal.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 assert.deepEqual(errors,[]);
 console.log('PASS balanced control heights, spacing and alignment at 320/390/768/1024/1440 before and during sorting');
 console.log('PASS all 32 teams use primary-colored favorite buttons with at least 4.5:1 text contrast');
 console.log('PASS permanent Fresh design despite old preferences; rankings preserved; 32 team layouts at 320/390/768/1440; font fallback; reduced motion');
 }finally{await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
