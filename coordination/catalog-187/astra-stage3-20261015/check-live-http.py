from pathlib import Path
import subprocess,json,hashlib,datetime,concurrent.futures
run=Path('coordination/catalog-187/astra-stage3-20261015');out=Path('tmp/catalog-187-release-final');base='https://masataka123.github.io/OpenAI-Math-Digest/'
sha='f837bf8fe6b2e4116ee1b72f47b2949038424b3f'
paths=[f'{l}/{p}/' for l in ['ja','en'] for p in ['catalog/187','papers/snaky-in-21-maker-moves','fields/combinatorics']]
paths += [str(p.relative_to(out/'public')) for p in (out/'public/diagrams/catalog-187').rglob('*') if p.is_file()]
paths += [f'pdf/catalog-187-{l}.pdf' for l in ['ja','en']]
def check(p):
 raw=subprocess.check_output(['curl','-fsSL','--max-time','60','-w','\nHTTP_METADATA:%{http_code}:%{content_type}',base+p+'?v='+sha])
 data,meta=raw.rsplit(b'\nHTTP_METADATA:',1);status,ctype=meta.decode().split(':',1);status=int(status);assert status==200,p
 h=hashlib.sha256(data).hexdigest();expected=out/'public'/p
 d={'path':p,'url':base+p,'status':status,'contentType':ctype,'bytes':len(data),'sha256':h}
 if expected.is_file():
  d['expectedSha256']=hashlib.sha256(expected.read_bytes()).hexdigest();d['matches']=h==d['expectedSha256'];assert d['matches'],p
 else:
  s=data.decode();assert 'Snaky' in s,p
  d['hasSnaky']=True
  (run/'live-html').mkdir(exist_ok=True)
  (run/'live-html'/ (p.strip('/').replace('/','-')+'.html')).write_bytes(data)
 return d
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:results=list(pool.map(check,paths))
report={'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'publicationCommit':sha,'results':results}
(run/'live-http.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print('PASS',len(results),'URLs;',sum('matches' in r for r in results),'exact file hashes')
