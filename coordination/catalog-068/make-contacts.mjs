import sharp from 'sharp';import fs from 'node:fs';
const base='coordination/catalog-068';
for(const lang of ['ja','en'])for(const section of ['results','proof-1']){
const files=fs.readdirSync(base+'/screenshots').filter(f=>f.endsWith(`.${lang}.html.375.${section}.png`)&&!f.startsWith('overview'));const images=await Promise.all(files.map(async f=>await sharp(base+'/screenshots/'+f).resize(375,1000).toBuffer()));await sharp({create:{width:375*4,height:1000*2,channels:3,background:'white'}}).composite(images.map((input,i)=>({input,left:(i%4)*375,top:Math.floor(i/4)*1000}))).png().toFile(`${base}/screenshots/${lang}-${section}-contact.png`);
}
