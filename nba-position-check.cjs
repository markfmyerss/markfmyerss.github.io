const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),T=require('./scripts/roster-tools.cjs');
const data=T.loadData(),status=data.NBA_POSITION_INFO,players=data.NBA_POSITION_PLAYERS,groups=['PG','SG','SF','PF','C'];
assert(status&&players?.length);assert.equal(status.season,2027);assert.equal(status.teamCount,30);assert.equal(status.teamReviews.length,30);assert.equal(new Set(status.teamReviews.map(t=>t.team)).size,30);
assert.equal(new Set(players.map(p=>p.id)).size,players.length);
for(const p of players){assert.equal(p.positions.length,1);assert.equal(p.position,p.positions[0]);assert(groups.includes(p.position));assert(data.NBA_ROSTERS[p.team].some(x=>x.id===p.id));assert(data.NBA_HEADSHOTS[p.id]?.url&&data.NBA_HEADSHOTS[p.id]?.source);const role=status.roles.find(r=>r.id===p.id);assert(role);assert.equal(role.primary,p.position);if(role.method==='ESPN-single-primary-position')assert.equal(role.espnPrimary,p.position);}
for(const g of groups){const pool=T.filtered(players,g);assert.equal(pool.length,status.counts[g]);assert(pool.length>=15&&pool.length<=65);}
for(const t of status.teamReviews){assert.equal(t.confirmedStarterIds.length,5);for(const id of t.confirmedStarterIds)assert(players.some(p=>p.id===id),'Missing actual starter '+t.team+' '+id);}
assert.equal(players.find(p=>p.id==='NBA-202710')?.position,'SF','Jimmy Butler inclusion');
const policy=JSON.parse(fs.readFileSync('assets/nba-position-policy.json'));
for(const e of policy.reserveExclusions)assert(!status.roles.some(r=>T.normalize(r.name)===T.normalize(e.name)&&r.reason==='Reviewed injured regular starter'),'Bench player promoted by previous-season starts');
const fixture=fs.readFileSync('nba-tests.cjs','utf8').split('const b=boot();')[0].replace("vm.runInContext(fs.readFileSync(__dirname+'/app.js','utf8'),c);","vm.runInContext(fs.readFileSync(__dirname+'/weekly-rosters.js','utf8'),c);vm.runInContext(fs.readFileSync(__dirname+'/app.js','utf8'),c);").replace('confirm:()=>true,console','btoa,atob,confirm:()=>true,console');
const boot=vm.runInNewContext(fixture+';boot',{require,__dirname:process.cwd(),console,btoa,atob,URL});
const b=boot();b.run('selectSport("NBA");selectRankingMode("positions")');assert.deepEqual(Array.from(b.run('selectablePositions("NBA",true)')),groups);
assert.equal(b.e('league-position-grid').children.length,5);
for(const pos of groups){b.e('position').value=pos;b.run('selectTeam();start()');assert.equal(b.run('state.players.length'),status.counts[pos]);b.run('choose("left");undo()');const before=b.run('JSON.stringify(state)');const again=boot(b.storage);assert.equal(again.run('JSON.stringify(state)'),before);}
for(const pos of ['G','F','C']){
 const oldPlayers=T.filtered(T.leaguePlayers(data.NBA_ROSTERS),pos),old={team:'NBA League',pos,players:oldPlayers,sorted:[...oldPlayers].reverse(),done:true,history:[],stack:[],comparisons:0};
 const storage=new Map([['fan-favorites-sport','NBA'],['nba-sorter-ranking-mode','positions'],['nba-sorter-league-position',pos],['nba-position-sorter-v1:'+pos,JSON.stringify(old)]]);
 const legacy=boot(storage);assert.deepEqual(Array.from(legacy.run('state.sorted.map(p=>p.id)')),old.sorted.map(p=>p.id),'Preserve old '+pos+' ranking');
 if(pos!=='C'){assert(legacy.e('position').children.some(o=>o.value===pos&&o.text==='Previous '+({G:'guards',F:'forwards'})[pos]+' ranking'));assert(legacy.e('latest-roster').hidden);}
 const link=legacy.run('encodeRankingLink(state)');assert(link.includes('#ranking=v2.NBA.NBA.'+pos+'.'));
 legacy.e('position').value='PG';legacy.run('selectTeam();start()');assert.deepEqual(Array.from(legacy.run('parseSavedState(read('+JSON.stringify('nba-position-sorter-v1:'+pos)+')).sorted.map(p=>p.id)')),old.sorted.map(p=>p.id));
}
b.run('selectRankingMode("teams")');assert.deepEqual(Array.from(b.run('selectablePositions("NBA",false)')),['ALL','G','F','C']);
assert(Object.values(data.NBA_ROSTERS).flat().length>players.length,'Full team rosters include reserves');for(const roster of Object.values(data.NBA_ROSTERS))assert(roster.length>=12&&roster.length<=25,'Complete team roster size');
for(const t of status.teamReviews)assert.equal(t.included,players.filter(p=>p.team===t.team).length,'Per-team included count');
console.log('PASS five disjoint NBA primary-position pools; all thirty confirmed starting lineups; injured Butler; official identity/headshot provenance; counts; separate saves/undo; legacy G/F/C rankings; full team rosters');

assert(!players.some(p=>p.id==='NBA-204001'),'Porzingis excluded');assert.equal(players.find(p=>p.id==='NBA-203078')?.position,'SG','Reviewed Beal primary position');
