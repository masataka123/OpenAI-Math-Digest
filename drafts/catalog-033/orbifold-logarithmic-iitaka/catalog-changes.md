# 033本部への接続提案（担当A）

参照：033固定commit `fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb`。OI・WV・RAのPDFハッシュをinventoryと再照合。以下は入力の記述と適用・引用の照合であり、入力定理全体の証明検証ではない。共通台帳は変更していない。

| 供給元 | 利用先 | 種別 | 内容・今回の確認 |
|---|---|---|---|
| OI Corollary 6.2, pp.40–41 | WV Theorem 2.1, p.6 | direct | reduced-SNC対数劣加法性。両端の仮定・結論・引用を再照合。WVはprojective形のみ使用 |
| OI Theorem 3.1, pp.17–18 | WV Theorem 3.8 / Proposition 3.9, p.21 | direct | 全period底上の随伴正値性。複素直和因子に整格子を要求せず、ambient latticeでよい点も一致 |
| OI Proposition 2.7, p.10; Lemma 7.1 / Corollary 7.2, pp.43–46 | WV Proposition 9.1, pp.69–70 | consequence | 追加のordinary relative Iitaka構成。固定参照空間の切断比較と、被約境界のentire highest line。主定理の入力と分ける。主張・引用・役割を照合、全証明未検証 |
| OI Lemma 7.4, pp.46–48 | WV Proposition 9.1, pp.69–70 | consequence | 同じ追加構成の境界正規化。受け手の引用・用途を確認。入力の全記述・付値比較は未確認なので「照合済み」にしない |
| OI Corollary 6.2, pp.40–41 | RA Corollary 1.2, p.2; Theorem 7.8 / §7.6, p.50 | consequence | 加法性の下界。境界支持条件・同じ非常に一般のファイバーを照合。RA Theorem 1.1の上界への直接辺は作らない |

## 比較・背景として保持するもの

OI p.5はPHを通常劣加法性の別証明として紹介する。今回はPH本文との全比較をしていないため、`alternative`の紹介以上へ広げない。OI p.41はLAのAlbanese帰着を紹介するが、これをLA→OIの主定理入力に変換しない。OIの§7はBFMTのmoduli line同定を使うと述べ、その別のsemiampleness定理は使わないと明示する（pp.45–46）。BFMT原典の再照合は未実施。

## 034側の引継ぎ

`coordination/catalog-033/SOURCE_NOTES.md`にあるOI→LA、OI→Conditional Kähler models、OI→Kähler abundanceは準備調査からの引継ぎ。今回の担当Aは034受け手を再照合していない。旧参照commit `adc7f1241b42e322a6451854ab7e4b4c146bf78a`と原稿版を保持し、10月6日新版へ置換しない。OI→LA→SchnellをOI→Schnellのdirect辺として記録しない。

結果ごとのURL・版・ページ・照合状況は同じフォルダのsources.jsonに保存した。上表は網羅的な依存一覧ではなく、未記録の辺は未調査である。
