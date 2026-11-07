const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto'),T=require('./roster-tools.cjs');
(async()=>{const root='https://markfmyerss.github.io/',get=async p=>{const r=await fetch(root+p+(p.includes('?')?'&':'?')+'verify='+Date.now(),{signal:AbortSignal.timeout(30000)});assert.equal(r.status,200,p);return r;};
const html=await(await get('')).text();for(const marker of ['id="saved-roster-note"','id="previous-rankings"','weekly-rosters.js?v=','app.js?v=weekly-rosters-v2'])assert.ok(html.includes(marker),marker);
for(const file of ['app.js','exports.js','styles.css','weekly-rosters.js']){const body=Buffer.from(await(await get(file)).arrayBuffer());assert.equal(crypto.createHash('sha256').update(body).digest('hex'),crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'),'Live '+file);}
const publicData=vm.runInNewContext((await Promise.all(T.DATA_FILES.map(async p=>await(await get(p)).text()))).join('\n')+';({TEAM_INFO,ROSTERS,HEADSHOTS,NBA_TEAM_INFO,NBA_ROSTERS,NBA_HEADSHOTS,ROSTER_REFRESH_STATUS})');
const status=await(await get('assets/roster-refresh-status.json')).json();assert.equal(status.checkedAt,publicData.ROSTER_REFRESH_STATUS.checkedAt);assert.equal(status.verified+status.retained,62);console.log('PASS public refresh record: '+status.verified+' teams verified; '+status.retained+' last rosters retained');
const baseline=vm.runInNewContext(T.DATA_FILES.filter(p=>p!=='weekly-rosters.js').map(p=>fs.readFileSync(p,'utf8')).join('\n')+';({TEAM_INFO,ROSTERS,HEADSHOTS,NBA_TEAM_INFO,NBA_ROSTERS,NBA_HEADSHOTS})');
const index=await(await get('assets/roster-snapshots/index.json')).json(),keys=[];
for(const sport of ['NFL','NBA']){const rosters=sport==='NFL'?baseline.ROSTERS:baseline.NBA_ROSTERS,info=sport==='NFL'?baseline.TEAM_INFO:baseline.NBA_TEAM_INFO;
for(const [team,players]of Object.entries(rosters))for(const pos of sport==='NFL'?T.NFL_POS:T.NBA_POS){const roster=T.filtered(players,pos);if(!roster.length)continue;const key=[sport,info[team].code,pos,T.stamp(roster)].join('.');assert.ok(index.snapshots[key],key);keys.push({key,roster,pos,entry:index.snapshots[key]});}}
const cache=new Map();await T.mapLimit([...new Set(keys.map(p=>p.entry.path))],8,async p=>cache.set(p,await(await get(p)).json()));
for(const row of keys)assert.equal(T.canonical(T.filtered(cache.get(row.entry.path).players,row.pos)),T.canonical(row.roster),row.key);
const ioane=Object.values(baseline.ROSTERS).flat().find(p=>T.normalize(p.name)==='vegaioane'||T.normalize(p.name)==='olaivavegaioane');assert.ok(ioane);const current=Object.values(publicData.ROSTERS).flat().find(p=>T.normalize(p.name)==='vegaioane'||T.normalize(p.name)==='olaivavegaioane');assert.equal(current.id,ioane.id);assert.equal(JSON.stringify(publicData.HEADSHOTS[ioane.id]),JSON.stringify(baseline.HEADSHOTS[ioane.id]));
for(const id of ['NBA-1641759','NBA-1643022','NBA-1643539'])assert.equal(JSON.stringify(publicData.NBA_HEADSHOTS[id]),JSON.stringify(baseline.NBA_HEADSHOTS[id]));
console.log('PASS all '+keys.length+' original team/filter share-link versions are publicly archived; Vega Ioane and the three ESPN portrait overrides remain intact');
console.log('PASS public app, exports, styles and weekly data match the checked repository files');
})().catch(e=>{console.error(e);process.exit(1)});
