# カタログ042のサイト組込み引継ぎ

**追記 2026-10-10：公開指示を受け、本チャットがサイト本部として受領・実行。以下は初稿引継ぎ時の記録。現在の検査・状態は[PUBLICATION.md](PUBLICATION.md)。**

**日英初稿・引用付きTeX/SVG・短い日英案内を作成済み。サイト登録・日英PDF・公開は未実施。** 本書はユーザーに渡す引継ぎ文書であり、他チャットへの自動送信はしていない。

- 採用仕様：制作セット1.3。FORMAT_CONTRACT優先。Schnell／Orbifold Iitaka／034を参照、051は標準にしていない。
- Git基準：main、`876f4366cc4a52b82abfb4eba13d9c710c31ef79`。今回の追加は`coordination/catalog-042/`と`drafts/catalog-042/`のみ。trackedファイル・他カタログ・src/publicは変更なし。commit/pushなし。組込み前に最新状態を再確認し、他担当の差分を保持する。
- 現在の依頼範囲：ユーザー「じゃあ記事を作成しましょう.」による記事・制作成果物の作成。公開依頼はない。
- 公式名称・分野・原稿版・URL・SHA-256：[inventory.json](inventory.json)。カタログ042、Algebraic and complex geometry、単論文。*Every complex K3 surface is Oka*、2026-09-23、56ページ。公式固定commit `fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb`。
- paper ID／表示名：`every-complex-k3-oka`／**K3 Oka**。既存記事再利用なし、維持対象の旧アンカーなし。

## 成果物

| 内容 | パス |
|---|---|
| 日英記事 | [日本語](../../drafts/catalog-042/every-complex-k3-oka/article.ja.md)・[English](../../drafts/catalog-042/every-complex-k3-oka/article.en.md) |
| 本文・TeX共通引用、articleGuides | [citations.json](../../drafts/catalog-042/every-complex-k3-oka/citations.json) |
| 原典・外部10文献・版・ページ対応・ハッシュ・未確認 | [sources.json](../../drafts/catalog-042/every-complex-k3-oka/sources.json) |
| 図原本・6組の日英TeX/SVG・再生成 | 記事のdiagrams/{main,cap,sewing,dense,classification,sprays}.tikz、各.ja/.en.tex/.svg、preamble、render.py、citation-build.json |
| 記事の時間・検査記録 | [status.md](../../drafts/catalog-042/every-complex-k3-oka/status.md) |
| 短い日英案内 | [日本語](../../drafts/catalog-042/overview/article.ja.md)・[English](../../drafts/catalog-042/overview/article.en.md) |
| 公式順の共通表・接続・引用 | overview/{presentation,connections,citations}.json。接続15件（直接／帰結用入力14、訂正枠組みのbackground1） |
| 本部受領・表示証拠 | [CONTENT_REVIEW.md](CONTENT_REVIEW.md)、[FORMAT_REVIEW.md](FORMAT_REVIEW.md)、review/、draft-validation.json |

単論文のため共通表1行＋記事1本。空の論文間関係図・選択UI・案内への記事図の複製は省いた。

## 本部で確認した内容と限界

主要結果4件と独立中間定理2件、6証明対象、14項目の結論の説明先を原典と照合。主定理のr=0/1/2、一般の凸集合までのCAP、環状鎖のexactness、稠密immersion、分類の正負、sprayの両仮定を含む。日英の引用順・表示数式・共通アンカー、引用生成と34ファイルのmanifestを検査済み。日英PC／375pxのローカル試写、033・034との比較を記録。

残る数学的未確認は記事末尾・sourcesに記載。§§3–4の全評価、§§7–8の全atlasと一様recentring、Lemma 8.2の全格子構成、追加の解析・力学・格子原典は完全検証していない。外部入力10件の主張照合は外部証明の独立検証ではない。060はCorollary 10.2の分類への`consequence`であり、K3主定理への直接入力として表示しない。

## サイト本部の次の操作

1. 台帳からカタログ・論文を`src/data/site.mjs`へ登録。overviewの正式名とCONTENTSの別見出しを保持。分野の公式順を維持。
2. 記事はCatalogDraftArticle、案内はCatalogMarkdownOverview／renderCatalogInventoryを使用。公式表は1本でも4列。6図の日英TeX/SVGを`public/diagrams/catalog-042/every-complex-k3-oka/`へコピー。記事担当はpublicへコピーしていない。
3. 主要アンカー：results、diagram-sources、proof-overview、proof-1〜5、dependencies、sources。主張：theorem-1-1、corollary-1-2、corollary-10-2、corollary-10-3、theorem-3-1、theorem-6-1。全結論の個別アンカーはcitations.jsonを正とする。
4. 右上の日英切替・hash維持、分野→042→記事の導線、図viewer・原寸SVG・TeX、AI注意書きを共通処理で有効化。ローカルプレビューは結合動作の確認を代替しない。
5. `npm run check:citations`、`npm test`、build、linksを実施。公開資産を含むfull検査は今回未実施。
6. **日英PDF担当＝サイト本部。両方未生成。** 既存PDF生成系で`public/pdf/catalog-042-{ja,en}.pdf`を作る。章数は案内＋記事の2、各言語6図。pdf-editions登録後、案内冒頭の共通PDF導線を有効化し、原稿の「PDF待ち」文を更新する。現在の案内には存在しないPDFへの有効リンクは載せていない。
7. 日英PDFの全図・主張・文献案内・公式表・読書案内・ページ／リンクを画像照合し、再build・check:pdf・links。PC／375pxも公開構成で再確認。
8. 公開を依頼された場合に限り、差分確認、通常のcommit/push、Actions、実サイトの日英記事・PDFを確認する。

## 公開状態

初稿引渡し段階。内容確認の範囲を記録済みだが、サイト結合・PDF・公開ゲートは未完了。公開URL／公開commit／Actions／公開版確認はすべて未実施。[RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md)の未完了項目をサイト本部で完了させる。
