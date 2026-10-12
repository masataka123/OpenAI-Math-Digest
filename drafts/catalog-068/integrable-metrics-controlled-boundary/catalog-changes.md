# 総括用提案

## 共通表行
- paperId: integrable-metrics-controlled-boundary
- displayName: Controlled boundary
- result: Theorem 1.1 · p. 2; Theorem 4.3 · pp. 9–10; Theorem 5.1 · p. 11; Theorem 9.2 · pp. 32–35
- claim.ja: −K_Y+Cのstrictな特異計量でs_Cが可積分なら、任意の擬有効MはC上の補正後に有理線形有効。smoothly semipositiveな−K_Xでは固定擬有効誤差を非有界な切断列から除去する。
- claim.en: A strict singular metric on −K_Y+C with integrable s_C makes every pseudoeffective M rationally effective after correction on C. For smoothly semipositive −K_X, an unbounded section sequence permits removal of a fixed pseudoeffective error.
- role.ja: 重み付き近似で補正の台を制御し、Iitaka底から切断を戻す。unweighted計量は実際の多重次数付き因子環の有限生成を別途供給する。
- role.en: Weighted approximation controls correction support and returns sections from an Iitaka base; unweighted metrics separately supply finite generation of actual multigraded divisor rings.

## カタログ内接続
1. OpenAI26b (invariant-anticanonical-indices), Theorem1.1 p.1 → 本稿Proposition9.1 p.32 → Theorem9.2 pp.32–35。kind=direct。自然な反標準線形化、zero value I_T(0)≠0が必要。Theorem9.2ではχ(O_X)≠0と連結トーラスの自明なH^q(O)作用で満たす。入力の記述と使用先・係数(m+1)L shiftを照合、02指数証明全体は未検証。
2. OpenAI26e (metric-descent-contractions), Theorem2.1 p.7 → 本稿§5.3 pp.13–15。kind=alternative。Theorem5.1の主証明§5.2（PT18・weighted strict metric）とは別経路。equidimensional toroidalモデル、degree-zero full adjoint rank一、水平strict patchからunweighted integrable metricとrational correction A0。原典記述と本稿rank/patch照合。toroidal準備と入力のall-valuation証明全体は未検証。
3. 本稿Theorem4.3 pp.9–10 → OpenAI26g (exact-orders-anticanonical) §§3.2–4 pp.11–12。kind=direct。unweighted integrability、通常開集合上smooth/strict、有限個の有理方向。共通εとk0、actual Cartier divisor ringが必要。両原典の記述・使用と本稿proofを担当が照合済み。
4. 本稿Corollary5.6 p.16 → 他稿01/02等への使用は各担当の照合結果を統合。ここでは利用先の全記録を未調査とし、推定矢印を加えない。

本文の06主経路1.1→5.1と4.3→07は異なる出力（支持付き有効性／環の有限生成）。分類はこれを混同しないこと。
