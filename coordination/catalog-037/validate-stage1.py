from pathlib import Path
import json,hashlib,re
root=Path(__file__).resolve().parents[2]; co=root/'coordination/catalog-037'; inv=json.loads((co/'inventory.json').read_text()); failures=[]; report=[]
for m in inv['manuscripts']:
 assert hashlib.sha256((root/m['localSource']).read_bytes()).hexdigest()==m['sha256']
for p in sorted((root/'drafts/catalog-037').glob('*/citations.json')):
 d=p.parent;r=json.loads(p.read_text());assert r['citationStyle']=='author-key'
 ja=(d/'article.ja.md').read_text();en=(d/'article.en.md').read_text()
 maths=lambda s:[re.sub(r'\s+','',m) for m in re.findall(r'\$\$([\s\S]*?)\$\$|\$([^\$\n]+)\$',s) for m in [''.join(m)]]
 cites=lambda s:re.findall(r'<!-- cite:([^>]+) -->',s)
 figures=lambda s:re.findall(r'\]\(diagrams/(.+?)\.(?:ja|en)\.svg\)',s)
 if cites(ja)!=cites(en):failures.append(str(d)+': bilingual citation sequence differs')
 displays=lambda s:[re.sub(r'\s+','',x).rstrip(',.') for x in re.findall(r'\$\$([\s\S]*?)\$\$',s)]
 if displays(ja)!=displays(en):failures.append(str(d)+': bilingual displayed formulas differ')
 if figures(ja)!=figures(en):failures.append(str(d)+': bilingual figure sequence differs')
 for lang,text in [('ja',ja),('en',en)]:
  if re.search(r'生成前|generated citation|\{\{.*?\}\}',text):failures.append(str(d)+': unresolved placeholder')
  if not re.search(r'<!-- reference-guide -->.+?<!-- /reference-guide -->',text,re.S):failures.append(str(d)+': missing reference guide')
  for stem in figures(text):
   for ext in ['svg','tex']:
    if not (d/'diagrams'/f'{stem}.{lang}.{ext}').exists():failures.append(str(d)+': missing diagram')
 for diagramdir in r['diagramDirectories']:
  folder=d/diagramdir;manifest=json.loads((folder/'citation-build.json').read_text())
  for name,sha in manifest.items():
   if hashlib.sha256((folder/name).read_bytes()).hexdigest()!=sha:failures.append(str(folder/name)+': stale hash')
 report.append({'paperId':d.name,'citationMarkersPerLanguage':len(cites(ja)),'diagramsPerLanguage':len(figures(ja)),'manifest':'checked','bilingualCitationOrder':'same','displayedFormulasPerLanguage':len(displays(ja)),'bilingualDisplayedFormulas':'same after whitespace and terminal punctuation normalization','inlineAndDisplayExpressions':{'ja':len(maths(ja)),'en':len(maths(en))},'inlineMathReview':'Semantic correspondence checked in SOURCE_REVIEW.md; prose order and math/text typography may differ'})
# Check rendered anchors and local article navigation in the isolated preview.
for p in (co/'preview').glob('*.html'):
 html=p.read_text();ids=set(re.findall(r'\bid="([^\"]+)"',html))
 for target in re.findall(r'href="(#[^\"]+)"',html):
  if target[1:] not in ids:failures.append(str(p)+': missing '+target)
 for target in re.findall(r'href="([^\"]+\.html(?:#[^\"]+)?)"',html):
  name,_,anchor=target.partition('#'); dest=p.parent/name
  if not dest.exists():failures.append(str(p)+': missing '+name)
  elif anchor and f'id="{anchor}"' not in dest.read_text():failures.append(str(p)+': missing '+target)
 for error in re.findall(r'data-mjx-error="([^\"]+)"',html):failures.append(str(p)+': math '+error)
 for token in ['CATALOGINVENTORYTOKEN','PROOFDIAGRAM','STATEMENTSTARTTOKEN','TEXMATH']:
  if token in html:failures.append(str(p)+': unexpanded '+token)
baseline=json.loads((co/'preserved-files.json').read_text())
changed=[f for f,h in baseline.items() if not (root/f).exists() or hashlib.sha256((root/f).read_bytes()).hexdigest()!=h]
if changed:failures.append('Existing files changed: '+str(changed))
result={'catalog':'037','scope':'Stage 1 only; no public-copy/PDF/deployed checks','articlesAndOverview':report,'preservedExistingFiles':len(baseline),'changedExistingFiles':changed,'failures':failures}
(co/'validation-stage1.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');print(json.dumps(result,ensure_ascii=False,indent=2))
raise SystemExit(bool(failures))
