from pathlib import Path
import json,hashlib
r=Path(__file__).resolve().parent
repo=r.parents[2]
inv=json.loads((repo/'coordination/catalog-285/inventory.json').read_text())
m=inv['manuscripts'][0]
source={**m,'displayName':m['title'],'checkedOn':'2026-10-15','authors':'OpenAI','model':'gpt-6-astra','externalSources':[]}
external=[
 ('EH20','Heath Emerson; Dan Hudson','Baum–Connes and the Fourier–Mukai transform','2001.06124v2','27 July 2020',[2],{'ja':'トーラスDirac類のassembly像。Theorem 1.3の全トーラスの場合を使用。','en':'Assembly of the torus Dirac class; the full-torus case of Theorem 1.3.'}),
 ('KP20','Jens Kaad; Valerio Proietti','Index theory on the Miščenko bundle','1807.05757v2','5 March 2020',[3,4,5,6,7],{'ja':'Miščenko指数と被約assemblyの比較。コンパクトなトーラスサイクルへ適用。','en':'Comparison of the Miščenko index with reduced assembly, applied to the compact torus cycle.'}),
 ('BvE16','Paul F. Baum; Erik van Erp','K-homology and Fredholm operators I: Dirac Operators','1604.03502v1','12 April 2016',[2],{'ja':'閉じた偶数次元Spinᶜ多様体の捩れDirac指数。トーラス上の線束の次数を検出。','en':'Twisted Dirac index on a closed even-dimensional spin-c manifold, detecting the degree of a line bundle on the torus.'}),
 ('HS07','Bernhard Hanke; Thomas Schick','The strong Novikov conjecture for low degree cohomology','0705.2578v1','17 May 2007',[1,2],{'ja':'比較・帰結のみ。次数2の検出により最大assembly像は有理的に非零。','en':'Comparison and consequence only: degree-two detection makes the maximal assembly image rationally nonzero.'})]
refs={'OpenAI26a':{'recordFile':'sources.json','recordId':'self','pagination':'same'}}
for key,authors,title,arxiv,date,pages,role in external:
 p=repo/'coordination/catalog-285/sources/baum-connes-injectivity'/f'{key}.pdf'
 txt=p.with_suffix('.txt').read_text(); count=len(txt.split('\f'))-1
 source['externalSources'].append({'id':key,'displayName':title,'authors':authors,'version':f'arXiv:{arxiv}, {date}','sourceUrl':f'https://arxiv.org/pdf/{arxiv}','pdfPages':count,'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'checkedLocations':[{'printedPage':str(n),'pdfPage':n} for n in pages],'checkedScope':'Statement and application interface; no independent verification of the complete proof.'})
 refs[key]={'recordFile':'sources.json','recordId':key,'guideRole':role}
proj=inv['manuscripts'][1]
source['externalSources'].append({'id':'OpenAI26b','displayName':proj['title'],'authors':'OpenAI','version':proj['version'],'sourceUrl':proj['sourceUrl'],'pdfPages':76,'sha256':proj['sha256'],'checkedLocations':[{'printedPage':str(n),'pdfPage':n} for n in [36,37,38]],'checkedScope':'Section 7.6 and explicit method attribution in the injectivity manuscript; not a theorem input.'})
refs['OpenAI26b']={'recordFile':'sources.json','recordId':'OpenAI26b','guideRole':{'ja':'方法上の先行原稿。cone-chainと有限位数排除は本稿で再証明する。主定理の直接入力ではない。','en':'Methodological predecessor; cone chains and torsion exclusion are reproved here, rather than imported as a main-theorem input.'}}
cs={}
def add(id,key,result,pages):cs[id]={'source':key,'locations':[{'result':result,'printed':pages,'pdf':pages}]}
for args in [
 ('main-result','OpenAI26a','Theorem 1.1','1'),('main-proof','OpenAI26a','§9.2','82–83'),('choices','OpenAI26a','§9.1','81–82'),('comparison','OpenAI26a','§§1.1–1.2','1–3'),
 ('sampling','OpenAI26a','Proposition 5.2; §5.8','41–42, 49–50'),('embedding','OpenAI26a','Proposition 6.4','57'),('geometry','OpenAI26a','Lemmas 6.3, 7.3; Proposition 7.4','55–57, 62–64'),
 ('cone','OpenAI26a','Lemma 7.6; (7.12)','65'),('torsion','OpenAI26a','Lemma 7.8','66'),('cocycle','OpenAI26a','Lemma 7.9','67–68'),('extension','OpenAI26a','Lemma 7.10','68–69'),('detector','OpenAI26a','Proposition 7.11','69'),
 ('realization','OpenAI26a','Lemmas 8.1–8.4','72–76'),('source-algebra','OpenAI26a','Lemma 8.5; (8.17)–(8.18)','76–77'),('parity','OpenAI26a','(8.19)–(8.20)','77–78'),('transport','OpenAI26a','Lemma 8.6; (8.23)–(8.25)','79–80'),('bott','OpenAI26a','Proposition 8.8','80'),('finite-witness','OpenAI26a','Lemmas 8.7, 8.9','80–81'),
 ('torus-assembly','EH20','Theorem 1.3','2'),('mishchenko','KP20','Corollary 1.4; (1.6)','5–7'),('index','BvE16','Theorem 1','2'),('maximal','HS07','Theorem 1.2','1–2'),('method','OpenAI26b','§7.6','36–38'),('method-use','OpenAI26a','§2; §7.4','7, 64')]:add(*args)
source['statements']=[{'result':cs[k]['locations'][0]['result'],'pages':cs[k]['locations'][0]['pdf'],'checking':'Statement and indicated proof passages checked against fixed PDF.'} for k in ['main-result','detector','bott']]
source['proofPassages']=[{'pages':'49–50, 55–57, 62–69, 70–83','scope':'Read simultaneous selection interface, embedding proof, cycle and cone arguments, detector extension, supported operator realization, exact quotient, parity cancellation, transport, finite witness and final index argument.'}]
source['dependencies']=[{'from':k,'to':'§9.2, p.83','kind':'direct','checking':'Statement and use checked; input proof not independently verified.'} for k in ['EH20','KP20','BvE16']]+[{'from':'HS07','to':'§1.2, p.2','kind':'consequence','checking':'Low-degree maximal nonvanishing statement and hypothesis checked.'},{'from':'OpenAI26b','to':'§2 p.7; §7.4 p.64','kind':'background','checking':'Explicit adaptation and method attribution; assertions are reproved for the present construction.'}]
source['unresolved']=['Sections 2–4: full sequential probability/recovery/pruning estimates not independently audited.','Sections 5.4–5.7: Fourier envelopes, finite regular-norm tests and centered moment estimates not independently audited.','No independent verification of the complete 85-page proof or external input proofs.','No direct theorem dependence on the irrational-trace paper found in the inspected proof route and bibliography; no claim of global independence.']
source['checkedLocations']=[{'printedPage':str(n),'pdfPage':n} for n in [1,69,80,83]]
(r/'sources.json').write_text(json.dumps(source,ensure_ascii=False,indent=2)+'\n')
guide={'selfSource':'OpenAI26a','externalSources':list(refs)[1:],'proofTargets':['main-result','detector','bott'],'mainResults':['main-result'],'statements':{'main-result':'theorem-1-1','detector':'proposition-7-11','bott':'proposition-8-8'},'conclusionCoverage':[{'result':'main-result','conclusion':'Finitely generated torsion-free group, injective torus and integral detector of evaluation 1','anchor':'proof-overview-step-1'},{'result':'main-result','conclusion':'Integral vanishing of the rank-zero Bott image','anchor':'proof-overview-step-1'},{'result':'main-result','conclusion':'Infinite-order K-homology class and nonzero rational class','anchor':'proof-overview-step-2'},{'result':'main-result','conclusion':'Zero reduced assembly image and failure of rational injectivity','anchor':'proof-overview-step-3'}],'readingList':[]}
for key,ja,en in [('main-result','群・係数・二つの結論を確認する。','Check the group, coefficients and the two conclusions.'),('sampling','幾何条件と全正則ノルム近似を同時に課す箇所。','The simultaneous geometric and full-regular-norm requirements.'),('detector','ねじれ排除と整数検出を合流させる。','Combine torsion exclusion and the integral detector.'),('source-algebra','有界作用素族から正確な商代数内ホモトピーへ進む。','Pass from bounded operator families to exact quotient homotopies.'),('finite-witness','一つの群、その有限生成部分群へ等式を降ろす。','Recover equality in one group and then a finitely generated subgroup.'),('main-proof','指数の非消滅とassemblyの消滅を照合する。','Compare the nonzero index pairing with zero assembly.')]:guide['readingList'].append({'citation':key,'purpose':{'ja':ja,'en':en}})
registry={'schemaVersion':1,'citationStyle':'author-key','catalogId':'285','sources':refs,'citations':cs,'markdownFiles':['article.ja.md','article.en.md'],'diagramDirectories':['diagrams'],'articleGuides':{'.':guide}}
for ref in registry['sources'].values():
 for lang,value in ref.get('guideRole',{}).items():ref['guideRole'][lang]=value.rstrip('。.')
(r/'citations.json').write_text(json.dumps(registry,ensure_ascii=False,indent=2)+'\n')
