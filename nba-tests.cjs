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
  vm.runInContext(fs.readFileSync(__dirname+'/data.js','utf8'),c);vm.runInContext(fs.readFileSync(__dirname+'/nba-data.js','utf8'),c);vm.runInContext(fs.readFileSync(__dirname+'/nba-central-data.js','utf8'),c);vm.runInContext(fs.readFileSync(__dirname+'/nba-southeast-data.js','utf8'),c);vm.runInContext(fs.readFileSync(__dirname+'/app.js','utf8'),c);
  return {c,storage,e:document.getElementById,run:code=>vm.runInContext(code,c)};
}

const b=boot();
assert.equal(b.run('Object.keys(TEAM_INFO).length'),32);
assert.equal(b.run('Object.keys(NBA_TEAM_INFO).length'),15);
assert.equal(b.e('sport-picker').children.length,2);
assert.equal(b.run("keyFor('Philadelphia Eagles','ALL')"),'nfl-sorter-v3:PHI:ALL');
assert.equal(b.run("keyFor('Philadelphia 76ers','ALL')"),'nba-sorter-v1:PHI:ALL');
b.e('team').value='Philadelphia Eagles';b.run("selectTeam();start();choose('right')");const nfl=b.run('JSON.stringify(state)');
b.run("selectSport('NBA')");assert.equal(b.e('team').value,'Boston Celtics');assert.equal(b.e('team-grid').children.length,5);
assert.deepEqual(b.e('position').children.map(o=>o.value),['ALL','G','F','C']);
assert.deepEqual(b.e('conference-picker').children.map(o=>o.dataset.conference),['Eastern']);
assert.deepEqual(b.e('division-picker').children.map(o=>o.dataset.division),['Atlantic','Central','Southeast']);
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
assert.equal(cases,60);console.log('PASS all 60 NBA team/filter combinations sort correctly, with undo and no duplicate players');
const players=oracle.run('Object.values(NBA_ROSTERS).flat()');assert.equal(players.length,261);
const ids=new Set();for(const p of players){
 assert.ok(!ids.has(p.id));ids.add(p.id);assert.equal(p.id,'NBA-'+p.nbaId);
 assert.ok(p.positions.every(v=>['G','F','C'].includes(v)));
 assert.ok(p.positions.includes(p.position));
 const url=oracle.run('NBA_HEADSHOTS['+JSON.stringify(p.id)+'].url');if(url){assert.equal(url,'assets/nba/headshots/'+p.nbaId+'.png');const image=fs.readFileSync(__dirname+'/'+url);assert.equal(image.subarray(0,8).toString('hex'),'89504e470d0a1a0a');const espn=[1641759,1643022,1643539].includes(p.nbaId);assert.equal(image.readUInt32BE(16),espn?600:260);assert.equal(image.readUInt32BE(20),espn?436:190);}
}
console.log('PASS 261 official NBA player IDs, hybrid position grouping and official portrait source hosts');

const manifest=JSON.parse(fs.readFileSync(__dirname+'/assets/nba/headshots/manifest.json','utf8'));
assert.equal(manifest.portraits.length,86);assert.equal(manifest.fallbacks.length,0);
for(const item of manifest.portraits){assert.equal(new URL(item.url).hostname,item.provider==='ESPN'?'a.espncdn.com':'cdn.nba.com');assert.equal(require('node:crypto').createHash('sha256').update(fs.readFileSync(__dirname+'/'+item.path)).digest('hex'),item.sha256);}
console.log('PASS all 86 Atlantic portrait assets match source hashes, including two ESPN overrides');

const centralManifest=JSON.parse(fs.readFileSync(__dirname+'/assets/nba/headshots/central-manifest.json','utf8'));
assert.equal(centralManifest.portraits.length,87);assert.equal(centralManifest.fallbacks.length,0);
for(const item of centralManifest.portraits)assert.equal(require('node:crypto').createHash('sha256').update(fs.readFileSync(__dirname+'/'+item.path)).digest('hex'),item.sha256);
const nav=boot();nav.run("selectSport('NBA');start();choose('left')");const atlantic=nav.run('JSON.stringify(state)');
nav.run("selectDivision('Central');start();choose('right')");const central=nav.run('JSON.stringify(state)');
nav.run("selectDivision('Atlantic')");assert.equal(nav.run('JSON.stringify(state)'),atlantic);
nav.run("selectDivision('Central')");assert.equal(nav.run('JSON.stringify(state)'),central);
const reloadCentral=boot(nav.storage);assert.equal(reloadCentral.e('division-picker').dataset.conference,'Eastern');assert.equal(reloadCentral.run('JSON.stringify(state)'),central);
for(const [nfl,nba] of [['Cleveland Browns','Cleveland Cavaliers'],['Detroit Lions','Detroit Pistons'],['Indianapolis Colts','Indiana Pacers']])assert.notEqual(nav.run('keyFor('+JSON.stringify(nfl)+',"ALL")'),nav.run('keyFor('+JSON.stringify(nba)+',"ALL")'));
for(const team of nav.run('Object.values(NBA_CENTRAL_TEAM_INFO)')){
 const svg=fs.readFileSync(__dirname+'/'+team.logo,'utf8').toLowerCase();
 for(const color of [team.colors.primary,team.colors.accent])if(!['#000000','#ffffff'].includes(color.toLowerCase()))assert.ok(svg.includes(color.toLowerCase()),team.name+' official logo color '+color);
}
console.log('PASS Central/Atlantic progress and reload isolation; 87 Central portrait hashes; official logo palettes; NFL/NBA CLE/DET/IND key isolation');

const southeastManifest=JSON.parse(fs.readFileSync(__dirname+'/assets/nba/headshots/southeast-manifest.json','utf8'));
assert.equal(southeastManifest.portraits.length,88);assert.equal(southeastManifest.fallbacks.length,0);
for(const item of southeastManifest.portraits)assert.equal(require('node:crypto').createHash('sha256').update(fs.readFileSync(__dirname+'/'+item.path)).digest('hex'),item.sha256);
const east=boot();east.run("selectSport('NBA')");const eastStates=new Map();
for(const division of ['Atlantic','Central','Southeast']){east.run('selectDivision('+JSON.stringify(division)+');start();choose("left")');eastStates.set(division,east.run('JSON.stringify(state)'));}
for(const [division,saved] of eastStates){east.run('selectDivision('+JSON.stringify(division)+')');assert.equal(east.run('JSON.stringify(state)'),saved);}
const eastReload=boot(east.storage);assert.equal(eastReload.e('team-grid').dataset.division,'Southeast');
for(const [nfl,nba] of [['Atlanta Falcons','Atlanta Hawks'],['Miami Dolphins','Miami Heat']])assert.notEqual(east.run('keyFor('+JSON.stringify(nfl)+',"ALL")'),east.run('keyFor('+JSON.stringify(nba)+',"ALL")'));
for(const team of east.run('Object.values(NBA_SOUTHEAST_TEAM_INFO)')){
 const svg=fs.readFileSync(__dirname+'/'+team.logo,'utf8').toLowerCase();
 for(const color of [team.colors.primary,team.colors.accent])if(!['#000000','#ffffff'].includes(color.toLowerCase()))assert.ok(svg.includes(color.toLowerCase()),team.name+' official logo color '+color);
}
console.log('PASS all three Eastern divisions restore independent progress; Southeast source hashes and logo palettes; NFL/NBA ATL/MIA isolation');

const espnOverrides=JSON.parse(fs.readFileSync(__dirname+'/assets/nba/headshots/espn-overrides.json','utf8'));
assert.deepEqual(espnOverrides.portraits.map(p=>p.id),[1641759,1643022,1643539]);
for(const p of espnOverrides.portraits){assert.equal(oracle.run('NBA_HEADSHOTS["NBA-'+p.id+'"].url'),p.path);assert.equal(require('node:crypto').createHash('sha256').update(fs.readFileSync(__dirname+'/'+p.path)).digest('hex'),p.sha256);}
assert.equal(oracle.run('Object.values(NBA_HEADSHOTS).filter(p=>!p.url).length'),0);
console.log('PASS all 261 NBA players have hosted portraits; three ESPN override identities and hashes verified');
