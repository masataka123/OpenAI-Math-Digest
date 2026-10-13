from pathlib import Path
import json,hashlib,re
r=Path('drafts/catalog-036');c=Path('coordination/catalog-036');errors=[];records=[];hash_count=0
for d in sorted(r.iterdir()):
 if not d.is_dir():continue
 reg=json.loads((d/'citations.json').read_text());texts={l:(d/f'article.{l}.md').read_text() for l in ['ja','en']}
 for tag in ['cite','proof-target','statement']:
  a=[re.sub(r'\s+','',m) for m in re.findall('<!-- '+tag+r':(.*?) -->',texts['ja'])]
  b=[re.sub(r'\s+','',m) for m in re.findall('<!-- '+tag+r':(.*?) -->',texts['en'])]
  if a!=b:errors.append(f'{d.name}: unequal {tag} sequence')
 for l,t in texts.items():
  html=(c/f'validation/preview/{d.name}.{l}.html').read_text();ids=re.findall(r'\bid="([^"]+)"',html);idset=set(ids)
  if len(ids)!=len(idset):errors.append(f'{d.name}.{l}: duplicate HTML ID')
  for a in re.findall(r'\]\(#([^)]*)\)',t):
   if a not in idset:errors.append(f'{d.name}.{l}: missing body anchor {a}')
  for url in re.findall(r'\]\(([^)]+)\)',t):
   if url.startswith('../') and '.md' in url and not (d/url.split('#')[0]).exists():errors.append(f'{d.name}.{l}: missing draft link {url}')
  for f in re.findall(r'\]\((diagrams/[^)]+\.svg)\)',t):
   for ext in ['svg','tex']:
    if not (d/f).with_suffix('.'+ext).is_file():errors.append(f'{d.name}: missing {f} {ext}')
 manifest=json.loads((d/'diagrams/citation-build.json').read_text())
 for file,h in manifest.items():
  got=hashlib.sha256((d/'diagrams'/file).read_bytes()).hexdigest();hash_count+=1
  if got!=h:errors.append(f'{d.name}: stale diagram {file}')
 records.append({'paperId':d.name,'diagramPairs':len(list((d/'diagrams').glob('*.tikz'))),'managedCitations':len(reg['citations']),'proofTargetSequence':re.findall(r'<!-- proof-target:(.*?) -->',texts['ja']),'hasReferenceGuide':'<!-- reference-guide -->' in texts['ja'],'hasReadingList':'<!-- reading-list -->' in texts['ja']})
inv=json.loads((c/'inventory.json').read_text())
for p in inv['manuscripts']:
 if hashlib.sha256(Path(p['localSource']).read_bytes()).hexdigest()!=p['sha256']:errors.append('source hash '+p['paperId'])
report={'scope':'Catalog036 Stage1 only. No public-copy/site-route/booklet PDF assertions.','records':records,'diagramHashesVerified':hash_count,'sourceHashesVerified':4,'errors':errors}
(c/'validation/stage1-checks.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');print(json.dumps(report,ensure_ascii=False,indent=2));raise SystemExit(bool(errors))
