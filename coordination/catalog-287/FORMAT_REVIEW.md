# カタログ287 — 形式・表示点検

対象は第1段階の隔離プレビューである。サイト登録、冊子PDF、公開サイトの検査とは区別する。数学的内容点検はAstra担当の`CONTENT_REVIEW.md`を参照する。

## 指定見本と表示方法

- Schnell：`dist/{ja,en}/papers/schnell-fiber-spaces/index.html`。主張欄、証明図、直後の段階説明、独立出典行。
- Orbifold Iitaka：`dist/{ja,en}/papers/orbifold-logarithmic-iitaka/index.html`。図前の文献一覧、用途・版・原典案内。
- カタログ034：`dist/{ja,en}/catalog/034/index.html`。公式順の4列表、論文名から概説、原典への別導線、主張と役割の粒度。
- 051を見本に使用していない。数学の制作根拠には見本の記事内容を用いず、共通表示と指定された構成のみ参照した。

`build-preview.mjs`は共通`renderDraft`・`renderCatalogInventory`を読み取り利用し、当該フォルダだけにHTMLを出力する。見本は作業先の既存`dist/`を読み取り使用し、現在の共通CSSを適用した比較専用表示。出典ファイルとSHA-256は`validation/reference-manifest.json`に記録する。Astroビルド・サイト組込みは行わない。

`capture-preview.mjs`は独立ヘッドレスChromeで日英・1280px／375pxを記録する。数式はローカルの既存MathJaxで描画する。スクリーンショットは`screens/`、寸法・数式エラー・アンカー・文字サイズ等は`validation/screen-checks.json`へ保存する。見本自身の旧引用や不足は287へ転記しない。

## 第1段階と後続段階の境界

`check:citations`相当の共通スクリプトを対象レジストリ指定・`--text-only`で実行し、図の生成元とTeX/SVGのハッシュは`validate-stage1.mjs`で別途照合する。通常の全文検査が要求する`public/`コピーは第2段階なので、未実施を明示する。数値検査だけで形式統一済みとは扱わず、下記の画面点検を併用する。

第2段階では本番ルートへの登録後、日英切替・図拡大・リンク・全体ビルドと既存記事の保全・日英冊子PDF紙面を改めて確認する。隔離プレビューの言語リンクや画像資産リンクの変換は検査用であり、原稿や本番登録を変更していない。

## 最終結果（2026-10-15）

| 要件 | 入力元・表示先 | 機械検査 | 目視証拠・結果 | 後続 |
|---|---|---|---|---|
| 公式順4列表 | inventory.json、overview/presentation.json → 共通renderCatalogInventory | 1行・4列・公式順一致、一覧節は独立tokenのみ | overviewとcatalog034のinventory画像。タイトル20px・本文16px・原典別リンク・役割の表示を比較 | 本番登録・冊子紙面 |
| 図前文献一覧 | 記事citations.json/articleGuides → reference-guide | 外部7キー、用途・著者・正式題・版、図前配置 | 記事references画像とOrbifold見本。長い著者名・題名は375pxでも折返し。BEHY題の星とMarkdownの干渉を対象データで修正 | 本番・冊子 |
| 本稿内／外部引用 | 共通citations記録 → 本文・TeX | 記事4ファイル＋案内2ファイルのtext-only検査、図manifest24ファイルのSHA一致 | 図の無略号引用、著者キー、誌面／PDF位置と専用余白を確認。Schnellの旧略記はコピーせず1.4書式 | publicコピー検査、冊子 |
| 主張・証明対象・読書案内 | 4主結果、4証明節、7結論coverage → 共通renderDraft | 全主張・結論説明アンカー存在、日英節ID一致、引用ID列一致 | Schnellと定理欄→図→直後説明の構成を比較。8図を本部窓口とAstraが目視 | 本番・冊子 |

- 記事・案内 × 日英 × 1280px/375px＝8表示条件。いずれもページ幅はviewportと一致、MathJaxエラー0、ページ例外0、欠落ローカルアンカー0、未展開token0。本文16px、引用行14px。表は375pxでは共通の内部横スクロール領域を使う。
- 比較見本も3種×日英×2幅＝12条件を保存。比較用の既存distは公開サイトの最新取得ではなく、`reference-manifest.json`で固定したローカル参照物である。
- 日英の独立表示数式17個は、空白と末尾句読点を除いて一致。全数式の文字列数は日本語178／英語176であり、inline変数・「n=2,3」と個別記載・infinityという語などの表記差をAstraが自己点検した。文字列数の同一性を数学的対応の代用にしていない。
- 全8 SVGは欠け・箱と矢印/引用の重なりなし。日本語図は日本語説明。entropy図は2つの生成組へ独立に分岐し、結論へ合流する。
- 発見・修正：英語外部入力節の見出しを既存判定に対応させ日英`dependencies`を統一。案内リンクを共通レンダラーが変換するMarkdown相対形に修正。一覧tokenを独立節にし、採否理由を読者本文から制作記録へ移した。
- 検査用HTMLの置換で`$$`が`$`になる不具合、および図撮影時の固定ヘッダー重なりは**検査スクリプト側**で修正し、最終画面を再取得した。共通表示や数学原稿へ回避用CSSは追加していない。

証拠：`validation/stage1-validation.json`、`validation/overview-citations-check.log`、`validation/screen-checks.json`、`screens/`。全サイトのnpm test/build/check:links、public資産コピーを含む通常check:citations、PDF検査、公開検査は未実施。第1段階の形式要件を満たすが、公開準備完了ではない。

最終ローカルリンク検査では、案内から記事・該当節への8リンク、記事からSVG/TeXへの16リンク（合計24）の参照ファイル存在を確認した。検査用パスの置換が絶対パス内のリポジトリ名まで置換する不具合を属性先頭のみに限定して修正。原稿の本番リンクには変更なし。証拠は`validation/preview-local-links.json`。原典への外部リンクは取得・照合したURLを記録するが、全外部サイトの将来可用性を保証しない。
