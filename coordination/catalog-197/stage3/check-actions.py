import json,subprocess,time
from pathlib import Path
sha='5f9ec8ad432ebcd3745af185c523d83ca390b581'
base='https://api.github.com/repos/masataka123/OpenAI-Math-Digest/actions'
def get(url):return json.loads(subprocess.check_output(['curl','--fail','--silent','--show-error','--location','-H','Accept: application/vnd.github+json',url]))
data=get(base+'/runs?head_sha='+sha+'&_check='+str(int(time.time())))
rows=data.get('workflow_runs',[])
Path('coordination/catalog-197/stage3/actions-runs.json').write_text(json.dumps(data,indent=2)+'\n')
for r in rows:
 print(json.dumps({k:r.get(k) for k in ['id','head_sha','status','conclusion','html_url']},ensure_ascii=False))
 if r['status']=='completed':
  jobs=get(base+'/runs/'+str(r['id'])+'/jobs')
  Path('coordination/catalog-197/stage3/actions-jobs.json').write_text(json.dumps(jobs,indent=2)+'\n')
  print(json.dumps([{'id':j['id'],'name':j['name'],'conclusion':j['conclusion']} for j in jobs['jobs']]))
