import {readFile,writeFile,mkdir,mkdtemp,rm} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {schnellPdf,abundanceSource,externalSources,article} from '../src/data/schnell.mjs';
import {laSource,laReferences,laArticle} from '../src/data/la.mjs';
const collections=[
 {id:'schnell',article,sources:{sf:schnellPdf,la:abundanceSource,sch:externalSources.reduction,ps:externalSources.criterion}},
 {id:'la',article:laArticle,sources:{la:laSource,...laReferences}},
].filter(collection=>!process.argv[2]||collection.id===process.argv[2]);
if(!collections.length)throw new Error('Unknown diagram collection: '+process.argv[2]);
const out=path.resolve('public/diagrams');
const escapeXml=value=>value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
await mkdir(out,{recursive:true});
const temp=await mkdtemp(path.join(tmpdir(),'digest-tikz-'));
try{
 for(const collection of collections){
 const {id,article,sources}=collection;
 const names=article.proofs.map(proof=>proof.diagram);
 const preamble=await readFile('src/diagrams/'+id+'/preamble.tex','utf8');
 const urls=Object.entries(sources).map(([key,url])=>'\\newcommand{\\source'+key+'}{'+url+'}').join('\n');
 for(const name of names){
  const body=await readFile('src/diagrams/'+id+'/'+name+'.tikz','utf8');
  const labels=[...body.matchAll(/\\(?:SF|LA|Sch|PS|Hash|FGring|FGglue|OI)\{\d+\}\{([^{}]*)\}/g)].map(m=>escapeXml(m[1]
   .replaceAll('\\S','§').replaceAll('$','').replaceAll('\\','').replaceAll('--','–')));
  for(const lang of ['ja','en']){
   const stem=id+'-'+name+(lang==='en'?'-en':'');
   const tex=preamble+'\n\\Japanese'+(lang==='ja'?'true':'false')+'\n'+urls+'\n\\begin{document}\n'+body+'\n\\end{document}\n';
   await writeFile(path.join(temp,stem+'.tex'),tex);
   const log=execFileSync('xelatex',['-no-pdf','-interaction=nonstopmode','-halt-on-error','-no-shell-escape','-output-directory='+temp,path.join(temp,stem+'.tex')],{encoding:'utf8'});
   if(/Overfull \\[hv]box|Missing character:/.test(log))throw new Error(stem+' has overflowing or missing text:\n'+log.slice(-5000));
   execFileSync('dvisvgm',['--no-fonts','--bbox=papersize','-o',path.join(temp,stem+'.svg'),path.join(temp,stem+'.xdv')],{stdio:'pipe'});
   let svg=await readFile(path.join(temp,stem+'.svg'),'utf8');
   let labelIndex=0;
   svg=svg.replace(/<a ([^>]+)>/g,(_,attrs)=>'<a '+attrs.replace(/xlink:href='([^']+)'/, '$& href="$1" role="link"')+' aria-label="'+labels[labelIndex++]+'">');
   if(labelIndex!==labels.length || labels.some(label=>!label))throw new Error('Citation labels did not match '+stem);
   // Prefix glyph IDs because several diagrams share the same HTML document.
   svg=svg.replace(/id='([^']+)'/g,(_,id)=>"id='"+stem+'-'+id+"'")
    .replace(/xlink:href='#([^']+)'/g,(_,id)=>"xlink:href='#"+stem+'-'+id+"'");
   const title=escapeXml(article.proofs.find(p=>p.diagram===name).alt[lang]);
   svg=svg.replace(/<\?xml[^>]*>\s*/,'').replace(/<!--[\s\S]*?-->/g,'')
    .replaceAll('<a ', '<a tabindex="0" ').replace('<svg ', '<svg role="group" aria-labelledby="'+stem+'-title" ')
    .replace(/(<svg[^>]*>)/,'$1\n<title id="'+stem+'-title">'+title+'</title>');
   await writeFile(path.join(out,stem+'.svg'),svg);
   await writeFile(path.join(out,stem+'.tex'),tex);
   console.log('Rendered '+stem+': '+labels.length+' citation links');
  }
 }
 }
}catch(error){
 console.error(error.stdout?.toString().slice(-5000)||error.message);
 process.exitCode=1;
}finally{await rm(temp,{recursive:true,force:true});}
