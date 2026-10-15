# カタログ159 制作記録

- 作業先：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、開始時ブランチ：`main`。ブランチ切替なし。
- 現在の状態：第2段階まで完了。サイト組込み・日英冊子PDF生成・公開前検査を実施。commit・push・公開は未実施。以下の第1段階記録は履歴として保持。
- 採用仕様：制作セット1.4、2026-10-11の主張/図補足、2026-10-12の3段階、2026-10-15のAstra指定。
- 公式159：Erdős’s reciprocal-sum conjecture and quasipolynomial Szemerédi bounds。正式分野は第7分野 **Combinatorics**（組合せ論）。公式overview PDF p.18、分野見出しp.17。分類範囲155–192（163は本分野の掲載一覧にない）。
- 単論文：OpenAI, *Quasipolynomial Bounds for Arithmetic Progressions*, September 23, 2026, 198ページ。固定commit・ハッシュ・URLは`inventory.json`。
- 重複検索：同タイトルの一致は公式CONTENTSスナップショットだけ。既存記事なし。paper IDは `quasipolynomial-arithmetic-progressions`。

## 担当と変更範囲

単論文のため本部が記事を兼任する構成とし、モデル指定を確実にするため、本部内の執筆実行を`/root/astra_author`（明示指定`gpt-6-astra`）、原典・内容点検を`/root/astra_review`（同モデル）へ割り当てる。原典と記事の比較は執筆者以外が行う。専門家査読・全証明の独立検証とは呼ばない。ルート担当は台帳、共通表示での技術検査、引継ぎを扱う。指定記録は`model-provenance.json`。

- 執筆者：`drafts/catalog-159/quasipolynomial-arithmetic-progressions/`。
- 点検者：`coordination/catalog-159/reviews/`。
- 本部：上記以外の159専用`coordination`。`drafts/catalog-159/overview/`の日英案内も`astra_review`へ追加割当。
- サイト本部：第2段階の担当。組込み・日英PDF・公開前検査は未着手。

他カタログの未コミット変更が多数ある。開始時状態は`git-status-start.txt`、HEADは`git-head-start.txt`。共通部品、サイト登録、PDF管理、他カタログを変更しない。既存Solの原稿・図・解釈・点検記録を制作根拠に使わない。公式原典、共通表示/引用生成コード、指定見本（034一覧・Schnell、033 Orbifold Iitaka）は利用する。051は見本にしない。

## 構成判断

単論文の入口に公式順1行の共通4列表を設ける。記事内部の全体図で主定理への帰着・反復・帰結を示し、カタログ側には証明を複製しない。複数論文を選ぶ分類や関係図、空の依存表は不要。外部入力の合流は記事図と入力表に役割を分ける。外部/他カタログの関係は`connections.json`に照合範囲を記録し、未調査を「依存なし」としない。

カタログ冒頭のPDF導線は第2段階で日英実ファイルとともに組み込む。第1段階で壊れたPDFリンクや生成済みという表示は置かない。

## 初稿時間

開始21:26:24 JST、締切22:26:24 JST（2026-10-15）。原典確認・執筆・図・自己点検を最大60分。終了は記事`status.md`に記録。後続編集は初稿と分離する。

## 状態

第1段階の内容編集済み。初稿終了21:41:32 JST（15分08秒）。日英記事・3組6図・案内・原典照合・隔離画面比較を完了。最終状態・残作業は`SITE_HQ_HANDOFF.md`と`RELEASE_CHECKLIST.md`へ記録する。内容制作と公開準備を混同しない。

## 第2段階完了

サイト登録・日英PDF（14/15ページ）・公開前検査を完了。結果は[検査報告](stage2/QA_REPORT.md)、次は[第3段階引継ぎ](stage2/HANDOFF_STAGE3.md)。内容ドラフトは第1段階のAstra版をそのまま保持した。公式分野順を第7へ訂正し、subject13がアンカーIDであることを台帳に記録した。公開操作は行っていない。
