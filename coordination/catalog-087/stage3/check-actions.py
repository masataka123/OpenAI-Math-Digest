from urllib.request import Request,urlopen
from pathlib import Path
import json
r=Path(__file__).resolve().parent
sha=json.load(open(r/('deployment-commit.json' if (r/'deployment-commit.json').exists() else 'publication-commit.json')))['commit']
url='https://api.github.com/repos/masataka123/OpenAI-Math-Digest/actions/runs?head_sha='+sha
with urlopen(Request(url,headers={'User-Agent':'Math-Digest-release-check'}),timeout=30) as f:d=json.load(f)
(r/'actions.json').write_text(json.dumps(d,indent=2)+'\n')
print([{'id':x['id'],'url':x['html_url'],'status':x['status'],'conclusion':x['conclusion']} for x in d['workflow_runs']])
if d['workflow_runs']:
 run=d['workflow_runs'][0]
 with urlopen(Request(run['jobs_url'],headers={'User-Agent':'Math-Digest-release-check'}),timeout=30) as f:jobs=json.load(f)
 (r/'actions-jobs.json').write_text(json.dumps(jobs,indent=2)+'\n')
 print([{'name':j['name'],'status':j['status'],'conclusion':j['conclusion'],'steps':[{'name':s['name'],'status':s['status'],'conclusion':s['conclusion']} for s in j['steps']]} for j in jobs['jobs']])
