import {createMarkdownProcessor} from '@astrojs/markdown-remark';
const processor = createMarkdownProcessor({smartypants:false,syntaxHighlight:false});
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export async function renderDraft(source,{lang,paperId,base,diagramSource}){
 const maths=[],diagrams=[];
 let markdown=source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/,'');
 markdown=markdown.replace(/!\[([^\]]*)\]\((diagrams\/([^()]+)\.svg)\)/g,(_,alt,file,stem)=>{
  const index=diagrams.length;diagrams.push({alt,stem});return `PROOFDIAGRAM${index}TOKEN`;
 });
 markdown=markdown.replace(/\$\$([\s\S]*?)\$\$|\$([^$\n]+)\$/g,(_,display,inline)=>{
  const index=maths.length;maths.push({text:display??inline,display:display!==undefined});return `TEXMATH${index}TOKEN`;
 });
 const {code,metadata}=await (await processor).render(markdown);
 const restore=text=>text.replace(/TEXMATH(\d+)TOKEN/g,(_,index)=>{
  const math=maths[+index],delimiter=math.display?'$$':'$';return delimiter+escape(math.text)+delimiter;
 });
 let html=restore(code).replace(/<p>PROOFDIAGRAM(\d+)TOKEN<\/p>/g,(_,index)=>{
  const {alt,stem}=diagrams[+index],asset=`${base}diagrams/catalog-034/${paperId}/${stem}`;
  const svg=diagramSource(stem).replace(/<\?xml[^>]*\?>/,'');
  const caption=escape(alt),en=lang==='en';
  return `<figure class="proof-figure"><div class="proof-diagram" tabindex="0" role="region" aria-label="${caption}">${svg}</div><figcaption>${caption}</figcaption><div class="diagram-tools"><span>${en?'Underlined citations open the sources. Scroll sideways on narrow screens.':'図の下線付き引用から原典へ移れます。狭い画面では横にスクロールできます。'}</span><a href="${asset}.svg" target="_blank" rel="noopener noreferrer">${en?'Open figure':'図を拡大'} ↗</a><a href="${asset}.tex" download>${en?'TeX source':'TeXソース'} ↓</a></div></figure>`;
 });
 html=html.replace(/<table>/g,'<div class="digest-table-wrap" tabindex="0"><table class="digest-table">').replace(/<\/table>/g,'</table></div>');
 html=html.replace(/<p>\s*\$\$([\s\S]*?)\$\$\s*<\/p>/g,'<div class="math-display">$$$$$1$$$$</div>');
 return {html,headings:metadata.headings.filter(h=>h.depth===2).map(h=>({...h,text:restore(h.text)}))};
}
