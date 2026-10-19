# カタログ357 独立内容点検

- 担当：reviewer357（明示指定モデル `gpt-6-astra`、reasoning effort `high`）。
- 開始：2026-10-19 08:46:08 JST。第1回原典点検記録：08:48 JST。
- 原典：OpenAI, *Bi-Lipschitz Coordinates at Regular Points of Noncollapsed RCD Spaces*, September 25, 2026, 43 pages。
- 固定commit：`1581d4cbdd69a0faf34b2089614fe2a814316a6a`。
- 主原典SHA-256：`5500abd2391d238779793572caf1df5270a1ac488f6d88cc897d5cf51ac33093`。
- 方法：既存Sol制作の原稿・図・解釈・点検結果は使わず、主原典と下記外部原典から新規に点検した。記事完成後の対照結果は後段へ追記する。
- この記録は主要な論証と引用適用の内容点検であり、43頁の全証明の独立検証・形式検証・正しさの認定ではない。

## 主張と量化

1. **Theorem 1.1, p.1。** `n` は整数で `n>=2`、`K` は任意の実数。測度は厳密に `H_d^n`。full `CD(K,n)` と quadratic Cheeger energy を使い、complete/separable/geodesic/full-support/finite on bounded sets の規約を維持する。選んだ点 `p` の **すべての pointed GH tangent** が `(R^n,|.|,0)` に pointed-isometric という仮定である。
2. 結論は `p` の ambient-open 近傍 `U` と Euclidean-open `V⊂R^n`、その間の homeomorphism。上下距離評価は **全ての `x,z∈U`** に対して成り立つ原典の主張であり、a.e.対や正則点同士に制限されない。距離は `d|_{U×U}`、内在距離ではない。
3. `L_n` は次元のみ依存。原空間での近傍尺度は空間・点に依存してよい。証明末尾p.41では先に拡大定数、`A,B,D` 等を次元のみで固定し、後から十分細かいrescalingを選ぶ。
4. **Corollary 1.2, pp.1–2。** 全正則点を含む開集合、全測度、可算atlas、ambient-open chart domains、Euclidean-open chart images、各chartの `L_n`、transitionの `L_n^2` の全結論を対応させる。領域はexact regular locusを含むが、一致やregular locus自身の開性は主張しない（p.2の明記）。

## 核心の接続：原典から点検した内容

| 箇所 | 点検内容と記事で維持すべき限定 |
|---|---|
| Lemma 2.2, pp.6–7 | 正則点でのrescaling、noncollapsed volume convergence、全中心のdensity上界、Bishop–Gromovを組み合わせ、近傍中心・全小尺度での定量的Euclidean近似を得る。近傍中心がexact regularとは仮定していない。volume rigidityの半径損失のため先に拡大球を取る。 |
| Lemma 2.3, pp.7–8 | 全中心・全dyadic scaleの可逆Gram正規化、近傍・同程度尺度の比較、任意の小growth exponent。`R_i` の最小固有値の一様正下界を得る主張ではなく、`c_a r_i^(2a) I <= R_i <= CI`。 |
| Lemma 2.5, p.9 | 距離と比較するdyadic scaleで単射を得る。開像は近似的全射を繰り返し、completeな原空間で極限点を作るellipsoid inclusion (2.15) により示す。ここで `u` が既にbi-Lipschitzとはしない。 |
| Lemmas 3.1–3.3, pp.10–15 | singular Bochner measureに対しても全source poleで使えるkernel differenceを用意し、補正heat Gram `Q_i` とその逆 `H_i` を構成。`H_i` は単調増加、発散し得る。ball/heat相対比較だけではtwice-conjugated massを比較できない点を区別。 |
| Lemmas 3.5–3.7, pp.16–18 | 非可換行列のinverse increment identity、重み付きconvolution、正規化変更誤差を最終 `H_k` の小定数倍で吸収。Lemma 3.7の逆向き不等式には各尺度にweight 1かつ `B_{r_i}(x)` を覆うmass ballが少なくとも1つ必要。bounded overlapも必要。 |
| Lemmas 4.1–4.2, pp.20–22 | 正のPoisson sourceに対するL1 gradientのmassに線形な評価、dyadic volume deficitのtelescoping。これが `sup_a Σ_i P_i(a)=o(1)` の供給源。平方根の可 summabilityを仮定していない。 |
| Lemmas 4.4–4.6, pp.23–26 | radial derivativeの弱いcancelation、harmonic affine improvement、指数convolutionで誤差の二乗を可 summable にする。定数項を除去し、全中心・各尺度正のfloorを付ける。 |
| Lemmas 4.7–4.9, pp.27–30 | 二中心Poisson差のharmonicity、commutatorによる係数識別、unnormalized residualのradial transport、射影残差のcompactness contradiction。Lemma 4.8では `L∞` boundを残差で割る前に使い、squared defectの次数を保持する。 |
| Proposition 4.10, pp.30–31 | `D_{i,y}[u(x)-u(z)] <= C r_i^2(E_i(x)+E_i(z))`、`x,z,y∈B_4` と `d(x,y),d(z,y)<=C_sep r_i`。同じ `E_i` が全配置・全尺度に働き `sup_x Σ E_i(x)=o(1)`。全行列normの総和が小さいという主張ではない。singular partを含むBochner measureを扱う。 |
| §5.2, pp.33–35 | value spaceの固定patchから、`E_i` のnear-minimizerを1個選ぶ。positive floorが選択を可能にし、active point全てで `E_i(z)<=2E_i(x)`。field `v_i` は有限個のsmooth cutoffの和。 |
| Lemmas 5.2–5.3, pp.36–37 | factorial convolutionとinverse derivative boundsによりexponential baseを更新ごとに増やさず、次尺度 `r_{i+1}=r_i/2` の収縮で1階微分損失を吸収する。all-order inductionは有限scaleについて行う。 |
| Proposition 5.4, pp.37–39 | `h_{i+1}=h_i+(Dh_i)^(-T)v_i` を共通開集合 `Ω=u(B_1)` 上で定義。`(Dh_i)^TDh_i ≍ H_i` とjet boundsを同時に閉じる。`D²h_i(ξ,ξ)` のdiagonal recurrence (5.31) をℓ²で足し、(5.34)の線形誤差をCauchy–Schwarzで処理し、`ΣE_i` のみを使う。`H_i` を微分せず、有界性も仮定しない。各 `h_i` のglobal injectionは要求しない（Remark 5.5）。 |
| Proposition 5.6, pp.39–41 | uniform limitとtail `τr_i`。任意の異なる `x,z∈B_ρ` のambient距離 `t` に対して `Dt<=r_i<2Dt` を選ぶ。central ellipsoidがvalue-space直線segment全体とそのpreimagesを保証し、Taylor二次誤差・metric bound・2本のtailを合成して両側距離評価 (5.42)。微分評価のみからglobal injectionを推論する経路ではない。 |
| Theorem 1.1 proof, p.41 | `L_n=4√A(n)`。距離が `d/r_*` のときcoordinate valuesにも `r_*` を掛け戻す。開性、全点対、不変の定数を維持する。 |
| Corollary 1.2 proof, p.1 | DPG Theorem 1.12(ii),(vi)でregular set full measure、全chart domainの和、separable metricのsecond countabilityから可算subcover、chartと逆chartの合成でtransition `L_n²`。 |

## 外部入力の原典照合

### DPG

- Guido De Philippis and Nicola Gigli, *Non-collapsed spaces with Ricci curvature bounded from below*, arXiv:1708.02060v3, 23 June 2025。
- URL：<https://arxiv.org/pdf/1708.02060v3>。
- 取得物：`reviews/sources/dpg-v3.pdf`、SHA-256 `a0d7edd7a3f68111c7109ded117c37f521d208e0d02e5c7ce31e43df7798a612`。
- Theorem 1.12(ii),(vi)：誌面=PDF p.7。`m≪H^N` とa.e.全 `r↓0` pGH Euclidean convergenceが同値。本稿は `m=H^n`、full supportなので仮定を満たす。Corollary 1.2, p.1への接続を確認した。第(vii)項と末尾trace identityもp.7にあり、本稿Lemma 2.1のnoncollapsed dimension/traceの入力と整合するが、これらの全局所化を再帰的に検証していない。
- Theorem 1.2：誌面=PDF pp.3–4。Theorem 1.3：誌面=PDF p.4。noncollapsed volume convergenceを本稿Lemma 2.2, p.6が使う。Euclidean limitはn-dimensionalなのでcollapsed branchが排除される。
- Theorem 1.6：誌面=PDF p.4。ncRCD(-δ,N)かつunit ballの体積が `(1-δ)ω_N` 以上なら、**半径1/2のclosed balls** のGH距離がε以下。本稿Lemma 2.2が「固定拡大球を先に取る」と明記している点と照合した。
- Corollary 2.14：誌面=PDF p.17。density `ϑ_N(x)<=1` が全点で成立。本稿Lemma 2.2, p.6 / Lemma 4.2, p.22の全中心の上界に対応する。
- 以上は結果の記述と適用箇所の照合。DPG各証明の全検証ではない。p.7はレンダリング画像でも誌面番号を確認した。

### Hatcher

- Allen Hatcher, *Algebraic Topology*, 2002, author's electronic edition。
- URL：<https://pi.math.cornell.edu/~hatcher/AT/AT.pdf>。
- 取得物：`reviews/sources/hatcher-at.pdf`、SHA-256 `bebb3032bf9021b956da3bd070eb6c67dc662cf849be9cdf6679f677560e5618`。
- Theorem 2B.3：**誌面 p.172 / PDF p.181**（画像確認済み）。Euclidean-open domainから同次元Euclidean spaceへのcontinuous injectionの像がopen。
- 本稿Proposition 5.6, p.41では、Lemma 2.5から `u(B_ρ)` がEuclidean-open、全点対評価から `F` がcontinuous injective、したがって `F∘u^{-1}` に適用する。metric spaceのdomainに領域不変性を直接適用したり、finite `h_i` の局所微分同相だけから極限開像を推論したりしていない。

### Mondino–Naber（背景比較）

- Andrea Mondino and Aaron Naber, *Structure Theory of Metric-Measure Spaces with Lower Ricci Curvature Bounds*, arXiv:1405.2222v3。
- URL：<https://arxiv.org/pdf/1405.2222v3>、取得物 `reviews/sources/mn-v3.pdf`。
- Theorem 1.1：誌面=PDF p.3。一般の `RCD*(K,N)`, `N>1` に対し、可算個の **m-measurable subsets** がnull set以外を覆い、それぞれは `R^{k_j}`, `1<=k_j<=N` のmeasurable subsetにbi-Lipschitz。直後の強化は `(1+ε)` distortionを許す。
- 本稿Theorem 1.1はnoncollapsed・整数次元・指定regular point・ambient-open domain・同次元open imageを要求する別の強化。既知結果の定数が悪いだけを改善した、と要約してはいけない。MNは背景比較であり、本稿の独立した直接依存の矢印にしない。

### Ambrosio–Honda / Jiang–Li–Zhang の独立追加照合（08:54 JST）

- 執筆担当が取得した `drafts/catalog-357/regular-rcd-coordinates/external/ah18.pdf` と `jlz16.pdf` を直接読んだ。執筆者の解釈・点検メモを根拠として承認したものではない。該当ページをレビュー配下へPNG化して視認した。
- Ambrosio–Honda, *Local spectral convergence in RCD*(K,N) spaces*, arXiv:1703.04939v1。§2.1 p.7は固定 `K,N` のpointed mGH convergent RCD* sequence/full supportを設定。Corollary 4.12（誌面=PDF p.20）第1文は、極限の `B_R(x)` 上のharmonic `f` に対し **任意の `0<r<R`** で近似空間の `B_r(x_i)` 上にharmonic `f_i` が存在し、strong H1,2 convergenceを与える。第2文のharmonic replacementsには `H_0^{1,2}=Hhat_0^{1,2}` の別条件がある。記事は第1文の内側近似を採用し、境界までの一括収束を主張しないので整合。本稿Lemma 2.2, p.6は先に大きい球を取り、十分遅いrescalingを固定の弱いcurvature boundの下で扱える。strong convergenceをlocal uniform convergence/gradient boundへ補強する局所正則性は本稿Lemma 2.1の入力に依存し、その外部全証明は未照合。
- Jiang–Li–Zhang, *Heat Kernel Bounds on Metric Measure Spaces and Some Applications*, arXiv:1407.5289v2。Theorem 1.2（誌面=PDF p.2）は `K<0`, `1<=N<∞` のRCD*上の全時刻・全点でのGaussian上下評価を、ball volume denominatorと `exp(±C_2t)` 付きで与える。Corollary 1.2（誌面=PDF p.3）は追加の `t^{-1/2}` を持つgradient estimateだが、**a.e. x,y** の結論。本稿§3.1, p.10は固定の弱い負のcurvature bound、`0<t<=1`、局所体積比較から一様定数の表示(3.1)–(3.2)へ移し、Lemma 3.1, pp.10–11がSobolev-to-Lipschitz・heat kernel continuity・full supportを使ってdifference estimateを全source poleへ延長する。記事はgradientそのものが全点で定義されるとせず、この区別を維持している。
- 結果の記述と使い方に不整合は検出しなかった。両外部原典の全証明は検証していない。

## 現時点の判断と限界

- 主要結果の範囲、二つの主要評価、value-space constructionから極限chartまでの説明を原典に基づき記事化できる。
- 上記の範囲で明白な不整合や、記事化を止める具体的な破綻は検出していない。この表現は原稿の正しさの認定を意味しない。
- 非滑らかな全calculusの正当化、heat kernel入力・harmonic convergence入力の全適用、全ての高階組合せ係数、引用文献全体の証明は独立に再現していない。AH/JLZの主要statementと上記使用箇所は、執筆担当に加え本レビューでも独立に照合した。
- 原稿の主張を「著者が示す」と紹介し、編集側の確認は上記読解・照合範囲として分ける。既知のregular locusの開性やcoordinate componentsのbounded Laplacianを追加結論にしない。

## 記事完成後の対照

記事・図の完成待ち。日英同値、独立証明節のstatement、主結果の各結論、図と説明、引用ページを後続点検する。

### 日本語本文の先行対照（2026-10-19 08:50 JST）

- `article.ja.md` 初期版を原典と対照。Theorem 1.1 / Corollary 1.2の量化と全結論、Propositions 4.10 / 5.4 / 5.6の独立statement、有限尺度の全点対比較、領域不変性の適用に内容上の重大な欠落は見られなかった。
- 具体修正1件を執筆者へ返した：確認範囲末尾の「§§3.1–3.2、4.4–4.6」は原典に存在しない§4.5–4.6を示す。原典§4は4.1–4.4であり、意図がLemma 4.4–4.6なら明記すること。
- ユーザー重点に対応するため、MNの可測片による一般RCD* rectifiabilityと本稿の指定regular point・ambient-open chartsを区別する短い比較、DPGのvolume/density入力の照合済み項目を追加するよう伝達した。
- 引用は生成前、英語・図・overviewは未確認。この時点で受領完了とはしない。

### 英語本文・内部導線の先行対照（08:52 JST）

- 英語の主結果、3つの中間命題statement、各計算式・論証段階・確認範囲は日本語と同値。新たな数学的差異は未検出。
- 共通 `article-structure.mjs` の節ID規則を読んで具体修正2件を返した。主定理概略は `proof-overview` で通常proof番号を消費しないため、冒頭のProposition 5.4への `#proof-3` は `#proof-2`、Proposition 5.6への `#proof-4` は `#proof-3` に直す必要がある。conclusionCoverageの現状の `proof-overview` / `proof-3` / `proof-4` は正しい。
- 英語H2 `Inputs and where they are used` は共通rendererのdependencies判定に一致せずproof扱いになる。`External inputs and where they are used` への変更を提案した。

### 本文修正と図原本の対照（08:55 JST）

- 先行指摘3件（存在しない節番号、2つのproofリンク、英語dependencies見出し）は日英本文で反映を確認した。DPG volume/densityの直接入力とMNの背景比較も追加され、区別は原典と整合している。
- `overview / directional / iteration / limit / atlas.tikz` の5本を主原典と照合。二入力の合流、二中心のsquared defect、diagonal second derivativeによるℓ²制御、点対別尺度から両側距離評価と開像、可算atlasへの接続は適切。
- 図について具体修正2件を返した。directionalの `v=f_i^z-f_i^x` はunit-scaleの後段と混ざるので、原典§4.4に従い `v=(f_i^z-f_i^x)/r_i²` として長さ単位変更を明示。iterationの高階微分normには `H_i→R^n` を明記して、Euclidean normで一様なjet boundを主張したと読まれないようにする。
- この段階では図の数理内容とTeX原本の対照であり、最終SVG画面のレイアウト確認は本部・執筆者の後続検査と区別する。

### 接続記録と図修正（08:55 JST）

- `overview/connections.json` の7接続を、上記の独立原典照合と比較。5 direct（AH、DPG volume、DPG density、JLZ、Hatcher）、1 consequence（DPG full-measure）、1 background（MN）の関係種別、結果番号、原典ページ、適用条件に矛盾なし。
- 背景比較のリンク `#main-results` は共通節ID `#results` または比較のある `#dependencies` に変更するよう本部へ伝達した。
- directionalのrescaled Poisson差とiterationの `H_i→R^n` normはTeX原本で修正反映を確認した。

### 図修正の配布TeX反映・引用検査（08:56 JST）

- directionalの日英配布TeXに `v=(f_i^z-f_i^x)/r_i²`、iterationの日英配布TeXに `H_i→R^n` normが含まれることを確認。
- `citation-build.json` の29対象ファイルをSHA-256で照合し、不一致0。
- 対象記事registryの `sync-citations.mjs --check --text-only` が成功（1 catalogue, 4 files）。通常PATHにnpmがなかったため、bundled Nodeの絶対パスで同じ検査スクリプトを実行した。
- 数理的残指摘は現時点でなし。これはこの記事が主原典の主張と主要論証を正確に紹介している範囲の判断であり、原典全証明の正しさの認定ではない。カタログoverviewの最終対照は待機中。

### 日英数式列の対照（08:57 JST）

- 日英のdisplay式は各12本。全式の仮定・係数・添字・量化・結論を対照し、英語の終止符と「各固定i」の言語差以外に数学的差異なし。
- inline式は日本語160、英語155。差は日本語で `p,L_n,\mathcal U,y,D_{i,y},v` を文章中で再度数式にする箇所、`w/α` を英語が「dividing by α」と書く箇所、英語が次数 `m` を再度数式にする箇所等。`q^a` の式には先頭空白差もある。DOM合計172/167の差はこれらによるもので、主要な仮定・定義・評価式・結論の欠落ではない。

### 日英カタログ案内・共通表の対照（08:59 JST）

- `overview/article.ja.md` / `.en.md` / `presentation.json` / `citations.json` を主原典と固定版公式 `overview.tex` / `overview.pdf` の抽出テキストに対照。1行の共通表、主張の量化、二入力から反復・全点対・開像への役割、確認範囲、PDF未生成の明記は整合。
- 公式357の掲載はPDF p.38で正しい。公式overviewのpoint-dependent finite constantと主原稿のdimension-only `L_n` の違いは正しく区別されている。
- **修正必須1件：公式分野範囲。** 固定版 `overview.tex` line762にDifferential geometry開始、line764に333、line820に361、その後line822でPartial differential equationsへ切り替わる。したがって範囲は **333–361**。日英overviewと本部inventoryの333–360を直すよう双方へ連絡した。主張の内容の問題ではないが、公式分類に従う制作要件として修正が必要。

## 独立内容点検の引渡し（2026-10-19 09:00 JST）

- 終了：09:00 JST。開始08:46:08 JSTから約14分。原典の主要statement・核心接続・5外部文献の指定statement/適用、日英記事・5図TeX・11結論対応・日英overview/1行共通表・7接続を点検した。
- 最後の公式分野範囲333–361は日英overviewとinventoryで修正反映を確認。MN背景比較リンクも `#dependencies` へ修正済み。
- 返した内容・導線修正はすべて反映され、今回の独立内容点検で未解決の具体的修正指摘はない。article/overviewの対象registry `--check --text-only` は成功。
- **判断の範囲：** 原典の主張と論証を紹介する初稿として、主結果の条件・結論・量化・各結論への証明概略、および記録済み外部入力との接続が整合する。原典全証明の正しさ、全非滑らかcalculus・全高階計算・未照合外部結果を認定したものではない。
- 図の数学的内容はTeX原本と配布TeXを点検。最終SVGの全10枚のレイアウト目視は執筆担当、本部の033/034比較・サイト日英PC/375px・冊子PDFは別の工程/証拠として区別する。ここでそれらを独立完了とは記録しない。
- レビュー書込みは `coordination/catalog-357/reviews/` のみ。共有src/public、他担当原稿、git commit/push、冊子PDF生成は変更・実行していない。

### 引渡し後の形式編集への追認（2026-10-19 09:01 JST、同じAstra/high）

- 本部が日英overviewの記事導線段落と直後のmain引用を「収録論文」H2より前へ移し、`CATALOGINVENTORYTOKEN` を単独節にした変更を点検。
- レビュー済み15ファイルのうち変更は日英overviewの2ファイルだけ。移動を機械的に逆転すると両言語とも旧SHA-256が完全一致することを確認した。数学的文章・仮定・引用値は変更されていない。
- `content-review-result.json` の当該2ファイルのhashを更新し、旧/新hashと追認範囲を追記。初回点検の開始・終了記録は維持した。
- inventoryの `officialAnchor: subject7` / `officialDisplayOrder: 16` は、固定overview.texの全17見出し順から独立に確認。分野範囲333–361は保持されている。
- 追加の具体的修正指摘なし。サイト/PDF表示検査と全証明認定を含めない範囲は維持して、内容点検記録を閉じる。

### 平均積分記号の表示修正への追認（2026-10-19 09:04 JST、同じAstra/high）

- 日英本文の `R_i(y)` 定義1か所ずつで、未対応の `\fint` を `m(B_{r_i}(y))^{-1}\int_{B_{r_i}(y)}G\,dm` に展開した変更を点検した。
- 主原典§1.3 p.4は平均積分を積分値÷球の測度と定義し、(2.8) p.7の `R_i(y)` はこの平均である。球はfull-supportの局所有限測度で正かつ有限の測度を持つため、変更は正確な同値表示であり、Gram行列の正規化を変えない。
- 各言語1件の表記置換を逆転すると旧SHA-256が完全一致する。他のレビュー対象ファイルは変更なし。対象記事2本のhashと変更履歴を `content-review-result.json` へ更新した。
- 追加の内容指摘なし。図は変更対象外で、内容点検の判断・確認範囲も維持する。
