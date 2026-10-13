# Historical one-shot authoring aid. Do not rerun on reviewed text. See HANDOFF.md for safe regeneration.
from pathlib import Path
import json
root=Path('drafts/catalog-036/overview');inv=json.load(open('coordination/catalog-036/inventory.json'));ms=inv['manuscripts']
rows=[]
data=[('Theorems 1.1–1.2 · pp. 2–3','smooth compact Kähler上の有理SNC klt対で、K+Bがpseudo-effective、MとK+B+Mがnefなら、同じ実Bott–Chern類を持つsemiample有理lineが存在する。','For a smooth compact Kähler rational SNC klt pair, with K+B pseudo-effective and M and K+B+M nef, a semiample rational line represents the same real Bott–Chern class.','代数次元0での消滅、nef lineの降下、射影底上のpositive partを合流させる。','Combines vanishing in algebraic dimension zero, descent of nef lines and positive parts on a projective base.'),('Theorem 1.1; Corollary 1.2 · pp. 1–2','標数0の射影klt有理対、K+B pseudo-effective、X上のM nef、K+B+M nefから、同じX上のsemiample有理因子との数値同値を得る。','For a projective klt rational pair in characteristic zero with K+B pseudo-effective, M nef on X and K+B+M nef, obtains numerical equivalence to a semiample rational divisor on X.','full nef dimensionからbig性への帰着と、nef reductionによるpositive partの帰納法。','Bigness from full nef dimension and induction for positive parts via nef reduction.'),('Theorem 1.1; Corollary 1.2 · p. 2','固定nef有理b-divisorを持つ射影generalized lc対で、adjointがpseudo-effectiveなら極小モデル、それ以外はMori fibre spaceが存在する。','For a projective generalized lc rational pair with fixed nef rational b-data, gives a minimal model for a pseudo-effective adjoint and a Mori fibre space otherwise.','局所位相とsmooth relative weak Zariski decompositionから、NQC generalized MMPへ移す。','Transfers a local phase argument and smooth relative weak Zariski decompositions to the NQC generalized MMP.'),('Theorem 1.1; Corollary 1.2 · p. 2','複素射影smooth X、dim X≥3、KX pseudo-effective、切断増大による数値次元1ならQ-factorial terminal極小モデル。別入力で同じ終点がgoodとなる。','A smooth complex projective X of dimension at least three with pseudo-effective KX and section-growth numerical dimension one has a Q-factorial terminal minimal model; a separate input makes the same endpoint good.','余次元2で固定したモデルと二つの曲面でnef性を示す独立の経路。','A separate route to nefness using a model fixed in codimension two and two surfaces.')]
for m,d in zip(ms,data):rows.append(dict(paperId=m['paperId'],displayName=m['displayName'],result=d[0],claim=dict(ja=d[1],en=d[2]),role=dict(ja=d[3],en=d[4])))
(root/'presentation.json').write_text(json.dumps(dict(schemaVersion=1,checkedOn='2026-10-13',rows=rows),ensure_ascii=False,indent=2)+'\n')
ext=[]
for m in ms:
 ext.append(dict(id=m['citationKey'],authors='OpenAI',displayName=m['title'],version=m['version']+'; commit '+m['sourceCommit'],sourceUrl=m['sourceUrl'],pdfPages=m['pdfPages'],sha256=m['sha256'],checkedLocations=[dict(printedPage=str(i),pdfPage=i) for i in {'OpenAI26a':[2,3,6,7,8,48,49],'OpenAI26b':[1,2,4,30,31,32,33,34,35],'OpenAI26c':[2,14,15,16,17],'OpenAI26d':[2,13,14]}[m['citationKey']]]))
la=json.load(open('drafts/catalog-036/minimal-models-numerical-dimension-one/sources.json'))['externalSources'][2];ext.append(la)
(root/'sources.json').write_text(json.dumps(dict(catalogId='036',checkedOn='2026-10-13',externalSources=ext),ensure_ascii=False,indent=2)+'\n')
cs={}
def c(k,s,r,p):cs[k]=dict(source=s,locations=[dict(result=r,printed=p,pdf=p)])
c('official','OVERVIEW','Catalog 036','5');c('glm','OpenAI26c','Theorem 1.1; Section 3.3','2, 14–16');c('p-input','OpenAI26b','Theorem 2.3','4');c('p-positive','OpenAI26b','Proposition 8.1','30');c('k-input','OpenAI26a','Proposition 2.5; Section 7.3','7–8, 48–49');c('la','OpenAI26LA','Theorem 1.1','2');c('nd','OpenAI26d','Theorem 1.1; Corollary 1.2','2');c('k-main','OpenAI26a','Theorems 1.1–1.2','2–3');c('p-main','OpenAI26b','Theorem 1.1; Corollary 1.2','1–2')
refs={e['id']:dict(recordFile='sources.json',recordId=e['id']) for e in ext};refs['OVERVIEW']=dict(recordFile='../../../coordination/catalog-036/inventory.json',recordId='overview')
(root/'citations.json').write_text(json.dumps(dict(schemaVersion=1,catalogId='036',citationStyle='author-key',sources=refs,citations=cs,markdownFiles=['article.ja.md','article.en.md'],diagramDirectories=['diagrams']),ensure_ascii=False,indent=2)+'\n')
for lang in ['ja','en']:
 guide='\n'.join(f"- [{e['id']}]({e['sourceUrl']}) {e['authors']} — *{e['displayName']}*. {e['version']}." for e in ext)
 if lang=='ja':
  text='''# 数値的半豊富性と一般化極小モデル

**036 · Numerical semiampleness and generalized minimal models**

nef adjointの数値的半豊富性と、固定nef b-dataを持つgeneralized lc対のモデル存在を扱う4篇である。数値同値なsemiample因子の存在、実Bott–Chern類の一致、元のadjointのsemiamplenessは区別する。数値次元1の論文は、曲面の交点論による別の極小モデル構成を与える。

<!-- Stage 2: place the generated Japanese catalogue PDF link here. No PDF is generated or linked in Stage 1. -->

## 1. 公式順の記事一覧

CATALOGINVENTORYTOKEN

## 2. モデル存在から数値的半豊富性へ

図は主要3篇の連続した帰着を示す。下向きの辺は実際に使われる結果への直接依存であり、元論文の全結論の包含や全証明の検証を表すものではない。番号は公式一覧の順序と独立している。

### 図の引用案内

<!-- reference-guide -->
GUIDE
<!-- /reference-guide -->

OpenAI26cはモデル存在、OpenAI26bは射影的positive part、OpenAI26aはKählerでの実Chern類の結論を担う。OpenAI26LAはordinary adjointに対する追加の入力である。OpenAI26dは下記の独立した曲面論法の原稿を指す。

![モデル存在・ordinary abundance・射影positive partからKähler数値的半豊富性へ至る主要経路](diagrams/routes.ja.svg)

射影版は、generalized kltのQ-factorialな場合の有限MMPを使って二つのadjointを制御し、ordinary log abundanceと新たなbig性の議論を合わせてpositive partを構成する。Kähler版はそのpositive-part定理を、代数還元後の**射影底**上のordinary klt対へ適用する。Kähler空間で任意のgeneralized MMPをそのまま動かす矢印ではない。

<!-- cite:glm -->生成<!-- /cite -->
<!-- cite:p-input -->生成<!-- /cite -->
<!-- cite:p-positive -->生成<!-- /cite -->
<!-- cite:k-input -->生成<!-- /cite -->

適用仮定と証明の説明は[射影版の記事](../projective-numerical-semiampleness/article.ja.md)と[Kähler版の記事](../kahler-numerical-semiampleness/article.ja.md)へ進む。Kähler版にはさらにordinary Kähler log abundance（034の2026-10-06版）とOrbifold Iitaka（033）の入力があり、版と用途を同記事の文献案内に分けて記す。

[数値次元1の記事](../minimal-models-numerical-dimension-one/article.ja.md)は、有限正摂動を余次元2で固定し、固定捻りの増大と負の曲線を通る曲面を使ってnef性を示す。そのTheorem 1.1は上のgeneralizedモデル存在定理を使う構成ではない。Corollary 1.2ではordinary log abundanceを別途加え、同じterminal終点をgood minimal modelにする。

<!-- cite:nd -->生成<!-- /cite -->
<!-- cite:la -->生成<!-- /cite -->

[Generalized lcの記事](../generalized-lc-minimal-models/article.ja.md)のCorollary 1.2もM=0のordinary対を扱い、その後にだけordinary abundanceを追加できる。非零nef b-dataを持つ場合へsemiamplenessを外挿しない。未掲載の引用関係は未調査であり、依存なしとは扱わない。

## 3. 原典と確認範囲

公式overviewとCONTENTSの固定commit SOURCECOMMITを参照し、分野は公式順の第2分野「Algebraic and complex geometry」、036の概要はPDF p. 5で確認した。4篇の順序・正式名・版・頁数を照合し、記事の主張・主要な帰着・直接入力の記述と使用箇所を点検した。個別に残る教科書照合や外部証明の未確認は各記事末尾に示す。原稿群の主張を紹介する概説であり、全論証の専門家査読・形式検証を意味しない。

<!-- cite:official -->生成<!-- /cite -->
'''
 else:
  text='''# Numerical semiampleness and generalized minimal models

**036 · Numerical semiampleness and generalized minimal models**

Four manuscripts address numerical semiampleness of nef adjoints and model existence for generalized lc pairs with fixed nef b-data. A semiample numerical representative, equality of real Bott–Chern classes, and semiampleness of the original adjoint are distinct conclusions. The numerical-dimension-one paper supplies a separate construction of minimal models using surface intersections.

<!-- Stage 2: place the generated English catalogue PDF link here. No PDF is generated or linked in Stage 1. -->

## 1. Papers in official catalogue order

CATALOGINVENTORYTOKEN

## 2. From model existence to numerical semiampleness

The diagram shows a chain of reductions linking three manuscripts. Downward edges are direct uses of specific results, not containment of every conclusion or verification of complete proofs. Logical order differs from the official inventory order.

### References in the diagram

<!-- reference-guide -->
GUIDE
<!-- /reference-guide -->

OpenAI26c supplies model existence, OpenAI26b the projective positive part, and OpenAI26a the Kähler real-Chern-class conclusion. OpenAI26LA is an additional input for ordinary adjoints. OpenAI26d denotes the separate surface argument discussed below.

![The main route from models and ordinary abundance through projective positive parts to Kähler numerical semiampleness](diagrams/routes.en.svg)

The projective paper uses the finite MMP in the Q-factorial generalized klt setting to control two adjoints. It combines ordinary log abundance with its new bigness argument to construct the positive part. The Kähler paper applies this positive-part theorem to an ordinary klt pair on a **projective base** obtained after algebraic reduction. This is not an arrow running an arbitrary generalized MMP on a Kähler space.

<!-- cite:glm -->generated<!-- /cite -->
<!-- cite:p-input -->generated<!-- /cite -->
<!-- cite:p-positive -->generated<!-- /cite -->
<!-- cite:k-input -->generated<!-- /cite -->

Follow the [projective article](../projective-numerical-semiampleness/article.en.md) and the [Kähler article](../kahler-numerical-semiampleness/article.en.md) for hypotheses and proof steps. The Kähler paper also uses ordinary Kähler log abundance (the October 6, 2026 version in 034) and Orbifold Iitaka (033); their versions and distinct roles are recorded in its reference guide.

The [numerical-dimension-one article](../minimal-models-numerical-dimension-one/article.en.md) fixes positive perturbations in codimension two and proves nefness using growth with a fixed twist and a surface through a negative curve. Its Theorem 1.1 does not use the generalized existence theorem above. Corollary 1.2 separately adds ordinary log abundance to make the same terminal endpoint a good minimal model.

<!-- cite:nd -->generated<!-- /cite -->
<!-- cite:la -->generated<!-- /cite -->

Corollary 1.2 of the [generalized lc article](../generalized-lc-minimal-models/article.en.md) likewise treats ordinary pairs with M=0, to which ordinary abundance can subsequently be added. No semiampleness conclusion is extrapolated to nonzero nef b-data. Unlisted citation relations remain uninvestigated rather than being classified as absent.

## 3. Sources and checking scope

The official overview and CONTENTS are fixed at commit SOURCECOMMIT. The subject is the second in official display order, “Algebraic and complex geometry”; entry 036 appears on PDF p. 5. The four titles, order, versions and page counts were checked, followed by the article statements, principal reductions, and statements and applications of direct inputs. Remaining textbook checks and unverified external proofs are described in each article. These accounts explain the manuscripts' claims and do not constitute specialist review or formal verification of the entire arguments.

<!-- cite:official -->generated<!-- /cite -->
'''
 (root/f'article.{lang}.md').write_text(text.replace('GUIDE',guide).replace('SOURCECOMMIT',inv['sourceCommit']))
