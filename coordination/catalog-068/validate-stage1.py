from pathlib import Path
import json,hashlib,re
from html.parser import HTMLParser
from urllib.parse import unquote,urlsplit
root=Path.cwd();out=Path('coordination/catalog-068');inv=json.loads((out/'inventory.json').read_text());issues=[];stats=[]
hash=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
for m in inv['manuscripts']:
 if hash(Path(m['localSource']))!=m['sha256']:issues.append('source hash '+m['paperId'])
 p=Path(m['draftDirectory']);s=json.loads((p/'sources.json').read_text())
 if s['sha256']!=m['sha256']:issues.append('record hash '+m['paperId'])
 if s['title']!=m['title']:issues.append('title '+m['paperId']+': '+s['title'])
for p in [Path(m['draftDirectory']) for m in inv['manuscripts']]+[Path('drafts/catalog-068/overview')]:
 d=p/'diagrams';manifest=json.loads((d/'citation-build.json').read_text())
 expected={'render.py','preamble.tex','citations.ja.tex','citations.en.tex'}
 for t in d.glob('*.tikz'):
  expected.add(t.name)
  for lang in ['ja','en']:
   for ext in ['tex','svg']:expected.add(f'{t.stem}.{lang}.{ext}')
 if set(manifest)!=expected:issues.append('manifest names '+str(d))
 for f,h in manifest.items():
  if hash(d/f)!=h:issues.append('manifest hash '+str(d/f))
 stats.append({'paper':p.name,'bilingualDiagramPairs':len(list(d.glob('*.tikz'))),'manifest':'OK'})
for f,h in json.loads((out/'preexisting-hashes.json').read_text()).items():
 if hash(Path(f))!=h:issues.append('preexisting changed '+f)
class Doc(HTMLParser):
 def __init__(self,text):super().__init__();self.ids=set();self.links=[];self.feed(text)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.add(a['id'])
  if tag=='a' and 'href' in a:self.links.append(a['href'])
docs={p.name:Doc(p.read_text()) for p in (out/'preview').glob('*.html')}
for name,doc in docs.items():
 for href in doc.links:
  u=urlsplit(href)
  if u.scheme or u.netloc:continue
  if u.path.startswith('/'):
   issues.append('unmapped internal preview link '+name+' '+href);continue
  target=(out/'preview'/unquote(u.path)).resolve() if u.path else (out/'preview'/name).resolve()
  if not target.is_file():issues.append('missing target '+name+' '+href)
  elif u.fragment and target.suffix=='.html':
   dest=docs.get(target.name)
   if dest and unquote(u.fragment) not in dest.ids:issues.append('missing anchor '+name+' '+href)
report=dict(checkedOn='2026-10-12',sourceHashes=7,preexistingPreserved=not any('preexisting changed' in x for x in issues),previewPages=len(docs),diagrams=stats,issues=sorted(set(issues)))
(out/'stage1-validation.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');print(json.dumps(report,ensure_ascii=False,indent=2))
