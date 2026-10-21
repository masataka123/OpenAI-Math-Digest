# 第1段階の形式受領・画面比較

担当：本部 /root。モデル指定・取得できない実行情報はMODEL_PROVENANCE.json参照。数学的な内容点検はCONTENT_REVIEW.mdを別担当Astraから受領する。

## 共通の検査と対象版

- 書誌・原典ファイル：inventory.json、SOURCE_CHECK.json、SOURCE_VISUAL_CHECK.json。
- 本文・引用：共通sync-citations（--check --text-only）。第1段階では公開コピーがないため、公開コピー検査を完了扱いしない。
- 必須形式：共通validateGuide、renderDraft、validateInventoryとrenderCatalogInventoryをそのまま利用。検査の適用先だけ305へ変更した。VALIDATION_TOOLS.json参照。
- 共通表示の回帰検査：shared-tests.log。数値だけでは受領しない。
- 原稿プレビュー：preview-checks.jsonがMarkdownとHTMLの対象ハッシュ、screen-checks.jsonが画面画像の対象HTMLハッシュとPC/375px結果を記録する。サイトへ未登録。
- 図：各diagrams/citation-build.jsonを唯一の生成ハッシュ記録とし、原本・生成物を照合する。同一版の図を本部受領のためだけに作り直さない。

## 最初の記事の先行受領

boundary-onlyの日英3図ずつ、主張欄、文献一覧、証明対象と図直後の説明、原典読書案内を共通表示で確認した。日英全6図に箱・矢印・説明・引用の重なり、欠字、切れを認めなかった。PCの図別画像と日英375pxの主張・文献案内はscreens/boundary-only-disk-embedding.*を参照。

主張・結論の説明先の実在と数式エラーを機械照合。長い数式は共通の数式用領域内で横にスクロールでき、ページ全体ははみ出さない。

指定見本は既存distの034、Schnell、033 Orbifold Iitakaを読取専用でプレビュー化した。034の4列表、Schnellの淡緑色の定理欄、033の略号・著者・正式題名・用途・版を含む文献一覧と比較し、同じ共通表示部品／CSSを使うことを確認した。新規引用は1.4のauthor-keyを適用し、旧見本の引用表記そのものはコピーしていない。

独立点検者が見た別PDF経路の一時PNGはdriverが異なり不正表示だった。canonical SVGは不変で、本部のChrome画像で正常表示を確認し点検者へ共有した。これをSVG自体の修正・再生成として記録しない。

## 先行受領時の未了

残りの記事・案内の最終版確認、内容点検の修正後受領、最終の対象版照合は後記へ追記する。実サイトのナビゲーション、図拡大UI、日英冊子PDFの紙面とリンク、公開コピーを含む検査は第2段階。

## 最終形式受領（2026-10-21）

3記事と案内の日英版を共通レンダラーへ通し、stage1-checks.jsonの全項目が成功した。4registryの引用同期はcitation-check.log、共通表示の回帰検査はshared-tests.logを参照。数式のエラー・必須アンカーの欠落・内部リンク先欠落を認めなかった。

本部はcanonical SVGを表示した全20図のChrome画像を確認した。とくにmarkedのalgebraic図の外部4引用、main図終段の複数引用、PD4の長いラベル、案内の破線／実線の説明に重なり・欠字・切れを認めなかった。Getzlerの最終書誌変更後は影響したmarked本文だけを再表示し、TeX/SVGは同一版を再利用した。案内の概要抽出とsection IDを最終版へ合わせた後は案内だけを再表示した。

| 必須項目 | 入力元と表示先 | 自動検査・目視証拠 | 第2段階へ残すもの |
|---|---|---|---|
| 公式順共通表 | inventory.json、overview/presentation.json → overview #inventory | 共通validateInventory/renderCatalogInventory、stage1-checks、screens/overviewの日英PC表と375px画面。034の同じ4列表と比較 | 実サイトの分野からの導線、表の横スクロール操作、PDFへの表情報保持 |
| 図前文献と引用区別 | sources/citationsのguide情報 → #diagram-sources／案内の図前文献 | 共通同期・validateGuide、各記事の日英文献画面、033 Orbifold Iitakaの日英画面と比較。著者・正式題名・用途・版を保持 | 公開コピー照合、冊子内の引用表示 |
| 主張・証明対象・全結論 | articleGuidesのmainResults/statements/conclusionCoverage → 主張欄とproof節 | 共通validateGuide・実HTMLアンカー、Schnellの日英定理欄と比較、各記事のPC/375pxと全図。数学的な充足性はCONTENT_REVIEW参照 | 実サイトの図拡大UIと切替時アンカー、全紙面 |
| 原典読書案内と確認範囲 | readingList、記事末尾、sources/status → #sources | 共通生成・実アンカーと内部リンクを検査。日英の確認範囲は別Astra点検記録を受領 | 組込み後の原典リンク操作とPDFリンク |

日英8ページをPC/375pxで描画したscreen-checks.jsonにページ全体の横はみ出し・MathJaxエラーなし。長い式と4列表は共通の内部スクロール領域に収めた。指定見本はscreens/reference-*に保存しており、旧記事の数学や引用を今回の制作根拠にはしていない。

対象版の同一性はpreview-checks.json、screen-checks.json、REVIEW_IDENTITY_CHECK.json、各citation-build.jsonを参照する。本書へハッシュを転記しない。今回の確認は未登録の原稿プレビューに対する第1段階の形式受領であり、サイトと日英冊子を含む公開準備完了の判定ではない。

最終の記録検査で両円板稿のsourcesに未確認欄・接続参照、boundaryの主張照合記録を補完する必要があり、Astra執筆担当へ返した。担当が既存の確認結果を補完し、別Astraがsources/statusだけを限定再点検した。本文と図のSHAは不変で、再執筆・図再生成はしていない。最終manifestとの一致はREVIEW_IDENTITY_CHECK.json参照。

本部作業は2026-10-21 20:19 JSTごろから20:49 JSTごろまで約30分（準備、取得、並行待ち、形式・画面検査、引継ぎを含む壁時計）。記事初稿・案内・独立内容点検の時間とは区別する。ローカル確認用サーバーは停止済み。
