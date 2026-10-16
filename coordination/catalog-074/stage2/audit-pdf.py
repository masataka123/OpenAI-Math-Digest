from pathlib import Path
from PIL import Image,ImageOps,ImageDraw
from pypdf import PdfReader
import json
root=Path('coordination/catalog-074/stage2'); records=[]
for lang in ['ja','en']:
 reader=PdfReader(f'public/pdf/catalog-074-{lang}.pdf')
 pages=[]
 for i,p in enumerate(reader.pages):
  text=p.extract_text(); a=[x.get_object() for x in p.get('/Annots',[])];uris=[str(x['/A']['/URI']) for x in a if x.get('/A',{}).get('/URI')];dests=[str(x.get('/Dest')) for x in a if x.get('/Dest')]
  pages.append({'page':i+1,'chars':len(text),'externalLinks':uris,'internalLinks':len(dests),'replacementChars':text.count('\ufffd')})
 (root/f'pdf-{lang}.txt').write_text('\n\f\n'.join(p.extract_text() for p in reader.pages))
 records.append({'lang':lang,'pages':len(reader.pages),'chapters':len([x for x in reader.outline if isinstance(x,dict)]),'destinations':len(reader.named_destinations),'pageDetails':pages})
 files=sorted((root/'pdf-pages').glob(f'{lang}-*.png'))
 for start in range(0,len(files),6):
  selected=files[start:start+6]; canvas=Image.new('RGB',(1260,930),'#aaa');d=ImageDraw.Draw(canvas)
  for j,f in enumerate(selected):
   im=Image.open(f);im.thumbnail((410,430));x=(j%3)*420+(420-im.width)//2;y=(j//3)*465+22;canvas.paste(im,(x,y));d.text(((j%3)*420+10,(j//3)*465+5),f.name,fill='black')
  canvas.save(root/'pdf-pages'/f'contact-{lang}-{start+1:02}.png')
(root/'pdf-audit.json').write_text(json.dumps(records,indent=2))
print([(r['lang'],r['pages'],r['chapters'],r['destinations']) for r in records])
