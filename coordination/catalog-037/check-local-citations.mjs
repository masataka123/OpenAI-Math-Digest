import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';
import {loadCitations,citationUrl} from '../../scripts/lib/citations.mjs';
const root='drafts/catalog-037',results=[];
for(const folder of fs.readdirSync(root)){
 const file=path.join(root,folder,'citations.json');if(!fs.existsSync(file))continue;
 const registry=loadCitations(file);
 for(const dir of registry.diagramDirectories){
  const at=path.join(root,folder,dir);
  for(const name of fs.readdirSync(at).filter(x=>x.endsWith('.tikz'))){
   const input=fs.readFileSync(path.join(at,name),'utf8');const expected=new Set([...input.matchAll(/\\Cite\{([^}]+)\}/g)].map(m=>citationUrl(registry,m[1])));
   for(const lang of ['ja','en']){
    const svg=fs.readFileSync(path.join(at,name.slice(0,-5)+'.'+lang+'.svg'),'utf8');
    const links=[...svg.matchAll(/<a\b[^>]*(?:xlink:href|href)=["']([^"']+)["']/g)].map(m=>m[1].replaceAll('&amp;','&'));
    assert.deepEqual(new Set(links),expected,folder+'/'+name+'/'+lang);
    results.push({paperId:folder,diagram:name,lang,citationLinks:links.length,distinctSourcesAndPages:expected.size});
   }
  }
 }
}
fs.writeFileSync('coordination/catalog-037/local-citation-checks.json',JSON.stringify(results,null,2)+'\n');
console.log(JSON.stringify({diagrams:results.length,citationLinks:results.reduce((a,x)=>a+x.citationLinks,0),status:'passed',scope:'Local drafts only; no public-copy checks'},null,2));
