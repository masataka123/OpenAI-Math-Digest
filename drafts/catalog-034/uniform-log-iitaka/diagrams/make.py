from pathlib import Path
P=Path(__file__).resolve().parent
SD='https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Uniform-log-Iitaka-fibrations-and-bounded-moduli-denominators-October-4-2026/uniform-log-iitaka.pdf'
def cite(t,url=SD):return r'\Cite{'+url+'}{'+t+'}'
def diagram(name,nodes,edges):
    out=[r'\begin{tikzpicture}']
    for i,(ja,en,math) in enumerate(nodes):
        spec='result' if i==len(nodes)-1 else 'card'
        if i:spec+=f',below=1.95cm of n{i-1}'
        out.append(r'\node['+spec+f'] (n{i}) {{'+r'\heading{'+str(i+1).zfill(2)+'}{'+ja+'}{'+en+'}'+math+'};')
        if i:
            ja,en,refs=edges[i-1]
            out.append(r'\flow{n'+str(i-1)+'}{n'+str(i)+'}{'+r'\Tx{'+ja+'}{'+en+r'}\\[4pt]'+refs+'}')
    out.append(r'\end{tikzpicture}')
    (P/(name+'.tikz')).write_text('\n'.join(out)+'\n')
U='https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Uniform-Pluricanonical-Iitaka-Fibrations-October-3-2026/paper.pdf'
SDINPUT='https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Arithmetic-Stein-degree-bounds-for-log-Calabi-Yau-pairs-September-25-2026/paper.pdf'
diagram('residue',[
('曲線上の形式と付値的重み','A form over a curve and its valuative weight',r'$\operatorname{div}_V\phi+mB=0,\quad \Omega=\phi\wedge(dz/z)^{\otimes m}.$\\[3pt] $w_z(\phi)=\inf_E(\operatorname{ord}_E\Omega+m)/(m\operatorname{ord}_Ez).$'),
('特殊ファイバーを被約にして正確な恒等式を得る','Prepare the reduced special fibre and an exact identity',r'$(N,T+H)\text{ dlt},\quad T=(f^*c)_{\rm red},\quad H\text{ horizontal}.$\\[3pt] $m^{-1}\operatorname{div}_N\Omega+T+H=w_z(\phi)f^*c.$'),
('係数1の水平成分に留数を取る','Take residue along a coefficient-one horizontal component',r'$S\to C_S\xrightarrow{\nu}C,\quad \deg\nu\le D_s,\quad e\le D_s.$\\[3pt] $w_u(\operatorname{res}_S\phi)=e\,w_z(\phi).$'),
('次元帰納とklt評価を合流させる','Combine dimension induction with the klt bound',r'$q(s-1,m)\operatorname{lcm}(1,\ldots,D_s)\,w_z(\phi)\in\mathbb Z.$\\[3pt] $H^{=1}=0\ \Longrightarrow\ \Tx{\text{klt評価へ}}{\text{use the klt bound}},\qquad q(0,m)=m.$')
],[
('底に十分正な因子を加えたMMPで例外誤差を消す。','An MMP after adding positivity from the base removes the exceptional error.',cite('Lemma 3.1; pp. 6--7')+r'\quad '+cite('Prop. 4.5; pp. 9--10')),
('dlt随伴。算術的Stein次数で留数の定数体拡大を抑える。','Use dlt adjunction and the arithmetic Stein bound on the residue field extension.',cite('Lemma 4.6; pp. 10--11')+r'\quad '+cite('[SD] Thm. 1.1; p. 1',SDINPUT)),
('分岐による重みの倍率を公倍数で吸収。水平成分がなければ別経路。','Absorb ramification by an lcm; use a separate route when no such component exists.',cite('Lemma 4.3; p. 8')+r'\quad '+cite('Prop. 6.7; p. 23'))
])
diagram('characters',[
('有限被覆上で境界付きブロックに分解','Split into blocks after a finite cover',r'$(F,H)\times A\times\prod Y_i\times\prod Z_j,\quad b=s!.$\\[3pt] $\phi=a\bigwedge_i\eta_i^{\otimes m/p_i},\quad p_i=m\text{ or }1.$'),
('比較被覆上で重みを0に正規化','Normalize weights to zero on a comparison cover',r'$\ell w_z(\phi)=\operatorname{ord}_{c\prime}a/m.$\\[3pt] $\zeta^{b\operatorname{ord}_{c\prime}a}\prod_i\lambda_i^{m/p_i}=1.$'),
('各ブロックの指標に共通の指数を与える','Give all block characters a common exponent',r'$\lambda_i^{Q(s,m)}=1.$\\[3pt] $\Tx{\text{整コホモロジー / 固定点と正規成分への留数}}{\text{Integral cohomology / fixed points and residues on normal components}}.$'),
('制御しない分岐次数を消去する','Cancel the uncontrolled ramification degree',r'$\ell\mid bQ\operatorname{ord}_{c\prime}a.$\\[3pt] $m\,s!\,Q(s,m)w_z(\phi)=bQ\operatorname{ord}_{c\prime}a/\ell\in\mathbb Z.$')
],[
('中心冪等元でブロックを回復し、置換を止めてから半安定化。','Recover blocks through central idempotents and stop permutations before semistable reduction.',cite('Prop. 5.4, Cor. 5.5; pp. 14--17')+r'\quad '+cite('(6.2)--(6.3); p. 19')),
('非アーベル成分ではLefschetzの固定点から巡回商のnormal lc指数へ。','For nonabelian blocks, pass from Lefschetz fixed points to the normal lc index of a cyclic quotient.',cite('Lemmas 6.3--6.6; pp. 19--22')+r'\quad '+cite('[U] Thm. 1.2; p. 2',U)),
('慣性群の関係式を $Q$ 乗し、重みの式へ戻す。','Raise the inertia relation to the power $Q$ and return to the weight identity.',cite('Prop. 6.7; p. 23'))
])
diagram('iitaka',[
('一般ファイバーの自明化を一様な次数で降下','Descend generic-fibre trivialization in a uniform degree',r'$K_X+B+p_0^{-1}\operatorname{div}\psi=f^*D_Z.$\\[3pt] $D_Z=K_Z+B_Z+M_Z,\quad \operatorname{coeff}B_Z\text{ DCC}.$'),
('横断曲線でmoduli係数を重みに置き換える','Read a moduli coefficient as a transverse-curve weight',r'$w_z(\phi)=\alpha-1+t_P,\quad \operatorname{coeff}_P M_W=w_z(\phi)-\operatorname{coeff}_P K_W.$\\[3pt] $p=\operatorname{lcm}(p_0,q(0,p_0),\ldots,q(d-1,p_0)).$'),
('bigな底に有効双有理性を適用','Apply effective birationality on a big base',r'$pM_W\text{ nef Cartier},\quad K_W+A+M_W\text{ big},\quad A\ge0.$\\[3pt] $H^0(X,\lfloor n(K_X+B)\rfloor)=\psi^{n/p_0}f^*H^0(Z,\lfloor nD_Z\rfloor).$'),
('good model上の飯高写像から主定理へ','Pass from the Iitaka map of a good model to the main theorem',r'$\kappa>0:\ F_m(K_X+B)=K(K_X+B)=k(Z).$\\[3pt] $\kappa=0:\ m(K_X+B)\sim0\Tx{\text{ (good model上)}}{\text{ on the good model}}.$')
],[
('normal lc指数・Hilbert 90・定性的moduli降下の後、閾値を保って切断。','Use the normal lc index, Hilbert 90 and moduli descent; slice while preserving the threshold.',cite('Prop. 7.1; pp. 23--24')+r'\quad '+cite('Lemma 7.3; pp. 25--27')),
('負の例外係数を被約例外境界に置換し、丸めた完全切断空間を使う。','Replace negative exceptional coefficients and use complete rounded section spaces.',cite('[BZ] Thm. 1.3; p. 3','https://arxiv.org/pdf/1410.0938')+r'\quad '+cite('Lemma 8.1, Prop. 8.2; pp. 27--29')),
('射影的log abundanceで帰着し、飯高次元0は指数定理で処理。','Reduce by projective log abundance; use the index theorem when the Iitaka dimension is zero.',cite('Thm. 1.1, proof; pp. 29--30')+r'\quad '+cite('[U] Thm. 1.2; p. 2',U))
])
