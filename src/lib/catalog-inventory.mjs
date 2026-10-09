import {paperSource} from '../data/site.mjs';
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
export function validateInventory(catalog,papers,data){
 if(data?.schemaVersion!==1||!/^\d{4}-\d{2}-\d{2}$/.test(data.checkedOn??''))throw Error('Missing inventory schema or checking date');
 if(JSON.stringify(data.rows?.map(r=>r.paperId))!==JSON.stringify(catalog.paperIds))throw Error('Inventory must match official paper order');
 for(const row of data.rows){
  const p=papers.find(p=>p.id===row.paperId);
  if(!p?.title||!p.version||!p.pages||!p.featured||!row.displayName?.trim()||!row.result?.trim())throw Error(`Incomplete inventory: ${row.paperId}`);
  for(const field of ['claim','role'])for(const lang of ['ja','en'])if(!row[field]?.[lang]?.trim())throw Error(`Missing ${field}/${lang}: ${row.paperId}`);
 }
}
export function renderCatalogInventory(catalog,papers,data,lang,base){
 validateInventory(catalog,papers,data);const en=lang==='en';
 const headings=en?['#','Manuscript and overview','Principal claim','Role and available overview']:['#','論文・概説','主に何を主張するか','議論の役割・概説'];
 const rows=data.rows.map((row,i)=>{
  const p=papers.find(p=>p.id===row.paperId),article=`${base}${lang}/papers/${p.id}/`,source=paperSource(p);
  return `<tr id="paper-${esc(p.id)}" class="featured-row"><td>${String(i+1).padStart(2,'0')}</td><th scope="row"><a class="manuscript-title" href="${article}" lang="en">${esc(p.title)} →</a><span class="table-detail">${en?'Short name':'図中の略称'}: ${esc(row.displayName)}</span><span class="table-detail">${esc(p.version)} · ${p.pages} ${en?'pages':'ページ'}</span><a class="manuscript-source" href="${source}">${en?'Original paper (GitHub)':'原論文（GitHub）'} ↗</a></th><td><p>${esc(row.claim[lang])}</p><a class="claim-source" href="${source}">${esc(row.result)} ↗</a></td><td><p>${esc(row.role[lang])}</p><a class="overview-link" href="${article}">${en?'Read the proof overview':'証明概説を読む'} →</a></td></tr>`;
 }).join('');
 const aliases=(data.legacyInventoryAnchors?.[lang]??[]).map(id=>`<span class="legacy-anchor" id="${esc(id)}" aria-hidden="true"></span>`).join('');
 return aliases+`<p class="article-prose">${en?'These summaries give the principal scope; consult the cited original results for the complete hypotheses and statements.':'主結果の範囲を短くまとめています。正確な仮定と定式化は併記した原典の結果を参照してください。'}</p><p class="table-hint">${en?'Page counts include references. On narrow screens, scroll the table sideways.':'ページ数は参考文献を含みます。狭い画面では表を横にスクロールできます。'}</p><div class="digest-table-wrap" role="region" aria-label="${en?'Manuscript inventory and roles':'論文一覧と役割'}" tabindex="0"><table class="digest-table catalog-inventory"><caption>${en?'Catalogue':'カタログ'} ${catalog.id} · ${data.checkedOn} ${en?'checked source snapshot':'確認の固定参照版'}</caption><thead><tr>${headings.map(h=>`<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div>`;
}
