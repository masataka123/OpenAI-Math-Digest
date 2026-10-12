import urllib.request,ssl,json,sys,datetime
from pathlib import Path
commit=sys.argv[1]
base='https://api.github.com/repos/masataka123/OpenAI-Math-Digest/actions/'
ctx=ssl.create_default_context(cafile='/etc/ssl/cert.pem')
def get(url):
 with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'Math-Digest-publication-check'}),context=ctx,timeout=30) as r:return json.load(r)
runs=get(base+'workflows/pages.yml/runs?head_sha='+commit)['workflow_runs']
if not runs:print('No run yet');sys.exit(2)
run=runs[0];jobs=get(run['jobs_url'])
report={'checkedAt':datetime.datetime.now().astimezone().isoformat(),'run':run,'jobs':jobs}
Path('coordination/catalog-037/stage3/github-actions.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'id':run['id'],'status':run['status'],'conclusion':run['conclusion'],'url':run['html_url'],'jobs':[{'name':j['name'],'status':j['status'],'conclusion':j['conclusion']} for j in jobs['jobs']]}))
