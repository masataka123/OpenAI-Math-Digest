from pathlib import Path
from urllib.request import Request,urlopen
from concurrent.futures import ThreadPoolExecutor
import json,hashlib,re,datetime
root=Path(__file__).resolve().parent
release=Path('/private/tmp/math-digest-087-release')
base='https://masataka123.github.io/OpenAI-Math-Digest/'
files=[p.relative_to(release/'public').as_posix() for p in (release/'public/diagrams/catalog-087').rglob('*') if p.is_file()]
files+=['pdf/catalog-087-ja.pdf','pdf/catalog-087-en.pdf']
files += [f'{lang}/{route}/index.html' for lang in ['ja','en'] for route in ['catalog/087','papers/symmetric-mahler','papers/general-mahler','papers/symplectic-polar-products']]
def check(f):
 url=base+(f[:-10] if f.endswith('index.html') else f)
 with urlopen(Request(url,headers={'User-Agent':'OpenAI-Math-Digest-publication-check','Cache-Control':'no-cache'}),timeout=40) as resp:
  data=resp.read();status=resp.status
 expected=(release/('dist' if f.endswith('.html') else 'public')/f).read_bytes()
 digest=lambda x:hashlib.sha256(x).hexdigest()
 result={'path':f,'url':url,'status':status,'sha256':digest(data),'expectedSha256':digest(expected),'matches':data==expected}
 if f.endswith('.html'):
  main=lambda x:re.search(rb'<main\b.*?</main>',x,re.S).group()
  result['mainMatches']=main(data)==main(expected)
  d=root/'public-html'/f;d.parent.mkdir(parents=True,exist_ok=True);d.write_bytes(data)
 return result
with ThreadPoolExecutor(max_workers=6) as pool:results=list(pool.map(check,files))
failures=[x for x in results if x['status']!=200 or not x.get('mainMatches',x['matches'])]
out={'checkedAt':datetime.datetime.now().astimezone().isoformat(),'results':results,'failures':failures}
(root/'public-resource-checks.json').write_text(json.dumps(out,indent=2)+'\n')
print(json.dumps({'resources':len(results),'failures':failures},indent=2))
