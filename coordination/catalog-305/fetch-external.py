from pathlib import Path
import subprocess,concurrent.futures,hashlib,json
root=Path(__file__).resolve().parent/'sources'/'external'
root.mkdir(exist_ok=True)
items=[
 ('PRT25','https://www.maths.gla.ac.uk/~mpowell/s00029-025-01069-y.pdf'),
 ('KPT21','https://eprints.gla.ac.uk/280401/1/280401.pdf'),
 ('DSGJ-v3','https://arxiv.org/pdf/1709.01049v3'),
 ('KL-v3','https://arxiv.org/pdf/2007.03399v3'),
 ('FQ2013','https://archive.mpim-bonn.mpg.de/id/eprint/4789/2/FreedmanQuinn-TopologyOf4Manifolds-Reformatted2013.pdf'),
 ('PTVV13','https://www.dma.unifi.it/~vezzosi/papers/PTVV.pdf'),
 ('PTVV-v4','https://arxiv.org/pdf/1111.3209v4'),
 ('Calaque-v2','https://arxiv.org/pdf/1306.3235v2'),
 ('BBJ-v4','https://arxiv.org/pdf/1305.6302v4'),
 ('Artin69','https://www.numdam.org/article/PMIHES_1969__36__23_0.pdf'),
 ('Getzler09','https://annals.math.princeton.edu/wp-content/uploads/annals-v170-n1-p07-p.pdf')
]
previous=json.loads((root/'acquisition.json').read_text()) if (root/'acquisition.json').exists() else []
def fetch(item):
 key,url=item;pdf=root/(key+'.pdf')
 old=next((r for r in previous if r['id']==key and r.get('downloadStatus')=='downloaded' and r.get('url')==url),None)
 if old and pdf.exists() and hashlib.sha256(pdf.read_bytes()).hexdigest()==old['sha256']: return old
 r=subprocess.run(['curl','--fail','--location','--silent','--show-error','--max-time','50',url,'--output',str(pdf)],capture_output=True,text=True)
 record=dict(id=key,url=url,downloadStatus='failed' if r.returncode else 'downloaded')
 if r.returncode:record['error']=r.stderr
 else:
  try:
   record['pdfPages']=int(subprocess.check_output(['pdfinfo',str(pdf)],text=True,stderr=subprocess.STDOUT).split('Pages:')[1].splitlines()[0].strip())
   record['sha256']=hashlib.sha256(pdf.read_bytes()).hexdigest();record['localPath']=str(pdf.relative_to(root.parents[3]))
   conversion=subprocess.run(['pdftotext','-layout',str(pdf),str(pdf.with_suffix('.txt'))],check=True,capture_output=True,text=True)
   if conversion.stderr:(root/(key+'-extraction.log')).write_text(conversion.stderr)
  except Exception as error:record['downloadStatus']='invalid-pdf';record['error']=str(error)
 return record
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:records=list(pool.map(fetch,items))
records.extend(r for r in previous if r['id'] not in {key for key,_ in items})
(root/'acquisition.json').write_text(json.dumps(records,ensure_ascii=False,indent=2)+'\n')
for r in records:print(r['id'],r['downloadStatus'],r.get('pdfPages'),r.get('error','')[:250])
