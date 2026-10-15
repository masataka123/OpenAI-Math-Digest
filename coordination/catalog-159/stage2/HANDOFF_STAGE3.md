# カタログ159 第3段階への引継ぎ

第2段階の依頼に基づきサイト登録・日英PDF・公開前検査まで実施。公開は未依頼のため停止する。作業先 `/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、ブランチ `main`。commit/push/公開操作なし。

## 成果物

- `drafts/catalog-159/`：Astraによる日英記事・案内、図・引用記録。第2段階では変更なし。
- `public/diagrams/catalog-159/`：日英3図のSVG/TeX。
- `public/pdf/catalog-159-{ja,en}.pdf`：日本語14ページ、英語15ページ、各2章3図。
- `src/data/site.mjs`：159のimport、分野所属、論文、catalog登録。
- `src/data/pdf-editions.json`：159の日英エントリ。
- `coordination/catalog-159/`：公式情報・Astra記録・内容点検・形式点検。
- `coordination/catalog-159/stage2/`：検査ログ、表示画像、保存先台帳、検査報告。本ディレクトリのdist隔離コピーは検査後削除し、再生成可能な診断記録のみ保持する。

## 再開手順

1. 公開指示を受けてから最新の `git status --short` と差分を確認する。共有ブランチを切り替えない。開始時からAGENTS、PROJECT_PLAN、production一式、PDF台帳に他担当変更があった。途中で287のサイト登録/PDFも追加された。これらを取り消さず、159と他担当の差分を選別する。`git add .` は使わない。
2. 159の原稿・引用・coordination・public資産と、共有2ファイルの159に必要な差分をレビューする。台帳の公式分野順位訂正は第7分野、subject13はアンカーID。内容と数学的未確認範囲は `QA_REPORT.md` と `../reviews/CONTENT_REVIEW.md`。
3. 公開直前の統合状態で `npm run check:citations`、`npm test`、`npm run build`、`npm run check:pdf`、`npm run check:links` を再確認する。共有distを同時に書き換えるビルドがある場合は競合を避け、必要なら隔離スナップショットで検査する。本段階の成功ログを消さない。
4. PDFが古いと判定された場合のみ159を再生成し、再ビルド・版照合・紙面確認を行う。現在の生成環境は下記。共通生成器や他カタログPDFを無断改訂しない。
5. 公開指示の範囲で通常のcommit/pushを行い、GitHub Actions成功を確認する。その後、公開URLの日英catalog/159、papers/quasipolynomial-arithmetic-progressions、SVG、TeX、PDFが今回の版であることを確認する。PDF SHA-256は `pdf-structure.json`。公開CDNでの数式表示・375px表示も確認。
6. 公開commit、URL、確認結果を記録する。数学的未確認事項を消さず、全証明検証済みと表現しない。

## 実行環境

Node: `/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node`（通常シェルPATHにない場合）。PDF生成には既存 `/private/tmp/catalog-052-pdf-x86/bin/python`（WeasyPrint 68.1 / pypdf 6.19.0）、`DYLD_FALLBACK_LIBRARY_PATH=/usr/local/lib`、`XDG_CACHE_HOME=/private/tmp/catalog-159-cache` を利用した。環境が消失したら `scripts/pdf/README.md` の固定requirementsで再構成する。

公開予定のURLは `https://masataka123.github.io/OpenAI-Math-Digest/{ja,en}/catalog/159/` と同プレフィックスの `papers/quasipolynomial-arithmetic-progressions/`。現時点の公開済みリンクとして扱わない。
