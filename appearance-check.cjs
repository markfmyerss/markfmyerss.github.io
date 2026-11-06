// Browser checks and screenshots run on GitHub; no browser is installed on the user's Mac.
const {chromium,webkit}=require('@playwright/test'),http=require('node:http'),fs=require('node:fs/promises'),path=require('node:path'),assert=require('node:assert/strict');
(async()=>{
 const server=http.createServer(async(req,res)=>{try{const file=path.resolve('.',decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/$/,'/index.html').slice(1));if(!file.startsWith(process.cwd()+path.sep))throw Error('path');const body=await fs.readFile(file);res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':'text/html');res.end(body);}catch{res.statusCode=404;res.end('Not found');}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const url='http://127.0.0.1:'+server.address().port;


 try{
 await fs.mkdir('qa',{recursive:true});
 for(const engine of [chromium,webkit]){
  const browser=await engine.launch();
  try{
   const page=await browser.newPage({viewport:{width:390,height:1000}}),errors=[];
   page.on('pageerror',e=>errors.push(e.message));await page.goto(url);
   assert.equal(await page.locator('html').getAttribute('data-appearance'),'dim');
   await page.click('#start');await page.click('#left');
   const saved=await page.evaluate(()=>Object.fromEntries(Object.entries(localStorage).filter(([k])=>k.startsWith('nfl-sorter-v3:'))));
   for(const mode of ['light','black','dim']){
    await page.locator('[data-appearance-choice='+mode+']').click();
    assert.equal(await page.locator('html').getAttribute('data-appearance'),mode);
    assert.equal(await page.locator('[data-appearance-choice='+mode+']').getAttribute('aria-pressed'),'true');
    assert.equal(await page.locator('.appearance-option[aria-pressed=true]').count(),1);
    const background=await page.locator('body').evaluate(e=>getComputedStyle(e).backgroundColor);
    if(mode==='light')assert.equal(background,'rgb(245, 241, 232)');
    if(mode==='black')assert.equal(background,'rgb(0, 0, 0)');
    for(const width of [320,390,768,1440]){
     await page.setViewportSize({width,height:1000});
     assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'appearance overflow '+mode+' '+width);
    }
    await page.reload();
    assert.equal(await page.locator('html').getAttribute('data-appearance'),mode);
    assert.deepEqual(await page.evaluate(()=>Object.fromEntries(Object.entries(localStorage).filter(([k])=>k.startsWith('nfl-sorter-v3:')))),saved);
    await page.screenshot({path:'qa/appearance-'+engine.name()+'-'+mode+'.png',fullPage:true});
   }
   // A light appearance must keep each team's readable accent and primary-color picks.
   await page.locator('[data-appearance-choice=light]').focus();await page.keyboard.press('Enter');
   const teams=await page.locator('#team option').evaluateAll(os=>os.map(o=>o.value));
   for(const team of teams){
    await page.selectOption('#team',team);
    if(await page.locator('#start').isVisible())await page.click('#start');
    assert.equal(await page.locator('html').getAttribute('data-appearance'),'light');
    const readable=await page.evaluate(()=>{
     const lum=rgb=>rgb.map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4;}).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);
     const accent=getComputedStyle(document.documentElement).getPropertyValue('--light-accent').trim();
     const rgb=accent.slice(1).match(/../g).map(v=>parseInt(v,16));
     const label=getComputedStyle(document.querySelector('#left .pick-label'));
     const expected='rgb('+TEAM_INFO[document.getElementById('team').value].colors.primary.slice(1).match(/../g).map(v=>parseInt(v,16)).join(', ')+')';
     return {ratio:(lum([245,241,232])+.05)/(lum(rgb)+.05),pick:label.backgroundColor,expected};
    });
    assert.ok(readable.ratio>=4.5,'light accent contrast '+team);
    assert.equal(readable.pick,readable.expected);
   }
   // Finish the current ranking through a valid fixture to check results in each appearance.
   await page.evaluate(()=>{const team=document.getElementById('team').value;state={team,pos:'ALL',players:ROSTERS[team],stack:[],history:[],comparisons:200,done:true,sorted:ROSTERS[team]};save();render();});
   for(const mode of ['light','dim','black']){
    await page.locator('[data-appearance-choice='+mode+']').click();
    await page.setViewportSize({width:320,height:1000});
    assert.ok(await page.locator('#results').isVisible());assert.equal(await page.locator('.podium-card').count(),3);
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    await page.screenshot({path:'qa/appearance-results-'+engine.name()+'-'+mode+'.png',fullPage:true});
   }
   assert.deepEqual(errors,[]);
   const blocked=await browser.newPage();
   await blocked.addInitScript(()=>{Storage.prototype.getItem=()=>{throw Error('blocked');};Storage.prototype.setItem=()=>{throw Error('blocked');};});
   await blocked.goto(url);await blocked.locator('[data-appearance-choice=light]').click();
   assert.equal(await blocked.locator('html').getAttribute('data-appearance'),'light');
   await blocked.locator('[data-appearance-choice=black]').click();
   assert.equal(await blocked.locator('html').getAttribute('data-appearance'),'black');
   console.log('PASS '+engine.name()+': three appearances, exact cream/black backgrounds, reload persistence, rankings preserved, 32 readable team accents, responsive results, keyboard and blocked storage');
  }finally{await browser.close();}
 }
 }finally{await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
