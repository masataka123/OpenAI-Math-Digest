# カタログ285 第3段階への引継ぎ

## 現在の状態

- 第2段階：サイト組込み・日英冊子PDF・公開前検査を完了。39テスト、全引用、183ページのビルド、222,885件の内部リンク、全44冊のPDF整合性が成功。検査一覧は `FORMAT_AND_QA.md`、実行結果は `logs/`、紙面点検は `PDF_REVIEW_JA.md` / `PDF_REVIEW_EN.md`。
- 作業先：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`。ブランチ `main`。
- commit・push・公開は行っていない。ユーザーの現在の許可は第2段階まで。
- 第1段階原稿・原典・引用・内容点検は親フォルダとdrafts/catalog-285に保存済み。数学的未確認範囲は `../CONTENT_REVIEW.md` と各記事末尾に保持。
- 日英冊子：`public/pdf/catalog-285-ja.pdf`（37頁）、`catalog-285-en.pdf`（43頁）。各4章・8図。案内冒頭の言語別導線は組込み済み。
- 登録先：作用素環、公式順285→287。公式285の中はinjectivity→projection→irrational-trace。

## 変更と並行作業の保持

- 共有ファイルは `src/data/site.mjs` の285登録と `src/data/pdf-editions.json` の285項目のみを編集。
- `preservation-check.json` で、開始時の285以外のsrc/public/scripts/draftsの変更は上記2共有ファイルだけ、既存の他PDF版項目は同一と確認。共通CSS・冊子生成器・他カタログは変更していない。
- `site-before.mjs` / `pdf-editions-before.json` は第2段階開始時の共有ファイル写し。`site-registration.diff` はそこから285を追加した差分。
- 開始前から別カタログ等の未コミット変更が多数あった。**git add .で一括ステージしない**。第1段階の285原稿・台帳も未コミットであるため、285の公開にはそれらも含める。
- 公開前に現在のHEAD・作業差分・他担当の統合状況を再確認。共有ファイルの285以外の未公開差分を285の作業として混ぜない。必要な登録台帳や共通部品が対象commitに揃うことを、staged差分で確認する。

## 再開手順

1. 第3段階の明示指示を確認後、AGENTS.md、production/README.md、本書、RELEASE_CHECKLISTを読み、最新Git状態を取得。
2. `CHANGED_FILES.txt` を入口に285の原稿・引用・図・台帳・PDF・制作記録を選択。srcの共有差分は285部分をレビュー。原典PDFやQA画像をすべて公開commitに含めるかは既存リポジトリ方針と容量を確認し、必要な制作根拠はローカル履歴に保持する。
3. 第2段階後に内容変更がなければ記録済みの検査を利用し、変更があれば該当検査を再実行。数学的編集はgpt-6-astraを明示指定する。
4. 対象差分をcommit・pushし、GitHub Actionsのbuild/deploy成功を確認。
5. 公開先 `https://masataka123.github.io/OpenAI-Math-Digest/` の日英分野→285→3記事、図・引用・言語切替、日英PDFを確認。公開PDFのSHAと台帳を比較。
6. 公開URL・commit・Actions・反映結果・数学的未確認範囲を報告。

## 再検査コマンド

通常PATHにnpmがなかったため、この工程はpackage.jsonと同じNode entry pointを直接実行した。

```sh
export PATH=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH
node scripts/sync-citations.mjs --check
node --test scripts/*.test.mjs
node node_modules/astro/astro.js build
node scripts/check-links.mjs
node scripts/build-catalog-pdf.mjs --check
node coordination/catalog-285/stage2/check-site.mjs
```

必要な場合だけ冊子を再生成する。共通PDF版台帳への書込み中は他カタログのPDF生成と競合させない。

```sh
PDF_PYTHON=/private/tmp/catalog-052-pdf-x86/bin/python \
DYLD_FALLBACK_LIBRARY_PATH=/usr/local/lib \
XDG_CACHE_HOME=/private/tmp/catalog-285-cache \
node scripts/build-catalog-pdf.mjs --catalog 285
node node_modules/astro/astro.js build
node scripts/build-catalog-pdf.mjs --check
```

PDF環境が消失していればscripts/pdf/README.mdとrequirements.txtから再構成する。サイト全体のリンク検査はdistを読むので、ビルド中に走らせない。ブラウザー検査は一時ローカルサーバーとChrome起動のためサンドボックス外実行が必要な場合がある。
