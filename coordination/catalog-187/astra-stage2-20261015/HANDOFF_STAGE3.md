# Catalogue 187 — 第3段階への引継ぎ

ユーザーの今回の許可は第2段階まで。**commit・push・公開はまだ行わない。** 第3段階の明示指示後に以下を実施する。

## 採用する成果物

- Astra新稿：`drafts/catalog-187/snaky-in-21-maker-moves/`、`drafts/catalog-187/overview/`。
- 現行公開図：`public/diagrams/catalog-187/snaky-in-21-maker-moves/` のstrategy／composition／certificate／finite-board、各ja/enのtex/svg。
- 日英冊子：`public/pdf/catalog-187-ja.pdf`（21ページ）、`public/pdf/catalog-187-en.pdf`（22ページ）。各2章・4図。`src/data/pdf-editions.json` の187項目が対応する。
- 台帳：`coordination/catalog-187/inventory.json`。執筆・数学点検はAstra第1段階の記録、組込み検査は本runのREVIEW.md、logs/、browser.json、pdf-review.json、scope.json。
- 旧Sol本文・図・PDF・点検は採用しない。superseded-*、本runのbefore/、before-hatching-fix/は保全用。サイト出力へ戻さない。

## 再開

1. 最新のAGENTS.md、PROJECT_PLAN.md、production/README.mdと公開チェックリスト、Git状態を読む。共有ブランチはmainのまま。他カタログの未コミット変更を巻き戻さない。
2. `CHANGED_FILES.txt` とscope.jsonを確認。第2段階開始HEADは65c34a9、途中で別担当のカタログ004公開commit0875d90と在庫記録commit5abb051が加わった。本部はcommit・pushをしていない。187は未公開として扱い、最新HEADは再確認する。
3. 187の全受領成果物と登録をまとめて差分確認する。`src/data/site.mjs` には187のimport、Combinatorics所属、papers生成、catalog定義が必要。`src/data/pdf-editions.json` は187項目だけを対象にする。共有ファイルには246等の差分もあるので全ファイルを無条件にstageしない。制作セット・AGENTS等の既存変更も本件へ自動同梱しない。
4. 生成図を編集した場合、共通引用記録→TeX/SVG→公開コピー→build→日英PDF→buildの順で更新する。finite-board.tikzはPDFでも表示できる明示斜線版を使う。第1段階のmake-board-source.pyを無修正で再実行するとSVG pattern版へ戻るため使用しない。現行tikzからrender.pyを実行する。
5. `npm test`、`npm run check:citations`、`npm run build`、`npm run check:pdf`、`npm run check:links`を実行。npmがない環境ではpackage.jsonの各Nodeスクリプトを直接実行できる。Node：`/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node`。PDF_PYTHON：`/private/tmp/catalog-052-pdf-x86/bin/python`（一時環境が消失した場合は共通requirements.txtから復元）。
6. 共有distは並行ビルドで変わり得る。リンク検査には完成したビルドを固定コピーし、そのcwd内のdistを共通check-links.mjsで検査する。今回の固定コピーは `tmp/catalog-187-stage2-check/dist`、ファイルハッシュはbuild-snapshot.json。一時ファイルはcommit対象にしない。
7. 対象187の必要ファイルだけをcommitし、ユーザーの公開許可の範囲でpush。Actionsのbuild/deploy成功を待ち、公開した日英カタログ・記事・8SVG・日英PDFを取得して照合する。
8. 公開PDFのSHA256を台帳と照合。日英のPDF冒頭導線、#sources言語切替、図の斜線と拡大を確認。公開commit・URL・反映結果を記録して完了報告。

## 公開確認の予定URL（本段階では反映確認していない）

- https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/187/
- https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/187/
- https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/snaky-in-21-maker-moves/
- https://masataka123.github.io/OpenAI-Math-Digest/en/papers/snaky-in-21-maker-moves/
- https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-187-ja.pdf
- https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-187-en.pdf

数学の未確認事項はCONTENT_REVIEW.md／COMPUTATIONAL_REVIEW.mdのまま。全証明書の手検算、専用局所応手suite、全中間集合突合、方策対局実行、探索、Lean監査・コンパイル、他カタログ関係を公開工程のついでに実施済みと扱わない。
