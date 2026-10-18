from pathlib import Path
from collections import Counter
import hashlib
import json
from pypdf import PdfReader
from PIL import Image, ImageDraw

root = Path(__file__).resolve().parents[4]
qa = Path(__file__).resolve().parent
pdf = root / 'public/pdf/catalog-197-ja.pdf'
reader = PdfReader(pdf)
initial = json.loads((qa / 'inspection.json').read_text())
streams = json.loads((qa / 'content-stream-hashes.json').read_text())
expected = json.loads((qa / 'expected-figure-links.json').read_text())
layout = {x['page']: x for x in json.loads((qa.parent / 'pdf-figure-layout.json').read_text()) if x['lang'] == 'ja'}
result = {'sha256': hashlib.sha256(pdf.read_bytes()).hexdigest(), 'pageCount':len(reader.pages),
          'contentStreamsUnchanged': [hashlib.sha256(p.get_contents().get_data()).hexdigest() for p in reader.pages] == streams['contentStreamHashes'],
          'figures': []}
overlays=[]
for item in expected:
    num=item['page']; page=reader.pages[num-1]
    old=initial['pages'][num-1]['links']
    base=Counter((a['uri'],tuple(a['rect'])) for a in old)
    added=[]
    for ref in page.get('/Annots',[]):
        a=ref.get_object()
        uri=str(a.get('/A',{}).get('/URI',''))
        rect=[float(x) for x in a.get('/Rect',[])]
        key=(uri,tuple(rect))
        if base[key]: base[key]-=1
        else: added.append({'uri':uri,'rect':rect})
    observed=Counter(a['uri'] for a in added)
    wanted=Counter(item['hrefs'])
    row=layout[num]; ph=float(page.mediabox.height)
    bounds=[row['x']*.75,ph-(row['y']+row['height'])*.75,(row['x']+row['width'])*.75,ph-row['y']*.75]
    inside=all(bounds[0]-.1<=min(a['rect'][0],a['rect'][2]) and max(a['rect'][0],a['rect'][2])<=bounds[2]+.1 and bounds[1]-.1<=min(a['rect'][1],a['rect'][3]) and max(a['rect'][1],a['rect'][3])<=bounds[3]+.1 for a in added)
    result['figures'].append({'page':num,'expectedCount':sum(wanted.values()),'addedCount':len(added),'uriMultisetMatches':observed==wanted,'rectanglesInsideFigure':inside,'annotations':added})
    im=Image.open(qa/f'pages/page-{num:02}.png').convert('RGB'); draw=ImageDraw.Draw(im)
    sx=im.width/float(page.mediabox.width);sy=im.height/ph
    for a in added:
        x1,y1,x2,y2=a['rect']; draw.rectangle((min(x1,x2)*sx,(ph-max(y1,y2))*sy,max(x1,x2)*sx,(ph-min(y1,y2))*sy),outline='red',width=2)
    p=qa/f'annotations-page-{num:02}.png';im.save(p);overlays.append(im)
(qa/'inspection-final.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
for start in range(0,len(overlays),4):
    sheet=Image.new('RGB',(1000,1416),'#dddddd')
    for j,im in enumerate(overlays[start:start+4]):
        im=im.copy();im.thumbnail((500,708));sheet.paste(im,((j%2)*500,(j//2)*708))
    sheet.save(qa/f'annotation-contact-{start//4+1}.png')
print(json.dumps({**result,'figures':[{k:v for k,v in x.items() if k!='annotations'} for x in result['figures']]},ensure_ascii=False,indent=2))
