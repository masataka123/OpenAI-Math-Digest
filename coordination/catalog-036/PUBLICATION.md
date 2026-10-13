# カタログ036 公開確認

**公開確認済み。** 確認日時：2026-10-13T21:22:22.480752+09:00。ユーザーの「第3段階お願いします」に基づき、本チャットがサイト本部を兼任して第3段階を実施した。

- 公開commit：`cc1bd7ce926ec5352d604fe31556af6861081f14`、ブランチ`main`。
- [GitHub Actions](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/38395413611)：build / deployとも成功。
- [日本語カタログ](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/036/) ／ [English catalogue](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/036/)
- [日本語PDF・56頁](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-036-ja.pdf) ／ [English PDF・62頁](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-036-en.pdf)

日英4記事、公式順の案内、日英32SVG・32TeXを公開。冊子は各5章・16図。数学的本文・図・冊子は第2段階で点検した版と同じで、再執筆・PDF再生成は行っていない。

## 検査

公開前の固定候補で39テスト、引用132ファイル、115ページbuild、126792内部リンク/asset、全24PDFの内容・ファイル整合性が成功。リンク検査は元のcheck-links.mjsを、固定候補に限ってファイル読込みキャッシュ付きで実行。CIでは通常の検査コマンドも全て成功した。

公開後は日英トップ・分野・案内・4記事の14HTML、32SVG、32TeX、2PDFの計80リソースでHTTP 200かつ検査済み候補とのSHA-256一致を確認した。実ブラウザーでは日英1280/375pxの28画面でMathJaxの実CDNを使い、ページ横はみ出し・数式エラー・破損画像・JavaScriptエラーなし。8操作経路で分野→案内→記事、日英切替と証明アンカー保持、TeX取得、図拡大/縮小/全体表示、図中の原典popup URL、案内の該当行へ戻る操作を確認。外部引用先の証明の再検証とは区別する。

証拠はstage3/tests.log、citations.log、build.log、links.log、pdf-check.log、actions-runs.json、actions-jobs.json、live-resources.json、live-browser.json、VISUAL_REVIEW.md。公開画面はstage3/screens/にローカル保存。紙面の全118頁の目視点検は第2段階のstage2/pdf-review/とVISUAL_REVIEW.mdに記録し、公開版PDFが同じハッシュであることを今回確認した。

## 変更範囲・保持

052の公開済みcommit 3887034を起点に、036の269ファイルをcommitした。共有4ファイル（site、PDF版情報、分野一覧を検査する2テスト）は036追加分だけ。制作ルール類の未コミット変更・034停止記録・052のローカル作業資料を保持。ブランチ切替・他担当の変更取消しはしていない。stage3/commit-scope.json、preservation.json参照。

原典PDF/抽出全文、作業HTML、大きな紙面・画面画像はローカル検証資料として保持し、公開commitに含めない。Web公開に必要な全原稿・生成元・引用・SVG/TeX・日英冊子はcommit済み。確認結果の追記は記録専用commitとして保存する。

## 数学的な確認限界

[UNRESOLVED.md](UNRESOLVED.md)の範囲を日英本文とPDFにも維持。Kähler中間全計算/period互換性、射影Frobenius全計算、generalized局所§§4–13の深い一様評価、一部教科書の原記述全照合は未確認。034 Kähler入力の記事10/4版と引用10/6版を区別した。公開確認は全証明の独立検証・専門家査読ではない。
