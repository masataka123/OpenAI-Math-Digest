from pathlib import Path
P=Path(__file__).resolve().parent
SD='https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Arithmetic-Stein-degree-bounds-for-log-Calabi-Yau-pairs-September-25-2026/paper.pdf'
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
diagram('orbits',[
('幾何学的有界性から出発','Start from geometric boundedness',r'$Q/\!k:\ \epsilon\text{-lc Fano},\quad n(K_Q+\Lambda)\sim0,\quad \Lambda\ge0.$'),
('有界な拡大で偏極を降下','Descend a polarization after a bounded extension',r'$[F:k]\text{ bounded},\quad r=h^0(L),\quad A_{\bar k}\simeq L^{\otimes r}.$\\ $L^{\otimes r}\otimes(\det H^0(L))^{-1}\text{ descends to }Q_F.$'),
('境界を含むSNC解消を有界にする','Bound an SNC resolution of the marked pair',r'$(\operatorname{Supp}\Lambda)_{\rm red}\cdot A^{q-1}\le n((q-1)A^q+2).$\\ $\#\{\Tx{\text{幾何学的成分とstrata}}{\text{geometric components and strata}}\}\le M.$'),
('付値をstratumと整数重みで固定する','Fix valuations through strata and integral weights',r'$a(v,Q,\Lambda)<1\ \Longrightarrow\ a(v,W_{\bar k},H)=0.$\\ $c(v/k)\le[F:k]M!\le A(q,\epsilon,n).$')
],[
('BABとPicard格子の有限Galois像を使い、行列式で障害を消す。','Use BAB and the finite Picard-lattice action; determinants cancel the obstruction.',cite('Prop. 3.5, (3.3); pp. 6--7')+'\quad '+cite('[Bir21] Thm. 1.1; p. 2','https://arxiv.org/pdf/1609.05543v2')),
('$n\Lambda$ の整性で台の次数を抑え、体上の有界解消を選ぶ。','Integrality of $n\Lambda$ bounds the support; choose a bounded resolution over $F$.',cite('Lemma 3.4; pp. 5--6')+'\quad '+cite('(3.4); p. 7')),
('SNC付値の一意性から、有限集合を固定する群が各付値を固定。','SNC uniqueness makes the subgroup fixing the finite set fix each valuation.',cite('Lemma 3.2; pp. 4--5')+'\quad '+cite('Prop. 3.5; p. 7'))
])

# Branches are terminal paths, not steps of a single chain.
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
o+=[node('start','card','1. 定数体を保って境界を残す','1. Preserve constants and the boundary',r'$H^0(\mathcal O_X)=k,\quad K_X+B\sim_{\mathbb Q}0,\quad 0<b=b(t)<t.$')]
o+=[node('mori','card','2. 第1のMoriファイバー空間','2. The first Mori fibre space',r'$X_1\to Z_1,\quad S_1\text{ relatively ample},\quad \operatorname{coeff}_{S_1}B_1\ge t.$','below=1.8cm of start')]
o += [r'\flow{start}{mori}{\Tx{$S$ に正なMMPで $S$ を保存。}{An $S$-positive MMP preserves $S$.}\\[4pt]'+cite('Lemmas 2.1, 4.1--4.2; pp. 2--3, 7--8')+'}']
o+=[node('done','result,text width=6.45cm','3a. 正次元の底：終了','3a. Positive-dimensional base: end',r'$0<\dim Z_1<d,\quad r=d-\dim Z_1.$\\ $c(S/k)\le N(r,t)\le M_{<d}(t).$',r'below=2.2cm of mori.south,xshift=-4cm')]
o+=[node('next','half','3b. 点の底：補完を選ぶ','3b. Point base: choose a complement',r'$C_1\ge bS_1,\quad n(K_{X_1}+C_1)\sim0.$\\ $n=n(d,b),\quad\epsilon=1/n.$\\ \Tx{第2図へ進む。}{Continue to Figure 2.}',r'below=2.2cm of mori.south,xshift=4cm')]
o+=[branch('mori','done','水平な $S_1$ を一般ファイバーで帰納。','Induct for horizontal $S_1$ on the generic fibre.',cite('(5.3); p. 11'),-4)]
o+=[branch('mori','next','Fanoかつ $-(K+bS_1)$ nefに補完を適用。','Apply complements to the Fano model with $-(K+bS_1)$ nef.',cite('Lemma 3.1; pp. 4, 11'),4)]
o+=[r'\end{tikzpicture}'];(P/'induction.tikz').write_text('\n'.join(o))
o=[r'\begin{tikzpicture}']
o+=[node('input','card','1. 低discrepancyを抽出して $K$-MMP','1. Extract low discrepancies, then run a $K$-MMP',r'$n(K_{X_1}+C_1)\sim0,\quad\epsilon=1/n.$\\ $a(v,X_1,0)<1/n\ \Longrightarrow\ a(v,X_1,C_1)=0.$')]
o+=[node('mori','card','2. 第2のMoriファイバー空間','2. The second Mori fibre space',r'$X_2\dashrightarrow X_3\to Z,\quad X_3\text{ is }1/n\text{-lc}.$\\ $n(K_{X_3}+C_3)\sim0,\quad a(v_S,X_3,C_3)\le1-b<1.$','below=1.8cm of input')]
o+=[r'\flow{input}{mori}{\Tx{指数の離散性と有限抽出で $1/n$-lc性を確保。}{Discreteness and finite extraction give the $1/n$-lc bound.}\\[4pt]'+cite('Cor. 3.3; pp. 5, 11--12')+'}']
o+=[node('point','result,text width=6.45cm','3a. 点の底：終了','3a. Point base: end',r'$\dim Z=0,\quad X_3\text{ Fano}.$\\ $c(S/k)\le A(d,1/n,n).$\\ \Tx{軌道評価は第3図。}{Orbit bound: Figure 3.}',r'below=2.1cm of mori.south,xshift=-4cm')]
o+=[node('recover','half','3b. 正次元の底：付値を回復','3b. Positive base: recover the valuation',r'$U\to Z\text{ of Fano type},\quad P=v_S.$\\ $\operatorname{coeff}_{P}C_U\ge b,\quad n(K_U+C_U)\sim0.$',r'below=2.1cm of mori.south,xshift=4cm')]
o+=[branch('mori','point','元の因子が消えていても付値に適用。','Apply to the valuation even if its divisor is contracted.',cite('Prop. 3.5; (5.7); pp. 6--7, 12'),-4)]
o+=[branch('mori','recover','小さいklt摂動の下で、必要なら $v_S$ だけ抽出。','Use a small klt perturbation; extract only $v_S$ if needed.',cite('$\S5.4$; p. 12'),4)]
o+=[node('horizontal','result,text width=6.45cm','4a. $P$ が水平：終了','4a. Horizontal $P$: end',r'$c(S/k)=c(P/k)\le M_{<d}(b).$',r'below=7.8cm of mori.south,xshift=-4cm')]
o+=[node('vertical','half','4b. $P$ が垂直：随伴へ','4b. Vertical $P$: use adjunction',r'\Tx{水平係数1成分 $E$ を作り、\\$P$ との交差へ帰納する（第4図）。}{Find horizontal coefficient-one $E$;\\induct on its intersection with $P$ (Fig. 4).}',r'below=7.8cm of mori.south,xshift=4cm')]
o+=[branch('recover','horizontal','次元 $d-\dim Z<d$、係数下限 $b$ で帰納。','Induct in dimension $d-\dim Z<d$ with threshold $b$.',cite('(5.8); p. 12'),-4)]
o+=[branch('recover','vertical','一般ファイバーには $P$ が残らない。','The generic fibre does not retain $P$.',cite('$\S\S5.5$--$5.6$; pp. 13--14'),4)]
o+=[r'\end{tikzpicture}'];(P/'second-mmp.tikz').write_text('\n'.join(o))
diagram('vertical',[
('bigな因子から水平係数1成分','A horizontal coefficient-one component from bigness',r'$\pi^*S_1\text{ big}\ \Longrightarrow\ (\pi^*S_1)_{X_3}\text{ big}.$\\ $E_3\subset\lfloor C_3\rfloor\text{ horizontal},\quad c(E_3/k)\le M_{<d}(1).$'),
('交差を実際の引戻しで作る','Force intersection through an actual pullback',r"$mP'=f^*T\ne0,\quad E\to Z'\text{ surjective}.$\\ $0\ne J\subset P'|_{E^\nu}.$"),
('同じ指数 $n$ で随伴','Apply adjunction in the same index $n$',r'$n(K_{E^\nu}+C_{E^\nu})\sim0,\quad nC_{E^\nu}\text{ integral}.$\\ $\operatorname{coeff}_{J}C_{E^\nu}>0\ \Longrightarrow\ \operatorname{coeff}_{J}C_{E^\nu}\ge1/n.$'),
('定数体上の帰納と次数の積','Induct over the constants and multiply degrees',r'$c(J/k)=[k_E:k]c(J/k_E)$\\ $\hphantom{c(J/k)}\le M_{<d}(1)N(d-1,1/n).$'),
('余次元2で元の共役数を数える','Count the original conjugates at codimension two',r"$c(S/k)=c(P'/k)\le\dfrac2b\,c(J/k)$\\ $\hphantom{c(S/k)}\le\dfrac2b M_{<d}(1)N(d-1,1/n).$")
],[
('垂直な $-P$ のMMPは水平な $E$ を保存し、$E$ は底に全射。','The relative $-P$ MMP preserves horizontal $E$, which surjects onto the base.',cite('Lemma 4.3; $\S\S5.5$--$5.6$; pp. 8--9, 13')),
('留数の冪の比較で指数を保存。$P$ を加えるとdifferentに正の項が入る。','Compare powers of residues to retain $n$; adding $P$ contributes a positive term.',cite('Lemma 4.4; pp. 9--10')+'\quad '+cite('[Kol10] (122.7); p. 62','https://web.math.princeton.edu/~kollar/book/chap2.pdf#page=62')),
('次元 $d-1$、係数下限 $1/n$、大域関数体 $k_E$ で帰納。','Induct in dimension $d-1$, with threshold $1/n$ and global constants $k_E$.',cite('Lemma 2.1; (5.11); pp. 2--3, 14')),
('各共役の像を通る係数 $\ge b$ の成分は高々 $2/b$ 個。','At most $2/b$ components of coefficient at least $b$ pass through each image.',cite('Lemma 4.5; (5.12); pp. 10, 14'))
])
