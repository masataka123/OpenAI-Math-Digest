# カタログ067 第2段階完了・公開への引継ぎ

2026-10-14 JST、第2段階「サイト組込み・日英PDF・公開前検査」を完了。状態は**公開準備完了・未公開**。ユーザー指定に従い、commit・push・公開は行わず停止する。

## 作業場所・成果物

作業先：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`。作業ブランチ：`main`（切替なし）。第1段階の原稿・数学的確認範囲を維持し、第2段階では内容の追加執筆・数学的改訂は行っていない。

- 日本語PDF：`public/pdf/catalog-067-ja.pdf`、20ページ、2章、6図、1,260,073 bytes。
- 英語PDF：`public/pdf/catalog-067-en.pdf`、23ページ、2章、6図、863,946 bytes。
- PDF収録版：生成時の2026-10-13。公開用の版情報とSHA256は `src/data/pdf-editions.json` の067。
- Web：`dist/{ja,en}/catalog/067/index.html` と `dist/{ja,en}/papers/campana-peternell-six/index.html`。トップ・分野からの導線、案内冒頭の同言語PDFリンクを組込み済み。
- 公開用図：`public/diagrams/catalog-067/campana-peternell-six/`、日英SVG12／TeX12。
- 内容点検：CONTENT_REVIEW.md。第2段階画面・紙面点検：stage2/VISUAL_REVIEW.md、stage2/browser.json、stage2/pdf-review/。

## 検査結果

| 検査 | 結果・証拠 |
|---|---|
| 引用の全体検査 | 成功。42レジストリ・生成対象150ファイル。stage2/citations.log |
| 既存テスト | 39件成功、失敗0。stage2/tests.log |
| 最終ビルド | 125ページ成功。stage2/build-final.log |
| 内部リンク・画像・アンカー・言語切替の全体検査 | 125ページ、143,927参照を検査して成功。stage2/links.log |
| PDF整合 | 登録14カタログ・日英28冊すべてcurrent。067は20／23ページ・各2章。stage2/pdf-check-all.log、pdf-check-067.log |
| ブラウザー | 日英×トップ／分野／案内／記事×1280／375pxの16条件。はみ出し・数式エラー・欠落画像・例外0。日英各1経路の遷移・言語切替・図拡大・引用・戻り操作が成功。stage2/browser.json |
| 紙面・PDFリンク | 全43ページ・全12図を画像で確認。日本語外部109／内部12、英語外部110／内部12、欠落宛先0。stage2/pdf-review/structure.json |
| 並行変更の保持 | 他カタログの登録、既存13カタログのPDF版情報・26PDFのハッシュを保持。図24ファイルが原本と一致。stage2/preservation.json |
| 差分の空白検査 | git diff --check 成功 |

`npm`はこの環境のPATHにないため、package.jsonと同じNodeエントリポイントで検査した。新しい生成系は作らず、既存scripts/build-catalog-pdf.mjsとWeasyPrintを使用。共通CSS・renderer・PDF組版は変更していない。

## 変更範囲

- `src/data/site.mjs`：067のinventory import、分野内の公式番号順、論文1本とカタログ登録のみ。
- `scripts/catalog-033.test.mjs`、`scripts/catalog-063.test.mjs`：既存の分野カタログ順の期待値へ067を追加。元からある046を保持。
- `src/data/pdf-editions.json`：067の日英版のみ追加。
- `drafts/catalog-067/overview/article.{ja,en}.md`：第2段階用の予定コメントを削除。PDF導線は共通部品が実版情報から表示し、本文への重複リンクは作らない。
- `public/diagrams/catalog-067/` と `public/pdf/catalog-067-{ja,en}.pdf`：新規成果物。
- `coordination/catalog-067/`、記事status.md：検査証拠・状態・引継ぎ。

変更ファイルとハッシュはstage2/FILES.tsv。共有ファイルの067だけの差分はstage2/*.067.patch。開始時の共有ファイルはstage2/baseline/に保存。Gitの差分全体には別作業の046、制作方針、他カタログの変更も含まれるため、公開時に一括でstageしない。第1段階のFILES.tsvは当時の履歴であり、今回の状態はstage2/FILES.tsvを使う。

## 残る数学的確認範囲

第1段階から変更なし。Griffithsの相対Hodge–de Rham同定の原典、GAGA等の標準入力の原証明、Alekseevskii–Perelomov原典は追加照合していない。Fischer–Grauertと正KE計量は再掲で確認。036・052等との追加の包含・一般化関係は未調査。日英記事・PDFにこの範囲を保持している。今回は自己点検であり、専門家査読・全証明の形式検証ではない。

## 第3段階の再開

1. 現在のユーザーの公開指示を確認し、Git状態・HEAD・067と並行変更を再確認する。共有作業先のブランチを切り替えない。
2. 067専用ファイルと上記共有ファイルの067分を対象に差分を選ぶ。046や制作セットの変更を無断で含めたり取り消したりしない。必要な共同公開範囲はその時点の指示に従う。
3. 最終差分に変更があれば、引用検査・既存テスト・ビルド・リンク・PDF整合を再実行する。PDF再生成は本文等が変わった場合に限り、日英とも再点検する。
4. 通常のcommit・pushを行い、GitHub Actionsのbuild/deploy成功を確認する。
5. 公開先 `https://masataka123.github.io/OpenAI-Math-Digest/` で日英の067案内・記事・図・PDFが今回の版へ更新されたことを確認し、公開commit・URL・検査結果を報告する。

今回のターンでは第3段階の操作は未実施。

## 再検査コマンド

Node：`/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node`。

```sh
node scripts/sync-citations.mjs --check
node --test scripts/*.test.mjs
node node_modules/astro/astro.js build
node scripts/check-links.mjs
node scripts/build-catalog-pdf.mjs --check
node coordination/catalog-067/stage2/browser.mjs
python3 coordination/catalog-067/stage2/preservation.py
```

PDF再生成が必要な場合だけ：

```sh
DYLD_FALLBACK_LIBRARY_PATH=/usr/local/lib PDF_PYTHON=/private/tmp/catalog-052-pdf-x86/bin/python XDG_CACHE_HOME="$PWD/tmp/font-cache" node scripts/build-catalog-pdf.mjs --catalog 067
node node_modules/astro/astro.js build
node scripts/build-catalog-pdf.mjs --check
/private/tmp/catalog-052-pdf-x86/bin/python coordination/catalog-067/stage2/pdf-qa.py
```

一時Python環境が失われた場合はscripts/pdf/README.mdに従いWeasyPrint 68.1・pypdf 6.19.0等を用意する。ブラウザー検査はローカルサーバーとChromeを使うため実行環境の許可が必要になることがある。
