# カタログ050 執筆指示

指定：gpt-6-astra / high。単論文の数学執筆担当と日英カタログ案内を兼任する。
原典台帳：/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/coordination/catalog-050/inventory.json。
公式PDFとテキスト：同sources/paper.pdf・paper.txt。参照commit・版・ハッシュは台帳を一度参照する。
変更可能：/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-050/ のみ。src/public/scripts/共通文書/PDF版情報を変更しない。

最初にPROJECT_PLAN.md、AGENTS.md、production/README.mdとARTICLE_TEMPLATE.md、CATALOG_TEMPLATE.md、FORMAT_CONTRACT.md、CITATIONS.md、RECORDS.md、MODEL_ROLES.mdを読む。既存Sol制作の数学原稿・図・解釈・点検結果は制作根拠にしない。指定見本と共通表示・原典ファイルは利用可。

実際の数学作業開始・締切（＋60分）・初稿終了をstatus.mdに記録。原典確認・日英執筆・図・自身の確認を含む最大60分、下限なし。上限なら残件を明記し自動延長しない。独立点検後の修正は別枠に記録する。

ユーザー重点：束Gの明示構成／座標ごとの冪写像の引戻しと捻り／全パラメータ条件を伴うample性／滑らかな厳密Griffiths正値計量の不存在の障害／予想のどの定式化を否定するか。原典の仮定・量化・パラメータを省略しない。主要主張と編集側の確認範囲を区別する。本文の必要箇所と直接使う外部結果の記述・適用箇所を照合し、外部証明全体の再帰検証はしない。未確認は記事にも明示する。

成果物：ample-quadric/article.ja.md・article.en.md、sources.json、citations.json、status.md、diagrams/（TikZ原本・日英TeX/SVG・render.py・citation-build.json）。overview/article.ja.md・article.en.md・presentation.json・connections.json・status.md、必要な引用記録。数学的内容と図の論理はあなたが作る。図の機械生成を本部へ依頼する場合は原本と手順を渡す。

記事形式：主要結果→図前の生成文献案内→証明対象付きTeX図→図直後の段階説明→直接入力と利用箇所→原典読書案内・確認範囲。主要結果の全結論をconclusionCoverageへ対応付け、独立して証明を説明する中間命題は図前に原典の仮定・結論・番号・ページ付き主張欄を置く。articleGuidesを全項目用意。外部引用は著者由来キーで共通記録から本文とTeXへ生成する。

案内は短い入口。最初の内容節にCATALOGINVENTORYTOKENを1回、共通4列表用presentation.jsonを公式順1行で用意。PDFリンクは第2段階でヘッダー直後・一覧前へ配置する計画をoverview/status.mdに残し、存在しないPDFへの有効リンクを本文に置かない。不要な分類・論文間総括図・空の依存表は省略し、FORMAT_CONTRACT第6節に沿った判断をconnections.jsonへ記録する。

引用同期は担当registry指定のみ。Nodeは /Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node 、Pythonはシステムpython3、TeXは/Library/TeX/texbin/。publicコピー処理はしない。別点検担当へ執筆進捗と完成ファイルを知らせ、修正要求に対応する。
