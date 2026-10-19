"""Read-only local file/fragment checks for the isolated stage-1 previews."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit,unquote
import json
ROOT=Path.cwd()
OUT=ROOT/'coordination/catalog-357/validation'
class Page(HTMLParser):
 def __init__(self):
  super().__init__();self.links=[];self.ids=set()
 def handle_starttag(self,tag,attrs):
  d=dict(attrs)
  if 'id' in d:self.ids.add(d['id'])
  for a in ('src','href'):
   if a in d:self.links.append((tag,a,d[a]))
def read(p):
 x=Page();x.feed(p.read_text());return x
cache={}
results=[]
for p in sorted((OUT/'preview').glob('*.html')):
 if p.name.split('.')[0] not in ('overview','regular-rcd-coordinates'):continue
 doc=read(p); failures=[]; checked=0; external=0
 for tag,attr,url in doc.links:
  u=urlsplit(url)
  if u.scheme in ('http','https','mailto','data'):external+=1;continue
  if u.scheme not in ('','file'):continue
  target=Path(unquote(u.path)) if u.scheme=='file' else (p.parent/unquote(u.path)).resolve() if u.path else p
  if target.is_dir():target=target/'index.html'
  checked+=1
  if not target.exists():failures.append({'url':url,'problem':'missing local target'});continue
  if u.fragment and target.suffix in ('.html','.svg'):
   if target not in cache:cache[target]=read(target)
   if unquote(u.fragment) not in cache[target].ids:failures.append({'url':url,'problem':'missing fragment'})
 results.append({'file':str(p.relative_to(ROOT)),'checkedLocalReferences':checked,'externalReferencesNotFetched':external,'failures':failures})
(OUT/'preview-link-checks.json').write_text(json.dumps(results,indent=2,ensure_ascii=False)+'\n')
print(json.dumps(results,indent=2,ensure_ascii=False))
if any(x['failures'] for x in results):raise SystemExit(1)
