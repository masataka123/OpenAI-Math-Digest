const cls=(n,c)=>n.properties?.className?.includes(c);
const el=(tag,children=[],properties={})=>({type:'element',tagName:tag,properties,children});
const txt=value=>({type:'text',value});
export const first=(n,predicate)=>predicate(n)?n:n.children?.map(c=>first(c,predicate)).find(Boolean);
const textOf=n=>n.type==='text'?n.value:(n.children??[]).map(textOf).join('');

// Remove controls, not exposition. The detailed connection records replace
// their duplicate audit table; all connection records remain visible in print.
const omit=new Set(['reading-guide','breadcrumbs','catalog-pdf','catalog-nav','contents',
 'dependency-controls','connection-empty','table-hint','catalog-audit','screen-only']);
export function prepare(n, catalogId) {
 if(n.type==='comment'||n.tagName==='script'||n.tagName==='style'||[...omit].some(c=>cls(n,c)))return null;
 // The booklet has its own contents; omit the website-only final back link.
 if(cls(n,'source-note')&&n.children?.filter(c=>c.type!=='text'||c.value.trim()).length===1
   &&n.children.some(c=>c.tagName==='a'&&c.properties?.href?.includes(`/catalog/${catalogId}/#paper-`)))return null;
 if(n.children)n.children=n.children.map(child=>prepare(child,catalogId)).filter(Boolean);
 if(n.properties){
  for(const k of Object.keys(n.properties))if(k.startsWith('dataAstro')||['tabIndex','target','download'].includes(k))delete n.properties[k];
  if(cls(n,'connection'))delete n.properties.hidden;
  if(cls(n,'diagram-tools'))n.children=n.children.filter(c=>c.tagName!=='span');
 }
 if(n.tagName==='table') {
  const header=first(n,e=>e.tagName==='thead');
  const labels=first(header??{},e=>e.tagName==='tr')?.children.filter(e=>['th','td'].includes(e.tagName)).map(textOf)??[];
  const rows=first(n,e=>e.tagName==='tbody')?.children.filter(e=>e.tagName==='tr')??[];
  const caption=first(n,e=>e.tagName==='caption');
  return el('section',[
   ...(caption?[el('h3',caption.children)]:[]),
   ...rows.map(row=>el('section',row.children.filter(e=>['th','td'].includes(e.tagName)).map((cell,i)=>el('div',[
    ...(labels[i]?[el('h4',[txt(labels[i])])]:[]),...cell.children
   ],{className:['print-cell']})),{...row.properties,className:['print-row']}))
  ],{className:['print-table']});
 }
 return n;
}
export function rewrite(n,chapter,lang,{catalog,site,base}) {
 if(n.properties){
  const p=n.properties;
  if(p.id)p.id=chapter+'--'+p.id;
  for(const key of ['href','xLinkHref'])if(typeof p[key]==='string'){
   const original=p[key];
   if(original.startsWith('#'))p[key]='#'+chapter+'--'+original.slice(1).replace(/^dependency-(?!canonical-good-model)/,'connection-');
   else {
    const url=new URL(original,site+base);
    const route=url.pathname.slice(base.length);
    const match=route.match(new RegExp('^'+lang+'/(catalog|papers)/([^/]+)/?$'));
    if(url.origin===new URL(site).origin&&url.pathname.startsWith(base)&&match){
     const target=match[1]==='catalog'?'catalog-'+match[2]:match[2];
     if(target===`catalog-${catalog.id}`||catalog.paperIds.includes(target))p[key]='#'+target+(url.hash?'--'+url.hash.slice(1).replace(/^dependency-(?!canonical-good-model)/,'connection-'):'');
     else p[key]=url.href;
    } else p[key]=url.href;
   }
  }
  for(const key of ['ariaLabelledBy','ariaDescribedBy'])if(p[key])p[key]=(Array.isArray(p[key])?p[key]:p[key].split(' ')).map(id=>chapter+'--'+id);
  for(const key of Object.keys(p))if(typeof p[key]==='string')p[key]=p[key].replace(/url\(#([^)]*)\)/g,(_,id)=>`url(#${chapter}--${id})`);
 }
 n.children?.forEach(child=>rewrite(child,chapter,lang,{catalog,site,base}));
}
