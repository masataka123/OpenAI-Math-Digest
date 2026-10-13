# カタログ036 — 第2段階の引継ぎ

**公開準備完了。第2段階で停止。commit・push・公開は未実施。** 2026-10-13、本チャットがサイト本部を兼任。作業場所 `/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、ブランチ `main`、HEAD `8c7b6d95600ef6b977039452d344eb2a55db3123`。開始・終了時刻は [stage2/completion.json](stage2/completion.json)。

## 完了範囲と成果物

- 日英4記事と日英案内を既存のAstro共通表示へ登録。公式036、公式順4篇、公式第2分野 Algebraic and complex geometry を維持。
- `src/data/site.mjs`に036の台帳・論文・案内・節導線を追加。`scripts/catalog-033.test.mjs`と`catalog-063.test.mjs`の共有分野一覧の期待値へ036を追加。052の既存追加を保持。
- [public/diagrams/catalog-036/](../../public/diagrams/catalog-036/) に日英32SVGと32自己完結TeX。本文・引用記録は [drafts/catalog-036/](../../drafts/catalog-036/) を継続利用。
- [日本語PDF](../../public/pdf/catalog-036-ja.pdf)：56頁、5章、16図。 [英語PDF](../../public/pdf/catalog-036-en.pdf)：62頁、5章、16図。案内冒頭のリンクを実際に取得し、配布ファイルとバイト一致を確認。
- `src/data/pdf-editions.json`は036のみ追加。他11カタログの版情報と既存22PDFのハッシュは開始時と一致。共通CSS、renderer、PDF生成系、052固有ファイルは変更していない。

変更一覧は [stage2/CHANGED_FILES.txt](stage2/CHANGED_FILES.txt)。開始時との差分は [stage2/completion.json](stage2/completion.json)、036だけのsite差分は [stage2/site-036-only.diff](stage2/site-036-only.diff)。開始前から未コミットの052・制作規則変更があるため、HEADとの差分全体を036の作業と見なさない。

## 検査結果

| 検査 | 結果・証拠 |
|---|---|
| 全テスト | 39成功、0失敗：stage2/tests.log |
| 全サイトbuild | 115ページ成功：stage2/build-final.log |
| 引用と公開コピー | 37 registry相当、132ファイル成功：stage2/citations.log |
| 内部リンク/asset/アンカー | 115頁、126792件成功：stage2/links-final.log |
| PDF鮮度・整合 | 全24PDF current：stage2/pdf-check.log |
| 統合ブラウザ | 日英PC/375px 28画面、操作8経路、pageerror0：stage2/browser.json |
| PDF構造・紙面 | 全118頁、日英32図の紙面点検：stage2/VISUAL_REVIEW.md、pdf-review/ |
| 既存変更保持 | 4共有ファイル以外の開始時trackedハッシュは全て一致。既存PDF/版情報保持：stage2/completion.json |

見本比較は034公式順表、Schnell証明節、033 Orbifold Iitaka文献案内を日英・PC/スマホの実画面で保存し、形と説明粒度を点検した。数値検査だけの形式判定ではない。本文16px、出典14px、AI注意書き・読書案内・右上言語切替・図拡大を維持。詳しくは [stage2/VISUAL_REVIEW.md](stage2/VISUAL_REVIEW.md)。

## 未確認事項

第2段階の必須成果物・公開前検査に未完了なし。公開環境の反映は第3段階で確認する。

数学上は [UNRESOLVED.md](UNRESOLVED.md) の範囲を維持する。Kählerの中間全計算/period互換性、射影Frobenius全計算、generalized局所§§4–13の深い一様評価、一部教科書原記述の全照合は未確認。数値同値・線形同値、元の因子のsemiampleness・同じ数値類の代表、ordinary/generalized、nef/goodモデルを区別した本文をそのまま収録。034のKähler入力は記事10/4版と036引用10/6版に差があり、034を自動変更していない。表示/リンク検査は全証明の独立検証ではない。

## 第3段階の再開手順

1. 公開指示を受けたら、この記録とRELEASE_CHECKLIST、git statusを読む。共有作業先のブランチを切り替えない。052および制作規則の未コミット変更を保持する。
2. 036対象の `drafts/catalog-036/`、`coordination/catalog-036/`、`public/diagrams/catalog-036/`、日英PDFと4共有ファイルの036差分を照合。共有siteが052を参照しているため、共有ファイルを丸ごとstageする前に052側の公開予定と依存ファイルを整理する。無差別な `git add .` はしない。
3. 成果物変更があれば引用検査→tests→build→links→PDF鮮度を順に再確認。並行build中にリンク検査を走らせない。記事や図を編集した場合のみ036日英PDFを再生成し、紙面を再確認して再buildする。
4. 指示された対象をcommit・pushし、GitHub Actions成功を確認。公開トップ→分野→036→4記事、日英切替、図/SVG引用/TeX、日英PDFの取得とハッシュ・頁数を確認して公開記録を残す。

Node/npmの通常環境がある場合はpackage.jsonの既存検査スクリプトを使用。この実行環境ではNodeを `/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node` で呼び、`--test scripts/*.test.mjs`、`node_modules/astro/astro.js build`、`scripts/sync-citations.mjs --check`、`scripts/check-links.mjs`、`scripts/build-catalog-pdf.mjs --check` を実行した。

PDF再生成は `PDF_PYTHON=/private/tmp/catalog-052-pdf-x86/bin/python XDG_CACHE_HOME=/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/tmp/font-cache <node> scripts/build-catalog-pdf.mjs --catalog 036`。これは既存の作業用Python環境を利用しただけで052成果物は変更しない。一時環境が失われたら scripts/pdf/README.mdに従いWeasyPrint/Pango環境を用意し直す。新しいPDF生成系は作らない。
