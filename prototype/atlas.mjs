export const text = (ja, en) => ({ja, en});
export const catalog = 'https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/CONTENTS.md';
export const intro = 'https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Canonical-ampleness-of-compact-hyperbolic-Kahler-manifolds-September-23-2026/build/sections/introduction.tex';
export const families = [
  {id:'034', title:text('対数的豊富性と Kähler 幾何','Log abundance and Kähler geometry'),
   official:'Log abundance for compact Kähler spaces under logarithmic Iitaka subadditivity',
   tags:text('極小モデル理論・豊富性','Minimal models · Abundance'),
   summary:text('条件付きの主張と補助的な結果を、論文ごとに分けて読む。','Separate conditional claims from companion results, manuscript by manuscript.'),
   state:text('目録整理','Catalogue notes'),
   claim:text('この成果群には、対数的飯高劣加法性を仮定するコンパクト Kähler 空間の log abundance、射影的な場合の log abundance、四次元の nonvanishing・半豊富性などを扱う複数の原稿が含まれる。','This family groups manuscripts on conditional Kähler log abundance, projective log abundance, and four-dimensional nonvanishing and semiampleness.'),
   caveat:text('以下は公式カタログに基づく比較である。論文間の証明上の依存は、本文の引用箇所と仮定を照合してから追加する。','The comparison below is based on the official catalogue. Proof dependencies will be added only after the cited arguments and their hypotheses are checked.'),
   manuscripts:[
    {name:'Log abundance for compact Kähler spaces under logarithmic Iitaka subadditivity',path:'Log-abundance-for-compact-Kahler-spaces-under-logarithmic-Iitaka-subadditivity-October-4-2026/main.pdf',condition:text('対数的飯高劣加法性を仮定。正規コンパクト Kähler lc 対、有効な有理境界。','Assumes logarithmic Iitaka subadditivity; normal compact Kähler lc pairs with effective rational boundary.'),result:text('解析的に nef な ℚ-Cartier 随伴因子の半豊富性。','Semiampleness of an analytically nef ℚ-Cartier adjoint.')},
    {name:'Conditional good minimal models for compact Kähler fourfolds',path:'Conditional-good-minimal-models-for-compact-Kahler-fourfolds-October-5-2026/paper.pdf',condition:text('orbifold 飯高劣加法性、指定された四次元 MMP、非負の小平次元での abundance などを仮定。','Assumes orbifold Iitaka subadditivity, the specified fourfold MMP, and abundance in nonnegative Kodaira dimension, among the stated hypotheses.'),result:text('対象となる Kähler klt 四次元対の good minimal model の存在。','Good minimal models for the specified Kähler klt fourfold pairs.')},
    {name:'Fourfold nonvanishing by minimal metrics and moving jets',path:'Fourfold-nonvanishing-by-minimal-metrics-and-moving-jets-September-27-2026/paper.pdf',condition:text('滑らかな連結射影複素四次元多様体で K_X が擬有効。','Smooth connected projective complex fourfold with pseudoeffective K_X.'),result:text('ある正整数 m について H⁰(X,mK_X) ≠ 0。','H⁰(X,mK_X) ≠ 0 for some positive integer m.')},
    {name:'Abundance after nonvanishing for compact Kähler fourfolds',path:'Abundance-after-nonvanishing-for-compact-Kahler-fourfolds-September-27-2026/paper.pdf',condition:text('正規連結コンパクト Kähler klt 四次元対。有効有理境界、解析的 nef 性、正の Cartier 倍の非零切断。','Normal connected compact Kähler klt fourfold pair; effective rational boundary, analytic nefness, and a nonzero section of a positive Cartier multiple.'),result:text('実際の随伴 ℚ-Cartier 因子 K_X+Δ の半豊富性。','Semiampleness of the actual ℚ-Cartier adjoint K_X+Δ.')}
   ]},
  {id:'051', title:text('双曲性から標準束の豊富性へ','From hyperbolicity to canonical ampleness'),
   official:'Kobayashi’s canonical-ampleness conjecture',tags:text('双曲性・標準束・正則円板','Hyperbolicity · Canonical bundles · Holomorphic discs'),
   summary:text('正則円板の変分から二つの評価を導き、nef 性と正の体積を経て豊富性へ進む構成を読む。','Follow the proposed route from disc variations to nefness, positive volume, and ampleness.'),
   state:text('証明見取り図・初稿','Proof overview · Draft'),
   claim:text('正の複素次元をもつコンパクト連結 Kähler 多様体 X に非定数正則写像 ℂ → X が存在しなければ、標準束 K_X は豊富である、と原論文は主張する。','The manuscript claims that the canonical bundle K_X is ample for every positive-dimensional compact connected Kähler manifold X admitting no nonconstant holomorphic map ℂ → X.'),
   caveat:text('本ページは Introduction に記載された証明構成を整理した初稿である。後続節の証明・引用文献の原文・形式化は未検証。表の「適用条件」は原論文が説明する接続を示す。','This draft maps the argument described in the Introduction. Later proofs, original cited works, and formalizations have not been verified. Applicability notes report the manuscript’s proposed connections.'),
   manuscripts:[{name:'Canonical ampleness of compact hyperbolic Kähler manifolds',path:'Canonical-ampleness-of-compact-hyperbolic-Kahler-manifolds-September-23-2026/canonical-ampleness.pdf'}]},
  {id:'052', title:text('接束の分裂と普遍被覆の積分解','Tangent splittings and universal-cover products'),
   official:'Tangent splittings and product decompositions',tags:text('接束・葉層構造・普遍被覆','Tangent bundles · Foliations · Universal covers'),
   summary:text('「分布が可積分であること」と「普遍被覆が積に分解すること」の役割を分けて整理する。','Distinguish integrability of distributions from the product decomposition of the universal cover.'),
   state:text('目録整理','Catalogue notes'),
   claim:text('公式カタログは、コンパクト Kähler 多様体の接束の二つの可積分正則部分束への分裂から、対応する普遍被覆の積分解を得ると説明している。滑らかな有理連結射影多様体では、二つの直和因子の可積分性も主張されている。','The catalogue describes a compatible universal-cover product for a compact Kähler manifold whose tangent bundle splits into two integrable holomorphic subbundles. It also claims integrability of both summands in the smooth rationally connected projective case.'),
   caveat:text('証明表と論文間の依存関係は本文の精読後に追加する。公式の Lean 案内へのリンクは、全主張の検証完了を意味しない。','A proof table and cross-paper dependencies will follow close reading. A link to the official Lean notes does not certify every claim.'),
   manuscripts:[{name:'Universal-cover splitting for compact Kähler manifolds',path:'Universal-cover-splitting-for-compact-Kahler-manifolds-September-23-2026/paper.pdf'}]}
];

export const steps = [
 {id:'disc', parents:[], label:text('極値円板と境界正則性','Extremal discs & boundary regularity'),
  result:text('面積項を含む汎関数の最大化円板を作り、閉円板上の連続性と W¹,ᵖ（p>2）正則性を得る。','Construct maximizers for an area-penalized disc functional and obtain continuity up to the boundary and W¹,ᵖ regularity for some p>2.'),
  input:text('コンパクト双曲性による中心微分の一様評価、負の面積項、円板の拡大縮小との比較。','The central-derivative bound from compact hyperbolicity, an area penalty, and comparison with dilated discs.'),
  why:text('境界までの積分を変分するため、コンパクト集合上の収束だけでは足りない。','Compact convergence alone does not justify variations of whole-disc integrals.'),
  source:'The analytic argument · extremal-discs',refs:['brody']},
 {id:'frame', parents:['disc'], label:text('境界で正規化した変分','Boundary-normalized variations'),
  result:text('境界で B*hB=I となる正則枠を作り、zbⱼ を中心固定の正則族の変分として実現する。','Build a holomorphic frame with B*hB=I on the boundary and realize zbⱼ by center-fixed holomorphic families.'),
  input:text('境界正則性、重み付き Hardy 空間と行列スペクトル因子分解の方法。','Boundary regularity and weighted Hardy-space / matrix spectral-factorization methods.'),
  why:text('形式的な変分ベクトルを、実際の正則写像族へ積分することが必要。','Formal variation vectors must be integrated into actual holomorphic families.'),
  source:'The analytic argument · frames-variations',refs:['factorization']},
 {id:'hessian', parents:['frame'], label:text('共通の Hessian 恒等式','A common Hessian identity'),
  result:text('面積汎関数の複素 Hessian のトレースを ℒA_h = n − A_{R_h} と表す。','Express the trace of the complex Hessian of area as ℒA_h = n − A_{R_h}.'),
  input:text('境界で正規化した枠、中心固定変分、弱い境界極限。','Boundary-normalized frames, centered variations, and a weak boundary limit.'),
  why:text('最大化円板が円周を越えて正則に延長するとは仮定しない。','The argument does not assume holomorphic extension across the circle.'),
  source:'The analytic argument · hessian',refs:[]},
 {id:'nef', parents:['hessian'], label:text('有界ポテンシャルと nef 性','Bounded potentials & nefness'),
  result:text('P_{R_k} の上界から K_X の有界局所 psh 重みを作り、平滑化して nef 性へ進む。','Use an upper bound for P_{R_k} to obtain bounded local psh weights on K_X, then smooth to establish nefness.'),
  input:text('h=k、q=R_k、δ→0 の選択と Poletsky–Rosay の円板包絡。','The choice h=k, q=R_k, δ→0 and a Poletsky–Rosay disc envelope.'),
  why:text('有界な特異計量から、任意に小さい負の曲率下界をもつ滑らかな計量へ移る必要がある。','Bounded singular weights must yield smooth metrics with arbitrarily small negative curvature error.'),
  source:'The analytic argument · nefness / smoothing',refs:['envelope']},
 {id:'volume', parents:['hessian'], label:text('一様な体積下界','A uniform volume lower bound'),
  result:text('R_h ≥ −h を満たす計量に対し、hⁿ/kⁿ の正の一様下界を得る。','Obtain a positive uniform lower bound for hⁿ/kⁿ when R_h ≥ −h.'),
  input:text('同じ Hessian 恒等式を q=−h、δ=1 で用いる。','Use the same Hessian identity with q=−h and δ=1.'),
  why:text('補助円板や正則性定数が計量に依存しても、体積下界は一様であることが必要。','The volume bound must remain uniform even when auxiliary discs and regularity constants vary.'),
  source:'The analytic argument · volume estimate',refs:[]},
 {id:'intersection', parents:['nef','volume'], label:text('正の最高自己交点','Positive top self-intersection'),
  result:text('2πc₁(K_X)+t[k] の計量 h_t に体積評価を適用し、t→0 で ∫c₁(K_X)ⁿ>0 を得る。','Apply the volume estimate to metrics h_t in 2πc₁(K_X)+t[k] and pass to t→0 to obtain ∫c₁(K_X)ⁿ>0.'),
  input:text('nef 性、負符号の Aubin–Yau 方程式、R_{h_t}=−h_t+tk。','Nefness, the negative-sign Aubin–Yau equation, and R_{h_t}=−h_t+tk.'),
  why:text('t>0 で Kähler 類を確保し、方程式の解が体積評価の曲率条件を満たすことを使う。','For t>0 the class is Kähler, and the resulting metrics meet the curvature condition of the volume estimate.'),
  source:'From the estimates to ampleness · positive-intersection',refs:['aubinyau']},
 {id:'ample', parents:['intersection'], label:text('big・射影性・豊富性','Bigness, projectivity & ampleness'),
  result:text('nef 性と正の自己交点から big、Moishezon、射影性へ進み、有理曲線の不存在を用いて豊富性へ至る。','Pass from nefness and positive top intersection to bigness, Moishezonness and projectivity, then use the absence of rational curves to obtain ampleness.'),
  input:text('正則 Morse 不等式、Kähler Moishezon 多様体の射影性、log cone theorem に基づく結果。','Holomorphic Morse inequalities, projectivity of Kähler Moishezon manifolds, and the cited log-cone-theorem implication.'),
  why:text('最後の豊富性への移行には射影性と有理曲線の不存在が必要であり、big だけでは足りない。','The final implication uses projectivity and absence of rational curves; bigness alone is insufficient.'),
  source:'From the estimates to ampleness · ampleness',refs:['positivity']}
];
export const references = [
 {id:'brody',title:'Brody (1978) · Kobayashi (1970)',role:text('双曲性と円板の微分評価','Hyperbolicity and disc derivative bounds'),type:text('証明の入力','Proof input')},
 {id:'factorization',title:'Wiener–Masani (1957) · Helson–Lowdenslager (1958)',role:text('境界で正規化した正則枠を作る手法の背景','Methodological background for boundary-normalized holomorphic frames'),type:text('手法の背景','Methodological background')},
 {id:'envelope',title:'Poletsky (1991) · Rosay (2003) · Drinovec Drnovšek–Forstnerič (2012)',role:text('円板包絡から psh 重みを得る段階','Disc envelopes and psh weights'),type:text('証明の入力','Proof input')},
 {id:'aubinyau',title:'Aubin–Yau · Wu–Yau (2016)',role:text('方程式の存在定理と、体積を経由する証明方針','An existence theorem and the volume-based strategy'),type:text('入力・先行する方針','Input / prior strategy')},
 {id:'positivity',title:'Diverio–Trapani (2019), Lemma 2.1 · Diverio (2020), Lemma 5.1',role:text('big から ample への最後の移行として原論文が引用','Cited for the final passage from big to ample'),type:text('証明の入力','Proof input')}
];

export function ancestors(id, nodes=steps) {
  const map=new Map(nodes.map(n=>[n.id,n]));
  const found=new Set();
  function visit(key, active=new Set()) {
    if (active.has(key)) throw new Error('Dependency cycle: '+key);
    if (!map.has(key)) throw new Error('Unknown dependency: '+key);
    if (found.has(key)) return;
    const next=new Set(active); next.add(key);
    for (const parent of map.get(key).parents) visit(parent,next);
    found.add(key);
  }
  visit(id); return [...found];
}
