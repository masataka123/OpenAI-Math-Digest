from pathlib import Path
import json,hashlib
root=Path(__file__).resolve().parent
repo=root.parents[2]
inv=json.loads((repo/'coordination/catalog-046/inventory.json').read_text())
p=inv['manuscripts'][0]
loc=lambda r,p,q=None:{'result':r,'printed':str(p),'pdf':str(q or p)}
external=[
 {'id':'zarhin','displayName':'Hyperelliptic Jacobians without Complex Multiplication','authors':'Yuri G. Zarhin','version':'arXiv:math/9909052v2, September 12, 1999 (preprint of the 2000 article)','sourceUrl':'https://arxiv.org/pdf/math/9909052v2','pdfPages':8,'checkedLocations':[{'printedPage':'2','pdfPage':2}],'checking':'Theorem 2.1 statement read in the arXiv PDF through web; characteristic-zero degree-six S6 application compared with manuscript p.13; proof not audited.'},
 {'id':'lp','displayName':'Groups with exotic finiteness properties from complex Morse theory','authors':'Claudio Llosa Isenrich and Pierre Py','version':'Journal of Topology 18 (2025), e70013, author-hosted published PDF','sourceUrl':'https://www-fourier.univ-grenoble-alpes.fr/~py/Documents/Articles/J-Topology-2025-Llosa-Isenrich-Py.pdf','pdfPages':29,'checkedLocations':[{'printedPage':'8','pdfPage':8}],'checking':'Theorem 4.2 and definition of totally geodesic good pair read; each-label application at manuscript p.16 checked. Stover–Toledo original proof not read.'},
 {'id':'hl','displayName':'Lefschetz theorems on quasi-projective varieties','authors':'Helmut A. Hamm and Lê Dũng Tráng','version':'Bulletin de la Société Mathématique de France 113 (1985), 123–142; NUMDAM scan','sourceUrl':'https://www.numdam.org/article/BSMF_1985__113__123_0.pdf','pdfPages':21,'checkedLocations':[{'printedPage':'126','pdfPage':5}],'localEvidence':'../../../coordination/catalog-046/sources/hamm-le.pdf','checking':'HQ checked Theorem 1.1.3(ii), printed p126/PDF p5; worker compared manuscript Lemma7.1 application (unconstrained sections followed by Ehresmann deformation).'},
 {'id':'milnor','displayName':'Morse Theory','authors':'John Milnor','version':'Annals of Mathematics Studies 51 (1963); Stanford-hosted facing-page scan','sourceUrl':'https://math.stanford.edu/~ralph/math215b/Milnor.pdf','pdfPages':79,'checkedLocations':[{'printedPage':'39','pdfPage':22}],'localEvidence':'../../../coordination/catalog-046/sources/milnor.pdf','checking':'HQ checked Theorem7.2 statement, printed p39/PDF22. Closed bianalytic embedding in C^n implies CW dimension bound. Worker checked use for Stein surface A_K in manuscript p6.'},
 {'id':'ekpr','displayName':'Linear Shafarevich Conjecture','authors':'Philippe Eyssidieux, Ludmil Katzarkov, Tony Pantev and Mohan Ramachandran','version':'arXiv:0904.0693v1, April 4, 2009 (preprint of the 2012 article)','sourceUrl':'https://arxiv.org/pdf/0904.0693v1','pdfPages':34,'checkedLocations':[{'printedPage':'2','pdfPage':2}],'checking':'Introduction definition of holomorphic convexity/Cartan–Remmert reduction read in web PDF; compared with manuscript p2. This is a formulation of the reduction, not an input from the paper’s linear Shafarevich theorem.'}
]
sources={k:p[k] for k in ['paperId','title','version','sourceCommit','sourceUrl','pdfPages','sha256']}
sources.update(catalogId='046',displayName=p['title'],authors='OpenAI',checkedOn='2026-10-13',checkedLocations=[{'printedPage':str(n),'pdfPage':n} for n in [1,2,4,5,6,7,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]],statements=[{'result':'Theorem 1.1','pages':'1','checking':'All hypotheses and conclusions compared.'},{'result':'Proposition 2.1','pages':'4','checking':'Statement and proof pp5–6 read.'},{'result':'Theorem 6.1','pages':'28','checking':'Statement and upper/lower bound proof pp28–35 read.'},{'result':'Theorem 7.3','pages':'40','checking':'Statement and proof read with Lemmas7.1–7.2.'}],proofPassages=[{'pages':'4–6','scope':'Complete intersection, largeness, covering component, H3 obstruction.'},{'pages':'12–19','scope':'Arithmetic arrangement, sign cover use, local quotient resolution and Y construction.'},{'pages':'28–35','scope':'Common basing, cyclic upper bound, chart hypotheses, orbifold meridian relations, detection of all powers.'},{'pages':'35–41','scope':'Projective realization, constrained/unconstrained Lefschetz transfer, ambient blowdown and completion.'}],externalSources=external,dependencies=[{'source':x['id'],'kind':'direct' if x['id']!='ekpr' else 'consequence','usedAt':u,'checking':x['checking']} for x,u in zip(external,['§4.1 p13','§4.3 p16','Lemma7.1 pp35–36','Proposition2.1 p6','§1.1 p2'])],unresolved=['Full guide/ladder constant estimates in §3 are not independently checked.','All model-by-model kernel compatibility and uniform hyperbolicity proofs in §5 are not fully checked; these are essential internal inputs to infinite order.','Borel–Harish-Chandra/Baily–Borel statements in the original publications, all standard hyperbolic/projective/stack input proofs not independently audited.','Other-catalog connections not established; no direct input from the surface counterexample was found in the passages read.'])
(root/'sources.json').write_text(json.dumps(sources,ensure_ascii=False,indent=2)+'\n')
roles={'Zar99':('zarhin','標数0でGalois群S6の種数2曲線のJacobianを単純にする','Simplicity of a genus-two Jacobian with characteristic-zero Galois group S6'),'LP25':('lp','Stover–Toledoの仮想巡回分岐被覆定理の定式化；各labelに二重被覆を供給','Formulation of Stover–Toledo virtual cyclic ramified covers; a double cover for each label'),'HL85':('hl','ordinary locusの一般超平面切断で基本群を保存','Preserve the fundamental group under general hyperplane sections of the ordinary locus'),'Mil63':('milnor','Andreotti–FrankelのStein多様体のCW次元上界','Andreotti–Frankel CW dimension bound for Stein manifolds'),'EKPR09':('ekpr','Remmert還元の定式化；large条件のもとで正則凸性からStein性へ','Formulation of Remmert reduction; holomorphic convexity implies Steinness under largeness')}
sr={'P':{'recordFile':'sources.json','recordId':'self','pagination':'same'}}
for key,(id,ja,en) in roles.items():sr[key]={'recordFile':'sources.json','recordId':id,'guideRole':{'ja':ja,'en':en}}
c={}
def add(id,source,*locations):c[id]={'source':source,'locations':list(locations)}
add('main','P',loc('Theorem 1.1','1'))
add('remmert-self','P',loc('Section 1.1','2'))
add('construction','P',loc('Sections 4.4–4.6; Proposition 4.3','17–19'))
add('completion','P',loc('Theorem 7.3','40'),loc('Proof of Theorem 1.1','41'),loc('Proposition 2.1','4–6'))
add('cyclic','P',loc('Theorem 6.1','28'))
add('embedding','P',loc('Theorem 7.3','40'))
add('reduction','P',loc('Proposition 2.1','4'))
add('zarhin','Zar99',loc('Theorem 2.1','2'))
add('sign-covers','P',loc('Proposition 4.1','14–15'),loc('Theorem 4.2; Section 4.3','16'))
add('lp-input','LP25',loc('Theorem 4.2','8'))
add('upper','P',loc('Lemmas 6.2–6.3','29–30'))
add('local-inputs','P',loc('Lemma 3.1','7'),loc('Proposition 5.4','23–24'),loc('Proposition 5.5','24'),loc('Lemma 6.4','32–33'))
add('lower','P',loc('Lemma 6.6; Sections 6.4–6.5','33–35'))
add('orbifold-realization','P',loc('Lemma 7.1','35–36'))
add('hl-input','HL85',loc('Theorem 1.1.3(ii)','126','5'))
add('blowdown','P',loc('Lemma 7.2','36–40'))
add('complete-intersection','P',loc('Lemma 2.3','4–5'),loc('Proof of Proposition 2.1','5'))
add('large','P',loc('Lemma 2.2','4'),loc('Proof of Proposition 2.1','5–6'))
add('stein-obstruction','P',loc('Proof of Proposition 2.1','6'))
add('milnor-input','Mil63',loc('Theorem 7.2','39','22'))
add('remmert','EKPR09',loc('Introduction','2'))
add('arrangement','P',loc('Section 4.1','12–13'),loc('Proposition 4.1','14–15'))
add('local-criterion','P',loc('Lemma 3.1','7'))
add('models','P',loc('Propositions 5.4–5.5','23–24'))
add('comparison','P',loc('Lemmas 6.4–6.6','32–34'))
add('nonzero-powers','P',loc('Section 6.5','34–35'))
add('fixed-surface','P',loc('Proof of Proposition 2.1; equation (2.1)','5'))
add('no-compact','P',loc('Lemma 2.2','4'))
add('reading-group','P',loc('Theorem 6.1; Sections 6.1–6.5','28–35'))
add('reading-projective','P',loc('Lemmas 7.1–7.2; Theorem 7.3','35–40'))
add('reading-obstruction','P',loc('Proposition 2.1 and proof','4–6'),loc('Section 1.1','2'))
guide={'selfSource':'P','externalSources':list(roles),'proofTargets':['main','cyclic','embedding','reduction'],'mainResults':['main'],'statements':{'main':'theorem-1-1','cyclic':'theorem-6-1','embedding':'theorem-7-3','reduction':'proposition-2-1'},'conclusionCoverage':[{'result':'main','conclusion':'Smooth connected projective fourfold X and closed simple abelian surface A','anchor':'proof-3-step-1'},{'result':'main','conclusion':'X has large fundamental group','anchor':'proof-3-step-2'},{'result':'main','conclusion':'Image pi1(A) in pi1(X) is infinite cyclic','anchor':'proof-3-step-1'},{'result':'main','conclusion':'Universal cover has no positive-dimensional compact analytic subvariety','anchor':'proof-3-step-2'},{'result':'main','conclusion':'Universal cover is not Stein','anchor':'proof-3-step-3'}],'readingList':[{'citation':'reading-obstruction','purpose':{'ja':'反例が対象とする予想、被覆成分と正則凸性への帰結','en':'Conjecture, covering component and the consequence for holomorphic convexity'}},{'citation':'construction','purpose':{'ja':'特別ファイバーと通常点領域の曲面写像を構成する','en':'Construct the distinguished fiber and surface map into the ordinary locus'}},{'citation':'reading-group','purpose':{'ja':'巡回上界と無限性の下界を区別して読む','en':'Separate the cyclic upper bound from the infinite-order lower bound'}},{'citation':'reading-projective','purpose':{'ja':'群準同型を保った射影実現と曲面blowdown','en':'Projective realization and surface blowdown preserving the homomorphism'}}]}
registry={'schemaVersion':1,'citationStyle':'author-key','catalogId':'046','sources':sr,'citations':c,'articleGuides':{'.':guide},'markdownFiles':['article.ja.md','article.en.md'],'diagramDirectories':['diagrams']}
(root/'citations.json').write_text(json.dumps(registry,ensure_ascii=False,indent=2)+'\n')
for lang in ('ja','en'):
 f=root/f'article.{lang}.md';s=f.read_text();s=s.replace('<!-- cite:external-bundle -->pending<!-- /cite -->',' '.join('<!-- cite:'+i+' -->pending<!-- /cite -->' for i in ['zarhin','lp-input','hl-input','milnor-input','remmert']))
 s=s.replace('<!-- cite:sign-covers -->pending<!-- /cite -->','<!-- cite:sign-covers -->pending<!-- /cite --> <!-- cite:lp-input -->pending<!-- /cite -->')
 s=s.replace('<!-- cite:orbifold-realization -->pending<!-- /cite -->','<!-- cite:orbifold-realization -->pending<!-- /cite --> <!-- cite:hl-input -->pending<!-- /cite -->')
 s=s.replace('<!-- cite:stein-obstruction -->pending<!-- /cite -->','<!-- cite:stein-obstruction -->pending<!-- /cite --> <!-- cite:milnor-input -->pending<!-- /cite -->')
 f.write_text(s)
