// GitHub's scheduled job explicitly requests a Pages build after its bot commit.
const fs=require('node:fs');
async function requestBuild(){
 const repo=process.env.GITHUB_REPOSITORY,token=process.env.GITHUB_TOKEN; if(!repo||!token)throw Error('GitHub workflow credentials unavailable');
 const base='https://api.github.com/repos/'+repo;
 const api=async(url,method='GET')=>{const r=await fetch(url,{method,headers:{authorization:'Bearer '+token,accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'},signal:AbortSignal.timeout(30000)});const body=await r.json();if(!r.ok)throw Error('Pages API '+r.status+': '+(body.message||'request failed'));return body;};
 const build=await api(base+'/pages/builds','POST');const buildUrl=build.url?.startsWith(base+'/pages/builds/')?build.url:base+'/pages/builds/latest';
 console.log('Pages build requested');
 const expected=JSON.parse(fs.readFileSync('assets/roster-refresh-status.json','utf8'));
 for(let i=0;i<90;i++){
  await new Promise(r=>setTimeout(r,10000));
  const status=await api(buildUrl);if(status.status==='errored')throw Error('Pages build failed: '+(status.error?.message||'unknown error'));
  if(status.status==='built'){
   try{const r=await fetch('https://markfmyerss.github.io/assets/roster-refresh-status.json?check='+Date.now(),{signal:AbortSignal.timeout(20000)});if(r.ok){const live=await r.json();if(live.checkedAt===expected.checkedAt){console.log('PASS weekly roster refresh is live; '+live.verified+' teams verified, '+live.retained+' previous rosters retained');return;}}}catch{}
  }
 }
 throw Error('Pages publication did not finish verification in time; the committed roster candidate is available for retry');
}
module.exports={requestBuild};if(require.main===module)requestBuild().catch(e=>{console.error(e);process.exit(1)});
