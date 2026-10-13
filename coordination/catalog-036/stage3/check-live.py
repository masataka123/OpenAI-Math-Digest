from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import subprocess,hashlib,json,datetime
root=Path('/private/tmp/catalog036-publication');out=Path('coordination/catalog-036/stage3')
base='https://masataka123.github.io/OpenAI-Math-Digest/'
paths=[f'{lang}/catalog/036/index.html' for lang in ['ja','en']]+[f'{lang}/papers/{paper}/index.html' for lang in ['ja','en'] for paper in [m['paperId'] for m in json.loads(Path('coordination/catalog-036/inventory.json').read_text())['manuscripts']]]
paths += [str(p.relative_to(root/'public')) for p in (root/'public/diagrams/catalog-036').rglob('*') if p.is_file()]
paths += ['pdf/catalog-036-ja.pdf','pdf/catalog-036-en.pdf']
def check(p):
 url=base+(p[:-10] if p.endswith('index.html') else p)
 raw=subprocess.check_output(['curl','-fsSL','--max-time','60','-w','\nHTTP_STATUS:%{http_code}',url])
 data,code=raw.rsplit(b'\nHTTP_STATUS:',1);status=int(code)
 local=(root/'dist'/p).read_bytes()
 return {'path':p,'url':url,'status':status,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'matchesRelease':hashlib.sha256(data).digest()==hashlib.sha256(local).digest()}
with ThreadPoolExecutor(max_workers=6) as pool:results=list(pool.map(check,paths))
report={'checkedAt':datetime.datetime.now().astimezone().isoformat(),'resources':results}
(out/'live-resources.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'resources':len(results),'matching':sum(x['matchesRelease'] for x in results),'mismatches':[x['path'] for x in results if not x['matchesRelease']]}))
assert all(x['status']==200 and x['matchesRelease'] for x in results)
