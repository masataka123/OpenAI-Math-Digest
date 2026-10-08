import {text, sourceCommit, papers, paperSource} from './site.mjs';

const rawRoot = 'https://raw.githubusercontent.com/openai/math/' + sourceCommit + '/preprints/';
export const schnellPdf = rawRoot + papers.find(p => p.id === 'schnell-fiber-spaces').path;
export const abundanceSource = paperSource(papers.find(p => p.id === 'log-abundance-characteristic-zero'));
export const source = (label, page) => ({label, url: schnellPdf + '#page=' + page});
export const externalSources = {
  reduction: 'https://arxiv.org/pdf/2202.01295v1',
  criterion: 'https://arxiv.org/pdf/1405.6125v2',
  zou: 'https://arxiv.org/pdf/2409.19981v4',
};

export const article = {
  subtitle: text('良い極小モデル・混合交点数・Schnellの帰着', 'Good minimal models, mixed intersections, and Schnell’s reduction'),
  lede: text('主結果を原稿の順序で記し、証明の依存関係を引用付きの概略図と文章でたどる。', 'The results in manuscript order, followed by proof diagrams with cited inputs and an explanation of each argument.'),
  results: [
    {
      id: 'theorem-1-1', label: 'Theorem 1.1',
      title: text('Schnellの小平次元0のファイバー空間に関する結論', 'Schnell’s zero-Kodaira fiber-space conclusion'),
      paragraphs: [text(
        '$f\\colon X\\to Y$ を、滑らかな連結射影複素多様体の間の、連結ファイバーをもつ全射とする。$F$ をその滑らかな幾何学的生成ファイバーとし、$\\kappa(F)=0$ と仮定する。$Y$ 上の豊富なCartier因子 $H$ と正整数 $m_0$ が存在して、$m_0K_X-f^*H$ が擬有効であるとする。このとき、',
        'Suppose $X$ and $Y$ are smooth connected projective complex varieties and $f\\colon X\\to Y$ is surjective with connected fibers. Assume its smooth geometric generic fiber $F$ has $\\kappa(F)=0$. If $H$ is an ample Cartier divisor on $Y$ and $m_0$ a positive integer such that $m_0K_X-f^*H$ is pseudo-effective, then'
      )],
      formula: '$$\\kappa(X)=\\dim Y.$$',
      source: source('Theorem 1.1 · p. 1',1),
    },
    {
      id: 'corollary-1-2', label: 'Corollary 1.2', title: text('Campana–Peternell','Campana–Peternell'),
      paragraphs: [text(
        '$X$ を滑らかな連結射影複素多様体、$D$ を $X$ 上の有効Cartier因子、$m_0$ を正整数とする。$m_0K_X-D$ が擬有効ならば、',
        'For a smooth connected projective complex variety $X$, an effective Cartier divisor $D$ on $X$, and a positive integer $m_0$, pseudo-effectivity of $m_0K_X-D$ implies'
      )],
      formula: '$$\\kappa(X)\\ge\\kappa(D).$$',
      source: source('Corollary 1.2 · p. 2',2),
    },
    {
      id: 'corollary-1-3', label: 'Corollary 1.3',
      title: text('Schnellの一般のファイバー空間に関する結論', 'Schnell’s general fiber-space conclusion'),
      paragraphs: [text(
        '$f\\colon X\\to Y$ を、滑らかな連結射影複素多様体の間の、連結ファイバーをもつ全射とし、$F$ を非常に一般の滑らかなファイバーとする。$H$ は $Y$ 上の豊富なCartier因子、$m_0$ は正整数で、$m_0K_X-f^*H$ が擬有効であると仮定する。このとき、',
        'Suppose $f\\colon X\\to Y$ is surjective with connected fibers, with $X$ and $Y$ smooth connected projective complex varieties. Let $F$ be a very general smooth fiber. For an ample Cartier divisor $H$ on $Y$ and a positive integer $m_0$, assume $m_0K_X-f^*H$ is pseudo-effective. Then'
      )],
      formula: '$$\\kappa(X)=\\kappa(F)+\\dim Y.$$',
      after: text('さらに、正整数 $r,\\ell_0$ が存在し、すべての整数 $\\ell\\ge\\ell_0$ に対して、', 'There also exist positive integers $r,\\ell_0$ such that, for every integer $\\ell\\ge\\ell_0$,'),
      secondFormula: '$$H^0\\!\\left(X,\\mathcal O_X(\\ell rK_X-f^*H)\\right)\\ne0.$$',
      source: source('Corollary 1.3 · p. 2',2),
    },
  ],
  resultNote: text('以下はこれらの主張の論証を整理したものです。Corollary 1.3 の $r,\\ell_0$ について、一様な値は主張されていません。', 'The account below traces the arguments for these claims. No uniform values of $r,\\ell_0$ are asserted in Corollary 1.3.'),
  proofs: [
    {
      id:'argument', diagram:'theorem',
      title:text('Theorem 1.1 の証明', 'Proof of Theorem 1.1'),
      intro:text(
        '$\\dim Y=0$ なら $F=X$ なので結論は仮定そのもの。共通解消を $X\\xleftarrow{p}W\\xrightarrow{q}V$ と書き、$d=\\dim X$、$y=\\dim Y>0$、$h=fp$ とする。図中の $A$ は $V$ 上の非常に豊富なCartier因子である。',
        'If $\\dim Y=0$, then $F=X$ and the conclusion is the hypothesis. Write $X\\xleftarrow{p}W\\xrightarrow{q}V$ for the common resolution, and put $d=\\dim X$, $y=\\dim Y>0$, and $h=fp$. In the diagram, $A$ is a very ample Cartier divisor on $V$.'
      ),
      caption:text('図1：モデルの構成 → 次元の上下界 → 同じ曲線類に対する二つの評価と矛盾。', 'Figure 1. Construct the model, bound the dimensions, and compare two pairings with the same curve class.'),
      alt:text('主定理の証明図。外部のモデル存在定理から切断を移送し、Lemma 2.3の非負性と負値の計算を突き合わせ、Lemma 2.2の上界と結合する。', 'Proof of Theorem 1.1: model existence, section transfer, the two intersection inequalities from Lemma 2.3, and the upper bound from Lemma 2.2.'),
      parts:[
        {
          title:text('1. モデル存在から得る二つの入力', '1. Two outputs of model existence'),
          body:text(
            '$H$ の豊富性から $f^*H$ は擬有効であり、仮定と合わせて $K_X$ も擬有効となる。Theorem 3.1 はこの条件の下で、$K_X$-negativeな双有理縮約 $X\\dashrightarrow V$ を与える。$V$ は正規射影 $\\mathbb Q$-factorial klt、$K_V$ は半豊富で、共通解消上では下の比較式を満たす。この定理は [LA, Corollary 11.2] の引用であり、モデルの構成自体は本稿の外部入力である。',
            'Ampleness makes $f^*H$ pseudo-effective, so the numerical hypothesis implies pseudo-effectivity of $K_X$. Theorem 3.1 gives a $K_X$-negative birational contraction $X\\dashrightarrow V$, with $V$ normal, projective, $\\mathbb Q$-factorial and klt, and $K_V$ semiample. It also supplies the comparison below on a common resolution. This theorem is [LA, Corollary 11.2]; constructing the model is an external input.'
          ),
          formula:'$$X\\xleftarrow{p}W\\xrightarrow{q}V,\\qquad p^*K_X=q^*K_V+E,\\qquad E\\ge0,\\quad q_*E=0.$$',
          refs:[source('Theorem 3.1 / §3 · pp. 7–8',7),{label:'[LA] Corollary 11.2 · pp. 73–74',url:abundanceSource}],
        },
        {
          title:text('2. 有効性で切断を移し、像の次元を比較する', '2. Effectivity transfers the sections'),
          body:text(
            '$D=rK_V$ をCartierかつ大域生成に取り、$g\\colon V\\to Z$ を対応する射、$k=\\dim Z$ とする。$rE$ は有効Cartier因子なので、その標準切断を掛けることで $H^0(V,D)\\hookrightarrow H^0(X,rK_X)$ を得る。切断の比は変わらず、$k\\le\\kappa(X)$ となる。一方、Lemma 2.2 は $\\kappa(F)=0$ を使って $\\kappa(X)\\le y$ を与える。従って、残る仕事は $k\\ge y$ である。',
            'Choose $D=rK_V$ Cartier and globally generated, and write $g\\colon V\\to Z$ for its morphism and $k=\\dim Z$. Since $rE$ is effective Cartier, multiplication by its canonical section gives $H^0(V,D)\\hookrightarrow H^0(X,rK_X)$. The section ratios are unchanged, hence $k\\le\\kappa(X)$. Independently, Lemma 2.2 uses $\\kappa(F)=0$ to give $\\kappa(X)\\le y$. It remains to prove $k\\ge y$.'
          ), refs:[source('§2.3, (2.5)–(2.6) · pp. 6–7',6),source('Lemma 2.2 · pp. 4–5',4)],
        },
        {
          title:text('3. 同じ曲線類に対する二つの評価を衝突させる', '3. Incompatible pairings with the same curve class'),
          body:text(
            '$k<y$ と仮定し、Lemma 2.3 の曲線類 $C=(q^*D)^k(q^*A)^{d-k-1}$ を取る。$B=m_0p^*K_X-h^*H$ は元の擬有効類の引き戻しなので擬有効であり、同補題(1)から $B\\cdot C\\ge0$。他方、同補題(2)は $q_*E=0$ を使って $E\\cdot C=0$ を与え、(3)は $q^*D\\cdot C=0$ と $h^*H\\cdot C>0$ を与える。比較式へ代入すると、',
            'Assume $k<y$ and use the curve class $C=(q^*D)^k(q^*A)^{d-k-1}$ of Lemma 2.3. The pullback $B=m_0p^*K_X-h^*H$ is pseudo-effective, so part (1) gives $B\\cdot C\\ge0$. Part (2) uses $q_*E=0$ to give $E\\cdot C=0$, while part (3) gives $q^*D\\cdot C=0$ and $h^*H\\cdot C>0$. The canonical comparison therefore yields'
          ),
          formula:'$$0\\le B\\cdot C=m_0\\left(\\frac1r q^*D+E\\right)\\cdot C-h^*H\\cdot C=-h^*H\\cdot C<0.$$',
          after:text(
            '正値性の要点は、$y>k$ により $h$ の余接方向が $gq$ のものに含まれず、$A$ からの方向と合わせて横断的な交点を作れることにある。例外項の消滅には、$C$ の全因子を $V$ から引き戻したことが効く。従って $k\\ge y$、ゆえに $y\\le k\\le\\kappa(X)\\le y$。これが良い極小モデルを仮定した Theorem 2.1 の議論であり、Theorem 3.1 を入力して Theorem 1.1 が従う。',
            'For strict positivity, $y>k$ supplies a cotangent direction from $h$ outside those from $gq$; directions from $A$ complete a transverse intersection. Pulling all factors of $C$ back from $V$ kills the exceptional term. Thus $k\\ge y$ and $y\\le k\\le\\kappa(X)\\le y$. This is the good-model argument of Theorem 2.1; Theorem 3.1 supplies its model, completing Theorem 1.1.'
          ),refs:[source('Lemma 2.3(1)–(3) · pp. 5–6',5),source('Theorem 2.1, §2.3 / (2.7) · pp. 6–7',7)],
        },
      ],
    },
    {
      id:'campana-proof', diagram:'campana',
      title:text('Corollary 1.2 の証明', 'Proof of Corollary 1.2'),
      intro:text(
        'Theorem 3.1 と切断の移送は、滑らかな射影複素多様体 $T$ に対する $K_T\\in\\overline{\\operatorname{Eff}}(T)\\Rightarrow\\kappa(T)\\ge0$ も与える（§4.1）。$\\kappa(D)=0$ の場合はこの非消滅で終わる。図2は $\\kappa(D)>0$ の場合である。',
        'Theorem 3.1 and section transfer also give $K_T\\in\\overline{\\operatorname{Eff}}(T)\\Rightarrow\\kappa(T)\\ge0$ for smooth projective complex $T$ (§4.1). This nonvanishing settles $\\kappa(D)=0$. Figure 2 treats $\\kappa(D)>0$.'
      ),
      caption:text('図2：数値的仮定を保ちながら底の次元を増やす。正の小平次元の間だけ反復し、有限回でTheorem 1.1を適用する。', 'Figure 2. The numerical hypothesis is preserved while the base dimension increases; iterate only while the fiber has positive Kodaira dimension, then apply Theorem 1.1.'),
      alt:text('Campana–Peternell不等式の証明図。有効因子の飯高ファイブレーションへ移り、ファイバーの小平次元が正なら底の次元を増やす操作を反復し、0なら主定理を適用する。', 'Proof of Corollary 1.2: pass to an Iitaka fibration, iterate when the fiber has positive Kodaira dimension, and apply Theorem 1.1 when it is zero.'),
      parts:[
        {
          title:text('1. 因子の飯高次元を、底の次元へ移す', '1. Realize the Iitaka dimension as a base dimension'),
          body:text(
            '[Sch22, §§4–6] に従い $|nD|$ の解消、Stein分解、底の解消を行う。得られる $f_0\\colon X_0\\to Y_0$ は $\\dim Y_0=\\kappa(D)$ を満たし、豊富なCartier因子 $H_0$ に対して $a_0K_{X_0}-f_0^*H_0$ が擬有効である。底の解消で生じるbigかつnefな引き戻しは、十分な倍数を取り有効因子を差し引くことで、必要な豊富因子へ置き換える。非常に一般のファイバーへの制限と非消滅から、各段階で $\\kappa(F_i)\\ge0$ が得られる。',
            'Resolve $|nD|$, take Stein factorization, and resolve the base as in [Sch22, §§4–6]. This gives $f_0\\colon X_0\\to Y_0$ with $\\dim Y_0=\\kappa(D)$ and pseudo-effective $a_0K_{X_0}-f_0^*H_0$ for an ample Cartier divisor $H_0$. On resolving the base, a sufficiently divisible big and nef pullback minus an effective divisor supplies the required ample divisor. Restriction to very general fibers, followed by nonvanishing, gives $\\kappa(F_i)\\ge0$ at every stage.'
          ),refs:[{label:'[Sch22] §§4–6 · p. 2',url:externalSources.reduction+'#page=2'},source('§4.1–4.2, (4.2) · pp. 8–9',9)],
        },
        {
          title:text('2. 正の小平次元を、増大する底の次元へ吸収する', '2. Absorb positive fiber Kodaira dimension into the base'),
          body:text(
            '$\\kappa(F_i)>0$ の間は [Sch22, Lemma 7.1] の構成を使い、$L_i\\sim r_iK_{X_i}+f_i^*(b_iH_i)$ を有効に取り、$\\kappa(L_i)=\\kappa(F_i)+\\dim Y_i$ とする。数値的仮定が次の段階にも残る理由は、次の恒等式にある。',
            'While $\\kappa(F_i)>0$, the construction in [Sch22, Lemma 7.1] gives effective $L_i\\sim r_iK_{X_i}+f_i^*(b_iH_i)$ with $\\kappa(L_i)=\\kappa(F_i)+\\dim Y_i$. The numerical hypothesis survives because'
          ),
          formula:'$$(a_ib_i+r_i)K_{X_i}-L_i\\sim b_i(a_iK_{X_i}-f_i^*H_i).$$',
          after:text(
            '$L_i$ に再び因子からファイバー空間への帰着を適用すると、$\\dim Y_{i+1}=\\dim Y_i+\\kappa(F_i)$。底の次元は狭義に増え、$\\dim X$ 以下なので、有限回で $\\kappa(F_j)=0$ となる。§4.1で非常に一般のファイバーと幾何学的生成ファイバーの小平次元を同一視できるため、Theorem 1.1 が適用できる。双有理不変性により $\\kappa(X)=\\dim Y_j\\ge\\dim Y_0=\\kappa(D)$ を得る。',
            'Apply the divisor-to-fiber-space reduction to $L_i$ again: $\\dim Y_{i+1}=\\dim Y_i+\\kappa(F_i)$. These dimensions strictly increase and are bounded by $\\dim X$, so some finite stage has $\\kappa(F_j)=0$. Section 4.1 identifies the Kodaira dimensions of very general and geometric generic fibers, allowing Theorem 1.1 to apply. Birational invariance gives $\\kappa(X)=\\dim Y_j\\ge\\dim Y_0=\\kappa(D)$.'
          ),refs:[{label:'[Sch22] Lemma 7.1 / §9 · p. 3',url:externalSources.reduction+'#page=3'},source('§4.2 · p. 9',9)],
        },
      ],
    },
    {
      id:'general-proof', diagram:'general',
      title:text('Corollary 1.3 の証明', 'Proof of Corollary 1.3'),
      intro:text(
        'ここでは、まずCorollary 1.2から小平次元の等式を得る。その等式をFujita–Moriの判定へ入力し、元の豊富因子 $H$ を引いた切断を構成する。',
        'First use Corollary 1.2 to obtain equality of Kodaira dimensions. Feed that equality into the Fujita–Mori criterion, then construct a section after subtracting the original ample divisor $H$.'
      ),
      caption:text('図3：Campana–Peternell不等式 → 小平次元の等式 → bigな引き戻しを引いた切断 → 元の豊富因子を引いた切断。', 'Figure 3. Campana–Peternell, equality of Kodaira dimensions, a big negative twist, and the original ample negative twist.'),
      alt:text('一般のファイバー空間の証明図。Corollary 1.2とeasy additionから等式を得て、Popa–Schnell Lemma 4.6に記録されたFujita–Mori判定、巨大性、豊富性を順に使って切断を構成する。', 'Proof of Corollary 1.3: Corollary 1.2 and easy addition give equality; the Fujita–Mori criterion, bigness, and ampleness produce the required sections.'),
      parts:[
        {
          title:text('1. 有効因子にCorollary 1.2を適用する', '1. Apply Corollary 1.2 to the effective twist'),
          body:text(
            '§4.1から $\\kappa(F)\\ge0$ を得た上で、[Sch22, Lemma 7.1] の構成により $L\\sim aK_X+f^*(bH)$ を有効に取り、$\\kappa(L)=\\kappa(F)+\\dim Y$ とする。$(m_0b+a)K_X-L\\sim b(m_0K_X-f^*H)$ が擬有効なので、Corollary 1.2 は $\\kappa(X)\\ge\\kappa(L)$ を与える。easy additionによる逆向きの不等式と合わせて、$\\kappa(X)=\\kappa(F)+\\dim Y$ となる。',
            'After §4.1 gives $\\kappa(F)\\ge0$, use the construction in [Sch22, Lemma 7.1] to choose effective $L\\sim aK_X+f^*(bH)$ with $\\kappa(L)=\\kappa(F)+\\dim Y$. Since $(m_0b+a)K_X-L\\sim b(m_0K_X-f^*H)$ is pseudo-effective, Corollary 1.2 gives $\\kappa(X)\\ge\\kappa(L)$. Easy addition gives the reverse bound, hence $\\kappa(X)=\\kappa(F)+\\dim Y$.'
          ),refs:[source('Corollary 1.2 / §4.3 · pp. 2, 10',10),{label:'[Sch22] Lemma 7.1 · p. 3',url:externalSources.reduction+'#page=3'}],
        },
        {
          title:text('2. 等式を切断の存在へ変換し、捻りを調整する', '2. Convert equality into a section and adjust the twist'),
          body:text(
            '[PS14, Lemma 4.6] のFujita–Mori判定を $N=\\omega_X$ に適用すると、$Y$ 上のbig Cartier因子 $B$ と $0\\ne\\sigma\\in H^0(X,uK_X-f^*B)$ を得る。$B$ の巨大性から $0\\ne\\tau\\in H^0(Y,vB-H)$ を選べば、$r=uv$ として $s=\\sigma^vf^*\\tau$ は $rK_X-f^*H$ の非零切断となる。さらに $H$ の豊富性により、すべての十分大きな $\\ell$ で $0\\ne\\tau_\\ell\\in H^0(Y,(\\ell-1)H)$ が存在し、$s^\\ell f^*\\tau_\\ell$ が所要の切断を与える。',
            'Apply the Fujita–Mori criterion in [PS14, Lemma 4.6] with $N=\\omega_X$. It supplies a big Cartier divisor $B$ on $Y$ and $0\\ne\\sigma\\in H^0(X,uK_X-f^*B)$. Choose $0\\ne\\tau\\in H^0(Y,vB-H)$ using bigness; then $r=uv$ and $s=\\sigma^vf^*\\tau$ give a nonzero section of $rK_X-f^*H$. Ampleness of $H$ supplies $0\\ne\\tau_\\ell\\in H^0(Y,(\\ell-1)H)$ for every sufficiently large $\\ell$, and $s^\\ell f^*\\tau_\\ell$ is the required section.'
          ),
          after:text(
            '$Y$ が点の場合、等式は自明であり、切断の存在は§4.1の非消滅と切断の冪から従う。',
            'When $Y$ is a point, the equality is tautological and the section assertion follows from nonvanishing in §4.1 and powers of a nonzero section.'
          ),refs:[{label:'[PS14] Lemma 4.6 · p. 14',url:externalSources.criterion+'#page=14'},source('§4.3 · p. 10',10)],
        },
      ],
    },
  ],
};

// Shared by the article and catalogue: these are inputs, not mere bibliographic citations.
export const dependencies = [
  {
    id: 'canonical-good-model', withinCatalog: true,
    from: 'Log abundance in characteristic zero',
    result: 'Corollary 11.2 · pp. 73–74',
    url: abundanceSource,
    to: source('Schnell: Theorem 3.1 → Theorem 2.1; §4.1 · pp. 7–8', 7),
    role: text('滑らかな射影複素多様体の $K$ が擬有効なら、半豊富な良い極小モデルと有効例外因子の比較式を供給。主定理と非消滅の両方に使う。', 'For smooth projective complex varieties with pseudo-effective $K$, supplies a semiample good minimal model and the effective exceptional comparison. Used for both the main theorem and nonvanishing.'),
    check: text('記述・比較式・適用仮定を照合。モデル存在の証明全体は未検証。', 'Statement, comparison, and application hypotheses matched; the full model-existence proof is not verified.'),
  },
  {
    id: 'schnell-reduction', withinCatalog: false,
    from: 'Christian Schnell, Singular metrics and a conjecture by Campana and Peternell',
    result: 'arXiv:2202.01295v1 · §§4–10, Lemma 7.1 · pp. 2–4',
    url: externalSources.reduction + '#page=2',
    to: source('Schnell: §4.2–4.3 · pp. 9–10', 9),
    role: text('非消滅を入力として、有効因子からファイバー空間へ移し、正の底の捻りを使って $\\kappa(F)=0$ へ帰着する。', 'With nonvanishing as input, passes from an effective divisor to fiber spaces and uses a positive base twist to reduce to $\\kappa(F)=0$.'),
    check: text('帰着と Lemma 7.1 の構成・使用箇所を照合。その先の引用証明は未検証。', 'Reduction, construction in Lemma 7.1, and use matched; deeper cited proofs are not verified.'),
  },
  {
    id: 'fujita-mori', withinCatalog: false,
    from: 'Mihnea Popa–Christian Schnell, On direct images of pluricanonical bundles',
    result: 'arXiv:1405.6125v2 · Lemma 4.6 · p. 14',
    url: externalSources.criterion + '#page=14',
    to: source('Schnell: §4.3 · p. 10', 10),
    role: text('Fujita–Moriの判定。小平次元の等式から、底の巨大因子を引いた多重標準切断の存在へ進む。', 'The Fujita–Mori criterion turns equality of Kodaira dimensions into a pluricanonical section minus a big pullback.'),
    check: text('補題の記述と $N=\\omega_X$ の適用を照合。Fujita・Moriの原証明は未検証。', 'Lemma statement and application with $N=\\omega_X$ matched; the original Fujita–Mori proofs are not verified.'),
  },
];
