# critical-wave-three 独立内容点検

- 担当：reviewer、gpt-6-astra / high（執筆者author_critical_wave_threeとは別、本部MODEL_PROVENANCE参照）。
- 原典：inventory.json の2026-09-24稿、固定commit 7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a、165頁。SOURCE_HASHES.jsonに参照ファイルを固定。
- 対象版：CRITICAL_REVIEWED_HASHES.json。日英本文、sources/citations、catalog-changes、7組のTikZ/TeX/SVGをハッシュで特定。
- 判定：**記載された確認範囲の第1段階概説として内容点検済み。内容上の要修正指摘は残っていない。** サイト組込み・表示検査・日英PDF・公開を承認する記録ではない。

## 主張と結論の対応

| 原典 | 照合項目 | 記事の説明先 | 判定 |
|---|---|---|---|
| Thm1.1 p.1 | 全ε>0、Cε、Schwartz、R³×[1,2]、Jε、lossless未扱い | proof-1-step-1〜3、main図 | 一致 |
| Thm3.6 p.18 / Defs3.1–3.3 pp.14–18 | e>0、η∈(0,1)、w=r^(3+η)f^(1−η)、hybrid f≥sqrt(H/ℓ)、初期正則性、時間区間ごとの割当て、Bsの正規化、固定setup、Γcl/hyb≤η/2 | 主張欄→cylinder図→proof-2 | 一致。幅・shear・全error定数の独立再検証は除外 |
| Thm9.1 p.133 / Defs8.1–8.2 | round速度(A,|A|²)、w=r⁴f^(1−η)、rf≥sqrt(H/ℓ)、Γ≤100η、有限収縮とHilbert multiplicity | 主張欄→round図→proof-3 | 一致。二次超曲面の訳語を修正済み |
| Cor10.6 pp.158–159 | 2<p<∞、α>max(0,1−3/p)、L²/L³/L∞の補間指数、低周波とu0/u1の付記 | proof-4-step-1、range図 | 一致 |
| Cor10.7 p.160 | 3≤p<∞、s>1−2/p、0<t<1、最大W^(s,p)拡張、全データのAE初期値収束 | proof-5-step-1、maxwave図 | 両結論に説明あり |
| Thm11.1 pp.160–161 | 3≤p<∞、δ>1−3/p、最大BR、Lp拡張、AE R→∞、p=3で任意正次数 | proof-6-step-1/2、maxbr図 | 最大評価と密度による収束を分離し一致 |
| Cor11.2 pp.161–162 | 1≤p≤∞、strict δBR、半径一様性、p<∞のLp収束 | proof-7-step-1、br図 | 全範囲と収束に説明あり。最大作用素へ双対性を誤適用していない |

conclusionCoverageの8項目を説明本文と照合した。mainResultsの5結果は原典順。独立した中間結果Thm3.6/9.1には図前の仮定・正規化・結論がある。日英の主張・数式・節・保留範囲は対応する。機械的な数式抽出差分も参照し、差は語順・句読点・説明中の言語差であり指数や仮定の脱落は確認しない。

## 核心の帰着と直接入力

- physical sliceはy=−tでありt=0と混同しない。Prop10.4のκ=C H^(−γ)B²、Lemma10.5のH^(−1/2)Σm^(3/2)、Thm9.1のH^(−100η−ζ)e√κを結合し、振幅分解後に任意小power lossへ戻す。時間コピーを直交入力として数えない説明も原典と一致。
- cylinderではcompatible shearsを保つ極値縮約、GWZ/RWによるzero-cost排除、同一canonical nameのentropy余剰の非負性と指定境界での零値、許容領域内の降下、という接続を原典の該当箇所と照合した。
- roundではProp8.8のthin transferだけで終わらず、残る厚い配置にProp9.15とLemma9.16を使う。oT≥4d+min(1−d,m/2)、q=2−2dの二方向降下は原典pp.148–151と一致。
- GWZ Thm1.3（誌面554/PDF4）のscalar wave-envelopeとCW Thm4.1のGaussianによるHilbert値拡張を区別。RW Thm4.1 p.9のnice configurationとCW Thm4.7 pp.50–51のpoint-line dual/probability samplingを区別した記述を確認。
- BHS Prop3.2/3.3 pp.27–28と§3.5 (3.24) p.34を原典で照合。conditional implicationのp≥2n/(n−1)をn=3で満たすことと、linear-radius→squared-radiusの滑らかな因子移送が説明されている。BHSの既知指数範囲Theorem3.9を誤ってp=3へ引用していない。
- 7組のTikZ原本の各箱・矢印の数式、役割、Citeキーを本文・レジストリ・原典と照合。SVGの組版・視認性は著者目視とSol本部の形式/画面検査が別軸で担当する。

## 修正の反映

FINDINGS.mdの数式escape破損、VT制御文字とhyperquadric訳語を修正後の日英本文で再点検。control characterは0件、J/ε/Schwartz/ℓ/λ/entropy記号の意味を再照合。hybrid幅条件・e>0の追加は原典Defs3.1–3.3と一致する。

## 比較と確認限界

- EWのn=3がCWの局所平滑化の結論を含むが、直接入力としない。符号の違いはconjugationで一致。
- 078はp.162の明示的な別証明比較で非入力。074/077の原稿を参考文献と比較箇所から直接入力として認定しない。
- §11.1のsphere→Kakeya連鎖は原典内部の記述を読んだ範囲であり、当該Tao/Wolffの外部含意を原典照合済みとはしていない。記事末尾にこの留保がある。
- 全165頁の証明認定ではない。§§5–7の全条件付き情報量・全境界経路、§8の全共形移送誤差、外部結果自体の全証明は独立検証していない。これらを記事が確認済みと誇張していないことを点検した。

数学的な図の追加目視として、validation/screens/critical-wave-three.ja.html-figure-2.png（円筒）とcritical-wave-three.en.html-figure-3.png（round）を確認した。余剰エントロピーの符号、Bsの分母、二方向降下とΓ上界、引用区別が読み取れることを確認。全図/全幅の表示検査を代替するものではない。
