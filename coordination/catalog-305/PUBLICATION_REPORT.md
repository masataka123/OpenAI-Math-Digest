# カタログ305 第3段階 公開記録

2026-10-21のユーザー指示「第３段階をしてください.」に基づく。担当は`/root`サイト本部。指定モデル・思考量と取得限界はMODEL_PROVENANCE.jsonのstageActivitiesを参照する。

## 対象と確認済み版

サイト内容commitは `4c2dfb8943c209fb6b13b328fed1d23d7f541589`。第2段階の実行ID `2026-10-21T11-57-18.894Z-70208` とPREPARATION_REVIEW.mdが内容・画面・紙面の確認記録。数学の新規執筆・修正、図・PDFの再生成は行っていない。既存の原稿・TeX/SVG・日英PDFを照合して再利用した。

同一版の照合はstage3/same-version.json。Astraの受領版manifest・公開コピー・PDF版情報と一致する。元のAstra内容点検の範囲を参照し、今回の公開作業を数学的な再検証として扱わない。

## 公開差分と検査

stage3/commit-scope.jsonに対象とローカル保持した除外ファイルを記録。305の本文・図・台帳・制作／検査記録と共通登録の追加をcommitした。原典の全文複製・抽出テキスト・一時プレビュー・全作業場の状態一覧はローカルに保持し、公開commitへ含めていない。参照commit・原稿版・URL・ページ数・SHA-256はinventory.jsonとsourcesの取得台帳に残す。

共通PDF台帳はHEADの順序に305だけを追加してGitへ登録し、作業ファイルの既存のキー順は保持した。他カタログの版情報の値は変更なし。stage3/preservation.jsonは他カタログの未追跡ファイル等の状態と作業ファイルの保持を確認する。

ステージ済み公開候補だけを一時ディレクトリへ展開し、共通テスト・引用・ビルド・内部リンク・全カタログのPDF検査を実行した。すべて成功。原記録はstage3/release-checks.jsonと各ログ。今回生成したHTMLは第2段階で画面確認した全対象・比較見本のHTMLとバイト単位で一致する（stage3/release-html.json）。PDFは再生成していない。

## 配信と公開リソース

**公開確認済み（2026-10-21 JST）。** [Actions run 39599240990](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/39599240990) は今回のサイト内容commitに対してbuild・deployとも成功。原記録はstage3/actions-run.jsonとactions-jobs.json。失敗・再実行はない。

日英トップ・Topology・305案内・全3記事、全公開TeX/SVG、日英PDFの54リソースがHTTP 200で、公開候補とSHA-256一致。原記録はstage3/live-resources.json。案内・記事のHTMLは第2段階の目視対象版とも一致し、同一版の紙面・全図の目視結果をPREPARATION_REVIEWから参照する。

共通 `scripts/browser/inspect-page.mjs` のready/inspectPage/checkViewers/checkLanguageを公開サイトで使用した。日英カタログ1280pxと全記事375pxの8条件で、数式・画像・本文幅、全図の拡大／zoom／fit／closeと引用の維持、スクロール後の右上言語切替とアンカー保持を確認した。採用した8画面を本部が目視し、冒頭PDF導線・タイトル・注意書き・案内役・言語切替に欠けや重なりはない。

初回の日本語カタログだけは案内画像の読込みが完了しておらず、画像未読込として検出された。他7条件は成功。該当1条件だけ画像の完了を待って再確認し成功した。案内画像自体も公開ファイルとバイト一致。サイトの変更は不要だった。初回の結果を消さずstage3/live-browser/report.jsonへ残し、採用結果と再確認理由をstage3/live-browser-summary.json、再確認画像・記録をstage3/live-browser-recheck/、画像の同一性をstage3/guide-image-check.jsonへ保存した。

- [日本語カタログ](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/305/) ／ [English catalogue](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/305/)
- [日本語PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-305-ja.pdf) ／ [English PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-305-en.pdf)

サイト内容の配信後に、公開確認記録とチェックリストだけを別の記録用commit（`[skip ci]`）で保存する。この記録追加では本文・図・PDF・表示・組版を変えない。配信済みのサイト内容commitは上記4c2dfb8。

第3段階の必須残作業はない。将来内容や共通表示を変更する場合は、影響範囲をAstraへ戻すか、必要な共通検査と新版の目視を行う。同一版の公開を理由に読解・図・冊子をやり直さない。

## 数学的確認の範囲

第1段階のCONTENT_REVIEW.mdと各記事末尾の確認範囲を維持する。主要主張・帰着・直接入力・日英・カタログ接続について記録した範囲の照合であり、全証明の独立検証・専門家査読・形式検証ではない。Quinn83相対安定積の原文、PD4が使う外部CAT(0)・Farrell–Jones・穿孔平滑化の原文結果記述の未照合など、既存の未確認事項は公開本文に残している。
