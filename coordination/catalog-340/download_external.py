from pathlib import Path
import subprocess, hashlib, json, datetime, sys

repo = Path(__file__).resolve().parents[2]
out = repo/'drafts/catalog-340/nearby-lagrangian-counterexample/sources'
out.mkdir(exist_ok=True)
inputs = {'CP25':'https://arxiv.org/pdf/2506.06110v1','Rog14':'https://arxiv.org/pdf/1403.5998v1','AIS26':'https://arxiv.org/pdf/2603.28007v2','BPT25':'https://arxiv.org/pdf/2503.04348v1'}
record_file = repo/'coordination/catalog-340/sources/external-downloads.json'
records = json.loads(record_file.read_text())['files'] if record_file.exists() else []
if '--extra' in sys.argv:
    inputs = {'Adams-JX4':'https://people.math.rochester.edu/faculty/doug/otherpapers/Adams-JX4.pdf','stable-stems-2023':'https://www.numdam.org/item/10.1007/s10240-023-00139-1.pdf'}
if '--adams-mirror' in sys.argv:
    inputs = {'Adams-JX4':'https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/Adams-JX4.pdf'}
if '--tube-map' in sys.argv:
    inputs = {'AACK25':'https://arxiv.org/pdf/2505.12515v2'}
if '--standard-inputs' in sys.argv:
    inputs = {'Bott59':'https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bott4.pdf','Mil65':'https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf','WJR13':'https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/WJR.pdf'}
for key, url in inputs.items():
    target = out/(key+'.pdf')
    try:
        data = subprocess.check_output(['/usr/bin/curl','--fail','--location','--silent','--show-error','--max-time','45',url])
        if not data.startswith(b'%PDF'): raise ValueError('Response is not a PDF')
        target.write_bytes(data)
        subprocess.run(['/usr/local/bin/pdftotext','-layout',str(target),str(out/(key+'.txt'))],check=True)
        info = subprocess.check_output(['/usr/local/bin/pdfinfo',str(target)],text=True)
        (out/(key+'.pdfinfo.txt')).write_text(info)
        records.append({'key':key,'url':url,'file':str(target.relative_to(repo)),'sha256':hashlib.sha256(data).hexdigest(),'bytes':len(data),'status':'downloaded and extracted'})
    except Exception as error:
        records.append({'key':key,'url':url,'status':'failed','error':str(error)})
    print(key, records[-1]['status'], flush=True)
record_file.write_text(json.dumps({'retrievedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'files':records},indent=2)+'\n')
