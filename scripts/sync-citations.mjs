import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {loadCitations,expandCitationMarkers,citationTex} from './lib/citations.mjs';

export function findCitationRegistries(catalogId){
 const files=[];
 const visit=dir=>{for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
  const file=path.join(dir,entry.name);
  if(entry.isDirectory())visit(file);else if(entry.name==='citations.json')files.push(file);
 }};
 for(const name of fs.readdirSync('drafts'))if(/^catalog-\d{3}$/.test(name)&&(!catalogId||name===`catalog-${catalogId}`))visit(path.join('drafts',name));
 return files.sort();
}

export function syncCitations({check=false,catalogId,textOnly=false,registryFile}={}){
 const files=registryFile?[registryFile]:findCitationRegistries(catalogId);
 if(catalogId&&!files.length)throw Error(`No citation registry for catalogue ${catalogId}`);
 let count=0;
 for(const file of files){
  const registry=loadCitations(file),dir=path.dirname(file),write=(relative,expected)=>{
   const target=path.join(dir,relative),actual=fs.existsSync(target)?fs.readFileSync(target,'utf8'):null;
   if(actual!==expected){
    if(check)throw Error(`Stale citations: ${target}. Run npm run citations -- --catalog ${registry.catalogId}`);
    fs.writeFileSync(target,expected);
   }
   count++;
  };
  for(const relative of registry.markdownFiles){
   const lang=relative.match(/\.(ja|en)\.md$/)?.[1];
   if(!lang)throw Error(`Unknown language: ${relative}`);
   const text=fs.readFileSync(path.join(dir,relative),'utf8');
   const starts=[...text.matchAll(/<!-- cite:([^>]+) -->/g)],ends=text.match(/<!-- \/cite -->/g)??[];
   if(starts.length!==ends.length)throw Error(`Unbalanced citation markers: ${relative}`);
   for(const [,id] of starts)if(!registry.citations[id])throw Error(`Unknown citation: ${id}`);
   const remainder=text.replace(/<!-- cite:[a-z0-9-]+ -->[\s\S]*?<!-- \/cite -->/g,'');
   // Managed documents may link to articles, but source citations must use the registry.
   for(const [,key] of remainder.matchAll(/\]\[([^\]]+)\]/g))if(registry.sources[key])throw Error(`Unmanaged source citation: ${relative}`);
   for(const source of Object.values(registry.sources))if(remainder.includes(source.url))throw Error(`Handwritten source URL: ${relative}`);
   write(relative,expandCitationMarkers(text,registry,lang));
  }
  for(const directory of registry.diagramDirectories){
   for(const name of fs.readdirSync(path.join(dir,directory)).filter(n=>n.endsWith('.tikz'))){
    const tikz=fs.readFileSync(path.join(dir,directory,name),'utf8');
    for(const [,id] of tikz.matchAll(/\\Cite\{([^}]+)\}/g))if(!registry.citations[id])throw Error(`Unknown figure citation: ${id}`);
    if(/\\(?:P|MM|TZ|KM|PA|BC|ER|OC)Ref\{|https?:/.test(tikz))throw Error(`Handwritten figure citation: ${name}`);
   }
   for(const lang of ['ja','en'])write(`${directory}/citations.${lang}.tex`,citationTex(registry,lang));
   if(check&&!textOnly){
    const folder=path.join(dir,directory),manifest=JSON.parse(fs.readFileSync(path.join(folder,'citation-build.json'),'utf8'));
    const stems=fs.readdirSync(folder).filter(n=>n.endsWith('.tikz')).map(n=>n.slice(0,-5));
    const expected=['render.py','preamble.tex','citations.ja.tex','citations.en.tex',...stems.flatMap(stem=>[stem+'.tikz',...['ja','en'].flatMap(lang=>[`${stem}.${lang}.tex`,`${stem}.${lang}.svg`])])].sort();
    if(JSON.stringify(Object.keys(manifest).sort())!==JSON.stringify(expected))throw Error(`Incomplete figure manifest: ${folder}`);
    for(const [name,hash] of Object.entries(manifest)){
     if(createHash('sha256').update(fs.readFileSync(path.join(folder,name))).digest('hex')!==hash)throw Error(`Stale figure: ${folder}/${name}. Regenerate the diagrams.`);
     if(/\.(?:ja|en)\.(?:svg|tex)$/.test(name)&&!name.startsWith('citations.')){
      const asset=path.join('public/diagrams',path.relative('drafts',path.join(dir,directory,'..')),name);
      if(!fs.readFileSync(asset).equals(fs.readFileSync(path.join(folder,name))))throw Error(`Stale public asset: ${asset}`);
     }
    }
   }
  }
 }
 return {catalogues:files.length,files:count};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const args=process.argv.slice(2),i=args.indexOf('--catalog'),j=args.indexOf('--registry'),catalogId=i<0?undefined:args[i+1],registryFile=j<0?undefined:args[j+1];
 if(i>=0&&!/^\d{3}$/.test(catalogId??''))throw Error('Use --catalog NNN');
 if(j>=0&&(!registryFile||i>=0))throw Error('Use --registry FILE or --catalog NNN, not both');
 const result=syncCitations({check:args.includes('--check'),catalogId,textOnly:args.includes('--text-only'),registryFile});
 console.log(`Citations ${args.includes('--check')?'checked':'updated'}: ${result.catalogues} catalogue(s), ${result.files} files.`);
}
