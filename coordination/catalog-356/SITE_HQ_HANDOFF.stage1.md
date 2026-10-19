# カタログ356のサイト組込み引継ぎ

## 状態と停止位置

2026-10-19、第1段階「記事制作・内容点検・カタログ案内」を完了して停止。第2段階の実施・公開は未依頼。サイト登録、publicへのコピー、日英冊子PDF、commit、push、公開は行っていない。

制作セット1.4。作業ブランチはmainのまま、HEADは `be0ef01ea65a56649d5ff2907c411fcf5b040d39`。今回の成果物は未コミットの `coordination/catalog-356/` と `drafts/catalog-356/` に限定。他担当の既存差分は保持し、基準は `git-status-start.txt` と `baseline.json`。再開時には最新Git状態を再取得し、共有作業場のブランチを切り替えない。

## 公式台帳と成果物

公式番号356、**Gigli’s characterization of Alexandrov curvature**。分野は **Differential geometry**、公式番号範囲333–361。overview.pdfの分野開始p.36、対象p.38。公式固定commitは `1581d4cbdd69a0faf34b2089614fe2a814316a6a`、両原稿はSeptember 24, 2026版。版・URL・頁数・SHA-256は `inventory.json`、原典は `sources/`、取得manifestは `source-manifest.json`。

|公式順|正式タイトル／paper ID|成果物|
|---|---|---|
|1|Gigli’s distributional curvature characterization of Alexandrov spaces / `gigli-characterization`|`drafts/catalog-356/gigli-characterization/`：日英記事、5図の日英TeX/SVG、sources/citations、conclusion-coverage、status|
|2|Weak Hessian bounds along every geodesic in RCD spaces / `weak-hessian-geodesics`|`drafts/catalog-356/weak-hessian-geodesics/`：日英記事、3図の日英TeX/SVG、sources/citations、conclusion-coverage、status|
|案内|`overview`|`drafts/catalog-356/overview/`：日英案内、共通公式順一覧presentation.json、connections.json、sources/citations、総括図1点の日英TeX/SVG|

構成はmulti、記事2本、総括図1点、個別図8点。不要な固定分類・選択UIは設けない。総括図は同値の両方向を分離し、companionの結果が逆方向の「有界距離修正→全測地線」へ合流する意味を示す。詳細は `STRUCTURE.md`。既存記事の再利用なし。既存Solの数学原稿・図・解釈・点検は制作根拠にせず、公式原典から新規制作した。

## 担当・内容点検

A/B執筆およびR独立内容点検・案内執筆には **gpt-6-astra / reasoning_effort high** を明示指定（`model-provenance.json`）。初稿Aは08:44:32–08:58:09 JST（13分37秒）、Bは08:44–08:53 JST（約9分）。各60分以内。Rの最終受領照合は08:59:20 JST。Rが書いた案内は本部による原典・記事との照合として扱い、R自身の独立点検とは呼ばない。

主定理の全結論と各証明段階は各記事の `citations.json` のarticleGuides、`sources.json`、`conclusion-coverage.json` に対応記録がある。独立点検は `reviews/REVIEW_SUMMARY.md` と各review.json、修正履歴は `HQ_EDIT_LOG.md`。

確認の中心はCBB曲率下界の符号・正規化、正確なHausdorff測度・full support・unreduced RCD、元の大域Test/TestVの量化、同値の両方向、弱Hessianの非正特異部、任意測地線の分布ODE、局所四点比較から大域化と次元への結論。companionでは重み付き生成作用素領域、変動曲率CDへの移行、非分岐性・端点集中を照合した。直接依存はcompanion Thm1.1 p.2→主論文Thm6.1/Lemma6.2/Thm6.3 pp.48–50の1辺で、循環依存はない。

日英の主張・主要数式・節・図・引用・未確認範囲を照合。共通renderer/CSSの未公開プレビューで日英6ページ、9図×2言語を点検し、033/034と比較した。証拠は `FORMAT_COMPARISON.md`、`validation.json`、`preview-checks.json`、`screen-checks.json`、`screens/`。引用は3registryで共通生成し、text-only検査と生成manifest照合済み。完全な公開コピー検査は未実施。

## 残る数学的未確認

4次展開の全項、熱核評価の全定数、capacity/Sobolev代表元の基礎論、外部文献の全証明を再帰的に独立再証明していない。原記述と適用の確認を全証明の認証・専門家査読と表現しない。

AKPのオンラインPDFは可変であり、今回取得版の番号・記述・適用は照合しSHAを保存したが、論文が引用する2026-09-24スナップショットとのファイル同一性は未確認。主論文の日英本文にも明記済み。この留保を削除しない。

## 第2段階の再開手順

ユーザーの第2段階再開指示後、次の順に進めて停止する。

1. 最新Git状態、production/README・FORMAT_CONTRACT、当引継ぎ、RELEASE_CHECKLISTを読む。原稿・図・引用の受領版を確認する。
2. `src/data/site.mjs` 等の既存登録方式に合わせ、公式分野・公式順2本・日英ルートと一覧を登録。`overview/presentation.json`・`connections.json`を対象データとして組み込み、記事の正式タイトルの導線を保つ。既存の固定3分類や033専用データを流用しない。
3. 各 `diagrams/` の共通citation生成とrender.pyを必要時だけ実行し、生成済みSVGをサイトの所定public先へコピーする。本文・図リンクを変換し、現在のアンカーを保持。主論文の `theorem-1-1`、`theorem-3-1`、`theorem-4-1`、`theorem-5-10`、`theorem-6-3`、`proof-overview`、`proof-1`〜`proof-4` とcompanionの `theorem-1-1`、`lemma-3-1`、`proposition-4-1`、`proof-overview`、`proof-1`、`proof-2` を確認する。
4. `npm run check:citations`、`npm test`、`npm run build`、`npm run check:links`。共通本文16px/補足14px、図拡大・引用リンク・AI注意書き・原典確認案内・右上言語切替を日英PC/375pxで実際に操作する。
5. **担当＝再開後のサイト本部。日英冊子PDFは必須、両方未生成。** `scripts/pdf/README.md` に従い `npm run pdf:catalog -- --catalog 356`。案内1章＋論文2章の全3章、各言語9図。`public/pdf/catalog-356-ja.pdf` / `catalog-356-en.pdf` と `src/data/pdf-editions.json` を揃え、案内冒頭にPDFリンクを置く。
6. 再build、`npm run check:pdf`、`npm run check:links`。日英PDFの表紙・目次・全図・長い数式・改ページ・リンクを画像点検する。サイトも033/034と再比較し、結果・残作業を記録する。
7. 第2段階成果物を報告して停止。commit/push/公開は第3段階の明示指示後に行う。

未公開プレビューの再生成は同フォルダの `build-preview.mjs`、検査は `validate-stage1.mjs`。NodeがPATHにない場合は `/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node` を使う。図生成には同nodeと `/Library/TeX/texbin` をPATHへ追加。`capture-preview.mjs` はリポジトリを127.0.0.1:8356で静的配信して使用する。

## 第3段階

現時点で公開URL・公開commit・Actions・実サイト反映確認はすべて未実施。公開指示後に対象差分を確認し通常のcommit/push、Actions、公開日英カタログ・記事・画像・PDFの反映確認を行う。新規カタログ全体や公開準備が完了したとは報告しない。
