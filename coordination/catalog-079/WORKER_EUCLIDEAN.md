# 制作担当指示書 — catalog 079

指定モデル：gpt-6-astra / high（生成時の明示引数）。作業先：/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest。
最初にPROJECT_PLAN.md、AGENTS.md、production/README.md、ARTICLE_TEMPLATE.md、CATALOG_TEMPLATE.md、FORMAT_CONTRACT.md、CITATIONS.md、RECORDS.md、MODEL_ROLES.mdを読む。台帳：coordination/catalog-079/inventory.json。共通例は形式だけ参照し、既存Sol制作の数学原稿・解釈・点検結果を根拠にしない。
初稿は1本最大60分。実読解開始・締切・終了をstatus.mdへ記録し、自動延長しない。時間上限の未完成・未確認は明記。編集は別枠で記録。
必須：article.ja.md、article.en.md、diagrams/の引用付きTeXとSVG、sources.json、citations.json（author-key）、status.md。主張→引用図→直後の説明→直接入力→原典案内。全主要結論にconclusionCoverageを対応。独立した中間命題には図の前に仮定・量化・結論・番号・ページ。図前文献一覧、proof-target、reading-list必須。本文・TeXの引用は共通生成。初稿後に別Astra点検・修正応答を行う。
原稿の主張と実際の確認範囲を明確に区別。外部結果は記述・適用箇所を照合し、証明の再帰検証は不要。未取得・未照合は明記する。公式原典のファイルとハッシュは台帳を参照。
Node: /Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node。npmは不在のためnode scripts/sync-citations.mjsを直起動する。pdftotext/pdfinfo、/Library/TeX/texbin/xelatex と dvisvgm 使用可能。引用スクリプトの --registry で自分のみ処理する。publicへコピーしない。
担当外成果物・共有データ・サイト・PDF版情報を変更しない。内容点検者は原稿を直接修正せず指摘を著者と本部へ返す。074記事の改訂は行わず必要性のみ申し送り。

## 担当
第1論文 euclidean-wave（59頁）、編集範囲drafts/catalog-079/euclidean-wave/。その後、overview/の日英案内・presentation.json・connections.json・必要な引用と図・構成採否記録を担当。
## 重点
波動局所平滑化そのものと帰結を分離。次元、指数範囲、Sobolev、時間、ノルム、定数依存、正の損失対無損失端点、主定理の中間結果への帰着と改善点、組合せを示す。Bochner–Riesz・最大評価・Stein平方関数・restriction（球面/コンパクト放物面/切断円錐）・Schrödinger・Kakeya/Nikodymの各主要結論の正確な条件と導出箇所、入力結果を全て対応。Kakeya最大関数と集合次元を区別し原稿にない含意を足さない。
案内は034共通4列表、PDF配置計画、公式順。2本の対象次元・指数/正則性・結論・証明方法を比較し、包含・別証明・直接入力を原典で区別。新稿→旧稿依存を仮定しない。074の原典引用・適用を確認。図はFORMAT_CONTRACT第6節で採否を記録し、数学的判断を担当する。
