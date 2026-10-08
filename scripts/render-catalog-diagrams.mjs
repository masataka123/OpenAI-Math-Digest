import {readFile,writeFile,mkdir,mkdtemp,rm} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {tmpdir} from 'node:os';
import path from 'node:path';
import config from '../astro.config.mjs';
import {synthesis,articleSections} from '../src/data/catalog-034-synthesis.mjs';
import {catalogueDependencies,notesById} from '../src/data/catalog-034.mjs';
const xml=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const base=config.base.replace(/\/$/,'')+'/';
const tmp=await mkdtemp(path.join(tmpdir(),'catalog-tikz-'));
const out='public/diagrams';
try {
 await mkdir(out,{recursive:true});
 const preamble=await readFile('src/diagrams/catalog-034/preamble.tex','utf8');
 for(const figure of synthesis){
  const body=await readFile(`src/diagrams/catalog-034/${figure.diagram}.tikz`,'utf8');
  const links=[...body.matchAll(/\\(Paper|Input)\{([^}]+)\}\{/g)];
  for(const lang of ['ja','en']){
   const stem=`catalog-034-${figure.diagram}${lang==='en'?'-en':''}`;
   const urls=Object.entries(articleSections).map(([id,section])=>`\\expandafter\\def\\csname paper${id}\\endcsname{${base}${lang}/papers/${id}/\\string##${section}}`).join('\n');
   const tex=`${preamble}\n\\Japanese${lang==='ja'?'true':'false'}\n\\newcommand{\\catalogbase}{${base}${lang}/catalog/034/}\n${urls}\n\\begin{document}\n${body}\n\\end{document}\n`;
   await writeFile(path.join(tmp,stem+'.tex'),tex);
   const log=execFileSync('xelatex',['-no-pdf','-interaction=nonstopmode','-halt-on-error','-no-shell-escape','-output-directory='+tmp,path.join(tmp,stem+'.tex')],{encoding:'utf8'});
   if(/Overfull \\[hv]box|Missing character:/.test(log))throw new Error(stem+' overflowing/missing text:\n'+log.slice(-5000));
   execFileSync('dvisvgm',['--no-fonts','--bbox=papersize','-o',path.join(tmp,stem+'.svg'),path.join(tmp,stem+'.xdv')],{stdio:'pipe'});
   let index=0, svg=await readFile(path.join(tmp,stem+'.svg'),'utf8');
   svg=svg.replace(/<a ([^>]+)>/g,(_,attrs)=>{
    const [,type,id]=links[index++];
    const d=catalogueDependencies.find(d=>d.id===id);
    const label=type==='Paper'?notesById[id].short:(d?`${d.result}: ${d.role[lang]}`:null);
    if(!label)throw new Error('Unrecorded diagram link: '+id);
    return `<a ${attrs.replace(/xlink:href='([^']+)'/,'$& href="$1"')} role="link" tabindex="0" aria-label="${xml(label)}">`;
   });
   if(index!==links.length)throw new Error(stem+' link count mismatch');
   svg=svg.replace(/id='([^']+)'/g,(_,id)=>`id='${stem}-${id}'`).replace(/xlink:href='#([^']+)'/g,(_,id)=>`xlink:href='#${stem}-${id}'`)
    .replace(/<\?xml[^>]*>\s*/,'').replace(/<!--[\s\S]*?-->/g,'').replace('<svg ',`<svg role="group" aria-labelledby="${stem}-title" `)
    .replace(/(<svg[^>]*>)/,`$1\n<title id="${stem}-title">${xml(figure.alt[lang])}</title>`);
   await writeFile(`${out}/${stem}.svg`,svg);await writeFile(`${out}/${stem}.tex`,tex);
   console.log(`Rendered ${stem}: ${index} links`);
  }
 }
} catch(error){console.error(error.stdout?.toString().slice(-1200)||error);process.exitCode=1;}
finally{await rm(tmp,{recursive:true,force:true});}
