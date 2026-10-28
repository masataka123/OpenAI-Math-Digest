# 制作担当指示書 — catalog 079

指定モデル：gpt-6-astra / high（生成時の明示引数）。作業先：/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest。
最初にPROJECT_PLAN.md、AGENTS.md、production/README.md、ARTICLE_TEMPLATE.md、CATALOG_TEMPLATE.md、FORMAT_CONTRACT.md、CITATIONS.md、RECORDS.md、MODEL_ROLES.mdを読む。台帳：coordination/catalog-079/inventory.json。共通例は形式だけ参照し、既存Sol制作の数学原稿・解釈・点検結果を根拠にしない。
初稿は1本最大60分。実読解開始・締切・終了をstatus.mdへ記録し、自動延長しない。時間上限の未完成・未確認は明記。編集は別枠で記録。
必須：article.ja.md、article.en.md、diagrams/の引用付きTeXとSVG、sources.json、citations.json（author-key）、status.md。主張→引用図→直後の説明→直接入力→原典案内。全主要結論にconclusionCoverageを対応。独立した中間命題には図の前に仮定・量化・結論・番号・ページ。図前文献一覧、proof-target、reading-list必須。本文・TeXの引用は共通生成。初稿後に別Astra点検・修正応答を行う。
原稿の主張と実際の確認範囲を明確に区別。外部結果は記述・適用箇所を照合し、証明の再帰検証は不要。未取得・未照合は明記する。公式原典のファイルとハッシュは台帳を参照。
Node: /Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node。npmは不在のためnode scripts/sync-citations.mjsを直起動する。pdftotext/pdfinfo、/Library/TeX/texbin/xelatex と dvisvgm 使用可能。引用スクリプトの --registry で自分のみ処理する。publicへコピーしない。
担当外成果物・共有データ・サイト・PDF版情報を変更しない。内容点検者は原稿を直接修正せず指摘を著者と本部へ返す。074記事の改訂は行わず必要性のみ申し送り。

## 担当
執筆者とは別の点検担当。保存先coordination/catalog-079/reviews/。2記事とoverviewを原典照合し、仮定・量化・全結論、指数・正の損失/端点、各帰結の対象と導出、帰着・直接入力条件、日英/図/引用対応を点検。2論文の包含・別証明・直接利用と074の実引用/適用を確認。まず原典から点検項目を作り、完成記事が届き次第照合。修正後の影響範囲を再点検。原稿ファイルのハッシュを点検記録に保存し、未確認の辺は明記。
