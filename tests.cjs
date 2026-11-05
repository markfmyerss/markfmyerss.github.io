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
  vm.runInContext(fs.readFileSync(__dirname+'/data.js','utf8'),c);vm.runInContext(fs.readFileSync(__dirname+'/app.js','utf8'),c);
  return {c,storage,e:document.getElementById,run:code=>vm.runInContext(code,c)};
}
let count=0;
const check=(name,fn)=>{fn();count++;console.log('PASS '+name);};
check('all teams and position filters produce the chosen preference order',()=>{
  const b=boot();const teams=b.run('Object.keys(TEAM_INFO)');
  for(const team of teams)for(const pos of b.run('positions')){
    b.e('team').value=team;b.e('position').value=pos;b.run('selectTeam();start()');
    let picks=0;while(!b.run('state.done')){
      // Prefer reverse alphabetic order: independent oracle for the final result.
      b.run("{const f=state.stack.at(-1);choose(f.left[f.i].name.localeCompare(f.right[f.j].name)>0?'left':'right')}");assert.ok(++picks<500);
    }
    const actual=JSON.parse(b.run('JSON.stringify(state.sorted.map(p=>p.name))'));
    const expected=[...actual].sort((a,b)=>b.localeCompare(a));assert.deepEqual(actual,expected,team+' '+pos);
    assert.equal(new Set(b.run('state.sorted.map(p=>p.id)')).size,actual.length);
  }
});
check('team switches and reloads preserve independent picks',()=>{
  let b=boot();b.run("start();choose('left')");const saved=b.run('JSON.stringify(state)');
  b.e('team').value='Cincinnati Bengals';b.run("selectTeam();start();choose('right');choose('left')");
  b.e('team').value='Baltimore Ravens';b.run('selectTeam()');assert.equal(b.run('JSON.stringify(state)'),saved);
  b=boot(b.storage);assert.equal(b.run('JSON.stringify(state)'),saved);
});
check('position switches preserve independent progress and reset is scoped',()=>{
  const b=boot();b.run("start();choose('left')");b.e('position').value='QB';b.run("selectTeam();start();choose('right')");b.run('reset()');assert.equal(b.run('state'),null);
  b.e('position').value='ALL';b.run('selectTeam()');assert.equal(b.run('state.comparisons'),1);
});
check('undo restores exact comparison including across completion',()=>{
  const b=boot();b.e('position').value='QB';b.run('selectTeam();start()');const before=b.run('JSON.stringify({...state,history:[]})');b.run("choose('left');undo()");assert.equal(b.run('JSON.stringify({...state,history:[]})'),before);
  while(!b.run('state.done'))b.run("choose('left')");b.run('undo()');assert.equal(b.run('state.done'),false);assert.ok(!b.e('sort').hidden);
});
check('legacy Ravens saves migrate without deleting their source',()=>{
  const b=boot();b.e('position').value='QB';b.run("selectTeam();start();choose('left')");const legacy=b.run('JSON.stringify(state)');const storage=new Map([['nfl-sorter-ravens-v2',legacy]]);const migrated=boot(storage);
  assert.equal(migrated.run('state.comparisons'),1);assert.equal(migrated.e('position').value,'QB');assert.equal(storage.get('nfl-sorter-ravens-v2'),legacy);
  migrated.run('reset()');assert.equal(boot(storage).run('state'),null,'reset must not resurrect the legacy save');
});
check('corrupt storage is ignored; blocked writes retain latest in-memory picks',()=>{
  const storage=new Map([['nfl-sorter-v3:BAL:ALL','{bad']]);let b=boot(storage);assert.equal(b.run('state'),null);
  b.run("start();choose('left')");const initial=storage.get('nfl-sorter-v3:BAL:ALL');b=boot(storage,true);b.run("choose('right')");assert.equal(b.e('storage-note').hidden,false);
  b.e('team').value='Pittsburgh Steelers';b.run('selectTeam()');b.e('team').value='Baltimore Ravens';b.run('selectTeam()');assert.equal(b.run('state.comparisons'),2);assert.equal(storage.get('nfl-sorter-v3:BAL:ALL'),initial);
});
check('Vega alias and missing or failed permitted photos use fallback correctly',()=>{
  const b=boot();assert.equal(b.run("headshotAliases.get(normalizedName('Vega Ioane'))"),'olaivavegaioane');
  assert.equal(b.run("makePortrait(ROSTERS['Baltimore Ravens'][22]).className"),'fallback');
  b.run("permittedHeadshots.set('olaivavegaioane','https://example.test/permitted.png')");const img=b.run("makePortrait(ROSTERS['Baltimore Ravens'][22])");assert.equal(img.src,'https://example.test/permitted.png');let replacement;img.replaceWith=n=>replacement=n;img.onerror();assert.equal(replacement.className,'fallback');
});
console.log(`${count} test groups passed`);
