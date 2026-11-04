from pathlib import Path
import subprocess, hashlib, json, datetime

root = Path(__file__).resolve().parent
sha = json.loads((root/'sources/official-head.json').read_text())['commit']
base = 'https://raw.githubusercontent.com/openai/math/' + sha + '/'
paths = {'CONTENTS.md':'CONTENTS.md','overview.tex':'overview.tex','overview.pdf':'overview.pdf','paper.pdf':'preprints/A-counterexample-to-the-nearby-Lagrangian-conjecture-September-23-2026/paper.pdf','README.md':'preprints/A-counterexample-to-the-nearby-Lagrangian-conjecture-September-23-2026/README.md'}
rows = []
for name, path in paths.items():
    data = subprocess.check_output(['/usr/bin/curl','--fail','--location','--silent','--show-error','--max-time','45',base+path])
    output = root/'sources'/name
    output.write_bytes(data)
    rows.append({'file':str(output.relative_to(root.parent.parent)), 'repositoryPath':path,'url':base+path,'sha256':hashlib.sha256(data).hexdigest(),'bytes':len(data)})
(root/'sources/downloads.json').write_text(json.dumps({'sourceCommit':sha,'retrievedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'files':rows},indent=2)+'\n')
print(json.dumps(rows,indent=2))
