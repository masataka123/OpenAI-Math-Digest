# 準備調査・照合範囲

2026-10-10（JST）、042本部。これは記事制作前の準備調査。本文執筆、図制作、初稿開始は未実施。

## 書誌と公式一覧

- GitHub APIのmain参照を取得して公式commit `fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb` に固定。
- 同commitのCONTENTS.md、overview.tex、overview.pdfを取得。CONTENTSの042節にPDFリンクは1本、overview.texの042にも同一PDFリンクが1本。前後は041・043。
- overviewは2026-10-06付、41ページ。公式分野順は2番目のAlgebraic and complex geometry（冒頭p.5）、042はp.6。分野内032–069、045・061は掲載されていない。実際の36番号をinventoryへ抽出した。
- 論文の表紙・PDF metadataともタイトルはEvery complex K3 surface is Oka、著者OpenAI。表紙の版はSeptember 23, 2026。pdfinfoの生成日時は参照版の日付の根拠にしない。
- pdfinfoで56ページ。SHA-256：`c35e20c01dcefe7634db141846045e88676001de7097c3678832b322ecbd9734`。
- `src/data`、`drafts`、`coordination`、`research`、`prototype`のタイトル・path・Oka/K3表記検索では同一記事なし。060の同一論文記事も検索範囲内でなし。042番号の既存分野データは、記事の存在とは区別した。
- 通常リンクは固定commitのGitHub閲覧URL、取得用はraw URL。GitHub閲覧URLにページfragmentを付けない。

## 原典の確認方法

pdftotextのページ区切りと誌面のページ表示を使用し、主要結果p.2、分類とsprayのp.54、overview p.6はPNGでも確認した。p.2のCorollary 1.2は**像の閉包**がSであり、全射を主張していない。p.54のCorollary 10.3は**射影的K3**に限定される。

PDF・抽出テキスト・PNGは `/tmp/math-digest-042-preparation/` に置いた一時キャッシュで、Git成果物には含めない。消失時はinventoryと外部記録のdownloadUrlから再取得し、SHA-256照合後に読む。ページPNGの作成は新しい解説PDFの制作ではない。

## 今回読んだ本文と、確認の意味

「読んだ」は記述・証明経路を調べた意味であり、すべての評価や証明の正しさを独立に検証した意味ではない。

| 原典箇所 | 準備で確認した内容 | 限界 |
|---|---|---|
| pp.1–5 | 表紙、目次、Theorem 1.1／Corollary 1.2の主張、証明構成、Definition 2.1のL | Introductionのみを証明検証とは扱わない |
| pp.6–12 | Proposition 2.2の軸の完全一致・有限長版、分解と収縮、local sprays、パラメータ付き平面拡張、Corollary 2.10による例外点への伝播、Theorem 3.1の主張 | scalar approximation・Stein入力の原典との個別照合は未了 |
| pp.16–19 | Proposition 3.4の主張・証明。座標変更で横パラメータを細くし、一方向拡張を貼合せ、完備距離でentire極限を得る | Lemma 3.3 pp.14–16の全評価、Lemma 3.2 pp.12–14の全証明は未確認 |
| pp.26–28 | §4.4のTheorem 3.1の証明。実面上の近似と貼合せ→多面体の制約除去→polydisc→CAP | Lemmas 4.1–4.5 pp.20–26の全証明・一様定数の閉じ方は未確認。p.26の結末と適用の確認に限る |
| pp.28–31 | Proposition 5.1とLemma 5.2の主張、二つの次数の曲線族、Lemma 5.3の方向分離、Lemma 5.4のcomplete flows、Proposition 5.1の結び | Lemma 5.2の証明全体とChen–Gounelas／Grauert原典は未照合 |
| pp.31–37 | Theorem 6.1の主張と§6の証明経路、exactnessによる横零モード除去、Fourier分解、二次反復、正の残存幅、Lemma 6.4のrecentring | 個々の定数・領域包含を独立に再証明していない |
| pp.37, 41–44 | Proposition 7.1の主張、quadric退化の導入、Lemma 7.4のseam接続、無限延長・transverse partner・被覆・非偏極変形・Torelliへの結び | pp.38–40のraw atlas構成・全計算は未読／未検証 |
| pp.44, 47–50 | Theorem 8.1／Lemma 8.2の主張、safe actionのコンパクト性、Lemma 8.4のrecentringと作用量保存、Lemma 8.5の異なる葉、Theorem 8.1の結び | pp.45–46の格子・isotrivial中心・作用量の初期構成、引用[8]の原典照合は未了 |
| pp.51–52 | Lemma 9.1とTheorem 1.1の証明全文を読み、r=0/1/2の供給箇所、固定vの群、Torelli、射影性、CAPへの合流を対応 | Ratner、Borel、算術格子、Torelliの入力原典の版・正確な結果・適用条件は未照合。群論の全議論を独立検証したとはしない |
| pp.53–54 | Corollary 10.1、1.2の証明、strong dominability、Corollaries 10.2–10.3の主張・証明 | 補間・immersion・Enriques・projective Oka ellipticityの外部原典は未照合 |
| pp.55–56 | 参考文献30件と本文の引用先を対応 | 引用数は検証済みの入力数ではない |

## 外部入力の今回の照合

書誌・版・URL・ページ・SHA-256は [external-sources.preparation.json](external-sources.preparation.json)。これは準備用記録であり、記事のcitations.jsonではない。

| 供給元 | 供給結果→利用先 | 関係・今回の確認 |
|---|---|---|
| Global Spherical Shells（公式060、2026-09-24、39ページ） | Theorem 1.1、p.1 → K3 Oka Corollary 10.2、p.54 | `consequence`。連結・極小・コンパクト、b₁=1、b₂>0、κ=−∞の仮定と大域球殻の結論を照合。class VIIの正b₂場合で使う。060の証明は未検証、K3主定理へ矢印を引かない |
| Surface flexibility（Forstnerič–Lárusson、arXiv:1207.4838v3、2013-02-21） | Introduction p.2：被覆でのOkaの上昇・降下 → Corollary 10.2のEnriques場合、p.54 | `consequence`。記述を照合。K3被覆の存在を供給する[18]は別途未照合 |
| 同上 | Introduction p.4：tori・bielliptic・Kodairaの既知のOka性 → κ=0の場合、p.54 | `consequence`。原典に列挙された既知結果として照合。その各証明は未検証 |
| 同上 | Introduction・Theorem 4、p.3 → class VIIの正例・負例と場合分け、p.54 | `consequence`。Hopf／EnokiはOka、Inoue／Inoue–Hirzebruch／intermediateはnot strongly Liouville、したがって非Okaと照合。古い原典のGSS条件付き網羅性を060が補う構造を確認。Theorem 4の証明は未検証 |

外部arXiv版は誌面pp.2–4がPDF位置2–4と一致する。雑誌掲載版3714–3734の誌面番号をarXiv PDFへ転用しない。

## 初稿で優先して照合する残りの入力

以下の版・結果名は**本稿の参考文献と引用記載に基づく候補**。原典確認が済むまで外部定理の照合済み表示にしない。今回未取得のURL・ページは推測で埋めない。

| 本稿の引用 | 入力候補と使用箇所 | 次の確認 |
|---|---|---|
| [9] Chen–Gounelas, Curves of maximal moduli on K3 surfaces, 2022 | Theorem A → §5 p.28：幾何種数1、自己交点の非有界性、非定数moduliを持つ正規化曲線族 | Theorem Aの正確な記述と族の取り方 |
| [19] Grauert, 1960 | §7 Satz 5 → Lemma 5.4 p.30：相対接束の直像と基底変換 | proper smooth family、各fiberのh⁰=1、評価射の適用 |
| [24] Huybrechts, Lectures on K3 Surfaces, 2016 | §§7–9：local/global Torelli、projectivity、格子・nef pencil等 | 結果番号・ページ・各仮定、Kähler chamberを合わせる操作 |
| [3], [4], [27], [29] Borel、Borel–Harish-Chandra、Ratner、Verbitsky erratum v1 | Lemma 9.1 pp.51–52：軌道閉包・格子・有理方向 | 実際の入力と、原稿内で証明する群論部分を分離 |
| [2], [20] Artebani–Sarti、Gritsenko–Hulek–Sankaran | §8.1のisotrivial中心・格子（未読部分） | pp.45–46を読み、結果単位の使用を確定してから直接入力を登録 |
| [8] Chen–Li arXiv:1607.06862v2 | Theorem 3.2・Eq.(3.26) → p.48：exactな2形式差に小さいprimitiveを取るHodge分解 | 文献の記述とcompact K3上の適用 |
| [28], [14], [22], [23] Siu、Forstnerič book、Hörmander | local sprays、Stein／∂bar入力、§§2–4 | 実際に依存する結果を抽出、全参考文献を直接辺にしない |
| [13] Forstnerič, 2006 | Theorem 0.1 → p.53：CAP⇒Oka | 参照版と正確な定理 |
| [12] Forstnerič, 2005；[1] Alarcón–Forstnerič, Oka-1 manifolds, 2025 | Corollary 1.3；Definition 1.1／Corollary 2.10 → Corollary 10.1 p.53 | 可算閉離散jet補間、homotopy、immersion条件 |
| [18] Gallego–González–Purnaprajna, arXiv:math/0604629v2 | Introduction／§2 → p.54：Enriquesの不分岐K3被覆と射影性 | 両方の記述・原典位置 |
| [17] Forstnerič–Lárusson, arXiv:2502.20028v6（本稿記載） | Theorem 1.1 → Corollary 10.3 p.54：projective Oka⇒elliptic | 指定v6の版・日付・仮定・結論・ページ |

[11] Lemma 4.6はp.7で比較されるが、Lemma 2.4は本文で積分構成を与えている。Xie–Zhao [30]も同じperiod戦略の比較として扱い、引用の存在だけでは直接入力としない。

## 表示仕様の準備点検

- `src/data/schnell.mjs` と `src/components/SchnellArticle.astro` の主要結果・証明・引用・確認範囲を参照。
- `drafts/catalog-033/orbifold-logarithmic-iitaka/article.ja.md` の図前の文献一覧を参照。
- 既存記事の引用表示や中間主張の不足をそのままコピーせず、制作セット1.3の共通記録・statement・全結論対応を追加する計画とした。
- 今回は新記事・新図・PDFなし。画面比較、check:citations、サイトbuildは未実施。ソースを読んだことを画面比較完了とは記録しない。
