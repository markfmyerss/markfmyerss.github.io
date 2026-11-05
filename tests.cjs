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
check('every player, including legacy saved players and Ioane, resolves an official portrait',()=>{
 const b=boot();assert.equal(b.run("headshotAliases.get(normalizedName('Vega Ioane'))"),'olaivavegaioane');
 const players=b.run('Object.values(ROSTERS).flat()');assert.equal(Object.keys(b.run('TEAM_INFO')).length,20);assert.ok(players.length>1000);
 for(const p of players){const img=b.run('makePortrait('+JSON.stringify(p)+')');assert.equal(img.tagName,'img');const url=new URL(img.src);assert.equal(url.protocol,'https:');assert.ok(['static.clubs.nfl.com','static.www.nfl.com'].includes(url.hostname));assert.ok(!url.href.includes('/t_lazy/'));}
 const img=b.run("makePortrait({id:'BAL-22',name:'Vega Ioane',number:'71',team:'Baltimore Ravens'})");assert.ok(img.src.includes('cic8kmqlhwywlnlv6h5w'));let replacement;img.replaceWith=n=>replacement=n;img.onerror();assert.equal(replacement.className,'fallback');
 assert.equal(b.run("makePortrait({id:'missing',name:'Unknown',number:'?',team:'Baltimore Ravens'}).className"),'fallback');
});
check('division picker shows four teams, restores team choice and preserves progress',()=>{
 const b=boot();assert.equal(b.e('team-grid').children.length,4);
 b.run("start();choose('left')");const north=b.run('JSON.stringify(state)');
 b.run("selectDivision('AFC East')");assert.equal(b.e('team').value,'Buffalo Bills');assert.equal(b.e('team-grid').children.length,4);
 assert.ok(b.e('team-grid').children.every(x=>['Buffalo Bills','Miami Dolphins','New England Patriots','New York Jets'].includes(x.dataset.team)));
 b.e('team').value='Miami Dolphins';b.run("selectTeam();start();choose('right')");const east=b.run('JSON.stringify(state)');
 b.run("selectDivision('AFC North')");assert.equal(b.run('JSON.stringify(state)'),north);
 b.run("selectDivision('AFC East')");assert.equal(b.e('team').value,'Miami Dolphins');assert.equal(b.run('JSON.stringify(state)'),east);
 const reloaded=boot(b.storage);assert.equal(reloaded.e('team-grid').dataset.division,'AFC East');assert.equal(reloaded.run('JSON.stringify(state)'),east);
});
check('South division keeps all three divisions independent across reloads',()=>{
 const b=boot();assert.equal(b.e('division-picker').children.length,4);
 b.run("start();choose('left')");const north=b.run('JSON.stringify(state)');
 b.run("selectDivision('AFC East');start();choose('right')");const east=b.run('JSON.stringify(state)');
 b.run("selectDivision('AFC South')");assert.equal(b.e('team').value,'Houston Texans');assert.equal(b.e('team-grid').children.length,4);
 assert.ok(b.e('team-grid').children.every(x=>['Houston Texans','Indianapolis Colts','Jacksonville Jaguars','Tennessee Titans'].includes(x.dataset.team)));
 b.e('team').value='Tennessee Titans';b.run("selectTeam();start();choose('right')");const south=b.run('JSON.stringify(state)');
 b.run("selectDivision('AFC East')");assert.equal(b.run('JSON.stringify(state)'),east);
 b.run("selectDivision('AFC North')");assert.equal(b.run('JSON.stringify(state)'),north);
 b.run("selectDivision('AFC South')");assert.equal(b.run('JSON.stringify(state)'),south);
 const reload=boot(b.storage);assert.equal(reload.e('team-grid').dataset.division,'AFC South');assert.equal(reload.run('JSON.stringify(state)'),south);
});
check('dual-position players appear once in each relevant filter',()=>{
 const b=boot();b.e('team').value='Jacksonville Jaguars';
 for(const pos of ['ALL','WR','DB']){b.e('position').value=pos;b.run('selectTeam();start()');assert.equal(b.run("state.players.filter(p=>p.name==='Travis Hunter').length"),1,'Hunter in '+pos);}
});
check('complete AFC has four divisions, four teams each, and independent West progress',()=>{
 const b=boot();const divisions=b.e('division-picker').children.map(x=>x.dataset.division);assert.deepEqual(divisions,['AFC North','AFC East','AFC South','AFC West']);
 const saves=new Map();
 for(const division of divisions){b.run('selectDivision('+JSON.stringify(division)+')');assert.equal(b.e('team-grid').children.length,4);b.run("start();choose('left')");saves.set(division,b.run('JSON.stringify(state)'));}
 for(const division of divisions){b.run('selectDivision('+JSON.stringify(division)+')');assert.equal(b.run('JSON.stringify(state)'),saves.get(division));}
 b.e('team').value='Los Angeles Chargers';b.run("selectTeam();start();choose('right')");const saved=b.run('JSON.stringify(state)');
 b.run("selectDivision('AFC North');selectDivision('AFC West')");assert.equal(b.e('team').value,'Los Angeles Chargers');assert.equal(b.run('JSON.stringify(state)'),saved);
 const reloaded=boot(b.storage);assert.equal(reloaded.e('team-grid').dataset.division,'AFC West');assert.equal(reloaded.run('JSON.stringify(state)'),saved);
});
check('conference switching restores AFC and NFC teams, filters and progress',()=>{
 const b=boot();assert.equal(b.e('conference-picker').children.length,2);assert.equal(b.e('division-picker').children.length,4);
 b.e('team').value='Los Angeles Chargers';b.e('position').value='QB';b.run("selectTeam();start();choose('left')");const afc=b.run('JSON.stringify(state)');
 b.run("selectConference('NFC')");assert.equal(b.e('team').value,'Chicago Bears');assert.equal(b.e('division-picker').children.length,1);assert.equal(b.e('division-picker').children[0].dataset.division,'NFC North');
 assert.deepEqual(b.e('team-grid').children.map(x=>x.dataset.team),['Chicago Bears','Detroit Lions','Green Bay Packers','Minnesota Vikings']);
 b.e('team').value='Detroit Lions';b.run("selectTeam();start();choose('right')");const nfc=b.run('JSON.stringify(state)');
 b.run("selectConference('AFC')");assert.equal(b.e('team').value,'Los Angeles Chargers');assert.equal(b.e('division-picker').children.length,4);assert.equal(b.run('JSON.stringify(state)'),afc);
 b.run("selectConference('NFC')");assert.equal(b.e('team').value,'Detroit Lions');assert.equal(b.run('JSON.stringify(state)'),nfc);
 const reloaded=boot(b.storage);assert.equal(reloaded.e('division-picker').dataset.conference,'NFC');assert.equal(reloaded.e('team').value,'Detroit Lions');assert.equal(reloaded.run('JSON.stringify(state)'),nfc);
 b.e('team').value='Buffalo Bills';b.run('selectTeam()');assert.equal(b.e('division-picker').dataset.conference,'AFC');b.run("selectConference('NFC')");assert.equal(b.run('JSON.stringify(state)'),nfc);
});
console.log(`${count} test groups passed`);
