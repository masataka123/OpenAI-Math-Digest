# カタログ052 公開確認

- 状態：**公開確認済み**。確認日時：2026-10-13T21:05:16.060645+09:00。
- ユーザーの「じゃあ公開してください」に基づき第3段階を実施。
- 公開commit：`abbbc326a8e097c750414874237fd82979e125f3`、ブランチmain。
- [GitHub Actions](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/38393618820)のbuild/deploy成功。

## 公開成果物

- [日本語カタログ](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/052/)
- [English catalogue](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/052/)
- [日本語PDF・28ページ](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-052-ja.pdf)
- [English PDF・32 pages](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-052-en.pdf)
- 日英2記事、案内図1種＋記事図7種。両冊子とも案内＋公式順2記事の3章、8図、247数式。

## 公開前後の検査

052だけをHEADへ加えた固定候補を用意し、39テスト・引用・105ページbuild・106,307内部参照・22冊PDF照合を確認した。内部参照検査は同一check-links.mjsのファイル読取りをキャッシュして実行し、検査内容を変更していない。CIでも通常コマンドがすべて成功。

公開後、6 HTML・16 SVG・図の16 TeX＋共通引用定義6 TeX・2 PDFの計46リソースがHTTP 200かつ検査済み候補とSHA-256一致。実ブラウザーでは日英・1280/375px、トップ・分野・案内・2記事の20条件を確認。実際のMathJax CDNを使い、横はみ出し・数式エラー・破損画像・JSエラーなし。4操作経路で分野→案内→記事、日英切替とアンカー、図の拡縮・全体表示・原典popup、TeX取得、一覧へ戻るを確認。

証拠：stage3/tests.log、citations.log、build.log、links.log、pdf-check.log、actions-runs.json、actions-jobs.json、live-resources.json、live-browser.json、screens/。PDF紙面全60ページの点検はstage2/pdf-review/、数式・主張・図は同じ版を公開。

## 変更の範囲と保持

公開commitは052の原稿・引用・図・PDF・登録と必要な記録183ファイル。共通4ファイルは052の差分だけをindexへ取り込み、036の登録・PDF metadata・テスト期待値の差分は作業ツリーに保持した。制作ルール類の既存変更、034停止記録も公開対象外として保持。ブランチ切替や共有原稿の巻戻しはしていない。stage3/commit-scope.json参照。

原典PDF・作業用HTML・紙面／画面の大きな確認画像の一部はローカル検証資料として保持し、今回の公開commitには含めていない。Web公開に必要な全原稿・生成元・引用・SVG/TeX・2冊PDFはcommit済み。

## 数学的な確認限界

KM98 Theorem 3.3の外部原典本文・正確な掲載ページ、Universal Appendices A–Dの別証明、外部結果の全証明等は未確認として日英本文・案内・冊子に維持。Campanaの射影性はHor08の記述で確認し原証明は未読。今回の公開確認は全証明の正しさの認定ではない。
