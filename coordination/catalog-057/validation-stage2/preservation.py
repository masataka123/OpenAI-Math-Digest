from pathlib import Path
import json,hashlib,subprocess,datetime,re
root=Path('.');record=Path('coordination/catalog-057/STAGE2_BASELINE.json');b=json.loads(record.read_text())
allowed={
'drafts/catalog-057/overview/status.md','drafts/catalog-057/two-step-monodromy/status.md','drafts/catalog-057/half-weight-fourfold-abelianity/status.md',
'drafts/catalog-057/overview/article.en.md','drafts/catalog-057/overview/article.ja.md',
'drafts/catalog-057/special-kahler-abelianity/article.en.md','drafts/catalog-057/special-kahler-abelianity/article.ja.md','drafts/catalog-057/special-kahler-abelianity/status.md',
'scripts/catalog-033.test.mjs','scripts/catalog-063.test.mjs','scripts/site.test.mjs',
'src/data/article-navigation.mjs','src/data/pdf-editions.json','src/data/site.mjs',
'coordination/catalog-057/README.md','coordination/catalog-057/RELEASE_CHECKLIST.md','coordination/catalog-057/SITE_HQ_HANDOFF.md','coordination/catalog-057/inventory.json'}
def sha(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
changed=[p for p,h in b['files'].items() if not Path(p).exists() or sha(p)!=h]
unexpected=sorted(set(changed)-allowed);assert not unexpected,unexpected
assert subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip()==b['head']
pdfs=json.loads(Path('src/data/pdf-editions.json').read_text());assert all(pdfs[k]==v for k,v in b['pdfEditions'].items())
assets=[]
for p in Path('public/diagrams/catalog-057').rglob('*'):
 if not p.is_file():continue
 rel=p.relative_to('public/diagrams/catalog-057');src=Path('drafts/catalog-057')/rel.parent/'diagrams'/rel.name
 assert sha(p)==sha(src),str(p);assets.append({'file':str(p),'sha256':sha(p)})
assert len(assets)==64
inventory=json.loads(Path('coordination/catalog-057/inventory.json').read_text());sources=[]
for r in inventory['manuscripts']:
 assert sha(r['localPdfCache'])==r['sha256'];sources.append({'paperId':r['paperId'],'sha256':r['sha256']})
conflicts=[]
for p in list(Path('drafts/catalog-057').rglob('*.md'))+list(Path('coordination/catalog-057').glob('*.md'))+[Path(p) for p in allowed if p.endswith('.mjs')]:
 if re.search(r'^(<{7}|={7}|>{7})( |$)',p.read_text(),re.M):conflicts.append(str(p))
assert not conflicts
subprocess.run(['git','diff','--check'],check=True)
result={'checkedAt':datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=9))).isoformat(),'head':b['head'],'baselineFiles':len(b['files']),'unchangedBaselineFiles':len(b['files'])-len(changed),'expectedChanges':changed,'unexpectedChanges':unexpected,'otherPdfEditionsPreserved':len(b['pdfEditions'])*2,'publicAssets':assets,'originalSourceHashes':sources,'conflictMarkers':conflicts,'pdfEditions':pdfs['057'],'gitStatus':subprocess.check_output(['git','status','--short'],text=True)}
Path('coordination/catalog-057/validation-stage2/preservation.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({k:result[k] for k in ['baselineFiles','unchangedBaselineFiles','unexpectedChanges','otherPdfEditionsPreserved','conflictMarkers']}))
