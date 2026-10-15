from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
import json,hashlib,subprocess,datetime
root=Path.cwd();r=root/'coordination/catalog-285/stage3';out=r/'public-downloads';out.mkdir(exist_ok=True)
base='https://masataka123.github.io/OpenAI-Math-Digest/'
candidate=Path((r/'candidate-path.txt').read_text().strip());sha=(r/'release-commit.txt').read_text().strip()
ids=[x['paperId'] for x in json.loads((root/'coordination/catalog-285/inventory.json').read_text())['manuscripts']]
routes=[f'{lang}/{suffix}' for lang in ['ja','en'] for suffix in ['','fields/operator-algebras/','catalog/285/']+[f'papers/{id}/' for id in ids]]
assets=[str(p.relative_to(root/'public')) for p in (root/'public/diagrams/catalog-285').rglob('*') if p.suffix in ['.svg','.tex'] and p.name not in ['preamble.tex','citations.ja.tex','citations.en.tex']]+['pdf/catalog-285-ja.pdf','pdf/catalog-285-en.pdf']
class Main(HTMLParser):
 def __init__(self):super().__init__();self.depth=0;self.text=[];self.h1=[];self.inH1=False;self.links=[];self.ids=[]
 def handle_starttag(self,t,a):
  d=dict(a)
  if t=='main':self.depth+=1
  if t=='h1':self.inH1=True
  if 'id' in d:self.ids.append(d['id'])
  if t=='a' and 'href' in d:self.links.append(d['href'])
 def handle_endtag(self,t):
  if t=='main':self.depth-=1
  if t=='h1':self.inH1=False
 def handle_data(self,s):
  if self.depth:self.text.append(s)
  if self.inH1:self.h1.append(s)
 def normalized(self):return ' '.join(' '.join(self.text).split())
def check(item):
 route,ishtml=item;name=route.replace('/','_') or 'root';p=out/(name+('.html' if ishtml else ''))
 proc=subprocess.run(['curl','-L','--fail','-sS','--max-time','60','-w','%{http_code}',base+route+'?release='+sha,'-o',str(p)],capture_output=True,text=True)
 result={'route':route,'http':proc.stdout.strip(),'ok':proc.returncode==0}
 if proc.returncode:result['error']=proc.stderr;return result
 data=p.read_bytes();result['sha256']=hashlib.sha256(data).hexdigest()
 if ishtml:
  expected=(candidate/'dist'/route/'index.html').read_text();a=Main();a.feed(data.decode());b=Main();b.feed(expected);result.update({'mainTextMatches':a.normalized()==b.normalized(),'h1Matches':a.h1==b.h1,'fullHtmlMatches':data==expected.encode(),'title':' '.join(a.h1)})
  result['ok'] &= result['mainTextMatches'] and result['h1Matches']
  if 'catalog/285/' in route:result['pdfLinked']=any('/pdf/catalog-285-' in v for v in a.links);result['ok'] &= result['pdfLinked']
 else:result['bytes']=len(data);result['matchesLocal']=data==(root/'public'/route).read_bytes();result['ok'] &=result['matchesLocal']
 return result
with ThreadPoolExecutor(max_workers=6) as pool:results=list(pool.map(check,[(x,True) for x in routes]+[(x,False) for x in assets]))
report={'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'releaseCommit':sha,'baseUrl':base,'htmlPages':len(routes),'assets':len(assets),'passed':all(x['ok'] for x in results),'results':results}
(r/'public-verification.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:v for k,v in report.items() if k!='results'},ensure_ascii=False));print(json.dumps([x for x in results if not x['ok']],ensure_ascii=False,indent=2))
raise SystemExit(0 if report['passed'] else 1)
