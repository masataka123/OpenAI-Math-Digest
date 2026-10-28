# euclidean-wave 独立内容点検

- 担当：reviewer、gpt-6-astra / high（執筆者author_euclidean_waveとは別、本部MODEL_PROVENANCE参照）。
- 原典：inventory.json の2026-10-25稿、固定commit 7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a、59頁。参照原典のSHA-256はSOURCE_HASHES.json。
- 対象版：EUCLIDEAN_REVIEWED_HASHES.json。日英本文、sources/citations、7組のTikZ/TeX/SVGを固定する。
- 判定：**記事の主張・主要帰着・各結論への説明対応は原典と整合。GT直接入力の仮定照合も追加作業で解消し、記載された確認範囲の第1段階概説として内容点検済み。** 主証明全体の独立な正しさ認定ではない。GT解消を反映した日英本文・sources・citationsを再点検し、最終版ハッシュを更新済み。図の全ハッシュは前回点検時と同一。

## 主張と全結論の対応

| 原典 | 仮定・全結論の照合 | 説明先 |
|---|---|---|
| Thm1.1 p.1 | n≥2、2≤p<∞、s+=max(0,(n−1)/2−n/p)、任意ε>0、I=[1,2]。p=2のみε=0を明示。固定時刻からの1/p未満の利得と無損失端点を区別 | proof-1-step-1/2、sobolev図 |
| Thm1.2 p.4 | pc=2n/(n−1)、固定φ∈Cc∞(Rn\{0})、N≥2、log^(2/pc)、定数の周波数一様性。上界2/pcを最良log指数としない | proof-2-step-1〜4、critical図 |
| Cor9.1 p.27 | sphere局所pc→pc log^(2/pc)、Kδ:Ln空間→Ln方向 log^(4/pc)、任意Kakeya集合のdimH=n | proof-3-step-1/2/3、kakeya図 |
| Cor9.3 pp.28–29 | sphere in Rn / truncated cone in Rn+1、1<a≤∞、finite b>pcかつb>(n+1)a'/(n−1)、強型、b=∞の場合 | proof-4-step-1/2、restriction図 |
| Thm10.1 p.32 | 1≤p≤∞のuniform BR strict次数、p<∞のLp収束。2≤p<∞のmaximal strict次数、AE収束 | proof-5-step-1/2、br図 |
| Thm11.1 p.34 | Gαのr∂rとdr/r、2≤p<∞、α>max(1/2,n(1/2−1/p))、SchwartzからLpへ | proof-6-step-1/2、square図 |
| Cor12.1 p.37 (12.1) | d≥1、pc=2(d+1)/d、1<a≤∞、pc<b<∞、b>(d+2)a'/d、compact paraboloid La→Lb | proof-7-step-1、schrodinger図 |
| 同(12.2) | compact I、N≥2、周波数球B(0,N)、critical log^(2/pc) | proof-7-step-2、同図の局所評価からの直接枝 |
| 同(12.3) | pc<p<∞、p≤r≤∞、exact s=d(1−2/p)−2/r、Besov→Sobolev、r=pの時空間とr=∞の最大 | proof-7-step-3、同図 |
| §9.4 (9.7) pp.31–32 | Nikodym Ln空間→Ln空間同log指数、positive measure基点集合の適切な線分と一様正長さで交わるBorel集合の全次元 | proof-3-step-3。Kakeya方向出力と混同しない |

mainResultsの7結果は原典順で全て図前に主張を置く。conclusionCoverage14項目を実際の説明本文と照合し、BR収束・平方関数p=2と拡張・Schrödinger3結論の説明を確認。日英の仮定・数式・節・未確認範囲は一致する。数式抽出差分の差は順序・句読点・説明語の言語差であり、指数や条件の不一致は確認しない。

## 主証明の接続

原典の§§2–7、特にProp2.2、§4.2、Prop4.2/Lemma4.3、Prop5.1、Lemma6.1/Prop6.3、§7.1–7.2を直接読んで、以下を照合した。

- Gaussianで重み付けた波を足してから二乗し、干渉を保持する正半定値保存流を用いる。rank-one背景とdet(Bfib+αI)=(β+α)α^(n−1)によりμ^(n/(n−1))、つまり波のpc乗を取り出す。
- full Hessianの正値性を仮定しない。spatial blockの正値性、Schur complement、energy補正により不定符号のfull determinantを相殺し、cofactor境界のnull lineを使う。
- Fの初期|τ|=4a上界、観測|τ|=2a下界、ΔF≤Cs^-2 exp(−cs/h)Fを保持。b=2a、r=2bで二円環からlog^-2、pc乗根後にlog^(2/pc)。有限capと非停留位相で周期を除く。
- 図の最後の矢印で「周期除去」に§7.1の引用が足りなかったため追加を依頼。Cite{period-removal}を追加した日英critical図を再点検した。

## 帰結と直接外部入力

- sphere：焦点で距離位相を線形化してpcでスケール相殺。Tao99 Thm1.2 p.2の1<p<2と任意小局所損失をp=pc'で満たす。対角大域からL1→L∞補間。coneは原稿自身のslicing計算を読み、b≥b'とa>b'を確認。
- Kakeya：無作為符号による期待二乗はΣ|Eh_j|²であり、管上の下界から重み付き指示関数和を抑える。初稿の等号に読める表現を著者へ返し修正済み。weighted overlapと双対性から方向最大、可変半径被覆からHausdorff、projective changeからNikodymという異なる含意を分離。
- BR：long-time scaling→shell maximal δ^(−σ)→α>σで総和。線形の双対性・端点可積分核と最大評価の範囲を区別。収束はdensity/最大差の制御で説明。
- Stein square：δ^(α−1)、radius square gain δ^(1/2)、wave cost δ^(−σ)を保持し、Lemma11.3で半径をsquare内に統合。p=2のα/(2α−1)も原典と一致。
- paraboloid：cap rescalingとcritical power相殺、Kim17 Thm5.3 p.10のFourier decayとp=q=pc'を照合。Fresnel経路は周波数球・空間切断・near/far・時間dyadicを保持。
- exact mixed norm：LRS13 Cor1.2 p.3にp0=q0=a∈(pc,p)、対象空間指数p、r≥pを代入。strictly above criticalだからa<pを選べることを明示。
- 外部Tao/Kim/LRSの結果記述と対象稿の適用を確認した。各外部結果自体の証明を再帰的には検証していない。

## 未確認接続を分けた判定

**U-EW-GT（初稿時の未照合→追加点検で解消）**：Theorem A.1の周期Dirichlet可解性は主証明§4.2で使われる。初稿時は外部書籍の記述・全仮定を未照合だったが、追加点検で引用版のTheorems6.14 p.107 /6.19 p.111 /17.14 p.461 /17.26′ p.481、構造条件(i)′(ii)′ p.456を原書誌面で確認した。原稿Appendix A pp.39–40の零次項0・正則性、一様C2評価後のHessian範囲での楕円性/凹性、K近傍で不変なcutoff、局所境界/内部評価の有限被覆との対応を確認。17.26′は強い凹性(17.85)を必要としない。GT→A.1→1.2の記述・適用条件の留保は解消。GT_INPUT_REVIEW.mdとGT_SOURCE_IMAGES.jsonを根拠とする。書籍内の証明を再帰的に検証したという意味ではない。

別種の確認限界：保存流座標変換/cofactorの全成分再計算、全boundary calculation、Appendices B–Eと曲線族の派生結論、外部結果自体の全証明は独立検証していない。これらを本文が全検証済みと誇張していないことを確認した。

## 論文間比較

EW n=3はCWの主張を含むが、EWの本文・参考文献からCWを直接入力と認定しない。074の[62]/[63]はp.27の比較引用であり、関連原典Thm1.1を読み、n=3最大評価のlog改善・n=4集合結論の包含を確認した。077[64]はp.29の比較。結果包含・比較を証明依存の実線に替えない。

## 表示と生成物

7組のTikZ原本の数学的内容と各Citeを本文・原典へ照合。組版、PC/375pxの画面比較、日英PDFは別のSol形式検査と次段階の対象。これらの成功を数学的確認へ置換しない。
