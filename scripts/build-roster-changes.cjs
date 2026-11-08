// GitHub-only change summaries. Compare published baselines; use older verified archives only for first-run history.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),T=require('./roster-tools.cjs');
const pack=p=>[p.id,p.name,p.team,String(p.number??''),p.position,p.rosterPosition||p.position,p.positions||[p.position]];
const unpack=r=>({id:r[0],name:r[1],team:r[2],number:r[3],position:r[4],rosterPosition:r[5],positions:r[6]});
function diffPlayers(before,after,allCurrent=after){
 const old=new Map(before.map(p=>[p.id,p])),now=new Map(after.map(p=>[p.id,p])),catalog=new Map(allCurrent.map(p=>[p.id,p]));
 assert.equal(old.size,before.length);assert.equal(now.size,after.length);
 const added=after.filter(p=>!old.has(p.id)),removed=before.filter(p=>!now.has(p.id)).map(p=>({...p,nowPositions:catalog.get(p.id)?.positions||null})),updated=[];
 for(const p of after){const prev=old.get(p.id);if(!prev)continue;const fields={};for(const k of ['name','team','number','rosterPosition'])if(String(prev[k]??'')!==String(p[k]??''))fields[k]={from:String(prev[k]??''),to:String(p[k]??'')};if(JSON.stringify(prev.positions)!==JSON.stringify(p.positions)&&!fields.rosterPosition)fields.positions={from:prev.positions.join('/'),to:p.positions.join('/')};if(Object.keys(fields).length)updated.push({player:p,fields});}
 const sort=(a,b)=>(a.player||a).name.localeCompare((b.player||b).name);return {added:added.sort(sort),removed:removed.sort(sort),updated:updated.sort(sort)};
}
function pools(data){
 const out=[];for(const sport of ['NFL','NBA']){const info=sport==='NFL'?data.TEAM_INFO:data.NBA_TEAM_INFO,rosters=sport==='NFL'?data.ROSTERS:data.NBA_ROSTERS;
 for(const [team,meta]of Object.entries(info))for(const pos of (sport==='NFL'?['ALL','QB','RB','WR','TE','OL','DL','LB','DB']:['ALL','G','F','C'])){const players=T.filtered(rosters[team],pos);if(players.length)out.push({key:[sport,meta.code,pos].join('.'),sport,code:meta.code,team,pos,scope:'team',verified:meta.verified,source:meta.source,players,all:rosters[team]});}
 const all=sport==='NFL'?data.NFL_POSITION_PLAYERS:data.NBA_POSITION_PLAYERS,meta=sport==='NFL'?data.NFL_POSITION_INFO:data.NBA_POSITION_INFO;
 for(const pos of sport==='NFL'?['QB','RB','WR','TE','LT','RT','LG','RG','C','IDL','DE','ILB','EDGE','CB','S']:['PG','SG','SF','PF','C']){const players=T.filtered(all,pos);assert(players.length);out.push({key:[sport,sport,pos].join('.'),sport,code:sport,team:sport+' League',pos,scope:'league',verified:meta.verified,source:'DATA-SOURCES.md',players,all});}
 }return out;
}
function main(){
 const data=T.loadData(),oldFile='assets/roster-change-baselines.json',reportFile='assets/roster-changes.json';
 const old=fs.existsSync(oldFile)?JSON.parse(fs.readFileSync(oldFile,'utf8')):{version:1,pools:{}},prior=fs.existsSync(reportFile)?JSON.parse(fs.readFileSync(reportFile,'utf8')):{version:1,reports:{}};
 assert.equal(old.version,1);assert.equal(prior.version,1);const index=JSON.parse(fs.readFileSync('assets/roster-snapshots/index.json','utf8')),cache=new Map(),next={},reports={};let changed=false,fromArchives=0;
 const archive=p=>{const candidates=Object.entries(index.snapshots).map(([key,item],i)=>({key,item,i})).filter(({key,item})=>key.startsWith(p.key+'.')&&Number.isFinite(Date.parse(item.verified))&&Date.parse(item.verified)<Date.parse(p.verified)).sort((a,b)=>Date.parse(b.item.verified)-Date.parse(a.item.verified)||b.i-a.i);
 for(const {item}of candidates){if(!cache.has(item.path))cache.set(item.path,JSON.parse(fs.readFileSync(item.path,'utf8')));const s=cache.get(item.path);if((s.scope==='league')!==(p.scope==='league'))continue;const players=T.filtered(s.players,p.pos);if(players.length){fromArchives++;return {verified:item.verified,players:players.map(pack)};}}return null;};
 for(const p of pools(data)){assert(p.verified,'Missing verified date '+p.key);const compact=p.players.map(pack),stamp=(p.scope==='league'?T.leagueStamp:T.stamp)(p.players),saved=old.pools[p.key],previous=saved||archive(p);
 next[p.key]={verified:p.verified,stamp,players:compact};
 if(saved&&saved.stamp===stamp&&saved.verified===p.verified&&prior.reports[p.key]){reports[p.key]=prior.reports[p.key];continue;}
 changed=true;const before=previous?previous.players.map(unpack):[],after=compact.map(unpack),diff=previous?diffPlayers(before,after,p.all):{added:[],removed:[],updated:[]};
 reports[p.key]={sport:p.sport,code:p.code,team:p.team,pos:p.pos,scope:p.scope,verified:p.verified,fromVerified:previous?.verified||null,toVerified:p.verified,baselineOnly:!previous,totalBefore:previous?before.length:null,totalAfter:after.length,...diff,source:p.source};
 }
 const generatedAt=changed?new Date().toISOString():prior.generatedAt;
 T.writeJSON(oldFile,{version:1,generatedAt,pools:next});T.writeJSON(reportFile,{version:1,generatedAt,reports});
 console.log('ROSTER_CHANGES_SUMMARY '+JSON.stringify({pools:Object.keys(reports).length,historicalComparisons:fromArchives,baselineOnly:Object.values(reports).filter(r=>r.baselineOnly).length,withChanges:Object.values(reports).filter(r=>r.added.length||r.removed.length||r.updated.length).length,changed}));
 return {reports,baselines:next};
}
module.exports={main,pack,unpack,diffPlayers,pools};if(require.main===module)main();
