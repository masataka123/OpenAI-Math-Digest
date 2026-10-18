"""197-only URI annotation pass after the shared booklet generator. No content/layout edits."""
from pathlib import Path
import json,hashlib,subprocess,sys,shutil
from pypdf import PdfReader,PdfWriter
from pypdf.annotations import Link
from pypdf.generic import NameObject,TextStringObject,ArrayObject
base=Path('coordination/catalog-197/stage2')
subprocess.run([sys.executable,str(base/'collect-pdf-layout.py')],check=True)
layout=json.loads((base/'pdf-figure-layout.json').read_text())
geometry=json.loads((base/'svg-link-geometry.json').read_text())
for g in geometry:
 assert hashlib.sha256(Path(g['file']).read_bytes()).hexdigest()==g['sha256'], 'SVG changed: recollect its link geometry'
 assert g['links'] and all(a['width']>0 and a['height']>0 for a in g['links'])
manifest_path=Path('src/data/pdf-editions.json');manifest=json.loads(manifest_path.read_text());report=[]
for lang in ['ja','en']:
 pdf=Path(f'public/pdf/catalog-197-{lang}.pdf')
 before=base/f'catalog-197-{lang}-before-annotations.pdf'
 if not before.exists():shutil.copy2(pdf,before)
 reader=PdfReader(pdf);writer=PdfWriter(clone_from=reader)
 for page in writer.pages:
  if '/Annots' in page:
   page[NameObject('/Annots')]=ArrayObject([a for a in page['/Annots'] if not str(a.get_object().get('/NM','')).startswith('catalog197-svg-')])
 annotations=[]
 for item in [x for x in layout if x['lang']==lang]:
  g=next(x for x in geometry if x['file']==item['file'])
  vb=[float(x) for x in item['viewBox'].split()]
  assert abs(item['width']/item['height']-vb[2]/vb[3])<0.0001, 'Unexpected SVG aspect-ratio change'
  page=writer.pages[item['page']-1];page_height=float(page.mediabox.height)
  for index,a in enumerate(g['links']):
   assert a['url'].startswith('https://')
   left=.75*(item['x']+item['width']*a['x']);right=left+.75*item['width']*a['width']
   top=page_height-.75*(item['y']+item['height']*a['y']);bottom=top-.75*item['height']*a['height']
   rect=[left,bottom,right,top]
   assert 0<=left<right<=float(page.mediabox.width) and 0<=bottom<top<=page_height
   annotation=Link(rect=rect,url=a['url']);annotation[NameObject('/NM')]=TextStringObject(f"catalog197-svg-{item['file']}-{index}")
   writer.add_annotation(page_number=item['page']-1,annotation=annotation)
   annotations.append({'page':item['page'],'label':item['label'],'url':a['url'],'rect':rect})
 assert len(annotations)==sum(len(g['links']) for g in geometry if g['lang']==lang)
 tmp=pdf.with_suffix('.annotated.pdf');writer.write(tmp);tmp.replace(pdf)
 final=PdfReader(pdf)
 assert len(final.pages)==len(reader.pages) and len(final.named_destinations)==len(reader.named_destinations)
 assert [p.get_contents().get_data() for p in final.pages]==[p.get_contents().get_data() for p in reader.pages]
 recorded=[a.get_object() for p in final.pages for a in p.get('/Annots',[]) if str(a.get_object().get('/NM','')).startswith('catalog197-svg-')]
 assert len(recorded)==len(annotations)
 manifest['197'][lang]['sha256']=hashlib.sha256(pdf.read_bytes()).hexdigest();manifest['197'][lang]['bytes']=pdf.stat().st_size
 report.append({'lang':lang,'addedSvgLinks':len(annotations),'pageContentStreamsUnchanged':True,'annotations':annotations})
manifest_path.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
(base/'pdf-figure-links.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps([{k:v for k,v in r.items() if k!='annotations'} for r in report]))
