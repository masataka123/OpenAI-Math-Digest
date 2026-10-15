from pathlib import Path
import subprocess,json
out=Path('coordination/catalog-039/stage3');sha=(out/'publication-commit.txt').read_text().strip()
base='https://api.github.com/repos/masataka123/OpenAI-Math-Digest'
def get(url):
 return json.loads(subprocess.check_output(['curl','-fsSL','--max-time','30','-H','Accept: application/vnd.github+json',url]))
data=get(base+'/actions/runs?head_sha='+sha+'&per_page=10');(out/'actions-runs.json').write_text(json.dumps(data,indent=2)+'\n')
for run in data['workflow_runs']:
 info={k:run.get(k) for k in ['id','head_sha','status','conclusion','html_url']}
 jobs=get(base+f"/actions/runs/{run['id']}/jobs");(out/'actions-jobs.json').write_text(json.dumps(jobs,indent=2)+'\n')
 info['jobs']=[{**{k:j.get(k) for k in ['name','status','conclusion']},'activeSteps':[s['name'] for s in j.get('steps',[]) if s['status']=='in_progress'],'failedSteps':[s['name'] for s in j.get('steps',[]) if s.get('conclusion')=='failure']} for j in jobs['jobs']];print(json.dumps(info))
