from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import urllib.request,json,hashlib,sys,datetime,ssl
ssl_context=ssl.create_default_context(cafile='/etc/ssl/cert.pem')
base='https://masataka123.github.io/OpenAI-Math-Digest/'
snapshot=Path(sys.argv[1]);commit=sys.argv[2]
ids=['anticanonical-smooth-semipositivity', 'invariant-anticanonical-indices', 'bounded-anticanonical-metrics', 'cohomological-transfer', 'metric-descent-contractions', 'integrable-metrics-controlled-boundary', 'exact-orders-anticanonical']
items=[]
for lang in ['ja','en']:
 for route in ['', 'fields/algebraic-complex-geometry/','catalog/068/']+['papers/'+x+'/' for x in ids]:
  rel=lang+'/'+route;items.append((rel, snapshot/'dist'/rel/'index.html'))
for file in sorted((snapshot/'public/diagrams/catalog-068').rglob('*')):
 if file.is_file():items.append((str(file.relative_to(snapshot/'public')),file))
for lang in ['ja','en']:items.append((f'pdf/catalog-068-{lang}.pdf',snapshot/f'public/pdf/catalog-068-{lang}.pdf'))
def one(item):
 rel,file=item;url=base+rel;expected=hashlib.sha256(file.read_bytes()).hexdigest()
 try:
  with urllib.request.urlopen(urllib.request.Request(url+'?release='+commit,headers={'Cache-Control':'no-cache','User-Agent':'OpenAI-Math-Digest-publication-check'}),timeout=40,context=ssl_context) as response:
   data=response.read();status=response.status;mime=response.headers.get('Content-Type')
  actual=hashlib.sha256(data).hexdigest()
  return {'url':url,'status':status,'contentType':mime,'bytes':len(data),'sha256':actual,'expectedSha256':expected,'matches':actual==expected}
 except Exception as e:return {'url':url,'matches':False,'error':str(e)}
with ThreadPoolExecutor(max_workers=6) as pool:results=list(pool.map(one,items))
report={'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'commit':commit,'resources':results}
Path('coordination/catalog-068/validation-stage3/live-resources.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
bad=[x for x in results if not x['matches']];print(json.dumps({'total':len(results),'matched':len(results)-len(bad),'failures':bad},ensure_ascii=False));assert not bad
