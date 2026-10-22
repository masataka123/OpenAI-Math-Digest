from pathlib import Path
import subprocess,json,os,tempfile,datetime
root=Path.cwd();out=root/'coordination/catalog-109/stage3';scope=json.loads((out/'commit-scope.json').read_text());base=scope['baseCommit'];original=(out/'publication-commit.txt').read_text().strip()
def git(*args,env=None,input=None):
 return subprocess.check_output(['git',*args],env=env,input=input)
assert git('rev-parse','HEAD').decode().strip()==original
assert git('write-tree').decode().strip()==git('rev-parse',original+'^{tree}').decode().strip()
paths=[p.decode() for p in git('diff','--name-only','-z',base,original).split(b'\0') if p]
core=[p for p in paths if p.startswith(('src/','drafts/','public/')) or (p.startswith('coordination/catalog-109/') and p.count('/')==2) or p in ['coordination/catalog-109/review/content-manifest.json','coordination/catalog-109/sources/HvH21-hal-v2.json','coordination/catalog-109/sources/retrieval.json']]
remaining=[p for p in paths if p not in core];batches=[core];batch=[];size=0
for p in remaining:
 n=(root/p).stat().st_size
 if batch and size+n>6*1024*1024:batches.append(batch);batch=[];size=0
 batch.append(p);size+=n
if batch:batches.append(batch)
entries={}
for entry in git('ls-tree','-r','-z',original).split(b'\0'):
 if not entry:continue
 meta,p=entry.split(b'\t',1);mode,kind,sha=meta.split();entries[p.decode()]=(mode,sha)
fd,index=tempfile.mkstemp(prefix='catalog109-index-',dir='/private/tmp');os.close(fd);os.unlink(index)
env=os.environ.copy();env['GIT_INDEX_FILE']=index;git('read-tree',base,env=env)
report={'createdAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'originalUnpublishedCommit':original,'baseCommit':base,'reason':'Large 54.47 MiB pushes failed with HTTP 408/400. Split the same unpublished tree into normal fast-forward pushes.','batches':[]}
parent=base;local=original
try:
 for i,paths in enumerate(batches):
  updates=b''.join(entries[p][0]+b' '+entries[p][1]+b'\t'+p.encode()+b'\0' for p in paths)
  git('update-index','-z','--index-info',env=env,input=updates);tree=git('write-tree',env=env).decode().strip()
  message='Publish catalogue 109 on integer multiplication below n log n' if i==0 else f'Preserve catalogue 109 verification records {i}/{len(batches)-1} [skip ci]'
  commit=git('commit-tree',tree,'-p',parent,input=(message+'\n').encode()).decode().strip()
  git('update-ref','refs/heads/main',commit,local);local=commit
  item={'batch':i,'commit':commit,'files':paths,'rawBytes':sum((root/p).stat().st_size for p in paths)};report['batches'].append(item)
  (out/'batched-pushes.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
  with (out/f'push-batch-{i:02d}.log').open('wb') as log:
   result=subprocess.run(['git','-c','http.version=HTTP/1.1','push','origin','main'],stdout=log,stderr=subprocess.STDOUT)
  item['pushExitCode']=result.returncode;(out/'batched-pushes.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
  print(json.dumps({'batch':i,'total':len(batches),'commit':commit,'exitCode':result.returncode}),flush=True)
  if result.returncode:raise SystemExit(result.returncode)
  if i==0:(out/'publication-commit.txt').write_text(commit+'\n')
  parent=commit
 assert git('rev-parse','HEAD^{tree}').strip()==git('rev-parse',original+'^{tree}').strip()
 report['finalTreeIdentical']=True;report['complete']=True
 (out/'batched-pushes.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
finally:
 Path(index).unlink(missing_ok=True)
