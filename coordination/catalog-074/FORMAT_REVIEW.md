# 074 第1段階の形式・表示点検

- 対象：制作セット1.4と現行補足。担当：本部。日時：2026-10-16 JST。
- 確認用HTMLは`preview/`、指定見本は`reference-preview/`へ隔離生成した。共通のrenderDraft / renderCatalogInventory / articleStructure / CSSを読み取り利用。サイト登録・publicへのコピー・通常サイトのビルドはしていない。
- 見本は既存`dist/`の034・Schnell・033 Orbifold Iitakaを読み取り、CSSを埋め込んでMathJaxで表示した。読み取り基盤のハッシュは`reference-manifest.json`、比較用画面は`reference-screens/`。既存の数学的解釈を新記事の根拠には使用していない。

## 4項目の受領状況

| 項目 | 入力元／表示先 | 自動検査 | 目視証拠・未実施 |
|---|---|---|---|
| 公式順の共通4列表 | inventory + overview/presentation → renderCatalogInventory | `validate-stage1.mjs`、`preview-checks.json` | 034と074のpapers画面を日英PC/375pxで比較。表内スクロール方式・本文/見出しの共通書体を使用。実サイトへの組込み後の再検査は第2段階 |
| 図前の文献案内 | 各記事citations.articleGuides → reference-guide | registry指定text-only検査 | Orbifold Iitakaの文献案内と比較。キー・著者・正式題名・用途・版・リンクを点検。最終記事の画面証拠は下記追記 |
| 本稿内／外部引用区別 | sources/citations → 本文とTeX | text-only＋図生成manifestのSHA-256 | 新記事はauthor-key、Schnell/033の既存表示は変更しない。新記事の引用URLをTeX/SVGへ共通生成 |
| 証明対象・原典案内 | proofTargets/mainResults/statements/conclusionCoverage/readingList | guide検査＋生成HTMLのanchor照合 | Schnellの主要結果→図→直後説明を比較。原典に照らす内容点検は独立レビュー記録へ分離 |

## 総括の表示点検

日英1280px/375pxでページ横はみ出し・MathJaxエラーなし。375pxでは共通表の横スクロール内に列を保持する。総括図の初回画像で、resultスタイルの幅継承による箱の重なりと英語注記の余白不足を発見。半幅箱を保持し、各行間を広げて原本から再生成した。図中の矢印は注記と別の左側余白へ置いた。

`reference-screens/catalog-034.ja.html.375.catalog-inventory.png`と`screenshots/overview.ja.html.375.papers.png`を比較し、表の論文名・版・頁・原典導線・横スクロールの構成を確認。カタログを新しいCSSで独自表示していない。

## 検査の限界

これは第1段階の隔離プレビューである。公開用コピーを含む完全な`check:citations`、サイト全体のビルド・内部リンク、実サイトの言語切替・図拡大、日英冊子PDF、公開反映確認は第2・第3段階へ残す。プレビューのHTML生成成功だけを「形式統一済み」「公開準備完了」と扱わない。

## 最終受領と画面証拠

- 本部が全7図×日英の14図を画像で目視。証拠はfigure-review/、対応はfigure-review-manifest.json。箱・矢印・役割ラベル・引用の重なり、文字欠けは最終版で見つからなかった。4Dの局所時間条件h∼a^kの最終追加後にプレビューを再生成し、該当日英図を再確認した。
- screen-checks.json：2記事＋案内×日英×1280/375pxの12条件、ページ幅の超過なし、MathJaxエラー0、右上言語表示あり。全条件の画面はscreenshots/。これは言語切替の実サイト動作試験ではない。
- 代表比較：034日英の4列表と074案内／Schnell日本語PCのresultsと3D日本語PCのresults／033 Orbifold Iitaka英語PCのdiagram-sourcesと4D英語PCのdiagram-sources。共通表・定理カード・出典行・文献案内・書体を比較。4D日本語375pxのproof-1でTheorem 2.17の主張カードが図より前にあることも目視した。指定見本の画面はreference-screens/。
- モバイルでは図全体を縮小表示する共通方式。図の読解には拡大を前提とする。図拡大操作、スクロール中の言語切替・アンカー維持の実サイト検査は第2段階。
- validation.json：対象3registryの本文／TeX引用同期、図manifest hash、原典hash、日英表示数式3D17組・4D11組、公式順表を確認。日英の意味・仮定・節構成・未確認範囲は独立内容点検でも照合。
- preview-checks.json：6ページのMathJax・必要アンカー・図数は適合。preview-links.json：ローカルファイル・アンカー・SVG内部参照10,463件、欠落0（多くはMathJaxの字形参照であり、論文への引用10,463件を意味しない）。外部URLの全HTTP検査ではない。
- shared-render-tests.log：render-draft、citations、formatの既存テスト19件成功。全体のnpm test/build/check:linksの代用とはしない。
- 第1段階の形式受領は完了。完全なcheck:citationsは公開用コピー未作成のため完了していない。日英冊子PDFと公開後画面は未生成・未点検。

## 第2段階での更新

2026-10-16、本部が実サイトの共通表示と日英冊子PDFへ組み込み、上記の第2段階保留を点検した。日英PC/375pxの12条件と指定見本12条件、図28操作、PDF全62頁・全14図を確認。完全な引用検査、全体テスト・ビルド・PDF整合性も成功。内部参照は同一判定の読込キャッシュ版で検査済み。詳細・限界はstage2/REVIEW.md。公開後の反映確認は第3段階。

PDF図内リンクは共通出力だけでは注釈が欠けたため、074専用後処理で各言語40か所を追加し、実座標・全ページ画素一致・最終hashを確認した。紙面や原稿の変更はない。詳細はstage2/REVIEW.md。
