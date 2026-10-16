# カタログ074：独立原典点検

- 担当：`review_content`、明示指定モデル `gpt-6-astra` / `high`。
- 日付：2026-10-16 JST。既存Sol制作の原稿・図・解釈・点検は根拠に用いない。
- 固定原典commit：`1581d4cbdd69a0faf34b2089614fe2a814316a6a`。
- 3D：*The Kakeya maximal conjecture in three dimensions*、2026-09-23、97頁。
- 4D：*Every Four-Dimensional Kakeya Set Has Full Hausdorff Dimension*、2026-09-24、175頁。
- この記録は原典の主要結果・入力・使用箇所の読解。証明全体の独立検証や正しさの認定ではない。以下の頁は抽出テキストのform-feed区切りと誌面番号を照合したPDF位置で、指定箇所では一致する。

## カタログ内の直接入力と引用番号不整合

4D Lemma 2.15（pp.17–18）は3D原稿を `[24, Lemma 2.3]` として明示的に引用する。しかし固定3D版ではDefinition 2.3がcritical exponentであり、対応するweighted full-time plank estimateはLemma 3.3（pp.20–21）にある。旧版履歴や番号変更の経緯は未確認。記事・案内では引用番号の不整合を明記し、現固定版の対応記述へリンクする。

対応する条件と結論は次の通り。

1. 有界affine-line chartで `M_i(t)=b_i+tu_i∈R²`, `0≤t≤1`。任意正重み、反復traceを許す。
2. `D≥1`, mesh `D⁻¹`。任意空間直交frameとaffine centerに関する全時間plank、`1≤a≤b≤D`、全trace包含indexの重み和 `Σω_i≤Aab`。
3. 各indexのmark数 `#J_i≥D^(1−η_ε)`。markだけの包含ではなく、全traceのplank capを要求する。
4. visited cell union `E` に対し `Σω_i #J_i≤C_ε A D^ε #E`。固定cell enlargement・plank dilationを許す。

これらは両記述で対応する。3D主定理の `L³→L³` 最大評価そのものを4D主定理への入力とすることはできない。3D Lemma 3.3はGWZのset estimateをweighted convex clusteringへ拡張したLemma 3.2から従う。

3D内の具体使用はLemma 4.7（pp.32–33、3.3の適用はp.33）：flat prefixでshading densityがsubpowerとなり、greedyなplank捕捉の残余に3.3を適用する。残余のmultiplicity上界が既存の下界と矛盾し、幅 `1,K`、mass `≥mK` のsaturated platesが得られる。Lemma 4.9の証明p.36でも、total deficitが小さいという仮定の下でlong-mark閾値を満たし、global slabsを捕捉する。

4D内ではProposition 2.16（pp.18–20）の初期horizon上界、Theorem 2.17の証明p.22の `g(0,0)≤0`、ほか§4.6で利用する。カタログ総括はこの共通入力から両主経路へ分岐する構造が適切である。

## 3D：結果と証明の接続

| 結果 | 原典 | 点検した内容 |
|---|---|---|
| Theorem 1.1 | p.2、証明p.94 | 各ε>0、全0<δ<1、全complex `f∈L³(R³)` に `||K_δ f||_{L³(S²)}≤C_ε δ^-ε ||f||₃`。定数はδ、f、tube center/directionから独立 |
| 密度の問題設定 | p.3、§2.2 pp.7–8 | 求めるunion estimateの密度依存はλ³。中間critical inequalityはp>2に対するλ^-p multiplicity、離散unionはλ^(p+1) |
| Proposition 10.1 | pp.86–90 | p>2を2へ任意に近づけた値で `h(p,0)=0`。p=2での消滅を主張していない |
| Proposition 10.2 | pp.91–93 | `max{N^-1,λ}`を使う一様離散評価→directional distribution→cell averages・有限dyadic levels。結論は `δ^{-(p−2)/3−κ}` |
| Theorem 1.1への最後の選択 | p.94 | εごとにpを固定し `(p−2)/3<ε/2`、κ=ε/2。極限p=2の定数一様性を仮定しない |
| Corollary 11.1 | pp.94–95 | Euclidean / 固定local constant-curvature geometry、`1≤p≤3`, `q=2p′`, p=1でq=∞、δの冪 `1−3/p−ε`。local定数の幾何依存 |
| Corollary 11.2 | pp.95–96 | 固定translation-invariant phase・chart、mixed rank/curvature/Bourgain条件、同じp,q,δ冪。δ_curvと定数はphase/localizationに依存 |

反証経路の追加読解：Lemma 2.10 pp.15–16のfailureからdifferentiability point、Lemma 4.7 pp.32–33、Lemma 4.9 pp.35–36、Proposition 5.4 p.44のcanonical profile `F(κ)=β(κ−τ)_+`、Lemma 5.5 / Proposition 5.6 pp.46–47、§7–8のpp.68–69、p.74のsame-index二event coupling、§10 pp.86–94。

二eventがindexを共有することからmatrixとframe labelは一般に独立でない。p.74は条件付き独立なevent samplingとmatrix/label独立を明確に区別している。短いrefinement gapのmutual information上界とproduct-law比較を介してprojection constraintへ進む。tied middle speedsではproduct slope `ΔtΔϑ` が追加入力であり、単なる2本の通常projectionだけに縮約しない。

未確認：§§2–9の全regularization・各極限交換・全weighted entropy計算、product-pinning bootstrapの全証明。pp.86–90の全場合の不等式を逐項再証明したものでもない。

## 4D：任意集合の反例からモデルの排除

Theorem 1.1（p.3）は任意 `K⊂R⁴` が各 `e∈S³` に長さ1のsegment `a_e+[0,1]e` を含めば `dim_H K=4`。Kや方向からwitnessを選ぶ写像に可測性を要求しない。4DのKakeya maximal conjectureを証明したという結果ではない。

Theorem 2.17（pp.20–25）の還元は、変動半径のHausdorff被覆をscaleごとに分け、外測度の可算劣加法性で、方向外測度とsegment上の被覆時間の双方がinverse-subpower以上となるscaleを選ぶ。p.21の有限δ-separated slope setに対してのみwitnessを有限選択するので、measurable selectionを必要としない。δ=2^-kで `c k^-2 δ^-3≤M≤Cδ^-3`。同一scale被覆だけからHausdorff次元を結論する略述は不十分。

p.22ではhidden-coordinate observationのdensity profileを用い `g(1,0)≥σ`, `g(0,0)≤0` とvelocity-depth上界を得る。`g(0,0)≤0` に上記weighted plank inputが入る。p.23のendpoint/angular-scale選択で `d<1` のcap classを得て、terminal chartのprior-mass floorを原単位へ戻し、slope-volume上界との比較で正のhorizonを強制する。本文のtime cost `H(E)>0` は物理長が正という意味ではない。

最後の接続は§10.8 p.168で照合した。

- Proposition 4.3でcritical path、`k>0`、optimized narrowness ℓを選ぶ。
- ℓ=0：Theorem 6.1。scalar modelのzero horizonはCorollary 6.9で別に得る。
- 0<ℓ<∞：Propositions 8.4–8.5で改善またはhorizontal model。`2k=1` はProposition 9.2、`2k>1` はProposition 9.6、`2k<1` はProposition 9.5のparameter-scale到達後9.6。finite narrownessでlocal candidateから実際のexcluded atlasへの復帰をProposition 4.11が担う。
- ℓ=∞：Proposition 10.1。全時間localizationの後scalar projectionを使いtime costを小さくし、original-resolution exclusionに反する。

四次元原稿の§11（pp.168–173）も読解した。Packing/full bounded-set Minkowski、高次元の下界4、任意方向集合のCorollary 11.1、constant-curvature NikodymのCorollary 11.2、固定translation-invariant phaseのCorollary 11.3、rank-one quadratic curveのCorollary 11.4は主定理と結論種別を区別する。これらを記事の主要結果として追加する場合は各仮定・外部transferの点検・証明概略が別途必要。特にCorollary 11.4にはcompact K、fixed full-curve interval、`rank B=rank B²=1` がある。

未確認：§§3–10の全algebraic-sheet comparison、conditional higher jets、retained-edge BSG、higher-degree potentialをquadratic testへ戻す全計算、全finite-list/diagonal bookkeeping。§11の全外部transfer原典は今回の4D主定理点検対象には含めていない。

## 外部入力：記述と利用箇所

| 固定原典 | 記述・頁 | 対象原稿への接続と確認範囲 |
|---|---|---|
| Guth–Wang–Zahl, arXiv:2601.14411v1 | Theorem 1.1, p.2 | 3D Theorem 3.1 p.18のconvex clustering `≤δ^-η`、平均shading density `≥δ^η`、任意小volume lossに対応。weighted/repeated-index化は3D Lemma 3.2 pp.18–20に分離 |
| Ren–Wang, arXiv:2308.08819v3 | Theorem 4.1, p.9 | 3D Theorem 3.4 p.21の `min{t,(s+t)/2,1}` とshading factor kに対応する原典のδ-discretized nice configurationを照合。point-line dual化と全weighted版の再構成は未検証 |
| Larry Guth, Acta Mathematica 205(2), 2010 | Theorem 1.3, 誌面264 / PDF2 | 3D Theorem 3.7 p.23：全triple determinant≥θの下でn=3の損失θ^-1/2が一致。weighted化は3D側のrepetition→rational weights→monotone convergenceによる |
| Gao–Liu–Xi, arXiv:2503.11574v1 | Proposition 2.3, pp.13–14; Theorem 1.12, p.5; Proposition 4.1, p.19 | 3D Corollaries 11.1–11.2 pp.94–96へのK/N同値とcurved K同値、p,q範囲とphase/local chart条件を照合。外部transfer証明全体は未検証 |
| Carbery–Valdimarsson, arXiv:1205.6371v1 | Theorem 1, p.2 | 4D Eq.6.10 p.90：full-line tubes、任意非負weights、wedge dimension=ambient dimension、radius-r scaling `r^n`が対応。利用は§6.3のphysical velocity graph。nは2–4 |
| Orponen–de Saxcé–Shmerkin, arXiv:2309.03068v2 | Theorem 1.5, p.2 | 4D Lemma 7.4 pp.112–113：λのsupportを[-1,1]へ正規化、`0<s<min(S,1)`, `ns>1`、smoothed-energyをsubpowerで抑え、r∈[h,h^e0]へ適用。supportが0を避ける条件はない |
| Wang–Zahl, arXiv:2210.09581v2 | Definition 4.2, p.17; Theorem 5.2再掲, p.49 | 4D Theorem 5.5 p.76：ADsetは上側cover条件のみ。restricted triple Hのsize、dot-product expansionまたはperpendicular line concentrationのalternativeが一致。Proposition 5.4のfirst-jet入力としてpp.76–77を読解。下流の全parameter checkは未検証 |

外部PDFは3D担当の `drafts/catalog-074/kakeya-maximal-three/verification/`（GWZ/RW/GLX）および本点検の `reviews/external/`（CV/OSS/WZ）に保存。後者のSHA-256は `external/sources.json`。外部原典自体の証明全体は検証していない。
