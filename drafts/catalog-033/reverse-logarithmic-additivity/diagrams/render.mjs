import {readFile,writeFile,mkdir,mkdtemp} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const dir=path.dirname(fileURLToPath(import.meta.url));
const temp=process.argv[2]||await mkdtemp(path.join(tmpdir(),'math-digest-033-worker-c-'));
await mkdir(temp,{recursive:true});
const root='https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/';
const urls={
 RA:root+'The-reverse-logarithmic-Kodaira-inequality-and-additivity-September-26-2026/paper.pdf',
 OI:root+'Orbifold-and-logarithmic-Iitaka-subadditivity-September-26-2026/paper.pdf',
 FF:'https://www.math.kyoto-u.ac.jp/~fujino/vmhs-sp108.pdf',
 FFcor:'https://www.math.kyoto-u.ac.jp/~fujino/fujino-fujisawa-memo2.pdf',
 BBT:'https://arxiv.org/pdf/1811.12230v3',
 FG:'https://www.numdam.org/item/10.5802/aif.2894.pdf',
 CP:'https://arxiv.org/pdf/1508.02456v4',
 BDPP:'https://arxiv.org/pdf/math/0405285v1'
};
const titles={
 upper:{ja:'Theorem 1.1：各符号の場合の上界',en:'Theorem 1.1: the upper bound in every sign case'},
 'section-construction':{ja:'Proposition 1.3：元の底上の切断と指定点の零点',en:'Proposition 1.3: original-base sections and a prescribed zero'},
 'period-removal':{ja:'正次元period商：捻りの除去と完全切断空間の比較',en:'Positive-dimensional period quotient: twist removal and exact sections'},
 additivity:{ja:'Corollary 1.2：本稿の上界とOIの下界',en:'Corollary 1.2: the upper bound and the OI lower bound'}
};
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const pre=await readFile(path.join(dir,'preamble.tex'),'utf8');
const decl=Object.entries(urls).map(([key,url])=>'\\newcommand{\\source'+key+'}{'+url+'}').join('\n');
const results=[];
for(const stem of Object.keys(titles)){
 const body=await readFile(path.join(dir,stem+'.tikz'),'utf8');
 const labels=[...body.matchAll(/\\(RA|OI|FF|FFcor|BBT|FG|CP|BDPP)\{([^{}]*)\}/g)].map(m=>m[2].replaceAll('\\S','§').replaceAll('$','').replaceAll('--','–'));
 for(const lang of ['ja','en']){
  const name=stem+'.'+lang;
  const tex=pre+'\n'+decl+'\n\\Japanese'+(lang==='ja'?'true':'false')+'\n\\begin{document}\n'+body+'\n\\end{document}\n';
  await writeFile(path.join(dir,name+'.tex'),tex);
  let log;
  try{log=execFileSync('/Library/TeX/texbin/xelatex',['-no-pdf','-interaction=nonstopmode','-halt-on-error','-no-shell-escape','-output-directory='+temp,path.join(dir,name+'.tex')],{encoding:'utf8'});}
  catch(e){console.error(e.stdout?.toString().slice(-6000));throw e;}
  if(/Overfull \\[hv]box|Missing character:/.test(log))throw new Error(name+' has overflow or missing glyphs:\n'+log.slice(-7000));
  execFileSync('/Library/TeX/texbin/dvisvgm',['--no-fonts','--bbox=papersize','-o',path.join(temp,name+'.svg'),path.join(temp,name+'.xdv')],{stdio:'pipe'});
  let svg=await readFile(path.join(temp,name+'.svg'),'utf8');
  let index=0;
  svg=svg.replace(/<a ([^>]+)>/g,(_,attrs)=>'<a '+attrs.replace(/xlink:href='([^']+)'/,'$& href="$1"')+' role="link" tabindex="0" aria-label="'+esc(labels[index++])+'">');
  if(index!==labels.length)throw new Error(name+' citation count mismatch');
  const prefix='ra-'+name.replaceAll('.','-');
  svg=svg.replace(/id='([^']+)'/g,(_,id)=>"id='"+prefix+'-'+id+"'").replace(/xlink:href='#([^']+)'/g,(_,id)=>"xlink:href='#"+prefix+'-'+id+"'");
  svg=svg.replace(/<\?xml[^>]*>\s*/,'').replace(/<!--[\s\S]*?-->/g,'').replace('<svg ','<svg role="group" aria-labelledby="'+prefix+'-title" ').replace(/(<svg[^>]*>)/,'$1\n<title id="'+prefix+'-title">'+esc(titles[stem][lang])+'</title>');
  await writeFile(path.join(dir,name+'.svg'),svg);
  results.push({file:name+'.svg',citations:index,tex:name+'.tex'});
  console.log(name+': '+index+' links, no TeX overflow or missing characters');
 }
}
await writeFile(path.join(dir,'manifest.json'),JSON.stringify({temporaryDirectory:temp,diagrams:results},null,2)+'\n');
console.log('Intermediates: '+temp);
