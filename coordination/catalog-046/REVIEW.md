# カタログ046 内容点検

担当：記事執筆を担当していない `content_review`。対象は固定原典2本と担当者の日英初稿。原典の全証明の独立検証・査読ではなく、主要主張、証明概略に必要な本文、入力条件と主結果への接続の照合である。

## 原典本文の照合

原典は `sources/fourfold.pdf`（41頁、2026-10-05）と `sources/surface.pdf`（26頁、表紙2026-09-23）。ここに示すページは誌面/PDFとも同じ。書誌・ハッシュの固定記録は `inventory.json` と各記事 `sources.json` を参照。

| 対象 | 原典の主張・接続 | 照合結果 |
|---|---|---|
| Fourfold, Theorem 1.1, p.1 | smooth connected projective complex fourfold X、simple abelian surface A⊂X、large fundamental group、im π1(A)≅Z、普遍被覆内の正次元compact analytic subvarietyなし、非Stein | 全結論を区別。非正則凸性は定理後の帰結で、p.2のRemmert reductionをさらに用いる。 |
| Fourfold, Proposition 2.1 / Lemma 2.2, pp.4–6 | S′内の単純abelian surfaceで像がZなら、Bの次元6、F=A×{0}を含む一般完全交叉Xの次元4。Lefschetzでπ1を保存し、F外の各B-fiberは高々3点 | Xのsmooth/projective/connected、cyclic image、largeを担う工程。Bへの射影が非定数の場合とF内の場合を分け、後者の曲線にはAの単純性を使用。 |
| Fourfold, §2, p.6 | K=ker(π1(A)→π1(X))≅Z³、A_K=C²/K≃R×(S¹)³、H₃≅Z | A_KはXの普遍被覆におけるAの逆像成分であり、Aの普遍被覆ではない。closed complex surfaceとしてSteinならAndreotti–Frankelに反する。 |
| Fourfold, §1.1, p.2 | large⇒正次元compact analytic subvarietyなし。正則凸ならRemmert reductionのcompact connected fibersが点となりStein | 「非Steinだけで非正則凸」を結論していないことを点検する。 |
| Fourfold, Proposition 4.3, p.19; Theorem 6.1, p.28 / §6.5 pp.34–35 | orbifold S、ordinary locus内のY→S、YはJac(C)の点blowup。cyclic upper bound＋全非零べきの非自明性で像Z | 局所dihedral translation labelsは大域π1(S)の表現ではない。bounded projected diameterにより全べきがsingle edgeとなる点を確認。局所criterionの全補助計算の再検証はしていない。 |
| Fourfold, Lemmas 7.1–7.2, pp.35–40; Theorem 7.3, p.40 | orbifoldからsmooth projective ambientへの置換、surface blowdownのambientでの実現、π1とsurface homomorphismの保存 | 元のorbifoldを最終Xやその普遍被覆と同一視しない。simple Aの埋込みを得てからProposition 2.1を適用。 |
| Surface, Theorem 1.1, p.2 | smooth connected projective complex surface X、connected nodal rational-component curve Z₀、π1(Z₀)の像無限。普遍被覆内にclosed/connected/noncompact/locally finiteなrational curvesの和W、各点のhull非compact | 全結論を区別。smooth projective設定の反例であり、largeは主張していない。 |
| Surface, Proposition 4.2, pp.15–16; Proposition 5.3, p.20 | 48 generatorsのweighted basis、24 involution relators、P=(1+t)G、t=49/200、monodromyとboundaryに各1/100を割当ててQ無限 | weighted inequalityの余裕と、有限parameter cover・compactification後にboundary powersを選ぶ順序を確認。全Magnus計算の独立検証はしていない。 |
| Surface, Lemma 6.1, pp.21–22 | SNC boundaryのlocal群像は有限、有限商Pfは各local群全体で単射。U′→Uをnormalization/resolutionしてsmooth connected projective X、ρ_X:π1(X)→Qへ降下 | 個々のmeridianだけの検出ではなく、crossingにおける全local群とresolution exceptional meridiansも扱う。有限被覆U′→Uは普遍被覆ではない。 |
| Surface, Lemma 6.2, p.23 | distinguished fiberのvertical meridiansが自明。局所正規化(u,w)↦(u,w^e)、main sphereはdegree 1、tailは2点だけで分岐 | Xの特別fiberはsmooth rational componentsとordinary transverse crossings。resolutionが当該近傍を変更しないことを使う。 |
| Surface, Lemma 6.3, pp.23–24 | punctured fiberのQ像dense、lifted fiberの像はinfinite open subgroup Nにdense。deformation retract近傍とhのpropernessでZ₀に像無限を移す | smooth nearby punctured fiberからcompact rational nodal fiberへの移送を、単なるspecializationの断定にしない。 |
| Surface, Lemma 1.2, pp.4–5 / proof of Theorem 1.1, p.24 | W→Z₀はkernel coverで無限枚。rational componentsはsimply connectedでcompactにlift。正則関数はW全体で定数 | {w}のholomorphic hullがclosed noncompact Wを含むため非compact。非Stein性を経由しない具体的障害。 |

## カタログ内・外の関係

- 両論文の本文と参考文献を照合した範囲では、相互の直接引用・主結果の直接使用は確認されない。4次元largeな例と、2次元でcompact rational curvesを用いる例という別構成・比較関係である。単なる次元改善の依存矢印は作らない。
- Fourfoldのlarge条件は正次元compact analytic subvarietyを排除する。Surfaceでは普遍被覆にcompact rational componentsが存在する。この違いをカタログ案内に維持する。
- Surface §1.2 p.3は *The abelianity conjecture for special compact Kähler manifolds* と *Semialgebraic universal covers of normal projective varieties* を、それぞれ「この例はspecialでない」「普遍被覆は指定のsemialgebraic open subsetとして表せない」という帰結・比較に用いる。これらはsurface反例の構成への入力ではない。本部は相手原典 Corollary 1.4 p.3 / Corollary 8.1 p.60 を別途照合し、`drafts/catalog-046/overview/connections.json` に記録した。本点検担当の独立照合はsurface側の使用箇所までであり、本部の照合範囲と混同しない。

## 初稿との照合

### Surface 原稿の一次点検

日英本文（引用・図生成前の版）を照合。主定理の全結論、独立節の Proposition 5.3 / Lemmas 6.1–6.3 / Lemma 1.2 の主張、48・97・47・24の生成元数、weighted relation cost、有限群の全局所検出、propernessと収縮近傍、singleton hull の論証は原典と整合している。

修正依頼：

1. 有限 étale な `B′→B` 自体が境界 `c_*` で分岐するとする記述を、その射影完備化 `C′→P¹` が分岐指数2を持つ、に修正する。
2. `bar(ω)` を `[ω]` が `E/{±1}` に誘導する自己同型と明示する。
3. 近傍への包含が `Z₀` を経由する、という記述を、homotopyないしπ1上（基点共役を除く）の因子化と明示する。

外部記述の補助照合：担当者が取得した SGA 1 Exposé XII Théorème 5.1（locally finite type、properness不要）、Proposition 5.3（normal analytic space、dense complementからfinite normal coverの一意性）、Łojasiewicz §3 Theorem 2 p.464（locally finite semianalytic collectionとの両立三角形分割）の本文を本点検担当も読んだ。外部証明自体を再検証したものではない。

上記3点は担当者が日英へ反映し、本点検担当が本文上で再確認済み。`articleGuides.conclusionCoverage` の4項目は、Xのカテゴリー、Z₀と無限像、Wの全位相的性質、singleton hull/非正則凸性をすべてカバーしている。文章の内容点検はこの範囲で合格。

生成後の5組の図原本（overview / quotient / descent / fiber / hull）も内容照合した。全体図の分岐合流、各矢印の使用内容・原典参照、局所全群の有限検出、ホモトピーを除く因子化、closed noncompact Wからhullへの論証は本文と整合し、追加の数学修正は不要。SVG/TeXの機械的一致と画面レイアウト検査は担当・本部記録を参照する。

### 案内の一次点検

日英本文と比較図のTeX原本を照合。両経路のカテゴリーと解析的障害は原典と整合。日本語図の「正次元compact analytic subvarietyなし」に `X̃₄` 上という場所を明示するよう依頼し、本部が修正済みと報告した。画面表示の比較・最終成果物の検査は本部記録を参照。

### Fourfold 原稿の一次点検

日英本文（引用・図生成前の版）を原典に照合。次の各項目は原典と整合し、内容上の追加修正を要しない。

- Theorem 1.1のsmooth/connected/projective/4-dimensional、simple A、large、cyclic image、正次元compact analytic subvarietyの不在、非Steinの全結論。非正則凸性はさらにRemmert reductionを通じて説明している。
- Theorem 6.1の主張欄と直後の説明：simple Jacobianの6分岐点、labelごとの仮想二重分岐被覆、orbifold ordinary locusにあるsurface map、meridianの上界と全非零べきの下界。局所translation labelsを大域表現と取り違えていない。
- Lemma 6.6の必要方向は「orbifoldで零ホモトピックならpath groupoidで自明」であり、局所criterionの対偶を使えることが本文に残る。uniform hyperbolicity・kernel compatibilityは内部入力として扱い、全定数・全有限モデル検証は未完了と明示される。
- Theorem 7.3の主張欄と射影実現：Hamm–Lêはまず拘束のない一般切断に適用し、EhresmannでYを含む切断へ移す。surface blowdownはH|G=O(α,β), β>α>0、D=H+αGの収縮を経て、ambient π1だけでなくsurface homomorphismも保持する。
- Proposition 2.1の主張欄と説明：Bの次元6、c=d+2、四点条件4d+8>4d+6、正次元部分多様体がBで動くかFに含まれるかの分岐、後者の曲線にsimple Aを使用。K≅Z³のcoverをAの普遍被覆と混同していない。
- 日英で結果番号、仮定、数式、節の役割と未確認範囲は対応している。末尾の「§3・§5は完全には追っていない」は無限性の核心の内部入力を独立検証済みとしない適切な限定である。

4組の図原本（overview / cyclic / projective / obstruction）を本文と照合。各矢印の入力・役割、局所ラベルの扱い、普通の射影ambientへの移行、rank3の被覆と非正則凸性への追加条件は整合している。`conclusionCoverage` の5項目は主定理の全結論をカバーする。

図修正依頼：obstruction図の「全ての部分多様体に無限群像 / every subvariety」は0次元も含む表現なので、「正次元部分多様体 / positive-dimensional subvarieties」に限定する。本文と主定理は既に正しく限定している。2026-10-13 23:42 JST、図原本の日英見出しが修正されたことを再確認した。

記事で使用するdisplay mathの `\\[...\\]` 表示は、本部が共通レンダラーの対応を確認済み。最終MathJax画面は本部QA記録を参照。外部Hamm–Lê Theorem 1.1.3(ii) / Milnor Theorem 7.2の原典記述・ページ確認は本部の `external-inputs-hq.json` に保存されており、本点検担当もHamm–Lêのsmooth open varietyへのcell attachment記述を補助確認した。

## 内容点検の結論（2026-10-13 23:42 JST）

2本の日英記事本文、計9組のTeX図原本、案内日英本文と比較図について、上記の主要主張・仮定・全結論・証明接続の範囲で受領可能。Surfaceの3点、Fourfold図の1点、案内図の1点を返却し、全ての内容修正を実ファイルで確認した。未解決の内容指摘は残していないが、次節の未検証範囲は解消したものと扱わない。

これは執筆者以外による内容点検である。原稿全体の独立証明検証、専門家査読、公開準備完了を意味しない。生成物ハッシュ・引用検査・数式表示・指定見本との画面比較は、本部と記事担当の検査記録に責任と結果を分けて保存する。

## 残す確認範囲

- Fourfoldのarithmetic arrangement、local graph compatibility、hyperbolicity、ambient blowdown全計算、およびSurfaceのmonodromy/Magnus全計算を独立に再証明していない。
- 各外部入力の原典記述の照合は記事担当のsources/statusも参照し、確認できなかった外部版・適用接続を記事末尾と引継ぎへ残す。
- 著者が反例を証明したと主張することと、編集側が列挙した範囲を照合したことを区別する。形式自動検査の成功を数学的正しさの認定としない。
- 実サイト、日英冊子PDF、公開版の表示・リンクは第2・第3段階。ここで未実施を合格扱いにしない。

本部補記（23:46 JST）：受領後の最終版ではFourfoldのdisplay mathを担当が `$$...$$` に統一済み。数式内容は変更なく、両記法に対応する本部検査で日英整合を確認した。
