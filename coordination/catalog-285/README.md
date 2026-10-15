# カタログ285 第1段階制作

- 依頼範囲：記事制作・内容点検・カタログ案内まで。サイト登録、共通部品、public、PDF管理ファイル、commit、push、公開は対象外。
- 採用仕様：production 制作セット1.4と現行補足。AGENTS.md、PROJECT_PLAN.mdを最初に確認。
- 作業場所：/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest、ブランチ main。共有ブランチを切り替えない。他担当の変更を保持。
- 公式固定commit：1581d4cbdd69a0faf34b2089614fe2a814316a6a。公式順・原典URL・ハッシュ・ページは inventory.json を唯一の台帳とする。
- 公式分類：Operator algebras、公式分野順13番、285–303、overview PDF p.31。英語表記は overview.tex と CONTENTS.md が一致。
- 収録：3論文。各論文の原稿量と独立した構成に合わせ3執筆担当を用いる（固定人数ルールではない）。
- 執筆・内容点検の指定モデル：gpt-6-astra。各担当はモデルを明示指定して起動。制作根拠は公式原典。既存Solの数学内容・図・解釈・点検記録は再利用しない。共通表示基盤と指定見本のみ利用可。
- 記事担当：injectivity／projection／irrational-traceの各Astra。初稿後は執筆者以外のAstraで主要主張・接続を原典照合し、本部が統一を記録する。
- 既存記事：draftsの記事本文・src/data/site.mjsをBaum/Kaplanskyで検索し、同一論文の記事なし。原典ファイルは今回固定版から取得。
- 記事骨格は034 Schnell、文献案内は033 Orbifold Iitaka、案内表は034。051へ見本を置換しない。
- PDF担当：第2段階のサイト本部。今回の日英冊子PDFは未生成、冒頭導線は第2段階で実ファイルと共に組み込む。

## 記事担当への共通指示

AGENTS.md、PROJECT_PLAN.md、production/README.md、FORMAT_CONTRACT.md、CITATIONS.md、ARTICLE_TEMPLATE.md、RECORDS.mdを読む。指定見本を構造だけ参照し、公式原典から新規制作する。編集範囲は割当drafts/catalog-285/<paper-id>/のみ。外部原典はcoordination/catalog-285/sources/<paper-id>/へ取得可。他の記事・共通ファイル・サイト登録・public・PDF管理は変更しない。

初稿の原典読解・執筆・図・自己点検は開始から最大60分。開始・締切・終了をstatus.mdへ記録。早く揃えば終了し、上限を自動延長しない。追加編集は初稿と区別する。日英article.md、sources.json、citations.json、diagramsのTeX/TikZ/SVGとcitation-build.json、status.mdを揃える。共通引用生成は自分のregistryのみ指定し、text-only検査を行う。

主結果の番号・仮定・全結論・ページを記し、各結論へ証明概略を対応させる。独立した中間命題節は図の前に完全な主張を置く。主張→引用付きTeX図→直後の説明。図箱には操作と数式、矢印には使用内容と引用。中間命題が多い場合は全体図を先に置く。外部入力の記述と適用箇所を読み、その証明自体は再帰検証しない。未確認は本文と記録に明示する。著者の主張と編集側の照合範囲を区別。

特別点検：
1. Baum–Connesの係数有無、群・係数代数、assemblyの定義域・値域、単射／全射のどの失敗かを明記。
2. Kadison–Kaplanskyの群仮定と対象代数、射影の正確な条件。群環／最大／被約／行列代数を混同しない。
3. 射影の構成とK理論類を区別。必要な代数への所属・非零・非単位の根拠。
4. 構成と予想の仮定充足を分け、部分群・商・極限での保存理由。
5. 他の反例との共通構成・含意・独立性は原典から確認。タイトルから依存を作らない。
6. 既知の反例と新しい主張を区別し、定式化を読み替えない。

本文・TeX引用はauthor-keyの共通記録から生成。図前文献一覧とarticleGuides（mainResults, statements, conclusionCoverage, readingList等）を省略しない。原典PDFはsources直下に保存済み、対応txtも利用可。原典の引用ページをPDFで確かめる。

## 実行環境

node: /Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node
Python: /Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3
pdftotext: /usr/local/bin/pdftotext
TeX: /Library/TeX/texbin/lualatex, dvisvgm
npmがPATHになければnodeでscripts/sync-citations.mjsを直接実行してよい。図レンダラは063の構造を参考にしpublicコピーを除く。画像は実際に目視して欠け・重なりを点検。
