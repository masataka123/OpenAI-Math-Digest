"""Read-only HTTP identity check against the scoped, tested publication build."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import subprocess, json, hashlib, time, datetime

root = Path(__file__).resolve().parents[3]
out = root/'coordination/catalog-340/stage3'
candidate = Path(json.loads((out/'release-candidate.json').read_text())['directory'])/'dist'
base = 'https://masataka123.github.io/OpenAI-Math-Digest/'
paths = [f'{lang}/{route}index.html' for lang in ['ja','en'] for route in ['', 'fields/differential-geometry/', 'catalog/340/', 'papers/nearby-lagrangian-counterexample/']]
paths += [str(p.relative_to(candidate)) for p in sorted((candidate/'diagrams/catalog-340').rglob('*')) if p.is_file()]
paths += ['pdf/catalog-340-ja.pdf','pdf/catalog-340-en.pdf']

def inspect(rel):
    url = base+(rel[:-10] if rel.endswith('index.html') else rel)
    result = subprocess.run(['/usr/bin/curl','--location','--silent','--show-error','--compressed','--max-time','40','--write-out','\nHTTPSTATUS:%{http_code}',url],capture_output=True)
    body, _, status = result.stdout.rpartition(b'\nHTTPSTATUS:')
    expected = hashlib.sha256((candidate/rel).read_bytes()).hexdigest()
    actual = hashlib.sha256(body).hexdigest()
    return {'path':rel,'url':url,'httpStatus':status.decode(errors='replace'),'bytes':len(body),'sha256':actual,'expectedSha256':expected,'matched':result.returncode==0 and status==b'200' and actual==expected,'error':result.stderr.decode(errors='replace')}

started = time.monotonic()
with ThreadPoolExecutor(max_workers=8) as pool: results = list(pool.map(inspect, paths))
data = {'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'seconds':round(time.monotonic()-started,2),'contentCommit':json.loads((out/'publication-commit.json').read_text())['contentCommit'],'results':results,'passed':all(x['matched'] for x in results)}
(out/'live-resources.json').write_text(json.dumps(data,indent=2)+'\n')
print(json.dumps({'passed':data['passed'],'resources':len(results),'failed':[x for x in results if not x['matched']]},indent=2))
if not data['passed']: raise SystemExit(1)
