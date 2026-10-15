from pathlib import Path
from PIL import Image,ImageDraw
from pypdf import PdfReader
import json
run=Path(__file__).parent;out=run/'pdf-review';report={}
for lang in ['ja','en']:
 reader=PdfReader(f'public/pdf/catalog-187-{lang}.pdf');pages=[]
 for i,p in enumerate(reader.pages):
  text=p.extract_text();(out/f'{lang}-{i+1:02d}.txt').write_text(text)
  links=[]
  for item in p.get('/Annots',[]):
   a=item.get_object()
   if a.get('/Subtype')=='/Link':links.append({'uri':str(a.get('/A',{}).get('/URI','')),'dest':str(a.get('/Dest',''))})
  pages.append({'page':i+1,'characters':len(text),'links':links,'replacementCharacters':text.count('\ufffd')})
 for group,start in enumerate(range(0,len(pages),8)):
  contact=Image.new('RGB',(1680,2460),'#dddddd');d=ImageDraw.Draw(contact)
  for j in range(start,min(start+8,len(pages))):
   im=Image.open(out/f'{lang}-{j+1:02d}.png').convert('RGB');im.thumbnail((800,560));x=20+(j-start)%2*840;y=35+(j-start)//2*615;contact.paste(im,(x,y));d.text((x,y-20),f'{lang.upper()} / page {j+1}',fill='black')
  contact.save(out/f'contact-{lang}-{group+1}.png')
 report[lang]={'pages':len(pages),'topLevelBookmarks':[str(o.get('/Title','')) for o in reader.outline if isinstance(o,dict)],'namedDestinations':len(reader.named_destinations),'detail':pages}
(run/'pdf-review.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({k:{'pages':v['pages'],'bookmarks':v['topLevelBookmarks'],'namedDestinations':v['namedDestinations'],'links':sum(len(p['links']) for p in v['detail'])} for k,v in report.items()},ensure_ascii=False))
