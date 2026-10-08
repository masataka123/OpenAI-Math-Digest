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
('全切断比で底の体を回復する','Recover the base field from all section ratios',r'$F_m(K_X+B)=K(K_X+B)=\mathbb C(Z).$\\[3pt] $\Tx{\text{底の随伴因子がbigの場合。主定理は第4図。}}{\text{Big base adjoint case. Main theorem: Figure 4.}}$')
],[
('normal lc指数・Hilbert 90・定性的moduli降下の後、閾値を保って切断。','Use the normal lc index, Hilbert 90 and moduli descent; slice while preserving the threshold.',cite('Prop. 7.1; pp. 23--24')+r'\quad '+cite('Lemma 7.3; pp. 25--27')),
('負の例外係数を被約例外境界に置換し、丸めた完全切断空間を使う。','Replace negative exceptional coefficients and use complete rounded section spaces.',cite('[BZ] Thm. 1.3; p. 3','https://arxiv.org/pdf/1410.0938')+r'\quad '+cite('Lemma 8.1, Prop. 8.2; pp. 27--29')),
('完全系の切断比から共通因子を消し、任意次数の比を倍数次数へ移す。','Cancel the common factor in ratios; move ratios in arbitrary degrees to multiples.',cite('Lemma 8.1, Prop. 8.2; pp. 27--29'))
])

def node(name,style,titleja,titleen,body,position=''):
    return r'\node['+style+(','+position if position else '')+'] ('+name+r') {\heading{}{'+titleja+'}{'+titleen+'}'+body+'};\n'
def split(parent,left,right,labelja,labelen,refs,leftx=-4,rightx=4,dy=0.45):
    # Branch labels occupy their own horizontal strip above the child cards.
    return (r'\coordinate (bus'+left+r') at ($('+parent+'.south)+(0,-'+str(dy)+')$);\n'
     +r'\draw[wire] ('+parent+r'.south)--(bus'+left+');\n'
     +r'\draw[edge] (bus'+left+') -| ('+left+'.north);\n'
     +r'\draw[edge] (bus'+left+') -| ('+right+'.north);\n'
     +r'\node[branchreason,anchor=south west] at ($('+left+r'.north)+(.45,0.15)$) {'+r'\Tx{'+labelja[0]+'}{'+labelen[0]+r'}\\[3pt]'+refs[0]+'};\n'
     +r'\node[branchreason,anchor=south west] at ($('+right+r'.north)+(.45,0.15)$) {'+r'\Tx{'+labelja[1]+'}{'+labelen[1]+r'}\\[3pt]'+refs[1]+'};\n')
# Use arrows down the LEFT edge of each card, leaving label space to the right.
def branch(parent,child,labelja,labelen,ref,offset):
    return (r'\coordinate ('+child+r'-a) at ($('+child+r'.north west)+(.32,0)$);'+'\n'
     +r'\draw[edge] ('+parent+r'.south) -- ++(0,-'+('.95' if parent=='recover' else '.4')+') -| ('+child+r'-a);'+'\n'
     +r'\node[branchreason,anchor=south west] at ($('+child+r'.north west)+(.65,.18)$) {'+r'\Tx{'+labelja+'}{'+labelen+r'}\\[3pt]'+ref+'};\n')

o=[r'\begin{tikzpicture}']
o+=[node('weight','card','1. 曲線重みをdltモデルに載せる','1. Realize the curve weight on a dlt model',r'$\operatorname{div}_V\phi+mB=0,\quad (N,T+H)\text{ dlt}.$\\ $m^{-1}\operatorname{div}_N\Omega+T+H=w_z(\phi)f^*c.$\\[4pt]'+cite('Lemma 3.1; Prop. 4.5; pp. 6--7, 9--10'))]
o+=[node('lc','half','2a. 水平係数1成分がある','2a. A horizontal coefficient-one component',r'$S\to C_S\to C,\quad e\le D_s.$\\ $w_u(\operatorname{res}_S\phi)=e\,w_z(\phi).$\\ $q_{\rm res}=q(s-1,m)\operatorname{lcm}(1,\ldots,D_s).$',r'below=3.1cm of weight.south,xshift=-4cm')]
o+=[node('klt','half','2b. 水平係数1成分がない','2b. No horizontal coefficient-one component',r'$H^{=1}=0:\quad (V,B)\text{ klt},\quad K_V\text{ is }\mathbb Q\text{-Cartier}.$\\ $q_{\rm klt}(s,m)w_z(\phi)\in\mathbb Z.$\\ \Tx{独立な指標評価は第2図。}{Independent character bound: Fig. 2.}',r'below=3.1cm of weight.south,xshift=4cm')]
o+=[branch('weight','lc','Stein次数を抑えて留数へ帰納。','Bound the Stein degree, then induct by residue.',cite('Lemma 4.6; pp. 10--11')+r'\\ '+cite('[SD] Thm. 1.1; p. 1',SDINPUT),-4)]
o+=[branch('weight','klt','一般対がkltとなるので指標評価を使う。','The generic pair is klt; use the character bound.',cite('Prop. 6.7; p. 23'),4)]
o+=[node('end','result','3. 二つの枝を合わせる','3. Combine the two branches',r'$q(0,m)=m,\quad q(s,m)=\operatorname{lcm}(q_{\rm res},q_{\rm klt}(s,m)).$\\ $q(s,m)w_z(\phi)\in\mathbb Z.$\\[4pt]'+cite('Proof of Thm. 4.2; p. 11'),r'below=8cm of weight.south')]
o += [r'\draw[edge] (lc.south) -- ++(0,-.5) -| ($(end.north)+(-4,0)$);',r'\draw[edge] (klt.south) -- ++(0,-.5) -| ($(end.north)+(4,0)$);',r'\end{tikzpicture}']
(P/'residue.tikz').write_text('\n'.join(o))
LA='https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Log-abundance-in-characteristic-zero-September-24-2026/paper.pdf'
o=[r'\begin{tikzpicture}']
o+=[node('model','card','1. 丸めた切断空間を保ってgood modelへ','1. Pass to a good model preserving rounded section spaces',r'$D=K_X+B,\quad\kappa(D)\ge0.$\\ $D^{\prime}=K_{X^{\prime}}+B^{\prime}\text{ semiample},\quad D^{\prime}\sim_{\mathbb Q}f^*L.$\\[4pt]'+cite('Lemma 8.1; proof pp. 27--30')+r'\quad '+cite('[LA] Thm. 11.1; p. 73',LA))]
o+=[node('positive','half','2a. 底が正次元','2a. Positive-dimensional base',r'$\dim Z>0,\quad L\text{ ample}.$\\ $F_{m_+}(D^{\prime})=K(D^{\prime})=\mathbb C(Z).$',r'below=3cm of model.south,xshift=-4cm')]
o+=[node('zero','half','2b. 底が点','2b. Point base',r'$D^{\prime}\sim_{\mathbb Q}0,\quad m_0D^{\prime}\sim0.$\\ $F_{m_0}(D^{\prime})=K(D^{\prime})=\mathbb C.$',r'below=3cm of model.south,xshift=4cm')]
o+=[branch('model','positive','moduli分母とbigな底の有効性を使う。','Use moduli denominators and big-base effectivity.',cite('Prop. 8.2; pp. 28--29'),-4)]
o+=[branch('model','zero','normal lc指数と、切断比の倍数移送。','Use the normal lc index and move ratios to multiples.',cite('[U] Thm. 1.2; p. 2',U)+r'\\ '+cite('(8.4); p. 28'),4)]
o+=[node('end','result','3. 次数を合わせ、元の多様体と体へ戻す','3. Align degrees and return to the original variety and field',r'$m=\operatorname{lcm}(m_+,m_0),\quad F_m(D)=K(D)\subset k(X).$\\ \Tx{丸めた切断比較と、代数閉体の拡大・降下。}{Rounded section comparison and extension/descent of algebraically closed fields.}\\[4pt]'+cite('Lemmas 8.1, 8.3; pp. 27--30'),r'below=7.3cm of model.south')]
o += [r'\draw[edge] (positive.south) -- ($(end.north)+(-4,0)$);',r'\draw[edge] (zero.south) -- ($(end.north)+(4,0)$);',r'\end{tikzpicture}']
(P/'main.tikz').write_text('\n'.join(o))
