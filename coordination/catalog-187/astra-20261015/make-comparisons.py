from pathlib import Path
from PIL import Image,ImageDraw
root=Path(__file__).resolve().parent/'screens'
for lang in ['ja','en']:
 for width in [1280,375]:
  pairs=[('claims',f'schnell.{lang}.{width}.section-0.png',f'article.{lang}.{width}.section-0.png'),('references',f'orbifold.{lang}.{width}.section-0.png',f'article.{lang}.{width}.section-1.png'),('inventory',f'catalog034.{lang}.{width}.section-0.png',f'overview.{lang}.{width}.section-0.png')]
  for kind,old,new in pairs:
   ims=[];target=700 if width==1280 else 375
   for name in [old,new]:
    im=Image.open(root/name).convert('RGB');im=im.crop((0,0,im.width if width==1280 else min(339,im.width),min(im.height,1500 if width==1280 else 1600)));im.thumbnail((target,1700));ims.append(im)
   out=Image.new('RGB',(2*target+36,max(i.height for i in ims)+50),'white');d=ImageDraw.Draw(out)
   for i,im in enumerate(ims):out.paste(im,(12+i*(target+12),40));d.text((12+i*(target+12),12),('Reference' if i==0 else 'Astra 187')+' / '+lang+' / '+str(width),fill='black')
   out.save(root/f'compare-{kind}.{lang}.{width}.png')
for lang in ['ja','en']:
 ims=[]
 for i in range(1,5):
  im=Image.open(root/f'figure.{lang}.{i}.png').convert('RGB');im.thumbnail((750,1500));ims.append(im)
 rowh=[max(im.height for im in ims[:2]),max(im.height for im in ims[2:])];out=Image.new('RGB',(1540,sum(rowh)+80),'white');d=ImageDraw.Draw(out)
 for i,im in enumerate(ims):
  x=10+(i%2)*770;y=30+(0 if i<2 else rowh[0]+40);out.paste(im,(x,y));d.text((x,y-20),f'Figure {i+1} {lang}',fill='black')
 out.save(root/f'figures.{lang}.contact.png')
