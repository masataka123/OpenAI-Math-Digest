from pathlib import Path
from pypdf import PdfReader
import json,hashlib
b=Path('coordination/catalog-357/stage2'); reports=[]
for lang in ['ja','en']:
 path=Path(f'public/pdf/catalog-357-{lang}.pdf'); r=PdfReader(path); meta=json.load(open('src/data/pdf-editions.json'))['357'][lang]
 assert len(r.pages)==20 and meta['chapters']==2 and meta['figures']==5
 assert hashlib.sha256(path.read_bytes()).hexdigest()==meta['sha256']
 assert sum(isinstance(x,dict) for x in r.outline)==2
 names=r.named_destinations; links=[]; internal=[]
 for i,p in enumerate(r.pages):
  for ref in p.get('/Annots',[]):
   a=ref.get_object(); action=a.get('/A',{}); uri=action.get('/URI'); dest=a.get('/Dest')
   if uri: assert uri.startswith('https://');links.append(str(uri))
   if isinstance(dest,str):assert dest in names;internal.append(dest)
   if a.get('/NM','').startswith('catalog357-svg-'):
    rect=list(map(float,a['/Rect']));assert 0<=rect[0]<rect[2]<=float(p.mediabox.width) and 0<=rect[1]<rect[3]<=float(p.mediabox.height)
 text='\n'.join(p.extract_text() for p in r.pages)
 assert 'CATALOGINVENTORYTOKEN' not in text and '1581d4cbdd69a0faf34b2089614fe2a814316a6a' in text
 assert 'Poisson' in text and 'Hessian' in text
 count=sum(str(a.get_object().get('/NM','')).startswith('catalog357-svg-') for p in r.pages for a in p.get('/Annots',[]));assert count==18
 prefix='regular-rcd-coordinates--'
 expected=['results','proof-overview','proof-1','proof-2','proof-3','proof-4','dependencies','sources']
 assert all(prefix+x in names for x in expected)
 reports.append({'lang':lang,**meta,'namedDestinations':len(names),'internalNamedLinks':len(internal),'externalUriAnnotations':len(links),'addedFigureLinks':count,'allExpectedSectionsPresent':True,'checkingScopePreserved':True,'outlineChapters':2,'uniqueExternalUrls':sorted(set(links))})
(b/'pdf-audit.json').write_text(json.dumps(reports,ensure_ascii=False,indent=2)+'\n')
print(json.dumps([{k:v for k,v in x.items() if k!='uniqueExternalUrls'} for x in reports],indent=2))
