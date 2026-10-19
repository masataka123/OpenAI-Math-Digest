# カタログ356 第2段階の公開準備記録

2026-10-19、本部。ユーザーの「第二段階をお願いします」により開始。サイト組込み・日英PDF・公開前検査を実施し、commit/push/公開の前で停止する。

## 実装と成果物

- `src/data/site.mjs`に356の台帳・2論文・カタログを登録し、Differential geometryへ追加。公式順と固定原典commitを維持。
- `public/diagrams/catalog-356/`へ9図×日英のSVG/TeX、計36ファイルを配置。原本と全ファイルSHA一致。
- 案内の日英本文から「第2段階でPDF生成予定」の制作注記だけを除去。2記事の数学本文は第1段階受領版から変更なし。案内本文からコピーした説明をカタログの一覧用説明に使用。
- 共通CatalogMarkdownOverviewが公式順4列表と冊子へのリンクを描画。日英各3ルート（案内＋2記事）を組込み。
- `public/pdf/catalog-356-ja.pdf`：34ページ、3章、9図、目次・記事間など内部リンク15件、外部リンク139件。
- `public/pdf/catalog-356-en.pdf`：36ページ、3章、9図、内部リンク15件、外部リンク142件。
- `src/data/pdf-editions.json`の356のみを生成処理で追加。開始時に存在した他カタログの版情報は全件保持。

## 検査と証拠

|検査|結果・記録|
|---|---|
|全テスト|39/39成功、`tests-final.log`|
|完全な引用検査|生成本文・TeX・SVG・publicコピー検査成功、`citations-final.log`|
|最終サイトビルド|専用出力先で215ページ成功、`build-isolated.log`|
|PDF版整合性|登録カタログ全件で現行、356日英とも内容hash・ファイルSHA一致、`pdf-check-isolated.log`|
|内部リンク|215ページ・267,933件で成功、`links-cached.log`。共有スクリプトはSVGの同一HTMLを大量に再読込するため、検査条件を変えずreadFileだけをキャッシュした。共有スクリプト自体は未変更|
|実画面・操作|日英・1440px/375px、トップ/分野/356案内/2記事/034一覧/Schnell/033 Orbifoldの32状態、`browser.json`、`browser-isolated.log`|
|保持・配布物|`final-audit.json`：他カタログの既存PDF版、既存共有文書、受領済み2記事、36図ファイルの一致|

この環境にはnpm実行ファイルがないため、package.jsonと同じNodeエントリを直接実行した。`node --test scripts/*.test.mjs`、`node scripts/sync-citations.mjs --check`、`node node_modules/astro/astro.js build`、`node scripts/build-catalog-pdf.mjs --catalog 356`、`node scripts/build-catalog-pdf.mjs --check`、`node scripts/check-links.mjs`を使用。

PDFのPythonは `/private/tmp/catalog-197-pdf-x86/bin/python`（weasyprint68.1とpypdf、既存の互換環境）を使い、環境や共通レンダラーを変更していない。版日付は2026-10-19。初回生成のログは `pdf-build.log`。

## 画面・紙面の視認

`screens/`で034の公式順表、Schnellの主張欄、033 Orbifoldの図前文献案内と356の実ビルド画面を比較。共通の書体・主張欄・出典行・証明対象→図→直後の説明を確認した。日英各記事の全図についてdialogのopen/zoom/fit/close、図内原典リンクの存在を検査。右上言語切替はページ下方でも表示され、`#sources`を保持して切り替わる。AI注意書き・原典確認案内・案内役を維持。ページ全体の横はみ出し・MathJaxエラー・ブラウザー例外は0。長い数式・一覧は共通の内部スクロール領域を使う。

PDF全70ページを画像化し、全体一覧6枚でページ境界・章順・余白・見出しを確認。全18図を各ページ画像でも確認した。図の欠け・ラベルや引用の重なりなし。確認ページは日本語5/10/12/15/17/19/25/28/30、英語6/11/13/16/18/20/26/29/31。日本語p.12の長い不等式は拡大画像でも末尾・余白を確認。表紙・目次・文献案内・主張欄・末尾の確認範囲を保持し、広い一覧は共通処理で項目形式になっている。画像は `pdf-pages/`、構造・リンク数は `final-audit.json`。

## 共有作業場への配慮

並行する357作業によって共有distの再生成が競合し、最初の再ビルドは失敗した。その失敗ログは`build-final.log`に保持。以後 `--outDir ./coordination/catalog-356/stage2/site-dist`で独立生成し、`check-workspace/`から同じ共有検査スクリプトをその出力へ適用した。失敗を隠さず、専用ビルドでの成功を最終判定とする。

357のsite登録・PDF版を保持。main/HEADは開始時と同じで、ブランチ切替・commit/pushは行っていない。第3段階では共有`site.mjs`と`pdf-editions.json`に別担当の変更があることを前提に、公開対象の差分を分離する。356以外を自動で公開しない。

## 数学的確認の限界

第1段階の留保を保持。全4次展開・熱核評価・capacity/Sobolev基礎論・外部証明の再帰的検証は未実施。AKP取得版と原稿が引用する2026-09-24スナップショットとの同一性は未確認。今回の技術検査によって数学的確認範囲を拡張したとは扱わない。
