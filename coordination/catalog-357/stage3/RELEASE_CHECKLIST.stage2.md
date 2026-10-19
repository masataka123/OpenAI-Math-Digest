# カタログ357 公開チェックリスト

制作セット1.4。2026-10-19、本チャット本部。第1段階の版はstage2/stage1-RELEASE_CHECKLIST.mdに保存。今回の指示は第2段階。commit・push・公開は未依頼。

## 内容・案内

- [x] 公式収録1篇、順序1、正式タイトル、Differential geometry、333–361、overview p.38を固定版で確認。inventory.json・原典manifest。
- [x] 日英記事、日英5図のTeX/SVG、原典・引用記録を保持。初稿11分22秒と後続編集を分離。各status.md。
- [x] 主結果2・中間主張3・証明対象5・全11結論の説明先を保持。主張欄→図→説明、冒頭全体図、原典読書案内を日英で照合。citations.json・conclusion-coverage.json。
- [x] 外部author-keyと図前の著者/正式タイトル/版、誌面/PDF頁の違い、記述・適用・未確認範囲を保持。reviews/、CONTENT_REVIEW.md。
- [x] 執筆と独立内容点検は明示gpt-6-astra/high。第2段階の表示編集も同じ独立担当が受領。stage2/CONTENT_ACCEPTANCE.md。
- [x] 単論文の共通4列表と短い入口。不要な分類・空表・カタログ総括図を省略する理由を記録。個別記事の全体図・証明図は省略していない。
- [x] 356との依存は未調査として維持し、題材だけで関係を作らない。

## 組込み・実サイト

- [x] site.mjsへ357の論文/単論文カタログ/微分幾何学導線を追加。日英routeは共通renderer。独自CSSなし。
- [x] 公開用SVG/TeX20点を原本と照合。共通本文・主張カード・出典・ヘッダー・AI注意・言語切替・図拡大を維持。
- [x] 実サイト28条件＋最終4条件で日英1280/375px表示、トップ→分野→カタログ→記事→証明節を確認。110画像。stage2/REPORT.md。
- [x] 言語切替12回とアンカー、図拡大/zoom/fit/close20回、引用リンク保持を確認。横overflow/MathJax/JSエラー0。長い式は内部横スクロールで量化まで読める。
- [x] 034カタログ表・Schnell主張/証明・033図前文献案内と実画面比較。数値検査だけで代替していない。
- [x] 他担当356登録・既存PDF版エントリを保持。ブランチmainのまま。共有保存箇所は357追加のみ。

## 自動検査

- [x] 引用full検査：公開コピーを含む286ファイル/79レジストリ。citations.logおよびcitations-final.log。
- [x] tests：39/39。tests.logおよびtests-final.log。
- [x] Astro build：215頁。build-final.log。
- [x] 最終全サイト内部リンク検査：215頁、267,933内部リンク/asset、アンカー・base・旧名検査成功。links-cached-final.log。通常版と同一検査ロジックを確認したread-only cache版。
- [x] 最終全カタログcheck:pdf：登録済み全カタログの日英PDF一致検査成功。pdf-check-all-final.log（357限定最終checkも成功）。

## 日英PDF（必須）

- [x] 日英各20頁、案内＋記事2章、5図を生成。public/pdf/catalog-357-{ja,en}.pdf とpdf-editions.json更新。
- [x] カタログ冒頭に対応言語PDFリンク1件。実HTTP200・application/pdf・配信hash一致。stage2/final-diff.json。
- [x] 全40頁・全10図を目視確認。p.4の下付きn欠字をTeX化して解消、最終全40頁再描画で修正p.4以外の38頁が一致。stage2/PDF_REVIEW.md。
- [x] 目次・原典・記事リンクと68宛先/言語を構造検査。SVG内部引用を18件/言語注釈化し、紙面stream不変を確認。pdf-audit.json、pdf-figure-links.json。
- [x] 主要結果・各命題の主張、図、直後説明、確認範囲を紙面へ保持。WebとのcontentHash一致を確認。日英PDF待ちではない。

## 停止と残作業

- [x] 第1段階：記事・内容点検・案内を受領して停止。
- [x] 第2段階：最終検査完了をFINAL_STATUS.jsonに記録。結果・再開手順を報告して停止。
- [ ] 第3段階：公開指示後、対象差分の選別commit・push・Actions・公開日英ページ/図/PDFの反映確認。

公開は現在の依頼範囲外。第3段階の具体的手順はSITE_HQ_HANDOFF.md。原典の全証明検証、局所Poisson/Hessian/Bochner/Laplacian外部全仮定の網羅照合は引き続き未完了であり、機械的検査成功を専門家査読済みと表現しない。
