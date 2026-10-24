import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {hash,readJSON,writeJSON,exists} from './common.mjs';

function group(text,start){
 if(text[start]!=='{')throw Error('Expected a TeX group');let depth=1,i=start+1;
 while(i<text.length&&depth){if(text[i-1]!=='\\'){if(text[i]==='{')depth++;if(text[i]==='}')depth--;}i++;}
 if(depth)throw Error('Unclosed TeX group');return {value:text.slice(start+1,i-1),end:i};
}
export function plainTitle(tex){
 let value=tex.replaceAll('\\&','&').replaceAll('---','—').replaceAll('--','–').replaceAll('\\,',' ').replaceAll('\\!','');
 for(let i=0;i<6;i++)value=value.replace(/\\(?:mathsf|mathrm|mathbf|text|operatorname|mathbb)\{([^{}]*)\}/g,'$1');
 const symbols={log:'log',pi:'π',mu:'μ',ell:'ℓ',times:'×',le:'≤',ge:'≥',leq:'≤',geq:'≥',infty:'∞',epsilon:'ε'};
 value=value.replace(/\\([a-zA-Z]+)\b/g,(m,key)=>symbols[key]??m);
 return value.replaceAll('$','').replace(/[{}]/g,'').replace(/\s+/g,' ').trim();
}
export function parseCatalogues(tex,contents){
 const heads=[...contents.matchAll(/^\*\*(\d{3})\./gm)];const blocks=new Map(heads.map((m,i)=>[m[1],contents.slice(m.index,heads[i+1]?.index??contents.length)]));
 const result=[];
 for(const m of tex.matchAll(/\\resultentry\{(\d{3})\}/g)){
  const title=group(tex,m.index+m[0].length).value,block=blocks.get(m[1]);if(!block)throw Error('Catalogue missing from CONTENTS: '+m[1]);
  const manuscripts=[...block.matchAll(/^&emsp;\[(.*)\]\((preprints\/[^)]+)\)\s*$/gm)].map(s=>({title:s[1].replace(/<[^>]*>/g,'').replaceAll('`',''),path:s[2]}));
  if(!manuscripts.length)throw Error('No manuscript links for '+m[1]);
  result.push({id:m[1],title:{en:plainTitle(title)},titleTex:title,titleNeedsReview:plainTitle(title).includes('\\'),manuscripts});
 }
 if(!result.length||new Set(result.map(c=>c.id)).size!==result.length)throw Error('Empty/duplicate catalogue index');return result;
}
export async function catalogIndex(root){
 const directory=path.join(root,'coordination/comics/source'),provenance=await readJSON(path.join(directory,'PROVENANCE.json'));
 const contents={};for(const [name,expected] of Object.entries(provenance.files)){
  const data=await readFile(path.join(directory,name));const actual=createHash('sha1').update(`blob ${data.length}\0`).update(data).digest('hex');
  if(actual!==expected)throw Error(`Official source changed: ${name}. Refresh provenance explicitly.`);contents[name]=data.toString('utf8');
 }
 const digest=hash(JSON.stringify({version:1,provenance,contents})),file=path.join(root,'tmp/comics-cache/catalog-index-'+digest+'.json');
 if(await exists(file))return {...await readJSON(file),cacheReused:true};
 const result={sourceCommit:provenance.sourceCommit,sourceDate:provenance.sourceDate,sourceFingerprint:digest,catalogs:parseCatalogues(contents['overview.tex'],contents['CONTENTS.md'])};
 await writeJSON(file,result);return {...result,cacheReused:false};
}
