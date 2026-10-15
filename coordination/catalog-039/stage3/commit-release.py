from pathlib import Path
import json,subprocess,hashlib
out=Path('coordination/catalog-039/stage3');d=json.loads((out/'candidate.json').read_text());assert subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip()==d['head']
assert 'fail 0' in (out/'tests.log').read_text()
assert 'Citations checked: 47' in (out/'citations.log').read_text()
assert '[build] Complete!' in (out/'build.log').read_text()
assert 'Checked 159867 internal links/assets across 135 HTML pages' in (out/'links.log').read_text()
assert 'verified' in (out/'pdf-check.log').read_text().lower() or 'current' in (out/'pdf-check.log').read_text().lower()
files=sorted(set(d['files']+['coordination/catalog-039/PUBLICATION.md']+[str(p) for p in out.iterdir() if p.is_file()]))
for f in d['files']:
 if f.startswith(('drafts/','public/','src/','scripts/')):assert Path(f).read_bytes()==(Path(d['candidate'])/f).read_bytes(),f
subprocess.run(['git','add','--',*files],check=True)
staged=subprocess.check_output(['git','diff','--cached','--name-only','-z']).decode().strip('\0').split('\0');assert set(staged)==set(files)
assert all(f.startswith(('coordination/catalog-039/','drafts/catalog-039/','public/diagrams/catalog-039/')) or f in ['public/pdf/catalog-039-ja.pdf','public/pdf/catalog-039-en.pdf','src/data/site.mjs','src/data/pdf-editions.json','scripts/catalog-033.test.mjs','scripts/catalog-063.test.mjs'] for f in staged)
subprocess.run(['git','diff','--cached','--check'],check=True)
subprocess.run(['git','commit','-m','Publish catalog 039 on Nagata conjecture and maximal Seshadri constants'],check=True,stdout=subprocess.PIPE)
sha=subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip();(out/'publication-commit.txt').write_text(sha+'\n');(out/'commit-scope.json').write_text(json.dumps({'commit':sha,'files':staged},indent=2)+'\n');print(json.dumps({'commit':sha,'files':len(staged)}))
