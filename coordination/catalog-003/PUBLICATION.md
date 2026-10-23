# カタログ003 — 第3段階の公開・反映確認

2026-10-23、ユーザーの「第3段階をお願いします.」を受け、Solサイト本部 /root が公開と反映確認を完了した。担当指定はMODEL_PROVENANCE.json#/stage3。第1・第2段階の停止後に、今回の指示で進めた。

## 公開先と反映版

- [日本語カタログ](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/003/)
- [English catalogue](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/003/)
- [日本語冊子PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-003-ja.pdf)
- [English booklet PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-003-en.pdf)

公開内容のcommitは `83c43350a35bf79eedb7cbcde2c065fb66c45bd0`。mainへ通常のpushを行い、[Actionsのbuild/deploy](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/39947397580)の成功を確認した。後続の公開記録だけのcommitは `[skip ci]` とし、この確認済みの配信版を維持する。

## 確認の根拠

- 内容の受領：reviews/CONTENT_REVIEW.md、各記事・案内の点検記録。原典版・書誌・取得情報はinventory.jsonとsources/acquisition.json。
- 公開準備：STAGE2_HANDOFF.md、PREPARATION_REVIEW.md、そこから参照する共通実行の原記録。確認済みの本文・図・HTML・PDFをstage3/prepublication-identity.jsonで照合し、同一版の目視記録を再利用した。
- 公開対象の選別：stage3/file-selection.json。カタログ003と登録用の共有2ファイルだけをcommitした。外部文献のダウンロード、重複する画像キャッシュと無関係な既存作業はローカルに保持した。rawログ・原典・PDF固有の空白は原記録を保ち、執筆・登録ファイルの空白検査はstage3/authored-whitespace-check.logで確認した。
- Actions：stage3/actions.json。ローカルの対象PDF・引用再照合はstage3/pdf-check.log、citations-check.log。
- 公開リソース：stage3/live-resources.json。日英トップ・数論分野・カタログ・全3記事、公開図のTeX/SVG、日英PDFを取得し、ローカルの確認版との完全一致を確認した。
- 公開画面：stage3/live-verification.jsonと参照先。日英カタログ・全記事の数式、はみ出し、図表示・拡大・fit・閉じる操作、引用保持、スクロール後の日英切替とアンカーを確認した。初回の日本語カタログで案内役画像が読み込み途中だったため、画像の取得・同一性と読込完了後の該当画面を再検査して解消を確認した。サイト変更は不要だった。

公開スクリーンショットも確認し、AI注意書き・原典確認の案内、日英PDF導線、公式順の記事導線が維持されている。数値・ハッシュ・工程ログは上記原記録を参照し、重複転記しない。

## 確認範囲と残作業

数学的な新規執筆・修正・追加点検は行っていない。第1段階のAstra執筆・別担当点検と、記事・sourcesに示した確認限界を維持する。大部原稿の全再帰・検出器・尾部評価、11/12稿の全変換・一様性やCorollary 1.2の外部定数管理等、未確認の範囲を公開処理で解消したとは扱わない。外部結果の全証明を再帰的に検証していない。

今回依頼された公開作業の残りはない。実機スマートフォンの検査は行っておらず、Chromeの375px表示として記録する。

## 保存先と再開

作業先は `/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、ブランチはmain。成果物はdrafts/catalog-003/、public/diagrams/catalog-003/、public/pdf/catalog-003-{ja,en}.pdf、記録は本フォルダに保存した。STAGE3_RECEIPT.jsonが完了受領の入口。

後日変更する場合は本書・STAGE2_HANDOFF・PREPARATION_REVIEW・最新Git状態を読み、現在の公開版と照合して対象差分だけを扱う。数学的変更は明示指定のAstra執筆担当へ返し、別Astraの影響範囲点検を受ける。変更のない本文・図・PDFを作り直さず、必要な範囲を共通処理で再検査してから公開する。
