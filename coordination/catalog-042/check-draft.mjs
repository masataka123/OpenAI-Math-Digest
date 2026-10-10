// Scope: catalog 042 draft artifacts only; no site registration or public copies.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {renderDraft} from '../../src/lib/render-draft.mjs';
import {renderCatalogInventory} from '../../src/lib/catalog-inventory.mjs';
import {loadCitations} from '../../scripts/lib/citations.mjs';
import {validateGuide} from '../../scripts/lib/article-guides.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
process.chdir(root);
const d='drafts/catalog-042/every-complex-k3-oka',o='drafts/catalog-042/overview';
const inv=JSON.parse(fs.readFileSync('coordination/catalog-042/inventory.json'));
const registry=loadCitations(d+'/citations.json'),guide=registry.articleGuides['.'];
const manifest=JSON.parse(fs.readFileSync(d+'/diagrams/citation-build.json'));
for(const [file,hash] of Object.entries(manifest))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(d+'/diagrams/'+file)).digest('hex'),hash,file);
const source=Object.fromEntries(['ja','en'].map(lang=>[lang,fs.readFileSync(`${d}/article.${lang}.md`,'utf8')]));
const citeIds=t=>[...t.matchAll(/<!-- cite:([a-z0-9-]+) -->/g)].map(m=>m[1]);
assert.deepEqual(citeIds(source.ja),citeIds(source.en),'Bilingual citation sequence');
const math=t=>[...t.matchAll(/\$\$([\s\S]*?)\$\$/g)].map(m=>m[1].replace(/\\text\{[^}]*\}/g,'TEXT').replace(/[\s.,]/g,''));
assert.deepEqual(math(source.ja),math(source.en),'Bilingual displayed equations');
const preview='/tmp/math-digest-042-preview';fs.mkdirSync(preview,{recursive:true});
const css=['digest','atlas','home','typography','paper','draft-article','catalog'].map(n=>fs.readFileSync(`src/styles/${n}.css`,'utf8')).join('\n');
const report={checkedOn:new Date().toISOString(),scope:'Draft only; publication assets and booklet PDFs excluded',manifestFiles:Object.keys(manifest).length,languages:{}};
function page(lang,title,rendered,catalog=false){return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><style>${css}</style><script>window.MathJax={tex:{inlineMath:[['$','$']],displayMath:[['$$','$$']]},svg:{fontCache:'global'}};</script><script defer src="/mathjax.js"></script></head><body><div class="site-chrome"><header class="masthead"><a class="brand">OpenAI <em>Math Digest</em></a><nav class="language-switch"><a href="/${catalog?'overview':'article'}.ja.html">日本語</a><a href="/${catalog?'overview':'article'}.en.html">English</a></nav></header></div><div class="ai-notice"><span class="ai-label">DRAFT / AI-GENERATED</span><p>${lang==='ja'?'原典確認用の初稿プレビュー。公開サイトではありません。':'Draft preview for source checking; not a published page.'}</p></div><main id="content"><article class="paper-article ${catalog?'catalog-page catalog-markdown-overview':'draft-article'}"><header class="family-header"><p class="eyebrow">CATALOGUE 042</p><h1>${title}</h1><p class="paper-subtitle">${rendered.subtitleHtml}</p><p class="lede">${rendered.ledeHtml}</p></header><nav class="contents">${rendered.headings.map(h=>`<a href="#${h.slug}">${h.text}</a>`).join('')}</nav><div class="article-prose draft-intro">${rendered.introHtml}</div><div class="draft-body">${rendered.html}</div></article></main></body></html>`;}
for(const lang of ['ja','en']){
 validateGuide(registry,guide,source[lang]);
 const rendered=await renderDraft(source[lang],{lang,paperId:inv.manuscripts[0].paperId,catalogId:'042',base:'/',diagramSource:stem=>fs.readFileSync(d+'/diagrams/'+stem+'.svg','utf8')});
 const html=rendered.html,ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(new Set(ids).size,ids.length,'Unique rendered IDs');
 for(const id of [...Object.values(guide.statements),...guide.conclusionCoverage.map(c=>c.anchor)])assert.ok(ids.includes(id),id);
 assert.ok(html.indexOf('id="diagram-sources"')<html.indexOf('<figure'));
 assert.equal((html.match(/<figure/g)||[]).length,6);
 for(const id of ['theorem-3-1','theorem-6-1'])assert.ok(html.indexOf(`id="${id}"`)<html.indexOf('<figure',html.indexOf(`id="${id}"`)));
 assert.equal((html.match(/(?:証明対象|Proof target)：/g)||[]).length,6);
 fs.writeFileSync(`${preview}/article.${lang}.html`,page(lang,inv.manuscripts[0].title,rendered));
 const overviewSource=fs.readFileSync(`${o}/article.${lang}.md`,'utf8');assert.equal(overviewSource.split('CATALOGINVENTORYTOKEN').length,2);
 const overview=await renderDraft(overviewSource,{lang,paperId:'overview',catalogId:'042',base:'/',diagramSource:()=>null});
 const manuscript=inv.manuscripts[0],paper={id:manuscript.paperId,title:manuscript.title,version:manuscript.version,pages:manuscript.pdfPages,featured:true,path:manuscript.path.replace(/^preprints\//,''),sourceCommit:manuscript.sourceCommit};
 const table=renderCatalogInventory({id:'042',paperIds:[paper.id]},[paper],JSON.parse(fs.readFileSync(o+'/presentation.json')),lang,'/');
 assert.equal((table.match(/scope="col"/g)||[]).length,4);assert.equal((table.match(/<tr id="paper-/g)||[]).length,1);
 overview.html=overview.html.replace(/<div class="article-prose proof-explanation">\s*<p>CATALOGINVENTORYTOKEN<\/p>\s*<\/div>/,table);assert.ok(!overview.html.includes('CATALOGINVENTORYTOKEN'));
 fs.writeFileSync(`${preview}/overview.${lang}.html`,page(lang,lang==='ja'?inv.titleJa:inv.overviewTitle,overview,true));
 report.languages[lang]={figures:6,proofTargets:6,mainResults:4,statements:6,conclusionCoverage:guide.conclusionCoverage.length,externalSources:guide.externalSources.length,readingEntrances:guide.readingList.length,inventoryRows:1,inventoryColumns:4,uniqueIds:ids.length};
}
report.bilingualCitationSequence=true;report.bilingualDisplayedEquations=true;report.previewDirectory=preview;
fs.writeFileSync('coordination/catalog-042/draft-validation.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
