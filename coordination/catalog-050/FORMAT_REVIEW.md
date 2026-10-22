# カタログ050 第1段階の形式受領

2026-10-22、本部root。制作セット1.4とモデル運用2026-10-20を適用。数学的点検・修正はCONTENT_REVIEW.md、担当指定と取得できた実行情報の限界はMODEL_PROVENANCE.json。第1段階の内容編集と形式受領を完了し、第2段階待ちとする。公開準備完了ではない。

| 必須項目 | 入力元・表示先 | 第1段階の検査と目視証拠 | 第2段階へ残す項目 |
|---|---|---|---|
| 公式順共通4列表 | inventory.json、overview/presentation.json、CATALOGINVENTORYTOKEN → 共通renderCatalogInventory | 公式順・正式題名・原稿版・原典リンクと記事導線を確認。日英の4列表を034と比較。validation/comparisons/table-{ja,en}.png。claimの生数式をAstraへ返し、修正後を日英PC/375pxで再検査 | サイト台帳への登録、公開経路、生成済みPDF導線 |
| 図前の文献案内 | sources.json、citations.json/articleGuides → reference-guide | 著者・正式タイトル・用途・版・リンクを共通生成。本文中の自論文引用規約に続き外部キーを定義し、最初の図の前に配置。033 Orbifold Iitakaと比較。validation/comparisons/references-ja.png、screens/の日英・狭幅references | 組込み後の表示・配信、冊子PDF |
| 本稿内／外部引用の区別 | 担当別citations.json → 本文とTeX | 自論文は無略号、外部はauthor-key。両registryの共通text-only検査成功。図の原本・生成物の同一性、XMLと原典リンクを検査。全図を画像で目視。validation/technical-check.json・citations-text-only.log・figures/images.json | publicコピーを含む完全check:citations、公開経路とPDFの引用 |
| 主張・証明対象・原典読書案内 | mainResults / proofTargets / statements / conclusionCoverage / readingList → 共通renderDraft | 主定理と独立証明節の主張欄→対象→図→直後の文章を確認。生成したアンカーに欠落なし。Schnellと主張欄を比較、末尾の原典読書案内・確認範囲を確認。validation/comparisons/statement-en.png、screens/、担当author-validation.json | 実サイトでの図拡大・言語切替・配信、PDFへの反映 |

## 画面・図の目視結果

共通renderDraft/renderCatalogInventoryと現在の共通CSSを読み、validation/preview/以下に確認用HTMLだけを生成した。見本は既存distの034、Schnell、033 Orbifold Iitaka。参照版とCSSはvalidation/reference-manifest.json、今回の数学的内容版はvalidation/draft-snapshot.json、事務追記との区別はvalidation/post-review-identity.jsonを参照する。数値・ハッシュを本書へ転記しない。

PC幅と375px幅で日英の記事・案内を目視し、ページ全体の横はみ出し、MathJaxエラー、未展開トークン、内部アンカー欠落はなかった。本文と補足は見本と同じ共通書体・サイズ。長い数式と表はその領域内の横スクロールに収まり、表の右端へ移動できる。全TeX/SVGの箱・見出し・矢印・使用内容・引用は分離され、文字の欠けや重なりを認めなかった。全図の単体画像はvalidation/figures/、日英対照はvalidation/comparisons/figures-*.png。数学的な表示の正確さはAstraのCONTENT_REVIEWを受領した。

初回カタログ表のclaimでは下線・冪の記号が生表示だったためAstraへ返し、MathJax区切り追加後の日英案内だけ再撮影した。最終の案内結果はvalidation/overview-screen-checks-final.json、統合した観測結果はscreen-checks.json。本文・図の内容と生成物は変更されず、同一版の画像確認を参照した。日本語カタログ見出しの語中分割はサイト登録時に改行を調整する残作業として引き継ぐ。

## 構成の採否

単論文の短い入口と公式順共通表を用いた。主要接続をまとめると構成から代数側・解析側への分岐と結論への合流があり、個別記事の主定理図がこれを表示する。カタログで同じ図や証明説明を複製しない判断をAstraがconnections.jsonへ記録し、別担当が点検した。分類、論文間の空表、選択UIは設けない。外部直接入力の詳細は記事と接続記録へ集約し、未調査の他反例比較を依存なしに置き換えない。

## 確認の限界と次の段階

この確認用表示はサイト登録ではない。MathJaxは同梱ローカル版を用い、実サイトのCDN通信、配信・ルーティング、図拡大操作や言語切替の実経路、冊子PDFを点検したことにはしない。src/、public/、共通設定、PDF版情報は更新していない。

第2段階で登録・図配置の後に共通catalog:prepareを実行し、完全な引用検査・テスト・ビルド・リンク・日英PDF・実サイト相当のPC/375pxと見本比較を確認する。実行別HANDOFF/reportとREVIEW_ENTRYからPREPARATION_REVIEWへ今回版の目視判断を残す。過去の画面を新版に自動承継しない。内容点検・本引継ぎの同一版を再利用し、数学的変更のみAstraへ返す。
