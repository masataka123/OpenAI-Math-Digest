from pathlib import Path
import json,hashlib
r=Path(__file__).resolve().parent
commit='1581d4cbdd69a0faf34b2089614fe2a814316a6a'
url=f'https://github.com/openai/math/blob/{commit}/preprints/Bi-Lipschitz-Coordinates-at-Regular-Points-of-Noncollapsed-RCD-Spaces-September-25-2026/paper.pdf'
def write(name,obj): (r/name).write_text(json.dumps(obj,ensure_ascii=False,indent=2)+'\n')
def ext(id,authors,title,version,url,pages,sha,locs,check):return dict(id=id,authors=authors,displayName=title,title=title,version=version,sourceUrl=url,pdfPages=pages,sha256=sha,checkedLocations=[dict(printedPage=str(a),pdfPage=b) for a,b in locs],checking=check)
external=[
ext('ah18','Luigi Ambrosio and Shouhei Honda','Local spectral convergence in RCD*(K,N) spaces','arXiv:1703.04939v1 (2017); journal publication 2018','https://arxiv.org/pdf/1703.04939v1',25,'3efd8f278f6416123d27d3b1ae5c9c0c92d376a38f6736d44c12f23a2eacee53',[(20,20)],'writer357: Corollary 4.12 statement and use in Lemma 2.2 compared; external proof not independently checked'),
ext('jlz16','Renjin Jiang, Huaiqian Li and Huichun Zhang','Heat kernel bounds on metric measure spaces and some applications','arXiv:1407.5289v2; journal publication 2016','https://arxiv.org/pdf/1407.5289v2',27,'bd9f902a0a70b090bdae9ff0f90403a2c1e6035d0f51161f285cf88ad06ba123',[(2,2),(3,3)],'writer357: Theorem 1.2 and Corollary 1.2 statements compared with §3.1; all-pole extension belongs to manuscript Lemma 3.1'),
ext('dpg18','Guido De Philippis and Nicola Gigli','Non-collapsed spaces with Ricci curvature bounded from below','arXiv:1708.02060v3, 23 June 2025; journal publication 2018','https://arxiv.org/pdf/1708.02060v3',38,'a0d7edd7a3f68111c7109ded117c37f521d208e0d02e5c7ce31e43df7798a612',[(3,3),(4,4),(7,7),(17,17)],'reviewer357 independent comparison: Theorems 1.2/1.3/1.6, Theorem 1.12(ii),(vi), Corollary 2.14; see coordination/catalog-357/reviews/independent-review.md'),
ext('hat02','Allen Hatcher','Algebraic Topology','Cambridge University Press, 2002; author electronic edition retrieved 2026-10-19','https://pi.math.cornell.edu/~hatcher/AT/AT.pdf',560,'bebb3032bf9021b956da3bd070eb6c67dc662cf849be9cdf6679f677560e5618',[(172,181)],'reviewer357 independent comparison: Theorem 2B.3 and use on u(B_rho) in Proposition 5.6'),
ext('mn19','Andrea Mondino and Aaron Naber','Structure theory of metric measure spaces with lower Ricci curvature bounds','arXiv:1405.2222v3; journal publication 2019','https://arxiv.org/pdf/1405.2222v3',39,'b031ab651f358cf9f12fccb6504b03d05bfaeffa89fd1643bb4f6501e0ad0a2b',[(3,3)],'reviewer357 independent statement comparison for background contrast only; not a direct arrow into the main proof')]
locs={
'main':('Theorem 1.1','1'),'cor':('Corollary 1.2','1–2'),'coordinates':('Lemmas 2.2–2.5','6–9'),
'cumulative':('Lemmas 3.2–3.7','11–18'),'finish-main':('Proof of Theorem 1.1','41'),
'directional-short':('Proposition 4.10','30–31'),'directional':('Proposition 4.10; (4.18), (4.26)','24–26, 30–31'),'poisson':('Lemmas 4.1–4.6','20–26'),
'radial':('Lemmas 4.8–4.9; Proposition 4.10','28–31'),'iteration':('Proposition 5.4; (5.20), (5.22)–(5.23)','35, 37–39'),
'metric':('(5.21), (5.31)–(5.36)','35, 38–39'),'jets':('Lemmas 5.2–5.3','36–37'),
'limit':('Proposition 5.6','39–41'),'all-pairs':('(5.37)–(5.42)','40–41'),'openness':('Proposition 5.6, final paragraph','41'),
'heat-internal':('Lemmas 3.1–3.2','10–12'), 'normalization':('Lemma 2.3','7–8'), 'open-coordinates':('Lemma 2.5','9'), 'field':('Lemma 5.1; (5.9)–(5.10)','34–35'), 'cumulative-short':('Lemma 3.7','17–18')}
cites={k:dict(source='P',locations=[dict(result=res,printed=pg,pdf=pg)]) for k,(res,pg) in locs.items()}
for key,source,res,pg,pdf in [
('ah-approx','AH18','Corollary 4.12','20','20'),('heat','JLZ16','Theorem 1.2; Corollary 1.2','2–3','2–3'),
('dpg-regular','DPG18','Theorem 1.12(ii),(vi)','7','7'),('dpg-volume','DPG18','Theorems 1.2, 1.3, 1.6','3–4','3–4'),('dpg-density','DPG18','Corollary 2.14','17','17'),
('hatcher','Hat02','Theorem 2B.3','172','181'),('mn-background','MN19','Theorem 1.1','3','3')]:cites[key]=dict(source=source,locations=[dict(result=res,printed=pg,pdf=pdf)])
coverage=[
('main','指定されたすべてのn-正則点／all prescribed n-regular points','proof-overview-step-1'),
('main','周囲の開近傍U／ambient-open U','proof-3-step-1'),
('main','全点対の下側評価・単射／lower bound and injectivity for every pair','proof-3-step-1'),
('main','全点対の上側評価／upper bound for every pair','proof-3-step-1'),
('main','一様極限・同相・開像V／uniform limit, homeomorphism and open V','proof-3-step-2'),
('main','次元のみのLn・元距離への復帰／dimension-only Ln and original distance','proof-overview-step-3'),
('cor','全正則点を含む開領域／open region containing all regular points','proof-4-step-1'),
('cor','零測度の補集合／null complement','proof-4-step-1'),
('cor','可算atlas・開定義域と開像／countable atlas with open domains and images','proof-4-step-2'),
('cor','制限された周囲の距離とLn／restricted ambient distance and Ln','proof-4-step-2'),
('cor','L_n^2遷移写像／L_n^2 transition bounds','proof-4-step-2')]
roles={
'AH18':('内側の球における調和近似。Lemma 2.2の座標構成への直接入力','Interior harmonic approximation, directly used to construct the coordinates in Lemma 2.2'),
'JLZ16':('Gaussian熱核上下評価と勾配評価。§3.1の直接入力','Gaussian heat-kernel and gradient bounds, direct inputs in §3.1'),
'DPG18':('非崩壊体積収束・almost rigidity・全点の密度上限、および系の全測度正則性','Noncollapsed volume convergence, almost rigidity, density bounds at every point, and full-measure regularity for the corollary'),
'Hat02':('Proposition 5.6で開な座標値領域上の連続単射に領域不変性を適用','Invariance of domain for the continuous injection on the open value domain in Proposition 5.6'),
'MN19':('背景比較：a.e.可測片のrectifiability。主定理への直接入力ではない','Background comparison: rectifiability on a.e. measurable pieces; not a direct input to the main theorem')}
sources={'P':dict(recordFile='sources.json',recordId='self',displayName='Bi-Lipschitz Coordinates at Regular RCD Points',pagination='same')}
for key,id in [('AH18','ah18'),('JLZ16','jlz16'),('DPG18','dpg18'),('Hat02','hat02'),('MN19','mn19')]:sources[key]=dict(recordFile='sources.json',recordId=id,guideRole=dict(zip(['ja','en'],roles[key])))
reading=[('coordinates','全中心・全尺度の正規化と開調和座標','All-center, all-scale normalization and open harmonic coordinates'),('cumulative-short','非可換な逆行列の累積比較','Cumulative comparisons without commuting inverse matrices'),('directional','二中心の方向別欠損と尺度の復元','Two-center directional defects and restoration of scale'),('iteration','計量と全jetの同時帰納法','Simultaneous induction for the metric and all jets'),('limit','一様極限、全点対評価、開像','Uniform limit, all-pairs bounds and open image'),('cor','全測度領域、可算atlas、遷移定数','Full-measure region, countable atlas and transition constants')]
registry=dict(schemaVersion=1,citationStyle='author-key',catalogId='357',sources=sources,citations=cites,markdownFiles=['article.ja.md','article.en.md'],diagramDirectories=['diagrams'],articleGuides={'.':dict(selfSource='P',externalSources=list(roles),proofTargets=['main','directional','iteration','limit','cor'],mainResults=['main','cor'],statements={'main':'theorem-1-1','cor':'corollary-1-2','directional':'proposition-4-10','iteration':'proposition-5-4','limit':'proposition-5-6'},conclusionCoverage=[dict(result=a,conclusion=b,anchor=c) for a,b,c in coverage],readingList=[dict(citation=a,purpose=dict(ja=b,en=c)) for a,b,c in reading])})
external[0]['displayName']=external[0]['displayName'].replace('RCD*','RCD∗')
write('citations.json',registry)
write('conclusion-coverage.json',dict(catalogId='357',paperId='regular-rcd-coordinates',sourcePages={'main':'1, 41','cor':'1–2'},coverage=registry['articleGuides']['.']['conclusionCoverage'],checking='Author-side source comparison; independent review recorded separately.'))
write('sources.json',dict(catalogId='357',paperId='regular-rcd-coordinates',title='Bi-Lipschitz Coordinates at Regular Points of Noncollapsed RCD Spaces',displayName='Bi-Lipschitz Coordinates at Regular RCD Points',authors='OpenAI',version='September 25, 2026',sourceCommit=commit,sourceUrl=url,pdfPages=43,sha256='5500abd2391d238779793572caf1df5270a1ac488f6d88cc897d5cf51ac33093',checkedOn='2026-10-19',productionVersion='1.4',worker={'role':'writer357','model':'gpt-6-astra','reasoningEffort':'high','sourcePolicy':'Fresh reading of official source; no existing Sol interpretation reused'},checkedLocations=[dict(printedPage=str(i),pdfPage=i) for i in range(1,44)],statements=[dict(citation=k,result=locs[k][0],pages=locs[k][1],scope='Assumptions, quantifiers and all conclusions compared with source; independent reviewer record separate') for k in ['main','cor','directional','iteration','limit']],proofPassages=[dict(result=locs[k][0],pages=locs[k][1],scope='Read for the explanatory route; not a full independent reproof of every estimate') for k in ['coordinates','cumulative','poisson','radial','directional','field','metric','jets','limit','finish-main']],externalSources=external,dependencies=[dict(id=k,source=v['recordId'],kind='background' if k=='MN19' else 'direct',role=v['guideRole'],checking=next(e['checking'] for e in external if e['id']==v['recordId'])) for k,v in sources.items() if k!='P'],unresolved=['Local Poisson regularity, Hessian calculus, improved Bochner inequality and distance Laplacian comparison: uses read in manuscript, but not every external theorem statement and hypothesis independently cross-checked.','Long local calculations in §§3.1–3.2 and Lemmas 4.4–4.6 were not independently reconstructed in full.','External proofs and recursive dependencies, expert peer review and formal verification are outside this first-draft scope.']))
