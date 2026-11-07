const {chromium,webkit}=require('@playwright/test'),http=require('node:http'),fs=require('node:fs/promises'),path=require('node:path'),assert=require('node:assert/strict');
(async()=>{
const server=http.createServer(async(req,res)=>{try{const file=path.resolve('.',decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/$/,'/index.html').slice(1));if(!file.startsWith(process.cwd()+path.sep))throw Error('path');const body=await fs.readFile(file);res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.png')?'image/png':file.endsWith('.svg')?'image/svg+xml':'text/html');res.end(body);}catch{res.statusCode=404;res.end('Not found');}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));const origin='http://127.0.0.1:'+server.address().port;await fs.mkdir('qa',{recursive:true});
try{for(const engine of [chromium,webkit]){const browser=await engine.launch();try{
for(const [team,pos,width]of [['Baltimore Ravens','ALL',320],['Philadelphia Eagles','QB',1440],['Philadelphia 76ers','ALL',390],['Utah Jazz','F',390]]){
 const sender=await browser.newPage({viewport:{width,height:1000}});await sender.goto(origin);
 const result=await sender.evaluate(({team,pos})=>{selectSport(leagueFor(team));document.getElementById('team').value=team;document.getElementById('position').value=pos;selectTeam();const players=rankingRoster(team,pos);state={team,pos,players,sorted:[...players].reverse(),done:true,stack:[],history:[],comparisons:0};save();render();return {link:encodeRankingLink(state),names:state.sorted.map(p=>p.name)};},{team,pos});
 const receiver=await browser.newPage({viewport:{width,height:1000}}),errors=[];receiver.on('pageerror',e=>errors.push(e.message));await receiver.goto(origin);
 const own=await receiver.evaluate(({team,pos})=>{selectSport(leagueFor(team));document.getElementById('team').value=team;document.getElementById('position').value=pos;selectTeam();start();if(!state.done)choose('right');return {key:keyFor(team,pos),value:localStorage.getItem(keyFor(team,pos))};},{team,pos});
 await receiver.goto(origin+'/'+new URL(result.link).hash);
 assert.ok(await receiver.locator('#shared-notice').isVisible());assert.deepEqual(await receiver.locator('.rank-text strong').allTextContents(),result.names);assert.match(await receiver.locator('#results-title').textContent(),/^Shared /);
 assert.equal(await receiver.evaluate(k=>localStorage.getItem(k),own.key),own.value);
 assert.ok(await receiver.locator('#undo-result').isHidden());assert.ok(await receiver.locator('#again').isHidden());assert.ok(await receiver.locator('#reset').isDisabled());
 assert.equal(await receiver.locator('#roster-date').textContent(),team==='Baltimore Ravens'||team==='Philadelphia Eagles'?'Roster verified Nov. 5, 2026':'Roster verified Nov. 6, 2026');
 await receiver.keyboard.press('ArrowLeft');await receiver.keyboard.press('Control+z');assert.equal(await receiver.evaluate(k=>localStorage.getItem(k),own.key),own.value);
 await receiver.evaluate(()=>{Object.defineProperty(navigator,'share',{configurable:true,value:undefined});Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async v=>{window.copiedLink=v;}}});});
 await receiver.click('#share-link');await receiver.waitForFunction(()=>!!window.copiedLink);assert.equal(await receiver.evaluate(()=>window.copiedLink),result.link);
 await receiver.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async()=>{throw Error('denied');}}}));
 await receiver.click('#share-link');assert.ok(await receiver.locator('#ranking-link').isVisible());assert.equal(await receiver.locator('#ranking-link').inputValue(),result.link);
 await receiver.evaluate(()=>Object.defineProperty(navigator,'share',{configurable:true,value:async value=>{window.sharedLink=value.url;}}));await receiver.click('#share-link');assert.equal(await receiver.evaluate(()=>window.sharedLink),result.link);
 await receiver.evaluate(()=>Object.defineProperty(navigator,'share',{configurable:true,value:async()=>{throw new DOMException('Cancelled','AbortError');}}));await receiver.click('#share-link');assert.equal(await receiver.locator('#link-status').textContent(),'');assert.ok(await receiver.locator('#ranking-link').isHidden());
 assert.ok(await receiver.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 if(team==='Philadelphia 76ers'){
  await receiver.click('#share-ranking');assert.equal(await receiver.evaluate(()=>document.activeElement.id),'export-heading');assert.equal(await receiver.locator('#export-size option').count(),4);assert.equal(await receiver.locator('#export-scope option').count(),3);assert.ok(await receiver.locator('#export-type-field').isHidden());
  const exported=await receiver.evaluate(async()=>{const result={team:sharedRanking.team,pos:sharedRanking.pos,players:sharedRanking.sorted},out=[];for(const size of ['1x1','9x16']){const image=await ResultsExport.createImage(result,{size,type:'png',scope:'all'});out.push({pages:image.pages,missing:image.missingPhotos,ids:image.players,mime:image.blob.type});}return out;});
  const expected=await receiver.evaluate(()=>sharedRanking.sorted.map(p=>p.id));for(const image of exported){assert.equal(image.pages,1);assert.equal(image.missing,0);assert.deepEqual(image.ids,expected);assert.equal(image.mime,'image/png');}
 }
 await receiver.screenshot({path:'qa/shared-'+engine.name()+'-'+team.replace(/ /g,'-')+'.png',fullPage:true});
 await receiver.reload();assert.deepEqual(await receiver.locator('.rank-text strong').allTextContents(),result.names);assert.equal(await receiver.evaluate(k=>localStorage.getItem(k),own.key),own.value);
 await receiver.click('#rank-yours');assert.ok(await receiver.locator('#shared-notice').isHidden());assert.equal(await receiver.evaluate(()=>location.hash),'');assert.equal(await receiver.evaluate(k=>localStorage.getItem(k),own.key),own.value);
 await receiver.goto(origin+'/#ranking=v2.bad');assert.ok(await receiver.locator('#shared-status').isVisible());assert.ok(await receiver.locator('#shared-notice').isHidden());assert.equal(await receiver.evaluate(k=>localStorage.getItem(k),own.key),own.value);
 assert.deepEqual(errors,[]);await sender.close();await receiver.close();console.log('PASS '+engine.name()+' '+team+' shared order, reload, progress isolation, copy/manual/native sharing, cancellation, roster date and '+width+'px layout');
}
const blocked=await browser.newPage({viewport:{width:390,height:1000}});await blocked.addInitScript(()=>{Object.defineProperty(Storage.prototype,'setItem',{value(){throw new DOMException('Blocked','SecurityError');}});});
await blocked.goto(origin);const hash=await blocked.evaluate(()=>{const team=document.getElementById('team').value,players=rankingRoster(team,'ALL');return new URL(encodeRankingLink({team,pos:'ALL',sorted:players})).hash;});await blocked.goto(origin+'/'+hash);assert.ok(await blocked.locator('#shared-notice').isVisible());assert.equal(await blocked.locator('.rank').count(),await blocked.evaluate(()=>sharedRanking.sorted.length));await blocked.close();
}finally{await browser.close();}}}finally{await new Promise(r=>server.close(r));}
console.log('PASS shared rankings work with blocked storage; existing mobile image sizes, PNG exports and creator credit remain available');
})().catch(e=>{console.error(e);process.exit(1)});
