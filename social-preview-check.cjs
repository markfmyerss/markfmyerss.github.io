// Verify crawler-visible metadata and its real static image; JavaScript is unnecessary for previews.
const fs=require('node:fs'),assert=require('node:assert/strict'),path=require('node:path');
const origin='https://markfmyerss.github.io/',image=origin+'assets/link-preview-v1.png';
for(const file of ['index.html','nfl-favorites-sorter/index.html']){
 const html=fs.readFileSync(file,'utf8'),head=html.split('</head>')[0],tags=new Map();
 for(const match of head.matchAll(/<meta\b([^>]*)>/gi)){
  const attrs=Object.fromEntries([...match[1].matchAll(/([\w:-]+)\s*=\s*"([^"]*)"/g)].map(m=>[m[1],m[2]]));
  const key=attrs.property||attrs.name;if(!key)continue;
  if(key.startsWith('og:')||key.startsWith('twitter:'))assert.ok(!tags.has(key),'duplicate '+key+' in '+file);
  tags.set(key,attrs.content);
 }
 for(const key of ['og:title','og:description','og:image:alt','twitter:title','twitter:description','twitter:image:alt'])assert.ok(tags.get(key)?.length>0,key);
 assert.equal(tags.get('og:url'),origin);assert.equal(tags.get('og:type'),'website');
 assert.equal(tags.get('og:image'),image);assert.equal(tags.get('twitter:image'),image);
 assert.equal(tags.get('og:image:secure_url'),image);assert.equal(tags.get('og:image:type'),'image/png');
 assert.equal(tags.get('og:image:width'),'1200');assert.equal(tags.get('og:image:height'),'630');
 assert.equal(tags.get('twitter:card'),'summary_large_image');assert.equal(tags.get('twitter:creator'),'@markfm18');
 assert.equal((head.match(/rel="canonical"/g)||[]).length,1);
 assert.ok(head.includes('href="'+origin+'"'));
}
const file=path.join('.',new URL(image).pathname.slice(1)),png=fs.readFileSync(file);
assert.equal(png.subarray(0,8).toString('hex'),'89504e470d0a1a0a');
assert.equal(png.readUInt32BE(16),1200);assert.equal(png.readUInt32BE(20),630);assert.ok(png.length<5*1024*1024);
console.log('PASS root and legacy link metadata are present in raw HTML; real 1200x630 PNG; large X card; creator attribution; canonical URL');
