import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const ids=['minimal-metrics-injectivity','fourfold-nonvanishing','uniform-slc-indices','conditional-kahler-fourfolds'];
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const contentDir=path.join(root,'src/articles/worker-c');
fs.mkdirSync(contentDir,{recursive:true});
for(const id of ids){
 const sourceDir=path.join(root,'drafts/catalog-034',id);
 const assetDir=path.join(root,'public/diagrams/catalog-034',id);
 fs.mkdirSync(assetDir,{recursive:true});
 for(const filename of fs.readdirSync(path.join(sourceDir,'diagrams')))if(/\.(svg|tex|tikz|json|py)$/.test(filename))fs.copyFileSync(path.join(sourceDir,'diagrams',filename),path.join(assetDir,filename));
 for(const lang of ['ja','en']){
  const en=lang==='en',math=[];
  let md=fs.readFileSync(path.join(sourceDir,`article.${lang}.md`),'utf8').replace(/^# .+\n/,'');
  md=md.replace('公開サイトへの組込みと最終画面確認は本部の作業範囲。','').replace('Site integration and final page inspection belong to the central editor.','').replace('日英の数式と図を検査した初稿であり、公開サイトへの組込み・最終画面確認は本部へ引き渡す。','日英の数式と図を検査した初稿である。').replace('Bilingual formulas and diagrams have been checked; site integration and final page inspection are handed to the central editor.','Bilingual formulas and diagrams have been checked.');
  md=md.replace(/\\\[([\s\S]*?)\\\]|\$\$([\s\S]*?)\$\$|(?<!\\)\$([^$\n]+?)\$/g,(_,a,b,c)=>{
   const block=a!==undefined||b!==undefined,n=math.length;
   math.push(block?`<div class="math-display">$$${escape(a??b)}$$</div>`:`$${escape(c)}$`);
   return `MATHPLACEHOLDER${n}END`;
  });
  let html=String(await unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeStringify).process(md));
  html=html.replace(/<p>(MATHPLACEHOLDER\d+END)<\/p>/g,'$1').replace(/MATHPLACEHOLDER(\d+)END/g,(_,n)=>math[+n]);
  let section=0;
  html=html.replace(/<h2>/g,()=>`<h2 id="section-${++section}">`);
  html=html.replace(/<p><img src="(diagrams\/([^"<>]+)\.svg)" alt="([^"]*)"><\/p>/g,(_,src,stem,alt)=>{
   const prefix=`${id}-${stem}-`;
   let svg=fs.readFileSync(path.join(sourceDir,src),'utf8').replace(/<\?xml[^>]*\?>/,'');
   svg=svg.replace(/\bid="([^"]+)"/g,(_,value)=>`id="${prefix}${value}"`).replace(/((?:xlink:)?href)="#([^"]+)"/g,(_,attr,value)=>`${attr}="#${prefix}${value}"`).replace(/url\(#([^)]+)\)/g,(_,value)=>`url(#${prefix}${value})`);
   const base=`__SITE_BASE__diagrams/catalog-034/${id}/${stem}`;
   return `<figure class="proof-figure"><div class="proof-diagram" tabindex="0" role="region" aria-label="${alt}">${svg}</div><figcaption>${alt}</figcaption><div class="diagram-tools"><span>${en?'Citations in the diagram open the original sources. Scroll the diagram sideways on narrow screens.':'図中の引用から原典を開けます。狭い画面では図を横にスクロールできます。'}</span><a href="${base}.svg" target="_blank" rel="noopener noreferrer">${en?'Open figure':'図を拡大'} ↗</a><a href="${base}.tex" download>${en?'TeX source':'TeXソース'} ↓</a></div></figure>`;
  });
  html=html.replace(/<table>/g,'<div class="digest-table-wrap" tabindex="0"><table class="digest-table worker-c-table">').replace(/<\/table>/g,'</table></div>');
  html=html.replace(/href="(sources\.json|status\.md)"/g,(_,file)=>`href="https://github.com/masataka123/OpenAI-Math-Digest/blob/main/drafts/catalog-034/${id}/${file}"`);
  if(/MATHPLACEHOLDER|<img /.test(html))throw new Error(`Unconverted placeholder or figure: ${id}/${lang}`);
  fs.writeFileSync(path.join(contentDir,`${id}.${lang}.html`),html);
  console.log(`${id}/${lang}: ${math.length} expressions; ${section} sections`);
 }
}
