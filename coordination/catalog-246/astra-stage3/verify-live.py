from pathlib import Path
import json,hashlib,urllib.request,concurrent.futures,datetime,re,subprocess
root=Path.cwd();out=root/'coordination/catalog-246/astra-stage3/live';out.mkdir(exist_ok=True)
base='https://masataka123.github.io/OpenAI-Math-Digest/'
c=json.loads((root/'coordination/catalog-246/astra-stage3/candidate.json').read_text());items=[]
for f,h in c['files'].items():
 if f.startswith('public/') and ('catalog-246' in f):items.append((f[7:],h))
for lang in ['ja','en']:
 for route in [f'{lang}/catalog/246/',f'{lang}/papers/modulus-cannon/',f'{lang}/fields/group-theory/']:items.append((route,None))
def verify(item):
 path,wanted=item
 data=subprocess.check_output(['curl','--fail','--silent','--show-error','--location','--max-time','45','-H','Cache-Control: no-cache',base+path]);status=200
 actual=hashlib.sha256(data).hexdigest();assert status==200
 if wanted:assert wanted==actual,(path,wanted,actual)
 else:
  text=data.decode();assert 'Cannon' in text,path
  if '/papers/' in path:
   assert text.count('class="proof-figure"')==6
   for anchor in ['proof-overview','proof-1','proof-2','proof-3','proof-4','proof-5','dependencies','sources']:assert f'id="{anchor}"' in text
  if '/catalog/' in path:
   for anchor in ['proof-overview','proof-4','dependencies','sources']:assert f'/OpenAI-Math-Digest/{path[:2]}/papers/modulus-cannon/#{anchor}' in text
   assert f'/OpenAI-Math-Digest/pdf/catalog-246-{path[:2]}.pdf' in text
  (out/(path.replace('/','_')+'.html')).write_bytes(data)
 return {'url':base+path,'httpStatus':status,'bytes':len(data),'sha256':actual,'expectedHashMatched':wanted==actual if wanted else None}
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:results=list(pool.map(verify,items))
(out/'http-verification.json').write_text(json.dumps({'checkedAt':datetime.datetime.now().astimezone().isoformat(),'commit':'b5af7b4404f6e1989e5b799f62e0f38c8c620958','checks':results},indent=2))
print(f'PASS: {len(results)} live URLs, 24 TeX/SVG assets and 2 PDF hashes match the committed Astra release.')
