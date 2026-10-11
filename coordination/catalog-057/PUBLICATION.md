# カタログ057 公開確認済み

2026-10-12 JST。ユーザーの「第3段階：公開・反映確認」に基づき、本チャットがサイト本部として公開を実行し、GitHub Actionsと公開URLへの反映を確認した。第1・第2段階の記録は各段階の履歴として保持する。

- 公開本文commit：[`0cc452aad1fe9fbd269f2b0ba90ad92366e32f26`](https://github.com/masataka123/OpenAI-Math-Digest/commit/0cc452aad1fe9fbd269f2b0ba90ad92366e32f26)
- 配信：[Actions 38151381273](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/38151381273)、build／deployともsuccess。
- 案内：[日本語](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/057/)／[English](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/057/)
- PDF：[日本語47頁](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-057-ja.pdf)／[English 52 pages](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-057-en.pdf)。各4章・16図。

## 公開記事（公式順）

| 順 | 正式タイトル | 記事 |
|---|---|---|
| 1 | The abelianity conjecture for special compact Kähler manifolds | [日本語](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/special-kahler-abelianity/)／[English](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/special-kahler-abelianity/) |
| 2 | Two-step monodromy of special quasi-projective varieties | [日本語](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/two-step-monodromy/)／[English](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/two-step-monodromy/) |
| 3 | A conditional abelianity theorem for special fourfold pairs with a half-weight divisor | [日本語](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/half-weight-fourfold-abelianity/)／[English](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/half-weight-fourfold-abelianity/) |

## 公開前と公開後の確認

commit対象だけの隔離コピーで、38テスト、引用16レジストリ・50管理ファイル、71ページbuild、47,855内部参照、全14冊のPDF鮮度検査が成功。その後mainへ通常のcommit／pushを行い、GitHub Actions上でも全検査とdeployが成功した。

公開リソース78件（日英のトップ・分野・案内・記事計12ページ、32SVG・32TeX、PDF2冊）は、すべてHTTP 200かつ検査済みコピーとSHA-256一致。PDFを再生成せず、第2段階で紙面確認した版を公開した。

公開ブラウザーでは実際のMathJax CDNを使い、日英×1280px／375px×トップ・分野・案内・3記事＝24表示条件を検査。MathJaxエラー0、画像欠落0、ページ全体の横はみ出し0、JavaScriptエラー0、失敗request 0。第3記事の目次がTheorem 1.3を示すことも確認した。

6操作経路（日英×3記事）で、分野→案内→記事、証明アンカーを保持する言語切替、TeX取得、図の拡大／縮小／全体表示、実際の引用popupの遷移先、案内の該当行への復帰を確認。外部文献の全内容を再検証したという意味ではない。公開画像は`screens/`、構造化結果は下表に保存。

| 証拠（validation-stage3/） | 内容 |
|---|---|
| baseline.json | 第3段階開始時刻・HEAD・Git状態・ファイルhash |
| prepublish-*.log、prepublish.json | commit対象のみの事前検査 |
| github-actions.json | 対象commitのbuild／deployと各stepの成功 |
| live-resources.json | 公開78リソースのURL・HTTP・サイズ・SHA-256 |
| live-browser.json、screens/ | 公開24表示条件・6操作経路・画面証拠 |
| commit-scope.json、preservation.json | 公開対象350ファイルと既存変更の保全 |
| completion.json | 第3段階の開始・終了・公開状態 |

検査補正：初回ブラウザー検査は共通キャラクター画像のlazy loading完了前に判定して停止した。画像URLのHTTP 200を確認し、検査側に読込完了待ちを加えて全件を再検査した。サイト変更は不要だった。PythonのHTTPS検査はOSのCA bundle `/etc/ssl/cert.pem` を明示して証明書検証を維持した。保存済みAstro buildログの行末空白だけを整理し、検査内容は保持した。

## 公開範囲と既存変更の保全

057の日英記事3本・案内、引用記録、32SVG・32TeX、日本語47頁／英語52頁のPDF、制作・検査記録、共通登録・目次・版情報・対応テストを公開した。

第2段階からの追加確認で、開始時から存在する `scripts/lib/citations.mjs` のauthor-key対応と `scripts/citations.test.mjs` の回帰テストが未コミットと判明。057の生成済み引用とCIの整合に必須なので、この2ファイルは内容を変更せず公開対象に含めた。新規レジストリの明示指定だけで有効になり、既存引用表示を維持する。

AGENTS、PROJECT_PLAN、production文書群、034中断記録は今回のcommitに含めず、開始時の内容を保持。他カタログの記事・図・12冊のPDFも不変。057の記事本文・図・PDF・数学的確認範囲は第2段階以後に変更していない。

公開後の状態・証拠を保存する追補commitは `[skip ci]` とし、既に検証した公開物を変更しない。状態記録更新後のbuildが公開本文commitの71 HTMLファイルと一致することを照合してから追補する。

## 数学的な確認範囲

主要結果の全結論と証明概略、選択した証明本文、直接入力の記述・適用箇所を照合した第1段階の範囲を維持。第1論文の全解析評価・全モデル比較・Oka–Grauert別原典、第2論文の外部全証明・Hain構成全体、第3論文Appendix A・Hironaka原典などは未確認。記事末尾とsources.jsonに明記している。公開・表示・機械検査の成功を全証明の独立検証や専門家査読とは扱わない。
