# カタログ322 第3段階 公開記録

担当：root（サイト公開・機械照合）。2026-10-20のユーザー指示「第３段階お願いします」に基づく。数学的本文の追加執筆・内容改訂は行っていない。内容担当・別担当照合はMODEL_PROVENANCE.json / CONTENT_REVIEW.md参照。

## 公開対象版

第2段階の実行ID `2026-10-20T10-33-46.620Z-72123`。第3段階開始時にstage2/release-manifest.jsonの全成果物がSHA-256一致。1論文、証明図3種×日英、日英PDF16/17ページ。確認済みPDFをそのまま使用し、再生成しない。

元commit `b284533abcd0fad49f279bfd64482e91d185e80d`、リモートmainも一致。src/data/pdf-editions.jsonの既存差分は順序のみ（値に変更なし）。GitへはHEAD版に322のみ追加し、作業ファイルの既存の並び替えを保持する。

## 証拠の保存

記事・図・台帳・制作記録と画面確認資料を対象限定で保存。ダウンロードした原典の複製・抽出テキスト、全リポジトリの作業状態一覧、共通ファイルの開始時コピーはローカルに保持し、公開commitから除外する。原典の版・URL・ページ数・ハッシュは公開対象のSOURCE_MANIFEST.jsonに残す。具体的な保存／除外パスはstage3/commit-scope.jsonを参照。

## 公開候補の最終検査

公開候補だけを一時ディレクトリへ展開し、共通のテスト・引用・ビルド・リンク・全カタログPDF検査を実行。すべて成功（機械処理48.95秒）。322の日英カタログ・記事のHTMLは第2段階で目視した版とバイト単位で一致。詳細はstage3/release-tree-checks.jsonとrelease-html.json。公開用JSON差分は322の追加だけで、他カタログの値は変更なし。

生成ログとPDF内の仕様上の末尾空白を通常のdiff検査が検出したため、ソース・原稿・JSON・TeXを対象に再確認し問題なし。PDFや生ログは改変していない。最初の生diffの文字列読込みはPDFの非UTF-8部分で失敗し、バイトとして保存し直した。成果物の変更・検査省略はない。

## 公開・反映確認

公開確認済み（2026-10-20 JST）。サイト内容commit：`206b46aba110bf652052ffa134770b86f2070ec7`。

- [日本語カタログ](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/322/) ／ [English catalogue](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/322/)
- [日本語記事](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/tingley-positive-solution/) ／ [English article](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/tingley-positive-solution/)
- [日本語PDF・16ページ](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-322-ja.pdf) ／ [English PDF・17ページ](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-322-en.pdf)
- [GitHub Actions run 39411551999](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/39411551999)：attempt 1、build/deployとも成功。失敗・再実行なし。

公開された8 HTML（日英トップ・分野・カタログ・記事）、12図ファイル（6SVG＋6TeX）、2PDFの計22件がHTTP 200で、すべて公開候補のSHA-256と一致。カタログ・記事HTMLは第2段階で目視した版とも一致。stage3/live-resources.jsonに全URL・ハッシュを記録。

共通 `scripts/browser/inspect-page.mjs` のready/inspectPage/checkViewers/checkLanguageを公開サイトでも使用。日英カタログ1280px・記事375pxの4条件で、数式・画像・横幅・全3図の拡大/全体表示/引用維持・スクロール後の言語切替/アンカーを確認し、エラー0。公開画面4枚をrootが目視し、カタログのPDF導線、記事タイトル、日英表示、注意書き、右上言語切替に問題なし。証拠はstage3/live-browser/。第2段階の本文・全33ページPDFの目視記録は、同一版であることをハッシュで確認したうえで参照する。

## 第3段階の時間と処理

Actionsは19:57:24 JST開始、最終ジョブ19:59:30完了（126秒）、成功状態の更新19:59:31（127秒）。build 71秒、deploy 48秒、ジョブ間等7秒。秒単位API時刻による。詳細はstage3/timing.json / actions-jobs.json。

| ビルド工程 | 秒 |
|---|---:|
| checkout | 21 |
| Node設定 | 2 |
| npm ci | 3 |
| テスト | 4 |
| 引用確認 | 0（秒未満を区別できないAPI精度） |
| サイトビルド | 10 |
| 内部リンク | 2 |
| PDF台帳確認 | 19 |
| 配信用成果物アップロード | 7 |

公開候補のローカル最終検査48.95秒、公開22件の取得/ハッシュ照合3.10秒。公開ブラウザー検査時間はtiming.json参照。目視は20:01–20:02頃、約1分（概数）。Git送信は画面資料を含み約3分、正確な開始/終了の個別計測なし。補助処理の文字コード・Python CA設定の問題は、バイト保存・証明書検証有効なsystem curlへ変更して解消（全体の手修正時間は未分離）。公開・Actions自体の失敗/再実行は0。本文の読解・執筆追加は0、PDF再生成0。第1段階の読解/執筆・第2段階の機械処理とは分離した記録であり、他カタログとの単純比較による高速化判定はしない。

## 保全と完了記録

322以外のGit状態9594項目は開始時と一致。既存pdf-editions.json作業ファイルはバイト単位で保持し、コミットには322追加のみを含めた。stage3/preservation.json参照。原典複製・未追跡成果物を削除していない。

公開後の確認記録だけを別の記録用コミット（`[skip ci]`）で保存する。サイト本文・図・PDF・共通コードの変更は含めず、再配信は不要。配信済みのサイト内容は上記206b46a。必須の残作業なし。今後本文・図・PDFを変える場合は共通catalog:prepareで新版を検査し、新たなPREPARATION_REVIEWを記録する。


## 数学的確認の範囲

第1段階の確認範囲を維持。主要主張・帰着・直接入力の記述と適用箇所を原典と照合済み。全外部文献の証明の再帰検証、全証明の独立認定は行っていない。Nica原典の表示年の差異を含む版の注意は出典記録と記事の確認範囲に記載済み。
