# カタログ案内の制作記録

- 担当：本部（root）、カタログ037、制作セット1.4＋2026-10-11/12補足。
- 第1段階。2記事の公式順・正式名を台帳から共有し、日英案内・共通表2行・TeX/SVG関係図1組を制作。
- 構成：02の四次元基底→01の全次元主定理→01内の大域的系。論文間の直接入力と同論文内の帰結利用を区別。
- 原典：公式overview p.5、01 pp.3,9,48–53、02 pp.1,17–18。全次元の主張が四次元を含む事実を逆依存矢印にしない。
- 図・分類の採否理由：coordination/catalog-037/README.md。
- 記事初稿の60分枠とは別の本部作業。原典照合・カタログ編集を2026-10-12に実施。20:18:44 JST時点で案内と関係図・局所プレビューの確認済み。
- 引用・文献案内の入力：sources.json、citations.json。文献案内はcoordination/catalog-037/prepare-overview.pyが共通書誌から生成する。
- 再生成：`python3 coordination/catalog-037/prepare-overview.py` → `node scripts/sync-citations.mjs --registry drafts/catalog-037/overview/citations.json` → `python3 drafts/catalog-037/overview/diagrams/render.py`。
- 必要環境：Node（既存node_modules）、Python3、XeLaTeX、xeCJK/HaranoAji、dvisvgm。Nodeはbundled runtimeのbinをPATHへ追加。
- 画面：共通レンダラーとCSSを読み、coordination/catalog-037/preview/へ隔離生成。日英1280px/375pxでページはみ出し・MathJaxエラーなし、4列表は横スクロール。図全体はscreenshots/overview.*.html.figure-1.pngで確認。
- 034見本：保存済みdistから参照画面を生成し、共通4列・タイトル導線・原典別リンク・情報粒度を比較。ライブ公開比較ではない。
- 未実施：サイト登録、publicコピー、図拡大の実サイトUI、日英PDF、公開前総合検査、commit/push/公開。第2段階でPDF導線を冒頭へ配置する。

- 本部最終受領：2026-10-12 20:35 JST。両記事と関係図・引用・日英12画面を確認し、第1段階内容編集済み。第2段階への引継ぎはcoordination/catalog-037/SITE_HQ_HANDOFF.md。

## 第2段階の本部引継ぎ（2026-10-12）

サイト組込み・公開図・日英PDF・公開前検査を本部が完了。本文と数学的確認範囲は維持。公開準備完了・未公開で停止。詳細は `coordination/catalog-037/STAGE2_HANDOFF.md`（リポジトリルートからのパス）。
