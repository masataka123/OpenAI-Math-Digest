# カタログ068 公開記録

第3段階（公開・反映確認）完了。ユーザーの「じゃあ第三段階をしてください」に基づき実施。

- 公開commit：`25b74a784d29750590b00e9c3be37dfd7046fccf`（mainへの通常commit/push）。
- GitHub Actions：[38191617170](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/38191617170)、build / deploy とも成功。
- 確認完了：2026-10-12T10:30:56.683453+09:00。
- 日本語：https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/068/
- 英語：https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/068/
- PDF：上記案内冒頭から日本語111ページ・英語119ページ、各8章36図。

## 検査と公開反映

公開前：引用24レジストリ／82ファイル、テスト38/38、build87ページ、内部リンク79,029件、PDF全16冊current。実行ログはstage3-*.log。

公開配信：日英案内・7記事・トップ・分野の計20 HTML、144 SVG/TeX、日英PDF2冊、合計166応答のSHA-256が手元の検査済みビルド／公開資産と一致（validation-stage3/live-resources.json）。

実公開URLを実CDNのMathJaxで閲覧。日英・PC1280px／スマートフォン375pxの40条件、14操作経路を検査。横はみ出し、数式エラー、画像欠落、JavaScript例外、リクエスト失敗なし。分野→案内→記事→証明、アンカーを保持する言語切替、図拡大・縮小・全体表示、引用遷移、TeX取得、一覧への復帰を確認。画像と結果はvalidation-stage3/screens/とlive-browser.json。

第2段階では全230ページのPDF画像、全収録図、034・Schnell・033 Orbifold Iitakaとの画面比較を実施済み。公開PDFはその検査済み版と同じバイト列。

## 変更範囲と保全

068の原稿・出典・図・PDF・点検記録と、サイト登録／PDF版情報／登録期待値の4ファイルのみ公開。開始時からの11文書変更と034中断記録を保持。既存カタログ記事・図・PDF・共通表示は変更していない。commit-scope.jsonとpreservation.jsonに記録。

再生成可能なpreview・reference-preview HTMLとPDF個別ページPNGはローカル保持してGit対象外。点検記録、コンタクトシート、比較スクリーンショット、全公開資産はGitへ保存。原典PDF・抽出テキスト・実行ログの空白はデータとして保持し、それ以外の差分空白検査は成功。stage2-browser.mjsの空行の末尾空白1箇所のみ整理。

公開確認記録は別の `[skip ci]` commitで保存する。この記録のみのcommitは公開サイトを変更せず、配信内容の対象は上記公開commit。

## 数学的な確認範囲・残作業

第1・第2段階の限界を保持。主要結果と核心の証明本文・直接入力の記述と使用を照合した読解ガイドであり、全証明の独立再検証や専門家査読ではない。

04の補助出力Th5.2/Th11.1/Prop14.1、05後半§§8–12、06別経路§§6–8/10–12、07別証明Th9.1/Th12.4と§§13–14等の全詳細は未点検。基礎のtoroidal化・同変解消・局所化・解析的近似の元文献全件も未照合。未確認関係を確認済みの矢印にしていない。正確な範囲はCONTENT_REVIEW.md、各sources.json・本文末尾を参照。

公開工程の残作業なし。追加内容点検や改訂を行う場合は、新しい依頼範囲を定め、最新Git状態と本記録を確認して再開する。
