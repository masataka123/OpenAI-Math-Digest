import fs from 'node:fs';import path from 'node:path';
const dir=path.resolve('coordination/catalog-074/preview'), reports=[];
const cache=new Map();const getIds=f=>{if(!cache.has(f))cache.set(f,ids(fs.readFileSync(f,'utf8')));return cache.get(f);};
const ids=text=>new Set([...text.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
for(const f of fs.readdirSync(dir).filter(f=>f.endsWith('.html'))){const html=fs.readFileSync(path.join(dir,f),'utf8'),missing=[];let checked=0;
 for(const [,raw] of html.matchAll(/(?:href|xlink:href)="([^"]+)"/g)){
  if(/^(https?:|data:|mailto:)/.test(raw))continue;
  const [file,anchor]=raw.split('#'),target=file?path.resolve(dir,file):path.join(dir,f);checked++;
  if(!fs.existsSync(target)){missing.push({href:raw,reason:'missing file'});continue;}
  if(anchor&&(/\.(html|svg)$/.test(target))&&!getIds(target).has(anchor))missing.push({href:raw,reason:'missing anchor'});
 }
 reports.push({file:f,checked,missing});
}
fs.writeFileSync('coordination/catalog-074/preview-links.json',JSON.stringify(reports,null,2)+'\n');console.log(JSON.stringify(reports.map(r=>({file:r.file,checked:r.checked,missing:r.missing})),null,2));if(reports.some(r=>r.missing.length))process.exitCode=1;
