from pathlib import Path
P=Path(__file__).resolve().parent
SD='https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Relative-denominators-and-effective-systems-for-log-Calabi-Yau-fibrations-September-27-2026/paper.pdf'
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
diagram('denominators',[
('一般ファイバーを同じ次数で自明化','Trivialize the generic fibre in the same degree',r'$K_X+B+p_0^{-1}\operatorname{Div}(\psi)=f^*D_Z,\quad p_0\mid p.$'),
('各素因子の分母を曲線で測る','Test each coefficient on a transverse curve',r'$\beta=\alpha+t_P,\quad \operatorname{coeff}_P M_W\equiv\beta\pmod{\mathbb Z}.$\\[3pt] $p_0(K_N+T+H)+\operatorname{Div}(\psi_C)=p_0\beta f_N^*[c].$'),
('特殊ファイバー全体に一つの形式を作る','Construct one form on the whole special fibre',r'$(T,B_T)\text{ slc},\quad\dim T\le3,\quad p(K_T+B_T)\sim0.$\\[3pt] $u\text{ global},\quad p\text{ even},\quad p_0\mid p.$'),
('巡回被覆上で留数の比をつなぐ','Glue the residue ratios on the cyclic cover',r'$p_0\beta=a/m,\quad w^m=z,\quad s\mapsto\zeta^{-a}s.$\\[3pt] $\operatorname{res}_{T_{Y,j}}(s^{p/p_0})=r_j\rho_j^*u_i,\quad r_j=r\in\mathbb C^*.$'),
('指標を消し、Cartier分母を得る','Kill the character and obtain the Cartier denominator',r'$\zeta^{-ap/p_0}=1\ \Longrightarrow\ m\mid p/p_0\ \Longrightarrow\ p\beta\in\mathbb Z.$\\[3pt] $pM_W\text{ integral on smooth }W\ \Longrightarrow\ p\mathbf M\text{ b-Cartier}.$')
],[
('Hilbert 90で次数を保ち、定性的moduli降下の後に曲線へ切断。','Hilbert 90 retains the degree; after qualitative descent, slice to a curve.',cite(r'$\S3$; pp. 6--7')+r'\quad '+cite(r'$\S4$, (4.6); pp. 7--10')),
('dlt随伴・深さ・global ACCでslcファイバーの指数定理を適用。','Adjunction, depth and global ACC permit the slc fibre index theorem.',cite('Lemma 5.1; pp. 11--13')+r'\quad '+cite('[JL] Cor. 1.6; p. 2','https://arxiv.org/pdf/2002.11928v1')),
('補助可除次数で各比を定数にし、偶数次数の次の留数で同一化。','An auxiliary divisible degree makes each ratio constant; even-degree next residues identify them.',cite('(5.9)--(5.12); pp. 14--15')),
('連結性とconductorの整合性により、成分置換も含めて不変。','Connectedness and conductor matching give invariance, including component permutations.',cite('Lemma 5.1, conclusion; p. 15'))
])
diagram('systems',[
('bigな底と固定した表示','A big base and a fixed presentation',r'$L=K_X+B,\quad D_Z\sim_{\mathbb Q}D\text{ big},\quad p_0\mid l.$'),
('完全切断空間を一致させる','Identify the complete section spaces',r'$H^0(X,\lfloor lL\rfloor)=\psi^{l/p_0}f^*H^0(Z,\lfloor lD_Z\rfloor).$'),
('底の滑らかなモデルで双有理切断を作る','Produce birational sections on a smooth base model',r'$K_W+A+M_W=q^*D_Z+E_W,\quad E_W\ge0\text{ exceptional}.$\\[3pt] $\operatorname{coeff}A\subset\mathcal B\cup\{1\},\quad pM_W\text{ nef Cartier}.$'),
('全関数体を得て飯高写像を特定','Recover the full field and identify the Iitaka map',r'$m=\operatorname{lcm}(p_0,b_1,\ldots,b_d),\quad l\in m\mathbb Z_{>0}.$\\[3pt] $\mathbb C\bigl(\Tx{\text{全切断比}}{\text{all section ratios}}\bigr)=\mathbb C(Z)\subset\mathbb C(X).$')
],[
('一般ファイバー上の正則関数は底の関数。付値でeffectivityを降下。','Regular functions on the generic fibre come from the base; valuations descend effectivity.',cite('(6.1)--(6.2); p. 16')),
('負の例外係数を被約例外境界で置換し、有効双有理性を適用。','Replace negative exceptional coefficients; apply effective birationality.',cite('(6.3); p. 16')+r'\quad '+cite('[BZ] Thm. 1.3; p. 3','https://arxiv.org/pdf/1410.0938')),
('例外誤差はpushforwardで消え、共通因子は切断比で消える。','Pushforward removes the exceptional error; section ratios cancel the common factor.',cite('Prop. 6.1, conclusion; p. 17'))
])
diagram('torsion',[
('一般化klt対と有理連結な解消','Generalized klt data and a rationally connected resolution',r'$D=K_Z+B+M_Z\sim_{\mathbb Q}0,\quad p\mathbf M\text{ b-Cartier},\quad\dim Z\le4.$'),
('抽出とACCで特異点を一様にする','Use extraction and ACC to bound singularities',r'$\operatorname{coeff}B\subset I_0\text{ finite},\quad a_E\ge\epsilon>0.$\\[3pt] $Z\text{ bounded up to isomorphism in codimension one}.$'),
('位相からtorsionの指数を抑える','Bound the torsion exponent through topology',r'$\operatorname{Cl}(Z)[n]\simeq\operatorname{Hom}(H_1(Z_{\rm reg},\mathbb Z),\mu_n).$\\[3pt] $H_1\text{ in a finite list of finite groups},\quad T\operatorname{Cl}(Z)_{\rm tors}=0.$'),
('実際の因子を整にして主因子化する','Clear actual coefficients before principalizing',r'$qD\text{ integral},\quad \ell=Tq,\quad \ell D\text{ principal}.$\\[3pt] $r(K_X+B)=\operatorname{Div}\bigl((v\circ f)^{r/\ell}\psi^{-r/p_0}\bigr)\quad\text{(Cor. 7.2)}.$')
],[
('通常のklt境界で指定付値を抽出。ACCの後に有界性を適用。','Extract specified valuations via ordinary klt boundaries; apply boundedness after ACC.',cite('Prop. 7.1; pp. 17--19')+r'\quad '+cite('[Bir] Thm. 1.7; p. 6','https://arxiv.org/pdf/2305.18770v2')),
('有界な滑らかな開集合の位相と、解消からのclass group有限生成。','Bound smooth-locus topology; the resolution gives finite generation of the class group.',cite('(7.1) and its preparation; pp. 20--21')),
('有限係数集合と $pM_Z$ の整性を使い、底から引き戻す。','Use finite coefficients and integrality of $pM_Z$, then pull back from the base.',cite('Prop. 7.1; p. 21')+r'\quad '+cite('Cor. 7.2, (7.2); p. 21'))
])
