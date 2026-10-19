# 案内原稿・総括図の制作記録

- 担当: R / gpt-6-astra / reasoning_effort high。
- 制作セット:1.4。公式原典から新規執筆。原典先行照合は../../../coordination/catalog-356/reviews/independent-baseline.md。
- 作業開始:2026-10-19 08:44:53 JST（内容点検と同時開始）。
- 案内と図初稿:2026-10-19 08:52 JST。記事受領点検は継続。
- 成果物:article.ja/en.md、presentation.json、connections.json、sources.json、citations.json、diagrams/relations.tikz、日英TeX/SVG、citation-build.json。
- 図採用理由:同値の両方向を分離し、companionが逆向きの有界距離修正→全測地線という一箇所へ合流することを表示する。分類・選択UIは省略。細かな条件と外部入力は記事へ集約。
- 本部からの修正反映:本文の数式表記、frameの量化（適切なtest planのほとんどすべての経路で全時刻）、図直後の独立引用段落、OpenAICatalogキー。
- 検査:registry限定citations生成と--check --text-only成功。XeLaTeX/dvisvgm日英生成成功、Overfull/Missing characterなし。sharpで白背景PNGへ描画し日英の図を目視、箱・説明・引用・矢印の重なりを修正。最終日英とも文字と矢印の専用余白あり。
- 再生成:PATH=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH python3 drafts/catalog-356/overview/diagrams/render.py
- 引用更新:同PATHでnode scripts/sync-citations.mjs --registry drafts/catalog-356/overview/citations.json。
- 記事リンクは移管後の../<paper-id>/article.<lang>.mdを基準にする。現在のreviewフォルダ内では隣接記事を指さない。移管時に公式inventoryへのrecordFileを../../../coordination/catalog-356/inventory.jsonへ変更する。
- 未実施:サイト組込み、日英冊子PDF、公開検査、commit/push/公開。033/034との実画面比較・375px表示は本部が未公開プレビューで実施済み。第2段階のサイト本部担当。
- 注意:full check:citationsはpublicコピーを要求するため、第1段階ではtext-onlyとmanifest整合性に限定。共有スクリプト/publicは変更していない。

## 本部受領・統合
- 2026-10-19: 本部で公式原典pp.2,24,46–50とcompanion pp.2,8–10を照合して案内・図の接続を受領。inventory参照を移管先に修正。
- 指定モデルによる原案はreviews/overview-proposalに履歴保持。画面比較は本部が第1段階の未公開プレビューで実施済み。coordination/catalog-356/FORMAT_COMPARISON.mdを参照。
