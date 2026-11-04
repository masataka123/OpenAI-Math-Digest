# Astra執筆担当 — カタログ340

指定：`gpt-6-astra` / `high`。ユーザーの2026-11-04依頼とproduction/MODEL_ROLES.mdに基づき起動時に明示する。指定不可なら代替しない。

最初にPROJECT_PLAN.md、AGENTS.md、production/README.md、MODEL_ROLES.md、ARTICLE_TEMPLATE.md、CATALOG_TEMPLATE.md、FORMAT_CONTRACT.md、CITATIONS.md、RECORDS.mdおよび本フォルダREADME・inventory.jsonを読む。

原典台帳：/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/coordination/catalog-340/inventory.json。公式PDF：同フォルダsources/paper.pdf（抽出テキストpaper.txt）。公式原典から新規制作し、既存Solの数学成果物は根拠にしない。外部の直接入力の記述と適用箇所を確認し、外部証明全体は再帰検証しない。取得不能や未照合は正確に記す。

編集範囲は /Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-340/nearby-lagrangian-counterexample/ および同catalog-340/overview/ のみ。原典の追加取得は当該記事のsources/へ。共通表示・site.mjs・public・pdf-editions・他カタログ・本部台帳を変更しない。content-reviewは別Astra担当が行う。

原典確認・日英執筆・図・自己確認を合わせ初稿最大60分。数学実作業開始時刻・60分締切・終了・未完成を記事status.mdに記録し、本部へ開始を知らせる。下限なし。初稿終了後の編集は別時間として追記。

ユーザーの重点をすべて原典本文と照合する：
1. Theorem 1.1の底多様体、次元、Nの量化、閉性・exact性・smooth embedding、微分同相、零切断との非Hamiltonian同位。予想の定式化とHamiltonianの台の条件。
2. 出発対象、実際の操作と帰着。原稿にない構成法を補わない。
3. 構成物の閉性・exact性・埋込み・底との微分同相への接続。immersion、embedding、diffeomorphism、isotopyを区別。
4. 零切断を区別する障害／不変量／帰着、その適用条件・保存性・構成例の判定・最終矛盾。
5. 主定理の全結論に証明概略と説明先を対応させ、量化や同値関係や底を拡張しない。

成果物：日英article.md、sources.json、author-keyのcitations.json、TeX/TikZ原本・日英TeX/SVG・citation-build.json、status.md。overviewには日英article.md、presentation.json（公式順1行の共通4列表用）、connections.json、citations.json、status.md。数学的案内と表示名訳も担当する。短い入口と第2段階PDF配置計画を用意し、CATALOGINVENTORYTOKENを各言語1回置く。

主要結果→図前の生成文献一覧→証明対象と主張→引用付き図→直後の文章→直接入力と使用箇所→原典読書案内と確認範囲。中間結果が多ければ詳細前に全体図。独立に説明する命題は図前に番号・ページ・仮定・結論。articleGuidesのmainResults/statements/conclusionCoverage等を満たす。

引用は共通記録から本文とTeXへ生成する。引用キーは著者由来。番号・誌面/PDFページ・版を確認し、未確認を作らない。自論文と外部引用を区別。図は操作＋数式の箱、矢印の役割＋引用、日英対応と十分な専用余白。生成は担当内のみ、publicコピー禁止。

Node/XeLaTeX/dvisvgmのパスはvalidation/environment.json。`node scripts/sync-citations.mjs --registry <担当citations.json>` と対象のみの `--check --text-only` を用いる。図コンパイルを本部へ任せる場合も数学原本と再生成手順は担当で完成させ、時間内の未生成を明示する。

受領可能な初稿ができたら直ちに本部へ通知し、別担当の指摘に対応する。修正の影響箇所・追加照合をstatusへ追記。本文で作業時間やローカルパスを見せず、原稿の主張の紹介と編集側の確認範囲を区別する。
