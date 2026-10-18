# カタログ197 公開チェックリスト（第2段階完了）

制作セット1.4 / production/RELEASE_CHECKLIST.md。2026-10-18、root受領。ユーザーの第2段階指示により、公開前まで完了。第1段階時点の本書はstage2/RELEASE_CHECKLIST.stage1.mdへ履歴保存。

- 対象：197、multi、公式順4論文。カタログ本部・サイト本部：root。
- 最新引継ぎ：stage2/HANDOFF_STAGE3.md。成果物・ハッシュ・ログ・第3段階手順を記載。
- 数学的執筆・内容点検：指定gpt-6-astra/high。第1段階の担当と範囲はmodel-provenance.json / reviews/CONTENT_REVIEW.md。
- 第2段階紙面：日本語reviewer、英語author_direct。両者同指定設定。点検の独立性・範囲はstage2/PDF_REVIEW_JA.md / PDF_REVIEW_EN.md。

## 段階と停止

- [x] 第1段階：記事・原典台帳・独立担当の内容点検・日英案内を完了して停止。STAGE1_COMPLETION.json。
- [x] 第2段階：サイト組込み・日英PDF・公開前検査を完了して停止。STAGE2_COMPLETION.json。
- [ ] 第3段階：公開指示待ち。commit・push・公開・反映確認は未実施。

## 内容と形式（第1段階の受領結果を維持）

- [x] 公式本数・順序・正式タイトル・分野・版・URL・ページ数・SHAを台帳で固定。inventory.json。
- [x] 日英本文・32TeX・32SVG・引用・状態記録が揃う。初稿4本すべて60分以内。各status.md。
- [x] 主要結果の仮定・量化・全結論・番号・ページ、各証明節の主張欄と図直後説明が対応。reviews/CONCLUSION_COVERAGE.md。
- [x] 直接外部入力の内容・適用条件・使用箇所・確認範囲を記録。全証明の再帰検証はしていない。
- [x] 日英の数式・仮定・構造・引用・未確認範囲が一致。第2段階では4記事正本を変更していない。
- [x] 本稿内番号と外部著者キーを区別し、図前に著者・正式名・版・用途を定義。CITATIONS.mdの共通記録から本文/TeXを生成し、公開コピー/PDFにも保持。
- [x] 公式順共通4列表と短い入口、原典への導線がある。034の共通表と比較。単論文用省略条件は対象外。
- [x] 総括図1枚を採用。標数2→行列式の直接入力とCAへの帰結、独立構成を区別。採否はoverview/status.md・connections.json。固定分類数や空表なし。
- [x] Schnellの主張欄・証明節、033 Orbifold Iitakaの図前文献一覧と画像比較。FORMAT_REVIEW.mdとstage2/BROWSER_REVIEW.md。

## サイト組込み（root、2026-10-18）

- [x] src/data/site.mjsにAlgebra/197/公式順4記事を登録。共通ルートで日英10ページ生成。
- [x] 対象inventoryを参照。別カタログの固定表・固定分類を誤用していない。
- [x] 共通本文・補足書体、右上言語切替、ヘッダー、AI注意、案内役、図拡大を維持。
- [x] public/diagrams/catalog-197に32SVG/32TeX。原稿とコピーの引用検査成功。
- [x] 主要結果カード・出典行・主張→図→説明が実サイト共通表示。PCと375pxで確認。
- [x] 全64回の図開閉/ズーム/全体表示と引用リンク、日英切替のアンカー保持を確認。
- [x] 共有ファイルを順次統合。他担当の既存ファイル・PDF版情報を保持。preservation-check.json。ブランチ切替/一括stageなし。

## 実行と画面確認（root、2026-10-18）

- [x] check:citations：74記録/268生成ファイル成功（stage2/citations.log）。
- [x] test：39件成功（stage2/tests.log）。
- [x] build：205ページ成功（stage2/build-final-annotated.log）。
- [x] check:links：250,107参照/205ページ成功（stage2/links-final.log）。最終注釈版の再build後も同じ検査条件に読込キャッシュのみ追加して成功（links-cached-final.log）。
- [x] check:pdf：全24カタログ48冊current（stage2/pdf-check-all-final.log）。
- [x] 197日英10ページ×PC/375px、トップ/Algebra8表示、033/034見本12表示、計40表示を確認。欠落・横はみ出し・MathJax/JSエラー0（browser-checks.json）。
- [x] 長いタイトル・式・図ラベル・引用の余白を目視。参考画像と比較した（BROWSER_REVIEW.md、screens/）。
- [x] 初期のbuild同時検査によるENOENTとPDF登録前リンク未表示は最終ログで解消。失敗ログを成功扱いしていない。

## 日英PDF（必須、root生成・Astra担当紙面、2026-10-18）

- [x] 日本語51頁・英語54頁、各5章16図を生成。public/pdf/catalog-197-{ja,en}.pdf。
- [x] 案内冒頭から対応言語PDFへ接続。予定文を除去し実リンク表示。
- [x] PDFとsrc/data/pdf-editions.jsonを同期。既存版情報は保持。
- [x] 表紙・目次・全頁を画像確認。全図・主要主張・長式・文献案内・確認範囲・改ページを拡大目視。日英レビュー記録に頁一覧。
- [x] 目次/記事内宛先・本文原典リンクを保持。紙面用表展開とWeb図/TeXへの実リンクを保持し、ズーム等の操作UIは除去。
- [x] 初回のSVG図内リンク注釈欠落を各言語65件補完して解消。全リンクURI/矩形とSVGを照合、紙面内容不変も確認。
- [x] 最終PDFのHTTP200/PDF MIME/bytes/SHAをpublic・dist・版情報と照合（served-pdf-check.json）。

生成手順と注釈補完の再適用手順はstage2/HANDOFF_STAGE3.md。紙面生成の成功だけを目視点検の代わりにしていない。

## 公開（第3段階・依頼範囲外）

- [ ] 公開指示を受け、最新Git状態と197対象差分を確認。
- [ ] 他担当差分を分離して必要ファイルをcommit/push。
- [ ] GitHub Actionsのbuild/deploy成功を確認。
- [ ] 公開サイトで日英案内・4記事・画像・TeX・PDFの今回版を照合。
- [ ] 公開URL・commit・検査結果・数学的未確認範囲を報告。

## 残作業と限界

制作上の第2段階未完項目はない。第3段階の公開・反映確認は明示指示待ち。LT79本文/頁対応、確率・位相・有限blockの完全独立再計算、有限処方実行、外部証明の再帰検証は未実施のまま。標数2Cor7.4/type-F∞埋込みは確認済み主要結果外。詳細はSITE_HQ_HANDOFF.mdの数学的確認範囲と各記事。専門家査読や全証明の検証を完了したという意味ではない。
