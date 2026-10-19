# カタログ357 表示QA（第1段階）

担当: 本部継承モデル。数学記事執筆・内容点検ではなく技術表示QA。
検査日: 2026-10-19 JST。対象は未登録原稿の静的共通レンダラープレビュー。最終検査は09:03の本文数式表示修正後。新規8条件＋見本12条件、計104枚の画面証拠を保存。

## 記事の検査結果

- 共通`syncCitations(check:true,textOnly:true)`通過。記事と案内の2レジストリ・本文/TeX引用定義6ファイル一致。
- 共通`validateGuide`と`renderDraft`を日英へ適用。主要結果2件、証明対象5件、主張欄5件、全結論の説明先11登録、外部文献5件、原典読書案内6件の形式・存在・配置を確認。
- 5図×日英の10 SVGと10 TeXを含むmanifest全29ファイルのSHA-256が一致。入力原本から生成物までの局所照合であり、公開コピー照合は第2段階。
- `connections.json`の7関係×日英14アンカーを全件確認。
- 記事は日英・1280px/375pxの4条件で5図と5主張欄を表示。MathJaxエラー0、数式表示テキストに残った未解釈TeXコマンド0、JavaScriptエラー0、未展開トークン0、ページ全体の横はみ出し0、記事内欠落アンカー0。
- 375pxでは日英とも長い表示式10件が各数式コンテナ内で横スクロールする。全10件で`overflow-x:auto`を確認。Theorem 1.1は容器296px、式幅404px（日本語）/409px（英語）。右端へ108px/113pxスクロールし、量化`(x,z∈U)`が見えることを`*.theorem-math-right.png`で確認。初期表示ですべての式が収まるとは判定していない。
- 数式DOM数は日本語172、英語167。これは処理された数式要素数であり、日英の数学的同値性は内容担当の検査範囲。
- 日英記事と案内のローカル図SVG・TeXリンク、ページ内参照94件に欠落なし。`preview-link-checks.json`へ記録。外部URLのHTTP全件到達性は検査対象外。

## 指定見本との画面比較

| 項目 | 入力/表示 | 目視証拠 | 確認 |
|---|---|---|---|
| 定理欄 | 共通article-structure / CSS | `screens/schnell.ja.375.results.png` と `screens/regular-rcd-coordinates.ja.375.results.png`、日英1280/375のresults | 同じ淡緑・左罫線・出典行。新規記事の仮定/結論/数式は欄内に収まる |
| 文献一覧 | citationsのreference-guide / 共通figure-key | `screens/orbifold.en.1280.references.png` と `screens/regular-rcd-coordinates.en.1280.references.png`、日英375のreferences | 図の前に略号・著者・正式表示名・用途・版・リンク。長い名前も折返し可 |
| 証明対象/図直後説明 | 共通proof-section / proof-explanation | 各`*.proof.png`、`figure-1`～`figure-5`の日英1280 | 証明対象と図、直後の説明の順序。10図を目視し箱・矢印・引用に重なりなし |
| 引用区別 | 自論文無略号、外部author-key | 図4の日英と文献欄 | Hat02の誌面172/PDF181を図内で表示。外部キーを前置文献欄で定義 |
| モバイル図 | 共通CSS | 日英375のproof/figure画像 | 指定見本と同じ幅内縮小。細部には図を拡大する導線が必要。実サイトの拡大UI検査は第2段階 |
| 公式順4列表 | 共通renderCatalogInventory | `screens/catalog034.*.inventory.png` と `screens/overview.*.inventory.png`、375pxのinventory-right | 日英1行・4列、公式順・版・頁数・原論文・結果・役割・記事導線を保持。375pxは表内横スクロール |

目視証拠は数値検査とは別に閲覧した。本文の数学的十分性や原典との整合性は認定していない。

## 発見し修正を確認した事項

1. `connections.json`の背景比較リンク`#main-results`は共通rendererに存在しなかった。本部が比較段落の実ID`#dependencies`へ修正し、日英アンカー存在を再確認。
2. AH18の文献名のASCII `*`がMarkdownの斜体終端と解釈され、末尾に星が残っていた。執筆担当が表示名の星をUnicode `∗`へ修正、正式titleは保持。日英のPC/375px画面で書名全体の斜体と星の表示を再確認。
3. 生成途中の一時的なdiagram SHA不一致は最終再生成後に解消。原本/生成物全29件の一致を確認。
4. overviewの一覧節に表tokenと本文段落が混在し、共通CatalogMarkdownOverviewの置換条件を満たさず生成が停止した。本部が記事導線段落とciteを導入へ移動し、一覧節をtoken単独へ変更。実レンダリングの置換条件も局所検査へ追加し、日英とも生成成功。

5. 本文の平均積分`\fint`がMathJaxで未変換のまま残り、通常のmerror検査だけでは検出できなかった。本部が日英本文を測度の逆数×積分へ同値置換。数式DOMの表示文字列にTeXコマンドが残る場合も検出する検査を追加し、該当式の`*.normalization.png`と全数式コマンド検査で解消を確認。図は変更不要。

## 残作業と限界

- 第1段階の静的表示QAは完了。新規日英記事/案内の4ページ、PC/375pxの8条件を検査。共通形式検査7項目が全て通過。
- 第2段階: Astro登録、共通publicへの図コピー、通常full `check:citations`、全体テスト、公開ルート/言語切替/図拡大の実動作、日英冊子PDF生成と紙面検査。
- 今回の言語リンクはプレビュー内だけの局所ファイルリンクであり、実サイト動作確認ではない。
- 公開・commit・pushは実施していない。

## 再現と証拠

`README.md`のコマンドを使用。`stage1-checks.json`、`screen-checks.json`、`preview-link-checks.json`、各ログ、`reference-manifest.json`、`draft-snapshot.json`、`screens/`を参照。
