import fs from 'node:fs';
import {createHash} from 'node:crypto';
const manifest=JSON.parse(fs.readFileSync('src/data/pdf-editions.json'))['197'];
const results=[];
for(const lang of ['ja','en']){
 const m=manifest[lang],url=`http://127.0.0.1:8297/OpenAI-Math-Digest/pdf/${m.file}`;
 const r=await fetch(url),data=Buffer.from(await r.arrayBuffer());
 const digest=b=>createHash('sha256').update(b).digest('hex');
 const result={lang,url,status:r.status,contentType:r.headers.get('content-type'),bytes:data.length,sha256:digest(data),publicHash:digest(fs.readFileSync(`public/pdf/${m.file}`)),distHash:digest(fs.readFileSync(`dist/pdf/${m.file}`)),manifestHash:m.sha256};
 if(r.status!==200||!result.contentType.includes('application/pdf')||result.bytes!==m.bytes||![result.sha256,result.publicHash,result.distHash].every(x=>x===m.sha256))throw Error(JSON.stringify(result));
 results.push(result);
}
fs.writeFileSync('coordination/catalog-197/stage2/served-pdf-check.json',JSON.stringify({checkedAt:new Date().toISOString(),results},null,2)+'\n');
console.log('Both final PDFs: HTTP 200, PDF MIME, bytes and SHA match public/dist/edition metadata.');
