# カタログ159 公開確認記録

2026-10-15、ユーザーの第3段階指示に基づいて公開を完了した。確認時刻（UTC）：2026-10-15T13:21:18.887212+00:00。

- 公開commit：`6a4ce9d98f2815b220ef144a7ddd5100ba1007be`。
- 作業ブランチ：`main`。共有作業先のブランチ切替なし。
- Actions：[Build and deploy OpenAI Math Digest](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/38740495052)、build/deployとも成功。
- [日本語カタログ](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/159/) ／ [English catalogue](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/159/)。
- [日本語記事](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/quasipolynomial-arithmetic-progressions/) ／ [English article](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/quasipolynomial-arithmetic-progressions/)。
- 日英PDFはカタログ冒頭から到達。日本語14ページ、英語15ページ、各2章3図。

## 検査

公開用コピーでは39テスト、引用200ファイル、159ページのbuild、全登録PDFの版照合が成功。内部リンク・資産187,254件の標準検査も成功（links.log）。GitHub Actionsでは標準のcheck:linksを含む全工程が成功した。

公開サイトで日英×PC1280/スマートフォン375px×カタログ・記事・組合せ論の12条件を確認した。CDNのMathJaxを置換せず数式表示を確認し、MathJaxエラー・JS例外・ページ全体の横はみ出し・欠落アンカーなし。PDF導線、表の横スクロール、図の拡大/全体表示/ズームと引用リンク、言語切替時の#proof-2保持を確認した。画面画像はローカル `stage3/live/`、数値/操作結果は `live-checks.json`。

公開された日英PDF2本、SVG6枚、TeX6本の計14資産を取得し、手元のSHA-256と全件一致した（`live-assets.json`）。原典リンクは固定commitを保持している。

## 範囲と保全

159の原稿・案内・引用・図・PDF・台帳・点検記録と、共有site/PDF台帳の159部分だけを公開commitへ含めた。087・285・287およびAGENTS/production等の未コミット変更を取り込まず、取り消していない。大きな原典ファイル・抽出全文・表示画像・一時プレビューはローカルに保持し、原典の固定URL/ハッシュと内容点検記録をGitへ保存した。

第1段階のAstra執筆/点検成果を公開し、本段階で数学本文は変更していない。制約付き標本化の全誤差評価、能動globalization、抽出の全数値評価、Appendices B–Iの全証明、外部結果の再帰的証明検証は未実施のまま。専門家査読・形式検証を行った表示にはしていない。

公開作業は完了。追加作業は新たな訂正・更新依頼があった場合に行う。
