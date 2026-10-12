# Catalog 068 — 06・07 内容点検

- 点検担当：03/04担当エージェント（06/07執筆者とは別）。
- 点検日：2026-10-12、09:27–09:33 JST。追加結果の追記確認は下記追補に記録する。
- 対象版：公式 Git commit `fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb` の `source/06.pdf`（45ページ）、`source/07.pdf`（41ページ）。対応する抽出テキストで頁単位に読解。
- 対象記事：`drafts/catalog-068/integrable-metrics-controlled-boundary/`、`drafts/catalog-068/exact-orders-anticanonical/` の日英本文、引用記録、図の論理内容。
- 性質：執筆者以外による原典との内容照合。全証明の独立再検証、外部定理の証明検証、専門家査読ではない。他担当ファイルは編集していない。

## 06 — 照合した主張・核心

| 原典 | 照合内容 | 結果 |
|---|---|---|
| Theorem 1.1 p.2、§§2–3 pp.5–8 | 正次元滑らか射影、積分有効C、strict metricとJ(h)⊇O(-C)；任意pseudo有理Mに対しC上の有効補正C′でQ線形効果性 | 日英とも一致。重み付き積分をunweightedと同一視しない。signed discrepancyの正部分をbig klt境界に入れ、BCHM入力にし、実から有理の係数を回収する説明あり。 |
| Theorem 4.3 pp.9–10、Lemma 4.1 pp.8–9 | A0は任意有理因子；frame squared normsのunweighted L1とordinary strict patch；有限個Piに共通epsilon/k0、実際の因子の多重次数環の有限生成 | 一致。patchだけを大域的strict下界とせず、big性→小混合→共通ample reserve→klt境界→実際の線形同値の環を説明。 |
| Theorem 5.1 p.11、§5.2 pp.12–13、Lemma 5.2 pp.11–12 | 固定pseudo Cartier P、unbounded正指数のmL−Pの効果性から正倍数の通常非消滅 | 一致。P有効性・L数値非自明性を仮定に追加しない。全rank一、J=Oは全空間、reflexive hullの積分有効境界C、f*C例外、FubiniによるsCの可積分性を保持。 |
| Corollary 5.6 p.16 | 固定tensor次数p≥0、unbounded正指数；外冪版も含む | 一致。generic spanのdeterminantで固定pseudo誤差を得る。通常非消滅から不変性を推測しない。 |
| Theorem 9.2 pp.32–35 | chi≠0、smooth semipositive、任意代数torus、自然線形化の正倍数不変非消滅 | 一致。指数の実際の零値とm+1 shift、不変比の体、全rank一と不変rank一の区別、klt/toroidalモデルでの全valuation不等式、例外補正を除去した不変有理切断の帰還を説明。 |

### 06 — 直接入力・確認範囲

- OpenAI26b Theorem 1.1 p.1 は、04制作時にも原典で確認した指数入力。06 Proposition 9.1 p.32 の使用と対応。
- OpenAI26e Theorem 2.1 p.7 は原典の全記述を読み、06 §5.3 pp.13–15の別の通常変換への入力と対応。06 Theorem 9.2の不変rank一に全rank一の定理をそのまま流用する説明にはなっていない。
- PT arXiv:1409.5504v1 Theorem 3.3.5 p.24、DPS01 arXiv:math/0006205v2 Theorem 2.1.1 p.8、LMPTX23 Theorem 4.1 誌面1409/PDF17は03/04制作時に外部原典の記述を読んだ。06の全空間J=Oによる通常直像への適用、smooth係数のLefschetz、cotangent determinantの符号に整合。
- BCHM10、CL13の記述は執筆者の直接照合記録と06原典の使用箇所を確認。本点検者による外部PDFの再読は行っていない。外部証明の再帰検証は全て範囲外。
- 棚卸し：主定理の全結論の説明・図は用意されている。追加overviewにより中間結果の全体接続が詳細節の前に置かれた。

## 07 — 照合した主張・核心

| 原典 | 照合内容 | 結果 |
|---|---|---|
| Theorem 1.1 p.3（設定p.2）、§§3–4 pp.9–12 | 任意固定M、中心付き離散または零valuation、null交点、v(Nj)/mj→0；有効N~Q Lで厳密v(N)=0 | 日英一致。-M pseudoは仮定ではない。null-polar fieldの相対代数閉性、次数零の全adjoint rank一、曲率kernel包含、体拡大なしのtoroidalモデル、二方向への符号付き表示を保持。 |
| Proposition 2.2 pp.7–8、Lemma 2.1 pp.5–6 | equidimensionalモデル、p*f*A=0、垂直最小値のaffine性、実際の有限生成環、境界rayの生成元 | 独立節の図前主張欄は必要仮定と結論を保持。補正のvaluationが零とは仮定せず、pushforwardで補正を除いた後にcenterednessを使う。 |
| Theorem 1.2 p.4、§§6–7 pp.13–15 | 全i>0のHi(O)=0、任意T、自然線形化；正倍数不変非消滅 | 一致。source最大重み、cohomologyの(l−1)c、LefschetzのlL、determinant rank eのshift、v(Nj)=cM+ec、実際の有限個の正規化重みの有理凸結合を保持。非有効作用の有限核も自然line上で自明と説明。 |
| Corollary 5.1 p.12 | -M pseudo、generic formal arc、unbounded指数とo(mj)、点・零valuationを含む厳密零次数の整数因子 | 一致。generic fraction pointによる関数体埋込みとdZでの正規化、null交点、分母除去を説明。 |

### 07 — 直接入力

- OpenAI26e Theorem 2.1 p.7 の全記述と、07 §3.2 pp.10–11の適用を照合。全rank一と水平strict patchを別々に検証し、結果のunweighted metricと消えるA0を得ている。
- OpenAI26f Theorem 4.3 pp.9–10 と07 §§3.2–4 pp.11–12の適用を照合。共通epsilon/k0、Q線形同値、実際の多重次数環が必要で、数値錐のみの有限生成に置換していない。
- DPS01のsmooth係数Lefschetzは07 §7.1 p.14と整合。局所化、attracting decomposition、Calabi–Yau、toroidal化の外部定理の全記述・全仮定を本点検で再調査していない（記事の未確認表示を維持）。

### 07 — 未詳説の追加出力の分類

原典Introduction 1.3 pp.4–5の独立出力は、主要2定理の補題だけではない。下記を記事とhandoffに明記するよう執筆者・本部へ連絡した。詳細の新規制作・全証明照合は実施していない。

| 結果・頁 | 種類・役割 | 未詳説の理由／扱い |
|---|---|---|
| Theorem 9.1 p.21 | q=0、-M pseudo、generic arcの有界入力次数から任意delta>0の近似次数。Corollary 5.1の厳密結論に包含される別証明 | exact attainmentの核心を優先。nef reductionとjet extensionによる追加機構は範囲外。 |
| Proposition 10.1 p.25 | q=0、chi≠0、faithful T、equivariant very ampleの下で自然不変非消滅 | 全Hi消滅より異なる仮定での追加出力。Theorem 1.2と同じ仮定だとは扱わない。 |
| Theorem 11.1 p.27 | q=0、固定pseudo T-line G、unbounded jの不変jL−G切断から自然不変非消滅 | 不変固定誤差除去という独立出力。通常変換と同一視しない。 |
| Proposition 12.1 p.31 | RCの場合、全controlled invariant primeのクラスを含む有効有理因子生成の有限有理多面錐 | 単一valuationを超える独立出力。生成元自体がcontrolledとは限らない。 |
| Theorem 12.4 p.36 | RCの場合の自然不変非消滅 | Theorem 1.2に包含される別の有限生成・指標分離による証明。 |
| §13 p.37、§14 pp.38–39 | smooth semipositive反標準の通常非消滅への二つの降下 | scalar consequence。前者は01構造＋normのみ、後者はlocally constant MRCとunipotent固定ベクトル。証明詳細と外部入力を未点検。 |

## 指摘と判定

1. 数学的な核心の仮定欠落・量化の取り違えは、読解した範囲で発見していない。
2. 06 PT18と03/04 PT14が同一arXiv v1を指す。共通key PT14への統一を執筆者に依頼（表示編集事項）。
3. 06のoverview挿入でproof anchorがずれた疑いを一度送信したが、`article-structure.mjs`はoverviewを`proof-overview`に分離しproofCountを増やさないため撤回。執筆者に実レンダラーで意味的対応の再確認を依頼した。
4. 07の追加出力は本文に番号・頁・役割・未詳説理由を追記し、原稿全体を詳細完成と表示しないこと。選択した主定理2件＋Cor5.1の全結論への接続は確認できる。

## 追補

2026-10-12 09:36 JST：07日英の追加出力欄を読み、上記の番号・頁・包含／独立出力・未詳説理由が反映されたことを確認。06 PT14統一を確認。06の実レンダラーでproof-overviewが独立し、詳細proof-1〜5を保持する確認報告を受領（src/lib/article-structure.mjsの分岐も点検）。指摘2–4は対応済み。選択範囲で第1段階の内容引渡し可。第2段階の画面・リンク・冊子確認は本判定に含まない。
