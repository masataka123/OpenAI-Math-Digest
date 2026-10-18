"""Locate all 197 proof SVGs in the existing WeasyPrint layout, keyed by public asset path."""
from weasyprint import HTML
from pathlib import Path
from urllib.parse import urlparse
import json,hashlib
out=[]
for lang in ['ja','en']:
 source=Path(f'tmp/pdfs/catalog-197-{lang}.html')
 html=HTML(filename=str(source))
 parents={child:parent for parent in html.etree_element.iter() for child in parent}
 doc=html.render()
 for i,page in enumerate(doc.pages):
  for box in page._page_box.descendants():
   if 'Replaced' not in type(box).__name__ or box.element is None: continue
   svg=box.element
   if svg.tag.rsplit('}',1)[-1]!='svg': continue
   element=svg
   while element is not None and not ('proof-figure' in element.attrib.get('class','').split()): element=parents.get(element)
   if element is None: continue
   links=[e.attrib.get('href') for e in element.iter() if e.tag.rsplit('}',1)[-1]=='a' and e.attrib.get('href','').endswith('.svg')]
   assert len(links)==1, links
   file='public'+urlparse(links[0]).path.split('/OpenAI-Math-Digest')[-1]
   assert Path(file).exists(),file
   out.append({'lang':lang,'page':i+1,'file':file,'label':svg.attrib.get('aria-label',file),'viewBox':svg.attrib.get('viewBox') or svg.attrib.get('viewbox'),'x':box.content_box_x(),'y':box.content_box_y(),'width':box.width,'height':box.height,'htmlSha256':hashlib.sha256(source.read_bytes()).hexdigest()})
assert len(out)==32,len(out)
assert len({x['file'] for x in out})==32
Path('coordination/catalog-197/stage2/pdf-figure-layout.json').write_text(json.dumps(out,indent=2)+'\n')
print('Located 16 figures per language by their asset paths.')
