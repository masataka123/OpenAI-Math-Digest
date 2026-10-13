from pathlib import Path
import json,subprocess,hashlib
out=Path('coordination/catalog-067/stage3');d=json.loads((out/'candidate.json').read_text());assert subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip()==d['head'];assert not subprocess.check_output(['git','diff','--cached','--name-only'])
files=sorted(set(d['files']+['coordination/catalog-067/PUBLICATION.md']+[str(p) for p in out.iterdir() if p.is_file()]))
for f in d['files']:
 if f.startswith(('drafts/','public/','src/','scripts/')):assert Path(f).read_bytes()==(Path(d['candidate'])/f).read_bytes(),f
subprocess.run(['git','add','--',*files],check=True)
staged=subprocess.check_output(['git','diff','--cached','--name-only','-z']).decode().strip('\0').split('\0');assert set(staged)==set(files)
assert all(f.startswith(('coordination/catalog-067/','drafts/catalog-067/','public/diagrams/catalog-067/')) or f in ['public/pdf/catalog-067-ja.pdf','public/pdf/catalog-067-en.pdf','src/data/site.mjs','src/data/pdf-editions.json','scripts/catalog-033.test.mjs','scripts/catalog-063.test.mjs'] for f in staged)
subprocess.run(['git','commit','-m','Publish catalog 067 on the Campana-Peternell conjecture in dimension six'],check=True,stdout=subprocess.PIPE)
sha=subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip();(out/'publication-commit.txt').write_text(sha+'\n');(out/'commit-scope.json').write_text(json.dumps({'commit':sha,'files':staged},indent=2)+'\n');print(json.dumps({'commit':sha,'files':len(staged)}))
