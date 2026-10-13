from pathlib import Path
import subprocess,json,hashlib
r=Path('coordination/catalog-052/stage3');c=json.loads((r/'candidate.json').read_text());base=c['base']
def git(*args,**kw):return subprocess.check_output(['git',*args],**kw).decode().strip()
assert git('branch','--show-current')=='main'
assert git('rev-parse','HEAD')==base,'HEAD changed; rebase the candidate before committing'
assert not git('diff','--cached','--name-only'),'Other staged changes exist'
nonshared=[p for p in c['paths'] if p not in c['sharedPaths']]
for p in nonshared:assert hashlib.sha256(Path(p).read_bytes()).hexdigest()==c['candidateSha256'][p],p
protected={p:hashlib.sha256(Path(p).read_bytes()).hexdigest() for p in git('ls-files').splitlines() if Path(p).is_file()}
protected.update({str(p):hashlib.sha256(p.read_bytes()).hexdigest() for d in ['coordination/catalog-036','drafts/catalog-036','public/diagrams/catalog-036'] for p in Path(d).rglob('*') if p.is_file()})
(r/'precommit-working-hashes.json').write_text(json.dumps(protected,indent=2)+'\n')
subprocess.run(['git','add','--',*nonshared],check=True)
subprocess.run(['git','apply','--cached',str(r/'shared-052.patch')],check=True)
assert git('rev-parse','HEAD')==base
assert sorted(git('diff','--cached','--name-only').splitlines())==sorted(c['paths'])
subprocess.run(['git','diff','--cached','--check','--','.',':!*.log'],check=True)
for p in c['sharedPaths']:
 data=subprocess.check_output(['git','show',':'+p]);assert hashlib.sha256(data).hexdigest()==c['candidateSha256'][p],p
subprocess.run(['git','commit','-m','Publish catalog 052 on tangent splittings and universal covers'],check=True)
commit=git('rev-parse','HEAD');(r/'publication-commit.txt').write_text(commit+'\n')
assert all(hashlib.sha256(Path(p).read_bytes()).hexdigest()==h for p,h in protected.items()),'Working files changed unexpectedly'
print('Publication commit:',commit)
