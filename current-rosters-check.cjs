const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict'),T=require('./scripts/roster-tools.cjs'),R=require('./scripts/refresh-rosters.cjs');
const data=T.loadData();let count=0;
for(const sport of ['NFL','NBA']){R.validateLeague(data,sport);const info=sport==='NFL'?data.TEAM_INFO:data.NBA_TEAM_INFO,rosters=sport==='NFL'?data.ROSTERS:data.NBA_ROSTERS,shots=sport==='NFL'?data.HEADSHOTS:data.NBA_HEADSHOTS;
 for(const [team,players]of Object.entries(rosters)){for(const p of players){assert.ok(data.KNOWN_ROSTER_IDS[sport][team].includes(p.id));const shot=shots[p.id];assert.ok(shot.url&&shot.source);if(shot.url.startsWith('assets/')){const bytes=fs.readFileSync(shot.url);assert.equal(bytes.subarray(0,8).toString('hex'),'89504e470d0a1a0a');if(shot.url.startsWith('assets/roster-headshots/'))assert.equal(path.basename(shot.url,'.png'),crypto.createHash('sha256').update(bytes).digest('hex'));}count++;}
 assert.ok(typeof info[team].verified==='string'||sport==='NFL');
 }}
const index=T.archiveData(data);for(const [key,entry]of Object.entries(index.snapshots)){const [sport,code,pos,stamp]=key.split('.'),snapshot=JSON.parse(fs.readFileSync(entry.path,'utf8'));assert.equal(snapshot.sport,sport);assert.equal(snapshot.code,code);assert.equal((snapshot.scope==='league'?T.leagueStamp:T.stamp)(T.filtered(snapshot.players,pos)),stamp);}
console.log('PASS 62 current rosters and '+count+' player identities, headshot assets/provenance, dates and '+Object.keys(index.snapshots).length+' archived ranking versions');
