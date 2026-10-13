# カタログ本部への接続・組込みメモ

- 公式順2、paper ID `projective-numerical-semiampleness`、正式タイトル `Numerical Semiampleness of Nef Adjoint Divisors`、37頁、2026-10-03版。共通の論文キーはOpenAI26b。本稿内は無略号。
- 役割：通常klt対上のnef随伴に対する数値的半豊富性。最大nef次元→big性をmoving jetsとFrobenius比較で作り、正部分とnef reductionにより一般の場合を扱う。
- 主要結果：Theorem 1.1 p1、Corollary 1.2 p2。途中の独立説明対象：Theorem 5.1 p13、Proposition 7.1 p28、Proposition 8.1 p30。
- 同じX上の数値的代表の存在であり、元のD自身のsemiamplenessでもQ線形同値でもない。original MはXへdescendするnef Q-Cartier因子。MMP中だけ固定b-divisorを使い、そのtraceはnefとは限らない。

## 確認したカタログ横断接続

| 供給元 | 入力結果 | 利用先 | 種類・役割 | 確認 |
|---|---|---|---|---|
| 036順3 Minimal models and Mori fibre spaces for generalized log canonical Q-pairs | Theorem 1.1 p2, §3.3 pp14–15 | 本稿Theorem 2.3 p4; Lemma 3.2 pp6–7; Lemma 8.3 pp31–32 | direct：固定nef b-divisorを保つ停止するMMPの選択 | 固定公式版の記述・適用、Q-factorial generalized kltの場合の維持を照合。供給論文全証明は未検証 |
| 034 Log abundance in characteristic zero | Theorem 1.1 p2 | Lemma 3.2; §7; §8 | direct：通常nef lc/klt随伴の実際の半豊富性 | 記述と利用箇所照合。非零generalized nef項へのabundanceではない |
| 同上 | Lemmas 7.1–7.5 pp45–52 | 本稿Lemmas 4.3–4.7; §5 | direct：moving kernel、数値subadjunction、fixed tの有限Stein被覆 | 外部の記述と本稿の再掲・適用を照合。証明は非再帰検証 |
| 同上 | Theorem 9.1 p62 | 本稿Theorem 6.1 pp20–21; §6.7 pp27–28 | direct/adaptation：有限データFrobenius比較。本稿でも再証明 | 入力の記述と適用を照合。全比較計算は未検証 |

Kähler原稿・数値次元1原稿との追加の依存は未認定。幾何学的な包含や類似だけで矢印を作らない。原稿末尾の参考文献に両者への引用はないが、それだけを「依存なし」の根拠とはしない。

## 組込み案

- 5つの証明節、日英各5 SVG/TeX。共通rendererで検証したアンカー：results, diagram-sources, proof-1 ... proof-5, dependencies, sources。
- 結論の説明：proof-1-step-2（X上代表）、proof-1-step-3（任意の標数0代数閉体）、proof-5-step-1（Cor1.2）。中間主張はtheorem-5-1、proposition-7-1、proposition-8-1。
- PDFには記事全体と5図／言語を含める。冊子PDF・public配置・src/data/site.mjs・PDF管理ファイルは未変更。
- 新規本稿引用はauthor-key。外部LAのキーOpenAI26LA、036順3 OpenAI26c、BCHM10/BDPP13は本部と統一。Fujino BCHM notesはFuj09b（別Fujino論文との衝突を避けた）。
- 既存Schnell・033 Orbifold Iitakaのローカル表示と比較済。独自CSSは追加していない。第2段階では実ルート・右上言語切替・図拡大の導線・日英冊子PDFを検査する。
