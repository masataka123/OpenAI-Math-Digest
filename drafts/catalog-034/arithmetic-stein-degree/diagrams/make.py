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
diagram('induction',[
('定数体を保って次元帰納','Induct while retaining the constant-field condition',r'$H^0(X,\mathcal O_X)=k,\quad K_X+B\sim_{\mathbb Q}0,\quad b\in\mathbb Q,\ 0<b<t.$'),
('境界成分を相対的に豊富にする','Make the boundary component relatively ample',r'$X_1\to Z_1,\quad S_1\text{ relatively ample}.$\\ \Tx{$\dim Z_1>0$：一般ファイバーへ帰納。}{If $\dim Z_1>0$, apply generic-fibre induction.}'),
('底が点：有界な指数の補完を作る','Point base: construct a complement of bounded index',r'$C_1\ge bS_1,\quad n(K_{X_1}+C_1)\sim0,\quad n=n(d,b).$'),
('低discrepancyを抽出し、再びMMP','Extract low discrepancies, then run another MMP',r'$X_2\dashrightarrow X_3\to Z,\quad X_3\text{ is }1/n\text{-lc},\quad a(v_S,X_3,C_3)<1.$'),
('残る三場合をそれぞれ抑える','Bound the three remaining cases',r'\Tx{点の底：Prop. 3.5。水平な $P$：一般ファイバー。\\垂直な $P$：水平係数1成分から随伴（第3図）。}{Point base: Prop. 3.5. Horizontal $P$: generic fibre.\\Vertical $P$: adjunction from a horizontal coefficient-one component (Fig. 3).}')
],[
('負性補題で $S$ を残すMMP。','An $S$-positive MMP preserves $S$.',cite('Lemmas 2.1, 4.1--4.2; pp. 2--3, 7--8')),
('固定係数 $b$ に補完を適用し、一般元で $k$ へ降下。','Apply complements with fixed $b$; descend a general member to $k$.',cite('Lemma 3.1; p. 4')+'\quad '+cite('[Bir19] Thm. 1.7; p. 4','https://arxiv.org/pdf/1603.05765v4')),
('指数 $n$ がdiscrepancyを離散化：$a<1/n$ なら補完のlc place。','Index $n$ discretizes discrepancies: $a<1/n$ forces an lc place.',cite('Cor. 3.3; p. 5')+'\quad '+cite('$\S5.3$; pp. 11--12')),
('元の付値を相対Fano typeモデル上の $P$ として回復。','Recover the original valuation as $P$ on a relative Fano type model.',cite('$\S\S5.4$--$5.7$; pp. 12--14'))
])
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
diagram('vertical',[
('垂直な $P$ と、以前のbigness','Vertical $P$ and the earlier bigness',r'$\pi^*S_1\text{ big};\quad (\pi^*S_1)_{X_3}\text{ big}.$\\ $E_3\subset\lfloor C_3\rfloor,\quad E_3\text{ horizontal over }Z.$'),
('相対MMPで交差を作る','Force an intersection by a relative MMP',r"$mP'=f^*T\ne0,\quad E\to Z'\text{ surjective},\quad 0\ne J\subset P'|_{E^\nu}.$"),
('同じ指数で随伴し、定数体上で帰納','Adjunction in the same index; induct over the constants',r"$n(K_{E^\nu}+C_{E^\nu})\sim0,\quad\operatorname{coeff}_{J} C_{E^\nu}\ge1/n.$\\ $c(J/k)=[k_E:k]c(J/k_E)\le M_{<d}(1)N(d-1,1/n).$"),
('余次元2で共役を数える','Count conjugates through codimension-two centres',r"$c(S/k)=c(P'/k)\le\dfrac2b\,c(J/k)\le\dfrac2b M_{<d}(1)N(d-1,1/n).$")
],[
('bigな因子には水平成分が必要。$-P$ のMMPで引戻し表示を得る。','Bigness forces a horizontal component; a $-P$ MMP gives a pullback.',cite('$\S5.5$; p. 13')+'\quad '+cite('Lemma 4.3; pp. 8--9')),
('有理pluriresidueは指数を保つ。$E$ の定数体も一般ファイバーで抑える。','Rational pluriresidue retains the index; generic-fibre induction bounds $k_E$.',cite('Lemma 4.4; pp. 9--10')+'\quad '+cite('(5.10)--(5.11); pp. 13--14')),
('各中心を通る係数 $\ge b$ の成分は高々 $2/b$ 個。','At most $2/b$ components of coefficient at least $b$ pass through each centre.',cite('Lemma 4.5; p. 10')+'\quad '+cite('(5.12); p. 14'))
])
