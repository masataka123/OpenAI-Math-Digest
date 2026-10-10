# 038 準備時の原典確認と未確認

> 以下は準備時の履歴。制作段階で追加読解・外部照合を実施した現在の記録は、[sources.json](../../drafts/catalog-038/fujita-freeness/sources.json)と[CONTENT_REVIEW.md](CONTENT_REVIEW.md)を参照。

2026-10-10 JST。本部担当。記事制作前の書誌調査・構成提案のための予備閲覧。書誌の正本は[inventory.json](inventory.json)、構成案は[README.md](README.md)。

## 公式資料

- 固定commit：`fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb`（取得時main、commit時刻2026-10-08T05:20:00Z）。
- CONTENTS.mdの038区画、overview.texの対応項目・分野列挙、overview.pdfの表紙・目次・p. 5を照合。概要は41ページ、2026-10-06付。原稿一覧は1本で順序の相違なし。
- 原稿はOpenAI著、2026-09-23付、全25ページ。p. 1とp. 23を画像とテキストで確認。概要p. 5も画像確認済み。原稿全ページについて誌面とPDF位置が一致すると一括認定してはいない。記事に使う引用位置は制作時に追加照合する。
- 原典・抽出テキスト・上記画像の一時保存先：`/tmp/catalog-038-preparation/`。一時ファイルは永続成果物ではない。再取得URLとSHA-256は台帳を使用する。

## 今回見た本文範囲

| 箇所 | 予備閲覧の内容 | 留保 |
|---|---|---|
| pp. 1–3 | 著者・版、Theorem 1.1、方法の案内、Figure 1の経路 | Introductionの説明を証明検証と呼ばない |
| pp. 4–6 | Lemmas 2.1–2.3、Theorem 2.4、Lemma 2.5、Proposition 3.2の主張 | 外部定理の原文は未取得 |
| pp. 8–11 | §3の等号の場合のthreshold・vanishing・降下、目的関数、Lemmas 4.1–4.3、Proposition 4.4の主張と証明冒頭 | §3のp. 7、§4のp. 12等を含む証明の通読は未実施 |
| p. 13、pp. 16–17、p. 19冒頭 | Proposition 5.1・Lemma 5.2の主張、一階変分の上界、Brunn–Minkowskiからの下界、極限の矛盾の前後 | pp. 14–15・18の中間計算と全一様性の確認は残る |
| pp. 19–23 | 支持データ、Lemma 6.1、Lemma 6.2、§6.3の持上げ・降下、Corollary 6.3とその積による証明 | 構成計画のための本文閲覧。全仮定・外部入力との独立照合は未実施 |
| pp. 23–25 | 参考文献の書誌と直接入力候補 | 引用先自体の記述・誌面／PDF位置は未確認 |

ここでの主張・経路は著者が記述するもの。記事の完成・全証明の独立検証・専門家査読済みを意味しない。未読ページを読んだ扱いにせず、次の制作時にsources.jsonへ実際の追加確認を記録する。

## 外部入力候補：利用先の表示位置まで確認

下の版はすべて**本原稿の参考文献欄の記載**に基づく。外部原典の取得・版確認・結果の記述と適用条件の照合は、今回は未実施。従って確認済みの依存辺として公開しない。

| 文献・記載された版 | 原稿が指定する箇所 | 038側の利用先と役割 | 制作時の優先度 |
|---|---|---|---|
| Demailly–Kollár, Semi-continuity of complex singularity exponents and Kähler–Einstein metrics on Fano orbifolds; arXiv math/9910118v2、2001年刊 | Lemma 3.2、Theorem 3.1 | Lemma 2.3 p. 5のthreshold閉性、p. 8の退化、Lemma 4.3 p. 11の実現可能性の閉条件 | 高：直接入力の記述と適用を照合 |
| Fujino, Kawamata–Viehweg vanishing theorem; lecture note v1.04, 2009-07-22 | Theorem 0.1 | Theorem 2.4 p. 5、§3 p. 8、§6.3 p. 22の消滅と持上げ | 高：rounding形式・nef and big・SNCを照合 |
| Gardner, The Brunn–Minkowski inequality; Bull. AMS 39 (2002), 355–405 | Theorem 4.1 | §5.3 p. 16の(5.13)、格子集合を単位立方体で厚くした体積評価 | 高：有限和集合への適用条件を照合 |
| Fujita, Remarks on Ein–Lazarsfeld criterion of spannedness of adjoint bundles of polarized threefolds; alg-geom/9311013v1, 1993 | §1(1.6) | §6.3 pp. 22–23のdiscrepancy・vanishingによる局所持上げの方法 | 高：三次元論文から使う局所機構を確認。主定理を高次元へ直接適用した矢印にしない |
| Włodarczyk, Simple Hironaka resolution in characteristic zero; JAMS 18 (2005), 779–822 | Theorems 1.0.1, 2.4.1 | §2.1 p. 3、SNC解消・principalization、既存の因子を保持するモデル | 核心に直接使う記述を確認 |

HowaldのMain Theoremは§3 p. 8で単項式の場合との対応として引用され、原稿は直接SNCによる議論を記す。Lazarsfeld–Mustaţă Lemma 1.4とKaveh–Khovanskii Proposition 2.6はLemma 3.1 p. 6の初期指数の計数との対応で、原稿内に証明がある。これらを独立の証明入力として採用するか、比較・背景とするかは制作時に整理する。

Blum–Jonsson Theorem EはIntroductionで別の目的関数についての背景として挙げられる。本原稿の有限次数の指数型目的関数の最小化を、その定理から直ちに得たとは記さない。Han等の既存上界、Reider等の低次元結果は現時点では背景。引用されているだけで直接依存の矢印を作らない。

## 続きで解消すべき接続

1. Proposition 3.2の狭義性を与える等号の場合の議論全体と、Lemma 2.3・Theorem 2.4の適用。
2. Proposition 4.4の達成の完結部、Lemma 4.5による特殊化、Proposition 5.1で固定t・中心によらない定数を使う量化の順序。
3. Proposition 5.1の全段階：とくに特異性・次数の制限がない中心に対するLemma 5.2、接方向の摂動、§5.4の極限操作。
4. Lemma 6.2の三結論と§6.3の適用：Sの非空性・被約性、局所有効性で足りること、正の補正が例外的であること、n=1の場合。
5. 外部原典の指定版、各結果の誌面／PDF位置、仮定と038側の使用箇所。引用先の証明全体の再帰的検証は初稿対象外。

カタログ内に別論文はない。他カタログへの直接依存については未調査。既存記事の重複なしから、数学的な依存なしを推論しない。今回はconnections.jsonや公開用依存図を作らない。

## 形式見本の確認範囲

Schnellの `src/data/schnell.mjs` にある主張・図・段階説明のデータと、Orbifold Iitakaの `drafts/catalog-033/orbifold-logarithmic-iitaka/article.ja.md` の主要結果・図前引用案内・図直後の説明を参照した。画面比較は未実施。後続の受領・公開確認では033・034の実画面と日英PC／375px、日英PDFを比較して証拠を残す。
