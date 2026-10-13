# カタログ案内の作業記録

- 担当：052本部、制作セット1.4＋現行補足。
- 状態：第1段階・内容編集済み。公式順2本の日英入口、共通4列表データ、接続記録、対照図1種×日英、引用記録を作成。
- 記事初稿の時間枠とは別の本部工程として制作。
- 接続方針：2本間の直接証明依存を主要証明の読解範囲で確認していない。背景引用と、Hor07から各帰結への入力を区別。
- 図の採否：2本を直列に置かず、可積分性の仮定/結論、普通普遍被覆/$X$自身の積という差を2列の図で示す。分類カード・選択UI・重複する細部表は省略。詳細はconnections.json。
- 査読ではなく内容照合：source_reviewが日英案内・表・接続記録・TeX原本を確認。案内リンクをproof-overviewへ修正、図のH/Kを局所芽と明記、Hor07参照版を補記。
- 図の再生成：node scripts/sync-citations.mjs --registry drafts/catalog-052/overview/citations.json、python3 drafts/catalog-052/overview/diagrams/render.py。
- 確認：日英図目視、共通表を034と比較、6ページ日英共通preview、3 registryの限定引用検査、ローカル図ハッシュ検査。
- 日英冊子PDFは未生成。現在の予定表示を第2段階で除き、CatalogMarkdownOverviewのPDFリンクを出す。
- セクションID：papers, diagram-sources, connections, sources。
- 組込み・公開：未実施。SITE_HQ_HANDOFF.mdに従い再開。

## 第2段階の組込み（2026-10-13、本部）

- 日英サイトへ登録し、TeX/SVGをpublicへ配置。案内＋公式順2記事を日英PDF（28/32ページ、各3章・8図）へ収録。
- 数学的本文・引用・図原本は保持。案内だけPDF生成予定の文を削除し、共通PDFリンクを表示。
- 検査・未確認範囲・次段階：coordination/catalog-052/STAGE2_HANDOFF.md。commit・push・公開は未実施。
