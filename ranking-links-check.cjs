const fs=require('node:fs'),vm=require('node:vm');
const bootSource=fs.readFileSync('nba-tests.cjs','utf8').split('const b=boot();')[0].replace('confirm:()=>true,console','btoa,atob,confirm:()=>true,console');
vm.runInNewContext(bootSource+`
const b=boot();let count=0,longest=0;
for(const sport of ['NFL','NBA']){
 b.run('selectSport('+JSON.stringify(sport)+')');
 for(const team of b.run('teamsFor(activeSport)'))for(const pos of b.run('SPORTS[activeSport].positions')){
  b.e('team').value=team;b.e('position').value=pos;b.run('selectTeam()');
  const players=b.run('rankingRoster('+JSON.stringify(team)+','+JSON.stringify(pos)+')');if(!players.length)continue;
  b.run('state={team:'+JSON.stringify(team)+',pos:'+JSON.stringify(pos)+',players:rankingRoster('+JSON.stringify(team)+','+JSON.stringify(pos)+'),sorted:[...rankingRoster('+JSON.stringify(team)+','+JSON.stringify(pos)+')].reverse(),done:true,stack:[],history:[],comparisons:0}');
  const link=b.run('encodeRankingLink(state)');longest=Math.max(longest,link.length);assert.ok(link.length<300);
  const decoded=b.run('decodeRankingLink('+JSON.stringify(new URL(link).hash)+')');
  assert.equal(decoded.team,team);assert.equal(decoded.pos,pos);assert.deepEqual(Array.from(decoded.sorted,p=>p.id),Array.from(players,p=>p.id).reverse());
  assert.equal(b.e('roster-date').textContent,sport==='NFL'?'Roster verified Nov. 5, 2026':'Roster verified Nov. 6, 2026');count++;
 }
}
const sender=boot();sender.e('team').value='Baltimore Ravens';sender.run('selectTeam();start();while(!state.done)choose("left")');const link=sender.run('encodeRankingLink(state)'),hash=new URL(link).hash;
const receiver=boot();receiver.run('start();choose("right")');const ownKey=receiver.run('keyFor(state.team,state.pos)'),own=receiver.storage.get(ownKey);
receiver.c.location={hash,pathname:'/',search:''};receiver.c.history={replaceState(){receiver.c.location.hash='';}};
receiver.run('openSharedRanking()');assert.ok(receiver.run('!!sharedRanking'));assert.equal(receiver.storage.get(ownKey),own);assert.equal(receiver.e('undo-result').hidden,true);assert.equal(receiver.e('reset').disabled,true);
receiver.run('choose("left");undo();reset();start()');assert.equal(receiver.storage.get(ownKey),own);receiver.run('viewOwnRanking()');assert.equal(receiver.run('JSON.stringify(state)'),own);assert.equal(receiver.c.location.hash,'');
const parts=hash.split('.');const bad=[hash.replace('v1','v2'),hash.replace('.NFL.','.__proto__.'),hash.replace('.BAL.','.XXX.'),hash.slice(0,-1),hash+'.extra','#ranking='+('x'.repeat(1100))];
const duplicate=[...parts];duplicate[5]=btoa(String.fromCharCode(...Array(53).fill(0))).replace(/\\+/g,'-').replace(/\\//g,'_').replace(/=+$/,'');bad.push(duplicate.join('.'));
for(const value of bad)assert.throws(()=>receiver.run('decodeRankingLink('+JSON.stringify(value)+')'));
receiver.run('ROSTERS["Baltimore Ravens"].reverse()');assert.throws(()=>receiver.run('decodeRankingLink('+JSON.stringify(hash)+')'),/different roster snapshot/);receiver.run('ROSTERS["Baltimore Ravens"].reverse()');
console.log('PASS '+count+' team/filter link round trips; longest '+longest+' characters; exact names/order, roster dates, read-only shared results, progress preservation and malformed/stale links');
`,{require,__dirname:process.cwd(),console,btoa,atob,URL});
