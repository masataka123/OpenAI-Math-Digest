# カタログ087 第1段階の引渡し

第1段階「記事制作・内容点検・カタログ案内」を完了し、ここで停止する。公開準備完了ではない。

## 公式対象

正式見出しは **The Mahler conjectures and symplectic width**。公式固定版 `1581d4cbdd69a0faf34b2089614fe2a814316a6a`、概要版October 6, 2026、PDF p.10。分野は公式目次4番目の **Convex and metric geometry**（内部ID subject8、087–101）。詳細は[inventory.json](inventory.json)。

| 公式順 | 論文ID・原稿 | 原典頁数 | 初稿時間 |
|---|---|---|---|
| 1 | [symmetric-mahler 日本語](../../drafts/catalog-087/symmetric-mahler/article.ja.md) / [English](../../drafts/catalog-087/symmetric-mahler/article.en.md) | 26 | 20分27秒 |
| 2 | [general-mahler 日本語](../../drafts/catalog-087/general-mahler/article.ja.md) / [English](../../drafts/catalog-087/general-mahler/article.en.md) | 72 | 16分01秒 |
| 3 | [symplectic-polar-products 日本語](../../drafts/catalog-087/symplectic-polar-products/article.ja.md) / [English](../../drafts/catalog-087/symplectic-polar-products/article.en.md) | 19 | 約16分 |

3本ともOpenAI、September 22, 2026版。本文・点検担当にgpt-6-astraを明示指定し、既存Solの原稿・図・解釈・点検結果を制作根拠に使っていない。[モデル・担当記録](model-provenance.json)。

## 保存成果物

- [日英カタログ案内](../../drafts/catalog-087/overview/)：公式順3行の共通表、総括図、結果単位の関係・案内。分類固定なし。図の採否は[構成記録](CATALOG_STRUCTURE.md)。
- 各記事とoverviewのdiagrams/：16種×日英＝32枚のSVGと対応TeX、TikZ原本、引用マクロ、生成manifest、確認用PNG。
- 各記事のsources.json / citations.json：原典の版・URL・ページ対応・SHA、読み取った箇所、直接入力、日英本文とTeXの共通引用。
- [内容点検](CONTENT_REVIEW.md)と[個別4件の点検記録](reviews/)：執筆者と別のAstraが原典・接続を照合。一般版G1と対称版S1を補足し、再照合で解決。未解決の原稿修正要求なし。
- [形式・見本比較](FORMAT_REVIEW.md)、[機械検査](validation.json)、[表示検査](screen-checks.json)、[内部リンク](preview-links.json)。

## 検査結果

4引用レジストリの対象限定text-only検査、96個の図関連ファイルの生成hash、日英節・引用順・結論アンカー、公式順3行、内部120参照が成功。087の8ページ×PC/375px＝16条件と、Schnell・Orbifold Iitaka・034の12条件を比較。ページ横はみ出し・MathJaxエラー・ページ内リンク切れ0。図も担当全数と本部の比較箇所で画像確認。

これは隔離原稿プレビューの結果。publicコピーを含む完全なcheck:citations、統合サイトのtest/build/links、図拡大UI、日英冊子PDFとcheck:pdf、公開検査は第2・第3段階に残る。

## 残る数学的未確認

3本の全証明の独立再構成・全解析評価、一般版Appendix A/Bの全有理証明書・補間・尾部評価の再実行、外部定理の全証明・再帰的依存の検証は未実施。これらを本文・点検記録に明記している。専門家査読や数学的正しさの認定とはしない。

## Git・変更範囲・再開

作業先 `/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、ブランチ **main**、開始・終了HEAD `5042e9f0dcf62a6c2e23a8660644038de377a287`。本制作の変更先は `drafts/catalog-087/` と `coordination/catalog-087/` のみ。[全ファイル一覧](changed-files.txt)と[成果物hash](delivery-manifest.json)を参照。他担当の変更は保持。終盤にsite.mjsの159登録とpdf-editionsの並行変更を検出したが、本制作はそれらを書き換えていない。

**サイト組込み・日英冊子PDF生成・commit・push・公開は未実施。** 次は[SITE_HQ_HANDOFF.md](SITE_HQ_HANDOFF.md)と[RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md)から第2段階を再開する。完成した記事を読解からやり直さず、現在のJSONを正本として登録・図の配置・4章構成の日英冊子・統合検査を行う。第2段階の後も公開前に停止する。
