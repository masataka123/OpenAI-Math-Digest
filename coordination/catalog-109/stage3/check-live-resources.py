from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import urllib.request, ssl, hashlib,json,datetime
root=Path(__file__).resolve().parents[3]
out=Path(__file__).parent
scope=json.loads((out/'commit-scope.json').read_text()); candidate=Path(scope['candidateDirectory'])
sha=(out/'publication-commit.txt').read_text().strip()
base='https://masataka123.github.io/OpenAI-Math-Digest/'
routes=[f'{lang}/{route}' for lang in ['ja','en'] for route in ['', 'fields/theoretical-computer-science/', 'catalog/109/', 'papers/integer-multiplication-below-n-log-n/']]
files=[(route,candidate/'dist'/route/'index.html','text/html') for route in routes]
files += [(str(p.relative_to(candidate/'public')),p,'image/svg+xml' if p.suffix=='.svg' else 'text/') for p in sorted((candidate/'public/diagrams/catalog-109').rglob('*')) if p.is_file()]
files += [(f'pdf/catalog-109-{lang}.pdf',candidate/f'public/pdf/catalog-109-{lang}.pdf','application/pdf') for lang in ['ja','en']]
context=ssl.create_default_context(cafile='/etc/ssl/cert.pem')
def check(item):
 route,local,mime=item;result={'route':route,'url':base+route,'expectedSha256':hashlib.sha256(local.read_bytes()).hexdigest()}
 try:
  request=urllib.request.Request(base+route+'?release='+sha,headers={'Cache-Control':'no-cache','User-Agent':'OpenAI-Math-Digest-publication-check'})
  with urllib.request.urlopen(request,context=context,timeout=40) as res:
   data=res.read();result.update(status=res.status,contentType=res.headers.get('Content-Type',''),sha256=hashlib.sha256(data).hexdigest(),bytes=len(data))
  result['ok']=result['status']==200 and result['sha256']==result['expectedSha256'] and (result['contentType'].startswith(mime) or (route.endswith('.tex') and result['contentType']=='application/x-tex'))
 except Exception as e:result.update(ok=False,error=str(e))
 return result
with ThreadPoolExecutor(max_workers=6) as pool:results=list(pool.map(check,files))
report={'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'publicationCommit':sha,'resources':results,'passed':all(x['ok'] for x in results)}
(out/'live-resources.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'passed':report['passed'],'total':len(results),'failures':[x for x in results if not x['ok']]},ensure_ascii=False))
raise SystemExit(0 if report['passed'] else 1)
