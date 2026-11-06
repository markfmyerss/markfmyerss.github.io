const fs=require('node:fs/promises');
const teams=[['Boston Celtics','1610612738','celtics'],['Brooklyn Nets','1610612751','nets'],['New York Knicks','1610612752','knicks'],['Philadelphia 76ers','1610612755','76ers'],['Toronto Raptors','1610612761','raptors']];
function arrays(value,path='',out=[]){
 if(!value||typeof value!=='object')return out;
 if(Array.isArray(value)){
  if(value.length&&typeof value[0]==='object'&&/roster|player/i.test(path))out.push({path,count:value.length,first:value.slice(0,2)});
  if(value.length<100)for(let i=0;i<value.length;i++)arrays(value[i],path+'['+i+']',out);
 }else for(const [k,v] of Object.entries(value))arrays(v,path+'.'+k,out);
 return out;
}
(async()=>{
 await fs.mkdir('qa/nba-probe',{recursive:true});
 for(const [name,id,slug] of teams){
  const url='https://www.nba.com/team/'+id+'/'+slug;
  const r=await fetch(url,{headers:{'user-agent':'Mozilla/5.0'},signal:AbortSignal.timeout(45000)});
  const html=await r.text();console.log('TEAM '+name+' '+r.status+' '+html.length);
  const match=html.match(/<script[^>]*id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
  if(!match){console.log('NO_NEXT_DATA '+html.slice(0,200));continue;}
  const data=JSON.parse(match[1]);const candidates=arrays(data);
  console.log('CANDIDATES '+JSON.stringify(candidates).slice(0,30000));
  await fs.writeFile('qa/nba-probe/'+id+'.json',JSON.stringify(data));
  const logo='https://cdn.nba.com/logos/nba/'+id+'/primary/L/logo.svg';
  const lr=await fetch(logo,{signal:AbortSignal.timeout(20000)}),svg=await lr.text();
  console.log('LOGO '+name+' '+lr.status+' '+lr.headers.get('content-type')+' '+[...new Set(svg.match(/#[0-9a-fA-F]{6}/g)||[])].join(','));
 }
})().catch(e=>{console.error(e);process.exitCode=1;});