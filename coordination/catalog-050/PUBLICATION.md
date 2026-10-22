# カタログ050 第3段階の公開記録

ユーザーの「第3段階をお願いします」に基づき、通常のcommit・pushで公開し、Actionsと公開版を照合する。本部root（指定と確認限界はMODEL_PROVENANCE.json）。

## 公開対象と同一版の受領

第1段階のAstra執筆・別担当点検版を維持し、日英記事・短いカタログ案内・引用記録・TeX/SVGと、第2段階で検査した日英PDFを公開する。新規の数学執筆・図の再コンパイル・PDF再生成は行わない。今回の版の内容点検はCONTENT_REVIEW.md、画面と全紙面の判断はPREPARATION_REVIEW.md、公開直前の照合はstage3/prepublication.json。

共通変更は050登録、050だけが使用する見出しの語単位改行、登録順テスト2件、PDF版情報の050追加。PDF版情報の着手前の書式差分は作業場に保持し、HEADの記録へ050だけを追加した版をcommitする。漫画本部と他カタログの変更は対象外。既存ファイルの保全基準はstage3/unrelated-baseline.json。

050の担当フォルダの原記録・出典取得物・確認画像は保存する。公開用資産はpublic配下の対象図とPDF。機械的な数値・ハッシュ・ログは各原記録を参照し、本書へ表を複写しない。

## 公開先

- [日本語カタログ](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/050/)
- [英語カタログ](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/050/)
- [日本語記事](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/ample-quadric/)
- [英語記事](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/ample-quadric/)
- [日本語PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-050-ja.pdf)・[英語PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-050-en.pdf)

## 確認範囲

数学的な確認範囲と未確認事項はCONTENT_REVIEW.mdと本文末尾を維持する。記事の主要主張・核心の証明本文・直接入力の記述と適用を照合した範囲であり、全証明・外部結果の証明全体の独立検証や専門家査読ではない。今回の公開確認によって内容点検の範囲を拡張しない。

## 公開・配信の結果

第3段階完了。公開commitは[`61634a438452ab557ddff68820bf7edb6d24d3e1`](https://github.com/masataka123/OpenAI-Math-Digest/commit/61634a438452ab557ddff68820bf7edb6d24d3e1)。[GitHub Actions](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/39716123634)のbuild・deployがともに成功。原記録はstage3/actions-run.json・actions-jobs.json・actions-build.json。

公開したcommitをgit archiveで別フォルダに展開し、共通のAstro構成でビルドした。配信HTML、参照するスタイル、対象TeX/SVG、日英PDFの応答が、そのビルドと検査済み公開資産に一致した。照合対象と結果はstage3/live-resources.json。PDFは第2段階で全紙面を確認した版と同じで、再生成していない。

日英PC/375pxのカタログ・記事、034・Schnell・033 Orbifold Iitakaの見本画面を確認。数式・画像・横幅、公式順の共通表、PDF導線、図の拡大・全体表示・閉じる操作・引用リンク、スクロール後の言語切替とアンカー保持、トップ→分野→050→記事の導線が成功した。対象画面と見本の全ページ画像は、第2段階の目視確認済み画像とRGB画素が一致。stage3/live-browser.json・render-comparison.json・screens/を参照。本部rootはlive-review-contact.jpgも目視し、見出し、PDF入口、主張・引用欄の表示を受領した。

最初の手元ビルドとの照合では、未公開の漫画試作を含む共有作業場と公開commitでスタイルの配置・資産名が異なった。公開commitだけのビルドへ基準を分け、対象HTML本文とスタイル以外のheadが一致し、適用するスタイルの宣言集合も一致することを確認した。初回結果はstage3/live-resources-initial-workspace.json、切り分けはbuild-comparison.json・style-comparison.json。数学本文や公開資産の修正は不要だった。

画像保存名をページごとに整理した再検査では、案内役の遅延読込み画像をロード完了前に欠落と判定した回がある。stage3/live-browser-before-image-ready.jsonに保存し、スクロールと画像デコードを待ってから判定するよう今回の検査側を修正した。最終回は全条件で成功し、その画像を採用した。サイトの画像を差し替えた記録ではない。

公開差分はstage3/commit-scope.json、他作業の保全はstage3/preservation.json。共有作業場の漫画用スタイルに並行変更を観測したが、今回の処理では読取のみで、変更・stage・commit対象に含めていない。PDF版情報の既存値と作業場の書式差分も保持した。

公開確認記録は別の`[skip ci]` commitで保存する。記録だけのcommitでサイト内容を変えず、配信確認の対象は上記公開commitである。公開工程の残作業はない。追加改訂時は、最新Git状態と本書・CONTENT_REVIEW.mdを確認し、数学的変更は指定Astraへ戻す。
