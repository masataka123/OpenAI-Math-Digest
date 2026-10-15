# 第1段階の形式・表示点検

## 対象と位置付け

- 対象：285専用の日英記事・案内、TeX/SVGと引用記録。
- 共通Markdownレンダラ `src/lib/render-draft.mjs`、`article-structure.mjs`、共通CSS、公式順表 `renderCatalogInventory` を読み取り利用。共有ファイルは変更しない。
- 未登録HTMLの比較であり、サイト登録後のナビゲーション・図拡大UI・PDFの検査ではない。
- 見本：Schnellの定理欄と証明図／直後説明、033 Orbifold Iitakaの図前文献案内、034の公式順4列表。051を見本にしていない。
- 既存見本は表示のみ利用し、数学的内容・解釈・点検記録を285の制作根拠へ転用していない。

## 見本の証拠

`validation/reference-manifest.json` に、読み取った `dist/` 内の見本6ページとSHA-256を記録。今回のために共有サイトを再ビルドしていない。

- `screens/schnell.{ja,en}.{1280,375}.theorem-statement.png`：主張欄。
- `screens/schnell.{ja,en}.{1280,375}.proof-figure.png`：引用付き図と案内。
- `screens/orbifold.{ja,en}.{1280,375}.figure-key.png`：本稿内引用の説明→外部文献キー・著者・正式タイトル・用途・版・リンク。
- `screens/catalog034.{ja,en}.{1280,375}.catalog-inventory.png`：#／論文・概説／主に何を主張するか／議論の役割・概説。

## 記事受領時の確認

| 項目 | 入力元 | 表示先・検査 | 結果 |
|---|---|---|---|
| 主張・証明対象 | article.md、articleGuidesのmainResults/statements/proofTargets | 共通定理欄、proof-targetとアンカー | 3記事で生成を確認。数学的十分性は別Astraのreview記録を参照 |
| 全結論への説明先 | conclusionCoverage | 実HTMLのid存在検査 | 各記事の初回表示で全アンカー実在 |
| 図前の文献案内 | sources/citations、reference-guide | 033との配置比較 | 各記事に著者・正式名・用途・版・URLあり。末尾句点の重複は担当が修正 |
| 本稿内／外部引用 | 同じcitations.jsonからMarkdown/TeX生成 | source-line、図中リンク | 本稿内無略号、外部author-key。text-only照合と図manifestを使用 |
| 図と直後説明 | article.md、diagrams/*.tikz | 各proof節の画面 | 3+3+2種、計16枚の日英図を目視。箱・矢印・引用の重なりや欠けなし |
| 原典読書案内 | articleGuides.readingList | sources節 | 結果・ページ・読む目的の一覧と、本文の未確認範囲を表示 |
| 日英対応 | 本文、引用ID、見出し、図stem | 機械比較＋別Astra原典照合 | 最終結果はvalidation/stage1.json、review記録に集約 |

## 発見した表示上の修正

1. injectivityのHeisenberg座標積の長いinline数式で、375px時に日英とも17pxのページ横はみ出しを検出。著者がalignedの独立数式へ移動。共通CSSを変更せず解消を再確認した（日英ともdocumentWidth=375）。
2. guideRole末尾句点と共通生成の句点が重なったため、3担当が記録値から末尾句点を除き再生成。共有生成コードは変更しない。
3. 内容点検で修正したirrational-traceのmain図を最終TeX/SVGから日英とも再描画して目視。同距離・根の条件を含め、箱・引用・矢印の重なりや欠けなし。

## 最終検査

2026-10-15、本部が日英記事6ページ＋案内2ページを共通レンダラで出力し、1280px/375pxの16表示条件を検査。Schnell・Orbifold Iitaka・034の日英12表示条件も同じブラウザーで比較した。

- `validation/stage1.json`：69項目成功。公式順・原典ハッシュ/頁数・日英引用/節構成・全16図のmanifest・ローカルファイル/アンカーを検査。
- `validation/browser.json`：285の全16表示条件でページ横はみ出し0、MathJaxエラー0、欠落アンカー0、重複ID0、未読込画像0、ブラウザー例外0。案内の表は公式順3行で、375pxでは表内を横スクロールする共通形式。
- `validation/citations.txt`：4引用レジストリ、生成対象14ファイルのtext-only照合成功。
- 16図（3＋3＋2種の日英）の全体を目視。修正後の無理数trace main図も日英再確認。
- 最終案内は `screens/overview.ja.1280.papers.png`、`overview.en.375.assembly.png`、`overview.en.1280.connections.png`、`overview.ja.375.top.png` 等を目視。034と同じ4列表・原典別リンク・正式タイトル・主結果・役割を表示。長い英語正式名は折り返される。案内の総括図省略理由はoverview/statusとreview-overviewに記録。
- Schnellの主張欄→図→直後説明、033の文献キー・版・用途、034の4列表と配置を比較。新規author-key表示を用い、旧見本の引用表記は複製しない。共通表が要求するdisplayNameは正式タイトルを保持している。

上記は未登録HTMLでの比較であり、統合UI・実公開ルート・冊子の検査ではない。

## 第2段階に残す事項

- 公開用publicコピーを含む完全なcheck:citations。
- サイト登録後の全体テスト・ビルド・内部リンク・ページ導線。
- 図の拡大／引用操作、言語切替でのアンカー保持、スクロール中のUI。
- 日英冊子PDF生成、本文・図・引用・章数の一致、全紙面の視認検査。
- 登録後の033・034との実画面比較と公開URLでの確認。

第1段階の数値検査のみで「サイト全体の形式統一済み」「公開準備完了」と扱わない。
