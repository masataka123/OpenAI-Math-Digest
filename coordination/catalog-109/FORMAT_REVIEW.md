# カタログ109 第1段階の形式受領

2026-10-22、本部 `/root` が制作セット1.4の内容編集版を受領。担当・明示モデル指定は MODEL_PROVENANCE.json、数学的判定は CONTENT_REVIEW.md を参照する。本書はSolによる形式・表示検査であり、数学内容の独立照合を代行するものではない。

## 必須形式と指定見本

| 項目 | 入力元・表示先 | 機械検査 | 本部の目視・判断 | 次段階 |
|---|---|---|---|---|
| 公式順共通4列表 | inventory.json、overview/presentation.json → 共通renderCatalogInventory | validation/preview-report.json、visual-report.json | `screens/overview.*.1280.papers.png` と `reference-034.*.1280.png`、日英375px像を比較。1行でも4列・論文名→記事・原典別リンク・版/頁・主張/役割を保持。横スクロール用の共通枠を使用 | 実サイト導線とPDFへの反映は第2段階 |
| 図前文献一覧 | 記事sources/citationsのarticleGuides → diagram-sources | citations-text.log、preview-report.json | `integer-multiplication-below-n-log-n.*.375.diagram-sources.png` と `reference-orbifold.*.375.png`、PC像を比較。著者・正式名・使用内容・実際のHAL版・頁差・同一性留保を保持 | 正式サイトと日英PDFの表示を第2段階で確認 |
| 本稿内/外部引用の区別 | citations.json → 本文・citations.*.tex・自己完結TeX/SVG | citations-text.log、artifact-check.json | 自論文は無略号、外部は定義済みHvH21。頁表示と原典リンクの形式は共通生成。033/034の旧略号を新規引用へコピーしていない | publicコピー後の完全なcheck:citationsは第2段階 |
| 主張・証明対象・原典案内 | mainResults/statements/conclusionCoverage/readingList → results、proof-1〜3、sources | preview-report.json、final-state.json | Schnellの骨格と比較。Theorem 1の主張が先行し、各図の直前に証明対象、図直後に段階説明、末尾に読む箇所と目的を配置。単整数番号には明示theorem-1アンカーを用いる | 冊子への保持を第2段階で確認 |

画面証拠の正本は `validation/images.html` と `validation/screens/`。日英記事・案内のPC/375pxを共通renderer/CSSで隔離表示し、数学式は同梱MathJaxで処理した。サイト登録やdist/publicへの配置はしていない。正式サイトのAI注意書き・案内役・言語切替・図拡大は第2段階で共通部品を接続して検査する。

全6図を拡大像で閲覧し、箱・操作見出し・式・矢印の説明・引用に重なりや欠けを見つけなかった。日本語の説明も保持。図の意味と日英の数学対応はAstraの独立記録を受領した。Focused画像に固定ヘッダーが混入した初回撮影を修正し、現在の画像はヘッダーを隠した最終撮影版。ページ上端の画像は通常ヘッダーを含む。

英語の依存節が初めproof-4と分類された点はAstraへ返却し、External inputs見出しへの変更後に再表示した。現在の日英節IDは一致し、connectionsのリンク先も実在する。主要結果のカード、図前の文献、図、直後の段階説明、原典案内の順序を確認した。

## 原記録への参照

- 共通基盤テスト：`validation/common-tests.log`。サイトへ109を登録した検査ではない。
- 109限定引用検査：`validation/citations-text.log`。第1段階なので--text-onlyを使用。
- 図の原本/生成物manifest・SVG XML・制御文字・台帳：`validation/artifact-check.json`。
- 隔離HTMLの数式・アンカー・版：`validation/preview-report.json`。
- 日英PC/375pxの幅・数式・SVG参照と画像：`validation/visual-report.json`、`images.html`。
- 内容点検版・画面版・接続アンカーの同一性：`validation/final-state.json`。ハッシュは原manifestを参照し、本書へ転記しない。

開始時から並行作業で担当外の差分も変化した。対象はfinal-stateのpreservationを参照する。本担当の編集は109の二つの割当ディレクトリに限定し、担当外を復元・削除していない。ワークスペース全体が不変だったとは報告しない。

判定：**第1段階の形式受領済み・内容編集済み**。サイト組込み、公開用図コピー、日英冊子PDF、正式サイト/冊子の検査、公開は未実施。公開準備完了とは区別する。
