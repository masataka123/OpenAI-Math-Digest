"""Compare deployed files with the isolated release build; no page modification."""
from pathlib import Path
import concurrent.futures, datetime, hashlib, json, subprocess, tempfile
ROOT=Path(__file__).resolve().parent
DIST=Path('/private/tmp/catalog338-release/dist')
BASE='https://masataka123.github.io/OpenAI-Math-Digest/'
routes=[f'{lang}/{tail}' for lang in ['ja','en'] for tail in ['', 'fields/differential-geometry/', 'catalog/338/', 'papers/yau-uniformization/']]
routes += [str(p.relative_to(DIST)) for p in sorted((DIST/'diagrams/catalog-338/yau-uniformization').glob('*')) if p.suffix in ['.svg','.tex']]
routes += ['pdf/catalog-338-ja.pdf','pdf/catalog-338-en.pdf']
def check(rel):
    local=DIST/(rel+'index.html' if rel.endswith('/') else rel)
    with tempfile.NamedTemporaryFile() as tmp:
        response=subprocess.check_output(['curl','-fLsS','--retry','2','--max-time','60','-w','%{http_code}','-o',tmp.name,BASE+rel],text=True)
        data=Path(tmp.name).read_bytes()
    expected=hashlib.sha256(local.read_bytes()).hexdigest()
    actual=hashlib.sha256(data).hexdigest()
    assert actual==expected, f'{rel}: published bytes differ'
    return {'url':BASE+rel,'status':int(response),'bytes':len(data),'sha256':actual,'matchesRelease':True}
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
    results=list(pool.map(check,routes))
(ROOT/'evidence/stage3-public-assets.json').write_text(json.dumps({'checkedAt':datetime.datetime.now().astimezone().isoformat(),'releaseCommit':'6ff1d4b61e2b473a0946457d157fb1234080cf9c','files':results},ensure_ascii=False,indent=2)+'\n')
print(f'{len(results)} published files: HTTP 200 and SHA-256 match release build')
