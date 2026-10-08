from pathlib import Path
P=Path(__file__).resolve().parent
SD='https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Log-abundance-for-compact-Kahler-spaces-under-logarithmic-Iitaka-subadditivity-October-4-2026/main.pdf'
def cite(t,url=SD):return r'\Cite{'+url+'}{'+t+'}'
def diagram(name,nodes,edges):
    out=[r'\begin{tikzpicture}']
    for i,(ja,en,math) in enumerate(nodes):
        spec='result' if i==len(nodes)-1 else 'card'
        if i:spec+=f',below=2.15cm of n{i-1}'
        out.append(r'\node['+spec+f'] (n{i}) {{'+r'\heading{'+str(i+1).zfill(2)+'}{'+ja+'}{'+en+'}'+math+'};')
        if i:
            ja,en,refs=edges[i-1]
            out.append(r'\flow{n'+str(i-1)+'}{n'+str(i)+'}{'+r'\Tx{'+ja+'}{'+en+r'}\\[4pt]'+refs+'}')
    out.append(r'\end{tikzpicture}')
    (P/(name+'.tikz')).write_text('\n'.join(out)+'\n')
LA='https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Log-abundance-in-characteristic-zero-September-24-2026/paper.pdf'
OILS='https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Orbifold-and-logarithmic-Iitaka-subadditivity-September-26-2026/paper.pdf'
ANV='https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Abundance-after-nonvanishing-for-compact-Kahler-fourfolds-September-27-2026/paper.pdf'
diagram('decomposition',[
('劣加法性と下の次元の帰納を固定','Fix subadditivity and lower-dimensional induction',r'$\text{Assumption 1.1},\qquad G_j\ (j<n),\qquad J=K_X+B\text{ pseudo-effective}.$'),
('代数次元で証明経路を分ける','Separate the routes by algebraic dimension',r'$a(X)=n:\ \Tx{\text{射影的good model}}{\text{projective good model}}.$\\[3pt] $0<a(X)<n:\ \Tx{\text{代数的還元}}{\text{algebraic reduction}}.$\\[3pt] $a(X)=0:\ \Tx{\text{simple / 被覆族と有限降下}}{\text{simple / covering family and finite descent}}.$'),
('実際の有理直線束の分解を得る','Obtain a decomposition of actual rational lines',r'$\mu^*J\sim_{\mathbb Q}P+R,\qquad P\text{ semiample},\quad R=N(\mu^*J)\ge0.$'),
('元のnefなlc随伴因子へ生成を降下','Descend generation to the original nef lc adjoint',r'$K_Y+B_Y=p^*J+E,\quad E\ge0\text{ exceptional}.$\\[3pt] $N(p^*J)=0,\quad p_*\mathcal O_Y=\mathcal O_X\ \Longrightarrow\ mJ\text{ globally generated}.$')
],[
('射影的入力で仮定を使い、非simpleの場合はincidence被覆を作る。','Use the assumption in the projective input; use an incidence cover in the nonsimple case.',cite('Prop. 2.10; p. 12')+r'\quad '+cite('[LA] Lemma 6.1; pp. 30--31',LA)),
('ファイブレーションとsimpleの場合を解き、torsion正部分をnormで降下。','Solve the fibration and simple cases; descend a torsion positive part by norms.',cite('Props. 2.9, 2.11--2.12; pp. 11--12')+r'\quad '+cite('Thm. 2.13; p. 13')),
('例外誤差を負部分から相殺。射影公式で全ての点の生成を保つ。','Cancel the exceptional negative part; projection formula preserves generation everywhere.',cite('Lemma 2.3; p. 8')+r'\quad '+cite('Prop. 2.7; pp. 9--10'))
])
diagram('fibration',[
('飯高次元0のファイバーを持つ表示を準備','Prepare a fibration with Kodaira-zero fibres',r'$J\sim_{\mathbb Q}g^*H+A^*,\quad H=K_W+T+p^*P_S.$\\[3pt] $\min_{E\to D}(A^*)_E/\operatorname{ord}_E(g^*D)=0,\quad (A^*)_E\ge0.$'),
('水平負部分を引いて底へmetricを降ろす','Subtract the horizontal negative part and descend the metric',r'$A^{*,\mathrm{hor}}\le N(J),\qquad H\text{ pseudo-effective}.$'),
('底の次元を下げるか、停止する形へ進む','Lower the base dimension or reach a stopping case',r'$a(W)=0:\ H\sim_{\mathbb Q}N(H).$\\[3pt] $W\text{ projective}:\ \Tx{\text{より低次元の底 / nefでbigまたはtorsionな }H_m}{\text{smaller base / nef }H_m\text{ big or torsion}}.$'),
('全ての垂直誤差を負部分に同定','Identify every vertical error with the negative part',r'$J\sim_{\mathbb Q}P_0+A,\qquad A=N(J)\ge0.$\\[3pt] $P_0\sim_{\mathbb Q}0\quad\text{or}\quad P_0=b^*H_m\ (H_m\text{ big nef}).$'),
('big nefの場合：境界切断を延長する','Big nef case: extend boundary sections',r'$r^*L\sim_{\mathbb Q}f^*H_m,\quad L\text{ nef dlt adjoint}.$\\[3pt] $\mathbf B(L)\cap\lfloor\Delta\rfloor=\varnothing\ \Longrightarrow\ \mathbf B(L)=\varnothing.$')
],[
('rank-one Hodge lineと係数の最小値0を使い、psh weightを延長。','Use the rank-one Hodge line and a zero minimum coefficient to extend psh weights.',cite('[OILS] Prop. 2.7, Thm. 3.1; pp. 10, 17--18',OILS)+r'\quad '+cite('Lemma 5.3; pp. 94--95')),
('下の次元の帰納、または実際のnef lineを保つ条件付き一般化MMP。','Use lower-dimensional induction or a conditional generalized MMP preserving the actual nef line.',cite('Lemmas 5.4--5.7; pp. 95--101')),
('交差行列の核と混合Hodge indexで、残る正の垂直部分を排除。','The intersection-matrix kernel and mixed Hodge index exclude residual vertical positivity.',cite('Lemma 5.8; pp. 101--103')),
('torsionの枝は終了。big nefの枝では負部分を収縮し、境界切断を延長。','The torsion branch ends. In the big nef branch, contract the negative part and extend sections.',cite('Prop. 3.8; pp. 23--24')+r'\quad '+cite('Thm. 4.1; p. 71')+r'\quad '+cite('Prop. 5.9; pp. 103--106'))
])
diagram('meromorphic',[
('有理型標準切断がないと仮定する','Assume there is no meromorphic canonical section',r'$a(X)=0,\ X\text{ simple},\quad L=c_1(K_X)\ge0.$\\[3pt] $A\hookrightarrow\Omega_X^{\otimes k}\ \Longrightarrow\ c_1(A)\le kL.$'),
('体積を増やし、対角線で高rankを作る','Increase volume and obtain high rank from the diagonal',r'$Z=\mathbb P_{X^2}(K_1\oplus K_2),\quad d=2n+1,\quad M=P_1+P_2+q\xi.$\\[3pt] $\operatorname{vol}(P)=1,\quad\operatorname{vol}(M)\asymp q,\quad s\asymp q^{1/d}.$'),
('第二のincidenceで行列式の消滅を強制','Force determinant vanishing using a second incidence',r'$F_j\subset\operatorname{Sym}^{js}\Omega_Z,\quad \operatorname{rk}F_j/\operatorname{rk}\operatorname{Sym}^{js}\Omega_Z\ge c_n.$\\[3pt] $b_V\ge s-C_n,\qquad h_j\ge c_n jR_j^+s.$'),
('点の極の上界と矛盾させる','Contradict the upper bound on point poles',r'$\displaystyle \frac{c_ns}{2+(s+2q)/r}\le C_n,\quad r\ge q^2,\quad s\longrightarrow\infty.$\\[3pt] $\Longrightarrow\ K_X^{\otimes m}\Tx{\text{ に非零有理型切断が存在}}{\text{ has a nonzero meromorphic section}}.$')
],[
('Ouの葉層判定でslopeを抑え、点のblowupへ運ぶ。','Use Ou’s foliation criterion for slopes and transfer the bound to a point blowup.',cite('Lemma 6.2; pp. 107--108')+r'\quad '+cite('[Ou] Thms. 1.1, 1.4; pp. 1, 3','https://arxiv.org/pdf/2501.18088v1')),
('制限体積の微分とdirect-image評価から固定正割合のrankを得る。','Restricted-volume differentiation and direct-image estimates give a fixed positive rank fraction.',cite('Lemmas 6.5--6.8; pp. 112--118')),
('共通零因子を除き、slope評価とmetricの下界で行列式の類を相殺。','Remove the common zero; cancel determinant classes using slopes and the metric lower bound.',cite('Lemmas 6.9--6.10; pp. 119--123')+r'\quad '+cite('(6.40)--(6.44); pp. 124--125'))
])
diagram('signed',[
('符号を保ったnefな境界表示から始める','Start with a nef boundary presentation retaining signs',r'$L=K_X+D\sim_{\mathbb Q}\sum a_iD_i,\quad L|_D\text{ semiample}.$\\[3pt] $\mu^*\{L-cD\}\text{ pseudo-effective},\quad 0<\nu(L)<n.$'),
('正係数の成分のファイバーを負・零成分から分離','Separate positive boundary fibres from negative and zero components',r'$\dim\varphi(D_i)=\nu(L)-1,\quad \dim F=n-\nu(L)>0.$\\[3pt] $\mathcal O_Z(aS)\simeq\omega_Z(S+T),\quad \mathcal O_S(S)\simeq g^*R_U.$'),
('残余極を持つ留数をHodge moduleへ入れる','Insert residues with residual poles into a Hodge module',r'$R^ig_*\mathcal O_S(aS)\hookrightarrow R^ih_*\omega_H(A)=F_0M^i.$\\[3pt] $\operatorname{Hom}(N,\ker\sigma)=0\quad(N\Tx{\text{ は射影パラメータ空間上でample}}{\text{ ample on the projective parameter space}}).$'),
('全整数次数の全有限障害を消す','Kill every finite obstruction in all integral degrees',r'$I=\mathcal O_Z(-S),\quad\delta_k:g_*(I^j/I^{j+1})\to R^1g_*(I^{j+k}/I^{j+k+1}).$\\[3pt] $\delta_k=0\ (j\in\mathbb Z,\ k\ge1).$'),
('境界を離れる変形がsimplicityに矛盾する','Deformations leaving the boundary contradict simplicity',r'$F_q\ \leadsto\ \mathcal F/\Delta\ \leadsto\ \Tx{\text{被覆族}}{\text{covering family}}.$\\[3pt] $0<\nu(L)<n\Tx{\text{ は不可能}}{\text{ impossible}};\quad a(X)=0\ \Longrightarrow\ L\sim_{\mathbb Q}0.$')
],[
('混合Hodge indexで交わりの像を小さくし、根と分離の操作を行う。','Mixed Hodge index makes the intersection image smaller; take roots and separate supports.',cite('Lemmas 7.2--7.3; pp. 126--131')),
('分裂留数と残余極の局所化。閉stratumのproper Kähler direct imageを使う。','Use split residue and localization at residual poles, then proper Kähler direct image on closed strata.',cite('Lemma 7.4, Prop. 7.5; pp. 132--136')+r'\quad '+cite('[ANV4] Lemma 11.2; p. 80',ANV)),
('adjugate恒等式でJacobianを割らず、ampleな根からsymbol kernelへ送る。','The adjugate identity avoids dividing by the Jacobian and tests the symbol kernel with an ample root.',cite('Prop. 7.6, (7.19)--(7.23); pp. 137--141')),
('Douady・Artin近似で変形を実現し、properなcycle族とBaireで被覆する。','Realize deformations by Douady and Artin approximation; use proper cycle families and Baire.',cite('Lemma 7.7; pp. 141--143')+r'\quad '+cite('Thm. 7.1, proof; p. 143'))
])

diagram('boundary',[
('下の次元の分解とnefなdlt随伴因子','Lower-dimensional decompositions and a nef dlt adjoint',r'$G_j\ (j<n),\quad J=K_V+B\text{ nef},\quad S=\lfloor B\rfloor.$\\[3pt] $V\text{ globally }\mathbb Q\text{-factorial};\quad\text{Definition 3.1}.$'),
('stratum上の実際の随伴直線束を比較する','Compare actual adjunction lines on strata',r'$\mathcal O_Z(q(K_Z+B_Z))\simeq\mathcal O_V(qJ)|_Z,\quad q\text{ even and divisible}.$\\[3pt] $\Tx{\text{下位stratumでの生成と留数の整合性。}}{\text{Generation and compatible residues on lower strata.}}$'),
('有限な比較作用に対して不変tupleを作る','Construct tuples invariant under finite comparison actions',r'$\Tx{\text{有限像に沿う切断の積}}{\text{Products of sections over finite images}}\quad\Longrightarrow\quad\Tx{\text{共通次数の生成tuple}}{\text{generating tuples in one degree}}.$'),
('被約境界全体へ貼り合わせる','Glue over the entire reduced boundary',r'$H^0(S,\mathcal O_V(qJ)|_S)\otimes\mathcal O_S\twoheadrightarrow\mathcal O_V(qJ)|_S.$\\[3pt] $\Tx{\text{各成分だけでなく、全ての交差上の比較も満たす。}}{\text{Comparisons hold on every intersection, not only componentwise.}}$')
],[
('lc strataに適合した解消で留数を運び、低次元の帰納を適用。','Transport residues on the adapted resolution and apply lower-dimensional induction.',cite('Lemma 4.2; pp. 71--73')),
('下位strataの比較と、垂直strataの自己比較の有限像を同時に処理。','Impose lower-stratum comparisons and finite self-comparisons on vertical strata together.',cite('Prop. 4.11; pp. 88--89')),
('整合する留数を貼り合わせ、各点で非消滅な切断を残す。','Glue matching residues while retaining a nonvanishing section at each point.',cite('Thm. 4.1, conclusion; p. 89'))
])
