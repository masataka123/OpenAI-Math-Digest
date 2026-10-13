"""Stage-1 checks only: no public asset copy, site registration or booklet generation."""
from pathlib import Path
from html.parser import HTMLParser
import json,hashlib,xml.etree.ElementTree as ET,subprocess,os
repo=Path(__file__).resolve().parents[2];os.chdir(repo);root=Path('coordination/catalog-052')
node='/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node'
p=subprocess.run([node,'scripts/sync-citations.mjs','--check','--text-only','--catalog','052'],capture_output=True,text=True,check=True);(root/'citation-check.log').write_text(p.stdout)
reports=[]
for reg in Path('drafts/catalog-052').glob('*/citations.json'):
 d=reg.parent/'diagrams';m=json.loads((d/'citation-build.json').read_text());bad=[n for n,h in m.items() if hashlib.sha256((d/n).read_bytes()).hexdigest()!=h];svgs=[]
 for p in sorted(d.glob('*.svg')):
  r=ET.parse(p).getroot();links=[e.get('{http://www.w3.org/1999/xlink}href') or e.get('href') for e in r.iter() if e.tag.endswith('}a')];svgs.append(dict(file=p.name,linkCount=len(links),invalid=[u for u in links if not u or not u.startswith('https://') or ('github.com' in u and '#page=' in u)]))
 reports.append(dict(registry=str(reg),hashedFiles=len(m),hashMismatches=bad,svgs=svgs))
(root/'diagram-checks.json').write_text(json.dumps(reports,indent=2)+'\n')
assert not any(r['hashMismatches'] for r in reports)
assert not any(s['invalid'] for r in reports for s in r['svgs'])
class Doc(HTMLParser):
 def __init__(self):super().__init__();self.ids=set();self.links=[]
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.add(a['id'])
  if t=='a' and 'href' in a:self.links.append(a['href'])
docs={}
for p in (root/'preview').glob('*.html'):
 d=Doc();d.feed(p.read_text());docs[p.name]=d
bad=[];checked=0;external=0
for file,d in docs.items():
 for url in d.links:
  if url.startswith('https://'):external+=1;continue
  if url.startswith('#'):
   checked+=1
   if url[1:] not in d.ids:bad.append([file,url,'missing anchor'])
  elif '.html' in url:
   target,_,anchor=url.partition('#');checked+=1
   if target not in docs:bad.append([file,url,'missing page'])
   elif anchor and anchor not in docs[target].ids:bad.append([file,url,'missing target anchor'])
  elif url.startswith('../../../drafts/'):
   checked+=1
   if not (root/'preview'/url).exists():bad.append([file,url,'missing asset'])
  elif url.startswith('/') and '/papers/' in url:bad.append([file,url,'unrewritten route'])
(root/'link-checks.json').write_text(json.dumps(dict(localChecked=checked,externalLinks=external,errors=bad,scope='Local page/anchor/TeX/SVG targets; no claim of HTTP checking every external reference'),ensure_ascii=False,indent=2)+'\n');assert not bad,bad
preview=json.loads((root/'preview-checks.json').read_text());assert len(preview)==6
assert not any(p['mathErrors'] or p['missingAnchors'] for p in preview)
inv=json.loads((root/'inventory.json').read_text());pres=json.loads(Path('drafts/catalog-052/overview/presentation.json').read_text());assert [r['paperId'] for r in pres['rows']]==[r['paperId'] for r in inv['manuscripts']]
for p in inv['manuscripts']:
 source=root/'source'/(p['paperId']+'.pdf');assert hashlib.sha256(source.read_bytes()).hexdigest()==p['sha256']
print(f'PASS: {len(reports)} registries; {sum(len(r["svgs"]) for r in reports)} SVGs; {checked} local links; 6 bilingual HTML pages; source hashes and official order.')
