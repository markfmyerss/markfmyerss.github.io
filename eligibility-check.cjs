const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),T=require('./scripts/roster-tools.cjs');
const data=T.loadData(),policy=JSON.parse(fs.readFileSync('assets/nfl-position-policy.json'));
assert(data.NFL_POSITION_PLAYERS?.length);const players=data.NFL_POSITION_PLAYERS,groups=['QB','RB','WR','TE','OL','IDL','DE','ILB','EDGE','CB','S'];
assert.equal(new Set(players.map(p=>p.id)).size,players.length);
for(const p of players){assert(p.positions.every(g=>groups.includes(g)));assert(data.NFL_POSITION_KNOWN_IDS[p.team].includes(p.id));assert(data.NFL_POSITION_HEADSHOTS[p.id]?.url&&data.NFL_POSITION_HEADSHOTS[p.id]?.source);}
for(const e of [...policy.offensePolicy.approvedPlayerExceptions,...policy.defensePolicy.approvedPlayerExceptions])assert(players.some(p=>T.normalize(p.name)===T.normalize(e.name)),'Missing approved exception '+e.name);
if(data.NFL_POSITION_INFO.mode==='approved-reviewed-snapshot')for(const [g,n]of Object.entries({QB:41,RB:72,WR:95,TE:48,IDL:61,DE:59,ILB:65,EDGE:63,CB:81,S:71}))assert.equal(T.filtered(players,g).length,n,g);
const bootSource=fs.readFileSync('nba-tests.cjs','utf8').split('const b=boot();')[0].replace('confirm:()=>true,console','btoa,atob,confirm:()=>true,console');
const boot=vm.runInNewContext(bootSource+';boot',{require,__dirname:process.cwd(),console,btoa,atob,URL});
const b=boot();assert(!b.e('position').children.some(p=>p.value==='ST'));
b.run('selectRankingMode("positions")');assert.deepEqual(Array.from(b.run('selectablePositions("NFL",true)')),groups);
assert(!b.e('position').children.some(p=>['ST','DL','LB','DB','ALL'].includes(p.value)));
for(const pos of groups){b.e('position').value=pos;b.run('selectTeam();start()');assert(b.run('state.players.length')>0);b.run('choose("left")');const n=b.run('state.comparisons');b.run('undo()');assert.equal(b.run('state.comparisons'),n-1);}
b.run('selectRankingMode("teams")');assert(!b.e('position').children.some(p=>p.value==='ST'));assert(b.run('rosterFor("Baltimore Ravens").some(p=>p.position==="ST")'));
console.log('PASS approved pools, named exceptions, injured portraits, unique identities, 11 league categories, sorting/undo and Special Teams removal');

(async()=>{const original=T.get;try{T.get=async()=>'<table><tr><td><a href="/players/partial/">Partial Page</a></td><td>1</td><td>1</td><td>13</td></tr></table>';await assert.rejects(()=>require('./scripts/refresh-position-pools.cjs').passingStats(),/Fresh official statistics page unavailable/);console.log('PASS stale partial stat tables are rejected before publishing');}finally{T.get=original;}})().catch(e=>{console.error(e);process.exitCode=1;});
