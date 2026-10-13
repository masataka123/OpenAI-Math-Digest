# カタログ052 第1段階制作記録

> 2026-10-13 第2段階を実施。現在の状態・成果物・検査・公開再開手順は [STAGE2_HANDOFF.md](STAGE2_HANDOFF.md) を参照。以下は第1段階の記録。
- 制作セット1.4と2026-10-12までの補足を適用。2026-10-13 JST。
- 作業場所：/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest、既存ブランチ main。ブランチ切替・commit・pushなし。
- 対象：Tangent-bundle splittings and universal covers（接束の分裂と普遍被覆）。CONTENTSの見出しは Tangent splittings and product decompositions。
- 固定公式commit：1581d4cbdd69a0faf34b2089614fe2a814316a6a。
- 構成：multi、公式順2本。過去のprototype/atlas.mjsは1本のみで完成記事ではなく、今回の成果物へ再利用しない。
- 本部執筆：universal-cover-splitting。別担当：split-tangent-integrability。執筆者以外のsource_reviewが主張・接続・日英・図を照合済み（REVIEW_SOURCE.md）。
- 変更範囲：coordination/catalog-052/、drafts/catalog-052/ のみ。036、共通部品、src、public、scripts、PDF管理は変更しない。
- 第1段階の依頼：記事・図・出典・内容点検・日英案内・引継ぎ。サイト組込み、冊子PDF、commit、push、公開は未実施のまま停止。
- PDF担当：第2段階のサイト本部。日英必須。予定対象は案内1章＋記事2章。
- 形式見本：034カタログ、Schnell記事、033 Orbifold Iitaka文献案内。051へ置換しない。
- 制作開始時のGit状態はgit-status-start.txt、HEADはgit-head-start.txt。既存ファイルのハッシュはbaseline-sha256.json。

## 第1段階の終了
- 日英2記事、日英案内、TeX/SVG計8種×2言語、3組の引用記録、内容点検と再開記録を保存。
- 状態：内容編集済み。サイト組込み・日英冊子PDF・公開は未実施。
- 対照図1枚を採用。可積分性を仮定する経路と証明する経路、普通普遍被覆の積と本体の積を対照する。2本を直接依存鎖として結ばず、細部は記事へ。採否理由はoverview/connections.json。
- 初稿：Universal 16分40秒、Integrability 13分08秒。60分上限内で終了。後続の本部編集と混同しない。
- 未確認：KM98 Theorem3.3本文・ページ、Universal付録の別証明、外部結果の全証明・全技術の独立再構成等。各記事とSITE_HQ_HANDOFF.md参照。
- 成果物一覧：CHANGE_MANIFEST.tsv。検査概要：FORMAT_REVIEW.md。再開：SITE_HQ_HANDOFF.md。

## 第2段階の終了（2026-10-13）

公開準備完了。日英6ページ・16 SVG/16 TeXを組み込み、日英28/32ページ・各3章8図のPDFを生成。39 tests・引用・全24冊PDF照合・115ページ126,792内部参照・画面紙面検査が成功。mainのままcommit/push/公開前で停止。詳細・036との共存・変更一覧はSTAGE2_HANDOFF.mdおよびstage2/を参照。
