# 033 改訂版の公開記録 — 2026-10-11

**公開確認済み。** 2026-10-11 18:31:53 JSTに公開資産と実画面の確認を完了した。17:45:51 JSTの開始から約46.0分（原典と内容編集は約31分、以後はPDF・検査・配信待ち・公開確認）。

- 公開commit：`1af2f5da6aebe094596a2e9cc6d3b0e561b82022`。
- [GitHub Actions run 38128390103](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/38128390103)：build・deployともsuccess。build完了18:29:32 JST、deploy完了18:29:46 JST。
- CI上でnpm ci、36テスト、引用、ビルド、内部リンク、PDFの検査が成功。[配信証拠](validation-20261011/github-actions.json)。
- 公開日英12ページ、033の52 SVG＋52 TeX（非表示にした旧総括図も含む）、日英PDFの計118資産：全件HTTP 200、公開用snapshotとのSHA-256が全件一致。[公開資産照合](validation-20261011/live-resources.json)。
- 実際のCDNを使う公開ページ5表示でMathJaxが読み込まれ、数式エラー・JavaScriptエラー・ページ全体の横はみ出しなし。JA/EN案内・Orbifold Iitaka・B-semiamplenessをPC／375pxで確認。[実画面記録](validation-20261011/live-browser.json)。全12ページ×2幅の検査は公開前に実施済み。
- 作業開始時からある他担当13ファイルと他カタログ994ファイルを再照合し、変更なし。今回のコード・原稿・PDFのコミットへ含めていない。公開後の本記録だけを別の`[skip ci]`コミットで保存する。

## 公開URL

| 言語 | 案内・公式順の記事一覧 | 改訂PDF |
|---|---|---|
| 日本語 | [033案内](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/033/) | [日本語版・93ページ](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-033-ja.pdf) |
| English | [Catalogue 033](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/033/) | [English edition · 106 pages](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-033-en.pdf) |

両冊とも案内＋5篇の6章、証明図22点。PDF版情報と公開PDFのhashは一致する。

| 公式順・論文 | 改訂記事 | 主な追加主張 |
|---|---|---|
| 01 Orbifold and logarithmic Iitaka subadditivity | [日本語](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/orbifold-logarithmic-iitaka/) / [English](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/orbifold-logarithmic-iitaka/) | Proposition 3.4の全仮定・結論 |
| 02 Logarithmic Kodaira dimension and whole-fiber variation | [日本語](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/whole-fiber-variation/) / [English](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/whole-fiber-variation/) | Proposition 2.10、Theorem 4.1、Propositions 4.10・7.3 |
| 03 The reverse logarithmic Kodaira inequality and additivity | [日本語](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/reverse-logarithmic-additivity/) / [English](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/reverse-logarithmic-additivity/) | Propositions 7.7・7.2 |
| 04 Projective Hodge lines and ordinary Iitaka subadditivity | [日本語](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/projective-hodge-lines/) / [English](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/projective-hodge-lines/) | Proposition 6.4と必要なTheorem 6.1のデータ |
| 05 B-semiampleness for compact log-smooth Kähler fibrations | [日本語](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/kahler-b-semiampleness/) / [English](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/kahler-b-semiampleness/) | Propositions 5.6・6.1・7.5 |

案内は固定3分類と重複図を廃し、公式順4列表と用途別の接続表・文章へ整理した。既存の全体図・直接入力記録・旧アンカー・原典版は保持した。

## 確認の限界

今回の主張・結論・使用箇所の限定照合と、既存接続の確認記録の継承である。原典の全証明・外部文献の証明を独立再検証したとはしない。OIのrank loss／安定族／全付値比較、WVのL²評価／外部降下原典、RAの表現と境界、PHの多変数延長／後半別証明、BSのparameter空間／偏極変更／外部コンパクト化について既存の未確認が残る。未調査の辺を依存なしとしない。

詳細は [改訂記録](REVISION_20261011.md) と [公開チェックリスト](RELEASE_CHECKLIST.md)。
