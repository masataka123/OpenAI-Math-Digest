from pathlib import Path
import json,subprocess,hashlib
b=Path('coordination/catalog-357/stage3');start=json.loads((b/'RELEASE_BASE.json').read_text())
assert subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip()==start['head']
assert not subprocess.check_output(['git','diff','--cached','--name-only']).strip(), 'Existing staged changes'
assert 'ℹ pass 39' in (b/'logs/snapshot-tests.log').read_text()
assert 'ℹ fail 0' in (b/'logs/snapshot-tests.log').read_text()
assert '286 files' in (b/'logs/snapshot-citations.log').read_text()
assert '215 HTML pages' in (b/'logs/snapshot-links.log').read_text()
assert len((b/'logs/snapshot-pdfs.log').read_text().splitlines())==52
paths=set(json.loads((b/'publication-files.json').read_text()))
paths.update(str(p) for p in (b/'logs').glob('snapshot-*.log'))
paths.update(str(b/n) for n in ['stage-release.py','check-actions.py','check-live-assets.py','publication-files.json'])
for f in paths:
 assert f.startswith(('drafts/catalog-357/','coordination/catalog-357/','public/diagrams/catalog-357/')) or f in ['public/pdf/catalog-357-ja.pdf','public/pdf/catalog-357-en.pdf'],f
 assert Path(f).is_file(),f
subprocess.run(['git','add','--',*sorted(paths)],check=True)
for source,target in [('site.for-commit.mjs','src/data/site.mjs'),('pdf-editions.for-commit.json','src/data/pdf-editions.json')]:
 blob=subprocess.check_output(['git','hash-object','-w',str(b/source)],text=True).strip()
 subprocess.run(['git','update-index','--add','--cacheinfo','100644',blob,target],check=True)
actual=set(subprocess.check_output(['git','diff','--cached','--name-only','-z']).decode().strip('\0').split('\0'))
assert actual==paths|{'src/data/site.mjs','src/data/pdf-editions.json'}
subprocess.run(['git','diff','--cached','--check','--','.',':(exclude)*.log',':(exclude)*.pdf',':(exclude)*.diff'],check=True)
# Worktree files (including 356 and unrelated changes) must remain byte-identical.
base=json.loads((b/'working-files-baseline.json').read_text())
assert all(hashlib.sha256(Path(f).read_bytes()).hexdigest()==h for f,h in base.items())
(b/'staged-audit.json').write_text(json.dumps({'files':sorted(actual),'count':len(actual),'worktreeSharedFilesUnchanged':True,'onlyCatalog357Staged':True},indent=2)+'\n')
print('Staged',len(actual),'files for catalog 357; shared worktree files preserved')
