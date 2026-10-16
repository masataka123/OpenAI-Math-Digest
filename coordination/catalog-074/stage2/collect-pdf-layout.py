from weasyprint import HTML
from pathlib import Path
import json,hashlib
out=[]
for lang in ['ja','en']:
 source=Path(f'tmp/pdfs/catalog-074-{lang}.html')
 doc=HTML(filename=str(source)).render()
 for i,p in enumerate(doc.pages):
  for b in p._page_box.descendants():
   if 'Replaced' in type(b).__name__ and b.element is not None and 'proof diagram' in b.element.attrib.get('aria-label',''):
    e=b.element
    out.append({'lang':lang,'page':i+1,'label':e.attrib.get('aria-label'),'viewBox':e.attrib.get('viewBox') or e.attrib.get('viewbox'),'x':b.content_box_x(),'y':b.content_box_y(),'width':b.width,'height':b.height,'htmlSha256':hashlib.sha256(source.read_bytes()).hexdigest()})
assert len(out)==14
Path('coordination/catalog-074/stage2/pdf-figure-layout.json').write_text(json.dumps(out,indent=2)+'\n')
