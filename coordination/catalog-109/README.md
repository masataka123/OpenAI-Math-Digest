# カタログ109 — 第1段階

現在は第3段階の公開・反映確認まで完了。[PUBLICATION.md](PUBLICATION.md) が最新の結果と再開案内。本書の段階終了時の記述は履歴として保持する。


制作セット1.4と2026-10-20のモデル分担を適用する。現在の依頼は日英記事・TeX/SVG・引用記録・別担当による内容点検・短い日英カタログ案内まで。サイト組込み・日英冊子PDF・公開は次の指示で進める。

作業先は `/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`。開始時のHEAD・ブランチ・変更は `validation/base-commit.txt`、`validation/branch.txt`、`validation/git-status-start.txt` を参照する。共有作業場のブランチを切り替えず、今回の保存範囲は `drafts/catalog-109/` と `coordination/catalog-109/`。既存ファイルの同一性の基準は `validation/preserved-start.json`。

公式の収録・分野・掲載順・版・取得URL・ページ数・SHA-256の正本は [inventory.json](inventory.json)。公式mainの参照確認はGitHub連携のbranches/main取得による。原典ファイル・取得記録は `sources/` に保存した。既存記事の同タイトル/paper IDは登録データ・原稿・台帳の検索で見つからなかった。

## 担当

モデル・思考量・起動時の明示指定と確認可能範囲は [MODEL_PROVENANCE.json](MODEL_PROVENANCE.json) に一度だけ記録する。希望値と実行メタデータを混同しない。

| 担当 | 役割・書込範囲 |
|---|---|
| `/root` | 本部。台帳、進行、受領、形式・生成物検査、引継ぎ。`coordination/catalog-109/` |
| `/root/author_109` | 数学・アルゴリズムの日英執筆と短い案内、図の論理、出典。`drafts/catalog-109/integer-multiplication-below-n-log-n/` と `overview/` |
| `/root/reviewer_109` | 執筆者とは別の内容点検。原典と全結論・モデル・正確性・計算量・直接入力・日英・図・案内を照合。`CONTENT_REVIEW.md` と `review/` |

仮定・結論・計算モデル・式・適用関係・数学的な日英の修正は執筆担当へ返し、独立点検担当が影響範囲を再確認する。Sol本部は数学の執筆・内容点検を代行しない。既存Sol原稿・図・解釈・点検を根拠に再利用しない。

## 構成と成果物

収録1本の短い入口と記事1本。公式順の共通4列表は `overview/presentation.json` と本文の `CATALOGINVENTORYTOKEN` を使う。カタログの分類・関係図・空の依存表・選択UIは増やさない。接続をまとめる図の採否と理由はAstraの `overview/connections.json` / statusを受領する。証明の図数・独立した中間命題節は原典の論証に従ってAstraが決める。

原稿と図・引用正本は `drafts/catalog-109/`、読解・時間は各 `sources.json` / `status.md`、内容点検は `CONTENT_REVIEW.md`、形式点検は `FORMAT_REVIEW.md`、第2段階への内容引継ぎは `SITE_HQ_HANDOFF.md`、工程別の状態は `RELEASE_CHECKLIST.md` に置く。

初稿の読解・執筆・図・確認は実際の原典読解開始から最大60分。開始/締切/終了と残る未確認は記事statusを参照し、後続修正は別時間で記録する。

## 次段階

第2段階のサイト本部が共通表示へ登録・図を配置し、案内＋記事の2章から日英PDFを生成する。冒頭のPDF導線は公式順表の前に置く計画とし、未生成の実リンクを第1段階の完成物と扱わない。登録後は共通 `npm run catalog:prepare -- --catalog 109` を使い、その実行HANDOFF/画像一覧を確認してPREPARATION_REVIEWへ記録する。第3段階の公開は別指示。

## 第1段階の受領結果

日英記事・3種類の日英TeX/SVG・引用/出典記録・日英案内・共通表データ・接続記録を受領し、別Astraの内容点検と本部の形式/隔離画面確認を完了した。状態は内容編集済み。未確認範囲・機械結果・再開手順は CONTENT_REVIEW.md、FORMAT_REVIEW.md、SITE_HQ_HANDOFF.md を参照する。第1段階末で停止し、サイト/PDF/公開へ進んでいない。

## 第2段階の受領結果

サイト登録・公開用図の配置・日英冊子PDF・共通公開前検査・今回の画面/紙面目視を完了。公開準備完了・未公開。記録と第3段階の再開手順はSTAGE2_HANDOFF.md、目視判定はPREPARATION_REVIEW.md、元の第1段階記録はSITE_HQ_HANDOFF.mdを参照する。
