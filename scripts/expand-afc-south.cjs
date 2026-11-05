// Runs only on GitHub's runner. Existing team data and saves are preserved.
const fs=require('node:fs'),vm=require('node:vm');
const specs=[
 {name:'Houston Texans',code:'HOU',nickname:'Texans',singular:'Texan',source:'https://www.houstontexans.com/team/players-roster/',colors:{primary:'#03202F',accent:'#A71930',highlight:'#a9d1f0',ink:'#101014'}},
 {name:'Indianapolis Colts',code:'IND',nickname:'Colts',singular:'Colt',source:'https://www.colts.com/team/players-roster/',colors:{primary:'#002C5F',accent:'#A2AAAD',highlight:'#a5c9ff',ink:'#101014'}},
 {name:'Jacksonville Jaguars',code:'JAX',nickname:'Jaguars',singular:'Jaguar',source:'https://www.jaguars.com/team/players-roster/',colors:{primary:'#006778',accent:'#D7A22A',highlight:'#7ddbd4',ink:'#101014'}},
 {name:'Tennessee Titans',code:'TEN',nickname:'Titans',singular:'Titan',source:'https://www.tennesseetitans.com/team/players-roster/',colors:{primary:'#0C2340',accent:'#4B92DB',highlight:'#a2d0ff',ink:'#101014'}}
];
const clean=s=>s.replace(/<[^>]*>/g,'').replace(/&#x([0-9a-f]+);/gi,(_,h)=>String.fromCodePoint(parseInt(h,16))).replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n)).replace(/&apos;|&rsquo;/g,"'").replace(/&amp;/g,'&').replace(/&nbsp;/g,' ').trim();
const group=pos=>{pos=pos.toUpperCase();return({FB:'RB',HB:'RB',T:'OL',G:'OL',C:'OL',OT:'OL',OG:'OL','C/G':'OL','G/T':'OL','T/G':'OL','G/C':'OL',DT:'DL',DE:'DL',NT:'DL',EDGE:'LB',ILB:'LB',OLB:'LB',CB:'DB',S:'DB',SS:'DB',FS:'DB',K:'ST',P:'ST',LS:'ST','RB/WR':'RB'})[pos]||pos;};
async function get(url){const r=await fetch(url,{signal:AbortSignal.timeout(30000)});if(!r.ok)throw Error(url+': '+r.status);return r.text();}
(async()=>{
 const before=fs.readFileSync('data.js','utf8');const {TEAM_INFO,ROSTERS,HEADSHOTS}=vm.runInNewContext(before+';({TEAM_INFO,ROSTERS,HEADSHOTS})');
 let changed=false;
 for(const spec of specs){
  if(ROSTERS[spec.name])continue;
  const html=await get(spec.source);const table=[...html.matchAll(/<table\b[\s\S]*?<\/table>/gi)].map(m=>m[0]).find(t=>/<caption[^>]*>\s*Active\s*<\/caption>/i.test(t));if(!table)throw Error('No active table: '+spec.name);
  const rows=[...table.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].slice(1);const players=[],candidates=[];
  for(const row of rows){const cells=[...row[1].matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)].map(m=>m[1]);if(cells.length<3)throw Error('Malformed roster row');
   const name=clean(cells[0].match(/class="nfl-o-roster__player-name"[^>]*>([\s\S]*?)<\/span>/)?.[1]||'');if(!name)throw Error('No player name');
   const path=cells[0].match(/href="([^"]+)"/)?.[1],profile=new URL(path,spec.source).href;
   const position=clean(cells[2]);const p={name,number:clean(cells[1]),position:group(position),rosterPosition:position,team:spec.name,id:spec.code+'-'+profile.split('/').filter(Boolean).at(-1),profile};
   if(!['QB','RB','WR','TE','OL','DL','LB','DB','ST'].includes(p.position))throw Error('Unknown position '+position+' for '+name);
   const urls=[...cells[0].matchAll(/https:\/\/static\.clubs\.nfl\.com\/[^"\s,<>]+/g)].map(m=>m[0]);const url=(urls.find(u=>u.includes('t_thumb_squared_3x'))||urls[0])?.replace('/t_lazy/','/');
   players.push(p);candidates.push({p,url,generic:!url||/alt="[^"]*(?:default|silhouette|no.image)/i.test(cells[0])});
  }
  if(players.length<40||players.length>65||new Set(players.map(p=>p.id)).size!==players.length)throw Error('Suspicious roster '+spec.name+': '+players.length);
  const counts=new Map();for(const c of candidates)counts.set(c.url,(counts.get(c.url)||0)+1);
  for(const c of candidates){let url=c.url,source=spec.source;
   if(c.generic||counts.get(url)>1){
    const slug=c.p.name.toLowerCase().replace(/['’\.]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');const nfl='https://www.nfl.com/players/'+slug+'/';
    const page=await get(nfl);const images=[...page.matchAll(/https:\/\/static\.www\.nfl\.com\/image\/[^"\s<>]+/g)].map(m=>m[0].replace(/&amp;/g,'&'));
    const individual=images.find(u=>/t_player_profile_(?:landscape|square)/.test(u)&&!u.includes('nsp399n4t89mwbndaoew'));
    if(!individual)throw Error('Individual portrait needed for '+c.p.name+' (team uses placeholder)');
    url=individual.replace('/t_lazy/','/');source=nfl;
   }
   HEADSHOTS[c.p.id]={url,source};
  }
  TEAM_INFO[spec.name]={...spec,division:'AFC South'};ROSTERS[spec.name]=players;changed=true;
  console.log('VERIFIED '+spec.name+': '+players.length+' active players and portraits');
 }
 if(!changed){console.log('AFC South snapshot already present; no roster changes.');return;}
 for(const name of ['Baltimore Ravens','Cincinnati Bengals','Pittsburgh Steelers','Cleveland Browns'])TEAM_INFO[name].division='AFC North';
 fs.writeFileSync('data.js','// Official active-roster snapshots verified November 5, 2026. See DATA-SOURCES.md.\nconst TEAM_INFO = '+JSON.stringify(TEAM_INFO,null,2)+';\nconst ROSTERS = '+JSON.stringify(ROSTERS,null,2)+';\nconst HEADSHOTS = '+JSON.stringify(HEADSHOTS,null,2)+';\n');
 let docs=fs.readFileSync('DATA-SOURCES.md','utf8');docs+='\n## AFC South expansion — November 5, 2026\n\n'+specs.map(s=>'- '+s.name+': '+ROSTERS[s.name].length+' active players; '+s.source).join('\n')+'\n\nRoster tables and their portrait sources were retrieved on GitHub’s runner. New player IDs use official profile slugs; existing AFC North and East IDs and portrait records remain unchanged. EDGE is grouped with LB and combined line positions with OL. Each portrait source is recorded in HEADSHOTS. All images remain remotely hosted; no image files are bundled. This is a dated snapshot, not automatic roster refresh.\n';
 fs.writeFileSync('DATA-SOURCES.md',docs);
 // Return the reviewed source snapshot through the job log; this workflow cannot push.
 const payload=JSON.stringify({data:fs.readFileSync('data.js','utf8'),docs:fs.readFileSync('DATA-SOURCES.md','utf8')});
 for(let i=0;i<payload.length;i+=6000)console.log('AFC_SOUTH_PART '+Math.floor(i/6000)+' '+payload.slice(i,i+6000));
})().catch(e=>{console.error(e);process.exitCode=1;});
