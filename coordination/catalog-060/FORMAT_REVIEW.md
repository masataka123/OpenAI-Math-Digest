# 060 第1段階の形式受領

制作セット1.4・2026-10-20モデル運用を適用。本部rootは形式と画像を確認し、数学的内容は別Astraのreviews/CONTENT_REVIEW.mdを受領する。担当と指定根拠はMODEL_PROVENANCE.json。第2段階のサイト登録・日英冊子PDF・公開前検査とは区別する。

| 必須項目 | 入力元・表示先 | 第1段階の証拠と判断 | 第2段階の残作業 |
|---|---|---|---|
| 公式順の共通4列表 | inventory.json、overview/presentation.json、CATALOGINVENTORYTOKEN → renderCatalogInventory | 日英1行の4列、題名・版・ページ・主張・役割・概説と原典の別導線を034と画像比較。validation/screens/overview.*.inventory*.png と catalog034.*.inventory.png。狭幅は表の領域内で横スクロールし右端も読める | 公式台帳へのサイト登録、実経路・生成済みPDF導線 |
| 図前の文献一覧 | sources.json、citations/articleGuides → reference-guide | 自論文の番号規約、外部キー・著者・正式題名・用途・参照版を共通生成。033 Orbifold Iitakaのreferences画像と日英PC/375pxで比較。最初の図より前にあり、長い書誌も折り返す | 公開ルートと冊子PDFへの反映 |
| 本稿内／外部引用の区別 | 担当別citations.json → 本文・共通TeX | 自論文は無略号、外部はauthor-key。共通text-only照合はvalidation/citations-text-only.log、図の原本・生成条件・生成物はtechnical-check.jsonと元citation-build.json。英日全図をfigures/で目視した | publicコピーを含む完全check:citations、冊子PDFとの照合 |
| 主張・証明対象・読書案内 | mainResults/statements/proofTargets/conclusionCoverage/readingList → renderDraft | 主張欄、主定理の証明対象、全体図と直後の段階説明、原典の結果・ページ・読む目的を確認。Schnellのresults/proof-target/sources画像と比較。数学的充足性・日英対応の判断はAstra記録 | 実サイトの図拡大・切替・アンカー、冊子PDFへの反映 |

## 画面と図

validation/preview/は、共通renderDraft・renderCatalogInventory・現行CSSを使う隔離プレビューである。サイトには登録していない。見本は既存distの034・Schnell・033 Orbifold Iitakaを読取り専用で使った。参照版とCSSの同一性はvalidation/reference-manifest.json、表示入力はdraft-snapshot.jsonに記録する。status.mdの事務追記は表示入力に含めない。

日英・PC/375pxで共通書体・本文と補足のサイズ、主張欄・図前文献一覧・引用段落・証明対象・原典読書案内を比較した。表と横長数式は領域内のスクロールに収まり、ページ全体のはみ出し、数式エラー、未展開トークン、欠落アンカーを認めなかった。検査観測はscreen-checks.json、最終本文・案内版はscreen-checks-final.jsonを優先する。sources、finish、proof-targetを含む該当位置の画像はscreens/に保存した。

日英SVGはfigures/main.{ja,en}.svg.pngで全体を確認した。初回の英語説明の長い行と最後の引用矢印の間隔をAstra執筆担当が調整し、原本から再生成した。確定版では箱・説明・引用・矢印の重なりや文字の欠けを認めなかった。図の数学的対応は別Astraの点検を受領する。図の同一性が保たれる限り第2段階で再コンパイルしない。

案内は3節のため、inventory.jsonのoverviewSectionIdsをpapers/connections/sourcesとした。第2段階でもこの対応を使う。記事の既定IDはresults/diagram-sources/proof-1/dependencies/sources、主定理はtheorem-1-1、042への利用箇所はproof-4-step-4である。

## 構成の判断

単論文の短い入口と共通表を採用した。主要な分岐・帰着をまとめる図は個別記事に置き、案内で重複する論文間図を作らない。分類・空の依存表・選択UIを省く理由と042接続の種別はAstra制作のoverview/connections.jsonを参照する。

## 限界

ローカルMathJaxで表示した隔離プレビューの検査である。実サイトのCDN・ルーティング・配信、実機Safari、公開版の図拡大操作、言語切替の実経路、冊子PDFを確認したことにはしない。第2段階の完全なcheck:citations・テスト・ビルド・リンク・日英PDF・画面検査は、登録と図配置後に共通catalog:prepareで実施する。機械成功を数学的な正しさの認定にはしない。

## 第2段階追記（2026-10-22）

サイト登録・公開用図配置・日英PDFと共通検査を完了。第1段階の数学本文は維持し、紙面の可読性に必要な図配置だけAstraが改訂、別Astraが意味保存を点検した。現在の図の対象版はreviews/STAGE2_FIGURE_REVIEWED_FILES.json。

共通4列表、図前文献一覧、内部／外部引用、主張・証明対象・原典案内を、今回の実ページ・日英PDFと指定見本で比較した。Schnellの既存固有の見出し強調と新規Markdownの見出しには差があるが、共通カードの階層・余白・本文・出典の配置を確認した。カタログPDFでは共通組版による項目一覧へ変換され、4列の情報を保持している。

最終画像・紙面・目視判断と残作業はPREPARATION_REVIEW.mdの最終確認回、機械の数値・ハッシュ・リンク検査はstage2/runsの対応するHANDOFF/reportを参照する。公開・配信反映は未実施。
