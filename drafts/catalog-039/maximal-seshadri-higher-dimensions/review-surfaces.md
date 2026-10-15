# 曲面記事の他担当による内容照合

- 照合者：高次元記事担当 higher（曲面記事の執筆者とは別）
- 実施日時：2026-10-15 15:24–15:25 JST
- 原典：公式固定commit 1581d4cbdd69a0faf34b2089614fe2a814316a6a、Maximal Seshadri constants on arbitrary polarized surfaces、September 23, 2026、19頁。
- 対象：drafts/catalog-039/maximal-seshadri-surfaces/article.ja.md および article.en.md。担当外ファイルは編集していない。
- 性格：主要主張・核心接続の原典照合。専門家査読・証明全体の独立認定ではない。

## 照合結果

| 項目 | 原典 | 結果 |
|---|---|---|
| 主定理の条件・全結論 | Theorem 1.1 p.2 | 滑らかな整射影複素曲面、ample L、r0(S,L)、全r≥r0、真閉集合可算和の非空補集合、nef類と最大定数。日英一致。 |
| 定数の正規化 | §§1–1.1 pp.1–2 | 曲線による通常等重み定数で分母は重複度の和。不均等な曲線重複度を排除しない。 |
| 節点と圧縮 | Lemma 3.1; Propositions 3.2, 3.4 pp.6–11 | very ampleの二乗、例外曲線二点との横断性、節点二枝、初項四角形、対角圧縮と有限行列の逆移送が対応。 |
| 三角形・有限群 | Lemma 4.1; Proposition 4.2 pp.11–13 | 面積と高さから一変数の消失次数を評価し、指標射影で指数rの格子に移す。局所Jacobian r≠0の用途が正確。 |
| しきい値の量化 | Lemma 4.3; Corollary 4.4 pp.14–15 | r0を固定→各rでt,Gを固定→全正整数k,m with m>kw の順序を保持。 |
| 特殊点から非常に一般へ | Lemma 5.1 p.15 | 固定次数の非零小行列式で非空開性、可算交叉とBaire性で共通の非空配置。 |
| 等重複度の消滅からnefへ | Lemma 5.2; Proposition 5.3 pp.16–17 | 負曲線を小さく引く→正自己交点の有理因子へ摂動→Serre双対・RR→曲線を足し戻し均等jetの矛盾。D自体をnefと仮定していない。 |
| 最大性の独立な上界 | Lemma 5.4 p.17 | jet条件数とh0の比較から有効因子、nefとの交点、二段の極限で上界。下界と分離して説明。 |
| 基礎体の拡張 | Corollary 5.5 p.18 | 非可算・代数閉・標数0を維持。有限生成体への下降、非単射集合の真性、関数体のKへの埋込み、代数的議論の再適用を日英で確認。 |
| 平面稿との関係 | §1 p.2 | 全r≥10のstrict不等式は別稿の比較対象。曲面主定理の直接入力としていない。 |

## 指摘と残る範囲

修正必須の内容不一致は今回の照合範囲では見つからなかった。上の接続は原典の証明本文と比較した。Stacks原典自体の記述・ページ・版は執筆担当のsources/citations記録を参照し、この他担当レビューでは個々の外部PDFを独立再読していない。図の表示・公開組込み・冊子PDFもこのレビューの対象外。

## 照合時点の原稿ハッシュ

- drafts/catalog-039/maximal-seshadri-surfaces/article.ja.md: `68d0039aba3c5c268b1aceb863eea0d004d0e55bae49c8f2ddf6985948b39c0d`
- drafts/catalog-039/maximal-seshadri-surfaces/article.en.md: `b2071d703459c40adcab3cb92dae0d3cf1a7854a1da9291c58f487e622243ddf`
