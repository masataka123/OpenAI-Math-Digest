# 087 形式点検と指定見本の比較

## 比較条件

共通の `renderDraft` / `articleStructure` / `renderCatalogInventory` と現行CSSを読み取り、087専用の隔離プレビューを作成する。サイトのルート・台帳・publicは変更しない。プレビューは第1段階の原稿確認用であり、第2段階の統合サイト検査を代替しない。

指定見本は既存distのSchnell、Orbifold Iitaka、034。参照HTMLのハッシュはpreview-build.jsonに記録。051は用いない。共通処理や指定見本の利用であり、既存Sol制作の数学的原稿・解釈・点検結果の再利用ではない。

2026-10-15：見本3ページ×日英×1280/375pxをChromeで撮影。screens/reference-*とscreen-checks.json。初回計測は全12条件でページ横はみ出し・MathJaxエラーなし。日本語PCのSchnell証明、Orbifold文献一覧、034スマホの表を画像確認。Schnellは図と直後の段階説明、Orbifoldは図前の著者・正式名・用途・版、034は4列表の横スクロールを基準とする。旧見本の引用省略表記は新規図へ移さない。

## 087完成後に記録する項目

- 共通4列表の公式順3行、正式タイトル・主張・役割・記事導線。
- 全記事の主張→引用付き図→直後の説明、図前文献案内。
- 原典読書案内と確認済み／未確認の区別。
- 日英・PC・375pxの数式、図、長い引用、横幅、アンカー。
- 対象限定citation検査、図原本／生成物のhash一致。

第1段階では冊子PDF、公開コピー整合、統合ルート、図拡大UI、言語切替アンカーの統合検査は未実施。これらは第2段階へ引き継ぐ。

## 途中検査と修正

- general-mahler：結論対応に記されたproof-1-step-4/5が生成HTMLに存在しないことを検出。Astra執筆担当が日英へ明示アンカーgeneral-bound/general-equalityを追加し、対応記録を修正した。
- 一般版の初回375pxはみ出しは、本部の隔離プレビューに本番CatalogDraftArticleのdraft-body囲みが欠け、既存の長式スクロール・code折返しCSSが適用されなかったため。共通ファイルを変更せず、プレビュー側の構造を訂正した。40文字commitの表示は短縮版とし、完全固定URLとsources.jsonの識別子を保持。
- 訂正後general-mahler・symplectic-polar-productsは各日英1280/375px、合計8条件でページ横はみ出し0、MathJaxエラー0、図領域はみ出し0、ページ内hashリンク切れ0。
- 画像確認：generalの日本語PC主定理概略図、英語375px文献一覧、日本語375px主張欄；symplecticの日本語PC主定理図・英語375px設定と主張。図前の引用一覧・番号とリンク・主張→図の順が見本に対応し、内容の長い式は共通スクロール領域で扱う。
- スクリーンショットはscroll-behaviorのアニメーション完了前を避け、instant scrollで記録するよう撮影スクリプトを修正済み。

上記は対象原稿の途中検査であり、最終スナップショットは後段の記録とvalidation.jsonを参照する。

## 第1段階の最終表示確認

2026-10-15、087の4ページ（日英計8原稿）×1280px/375px＝16条件と、見本3ページ×日英×2幅＝12条件を撮影。screen-checks.jsonには合計28条件を記録。全条件でページ横はみ出し・MathJaxエラー・ページ内hashリンク切れは0。087の図領域はみ出しも0。図はスマホでは全体表示、詳細はSVG原本の拡大を使う構成で、サイト共通の図拡大UI検査は次段階へ残す。

| 必須項目 | 入力元・表示先 | 自動検査 | 目視証拠と結果 | 未実施 |
|---|---|---|---|---|
| 公式順4列表 | inventory / overview presentation → 共通renderCatalogInventory | 3行の順・必須項目、120内部リンク | catalog-087.ja.1280.table、日英375px tableを034の4列と比較。正式名、短名、主張、役割・原典・記事導線あり | 統合ルート・PDF |
| 図前文献案内 | 各sources/citations → generated reference-guide | 4レジストリtext-only、未定義引用なし | 各記事references画像をOrbifold Iitakaと比較。著者・正式名・用途・版・リンクあり。旧省略キーをコピーせずauthor-key | PDF |
| 主張と証明対象 | mainResults / statements / proofTargets / conclusionCoverage → theorem/proof sections | 全アンカー・日英節ID/引用順、図manifest | Schnellと主張欄→図→直後の説明を比較。各担当が全30記事図をPNG確認、本部は各記事のPC図・スマホ主張と文献を確認 | 統合図拡大UI・PDF |
| 原典読書案内 | readingList → sources section | 必須マーカー生成、引用・リンク | 番号・ページ・読む目的と未検証範囲を保持。内容はAstra交差点検 | 公開ページ |
| 総括図 | overviewの共通引用とTikZ → 日英2図 | 9ファイル生成manifest | relations.ja/en.pngの全体を画像確認。合流の矢印、条件の比較、非依存の注記に重なりなし | PDF |

カタログ表の数式はMathJaxとして描画するよう原稿データを整え、正式長名と短名の重複を削減した。これは原稿データの編集であり、共通CSS・サイト台帳の変更はない。

今回の結論は「第1段階の原稿プレビューで比較済み」。サイト統合済み・全表示機能確認済み・PDF一致・公開準備完了とはしない。公開コピーを要求する完全なcheck:citations、npm test/build/check:links、日英PDF/check:pdfは第2段階へ残す。対象限定text-only検査と図manifest検査の結果はvalidation.jsonに記録する。
