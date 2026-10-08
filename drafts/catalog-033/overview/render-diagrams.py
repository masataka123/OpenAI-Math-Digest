#!/usr/bin/env python3
"""Render only catalogue 033 synthesis figures and two article overview figures.

Reads connections.json for every catalogue edge. No shared files are written.
Requires XeLaTeX and dvisvgm; ordinary site builds use the generated SVGs.
"""
from pathlib import Path
import json, re, subprocess, tempfile, html, shutil, sys

ROOT=Path(__file__).resolve().parent
DATA=json.loads((ROOT/'connections.json').read_text())
EDGES={e['id']:e for e in DATA['connections']}
NAMES={key:p['displayName'] for key,p in DATA['papers'].items()}
PREAMBLE=r'''\documentclass[border=12pt]{standalone}
\def\pgfsysdriver{pgfsys-dvisvgm.def}
\usepackage[dvisvgm]{xcolor}
\usepackage{xeCJK}
\setCJKmainfont{HaranoAjiGothic-Regular.otf}[BoldFont=HaranoAjiGothic-Bold.otf]
\setCJKsansfont{HaranoAjiGothic-Regular.otf}[BoldFont=HaranoAjiGothic-Bold.otf]
\usepackage{amsmath,amssymb,tikz,lmodern}
\usetikzlibrary{arrows.meta,positioning,calc}
\renewcommand{\familydefault}{\sfdefault}
\definecolor{ink}{HTML}{25322F}
\definecolor{green}{HTML}{246657}
\definecolor{tint}{HTML}{EEF4F0}
\definecolor{soft}{HTML}{C6D2CC}
\definecolor{muted}{HTML}{52615B}
\definecolor{amber}{HTML}{866321}
\newif\ifJapanese
\newcommand{\Tx}[2]{\ifJapanese #1\else #2\fi}
\newcommand{\heading}[2]{{\color{green}\bfseries\Tx{#1}{#2}}\\[5pt]}
\newcommand{\refurl}[2]{\special{dvisvgm:raw <a xlink:href="#1" target="_blank" rel="noopener noreferrer">}{\color{green}\underline{\strut #2}}\special{dvisvgm:raw </a>}}
\newcommand{\R}[2]{\expandafter\refurl\expandafter{\csname source#1\endcsname}{#2}}
\tikzset{
 card/.style={draw=soft,fill=white,rounded corners=2pt,align=left,text=ink,font=\fontsize{10.5}{14}\selectfont,inner xsep=12pt,inner ysep=10pt,text width=14.4cm},
 result/.style={card,draw=green,fill=tint,line width=.9pt},
 reason/.style={align=left,text=muted,font=\fontsize{9}{12}\selectfont,inner sep=0pt,text width=12.65cm},
 edge/.style={-{Stealth[length=2.4mm]},draw=green,line width=1pt},
}
\newcommand{\flow}[3]{
 \coordinate (#2-from) at ($(#1.south)+(-6.9,0)$);
 \coordinate (#2-to) at ($(#2.north)+(-6.9,0)$);
 \draw[edge] (#2-from)--(#2-to);
 \node[reason,anchor=west] at ($(#2-from)!.5!(#2-to)+(.55,0)$) {#3};
}
'''

LABELS={
'c01':('対数下界と飯高ファイバー上の消滅','Lower bound; vanishing of Iitaka dimensions'),
'c02':('制限した最高lineの随伴正値性','Adjoint positivity for the restricted top line'),
'c03':('独立した上界に同じ対の下界を加える','Add the lower bound to the independent upper bound'),
'c04':('固定参照空間で切断と比を保つ','Preserve sections and ratios on the fixed reference'),
'c05':('被約境界で全最高部分をlineにする','Entire top piece is a line for reduced boundary'),
'c06':('実際の成分の最小値と全付値の閾値を比較','Compare actual-component minima with all valuations'),
'c07':('境界0でAlbanese反例を排除','Exclude the Albanese counterexample; zero boundary'),
'c08':('一般ファイバーを小平次元0へ','Reduce the general fiber to Kodaira dimension zero'),
'c09':('bigなファイバーを射影的stable familyへ','Compare big fibers with a projective stable family'),
'c10':('切断比較と実際のHodge lineの正値性','Section comparison and positivity of the actual line'),
'c11':('補間に使う非零切断を作る','Produce the section needed for interpolation'),
'c12':('good modelからTajiの仮定を満たす','Good models provide the hypotheses for Taji'),
'p01':('任意次元class Cの明示された前提','Explicit arbitrary-dimensional class-C premise')}

def tex(s):
    return s.replace('&',r'\&').replace('_',r'\_').replace('→',r'$\to$').replace('κ',r'$\kappa$').replace('§',r'\S ').replace('–','--')

def catalogue(ids):
    out=[r'\begin{tikzpicture}']
    for i,id in enumerate(ids):
        e=EDGES[id]; y=-i*4.8
        source=tex(e['sourceResult']).replace(' / ',r' /\allowbreak ')
        target=tex(e['usedAt']).replace('; ',r';\allowbreak ')
        for en,ja in [('initial normalized boundary','初期境界の正規化'),('reused in','再使用：'),('interpolation','補間'),('proof','証明')]:
            target=target.replace(en,r'\Tx{'+ja+'}{'+en+'}')
        tag={'main':('主証明','Main proof'),'corollary':('帰結','Corollary'),'additional':('追加結果','Additional result'),'cross-catalog':('034との接続','033 / 034')}[e['scope']]
        if e['kind']=='premise': tag=('前提への対応','Stated premise')
        out.append(r'\node[card,text width=4.5cm,minimum height=2.3cm,anchor=west] (s'+str(i)+f') at (0,{y}) '+r'{\heading{'+tex(NAMES[e['source']])+'}{'+tex(NAMES[e['source']])+r'}\Tx{引用する結果}{Cited result}\\[4pt]'+source+r'\\[5pt]{\small pp. '+tex(e['sourcePages'])+r'}};')
        out.append(r'\node[result,text width=4.5cm,minimum height=2.3cm,anchor=west] (t'+str(i)+f') at (12.0,{y}) '+r'{\heading{'+tex(NAMES[e['target']])+'}{'+tex(NAMES[e['target']])+r'}\Tx{'+tag[0]+'}{'+tag[1]+r'}\\[4pt]'+target+r'\\[5pt]{\small pp. '+tex(e['usedAtPages'])+r'}};')
        style='edge,dashed,draw=amber' if e['kind']=='premise' else 'edge'
        out.append(r'\draw['+style+'] (s'+str(i)+'.east)--(t'+str(i)+'.west);')
        out.append(r'\node[reason,text width=5.1cm,align=center,anchor=south] at '+f'(8.7,{y+.22})'+r' {\Tx{'+LABELS[id][0]+'}{'+LABELS[id][1]+r'}};')
        out.append(r'\node[reason,text width=5.1cm,align=center,anchor=north] at '+f'(8.7,{y-.22})'+r' {\R{'+e['source']+'}{'+tex(NAMES[e['source']])+r'}\\ pp. '+tex(e['sourcePages'])+r'\\[3pt]\R{'+e['target']+'}{'+tex(NAMES[e['target']])+r'}\\ pp. '+tex(e['usedAtPages'])+r'};')
    out.append(r'\end{tikzpicture}')
    return '\n'.join(out)

def refs(root):
    return dict(re.findall(r'^\[([^]]+)\]: (https?://\S+)$',(root/'article.ja.md').read_text(),re.M))

def render(folder,stem,body,title,work):
    folder.mkdir(exist_ok=True)
    (folder/(stem+'.tikz')).write_text(body+'\n')
    source=refs(folder.parent)
    defs='\n'.join('\\expandafter\\def\\csname source'+k+'\\endcsname{'+v+'}' for k,v in source.items())
    records=[]
    for n,lang in enumerate(['ja','en']):
        name=stem+'.'+lang
        path=folder/(name+'.tex')
        path.write_text('% OpenAI Math Digest; follows the existing Schnell diagram style.\n'+PREAMBLE+'\n'+defs+'\n\\Japanese'+('true' if lang=='ja' else 'false')+'\n\\begin{document}\n'+body+'\n\\end{document}\n')
        exe=shutil.which('xelatex') or '/Library/TeX/texbin/xelatex'
        run=subprocess.run([exe,'-no-pdf','-interaction=nonstopmode','-halt-on-error','-no-shell-escape','-output-directory='+str(work),str(path)],capture_output=True,text=True)
        if run.returncode or re.search(r'Overfull \\[hv]box|Missing character:',run.stdout):
            raise RuntimeError(name+'\n'+run.stdout[-7000:])
        svg=work/(name+'.svg')
        subprocess.run([shutil.which('dvisvgm') or '/Library/TeX/texbin/dvisvgm','--no-fonts','--bbox=papersize','-o',str(svg),str(work/(name+'.xdv'))],check=True,capture_output=True)
        s=svg.read_text();prefix=folder.parent.name+'-'+name.replace('.','-')+'-'
        s=re.sub(r"id='([^']+)'",lambda m:"id='"+prefix+m[1]+"'",s)
        s=re.sub(r"xlink:href='#([^']+)'",lambda m:"xlink:href='#"+prefix+m[1]+"'",s)
        s=re.sub(r'<\?xml[^>]*>\s*','',s)
        s=s.replace('<svg ','<svg role="img" aria-label="'+html.escape(title[n],quote=True)+'" ',1)
        (folder/(name+'.svg')).write_text(s)
        records.append({'file':str((folder/(name+'.svg')).relative_to(ROOT.parent)),'links':s.count('<a '),'overfull':False,'missingGlyphs':False})
        print('Rendered',folder.parent.name,name,flush=True)
    return records

if __name__=='__main__':
    report=[]
    with tempfile.TemporaryDirectory(prefix='math-033-synthesis-tex-') as tmp:
        work=Path(tmp)
        for stem,ids,title in [
            ('main',['c01','c02','c03'],('033の主経路と加法性の入力','Main-route and additivity inputs in 033')),
            ('additional',['c04','c05','c06'],('Whole-fiber variationの追加相対飯高構成への入力','Inputs to the additional relative Iitaka construction in Whole-fiber variation')),
            ('models',['c07','c12','p01'],('034のモデル存在と033の帰結','Models in 034 and consequences in 033')),
            ('kahler',['c08','c09','c10','c11'],('Kähler abundanceの具体的な補助結果への入力','Inputs to specific auxiliary results in Kähler abundance'))]:
            report+=render(ROOT/'diagrams',stem,catalogue(ids),title,work)
        for paper,title in ([] if '--catalog-only' in sys.argv else [('whole-fiber-variation',('全ファイバーの降下までの全体像','Overview of whole-fiber descent')),('kahler-b-semiampleness',('安定化から半豊富性までの全体像','Overview from stabilization to semiampleness'))]):
            folder=ROOT.parent/paper/'diagrams'
            report+=render(folder,'overview',(folder/'overview.tikz').read_text(),title,work)
    (ROOT/('catalog-label-checks.json' if '--catalog-only' in sys.argv else 'diagram-checks.json')).write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
