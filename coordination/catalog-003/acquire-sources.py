from pathlib import Path
import urllib.request, subprocess, json, hashlib, datetime, concurrent.futures

root=Path(__file__).resolve().parent/'sources'
root.mkdir(parents=True,exist_ok=True)
commit='1581d4cbdd69a0faf34b2089614fe2a814316a6a'
files={
 'quasi-riemann-seven-eighths':'preprints/The-Quasi-Riemann-Hypothesis-September-30-2026/paper.pdf',
 'quasi-riemann-eleven-twelfths':'preprints/The-Quasi-Riemann-Hypothesis-October-5-2026/paper2.pdf',
 'uniform-landau-siegel':'preprints/Uniform-exclusion-of-Landau-Siegel-zeros-October-1-2026/paper.pdf',
 'overview':'overview.pdf'
}
def get(item):
 key,path=item
 url=f'https://raw.githubusercontent.com/openai/math/{commit}/{path}'
 out=root/(key+'.pdf')
 subprocess.run(['/usr/bin/curl','--fail','--location','--silent','--show-error','--max-time','60',url,'--output',str(out)],check=True)
 subprocess.run(['pdftotext','-layout',str(out),str(out.with_suffix('.txt'))],check=True)
 info=subprocess.check_output(['pdfinfo',str(out)],text=True)
 return {'id':key,'repositoryPath':path,'downloadUrl':url,'localPdf':str(out.relative_to(root.parent.parent.parent)),'localText':str(out.with_suffix('.txt').relative_to(root.parent.parent.parent)),'sha256':hashlib.sha256(out.read_bytes()).hexdigest(),'pdfInfo':info}
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
 data=list(executor.map(get,files.items()))
(root/'acquisition.json').write_text(json.dumps({'sourceCommit':commit,'retrievedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'textAcquisition':'CONTENTS.md and overview.tex via GitHub connector; binary PDFs via system curl with TLS verification because connector excludes binary downloads','files':data},ensure_ascii=False,indent=2)+'\n')
for entry in data:
 print(entry['id'],next(line for line in entry['pdfInfo'].splitlines() if line.startswith('Pages:')))
