const plain = html => html.replace(/<[^>]+>/g, '').trim();
const attribute = text => text.replaceAll('&','&amp;').replaceAll('"','&quot;');

function headingKind(text) {
 if (/矢印に付した引用|references on the arrows/i.test(text)) return 'diagram-sources';
 if (/主要結果|主結果|main results/i.test(text)) return 'results';
 if (/どの論文が|which papers supply|依存|外部入力|直接入力|dependencies|external inputs|catalogue connections/i.test(text)) return 'dependencies';
 if (/確認範囲|原典|reading scope|checking scope|verification scope|return to the sources|sources and|source passages/i.test(text)) return 'sources';
 return 'proof';
}

function wrapSteps(body, className, idForStep=()=>null) {
 const first = body.search(/<h3\b/);
 if (first < 0) return body;
 return body.slice(0,first) + body.slice(first).split(/(?=<h3\b)/).filter(Boolean)
  .map((step,index) => {
   const id=idForStep(step,index);
   return `<section class="${className}"${id?` id="${attribute(id)}"`:''}>${step}</section>`;
  }).join('\n');
}

export function articleStructure(html,headingData,sectionIds=[]) {
 html=html.replace(/<p>([\s\S]*?)<\/p>/g,(paragraph,body)=>{
  const remainder=body.replace(/<a\b[^>]*>[\s\S]*?<\/a>/g,'').replace(/[\s·↗|]/g,'');
  return body.includes('<a ')&&!remainder?`<p class="source-line">${body}</p>`:paragraph;
 });
 const firstSection=html.search(/<h2\b/);
 let intro=firstSection<0?html:html.slice(0,firstSection);
 intro=intro.replace(/<h1\b[^>]*>[\s\S]*?<\/h1>/,'').trim();
 let subtitleHtml='',ledeHtml='';
 const subtitle=intro.match(/^<p><strong>([\s\S]*?)<\/strong><\/p>/);
 if(subtitle) {
  subtitleHtml=subtitle[1];intro=intro.slice(subtitle[0].length).trim();
  const lede=intro.match(/^<p>([\s\S]*?)<\/p>/);
  if(lede) {ledeHtml=lede[1];intro=intro.slice(lede[0].length).trim();}
 }
 const headings=[],used=new Set();let proofCount=0;
 const sections=(firstSection<0?[]:html.slice(firstSection).split(/(?=<h2\b)/)).filter(Boolean).map((chunk,index)=>{
  const match=chunk.match(/^<h2\b[^>]*>([\s\S]*?)<\/h2>/);
  const title=match[1],kind=headingKind(plain(title)),oldSlug=headingData[index].slug;
  let slug=sectionIds[index]??(kind==='proof'?`proof-${++proofCount}`:kind);
  if(used.has(slug))slug+=`-${index+1}`;
  used.add(slug);
  // Keep the earlier Markdown and worker-C anchors while sharing new IDs across languages.
  const aliases=[oldSlug,`section-${index+1}`].filter((id,i,all)=>id!==slug&&all.indexOf(id)===i);
  const anchor=aliases.map(id=>`<span class="legacy-anchor" id="${attribute(id)}" aria-hidden="true"></span>`).join('');
  let body=chunk.slice(match[0].length),className='paper-section';
  if(kind==='results'){
   className+=' article-prose';
   body=wrapSteps(body,'theorem-statement',step=>{
    const heading=step.match(/^<h3\b[^>]*>([\s\S]*?)<\/h3>/)?.[1]??'';
    const result=plain(heading).match(/^(Theorem|Corollary|Proposition|Lemma|Assumption)\s+(\d+(?:\.\d+)+)\b/i);
    if(!result)return null;
    const id=`${result[1].toLowerCase()}-${result[2].replaceAll('.','-')}`;
    // Preserve existing Markdown IDs, including a heading already using this exact ID.
    return html.includes(`id="${id}"`)?null:id;
   });
  }
  else if(kind==='diagram-sources')className='figure-key';
  else if(kind==='sources')className+=' article-prose';
  else if(kind==='proof'){
   className+=' proof-section';
   const figureEnd=body.lastIndexOf('</figure>');
   const end=figureEnd<0?0:figureEnd+'</figure>'.length;
   body=body.slice(0,end)+`<div class="article-prose proof-explanation">${wrapSteps(body.slice(end),'proof-step',(_,i)=>`${slug}-step-${i+1}`)}</div>`;
  }
  headings.push({depth:2,slug,text:plain(title),html:title});
  return `${anchor}<section id="${slug}" class="${className}"><h2>${title}</h2>${body}</section>`;
 }).join('\n');
 return {html:sections,introHtml:intro,subtitleHtml,ledeHtml,headings};
}
