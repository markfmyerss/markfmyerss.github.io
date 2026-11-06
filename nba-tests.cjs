const fs=require('node:fs'), vm=require('node:vm'), assert=require('node:assert/strict');
class Element {
  constructor(tag='div'){this.tagName=tag;this.children=[];this.style={setProperty(){}};this.dataset={};this.attributes={};this.value='';this.hidden=false;}
  append(...nodes){this.children.push(...nodes);}add(n){this.append(n);if(!this.value)this.value=n.value;}
  replaceChildren(...n){this.children=n;}setAttribute(k,v){this.attributes[k]=v;}querySelector(tag){return this.children.find(n=>n.tagName===tag);}closest(){return null;}focus(){}select(){}
}
function boot(storage=new Map(),blocked=false){
  const elements=new Map();const document={getElementById:id=>{if(!elements.has(id))elements.set(id,new Element());return elements.get(id);},createElement:tag=>new Element(tag),documentElement:new Element(),body:new Element(),addEventListener(){}};
  const localStorage={getItem:k=>storage.get(k)||null,setItem:(k,v)=>{if(blocked)throw Error('blocked');storage.set(k,v);},removeItem:k=>storage.delete(k)};
  const c=vm.createContext({document,localStorage,Option:function(text,value){this.text=text;this.value=value;},navigator:{clipboard:{writeText:async()=>{}}},confirm:()=>true,console});
  vm.runInContext(fs.readFileSync(__dirname+'/data.js','utf8'),c);vm.runInContext(fs.readFileSync(__dirname+'/nba-data.js','utf8'),c);vm.runInContext(fs.readFileSync(__dirname+'/app.js','utf8'),c);
  return {c,storage,e:document.getElementById,run:code=>vm.runInContext(code,c)};
}

const b=boot();
assert.equal(b.run('Object.keys(TEAM_INFO).length'),32);
assert.equal(b.run('Object.keys(NBA_TEAM_INFO).length'),5);
assert.equal(b.e('sport-picker').children.length,2);
assert.equal(b.run("keyFor('Philadelphia Eagles','ALL')"),'nfl-sorter-v3:PHI:ALL');
assert.equal(b.run("keyFor('Philadelphia 76ers','ALL')"),'nba-sorter-v1:PHI:ALL');
b.e('team').value='Philadelphia Eagles';b.run("selectTeam();start();choose('right')");const nfl=b.run('JSON.stringify(state)');
b.run("selectSport('NBA')");assert.equal(b.e('team').value,'Boston Celtics');assert.equal(b.e('team-grid').children.length,5);
assert.deepEqual(b.e('position').children.map(o=>o.value),['ALL','G','F','C']);
assert.deepEqual(b.e('conference-picker').children.map(o=>o.dataset.conference),['Eastern']);
assert.deepEqual(b.e('division-picker').children.map(o=>o.dataset.division),['Atlantic']);
b.e('team').value='Philadelphia 76ers';b.run("selectTeam();start();choose('left')");const nba=b.run('JSON.stringify(state)');
b.run("selectSport('NFL')");assert.equal(b.run('JSON.stringify(state)'),nfl);assert.equal(b.e('team').value,'Philadelphia Eagles');
b.run("selectSport('NBA')");assert.equal(b.run('JSON.stringify(state)'),nba);
let reloaded=boot(b.storage);assert.equal(reloaded.run('activeSport'),'NBA');assert.equal(reloaded.run('JSON.stringify(state)'),nba);
reloaded.run('reset()');reloaded.run("selectSport('NFL')");assert.equal(reloaded.run('JSON.stringify(state)'),nfl);
console.log('PASS league tabs, NBA filters, PHI save isolation, scoped reset and remembered sport/team after reload');
const oracle=boot();oracle.run("selectSport('NBA')");
let cases=0;
for(const team of oracle.run('Object.keys(NBA_TEAM_INFO)'))for(const pos of ['ALL','G','F','C']){
 oracle.e('team').value=team;oracle.e('position').value=pos;oracle.run('selectTeam();start()');
 const before=oracle.run('JSON.stringify({...state,history:[]})');
 if(!oracle.run('state.done')){oracle.run("choose('left');undo()");assert.equal(oracle.run('JSON.stringify({...state,history:[]})'),before);}
 let count=0;while(!oracle.run('state.done')){
  oracle.run("{const f=state.stack.at(-1);choose(f.left[f.i].name.localeCompare(f.right[f.j].name)>0?'left':'right')}");
  assert.ok(++count<150);
 }
 const actual=JSON.parse(oracle.run('JSON.stringify(state.sorted.map(p=>p.name))'));
 assert.deepEqual(actual,[...actual].sort((a,b)=>b.localeCompare(a)),team+' '+pos);
 assert.equal(new Set(oracle.run('state.sorted.map(p=>p.id)')).size,actual.length);
 cases++;
}
assert.equal(cases,20);console.log('PASS all 20 NBA team/filter combinations sort correctly, with undo and no duplicate players');
const players=oracle.run('Object.values(NBA_ROSTERS).flat()');assert.equal(players.length,86);
const ids=new Set();for(const p of players){
 assert.ok(!ids.has(p.id));ids.add(p.id);assert.equal(p.id,'NBA-'+p.nbaId);
 assert.ok(p.positions.every(v=>['G','F','C'].includes(v)));
 assert.ok(p.positions.includes(p.position));
 const url=oracle.run('NBA_HEADSHOTS['+JSON.stringify(p.id)+'].url');if(url){assert.equal(url,'assets/nba/headshots/'+p.nbaId+'.png');const image=fs.readFileSync(__dirname+'/'+url);assert.equal(image.subarray(0,8).toString('hex'),'89504e470d0a1a0a');assert.equal(image.readUInt32BE(16),260);assert.equal(image.readUInt32BE(20),190);}
}
console.log('PASS 86 official NBA player IDs, hybrid position grouping and official portrait source hosts');

const manifest=JSON.parse(fs.readFileSync(__dirname+'/assets/nba/headshots/manifest.json','utf8'));
assert.equal(manifest.portraits.length,84);assert.equal(manifest.fallbacks.length,2);
for(const item of manifest.portraits){assert.equal(new URL(item.url).hostname,'cdn.nba.com');assert.equal(require('node:crypto').createHash('sha256').update(fs.readFileSync(__dirname+'/'+item.path)).digest('hex'),item.sha256);}
console.log('PASS 84 unmodified NBA portrait assets match their official-source hashes; two generic profiles use jersey fallbacks');
