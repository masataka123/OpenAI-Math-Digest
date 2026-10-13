from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from pypdf import PdfReader
from PIL import Image, ImageOps, ImageDraw
import subprocess,json
root=Path('coordination/catalog-046/stage2/pdf-review');root.mkdir(parents=True,exist_ok=True)
def inspect(lang):
 path=Path(f'public/pdf/catalog-046-{lang}.pdf');r=PdfReader(path)
 for prior in root.glob(f'{lang}-[0-9]*.png'):prior.unlink()
 subprocess.run(['pdftoppm','-png','-scale-to','1500',str(path),str(root/lang)],check=True,capture_output=True)
 pages=[];uris=[];internal=[]
 for n,p in enumerate(r.pages,1):
  s=p.extract_text();pages.append({'page':n,'textStart':s[:140]})
  assert s.strip(),(lang,n,'empty page')
  for ann in p.get('/Annots',[]):
   a=ann.get_object();act=a.get('/A',{})
   if act.get('/S')=='/URI':
    u=act['/URI'];assert str(u).startswith(('http://','https://'));uris.append(str(u))
   d=a.get('/Dest',act.get('/D'))
   if d is not None:
    if isinstance(d,str):assert d in r.named_destinations,(lang,n,d)
    internal.append({'page':n,'destination':str(d)})
 chapters=[{'title':str(x.title),'page':r.get_destination_page_number(x)+1} for x in r.outline if isinstance(x,dict)]
 assert len(chapters)==3
 assert any('1581d4cbdd69a0faf34b2089614fe2a814316a6a' in u for u in uris)
 files=sorted(root.glob(f'{lang}-[0-9]*.png'))
 assert len(files)==len(r.pages)
 for group in range((len(files)+5)//6):
  sheet=Image.new('RGB',(1280,1840),'#d9d9d9');draw=ImageDraw.Draw(sheet)
  for i,file in enumerate(files[group*6:group*6+6]):
   im=Image.open(file);im.thumbnail((610,560));x=(i%2)*640+(640-im.width)//2;y=(i//2)*613+30
   sheet.paste(im,(x,y));draw.text(((i%2)*640+20,(i//2)*613+10),file.stem,fill='black')
  sheet.save(root/f'{lang}-contact-{group+1}.png')
 return lang,{'pages':len(r.pages),'chapters':chapters,'externalLinks':len(uris),'internalLinks':len(internal),'pageStarts':pages,'internalDestinations':internal,'uniqueExternalUrls':sorted(set(uris))}
with ThreadPoolExecutor(max_workers=2) as pool:report=dict(pool.map(inspect,['ja','en']))
(root/'structure.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({k:{x:v[x] for x in ['pages','chapters','externalLinks','internalLinks']} for k,v in report.items()},ensure_ascii=False))
