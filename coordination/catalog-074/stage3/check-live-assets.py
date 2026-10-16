from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import subprocess,hashlib,json,datetime
root=Path.cwd();out=root/'coordination/catalog-074/stage3';candidate=Path('/private/tmp/catalog-074-release');base='https://masataka123.github.io/OpenAI-Math-Digest/'
paths=[]
for lang in ['ja','en']:
 for route in ['catalog/074/','papers/kakeya-maximal-three/','papers/kakeya-hausdorff-four/','fields/real-complex-analysis/']:
  paths.append((lang+'/'+route,candidate/'dist'/lang/route/'index.html'))
paths += [(str(p.relative_to(root/'public')),p) for p in (root/'public/diagrams/catalog-074').rglob('*') if p.is_file()]
paths += [('pdf/catalog-074-'+lang+'.pdf',root/'public/pdf'/('catalog-074-'+lang+'.pdf')) for lang in ['ja','en']]
def check(pair):
 route,expected=pair
 body=subprocess.check_output(['curl','--fail','--silent','--show-error','--location',base+route])
 a=hashlib.sha256(body).hexdigest();b=hashlib.sha256(expected.read_bytes()).hexdigest()
 return {'url':base+route,'bytes':len(body),'sha256':a,'expectedSha256':b,'matches':a==b}
with ThreadPoolExecutor(max_workers=6) as ex:results=list(ex.map(check,paths))
(out/'live-assets.json').write_text(json.dumps({'checkedAt':datetime.datetime.now().astimezone().isoformat(),'checks':results},indent=2)+'\n')
print('Verified',len(results),'live pages/assets; exact matches',sum(x['matches'] for x in results))
assert all(x['matches'] for x in results),[x['url'] for x in results if not x['matches']]
