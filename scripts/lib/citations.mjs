import fs from 'node:fs';
import path from 'node:path';

export function pageNumbers(value) {
 if(typeof value!=='string'||!/^\d+(?:–\d+)?(?:, \d+(?:–\d+)?)*$/.test(value))throw Error(`Invalid page range: ${value}`);
 return value.split(', ').flatMap(part=>{
  const [a,b=a]=part.split('–').map(Number);
  if(a<1||b<a||b-a>10000)throw Error(`Invalid page range: ${value}`);
  return Array.from({length:b-a+1},(_,i)=>a+i);
 });
}

export function loadCitations(file) {
 const data=JSON.parse(fs.readFileSync(file,'utf8')),dir=path.dirname(file),sources={};
 if(data.schemaVersion!==1)throw Error(`Unsupported citation schema: ${file}`);
 for(const [key,ref] of Object.entries(data.sources)){
  const record=JSON.parse(fs.readFileSync(path.resolve(dir,ref.recordFile),'utf8'));
  const entry=ref.recordId==='self'?record:ref.recordId==='overview'?{
   sourceUrl:record.overviewUrl,displayName:'OpenAI Research Catalog',
   checkedLocations:[{printedPage:String(record.overviewPdfPage),pdfPage:record.overviewPdfPage}],
  }:record.externalSources.find(s=>s.id===ref.recordId);
  if(!entry)throw Error(`Unknown source record: ${key}`);
  const url=new URL(entry.sourceUrl);
  if(url.protocol!=='https:')throw Error(`Unsafe source URL: ${key}`);
  sources[key]={...entry,displayName:ref.displayName??entry.displayName,guideRole:ref.guideRole,guideVersion:ref.guideVersion,internal:ref.recordId==='self',key,
   samePagination:ref.pagination==='same',url:url.href};
  if(!sources[key].displayName)throw Error(`Missing readable source name: ${key}`);
 }
 const registry={...data,sources};
 for(const [id,cite] of Object.entries(data.citations)){
  if(!/^[a-z][a-z0-9-]*$/.test(id))throw Error(`Invalid citation ID: ${id}`);
  const s=sources[cite.source];
  if(!s||!cite.locations?.length)throw Error(`Incomplete citation: ${id}`);
  for(const loc of cite.locations){
   if(!loc.result?.trim())throw Error(`Missing result: ${id}`);
   const printed=pageNumbers(loc.printed),pdf=pageNumbers(loc.pdf);
   if(printed.length!==pdf.length)throw Error(`Page mapping length mismatch: ${id}`);
   for(let i=0;i<pdf.length;i++){
    if(s.pdfPages&&pdf[i]>s.pdfPages)throw Error(`Page out of bounds: ${id}`);
    if(s.samePagination){if(printed[i]!==pdf[i])throw Error(`Unrecorded page offset: ${id}`);}
    else if(!s.checkedLocations.some(p=>String(p.printedPage)===String(printed[i])&&p.pdfPage===pdf[i]))throw Error(`Unverified printed/PDF mapping: ${id}, ${printed[i]}/${pdf[i]}`);
   }
  }
 }
 return registry;
}

const pages=value=>`${pageNumbers(value).length===1?'p.':'pp.'} ${value}`;
export function citationParts(registry,id,lang) {
 const cite=registry.citations[id];
 if(!cite)throw Error(`Unknown citation: ${id}`);
 const source=registry.sources[cite.source];
 const locations=cite.locations.map(loc=>{
  const page=loc.printed===loc.pdf?pages(loc.pdf):`${lang==='ja'?'誌面':'print'} ${pages(loc.printed)} / PDF ${pages(loc.pdf)}`;
  return `${loc.result} · ${page}`;
 });
 return [source.internal?'':source.key==='OVERVIEW'?source.displayName:`${source.displayName} [${source.key}]`,...locations];
}

export function citationUrl(registry,id) {
 const cite=registry.citations[id],source=registry.sources[cite.source];
 const url=new URL(source.url);
 // Only actual PDFs support a PDF-page fragment; GitHub and DOI viewers do not.
 if(url.hostname!=='github.com'&&(/\.pdf$/.test(url.pathname)||url.hostname==='arxiv.org'&&url.pathname.startsWith('/pdf/')))url.hash=`page=${pageNumbers(cite.locations[0].pdf)[0]}`;
 return url.href;
}

export function citationMarkdown(registry,id,lang) {
 const [name,...locations]=citationParts(registry,id,lang);
 const label=((name?name+' · ':'')+locations.join('; ')).replaceAll('[','&#91;').replaceAll(']','&#93;');
 return `[${label}](${citationUrl(registry,id)})`;
}

export function expandCitationMarkers(markdown,registry,lang){
 return markdown.replace(/<!-- cite:([a-z0-9-]+) -->[\s\S]*?<!-- \/cite -->/g,(_,id)=>`<!-- cite:${id} -->${citationMarkdown(registry,id,lang)}<!-- /cite -->`);
}

const texEscape=value=>value.replace(/[\\{}%&#_$~^]/g,c=>({'\\':'\\textbackslash{}','{':'\\{','}':'\\}','%':'\\%','&':'\\&','#':'\\#','_':'\\_','$':'\\$','~':'\\textasciitilde{}','^':'\\textasciicircum{}'}[c]));
function wrap(text,max=72){
 const lines=[];let line='';
 for(const word of text.split(' ')){
  if(line&&[...line+' '+word].reduce((n,c)=>n+(c.charCodeAt(0)>0x3000?2:1),0)>max){lines.push(line);line=word;}
  else line+=(line?' ':'')+word;
 }
 if(line)lines.push(line);
 return lines;
}
export function citationTex(registry,lang){
 const definitions=Object.keys(registry.citations).map(id=>{
  const [name,...locations]=citationParts(registry,id,lang);
  const lines=locations.flatMap((loc,i)=>wrap((i===0&&name?name+' · ':'')+loc));
  // Hash characters inside the macro body must be escaped for TeX's definition parser.
  const url=citationUrl(registry,id).replaceAll('#','\\string##');
  return `\\expandafter\\def\\csname cite-${id}\\endcsname{\\shortstack[l]{${lines.map(line=>`\\refurl{${url}}{${texEscape(line)}}`).join('\\\\')}}}`;
 });
 return `% Generated from citations.json; do not edit.\n\\newcommand{\\Cite}[1]{\\csname cite-#1\\endcsname}\n${definitions.join('\n')}\n`;
}
