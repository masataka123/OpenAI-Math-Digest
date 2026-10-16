from pathlib import Path
import subprocess,json,hashlib
out=Path('coordination/catalog-074/stage3');c=json.loads((out/'candidate.json').read_text());files=json.loads((out/'release-files.json').read_text());shared=['src/data/site.mjs','src/data/pdf-editions.json']
def git(*args,**kw):return subprocess.check_output(['git',*args],**kw)
assert git('rev-parse','HEAD',text=True).strip()==c['base'],'HEAD changed; rebase candidate first'
staged=git('diff','--cached','--name-only',text=True).splitlines()
assert not staged or sorted(staged)==sorted(files),'Other staged changes present'
for f in files:
 if f not in shared:assert hashlib.sha256(Path(f).read_bytes()).hexdigest()==c['files'][f],f
if not staged:
 subprocess.run(['git','apply','--cached','--check',str(out/'shared-074.patch')],check=True)
 subprocess.run(['git','apply','--cached',str(out/'shared-074.patch')],check=True)
 subprocess.run(['git','add','--',*[f for f in files if f not in shared]],check=True)
actual=git('diff','--cached','--name-only',text=True).splitlines();assert sorted(actual)==sorted(files),(actual,files)
for f in files:assert hashlib.sha256(git('show',':'+f)).hexdigest()==c['files'][f],f
subprocess.run(['git','diff','--cached','--check','--','.',':!*.pdf',':!*.log'],check=True)
assert git('rev-parse','HEAD',text=True).strip()==c['base']
subprocess.run(['git','commit','-m','Publish Astra catalogue 074 on Kakeya in three and four dimensions'],check=True)
commit=git('rev-parse','HEAD',text=True).strip();(out/'publication-commit.txt').write_text(commit+'\n')
(out/'commit-audit.json').write_text(json.dumps({'commit':commit,'parent':c['base'],'files':actual,'candidateMatchesIndexBeforeCommit':True},indent=2))
print(commit)
