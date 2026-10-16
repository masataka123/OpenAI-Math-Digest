# カタログ074 段階別チェックリスト

制作セット1.4＋現行補足。対象はmulti（公式順2論文）。本部：/root（ユーザー選択Astra/high）、執筆・独立内容点検：明示起動gpt-6-astra/high。2026-10-16に第1段階を受領。状態は**内容編集済み・第1段階完了**。公開準備完了ではない。

## 第1段階（今回の依頼範囲）

| 要件 | 判定 | 担当・証拠 |
|---|---|---|
| 公式番号・名称・分野・収録順・原稿版・頁・URL | 完了 | 本部、inventory.json／sources、固定commit記録 |
| 日英2記事と案内・引用記録・TeX/SVG | 完了 | write_three／write_four／本部、drafts/catalog-074の3フォルダ |
| 主要結果の仮定・全結論・原典頁と証明説明 | 確認範囲内で適合 | reviews/RESULT_CHECKLIST.md、SOURCE_REVIEW.md。全証明の独立検証ではない |
| 外部入力の記述・適用条件・使用箇所 | 確認範囲と限界を記録 | 各sources.json、reviews/SOURCE_REVIEW.md |
| 執筆者以外によるAstra/high点検 | 完了 | review_content、CONTENT_REVIEW.md。7指摘の反映を確認 |
| 日英の仮定・式・構成・引用・未確認範囲 | 完了 | 独立点検とvalidation.json。表示式17＋11組 |
| 公式順の共通4列表と記事／原典の別導線 | 完了 | overview/presentation.json、隔離プレビューで034と比較 |
| 文献案内・内部／外部引用・証明対象・読書案内 | 完了 | articleGuides等、FORMAT_REVIEW.md。PDFへの反映は未実施 |
| 総括図・分類の採否と接続の区別 | 完了 | 共有入力からの分岐図1組を採用。分類カード・選択UIは重複のため省略。overview/connections.json |
| 初稿時間・モデル・思考量 | 記録済み | 各status.md、model-provenance.json。初稿14分35秒／約16分。点検担当の正確な開始秒未記録は明記 |
| 図・PC/375px・指定見本の表示比較 | 第1段階完了 | FORMAT_REVIEW.md、14図画像、12表示条件。実サイト操作とPDFは未実施 |
| 他担当・共通ファイルの保持 | 確認 | preservation-check.json。対象外trackedファイルの開始時hashから変化0 |
| 引継ぎ・未確認事項・停止 | 完了 | SITE_HQ_HANDOFF.md、README.md、各記事status。今回ここで停止 |
| 単論文の省略規則 | 対象外 | 公式2論文 |

## 第2段階（未実施・次回サイト本部）

- [ ] src/data/site.mjs等への分野・カタログ・論文登録、両言語ルート・導線・掲載数。
- [ ] 074専用SVG/TeXをpublicへ組み込み、既存アンカー・原典リンク・AI注意書き・言語切替・案内役を保持。
- [ ] 完全なcheck:citations、npm test、build、check:linksを実行し記録。対象registryのtext-only成功と混同しない。
- [ ] 実サイト日英PC/375px、定理カード・出典行・文献案内・図拡大・図中引用・言語切替・アンカーを検査し、034／Schnell／033比較を更新。
- [ ] **日英冊子PDFを必ず生成**。案内1章＋記事2章＝全3章。図は3D4・4D2・総括1の7図／言語。
- [ ] PDF版管理情報を更新し、カタログ冒頭に実PDFの対応言語リンクを配置。
- [ ] 日英PDFの全図・主張・目次・内部外部リンク・改ページを画像点検。check:pdfと再ビルド後リンク検査。
- [ ] 公開準備の結果と再開手順を報告し停止。

コマンドと組込み順はSITE_HQ_HANDOFF.md。制作標準コマンドは../../production/RELEASE_CHECKLIST.mdを参照。今回の原典PDFダウンロードは解説冊子PDF生成には数えない。

## 第3段階（依頼範囲外）

- [ ] 現在のユーザー公開指示を確認した上で、対象差分のcommit・push。
- [ ] GitHub Actionsのbuild/deploy成功と公開日英HTML・図・PDFの反映確認。
- [ ] URL・commit・検査結果・数学的未確認を報告。

## 残る未確認

4Dが引用する「3D Lemma 2.3」は固定3D版Lemma 3.3と条件・結論が対応するが、番号変更の版履歴は未調査。各原典の全技術証明・外部結果の全証明は検証していない。4D §11の追加帰結は本記事の対象外。本文末尾・sources.json・SOURCE_REVIEW.mdに個別範囲を保持する。未調査の他論文接続を「依存なし」と認定しない。
