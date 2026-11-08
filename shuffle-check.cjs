const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const fixture=fs.readFileSync('nba-tests.cjs','utf8').split('const b=boot();')[0].replace('confirm:()=>true,console','btoa,atob,confirm:()=>true,console');
const boot=vm.runInNewContext(fixture+';boot',{require,__dirname:process.cwd(),console,btoa,atob,URL});
for(const [sport,mode,team,pos] of [
 ['NFL','teams','Baltimore Ravens','ALL'],
 ['NBA','teams','Boston Celtics','ALL'],
 ['NFL','positions','NFL League','QB'],
 ['NBA','positions','NBA League','PG']
]){
 let b=boot();b.run('selectSport('+JSON.stringify(sport)+');selectRankingMode('+JSON.stringify(mode)+')');
 b.e('team').value=team;b.e('position').value=pos;b.run('selectTeam()');
 const canonical=b.run('JSON.stringify(rosterFor($("team").value))');
 const ids=Array.from(b.run('rosterFor($("team").value).filter(p=>matchesPosition(p,$("position").value)).map(p=>p.id)'));
 assert(ids.length>2);
 b.run('Math.random=()=>0;start()');
 const order=Array.from(b.run('state.stack[0].items.map(p=>p.id)'));
 assert.deepEqual(order,[...ids.slice(1),ids[0]],sport+' '+mode+' shuffle');
 assert.deepEqual(Array.from(b.run('state.players.map(p=>p.id)')),ids,'Stable roster identity');
 assert.equal(b.run('JSON.stringify(rosterFor($("team").value))'),canonical,'Source roster unchanged');
 assert.equal(new Set(order).size,ids.length);
 b.run('choose("left")');const saved=b.run('JSON.stringify(state)');
 b.run('start()');assert.equal(b.run('JSON.stringify(state)'),saved,'Start preserves existing comparison');
 b=boot(b.storage);assert.equal(b.run('JSON.stringify(state)'),saved,'Reload preserves shuffled comparisons');
 const beforeUndo=b.run('JSON.stringify({...state,history:[]})');b.run('choose("right");undo()');
 assert.deepEqual(JSON.parse(b.run('JSON.stringify({...state,history:[]})')),JSON.parse(beforeUndo),'Undo preserves order');
 b.run('reset();Math.random=()=>0.999999;start()');
 assert.deepEqual(Array.from(b.run('state.stack[0].items.map(p=>p.id)')),ids,'Fresh ranking uses fresh random draws');
 assert.equal(b.run('JSON.stringify(rosterFor($("team").value))'),canonical);
 console.log('PASS '+sport+' '+mode+' shuffle, unique membership, stable roster, save/reload, undo and fresh reset');
}
