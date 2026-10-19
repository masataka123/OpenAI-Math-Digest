# カタログ356 公開完了・保守引継ぎ

2026-10-19、第3段階「公開・反映確認」を完了。公開commit `1b9166a26ed02cd6d66c91f95d67d32beb55bdb6`、GitHub Actionsのbuild/deployとも成功。

- [日本語案内](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/356/)
- [English catalogue](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/356/)
- [日本語PDF・34ページ](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-356-ja.pdf)
- [English PDF・36 pages](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-356-en.pdf)
- [公開Actions](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/39182430182)

公式収録2本、日英記事・案内、9図の日英SVG/TeX、各3章9図の日英PDFを公開した。公式台帳はinventory.json、出典・引用・全結論対応・原稿はdrafts/catalog-356/、独立内容点検はreviews/。担当モデルはmodel-provenance.json。公式原典commitは1581d4cbdd69a0faf34b2089614fe2a814316a6a、September 24, 2026版。

公開10ページと38配信ファイルを照合し、全配信SVG/TeX/PDFが受領版と一致。実公開の日英6ページを375pxで確認し、数式・図数・PDF導線・言語切替・アンカー保持を確認済み。公開記録はSTAGE3_RELEASE.md、stage3/deployment-summary.json、public-check.json、public-browser.json。

第1段階の制作と内容照合はSITE_HQ_HANDOFF.stage1.md、第2段階の組込み/PDF/画面と再生成手順はSITE_HQ_HANDOFF.stage2.mdとstage2/REPORT.mdに履歴保存。

全4次展開・熱核定数・capacity/Sobolev基礎論・外部結果の証明を再帰的に独立再証明していない。AKPの取得版と原稿が引用する2026-09-24 snapshotとのファイル同一性は未確認。この留保は日英本文とPDFに保持。公開成功を数学的正しさの認証と呼ばない。

共有作業場のmainを切り替えず、356だけを専用indexからcommitした。別担当357および共有制作ルール等の差分は保持。その後の357の公開commitは別担当によるもの。将来の修正時も他担当の差分を一括追加せず、対象の原稿・図・PDF版情報を揃えて検査する。
