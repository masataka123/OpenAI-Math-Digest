from pathlib import Path
import json
r=Path(__file__).resolve().parents[3]
a=r/'drafts/catalog-187/snaky-in-21-maker-moves/diagrams'
t=set(map(tuple,json.loads((r/'coordination/catalog-187/astra-20261015/validation/reconstruction/INDEPENDENT-RESULT.json').read_text())['final']['T']))
assert len(t)==251 and all(0<=x<=16 and 0<=y<=16 for x,y in t)
head=r'''% Grid freshly derived from astra-20261015/validation/reconstruction/INDEPENDENT-RESULT.json.
\node[box] (a) {\Head{空の有限盤：最終領域と17×17正方形}{Empty finite boards: the final envelope and the 17×17 square}
\begin{tikzpicture}[x=.32cm,y=.32cm,baseline=0cm]
'''
for x in range(17):
 for y in range(17):
  head+=f'\\draw[{"fill=white" if (x,y) in t else "pattern=north east lines,pattern color=soft"},draw=soft] ({x},{y}) rectangle +(1,1);\n'
head+=r'''
\node[draw=green,rectangle,inner sep=.5pt,font=\scriptsize] at (8.5,8.5) {$p$};
\draw[green] (0,0) rectangle (17,17);
\foreach \n in {0,8,16}{\node[font=\scriptsize,anchor=north] at (\n+.5,0) {$\n$};\node[font=\scriptsize,anchor=east] at (0,\n+.5) {$\n$};}
\node[anchor=west,align=left,text width=6.7cm,inner sep=0pt,font=\small] at (19,9) {
$T_{727}:\ 251$ \Tx{マス}{cells}\\[6pt]
\Tx{白：$T_{727}$内の空きマス。}{White: free cells of $T_{727}$.}\\
\Tx{斜線：正方形内の $T_{727}$外。}{Hatching: square cells outside $T_{727}$.}\\
\Tx{斜線はBreaker石ではない。}{Hatching does not denote Breaker stones.}\\[6pt]
$p=(8,8)$\quad\Tx{最初の候補、まだ未所有。}{First candidate, not yet owned.}\\
\Tx{初期状態では全マスが空き。}{All board cells are initially free.}\\[6pt]
\Tx{縦軸 $y$、横軸 $x$。左下隅がマス座標。}{Vertical $y$, horizontal $x$; coordinates name lower-left corners.}
};
\end{tikzpicture}};
\node[box,below=1.8cm of a] (b) {\Head{指定マスも置換先も盤内にある}{Both prescribed and replacement cells stay on the board}
$F_i(T_i)\subseteq F(T),\quad p\in T$\\[4pt]
\Tx{子領域・ピボット・最後の完成形は最終領域内に残る。}{Child envelopes, pivots and terminal copies remain in the final envelope.}\\
\Tx{第 $m\leq21$ 回のMaker着手前：}{Before Maker claim $m\leq21$:}\\
$\#\text{occupied cells}\leq2(m-1)\leq40<251.$\\
\Tx{既所有ピボットの代わりに、盤内の最初の空きマスを取れる。}{An owned pivot can be replaced by the first free cell inside the board.}};
\Flow{a}{b}{\Tx{領域の入れ子と有限盤の空きマス評価を使う}{Use envelope nesting and the finite-board vacancy bound}\\\Cite{combine}\quad\Cite{finite}}
\node[result,below=1.8cm of b] (c) {\Head{両盤で21回以内。余分な応手も処理できる}{At most 21 moves on either board, including extra replies}
\Tx{17×17内で $b\notin T_{727}$ なら、全子領域を外す。}{If $b\notin T_{727}$ lies in the square, it misses every child envelope.}\\
\Tx{領域内の応手には合成補題。同じ高さ帰納法が働く。}{Replies inside are handled by composition; the same height induction applies.}\\
\Tx{251マスや17×17が最小という主張ではない。}{No minimal-board assertion is made.}};
\Flow{b}{c}{\Tx{盤内置換で実着手数を保ち、領域外応手を包含する}{Keep actual-move accounting and include replies outside the envelope}\\\Cite{finite}}
'''
(a/'finite-board.tikz').write_text(head)
