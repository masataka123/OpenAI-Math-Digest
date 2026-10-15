# Catalogue 187 — Astra新稿の制作本部

**第2段階（サイト組込み・日英PDF・公開前検査）まで完了。commit・push・公開は行わず停止。**

現行記事は `gpt-6-astra / high` が公式原典から新規執筆した日英稿。旧Solの原稿・図・解釈・点検は採用していない。モデルと初稿36分22秒の記録は [MODEL_PROVENANCE.json](astra-20261015/MODEL_PROVENANCE.json)。単独自己点検を独立レビューとは呼ばない。

公式187 **Snaky in 21 Maker moves**。OpenAI、September 25, 2026、84ページ。収録1本、ID `snaky-in-21-maker-moves`。固定版1581d4cbdd69a0faf34b2089614fe2a814316a6a、Combinatorics（分野順7・subject13）、overview p.20。詳細はinventory.json。

## 現行成果物と検査

- [日本語記事](../../drafts/catalog-187/snaky-in-21-maker-moves/article.ja.md)／[英語記事](../../drafts/catalog-187/snaky-in-21-maker-moves/article.en.md)、同ディレクトリのTeX/SVG・引用・原典記録。
- [日本語案内](../../drafts/catalog-187/overview/article.ja.md)／[英語案内](../../drafts/catalog-187/overview/article.en.md)、公式順共通表。
- [日本語PDF](../../public/pdf/catalog-187-ja.pdf)：21ページ。[英語PDF](../../public/pdf/catalog-187-en.pdf)：22ページ。各2章・4図。
- 第1段階：CONTENT_REVIEW.md、COMPUTATIONAL_REVIEW.md、astra-20261015/。数学本文・原典・著者の二再構成器の実行記録。
- 第2段階：[完了記録](astra-stage2-20261015/README.md)、[詳細点検](astra-stage2-20261015/REVIEW.md)、screens/、pdf-review/、logs/。39テスト・全体引用・全PDFハッシュ・155ページ183,482内部リンクが合格。日英PC／375pxの20ケースと全43PDFページを点検。
- 187の案内リンク8件と有限盤のPDF斜線を修正。数学本文は第1段階から変更なし。指定見本はSchnell・033 Orbifold・034。051を標準見本にしていない。

## 未確認と次段階

全証明書の手検算、専用局所応手suite、全中間集合突合、方策の対局実行、探索、Lean監査・コンパイル、25／35手経路・Proposition7、他カタログ関係は未実施。日英本文とPDFでも確認範囲を明示。

作業先 `/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、ブランチmain。並行作業の004のcommit、246の更新を保全し、本部はGit書込み操作を行っていない。変更一覧はastra-stage2-20261015/CHANGED_FILES.txt、保全結果はscope.json。共通ファイルは187項目だけを変更し、共通表示・PDF生成処理は変更していない。

次はユーザーの公開指示後に第3段階へ進む。[SITE_HQ_HANDOFF.md](SITE_HQ_HANDOFF.md) と [第3段階手順](astra-stage2-20261015/HANDOFF_STAGE3.md) を使う。旧Sol稿・旧公開物は履歴として保存し、現行稿と混同しない。旧stage2/等は今回の検査根拠ではない。
