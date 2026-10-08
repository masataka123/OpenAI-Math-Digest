# Minimal metrics and interior injectivity for nef adjoints

**Extremal sections with a fixed twist and injectivity in ordinary cohomology**

The paper supplies two analytic inputs. It proves vanishing of the Lelong numbers of minimal metrics on nef klt adjoints by localizing extremal sections with one fixed ample twist. Independently, it proves ordinary $H^1$ injectivity for interior boundaries with zero-Lelong endpoint metrics, returning weighted harmonic estimates to a fixed Hilbert space and ordinary cohomology. The second proof does not use the first theorem.

## 1. Main results

### Theorem 1.1 — Minimal metrics on nef klt adjoints (pp. 1–2)

Let $(H,\Theta)$ be a normal connected projective complex klt pair with effective rational divisor $\Theta$, and suppose $D_H=K_H+\Theta$ is nef and $\mathbb Q$-Cartier. On every projective log resolution $\pi:V\to H$, the actual rational line bundle $N=\pi^*D_H$ admits a semipositive singular Hermitian metric with minimal singularities, and every such metric has zero Lelong number at every point. Neither $K_H$ nor $\Theta$ is separately required to be $\mathbb Q$-Cartier. [Theorem 1.1, pp. 1–2][MM]

### Theorem 1.2 — Interior injectivity (p. 2)

Let $V$ be smooth projective over $\mathbb C$, $L$ an integral divisor, and $0\leq C_0\leq C_2$ effective rational divisors with combined SNC support. Assume that **both actual rational line bundles** $L-C_0,L-C_2$ admit semipositive singular Hermitian metrics with zero Lelong numbers everywhere. For rational $0<\lambda<1$, put

\[
C_1=(1-\lambda)C_0+\lambda C_2,\qquad L_i=L-\lfloor C_i\rfloor\quad(i=0,1).
\]

The natural inclusion induces an injection

\[
H^1(V,\mathcal O_V(K_V+L_1))\longrightarrow H^1(V,\mathcal O_V(K_V+L_0)).
\]

[Theorem 1.2, p. 2][MM]

### Corollary 2.4 — Multiplier ideals (pp. 10–11)

Under Theorem 1.1, every minimal weight $\varphi$ satisfies $\mathcal I(t\varphi)=\mathcal O_V$ for every real $t>0$. This is independent of the minimal metric and of the Cartier multiple used to normalize its weights. [Corollary 2.4, pp. 10–11][MM]

### Corollary 4.1 — Fourfolds with nonzero Euler characteristic (p. 18)

Let $(X,\Delta)$ be a projective complex klt fourfold with effective rational boundary and nef $D=K_X+\Delta$. If $\chi(X,\mathcal O_X)\ne0$, then $D$ is semiample. No numerical-dimension restriction is imposed; the Euler hypothesis produces the first section. [Corollary 4.1, pp. 18–19][MM]

## References on the arrows

Unprefixed theorem, lemma, section and equation numbers refer to this manuscript. The principal external inputs use the following keys.

- [Fuj] Fujino, *Fundamental theorems for the log minimal model program* · Theorem 3.2 · [PDF][Fuj].
- [Dem] Demailly, *Analytic Methods in Algebraic Geometry* · July 2011 · Theorem 5.1 · [PDF][Dem].
- [Reg] Demailly, *Regularization of closed positive currents and intersection theory* · Main Theorem 1.1 · [PDF][Reg].
- [LP] Lazić–Peternell · Corollary D · [arXiv v4][LP].
- [GM] Gongyo–Matsumura · Corollary 5.3 · [2017 published version][GM].

## 2. Proof of Theorem 1.1

**Proof route.** The zero-Lelong metric theorem and [interior injectivity, Theorem 1.2](#proof-2), are independent results. [Corollary 4.1](#proof-3) uses the metric theorem with existing nonvanishing and semiampleness criteria.

Put $N=\pi^*(K_H+\Theta)$ and $n=\dim V$. Assuming positive Lelong number, replace an extremal section with a fixed twist by a section having the same value at the chosen point but smaller mass.

![Extremal sections with a fixed twist force zero Lelong numbers](diagrams/metric.en.svg)

### 1. Choose extremal sections with one fixed twist

Write $N=K_V+B$. Every coefficient of $B$ is less than one, while $B^-$ is $\pi$-exceptional; thus $e^{-b}$ is integrable for $b=[B]$. Fix very ample $H_0$ and put $A=\pi^*((n+1)H_0)$. Klt vanishing and Castelnuovo–Mumford regularity make $mN+A$ globally generated whenever $mD_H$ is Cartier. If a minimal weight $\varphi$ has positive Lelong number at $p$, choose $s_m$ maximizing $|s(p)|$ subject to

\[
Q_m(s)=\int_V|s|^{2/m}e^{-a/m-b}=1.
\]

Global generation gives $s_m(p)\ne0$. A smaller-mass section with the same value will contradict this choice.

[§2.2 · pp. 5–6][MM] · [Fuj, Theorem 3.2 · PDF p. 8][Fuj]

### 2. Localize on a fixed sublevel and solve the error

A subsequential limit of $\tau_m=m^{-1}\log|s_m|^2$ and minimality $\tau_\infty\leq\varphi+C$ allow one fixed $R$. For $g_m=\varphi+a/m-\tau_m$,

\[
\varepsilon_m=\int_{\{g_m<-R\}}e^{\tau_m-a/m-b}\longrightarrow0.
\]

Positive Lelong number also supplies fixed $c$ for which $e^{-c\varphi-b}$ is nonintegrable at $p$, retaining the negative coefficients of $B$. Fix a cutoff $\chi$ and a convex function $f$ with $c\leq f'\leq d$. On a smooth affine open avoiding $B$ and the zeros of $s_m$, Lemma 2.3, with $S_m=(m-1)\tau_m+a/m+b$, gives

\[
\bar\partial u_m=\bar\partial(\chi(g_m)s_m),\qquad
\int|u_m|^2e^{-S_m-f(g_m)}\leq C\varepsilon_m.
\]

Here $C$ depends only on $\chi,f$, not on $m$ or the open set. The external input is [Dem]'s smooth inverse-curvature estimate. The manuscript passes to singular weights by decreasing approximation and weak limits in spaces with fixed earlier weights.

[Claim 2.2; (2.5)–(2.12); Lemmas 2.1, 2.3 · pp. 5–9][MM] · [Dem, Theorem 5.1 · p. 33][Dem]

### 3. Extend past negative exceptional components and preserve evaluation

The section $w_m=\chi(g_m)s_m-u_m$ is holomorphic on the open set. An upper bound for $G_m=S_m+d\max(0,g_m)$ and its $L^2$ estimate first extend it to $V\setminus\operatorname{Supp}B^-$. Instead of assuming that bound on $B^-$, descend to the complement of a codimension-two set in $H$. The actual Cartier bundle $mD_H+A_H$ and normality of $H$ permit Hartogs extension; pulling back gives $w_m\in H^0(V,mN+A)$.

Near $p$, the section $s_m$ is nonvanishing, $\chi(g_m)=1$, and $S_m+f(g_m)=b+c\varphi+O_m(1)$. A nonzero value of $s_m-w_m$ at $p$ would contradict the finite correction norm and the nonintegrability fixed above. Hence $w_m(p)=s_m(p)$. This $O_m(1)$ is a local comparison for each $m$, distinct from the estimates requiring uniform constants.

[§2.4; (2.13)–(2.15) · pp. 9–10][MM]

### 4. Contradict extremality with a uniform Hölder bound

Take $m>d+1$ and set $I=\int_Ve^{\varphi-b}<\infty$. The exponent $d/(m-1)$ in Hölder's inequality cancels the final power $m-1$, giving

\[
Q_m(w_m)^m\leq C'\varepsilon_m(1+I)^d\longrightarrow0.
\]

All of $R,c,d,\chi,f,C',I$ are independent of $m$. For large $m$, $0<Q_m(w_m)<1$, so $Q_m(w_m)^{-m/2}w_m$ has mass one and larger evaluation at $p$ than $s_m$. This contradiction proves $\nu(\varphi,p)=0$. Corollary 2.4 then follows from Skoda integrability.

[(2.16)–(2.17); Corollary 2.4 · pp. 10–11][MM]

## 3. Proof of Theorem 1.2

This proof takes the two endpoint metrics as inputs and does not use Theorem 1.1. Start with an ordinary class in the kernel of multiplication, estimate weighted representatives, and then kill the original class in one fixed space.

![Endpoint metrics give ordinary H1 injectivity](diagrams/injectivity.en.svg)

### 1. Regularize the endpoints and align contraction with curvature

In [Reg], zero Lelong numbers make the singular set of the decreasing smooth approximants empty. Dini’s theorem makes the curvature loss uniform, while monotonicity and Skoda integrability bound the integrals at each fixed exponent. The log-sum modification in (3.1)–(3.3) makes multiplication $s:L_1\to L_0$ by the canonical section of $E=\lfloor C_1\rfloor-\lfloor C_0\rfloor\geq0$ a contraction. On the complement of the SNC support it gives

\[
\theta_{1,k}+\varepsilon_k\omega_c\geq(1-\lambda)(\theta_{0,k}+\varepsilon_k\omega_c)\geq0.
\]

The strict inequality $\lambda<1$ keeps the Bochner comparison constant $C_\lambda=(1-\lambda)^{-1}$ finite. The statement does not extend the argument to the endpoint $\lambda=1$.

[Lemma 3.1; (3.1)–(3.6) · pp. 11–13][MM] · [Reg, Main Theorem 1.1 · p. 2][Reg]

### 2. Construct the ordinary class map and uniform primitives

Lemma 3.2 supplies a fixed complete Kähler metric $\omega_c$ on the SNC complement $U$. Its bounded local potentials can be added to the weights on a fixed finite cover to make curvature positive with norm-comparison constants independent of $k$. Local primitives from [Dem] have holomorphic differences. Uniform upper bounds on the weights allow ordinary $L^2$ extension of these differences, producing a Čech cocycle in ordinary $H^1(V,K_V\otimes F)$.

The continuous map $\kappa_k$ of Proposition 3.3 kills the closure of exact forms. To split a cocycle in its kernel, apply one fixed Fréchet open mapping theorem with only a sup norm on the smaller cover prescribed. The cocycle family is uniformly bounded in the finitely many compact seminorms needed by that theorem. This gives splittings bounded in the prescribed sup norm; uniform integrability of the weights then gives $\bar\partial v=f$ and $\|v\|_k\leq C\|f\|_k$. No lift bounded in every seminorm, or linear choice of global primitive, is claimed.

[Lemmas 2.1, 3.2; Proposition 3.3; (3.7)–(3.8) · pp. 5, 13–16][MM]

This step supplies primitives bounded uniformly for the varying weights. The [Bochner estimate](#proof-2-step-3) kills the image norm; only the [comparison with a fixed Hilbert space](#proof-2-step-4) kills the original ordinary cohomology class.

### 3. Combine Bochner estimates with the uniform primitive

Project a smooth representative $\gamma$ of an ordinary kernel class onto $u_k$, orthogonal to the closure of exact forms. Complete-metric cutoffs and the curvature comparison give $\|\bar\partial^*_{0,k}(su_k)\|_{0,k}=O(\sqrt{\varepsilon_k})$. The manuscript also uses cutoffs to place the form in the Hilbert-adjoint domain. Since the class map kills the closure, $\kappa_{0,k}(su_k)=0$; the preceding step gives $\bar\partial v_k=su_k$ with $\sup_k\|v_k\|_{0,k}<\infty$. Hence

\[
\|su_k\|_{0,k}^2=\langle v_k,\bar\partial^*_{0,k}(su_k)\rangle\longrightarrow0.
\]

This is an estimate in varying weights. Eliminating the ordinary class still requires the next comparison.

[§§3.4–3.5; (3.9)–(3.14) · pp. 16–17][MM]

### 4. Return to a fixed Hilbert space and kill the original class

For a fixed smooth weight $h_*$, the bound $h_{1,k}\leq h_*+C_*$ gives bounded inclusions into fixed Hilbert spaces in both degrees zero and one. On compact subsets of $U$, where $s$ is nonvanishing, the preceding estimate gives strong convergence $u_k\to0$. Together with global boundedness in the fixed space, this implies $u_k\rightharpoonup0$.

Exact forms approximating $\gamma-u_k$ also pass to the fixed space. Applying Proposition 3.3 to the fixed weight gives a continuous class map with $\kappa_*(u_k)=[\gamma]$ for every $k$. Weak continuity into finite-dimensional ordinary cohomology forces $[\gamma]=0$, proving Theorem 1.2. The exact sequence (1.1) then gives surjectivity of $H^0(V,K_V+L_0)\to H^0(E,(K_V+L_0)|_E)$ when $E\ne0$. This concerns the entire divisor scheme, including nonreduced structure.

[(3.15), §3.5 · pp. 17–18; (1.1) · p. 2][MM]

## 4. Proof of Corollary 4.1

Fix the metric supplied by Theorem 1.1, then apply the external criteria for nonvanishing and semiampleness in that order.

![Nonzero Euler characteristic yields fourfold abundance](diagrams/euler.en.svg)

### 1. Obtain nonvanishing from the metric and Euler characteristic

Take a tensor power of Theorem 1.1’s metric on the actual bundle $\pi^*\mathcal O_X(rD)$. It satisfies [LP]’s generalized algebraic singularities condition with zero divisorial part. Set the auxiliary nef divisor and parameter to zero; $\chi(X,\mathcal O_X)\ne0$ then gives $\kappa(D)\geq0$.

[Theorem 4.2; Corollary 4.1 proof · p. 19][MM] · [LP, Corollary D · p. 4][LP]

### 2. Apply the semiampleness criterion to the same metric

For a nef adjoint on a klt fourfold, [GM] gives semiampleness from a zero-Lelong metric on a positive Cartier multiple and nonvanishing. Supply the latter from the preceding step and use the same metric. Theorem 1.2 is not used in this corollary.

[Theorem 4.3; Corollary 4.1 proof · p. 19][MM] · [GM, Corollary 5.3 · printed p. 499 / PDF p. 23][GM]

## 5. Which papers supply which steps

<span id="fourfold-input"></span>

**An application using both theorems.** [Proposition 5.1 in Fourfold nonvanishing](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/fourfold-nonvanishing/#proof-2-step-2) combines endpoint metrics from Theorem 1.1 with interior injectivity from Theorem 1.2 to obtain surjectivity of restriction to the whole floor. A nonzero boundary section is supplied separately by the following three-dimensional semi-dlt abundance step.

| Input | Use in the paper | Checking scope |
|---|---|---|
| [Fuj, Theorem 3.2, p. 734 (PDF p. 8)][Fuj] | §2.2, p. 6: the klt multiplier ideal is trivial; the nef adjoint and ample difference give vanishing and, by regularity, the fixed globally generated twist. | Statement and substitution checked. The original regularity theorem was not checked. |
| [Dem, Theorem 5.1, p. 33][Dem] | Lemma 2.1 → Lemma 2.3 and Proposition 3.3: inverse-curvature solvability on complete Kähler manifolds. | Compared the author’s July 2011 statement and its $(n,1)$ specialization, including completeness, positivity, closedness and integrability. Singular limits are additional arguments here. |
| [Reg, Main Theorem 1.1, p. 2][Reg] and Skoda integrability | Lemma 3.1, pp. 11–12: smooth approximants, small curvature loss and fixed-exponent integral bounds. | Compared decreasing approximation, curvature bounds and Lelong level sets in the author’s PDF, and Dini’s theorem in the application. Skoda’s original statement remains unchecked. |
| [LP, Corollary D, p. 4][LP] | Theorem 4.2 and Corollary 4.1, p. 19: the first section using nonzero Euler characteristic. | May 7, 2019 v4 statement and the $N=0,t=0$ specialization checked; proof excluded. |
| [GM, Corollary 5.3, p. 499][GM] | Theorem 4.3 and Corollary 4.1, p. 19: nonvanishing and a zero-Lelong metric imply semiampleness. | Published 2017 statement and application checked; proof excluded. |

Within 034, [Fourfold nonvanishing][FN], Theorems 4.1–4.2, restates these two theorems and uses them in the proof of Proposition 5.1, (5.9)–(5.10), pp. 18–19. It identifies the endpoint residual bundles on a resolution with **positive rational multiples of nef klt adjoints**, applies Theorem 1.1, and pushes down Theorem 1.2's ordinary $H^1$ injection using multiplier-ideal local vanishing. This yields restriction surjectivity to the entire reduced non-klt locus. Producing a nonzero section there additionally requires threefold semi-dlt abundance, gluing and descent in [FN]; these are not supplied by the present analytic theorem alone.

## 6. Return to the sources

Start with [Theorems 1.1–1.2 · pp. 1–2][MM], then [§§2.2–2.4 · pp. 5–10][MM] for localization, extension and extremality, [§§3.1–3.5 · pp. 11–18][MM] for class maps and the fixed space, and [§4 · pp. 18–19][MM] for the external criteria.

This revision reread those proof passages and newly compared the statements and application hypotheses of [Dem], Theorem 5.1 (July 2011, p. 33), and [Reg], Main Theorem 1.1 (p. 2). Statement-and-application checks for [Fuj], [LP] and [GM] are retained from the initial draft.

The full limiting arguments, harmonic-operator domains and all uniform constants, unchecked original sources for Skoda integrability, envelopes and regularity, and the full external proofs have not been independently verified. Explaining the fixed-space bridge does not certify the entire analytic proof. Other catalogue connections remain unexamined. No expert review or formal verification has been completed.

The manuscript is the September 27, 2026 version; page numbers are PDF pages and the snapshot is fixed at `adc7f1241b42e322a6451854ab7e4b4c146bf78a`.

[MM]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Minimal-metrics-and-interior-injectivity-for-nef-adjoints-September-27-2026/paper.pdf

[FN]: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Fourfold-nonvanishing-by-minimal-metrics-and-moving-jets-September-27-2026/paper.pdf
[Fuj]: https://ems.press/content/serial-article-files/41145
[Dem]: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/analmeth_book.pdf
[Reg]: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/regularization.pdf
[LP]: https://arxiv.org/pdf/1809.02500v4
[GM]: https://www.numdam.org/item/10.24033/asens.2325.pdf
