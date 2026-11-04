# カタログ340 — 制作・公開記録

2026-11-04現在：**第3段階の公開・反映確認を完了。** 日英カタログ・記事・TeX/SVG・PDFを公開し、Actionsと公開サイトで同一版を確認した。公開結果はstage3/PUBLICATION_REPORT.md、現在の引継ぎはSITE_HQ_HANDOFF.mdを参照する。以下は第1段階開始時の制作範囲と記録。

制作セット1.4、MODEL_ROLES.md（2026-10-20）を適用する。現在の依頼は日英記事・TeX/SVG・引用記録・独立したAstra内容点検・短い日英カタログ案内まで。サイト登録、publicへの配置、冊子PDF生成、PDF版情報更新、commit/pushは次段階。

- 作業場所・開始時Git状態：validation/start.json、validation/git-status-start.txt。既存の未追跡成果物を削除・上書きしない。
- 公式収録・版・分野・順序・ファイル同一性の唯一の書誌台帳：inventory.json。取得証拠：sources/official-head.json、sources/downloads.json。
- 本部：/root。要求モデル・指定証拠・取得限界はMODEL_PROVENANCE.json。
- 執筆：astra_author（Astra / high）。記事と数学的な日英カタログ案内を兼任。指示はAUTHOR_TASK.md。
- 内容点検：astra_review（Astra / high）。別担当で原典から照合。指示はREVIEW_TASK.md。
- 原典PDFと抽出テキスト：sources/paper.pdf、sources/paper.txt。既存Solの解釈・数学原稿・図・点検結果を制作根拠として使わない。
- 記事保存先：../../drafts/catalog-340/nearby-lagrangian-counterexample/。案内：../../drafts/catalog-340/overview/。
- 構成：公式順1本。分類・空の依存表・論文間総括図・選択UIを設けない。記事内図は論証に合わせAstraが判断する。外部入力を省略する理由にはしない。
- PDF計画：第2段階に案内1章＋記事1章の日本語・英語冊子をサイト本部が生成し、カタログ冒頭・公式順表の前に共通PDF導線を置く。今回存在しないPDFへのリンクを完成扱いにしない。
- 実行環境：validation/environment.json。Nodeは通常PATHにないため記録先のbinを追加する。

第1段階では内容編集・独立Astra点検・本部形式受領を完了して停止し、後続の個別指示により第2・第3段階を実施した。確定版、確認範囲、検査証拠、残作業、再開手順はSITE_HQ_HANDOFF.md、FORMAT_REVIEW.md、PREPARATION_REVIEW.md、RELEASE_CHECKLIST.mdを参照する。
