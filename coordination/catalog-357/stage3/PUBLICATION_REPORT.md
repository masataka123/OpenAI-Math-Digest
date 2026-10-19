# カタログ357 公開・反映確認

- 完了：2026-10-19T10:25:34.528491+09:00。本部root、技術ブラウザーQA presentation357。数学内容の新規執筆・再点検なし。
- 公開指示：ユーザーの「第3段階をお願いします.」。
- 公開commit：`892cd7baed4cda2326fc67b0d372b2a4b8c499cc`。通常commit・push。先行356の`1b9166a26ed02cd6d66c91f95d67d32beb55bdb6`を親として保持。
- [Actions](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/39182616123)：build/deployともsuccess。

## 公開成果物

- [日本語カタログ](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/357/) / [English catalogue](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/357/)
- [日本語記事](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/regular-rcd-coordinates/) / [English article](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/regular-rcd-coordinates/)
- [日本語PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-357-ja.pdf) / [English PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-357-en.pdf)
- 日英PDFは各20頁、2章、証明図5点。図中の引用リンク各18件を保持した第2段階受領版のまま公開。
- PDF SHA-256：JA `ab673f28e15aeb9d4e82b2ea03abe5c7a7c86426cb2a4a7ff8dcd90471c0f5f0`、EN `865d2dada1c0eab087d16384e591a8a8c2593612b1edea716a671ffd254982f0`。

## 確認結果

公開候補の限定snapshotでテスト39/39、引用79レジストリ286ファイル、215頁build、267,933内部参照、全52冊PDF一致を確認。全リンクの検査条件は共通scriptと同一で、繰り返し読込だけをcache化。GitHub Actionsでは通常の共通scriptも成功した。

公開8HTML（トップ/分野/カタログ/記事の日英）、10SVG、10TeX、2PDFの計30件をHTTP取得し、公開候補/受領assetsとのSHA完全一致を確認。公開ブラウザーでは日英カタログ/記事×1280/375pxの8条件、言語切替・アンカー・図拡大/全体表示/引用・PDF導線を確認。詳細はlive-assets.json、browser-checks.json、LIVE_BROWSER_REVIEW.md。

当初検査中に並行356が公開されたため、indexに書く前のHEADガードが停止。候補を新しいmainへ更新して再検査した。他担当の作業場ファイルは保持。共有site.mjs/pdf-editionsは357追加だけをcommit。原典PDF・抽出文・全画面画像はローカル証跡として保持し、URL/版/SHA/点検記録/再現scriptをcommitした。

生成ログとPDF内部の末尾空白を変更せず、空白検査は編集ソースで成功。PDFはバイト列一致を確認。記録だけの後続commitは[skip ci]で公開内容を変更しない。

## 数学的確認範囲と残作業

制作・公開の残作業なし。局所Poisson正則性、Hessian calculus、Bochner、距離Laplacian比較の外部各結果の全仮定の網羅照合、長い内部計算の独立再証明、外部証明の再帰検証、専門家査読・形式検証は未実施という留保をWeb/PDFに保持。機械的検査・公開成功を全証明の正しさの認定とはしない。

次の改訂時はこの公開commitとstage2/REPRODUCE.mdを起点に、変更箇所に応じて再点検する。
