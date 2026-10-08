# カタログ033への追記案 — 担当B

このファイルは統合担当向けの提案である。カタログ共通データは変更していない。固定版・確認範囲の詳細は `sources.json` に記録した。

## 論文の役割

- 公式カタログ番号：033。掲載順：02。内部ID：`whole-fiber-variation`。略号：WV。
- 日本語：対数的飯高系から得るparameter fieldに全幾何学的一般ファイバーを双有理的に降下させ、whole-fiber variationを含む下界を得る。
- English: Descends the whole geometric generic fiber birationally to a parameter field extracted from logarithmic Iitaka systems, yielding a lower bound involving whole-fiber variation.
- 初稿の範囲：Theorem 1.1、Corollary 1.2、LA・Tajiを追加で使うCorollary 1.3。§§8–9は主証明とは別の部分調査として記載。

## 依存表に反映できる接続

| 入力 → 利用先 | 種別 | 結果・利用箇所 | 確認状態 |
|---|---|---|---|
| OI → WV Theorem 1.1 | direct | OI Corollary 6.2 pp.40–41 → WV Theorem 2.1 p.6、§2 | 入力の定理文と適用を照合。入力の全証明検証ではない |
| OI → WV Theorem 1.1 | direct | OI Theorem 3.1 pp.17–18 → WV Theorem 3.8 / Proposition 3.9 p.21、Proposition 3.12 p.23 | 制限後のintegral ambient・complex summand・entire top lineを照合 |
| LA → WV Corollary 1.3 | consequence | LA Corollary 11.2 pp.73–74 → WV p.5、BDPPとTajiを併用 | LAは034と同じ2026-09-24版。原定理文・接続を照合。主定理への必須辺にしない |
| RAとWV Theorem 1.1 → WVのsmoothな非負底のvariation上界 | alternative | RA Corollary 1.2 p.2、WV p.5 | smooth、κ(F)≥0、log κ(V)≥0の範囲。負の底・全special baseへ拡張しない |
| PH → WVの制限上の随伴比較 | alternative | PH Lemma 8.4 / Theorem 8.1 → WV Remark 3.17 p.25 | 受け手が代替と明記。本部は担当Dの入力照合を引き継いで対応。B初稿は受け手のみ確認 |
| OI → WV §§8–9の追加結果 | consequence（追加結果内の直接入力） | OI Proposition 2.7、Lemma 7.1、Corollary 7.2、Lemma 7.4 → WV Proposition 9.1 pp.69–70 | 本部で入力記述・用途も照合済み（c04–c06）。全証明は未検証 |

BSなど他の033原稿との未記録の接続は未調査である。依存なしとは判定していない。

## 統合時の注意

- 本部追加の全体図を含め、図は6種類×日英。`diagrams/` の同名 `.svg` と自己完結した `.tex` を組にして扱う。図内の原典引用は各言語35件。
- 本文は既存 `renderDraft` と `articleStructure` で変換可能。節IDは日英一致。
- 現行共通 `render-draft.mjs` の図拡大・TeXリンクは `catalog-034` 固定である。033へ組み込む際のパス調整は統合担当の作業。この担当では共有コードを変更していない。
- サイト全体のAI生成注意書き・原典確認案内・言語切替・MIT帰属表示は共通レイアウトで維持する。初稿の個別記事本文にはサイト用の運用UIを追加していない。
- 一時HTMLでの表示確認は完了。サイト本体への組込み、全体ビルド、公開URLの検査は未実施。

## 本部総括での補足

OI追加入力の記述・使用箇所を結果別に追加照合した。初稿の受け手のみ確認という履歴はsourcesのinitialDraftCheckingに残し、最新の範囲は ../overview/connections.json の c04〜c06 を参照。PHの代替経路は担当Dの入力照合を引き継ぎ、B自身の確認実績へ変更しない。
