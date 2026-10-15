from pathlib import Path
import json,subprocess,hashlib
out=Path('coordination/catalog-039/stage3');result=json.loads((out/'completion.json').read_text());assert result['state']=='published and verified'
assert subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip()==result['publicationCommit']
assert not subprocess.check_output(['git','diff','--cached','--name-only'])
before=json.loads((out/'precommit-working-hashes.json').read_text())
assert all(Path(f).is_file() and hashlib.sha256(Path(f).read_bytes()).hexdigest()==h for f,h in before.items())
files=['coordination/catalog-039/'+f for f in ['PUBLICATION.md','README.md','RELEASE_CHECKLIST.md','STAGE3_HANDOFF.md','SITE_HQ_HANDOFF.md']]+[str(p) for p in out.iterdir() if p.is_file()]
subprocess.run(['git','add','--',*files],check=True)
staged=subprocess.check_output(['git','diff','--cached','--name-only'],text=True).splitlines();assert staged and all(f in files for f in staged)
subprocess.run(['git','diff','--cached','--check'],check=True)
subprocess.run(['git','commit','-m','Record verified catalog 039 publication [skip ci]'],check=True,stdout=subprocess.PIPE)
print(subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip())
