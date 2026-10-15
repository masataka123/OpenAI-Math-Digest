from pathlib import Path
import json
root=Path('drafts/catalog-039/maximal-seshadri-positive-characteristic'); root.mkdir(parents=True,exist_ok=True)
inv=json.loads(Path('coordination/catalog-039/inventory.json').read_text()); p=inv['manuscripts'][3]
s={**p,'catalogId':'039','displayName':p['title'],'authors':'OpenAI','checkedOn':'2026-10-15','checkedLocations':[{'printedPage':str(i),'pdfPage':i} for i in range(1,18)],'statements':[{'result':'Theorem 1.1','pages':'1–2','checked':'n≥3, algebraically closed char p>0, ample L; all integers r≥r0; geometric generic tuple; exact ordinary multipoint constant. Remark 6.3 p16 gives n=2.'},{'result':'Proposition 4.1','pages':'8–11','checked':'A,B,a_i>0; graded family; d=max(3/A,2/B); dw<1/16; cardinalities, gradedness, backward jets preserved.'},{'result':'Proposition 5.3','pages':'13–14','checked':'n≥2; every r≥r0 and every 0<theta<(V/r)^(1/n); every sufficiently large N; special tuple may depend on N, geometric generic tuple fixed.'}],'proofPassages':[{'pages':'4–6','scope':'Lemmas 2.2–2.6, finite weight realization, formal truncated-ring transfer, compression including characteristic-p gaps.'},{'pages':'7–8','scope':'Proposition 3.1 complete-intersection flag, lex least exponents, global divisibility and degree bound.'},{'pages':'8–11','scope':'Entire proof of Proposition 4.1, Hensel two branches including p=2, primitive lattice direction and slice compression.'},{'pages':'12–14','scope':'Lemmas 5.1–5.2 and Proposition 5.3, counting decompositions, CRT, interior translation and geometric generic base change.'},{'pages':'15–16','scope':'Lemmas 6.1–6.2 and proof of Theorem 1.1, local lengths, blow-up multiplicity, volume bound, n=2.'}],'externalSources':[],'dependencies':[],'unresolved':['No independent verification of all proofs or expert peer review.','No assertion about a common k-rational tuple over countable algebraically closed k.','All-curve / all-degree filling and formal transfer were read as stated; no formal verification of the complete graded construction.','Other-catalogue uses and uncited relations have not been exhaustively investigated.']}
regs={'P':{'recordFile':'sources.json','recordId':'self','pagination':'same'}}
for tag,title,ja,en,use in [
('0H90','Lemma 10.133.9','主部加群の対角イデアルによる記述','Principal parts via the diagonal ideal','§2 p4, Lemma 2.4 pp5–6'),
('0H8Z','Lemma 10.133.8','主部の基底変換','Base change for principal parts','§2 p4, Proposition 5.3 p14'),
('0FD6','Lemma 33.47.3','射影埋込みの一般超平面切断の滑らかさ','Smoothness of general hyperplane sections of an embedding','Proposition 3.1 p7'),
('0G4G','Remark 37.32.4','次元2以上の滑らかな射影多様体の滑らかで既約な超平面切断','Smooth irreducible hyperplane sections in dimension at least two','Proposition 3.1 p7'),
('0AZV','Definition 43.15.1','Hilbert–Samuel重複度と長さの先頭係数','Hilbert–Samuel multiplicity as the leading coefficient of length','Lemma 6.1 p15; Lemma 6.2 p16')]:
 key='Stacks'+tag;id='stacks-'+tag
 s['externalSources'].append({'id':id,'authors':'The Stacks Project Authors','displayName':'The Stacks Project — '+title+' (Tag '+tag+')','version':'HTML, accessed 2026-10-15; unpaginated','sourceUrl':'https://stacks.math.columbia.edu/tag/'+tag,'pdfPages':None,'checkedLocations':[],'checkedStatement':en,'usedAt':use,'checking':'Statement and manuscript application checked; proof of external input not recursively audited.'})
 regs[key]={'recordFile':'sources.json','recordId':id,'guideRole':{'ja':ja+'。使用箇所：'+use,'en':en+'. Used at '+use}}
 s['dependencies'].append({'id':id,'kind':'direct','from':title+' (Tag '+tag+')','to':use,'role':en,'checking':'External statement and use checked on 2026-10-15 by HQ.'})
for idx,key in [(1,'OpenAI26b'),(2,'OpenAI26c')]:
 q=inv['manuscripts'][idx]; s['externalSources'].append({**q,'id':q['paperId'],'authors':'OpenAI','checkedLocations':[],'checking':'Methodological comparison in §1.1 p2 and §4 p8; arguments reproved here, not imported as black-box main theorems.'});regs[key]={'recordFile':'sources.json','recordId':q['paperId'],'pagination':'same','guideRole':{'ja':'方法上の背景。主定理を直接入力せず、本稿で必要な命題を再証明する','en':'Methodological background; required statements are reproved here rather than importing its main theorem'}}
cites={}
for id,res,pages in [('main','Theorem 1.1','1–2'),('surfaces','Remark 6.3','16'),('formal','Lemmas 2.2–2.4','4–6'),('compression','Lemmas 2.5–2.6','6'),('flag','Proposition 3.1','7–8'),('reshape','Proposition 4.1','8–11'),('node','Lemma 4.2','9'),('height','Lemma 4.3','10–11'),('filling','Lemma 5.1','12'),('crt','Lemma 5.2','13'),('jets','Proposition 5.3','13–14'),('curve','Lemma 6.1','15'),('volume','Lemma 6.2','15–16'),('finish','Proof of Theorem 1.1; Remark 6.3','16'),('context','§1.1; §4','2, 8')]: cites[id]={'source':'P','locations':[{'result':res,'printed':pages,'pdf':pages}]}
guide={'selfSource':'P','externalSources':list(regs)[1:],'proofTargets':['main','reshape','jets'],'mainResults':['main'],'statements':{'main':'theorem-1-1','reshape':'proposition-4-1','jets':'proposition-5-3'},'conclusionCoverage':[{'result':'main','conclusion':'Exact maximality for all r≥r0 over geometric generic tuple','anchor':'proof-overview-step-2'},{'result':'main','conclusion':'n=2 extension, Remark 6.3; nef boundary and top self-intersection zero','anchor':'proof-overview-step-3'}],'readingList':[{'citation':id,'purpose':{'ja':ja,'en':en}} for id,ja,en in [('formal','形式的代入から実際のjet分離への移行。','Transfer from formal substitutions to jet separation.'),('reshape','節点・原始格子方向・圧縮の三段階。','Node, primitive lattice direction, and compressions.'),('jets','密度から全格子点、補間から幾何学的一般点への移行。','From density to all interior lattice points, then to geometric generic jets.'),('finish','上下界を合わせ、曲面にも適用する箇所。','Matching bounds and the dimension-two extension.')]]}
registry={'schemaVersion':1,'citationStyle':'author-key','catalogId':'039','sources':regs,'citations':cites,'markdownFiles':['article.ja.md','article.en.md'],'diagramDirectories':['diagrams'],'articleGuides':{'.':guide}}
for name,data in [('sources.json',s),('citations.json',registry)]: (root/name).write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
(root/'status.md').write_text('''# 作業記録
- カタログ039 / maximal-seshadri-positive-characteristic / 本部
- 制作セット1.4＋2026-10-12補足
- 初稿開始：2026-10-15 15:07:57 JST
- 締切：2026-10-15 16:07:57 JST
- 状態：執筆中
- 原稿：OpenAI, October 5, 2026, 17ページ。誌面/PDF同一。
- 確認範囲：sources.json。外部はStacks各タグの記述を照合、証明を再帰検証していない。
- TeX図はXDV/SVGを生成し、冊子PDFは生成しない。
''')
