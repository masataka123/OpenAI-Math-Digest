# カタログ042 — 準備・制作計画

準備日：2026-10-10（JST）。採用仕様：制作セット **1.3**。現在の状態は**公開準備中（日英サイト・PDF作成済み）**。最新の工程と検査は[PUBLICATION.md](PUBLICATION.md)。

## 今回の範囲

準備依頼の後、ユーザーの「じゃあ記事を作成しましょう.」により、本部が記事担当を兼任して日英記事・図・案内・確認記録を作成した。この初稿段階ではサイト登録・公開を実施しなかった。その後の「じゃあ記事を公開してください.」により本チャットがサイト本部を兼任する。新しいチャット・他チャットへの依頼は行わない。

開始時のGitは `main`、HEAD `876f4366cc4a52b82abfb4eba13d9c710c31ef79`。[Git基準記録](git-baseline.json)を保持。準備時のcoordinationに続き、今回drafts/catalog-042を追加した。変更範囲はこの二つの042フォルダのみで、trackedファイルと他カタログを保持した。

## 公式同定と担当

- 正式なカタログ見出し：**Oka classification for K3 surfaces and other compact complex surfaces**。
- 日本語：K3曲面とその他のコンパクト複素曲面のOka分類。
- CONTENTSの別見出し：**Oka classification for minimal compact complex surfaces: Kodaira dimension zero and class VII**。overviewの名称を表示基準とし、別表記を出典欄に残す。
- 分野：**Algebraic and complex geometry**（公式分野順2番目）。overviewの分野冒頭p.5、042掲載p.6。番号範囲032–069、欠番を除く36項目の順序を台帳に記録。
- 公式参照commit：`fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb`。2026-10-06付overviewとCONTENTSを照合。
- 収録は1本。公式順1：**Every complex K3 surface is Oka**、OpenAI、2026-09-23版、56ページ。
- paper ID：`every-complex-k3-oka`。表示名：**K3 Oka**。042はカタログ番号でありpaper IDとは別。
- 同一論文の既存記事・試作は検索範囲内で見つからなかった。再利用記事なし。書誌の唯一の台帳は [inventory.json](inventory.json)。
- **本部が記事担当を兼任**する。別担当・別チャット・WORKER指示書は設けない。サイト本部の作業は引継ぎとして分離する。

## 制作成果物・責任

日英本文・図・引用・案内・確認記録は作成済み。本チャットがサイト本部として組込み・日英PDF・公開確認を担当する。

| 成果物 | 保存先 | 担当 |
|---|---|---|
| 日英本文 | `drafts/catalog-042/every-complex-k3-oka/article.{ja,en}.md` | 042本部兼記事担当 |
| 引用付きTeX原本・日英TeX/SVG・生成スクリプト・citation-build.json | 同記事の `diagrams/` | 同上 |
| 原典・読解・外部入力・未確認記録 | 同記事の `sources.json` | 同上 |
| 本文・TeX共通引用記録、articleGuides | 同記事の `citations.json` | 同上 |
| 時刻・再生成手順・確認結果 | 同記事の `status.md` | 同上 |
| 短い日英カタログ案内 | `drafts/catalog-042/overview/article.{ja,en}.md` | 042本部 |
| 公式順1行の共通表 | 同overviewの `presentation.json` | 042本部 |
| 外部／他カタログへの結果単位の接続 | 同overviewの `connections.json` | 042本部 |
| 案内の引用・状態記録 | 同overviewの `citations.json`、`status.md` | 042本部 |
| 共通表示への登録・導線・公開資産 | `src/`、`public/`等 | サイト本部（本チャット） |
| 日英PDF（短い案内＋記事の2章） | `public/pdf/catalog-042-{ja,en}.pdf` | サイト本部、日英24ページ生成済み |
| 公開・Actions・公開版確認 | 公開記録 | サイト本部（本チャット） |

記事の作業範囲は `/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-042/every-complex-k3-oka/`。本部は同カタログのoverviewとcoordinationも担当する。記事担当としてpublicへのコピーは行わず、共通ファイル・PDF版情報はサイト本部が順に編集する。

## 制作方針

[ARTICLE_PLAN.md](ARTICLE_PLAN.md)に主張・全結論・証明箇所・説明先の対応案を記した。分類の表は編集用の対応表であり、記事の証明はTeX図と直後の文章を中心にする。

1. FORMAT_CONTRACTを優先し、記事の骨格はSchnell、図前の文献案内はOrbifold Iitaka、カタログ共通4列表は034を参照する。051を見本としない。旧見本に不足する主張欄・引用共通化・結論対応を補う。
2. 中間結果を並べる前にTheorem 1.1の全体図と説明を置く。有理方向0・1・2は原典§9の論理上の分岐であり、サイトの固定3分類ではない。
3. 主定理とclass VII分類の外部入力を混同しない。060の大域球殻定理はCorollary 10.2への帰結用入力であり、K3主定理の入力ではない。
4. 独立した証明節の中間定理には仮定・量化・結論・番号・ページを図前に掲載。冒頭で掲載した主定理・系は参照でよい。
5. 図前に本稿内引用の読み方と、実際に使う外部文献の著者・表示名・略号・用途・版・リンクを生成する。外部入力の照合が未了なら明示し、引用の存在だけで直接依存と認定しない。
6. 単論文の案内も `CATALOGINVENTORYTOKEN` と共通4列表の1行を使用。論文間の空の図、選択UI、記事図の複製を設けない。060等への接続は必要な短い一覧で示す。
7. 原典の主張、編集側で照合した接続、未確認の評価・入力を区別する。専門家査読・全証明の独立検証・形式検証の実施は主張しない。

## 時間管理

初稿開始2026-10-10 15:38:49 JST、締切16:38:49。終了時刻・経過時間は[記事の作業記録](../../drafts/catalog-042/every-complex-k3-oka/status.md)を正とする。原典追加照合・日英執筆・図・検査を同じ60分枠に含めた。準備読解はPREPARATION_NOTES.mdに別記録として保持。追加編集は初稿の終了後に別枠で記録する。

## 受領・サイト本部への引継ぎ

- [内容受領](CONTENT_REVIEW.md)：主要主張・中間主張・全結論・使用条件・未確認。
- [形式受領](FORMAT_REVIEW.md)：共通描画、引用生成、日英対応、033／034とのローカル画面比較。
- [サイト本部引継ぎ](SITE_HQ_HANDOFF.md)：成果物、登録・公開コピー、日英PDFと公開確認の担当。
- [公開チェックリスト](RELEASE_CHECKLIST.md)：記事制作完了と未完了の公開ゲートを分離。

初稿を公開準備完了とは扱わない。全証明の独立検証を行ったとの表示もしない。
