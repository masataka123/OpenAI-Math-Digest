from pathlib import Path
import json,shutil
A=Path(__file__).resolve().parent;D=A/'diagrams';D.mkdir(exist_ok=True)
base='https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/'
urls={'K4N':base+'Abundance-after-nonvanishing-for-compact-Kahler-fourfolds-September-27-2026/paper.pdf','HLL':'https://arxiv.org/pdf/2508.14634v2','DO':'https://arxiv.org/pdf/2306.00671v4','DHP':'https://arxiv.org/pdf/2205.12205v3','FT':'https://arxiv.org/pdf/2205.14801v7','Sai':'https://arxiv.org/pdf/2204.09026v5','SS':'https://perso.pages.math.cnrs.fr/users/claude.sabbah/MHMProject/mhm_chap16.pdf','FG':'https://www.math.kyoto-u.ac.jp/~fujino/fg-comp-final.pdf','SL':base+'Lifting-sections-from-the-reduced-support-of-an-adjoint-September-27-2026/paper.pdf','LA':base+'Log-abundance-in-characteristic-zero-September-24-2026/paper.pdf'}
ja=r'''# Kähler四次元の非消滅後のabundance：境界の整合と有限次数の持ち上げ

Abundance after nonvanishing for compact Kähler fourfolds — 2026年9月27日版、92頁。公式カタログ034内の掲載順14、記事ID `abundance-after-nonvanishing`。

この原稿は、既に非零切断を持つnefなklt adjointを扱う。正の飯高次元は既存のKähler定理に帰着し、飯高次元ゼロでは、切断の零因子を支えるdlt境界全体の生成と、そこからの切断数の増大を組み合わせて矛盾を導く。

> AI生成の概説初稿。以下は著者の定理と証明戦略の紹介であり、証明全体の独立な正しさの認定ではない。原典の確認箇所と未確認の接続を末尾に示す。数学的な利用には原典を確認されたい。

## 主結果（原典順）

**Theorem 1.1（[K4N, p. 3][K4N]）.** $X$ を正規連結コンパクトKähler複素空間、$\dim X=4$ とする。有効有理Weil因子 $\Delta$ に対し $(X,\Delta)$ がkltで、実際のadjoint $D=K_X+\Delta$ が $\mathbb Q$-Cartierであるとする。$D$ が解析的にnefで $\kappa(X,D)\geq0$ なら、ある $m>0$ に対し $mD$ がCartierで、評価写像

$$H^0(X,\mathcal O_X(mD))\otimes_{\mathbb C}\mathcal O_X\longrightarrow\mathcal O_X(mD)$$

は全点で全射となる。さらに $\kappa(X,D)=0$ なら $\mathcal O_X(mD)\simeq\mathcal O_X$ とできる。

元の $X$ に射影性・$\mathbb Q$-factoriality・数値次元の条件はない。非消滅は結論ではなく仮定である。「実際のadjoint」は、係数を払う $r$ に対する $(\omega_X^{[r]}\otimes\mathcal O_X(r\Delta))^{**}$ とそのテンソル冪で定めた正則線束を指す（式(2.1), p. 6）。$K_X$ と $\Delta$ を個別に $\mathbb Q$-Cartierとする必要はない。比較するのはこの線束そのものであり、数値類の一致だけではflatな差を排除できない。

**Theorem 1.2（Supported lifting；[K4N, p. 5][K4N]）.** $(V,B)$ を正次元の正規既約コンパクトKähler dlt対、$B$ を有効有理境界、$A=K_V+B$ を実際の $\mathbb Q$-Cartier adjointとする。有効非零の有理 $\mathbb Q$-Cartier因子 $P$ が

$$P\sim_{\mathbb Q}A,\qquad\operatorname{Supp}P=\operatorname{Supp}\lfloor B\rfloor$$

を満たすとき、被約部分空間 $S=\lfloor B\rfloor$ **全体**への実際の制限 $A|_S$ がsemiampleなら $\kappa(V,A)\geq1$ である。この定理は任意次元であり、$A$ のnefnessも $V$ のQ-factorialityも仮定しない。台の等号は重要で、単なる包含に置き換えない。

## Theorem 1.1：正の飯高次元と、境界を持つゼロ次元の場合

![主定理の境界への帰着](diagrams/abundance.ja.svg)

$\kappa(X,D)\geq1$ では [DHP, Theorem 6.1, p. 43][DHP] のcrepantなordinary Q-factorial Kählerモデルを取る。元の対がkltなので出力もkltとなり、[HLL, Theorem 4.1, pp. 17–18][HLL] が半豊富性を与える。全切断が元の $X$ からの引戻しであることをnormalityと射影公式で確認し、評価全射を $X$ へ降ろす（[K4N, Proposition 5.2, p. 34][K4N]）。これは有理モデル上の生成だけで終了する議論ではない。

残りでは非零切断 $s_0$ の正規化零因子 $M=\operatorname{div}(s_0)/m_0$ を取る。$M\neq0$ と仮定し、log resolution上でその厳密変換と例外素因子の係数を1へ上げる。Lemma 5.3（pp. 34–35）の有効代表は、crepant境界を $G_Y$ として $P_Y=p^*M+(B_Y-G_Y)$ である。台はちょうどfloorで、例外因子との比較が飯高次元ゼロを保つ。

ここで射影的なMMP段階の行先がKählerであることは、元の空間の射影性からは得られない。原稿は [DHP, Theorem 7.2, p. 46][DHP] のsupported constructionに沿い、三次元のfloor収縮（Proposition 3.1, p. 9）とその周囲への延長（Proposition 4.3, p. 24）を用意する。後者ではconormal層の消滅と**有限の解析的thickening**を使う。Claim 5.4（pp. 37–42）は降下したBott–Chern類についてnefness、正のHermitian形式を支配するcurrent、全正次元部分空間上の正の最高次交点を確認し、行先のKähler性へつなぐ。これらの解析的収縮の詳細は初稿で全検証した範囲に含めない。

Proposition 5.1（p. 33）の出力はordinary Q-factorial Kähler dlt四次元対 $(V,B)$、nefな $A=K_V+B$、非零 $P\sim_{\mathbb Q}A$、$\operatorname{Supp}P=\operatorname{Supp}S$、$\kappa(V,A)=0$ である。$P$ が消えないことには**元の $D$ のnefness**を使う。消えたなら共通解消上の $M$ の引戻しが非零有効・nef・例外的となり、negativityに矛盾する（pp. 45–46）。

さらにLemma 5.6の特別な射影的解消は、厳密境界と例外台の大域的に滑らかで異なるSNC成分、1未満の例外crepant係数、および異なる厳密floor成分の交差の各像の一般点での同型性を持つ。Theorem 6.1（p. 46）は**この解消条件の下で** $A|_S$ を生成する。Theorem 1.2が $\kappa(V,A)\geq1$ を与え、矛盾する。従って $M=0$ であり、normalityによって $s_0$ は全点で消えず、元の正則線束を自明化する（§13, pp. 88–89）。

## 境界全体の生成：成分ごとのabundanceから整合する切断へ

![residue linkと境界全体の生成](diagrams/floor.ja.svg)

Proposition 6.3（pp. 48–50）は、添字付き交差から得られるnormal Kähler dlt strataのadjointを、同じ周囲の正則線束の制限として同定する。十分可除な偶数次数で反復residueの符号を消し、すべての下位stratumで一致する切断は被約floor全体へ一意に降下する。三次元strataにはsmall modelを介して [DO, Corollary 1.3, p. 4][DO] を適用し、下位strataの生成はその制限で得る（K4N §7.1, pp. 50–51）。成分上の生成だけでは交差上の一致は従わない。

Proposition 7.3（pp. 56–58）は、stratumのfloor上の切断を親へ延長する条件を、多くても一つのresidue比較へ帰着する。Lemma 7.1（pp. 51–52）の $R^1f_*\mathcal O_T(-\lfloor G\rfloor)$ のtorsion-freenessが、一般ファイバーでの一致を全パラメータへ広げる。比較が必要な場合、摂動したMori収縮の一般 $\mathbb P^1$ ファイバーに係数1の二つのmarkingが現れる。同じ素因子から二点が来る場合は、その**正規化のnormal finite Stein空間**の次数2交換を使う。共通グラフ上で一致するのはmeromorphic pluriformsの中の可逆adjoint部分層であり、抽象的なQ線形同値だけではない。

非射影的曲面には、全双自己写像のpluriform作用が有限という主張は使えない。§8は三次元strataのlinkとその逆写像から生成されるgroupoidに限定する。同じ周囲のKähler形式の制限から、滑らかな極小曲面上に $c_Z^2>0$ を持つ類を作り、linkがこれをNéron–Severi実空間を法として保つことをLemma 8.2（p. 60）で示す。代数次元ゼロではLemma 8.3（p. 61）が体積形式の指標の位数に $\varphi(n)\leq b_2$ を与え、代数次元1では楕円ファイブレーションへの作用を別に処理する。Proposition 8.1（p. 59）の結論は、**各固定次数**の切断空間上での有限像であり、groupoid自体の有限性ではない。

Proposition 9.2（pp. 64–65）は点から三次元strataまで帰納する。下位の整合集合をまず延長し、曲線・曲面段階では有限個の移送のnorm積を取って不変性を課す。Lemma 9.1は、曲面linkがfloor曲線を点へ潰す場合も下位residueを保存する。有限個の非消滅条件を同時に満たす切断を有限個の超平面の回避で選び、生成性を保つ。最後にProposition 6.3でfloorへ降ろす。この時点では周囲 $V$ への新しい切断はまだ作っていない。

## Theorem 1.2：障害を全有限次数で消し、切断数を増大させる

![有限次数持ち上げと切断数の増大](diagrams/lifting.ja.svg)

生成された制限 $\mathcal O_V(G)|_S$（$G=qP$）から $f:S\to T=\mathbb P^b$ と実際の同型 $\mathcal O_V(G)|_S\simeq f^*\mathcal O_T(1)$ を作る。各compact fiberの近傍でroot pairと完全な正規化巡回被覆を取り、$E$ を被約Cartier因子、$I=\mathcal O_Z(-E)$、$g:E\to U$ とする。Proposition 10.2（p. 68）の目標は

$$g_*(I^j/I^{j+k+1})\longrightarrow g_*(I^j/I^{j+k})\quad\text{surjective}\qquad(j\in\mathbb Z,\ k\geq1).$$

これらは $E$ の台上の複素ベクトル空間の層として扱う。厚み付き空間から $U$ への正則写像や、その押出しの $\mathcal O_U$-coherenceは仮定しない。切断germを持ち上げる近傍は次数ごとに変わってよい。

第二のcanonical rootとresidueにより、Proposition 10.4（pp. 71–72）は障害の属する $R^1g_*A_{-a}$ をSNC台の $R^1h_*\omega_H$ へ**split injection**で入れる。導来圏でのretractionがあるため、特殊パラメータに台を持つ類も失われない。Proposition 11.1（p. 75）は後者を右filtered $\mathcal D$-moduleの最低段 $F_0\mathcal M^1$ と同定する。smoothなSNC strata上のconstant real Hodge moduleに [Sai, Theorem 1, p. 1][Sai] を適用し、有限のstrict filtrationとpure商を組み立てる。任意のmixed Hodge moduleのKähler直像定理を一括して仮定してはいない。

[SS, Theorem 16.3.10, 印刷p. 734／章PDF p. 16][SS] のvanishingを実際のfiltered componentへ移す比較がLemma 11.2（pp. 80–81）である。その後、Corollary 11.3（pp. 81–82）は射影的パラメータ空間上で

$$\operatorname{Hom}(N,\ker\sigma)=0,\qquad\sigma:F_0\mathcal M^1\otimes T_T\longrightarrow\operatorname{gr}^F_1\mathcal M^1$$

をすべてのampleな $N$ に対して得る。kernelがtorsionを持つ場合も含む。

短い次数が持ち上がると仮定すると、現在の接続準同型はLaurent graded algebra上の次数 $k$ の導分 $\delta_k$ になる（Lemma 12.1, pp. 82–83）。Lemma 12.2（pp. 84–85）のadjugate identityは、パラメータ変換のJacobianの**逆行列を取らず**に、導分のbase座標上の値からsymbol kernelへの写像を作る。任意に指定した $t_*$ 上で非分岐となる射影的な座標冪被覆と一つのcompact SNC graphをProposition 10.5（pp. 73–74）で用意する。§12.3（pp. 86–87）ではample lineからkernelへのこの写像をvanishingでゼロにし、$t_*$ で降下する。$t_*$ は任意なので、特殊な台の障害も消える。

次に同じ局所恒等式の零階部分とsplit injectionに戻って負次数の障害を消し、可逆Laurent frameの導分則から全整数次数へ広げる。これで有限持ち上げの帰納が閉じる。最後に巡回不変部分を取ると、$J_j=\mathcal O_V(-\lceil jG/r\rceil)$ のcoherentな層商が現れ、$F_j=f_*(J_j/J_{j+1})$ は $F_{j-r}=F_j\otimes\mathcal O_T(1)$ を満たす。Serre vanishingを適用するのはこのcoherentな層商である。有限filtrationのEuler標数から商切断が少なくとも $N-C$ 個に増え、周囲への最後の持ち上げの損失は固定値 $h^1(V,\mathcal O_V)$ 以下となる。従ってある次数に独立な二切断が生じ、$\kappa(V,A)\geq1$ となる（pp. 87–88）。無限thickeningの収束を示す必要はない。

## 外部入力とカタログ内の関係

- **[HLL]** Theorem 4.1（v2, pp. 17–18）：Q-factorial Kähler klt対の正の飯高次元での半豊富性。四次元以下では無条件。K4N Proposition 5.2（p. 34）で使用。
- **[DHP]** Theorem 6.1（v3, p. 43）とTheorem 7.2（p. 46）：crepant dltモデルとsupported四次元プログラム。K4N §§5.1, 5.3で使用。後者のfloor収縮・行先のKähler性はK4N §§3–4・Claim 5.4の構成と合わせて説明する。
- **[DO]** Corollary 1.3（v4, p. 4；実際のadjointの規約はpp. 5–6）：nef lc Kähler三次元adjointの半豊富性。K4N §7.1（pp. 50–51）のstrataに適用。
- **[FT]** Theorem 2.9・Proposition 2.11（v7, pp. 6–7）：滑らかなKähler sourceからの標準層直像のtorsion-freenessと局所Kähler性。K4N Lemma 7.1、Proposition 10.4で使用。
- **[Sai] / [SS]** 上記constant-sourceのstrict直像とprojective vanishing：K4N §11の入力。純粋実Hodge moduleのfiltered比較はK4N自身のLemma 11.2。
- **[FG]** Theorem 1.1（最終著者稿p. 1）：projective lc対のsemiample adjointのpluricanonical表現の有限性。K4N §8.1（p. 59）では射影的曲面にのみ適用。
- **[SL]・[LA]** はK4N p. 6で射影的背景として引用される。K4Nの二つの解析的境界定理への直接入力の辺は作らない。Swapnajit Dasのslc Kähler三次元abundanceも、原稿p. 5が明記するように先行手法であり、その主定理を入力としていない。

## 原典・確認範囲

出典は [K4N固定版PDF][K4N]、commit `adc7f1241b42e322a6451854ab7e4b4c146bf78a`。SHA-256・詳細頁・外部版は `sources.json`。頁は特記しない限り印刷PDF頁。GitHubのPDFリンクは頁位置を保持しないため、記載頁と番号を用いる。

編集側は主定理、actual-line規約、supported modelの準備と台の生存、strataのadjunctionと降下、二つのmarkingの比較、共通Kähler類と固定次数有限像、norm積の帰納、split residue insertion、filtered直像とvanishingの記述・接続、adjugate identityの記述と障害消滅への適用、層の増大と最終組立てを読んだ。上記のHLL・DHP・DO・FT・Sai・SS・FGの入力の記述と使用箇所を照合した。

**未確認**：解析的収縮の §§3–4 とClaim 5.4の全構成、relative MMP・rationality・current降下の全外部結果、root近傍の全gluingとfunctorial principalization、§11の実Hodge module間のfiltered比較の独立な再構成、Lemma 12.2の全Čech微分計算、外部定理自体の証明。これらの接続を独立に検証済みとはしない。

**版の注意**：Sai v5 Theorem 1の表示ではweightが $j-n$ だが、K4N p. 78はconstant moduleの規約と恒等写像を根拠に符号の誤記と扱う。この相違を確認記録に残した。SSの照合は参照時のVersion 2の章PDFであり、固定commitの資料ではない。日英の図・数式・リンクの実施確認は `status.md` に記録し、サイト組込み後の画面確認は本部へ引き渡す。
'''
en=r'''# Abundance after nonvanishing on Kähler fourfolds: compatible boundaries and finite lifting

Abundance after nonvanishing for compact Kähler fourfolds — manuscript dated September 27, 2026, 92 pages. Position 14 within official catalog 034; article ID `abundance-after-nonvanishing`.

The manuscript treats nef klt adjoints already possessing a nonzero section. Positive Iitaka dimension reduces to an existing Kähler theorem. In Iitaka dimension zero, generation on the entire supported dlt boundary and subsequent growth of ambient sections give a contradiction.

> AI-generated exposition draft. This describes the authors' theorems and proof strategy, without independently certifying the entire proof. The passages checked and unresolved connections are specified below. Consult the original manuscript before mathematical use.

## Main results, in source order

**Theorem 1.1 ([K4N, p. 3][K4N]).** Let $X$ be a normal connected compact Kähler complex space of dimension $\dim X=4$. Let $\Delta$ be an effective rational Weil divisor such that $(X,\Delta)$ is klt and the actual adjoint $D=K_X+\Delta$ is $\mathbb Q$-Cartier. If $D$ is analytically nef and $\kappa(X,D)\geq0$, there is an integer $m>0$ such that $mD$ is Cartier and

$$H^0(X,\mathcal O_X(mD))\otimes_{\mathbb C}\mathcal O_X\longrightarrow\mathcal O_X(mD)$$

is surjective everywhere. If $\kappa(X,D)=0$, one can moreover arrange $\mathcal O_X(mD)\simeq\mathcal O_X$.

There is no projectivity, $\mathbb Q$-factoriality or numerical-dimension assumption on the original $X$. Nonvanishing is a hypothesis. The “actual adjoint” uses the holomorphic line $(\omega_X^{[r]}\otimes\mathcal O_X(r\Delta))^{**}$, for a coefficient-clearing index $r$, and its tensor powers (equation (2.1), p. 6). Neither $K_X$ nor $\Delta$ need be separately $\mathbb Q$-Cartier. Comparisons concern this line itself: equality of numerical classes would leave a possible flat-line difference.

**Theorem 1.2 (Supported lifting; [K4N, p. 5][K4N]).** Let $(V,B)$ be a normal irreducible compact Kähler dlt pair of positive dimension, with effective rational boundary and actual $\mathbb Q$-Cartier adjoint $A=K_V+B$. Suppose an effective nonzero rational $\mathbb Q$-Cartier divisor $P$ satisfies

$$P\sim_{\mathbb Q}A,\qquad\operatorname{Supp}P=\operatorname{Supp}\lfloor B\rfloor.$$

If the actual restriction $A|_S$ to the **entire** reduced subspace $S=\lfloor B\rfloor$ is semiample, then $\kappa(V,A)\geq1$. This theorem is dimension-free and assumes neither nefness of $A$ nor Q-factoriality of $V$. The support equality is essential and is not replaced by inclusion.

## Theorem 1.1: positive Iitaka dimension and the supported zero-dimensional case

![Reduction of the main theorem to the boundary](diagrams/abundance.en.svg)

For $\kappa(X,D)\geq1$, take the crepant ordinary Q-factorial Kähler model of [DHP, Theorem 6.1, p. 43][DHP]. Since the original pair is klt, so is the output; [HLL, Theorem 4.1, pp. 17–18][HLL] supplies semiampleness. Normality and the projection formula show that every section is pulled back from $X$, and evaluation surjectivity descends to $X$ ([K4N, Proposition 5.2, p. 34][K4N]). Generation on a birational model alone is not the endpoint.

In the remaining case, let $M=\operatorname{div}(s_0)/m_0$ be the normalized zero divisor of a nonzero section. Suppose $M\neq0$. On a log resolution, raise the coefficients of its strict transforms and the exceptional primes to one. With $G_Y$ the crepant boundary, the effective representative in Lemma 5.3 (pp. 34–35) is $P_Y=p^*M+(B_Y-G_Y)$. Its support is exactly the floor, and comparison with exceptional divisors preserves Iitaka dimension zero.

Kählerness of the targets of projective MMP steps cannot be obtained from projectivity of the original space. Following the supported construction of [DHP, Theorem 7.2, p. 46][DHP], the manuscript prepares threefold floor contractions (Proposition 3.1, p. 9) and their extension to the ambient space (Proposition 4.3, p. 24). The latter uses conormal vanishing and **finite analytic thickenings**. Claim 5.4 (pp. 37–42) verifies nefness of the descended Bott–Chern class, a current dominating a positive Hermitian form, and positive top intersections on every positive-dimensional subspace, thereby obtaining a Kähler target. The full analytic contraction constructions are outside the checks completed for this draft.

Proposition 5.1 (p. 33) produces an ordinary Q-factorial Kähler dlt fourfold $(V,B)$, a nef $A=K_V+B$, nonzero $P\sim_{\mathbb Q}A$, $\operatorname{Supp}P=\operatorname{Supp}S$, and $\kappa(V,A)=0$. Survival of $P$ uses **nefness of the original $D$**: if it disappeared, the pullback of $M$ on a common resolution would be nonzero, effective, nef and exceptional, contradicting negativity (pp. 45–46).

Lemma 5.6 also gives a special projective resolution: its strict boundary and exceptional support have globally smooth distinct SNC components, exceptional crepant coefficients are below one, and it is generically an isomorphism on the image of each intersection component of distinct strict floor primes. **Under this resolution condition**, Theorem 6.1 (p. 46) generates $A|_S$. Theorem 1.2 then yields $\kappa(V,A)\geq1$, a contradiction. Thus $M=0$; normality makes $s_0$ nowhere vanishing, and it trivializes the original holomorphic line (§13, pp. 88–89).

## Generation on the entire floor: from componentwise abundance to compatible sections

![Residue links and generation on the entire floor](diagrams/floor.en.svg)

Proposition 6.3 (pp. 48–50) identifies adjoints on normal Kähler dlt strata indexed by intersections with restrictions of one ambient holomorphic line. Sufficiently divisible even degrees remove iterated-residue signs. Sections agreeing on every subordinate stratum descend uniquely to the entire reduced floor. Apply [DO, Corollary 1.3, p. 4][DO] to three-dimensional strata through small models; lower strata inherit generation by restriction (K4N §7.1, pp. 50–51). Componentwise generation does not supply agreement on intersections.

Proposition 7.3 (pp. 56–58) reduces extension from the floor of a stratum to at most one residue comparison. Torsion-freeness of $R^1f_*\mathcal O_T(-\lfloor G\rfloor)$ in Lemma 7.1 (pp. 51–52) extends generic-fibre matching over every parameter. When a comparison is necessary, a general $\mathbb P^1$ fibre of a perturbed Mori contraction has two coefficient-one markings. When both come from one prime, use the degree-two exchange on the **normal finite Stein space of its normalization**. On a common graph, the invertible adjoint subsheaves inside meromorphic pluriforms agree; abstract Q-linear equivalence would not suffice.

On nonprojective surfaces, the action of all birational self-maps on pluriforms need not have finite image. Section 8 restricts to the groupoid generated by links of three-dimensional strata and their inverses. Restrictions of a single ambient Kähler form give classes $c_Z^2>0$ on smooth minimal surfaces. Lemma 8.2 (p. 60) shows that links preserve these classes modulo the real Néron–Severi space. In algebraic dimension zero, Lemma 8.3 (p. 61) bounds volume-character orders by $\varphi(n)\leq b_2$; algebraic dimension one is treated separately through the elliptic fibration. Proposition 8.1 (p. 59) asserts finite image on section spaces in **each fixed degree**, not finiteness of the groupoid.

Proposition 9.2 (pp. 64–65) proceeds from points to three-dimensional strata. Extend an already compatible lower collection, then in the curve and surface stages take norm products of finitely many transports to enforce invariance. Lemma 9.1 preserves lower residues even when a surface link contracts a floor curve to a point. Avoiding finitely many hyperplanes chooses a section satisfying all required nonvanishing conditions, preserving generation. Proposition 6.3 finally descends the tuples to the floor. No new ambient section on $V$ has yet been constructed.

## Theorem 1.2: killing every finite obstruction and growing sections

![Finite-order lifting and section growth](diagrams/lifting.en.svg)

The generated restriction $\mathcal O_V(G)|_S$, with $G=qP$, gives $f:S\to T=\mathbb P^b$ and an actual identity $\mathcal O_V(G)|_S\simeq f^*\mathcal O_T(1)$. Near each compact fibre, a root pair and a full normalized cyclic cover produce a reduced Cartier divisor $E$, with $I=\mathcal O_Z(-E)$ and $g:E\to U$. Proposition 10.2 (p. 68) seeks

$$g_*(I^j/I^{j+k+1})\longrightarrow g_*(I^j/I^{j+k})\quad\text{surjective}\qquad(j\in\mathbb Z,\ k\geq1).$$

These are sheaves of complex vector spaces on the underlying support of $E$. No holomorphic map from the thickening to $U$, or $\mathcal O_U$-coherence of its pushforward, is assumed. Neighborhoods for lifting a section germ may depend on the order.

A second canonical root and residue give a **split injection** from the obstruction sheaf $R^1g_*A_{-a}$ into $R^1h_*\omega_H$ for an SNC support (Proposition 10.4, pp. 71–72). The derived retraction retains classes supported at special parameters. Proposition 11.1 (p. 75) identifies the latter with the lowest step $F_0\mathcal M^1$ of a right filtered $\mathcal D$-module. Apply [Sai, Theorem 1, p. 1][Sai] to constant real Hodge modules on smooth SNC strata and assemble a finite strict filtration with pure quotients. The proof does not assume a blanket Kähler direct-image theorem for arbitrary mixed Hodge modules.

Lemma 11.2 (pp. 80–81) supplies the filtered comparison needed to transfer vanishing from [SS, Theorem 16.3.10, printed p. 734 / chapter PDF p. 16][SS]. Corollary 11.3 (pp. 81–82) then gives, on the projective parameter space,

$$\operatorname{Hom}(N,\ker\sigma)=0,\qquad\sigma:F_0\mathcal M^1\otimes T_T\longrightarrow\operatorname{gr}^F_1\mathcal M^1$$

for every ample $N$, including torsion in the kernel.

Assuming shorter lifting orders, the current connecting map becomes a degree-$k$ derivation $\delta_k$ on the Laurent graded algebra (Lemma 12.1, pp. 82–83). The adjugate identity in Lemma 12.2 (pp. 84–85) turns its values on base coordinates into a map to the symbol kernel **without inverting the Jacobian** of the parameter change. Proposition 10.5 (pp. 73–74) supplies a projective coordinate-power cover, unbranched over an arbitrarily prescribed $t_*$, and one compact SNC graph. Section 12.3 (pp. 86–87) kills the resulting ample-line map by vanishing and descends the result at $t_*$. Since that point was arbitrary, special-support obstructions disappear as well.

The order-zero part of the same local identity and the split injection then kill negative-degree obstructions. The derivation rule for an invertible Laurent frame extends this to every integer degree, closing finite lifting induction. Finally cyclic invariants yield coherent layer quotients of $J_j=\mathcal O_V(-\lceil jG/r\rceil)$. Their direct images $F_j=f_*(J_j/J_{j+1})$ satisfy $F_{j-r}=F_j\otimes\mathcal O_T(1)$. Serre vanishing is applied to these coherent layer quotients. Euler characteristics of finite filtrations give at least $N-C$ quotient sections, and the final loss in passing to ambient sections is bounded by the fixed $h^1(V,\mathcal O_V)$. Some degree therefore has two independent sections, proving $\kappa(V,A)\geq1$ (pp. 87–88). Convergence of an infinite thickening is unnecessary.

## External inputs and catalog relations

- **[HLL]** Theorem 4.1 (v2, pp. 17–18): semiampleness for Q-factorial Kähler klt pairs of positive Iitaka dimension, unconditional through dimension four. Used in K4N Proposition 5.2 (p. 34).
- **[DHP]** Theorem 6.1 (v3, p. 43), Theorem 7.2 (p. 46): crepant dlt models and the supported fourfold program, used in K4N §§5.1, 5.3. Its floor contraction and Kähler targets are discussed together with K4N §§3–4 and Claim 5.4.
- **[DO]** Corollary 1.3 (v4, p. 4; actual-adjoint conventions pp. 5–6): semiampleness of nef lc Kähler threefold adjoints, applied to strata in K4N §7.1 (pp. 50–51).
- **[FT]** Theorem 2.9, Proposition 2.11 (v7, pp. 6–7): canonical direct-image torsion-freeness from smooth Kähler sources and local Kählerness, used in K4N Lemma 7.1 and Proposition 10.4.
- **[Sai] / [SS]** Constant-source strict direct image and projective vanishing as above: inputs to K4N §11. The filtered comparison for pure real Hodge modules is K4N's own Lemma 11.2.
- **[FG]** Theorem 1.1 (final author manuscript, p. 1): finiteness of pluricanonical representations of projective lc pairs with semiample adjoint. Applied only to projective surfaces in K4N §8.1 (p. 59).
- **[SL] and [LA]** are cited as projective context on K4N p. 6, not as direct inputs to its two analytic boundary theorems. Swapnajit Das's slc Kähler threefold abundance is likewise prior methodological work; K4N p. 5 explicitly excludes its main theorem as an input.

## Sources and verification scope

The source is the [fixed K4N PDF][K4N], commit `adc7f1241b42e322a6451854ab7e4b4c146bf78a`. The SHA-256, detailed pages and external versions are in `sources.json`. Unless specified otherwise, page references use printed PDF pages. GitHub links do not retain page positions; use the stated page and result numbers.

The editors read the main statements, actual-line conventions, supported-model preparation and survival of the support, adjunction and descent on strata, two-marking comparisons, the common Kähler class and fixed-degree finite images, norm-product induction, split residue insertion, filtered direct-image and vanishing statements and connections, the adjugate identity and its application to obstructions, layer growth, and final assembly. The stated HLL, DHP, DO, FT, Sai, SS and FG inputs were compared with their source statements and use sites.

**Unresolved:** complete analytic contraction constructions in §§3–4 and Claim 5.4; all external relative MMP, rationality and current-descent inputs; all root-neighborhood gluing and functorial principalization; independent reconstruction of the filtered comparison between real Hodge-module theories in §11; the full Čech differentiation calculation in Lemma 12.2; and proofs of external theorems. These connections are not claimed to be independently verified.

**Version note:** Sai v5 Theorem 1 displays weight $j-n$, whereas K4N p. 78 treats this as a sign typo, using constant-module conventions and the identity map. This discrepancy is retained in the verification record. SS was checked in the Version 2 chapter PDF available on the access date, not a fixed-commit source. Completed bilingual diagram, formula and link checks appear in `status.md`; screen verification after site integration remains for the central editor.
'''
for lang,t in [('ja',ja),('en',en)]:
 (A/f'article.{lang}.md').write_text(t+'\n'+'\n'.join(f'[{k}]: {v}' for k,v in urls.items())+'\n')
def n(ja,en,math):return dict(ja=ja,en=en,math='$'+math+'$')
def e(ja,en,*refs):return dict(ja=ja,en=en,refs=[{'key':a,'label':b} for a,b in refs])
spec={'sources':urls,'diagrams':[
{'id':'abundance','nodes':[n('非消滅後のnefな実際のadjoint','An actual nef adjoint after nonvanishing',r'D=K_X+\Delta,\quad\kappa(X,D)\geq0,\quad\dim X=4'),n('正の飯高次元を処理し、残りで零因子を取る','Settle positive Iitaka dimension; take a zero divisor in the remainder',r'\kappa=0,\quad M=\operatorname{div}(s_0)/m_0;\qquad M\ne0\ \text{assumed}'),n('台が消えないsupported nefモデル','A supported nef model with surviving support',r'A=K_V+B\sim_{\mathbb Q}P\ne0,\quad\operatorname{Supp}P=\operatorname{Supp}S,\quad\kappa(A)=0'),n('境界生成と持ち上げの矛盾','Boundary generation and lifting give a contradiction',r'A|_S\ \text{semiample}\ \Longrightarrow\ \kappa(A)\geq1;\qquad\mathcal O_X(m_0D)\simeq\mathcal O_X')], 'edges':[e('crepantなQ-factorialモデルでHLLを適用し、生成を元の空間へ降ろす。','Apply HLL on a crepant Q-factorial model and descend generation to the original space.',('DHP','DHP Thm. 6.1, p. 43'),('HLL','HLL Thm. 4.1, pp. 17--18'),('K4N','K4N Prop. 5.2, p. 34')),e('floorに台を合わせるsupported program。元のnefnessと例外negativityで非零台を保つ。','Run the supported program with exact floor support; original nefness and exceptional negativity preserve nonzero support.',('DHP','DHP Thm. 7.2, p. 46'),('K4N','K4N Prop. 5.1, p. 33; pp. 45--46')),e('特別な解消で全floorを生成し、次に持ち上げる。矛盾から元の零因子はゼロ。','The special resolution gives generation on the whole floor, then lifting; the contradiction forces the original zero divisor to vanish.',('K4N','K4N Thm. 6.1, p. 46; Thm. 1.2, p. 5; Sect. 13, pp. 88--89'))]},
{'id':'floor','nodes':[n('同じ周囲の線束を持つnormal strata','Normal strata carrying one ambient line',r'L_Z=\mathcal O_Z(q(K_Z+B_Z))=L|_Z,\quad q\text{ even}'),n('二つのmarkingによるresidue比較','Residue comparison from two markings',r'F\simeq\mathbb P^1,\quad\{0,\infty\};\qquad (dz/z)^{\otimes q}'),n('固定次数での有限像','Finite images in a fixed degree',r'c_Z^2>0,\quad c_{Z_1}-\tau^*c_{Z_2}\in\operatorname{NS}(P_1)_{\mathbb R}'),n('全交差で整合し、被約floorを生成','Match every intersection and generate the reduced floor',r'\prod_{g\in G_Z}g(s_Z)\quad\Longrightarrow\quad L^k|_S\text{ globally generated}')], 'edges':[e('DOで三次元成分を生成。torsion-freeな障害とMori fiberが延長条件を一つのlinkへ帰着。','DO generates the three-dimensional components; a torsion-free obstruction and a Mori fibre reduce extension to one link.',('DO','DO Cor. 1.3, p. 4'),('K4N','K4N Lem. 7.1, pp. 51--52; Prop. 7.3, pp. 56--58')),e('非射影曲面では三次元strata由来のlinkだけを使い、一つのKähler類を輸送する。','For nonprojective surfaces use only links from three-dimensional strata and transport one ambient Kähler class.',('K4N','K4N Prop. 8.1; Lems. 8.2--8.3, pp. 59--61')),e('下位から延長しnorm積で不変化。有限超平面回避で非消滅を保ち、全floorへ降下。','Extend from lower strata and take invariant norms; avoid finitely many hyperplanes and descend to the whole floor.',('K4N','K4N Prop. 6.3, pp. 48--50; Lem. 9.1 / Prop. 9.2, pp. 63--65'))]},
{'id':'lifting','nodes':[n('生成された全floorからroot近傍へ','From the generated whole floor to root neighborhoods',r'f:S\to\mathbb P^b,\quad E\text{ reduced Cartier},\quad I=\mathcal O_Z(-E)'),n('障害を失わないsplit residue挿入','Split residue insertion retains every obstruction',r'R^1g_*A_{-a}\ \lhook\joinrel\longrightarrow\ R^1h_*\omega_H=F_0\mathcal M^1'),n('ample lineからsymbol kernelへの写像を消す','Kill the ample-line map into the symbol kernel',r'\mathcal O_{\mathbb P^b}(a+k)\longrightarrow\ker\sigma,\qquad\operatorname{Hom}(N,\ker\sigma)=0'),n('全整数次数・全有限次数で持ち上げ','Lift in all integer degrees and finite orders',r'\delta_k=0,\qquad g_*(I^j/I^{j+k+1})\twoheadrightarrow g_*(I^j/I^{j+k})'),n('不変層の反復から周囲の切断を増やす','Recurring invariant layers grow ambient sections',r'F_{j-r}=F_j(1),\quad h^0(V,\mathcal O_V(NG))\geq N-C-h^1(V,\mathcal O_V)')], 'edges':[e('第二のcanonical rootと導来retractionが、特殊パラメータに台を持つ第一cohomologyも保つ。','A second canonical root and derived retraction retain first-cohomology classes supported at special parameters.',('K4N','K4N Prop. 10.4, pp. 71--72; Prop. 11.1, p. 75')),e('constant strataのstrict直像とpure商のvanishing。非分岐点を選ぶcompact graph上でadjugateを使う。','Use strict direct images of constant strata and vanishing on pure quotients; apply the adjugate on a compact graph unbranched at the chosen point.',('Sai','Sai Thm. 1, p. 1'),('SS','SS Thm. 16.3.10, p. 734'),('K4N','K4N Cor. 11.3, pp. 81--82')),e('任意の指定点へ降下し、局所恒等式とLaurent導分則で残る障害を消す。','Descend at an arbitrary prescribed point; the local identity and Laurent derivation rule kill the remaining obstruction.',('K4N','K4N Lem. 12.2, pp. 84--85; Sect. 12.3, pp. 86--87')),e('巡回不変部分のcoherent層商にSerre vanishingを適用。最後の損失は固定の第一cohomology。','Apply Serre vanishing to coherent invariant layer quotients; the final loss is bounded by fixed first cohomology.',('K4N','K4N Sect. 12.4, pp. 87--88'))]}
]}
(D/'spec.json').write_text(json.dumps(spec,ensure_ascii=False,indent=2)+'\n')
for f in ['preamble.tex','render.py','check.py']:shutil.copyfile(A.parent/'lifting-adjoint-sections'/'diagrams'/f,D/f)
sources={'paperId':A.name,'sourceCommit':'adc7f1241b42e322a6451854ab7e4b4c146bf78a','sourceUrl':urls['K4N'],'sha256':'89b5dd1a939cd7a67bbc90c83fe34ac5398d08f9103aa1cf8351bb3825e09273','checkedOn':'2026-10-08','manuscriptDate':'2026-09-27','pdfPages':92,'statements':[{'result':'Theorem 1.1: normal connected compact Kähler klt fourfold, actual rational Cartier adjoint, analytic nefness, nonvanishing assumed; no Q-factorial or projective hypothesis','pages':[3]},{'result':'Theorem 1.2: arbitrary positive dimension compact Kähler dlt, exact nonzero support equal to whole floor; no nefness/Q-factoriality assumed','pages':[5]},{'result':'Theorem 6.1: whole-floor generation under the explicit special-resolution condition','pages':[46]}],'proofPassages':[{'pages':[6,9,24,33,34,35,36,37,38,45,46],'scope':'Actual-line conventions, selected contraction statements and supported-model preparation/survival; entire contraction proof not checked.'},{'pages':[48,49,50,51,52,56,57,58,59,60,61,62,63,64,65],'scope':'Strata adjunction, torsion-free obstruction, residue links, common Kähler class, finite isotropy and norm-product generation.'},{'pages':[67,68,71,72,73,74,75,78,79,80,81,82],'scope':'Root setup, finite lifting target, derived split insertion, compact graph and Hodge statements/comparison; full root gluing and filtered comparison not independently reconstructed.'},{'pages':[82,83,84,85,86,87,88,89],'scope':'Graded derivation, adjugate identity statement and application, finite induction, invariant layers and final assembly; full local Čech calculation not checked.'}],'dependencies':[{'abbreviation':key,'sourceUrl':urls[key],'result':result,'pages':pages,'usedAt':used,'verification':scope} for key,result,pages,used,scope in [('HLL','Theorem 4.1',[17,18],'Proposition 5.2 p.34','v2 statement including unconditional <=4 clause compared.'),('DHP','Theorems 6.1,7.2',[43,46],'Sections 5.1,5.3','v3 statements and supported hypothesis compared; complete imported contraction interfaces not verified.'),('DO','Corollary 1.3; actual adjoint conventions',[4,5,6],'Section 7.1 pp.50–51','v4 statement and sheaf/restriction convention compared.'),('FT','Theorem 2.9; Proposition 2.11',[6,7],'Lemma 7.1 and Proposition 10.4','v7 torsion-freeness and local Kähler statement compared.'),('Sai','Theorem 1',[1],'Section 11 p.78','v5 constant-source strictness statement compared; displayed weight sign differs as explicitly noted in K4N p.78.'),('SS','Theorem 16.3.10',[734],'Lemma 11.2 pp.80–81','Version 2 chapter16 PDF p.16, accessed 2026-10-08; statement compared, not all theory-comparison inputs.'),('FG','Theorem 1.1',[1],'Section 8.1 p.59','Final author statement compared; only projective strata application.')]],'contextOnly':[{'abbreviation':k,'sourceUrl':urls[k],'usedAt':'p.6','relationship':'Projective background; not a direct input to the two analytic boundary theorems.'} for k in ['SL','LA']],'unresolved':['Complete Sections 3–4 analytic contraction constructions and Claim 5.4 positivity proof not independently checked.','All external relative MMP, rationality and current descent inputs not cross-checked.','Full root-neighborhood gluing, functorial resolution and Section 11 filtered comparison not independently reconstructed.','Full Lemma 12.2 Čech differentiation computation and external proofs not verified.','Saito v5 printed weight j-n vs K4N p.78 convention correction must remain visible in editorial review.','SS author chapter PDF is Version 2 on access date, not immutable commit.','Website screen verification remains for central editor.']}
(A/'sources.json').write_text(json.dumps(sources,ensure_ascii=False,indent=2)+'\n')
(A/'catalog-changes.md').write_text('''# カタログ反映案（共通ファイルは未変更）
- 役割: 実際のnef adjointについて、非消滅を仮定したcompact Kähler klt四次元abundance。元の空間に射影性・Q-factorialityは不要。
- 主定理はK4N Thm.1.1 p.3、独立の任意次元supported liftingはThm.1.2 p.5。後者は台の等号と全被約floorの生成を仮定し、nefness/Q-factorialityを仮定しない。
- HLL Thm.4.1 → Prop.5.2: 正の飯高次元。DO Cor.1.3 → §7.1: 三次元strataの生成。DHP Thm.6.1/7.2 → §5: モデルとsupported program。
- 内部接続: Prop.5.1 + Lem.5.6 → Thm.6.1 → Thm.1.2 → Thm.1.1。特別な解消仮定はfloor生成側にあり、任意次元lifting側にはない。
- Supported liftingおよびLA → K4Nはp.6の射影的背景引用。解析的境界定理への直接依存の辺にしない。
- Swapnajit Dasのslc Kähler三次元主定理はp.5が入力から除外。共通Kähler類・ruled branchの手法上の先行関係として区別する。
- 未調査の出力先・他の辺は未調査のまま。証明全体の独立検証済み表示はしない。
''')
