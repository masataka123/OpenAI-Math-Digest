from pathlib import Path
import concurrent.futures,hashlib,json,subprocess,datetime
root=Path.cwd();out=root/'coordination/catalog-356/stage3';base='https://masataka123.github.io/OpenAI-Math-Digest/'
assets=[p for p in json.loads((out/'files.json').read_text()) if p.startswith('public/')]
pages=[f'{lang}/{route}' for lang in ['ja','en'] for route in ['','fields/differential-geometry/','catalog/356/','papers/gigli-characterization/','papers/weak-hessian-geodesics/']]
def check(item):
 kind,route=item;url=base+route
 data=subprocess.check_output(['curl','--fail','--silent','--show-error','--location','--max-time','60',url])
 result={'url':url,'status':200,'bytes':len(data)}
 if kind=='asset':
  result['sha256']=hashlib.sha256(data).hexdigest();result['matchesRelease']=data==(root/'public'/route).read_bytes();assert result['matchesRelease'],url
 else:
  html=data.decode();assert 'OpenAI' in html and 'Math Digest' in html,url
  if '/catalog/356/' in url:
   lang=route.split('/')[0];assert f'catalog-356-{lang}.pdf' in html and 'gigli-characterization' in html and 'weak-hessian-geodesics' in html,url
  if '/papers/' in url:assert 'proof-overview' in html and 'diagram-sources' in html and 'sources' in html,url
  if '/fields/' in url:assert '/catalog/356/' in html,url
  result['mathErrors']=html.count('data-mjx-error=');assert result['mathErrors']==0,url
 return result
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:results=list(pool.map(check,[('asset',p.removeprefix('public/')) for p in assets]+[('page',p) for p in pages]))
(out/'public-check.json').write_text(json.dumps({'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'releaseCommit':(out/'release-commit.txt').read_text().strip(),'results':results},ensure_ascii=False,indent=2)+'\n')
print(f'Public checks passed: {len(assets)} exact assets and {len(pages)} pages')
