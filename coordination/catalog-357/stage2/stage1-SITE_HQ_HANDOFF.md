# カタログ357 第1段階からの引継ぎ

## 現在の範囲

- 作業先：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、ブランチ `main`。
- 開始時HEAD：`be0ef01ea65a56649d5ff2907c411fcf5b040d39`。357の成果物は未コミット。開始時の既存変更は `git-status-start.txt`。ブランチ切替・他担当変更の消去は行っていない。
- 制作セット1.4。ユーザー依頼は第1段階のみ。第2段階は再開指示後、第3段階は公開指示後。
- サイト登録・公開用コピー・日英冊子PDF生成・commit・push・公開は未実施。
- 第1段階の最終受領状況・技術検査結果は本ファイル末尾へ記録する。

## 台帳と担当

- 公式357：*Bi-Lipschitz coordinates at every regular RCD point*。
- 公式分野：Differential geometry（公式見出し順16・アンカーsubject7、333–361）、固定overview PDF p.38。
- 固定commit：`1581d4cbdd69a0faf34b2089614fe2a814316a6a`。
- 正式論文：*Bi-Lipschitz Coordinates at Regular Points of Noncollapsed RCD Spaces*, OpenAI, September 25, 2026, 43 pages。
- paper ID：`regular-rcd-coordinates`。既存記事の再利用なし。原典の版・URL・SHA-256は `inventory.json`。
- 著者担当writer357と独立内容点検reviewer357は、ともに明示指定 `gpt-6-astra / reasoning_effort: high`。指定証跡は `model-provenance.json`。
- 本部は台帳・構成・指摘の受領修正・日英統一・引継ぎを担当。技術QAは数学内容点検とは別担当。

## 成果物の場所

- 台帳・構成・制作記録：`coordination/catalog-357/{inventory.json,README.md,model-provenance.json}`。
- 主原典・公式一覧：`coordination/catalog-357/sources/`（固定commit、PDF、抽出文、SHA manifest）。
- 日英記事：`drafts/catalog-357/regular-rcd-coordinates/article.{ja,en}.md`。
- 引用・原典記録：同フォルダの `sources.json`、`citations.json`。
- 主結果・主張欄・結論の説明先：同フォルダの `conclusion-coverage.json` と `citations.json/articleGuides`。
- 日英TeX/SVG：同フォルダの `diagrams/`。共通記録からの引用生成物とcitation-build.jsonを含む。
- 日英案内・公式順共通表・接続：`drafts/catalog-357/overview/`。
- 独立内容点検：`coordination/catalog-357/reviews/independent-review.md`、外部原典照合台帳 `external-source-checks.json`。
- 画面・形式QA：`coordination/catalog-357/validation/README.md` と `REPORT.md`、スクリーンショット・ログ。
- 公開チェックリスト：`coordination/catalog-357/RELEASE_CHECKLIST.md`。

## 構成・読解上の引継ぎ

単論文のため短い案内と1行の公式順共通表。カタログ総括図・分類カード・論文選択UI・空の内部依存表を省略。主要接続の合流を検討したうえで、単論文内部の全体像は記事冒頭の主定理全体図に集約した。外部入力は結果単位でconnections.jsonに保存し、可算整流性の背景比較を直接依存から分離している。

公式overviewの要約は定数をpoint-dependent finite constantと記すが、原典Theorem1.1はdimension-only `L_n`。記事は原典の定理本文とp.41の定数選択に沿う。全接錐Euclidean、noncollapsed/full RCD、全点対のambient distance、開domain/開image、点依存の尺度と次元定数の違いを維持する。Corollary1.2の開領域をexact regular locusと同一視しない。

356を含む他カタログへの関係は未調査。類似する題材から辺を生成していない。他担当の原稿完成を前提にしない。

## 数学的確認の限界

主要結果・核心帰着・DPG/AH/JLZ/Hatcherの指定結果の記述と適用、およびMNの背景比較を原典と照合した。局所Poisson正則性、Hessian calculus、improved Bochner inequality、距離のLaplacian比較について、外部各結果の全記述・全仮定の照合は完了していない。長い内部局所計算や全外部証明の再現、専門家査読・形式検証は未実施。詳細は記事末尾・sources.json・独立点検記録を維持する。

## 第2段階の再開手順

1. 最新のGit状態と本引継ぎ・inventory・内容点検・validation記録を確認。共有作業場の別担当変更を保持し、共通ファイルの変更を直列に行う。
2. `src/data/site.mjs`に公式分野・カタログ・paper IDを登録し、`CatalogMarkdownOverview.astro`と共通記事rendererへ接続。`CATALOGINVENTORYTOKEN`とpresentation.jsonで4列表を表示。新しい独自CSSや033固定のデータを作らない。
3. 図の再生成コマンドは記事status.md。必要時だけ357の図を生成し、対応するSVG/TeXをpublic/diagrams/catalog-357/regular-rcd-coordinates/へ配置。本文アンカー `results`, `proof-overview`, `proof-1`〜`proof-4`, `dependencies`, `sources` と結論別stepアンカーを維持する。
4. `npm run check:citations`、`npm test`、`npm run build`、`npm run check:links`。第1段階のtext-only/ローカルhash検査と、publicコピー照合を含むfull checkを区別する。
5. 日英PDFを **必ず** 生成。担当はサイト本部。`scripts/pdf/README.md`と既存 `npm run pdf:catalog -- --catalog 357` を使い、案内＋記事の2章と全図を収録する。`src/data/pdf-editions.json`を同時更新。冒頭には対応言語の冊子リンクを置く。
6. 再build、`npm run check:pdf`、`npm run check:links`。日英PC/375px、実ルート・言語切替・図拡大/引用・034の表/Schnell/033文献案内との比較、日英PDFの紙面と内容一致を確認する。
7. 公開準備の状態・残作業を報告して停止。**commit・pushは行わない。**

## 第3段階

明示の公開指示後に差分を選別してcommit・pushし、Actions・日英公開ページ・図・必須の日英PDFの反映を確認する。現在は公開URL・公開commit・Actions検査すべて未実施。

## 第1段階の最終受領（2026-10-19 JST）

- 状態：**内容編集済み／第1段階で停止**。公開準備完了ではない。
- 日英記事、5図×日英TeX/SVG、原典/引用、主要結果2件・中間主張3件・11結論の説明先、日英案内/共通公式順表、7件の外部接続記録を受領。
- 初稿08:45:54–08:57:16 JST（11分22秒）。案内08:57:59–08:58:44、形式編集09:00は別枠。
- 独立内容点検の具体的未反映指摘0。原典にない結論を追加していないという照合範囲の判断であり、原稿全証明の正しさの認定ではない。
- 引用2レジストリ6ファイルtext-only、図manifest29件、形式7項目、局所リンク94件、接続14アンカーを確認。PC/375pxの日英記事/案内と指定見本の静的画面比較を実施。詳細validation/REPORT.md。
- 残作業：本書の第2段階を実行し、必須の日英PDFを生成する。第3段階は別途公開指示後。

### 実行環境の補足

このセッションの同梱binにはnodeのみでnpmはなかった。最終引用検査はpackage scriptと同じ `scripts/sync-citations.mjs --check --catalog 357 --text-only` を同梱nodeの絶対パスで直接実行し成功（final-citations-check.log）。第2段階ではサイト本部が既存のnpm環境を確認するか各package scriptの実体を同等に実行する。引用full checkとPDF生成の必要性は変わらない。

- 最終表示補正：09:03 JSTに本文の平均積分マクロを同値な通常積分/測度へ置換。長い数式は375pxで共通横スクロールにより量化を含む全式が読めることを確認（validation/REPORT.mdとtheorem-math-right画像）。
