# カタログ109 公開記録

第3段階を完了。ユーザーの「第三段回をお願いします」に基づき、検査済みの日英案内・記事・TeX/SVG・日英PDFを公開し、反映を確認した。担当は本部 `/root`。モデル指定と確認可能範囲は [MODEL_PROVENANCE.json](MODEL_PROVENANCE.json)。完了時刻・判定の正本は [stage3/final-state.json](stage3/final-state.json)。

## 公開先

- [日本語カタログ109](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/109/) ／ [English catalogue 109](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/109/)
- [日本語記事](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/integer-multiplication-below-n-log-n/) ／ [English article](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/integer-multiplication-below-n-log-n/)
- [日本語PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-109-ja.pdf) ／ [English PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-109-en.pdf)

## 公開と確認

公開用commitは [873d509](https://github.com/masataka123/OpenAI-Math-Digest/commit/873d509b2d0fdc3ff58e68d928bb02a6224816ce)。[GitHub Actions](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/39733693620) のbuild/deployが成功した。原記録は [stage3/actions-final.json](stage3/actions-final.json) と [jobs](stage3/actions-jobs-final.json)。

公開前に109だけの隔離スナップショットで引用・テスト・ビルド・全PDF版照合・内部リンクを確認した。[release-checks.json](stage3/release-checks.json) から各原ログを参照する。大きな一括pushがHTTP 408/400で通らなかったため、公開用変更と検査記録を通常のfast-forward commit/pushへ分割した。元の未送信commitと最終ツリーの同一性、全送信結果は [batched-pushes.json](stage3/batched-pushes.json)。強制push・共有作業ファイルのresetは行っていない。

公開サイトのトップ・理論計算機科学・カタログ・記事の日英HTML、SVG/TeX、PDFを取得し、HTTP状態・配信形式・検査済み版とのバイト一致を [live-resources.json](stage3/live-resources.json) に記録した。TeXの配信形式application/x-texは正常で、検査側のtext/*限定条件を訂正した。サイト資産の修正は不要だった。

公開カタログ・記事の日英PC/375pxで、MathJax・ページ幅・画像・共通4列表・PDF導線・図ビューアの拡大/全体表示/終了と引用保持・スクロール中の日英切替とアンカー保持を確認した。[live-browser.json](stage3/live-browser.json)、[画像](stage3/screens/) を参照。公開画面の目視サンプルと、第2段階の同一版の紙面/全図確認を再利用した根拠は [final-state.json](stage3/final-state.json) と [PREPARATION_REVIEW.md](PREPARATION_REVIEW.md)。

## 保存範囲・残作業

内容点検済みの原稿・図は [content-manifest.json](review/content-manifest.json) と再照合し、変更していない。PDFも確認済み版を再利用した。[preservation.json](stage3/preservation.json) と [preflight.json](stage3/preflight.json) を参照。ローカルに取得した原典PDF・全文テキスト等は保持し、今回の公開commitには含めなかった。途中で観測した担当外の並行編集は [concurrent-working-changes.json](stage3/concurrent-working-changes.json) に記録し、取り消し・編集・同梱をしていない。

依頼された3段階の残作業はない。数学的な確認範囲と留保は [CONTENT_REVIEW.md](CONTENT_REVIEW.md) と記事の原典案内から変更していない。有限ネットワーク全辺/guard全ケースの独立再計算、低水準実装・実行可能乗算器、外部結果の全証明、HAL版と取得不能の著者サイト版のバイト同一性は未検証。公開検査の成功を全証明の独立検証とは扱わない。

将来改訂する場合は本書と台帳・内容点検記録を読み、数学的変更をAstraへ戻す。同一版のPDF/図は照合して再利用し、変更した範囲だけ必要な再検査を行う。
