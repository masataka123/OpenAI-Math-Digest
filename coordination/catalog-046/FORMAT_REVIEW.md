# 046 形式・表示の点検

本部による第1段階の点検。実サイト組込み・冊子PDF・公開画面の点検ではない。共通CSSと`renderDraft`、`renderCatalogInventory`を読み込んだ独立HTMLを046専用ディレクトリへ作り、登録済みサイト・共通ファイル・distを変更せずに比較する。

## 指定見本

- カタログ：既存distの日英034 `#manuscripts`（公式順共通4列）。
- 記事骨格：既存distの日英Schnell `#results`、`#argument`。
- 文献案内：既存distの日英033 Orbifold Iitaka `#diagram-sources`、`#proof-1`。
- 051は見本として使用していない。
- 見本をローカル再表示する際は既存CSS・HTMLを読み、MathJaxを静的SVG化。ページの版は既存distのスナップショットで、公開サイトの最新反映を確認したという意味ではない。

## 必須形式と証拠

|項目|入力・表示|確認方法・状況|未実施|
|---|---|---|---|
|公式順共通4列表|inventory.json＋overview/presentation.json、CATALOGINVENTORYTOKEN|共通renderCatalogInventoryを実行。2本の順序・正式題名・版・41/26頁・主張・役割・記事導線を確認。034の4列とPC/375pxで比較|登録済みサイト上での導線|
|図前の文献案内|各記事citations.jsonのarticleGuidesとsources.json|共通生成。Orbifold Iitakaと同じfigure-key表示、著者・正式タイトル・使用内容・版・リンクを確認|冊子紙面|
|本稿内／外部引用|cite markersとCiteマクロ|本稿内は無略号、外部はauthor-key。結果・誌面/PDF位置を共通記録から生成。長いSGA1引用も図内で読める|公開用コピーの一致|
|証明対象と主張|proofTargets/statements/mainResults/conclusionCoverage|定理カード、独立命題の図前主張、主張参照、図直後の説明を点検。Schnellの図と直後説明の配置を参照し、現行主張要件を優先|冊子紙面|
|原典読書案内|readingListと末尾確認範囲|結果・ページ・読む目的、未検証範囲を末尾に表示|実サイトアンカー|
|日英整合|共通引用・図原本、日英本文|節数・図順・引用ID順・証明対象・display数式・原典へのアンカーをローカル検査。翻訳の単語順の差は数学的相違としない|公開言語切替のルーティング|

## 画面点検

生成コマンド：

```sh
export PATH=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH
node coordination/catalog-046/build-preview.mjs
node coordination/catalog-046/make-reference-preview.mjs
node coordination/catalog-046/check-preview.mjs
node coordination/catalog-046/check-stage1.mjs
```

`check-preview.mjs`はローカルChrome headlessを使うため、環境によってsandbox外の実行許可が必要。実行結果はscreen-checks.json、画像はscreenshots/に保存する。画像を作っただけで目視確認済みにはしない。

本部目視の記録：

- 案内の日英比較図：2本の独立経路が合流する構成、引用、矢印の専用余白を確認。日本語左上に「X̃₄に」を補い、compact analytic subvarietyがない場所を明確化した。
- 案内のPC共通表と375px表：034と同じ4列・横スクロール。ページ全体の横はみ出しではない。
- 曲面記事：日英全5図を点検。全体図の分岐矢印と説明文の交差を発見して担当へ返却。他4組は引用・文字・箱の重なりなし。修正後のqa/overview.ja.pngとqa/overview.en.pngを本部が再確認し、矢印と説明の重なりが解消した。
- 曲面記事：日本語375px主定理、英語PC Lemma 6.1の主張→図、日本語PC・英語375px文献一覧を目視。長い数式は共通の横スクロール領域で保持する。
- 見本：034日本語PC・英語375px表、Orbifold Iitaka日本語PC文献案内、Schnell英語PC・日本語375px証明図、034英語PC・日本語375px表、Orbifold Iitaka英語375px文献案内も目視比較。共通表示を保ち、古い略号の表示形式は新規記事にコピーしない。

## 第2段階に残すもの

- 通常のサイト登録後の`npm test`、build、check:links、公開コピー込みcheck:citations。
- 実サイト構成での全体表示・図拡大UI、言語切替のアンカー維持、分野一覧・PDF導線、案内役、公開ヘッダー。
- 日英冊子PDF、pdf-editions、全紙面の目視、リンク検査。
- 公開・Actions・反映確認は第3段階。

## 最終結果

- 第1段階の形式検査は合格。2記事＋案内、計6ページ、TeX図10組（日英20点）。
- `stage1-checks.json`：原稿ハッシュ・公式順表・3件の引用台帳と必須guide・図manifest・日英構成/表示数式・内部参照の全12検査に失敗なし。参照数にはSVG字形の内部fragmentも含む。
- `screen-checks.json`：日英6ページ×1280/375pxの12条件でMathJaxエラー0、ページ全体の横はみ出し0、スクロール後も言語切替は表示域内。
- 本部は四次元記事の全4図×日英を目視。正次元限定を確認し、英語矢印の改行調整後の最終図も再確認。日本語375pxのTheorem 6.1主張→図、英語375pxのProposition 2.1主張→図、英語PC主定理、日本語PC文献案内を確認。
- 375pxで案内表と外部入力表の右端まで横スクロールできることを画面で確認。長い式・表の表示域とページ全体を区別した。
- 曲面記事の修正後の全体図、四次元記事の英語改行調整は最終HTML・画像に反映。その他の既確認図の内容変更はなし。
- 画面目視と原典に対する内容点検は別記録。全証明の独立検証・冊子紙面確認・公開準備完了を意味しない。
