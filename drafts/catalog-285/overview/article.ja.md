# Baum–Connes予想とKadison–Kaplansky予想の反例

公式カタログ285、*Counterexamples to Baum–Connes and Kadison–Kaplansky*。3本の原稿は、係数なし被約Baum–Connes assemblyの単射性・全射性と、torsion-free群の被約群C*環における射影予想への反例を主張する。各記事では原稿の主張と、編集側が照合した帰着・外部入力の範囲を区別する。

<!-- PDF導線はCatalogMarkdownOverview.astroがpdf-editions.jsonの285言語別情報から冒頭に生成する。 -->

## 公式順の記事一覧

CATALOGINVENTORYTOKEN

## Assemblyの核と像を分けて読む

[単射性の記事](../baum-connes-injectivity/article.ja.md)では、torsion-free群 $G_{\mathrm{inj}}$ に対する

$$
\mu_r:K_0(BG_{\mathrm{inj}})\longrightarrow K_0(C_r^*(G_{\mathrm{inj}}))
$$

の核を扱う。埋め込まれたトーラスのDirac類 $h$ を二次コホモロジーで検出して無限位数を保ちつつ、そのBott像を被約群C*環で消す。ここで $K_0(BG)$ は有限部分複体上の直極限で定めるcompact support付きK-homologyである。原稿は同じ $h$ のmaximal assembly像は有理的に非零と説明しており、maximal版や古典的Novikov予想への反例とは区別する。<!-- cite:inj -->[&#91;OpenAI26a, Theorem 1.1, p. 1&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/A-Torsion-Free-Counterexample-to-Reduced-Baum-Connes-Injectivity-September-23-2026/paper.pdf)<!-- /cite --> <!-- cite:max -->[&#91;OpenAI26a, Section 1.2, p. 2&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/A-Torsion-Free-Counterexample-to-Reduced-Baum-Connes-Injectivity-September-23-2026/paper.pdf)<!-- /cite -->

[射影の記事](../kadison-kaplansky-projection/article.ja.md)は、まずtorsion-free群 $\Gamma_{\mathrm{proj}}$ の行列環内に小さな正トレースの射影を作り、自由積 $G_{\mathrm{proj}}=\Gamma_{\mathrm{proj}}*F_N$ 内でscalar射影へ圧縮する。結論は $p\in C_r^*(G_{\mathrm{proj}})$、$0<\tau(p)<1/2$ であり、行列環内の射影の存在だけで終わらない。<!-- cite:proj -->[&#91;OpenAI26b, Theorem 1.1, p. 2&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/A-Torsion-Free-Counterexample-to-the-Kadison-Kaplansky-Projection-Conjecture-September-23-2026/paper.pdf)<!-- /cite -->

[無理数トレースの記事](../baum-connes-irrational-trace/article.ja.md)は、torsion-freeを仮定しない有限生成群 $G_{\mathrm{sur}}$ に対する

$$
\mu_0^{G_{\mathrm{sur}}}:K_0^{G_{\mathrm{sur}}}(\underline EG_{\mathrm{sur}})
\longrightarrow K_0(C_r^*(G_{\mathrm{sur}}))
$$

の像を扱う。定義域はproper actionの分類空間上のequivariant K-homology（$G$-compact support付き）である。符号の局所分布と全体のspectral gapから実際の射影 $b_0\in C_r^*(G_{\mathrm{sur}})$ を得て、その無理数トレースをassembly像の有理数トレースと比較する。原稿は有理化後の非全射性も導く。<!-- cite:sur -->[&#91;OpenAI26c, Theorems 1.1–1.2, p. 2&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/An-Irrational-Trace-Counterexample-to-Reduced-Baum-Connes-September-23-2026/paper.pdf)<!-- /cite --> <!-- cite:trace -->[&#91;OpenAI26c, Proposition 6.1 and proof of Theorem 1.1, pp. 21–22&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/An-Irrational-Trace-Counterexample-to-Reduced-Baum-Connes-September-23-2026/paper.pdf)<!-- /cite -->

## 二つのトレース障害と構成手法の比較

射影原稿の§11は、torsion-free群 $\Gamma_{\mathrm{proj}}$ のassembly像のトレースが整数になることを使い、行列射影からtrivial-coefficient reduced assemblyの非全射性も記す。これは別原稿の無理数トレース構成への依存ではない。また、非整数という情報だけでは、有理化後の像から外れることまでは従わない。無理数トレース原稿は、一般の可算群について像のトレースが有理数になることを使うため、群の仮定も障害の強さも異なる。<!-- cite:proj-assembly -->[&#91;OpenAI26b, Section 11, p. 73&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/A-Torsion-Free-Counterexample-to-the-Kadison-Kaplansky-Projection-Conjecture-September-23-2026/paper.pdf)<!-- /cite --> <!-- cite:trace -->[&#91;OpenAI26c, Proposition 6.1 and proof of Theorem 1.1, pp. 21–22&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/An-Irrational-Trace-Counterexample-to-Reduced-Baum-Connes-September-23-2026/paper.pdf)<!-- /cite -->

構成手法には、**射影原稿から単射性原稿への明示的な参照**がある。単射性原稿の§2（p.7）は、射影原稿の§§4,6のpadded-stream構成とrecovery schemeを適応し、現在のinterfaceに必要な指数・cutoff・gated correctionは再び確立すると述べる。また§7.4（p.64）は、射影原稿§7.6のcone-chainとprime-order obstructionの手法に従い、現在のsheetに対するexact-chainの接続を再証明する。射影主定理を存在定理として使う関係ではなく、整数係数の検出類の延長とBott realizationは単射性原稿の別の議論である。<!-- cite:recovery-method -->[&#91;OpenAI26a, Section 2, p. 7&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/A-Torsion-Free-Counterexample-to-Reduced-Baum-Connes-Injectivity-September-23-2026/paper.pdf)<!-- /cite --> <!-- cite:cone-method -->[&#91;OpenAI26a, Section 7.4, p. 64&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/A-Torsion-Free-Counterexample-to-Reduced-Baum-Connes-Injectivity-September-23-2026/paper.pdf)<!-- /cite --> <!-- cite:cone-source -->[&#91;OpenAI26b, Section 7.6, pp. 36–38&#93;](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/preprints/A-Torsion-Free-Counterexample-to-the-Kadison-Kaplansky-Projection-Conjecture-September-23-2026/paper.pdf)<!-- /cite -->

この有向関係は方法の適応・再証明として記録し、主定理の直接適用とは区別する。expanderやgraphicalな構成の一般的な共通性だけから、他の依存矢印は加えない。外部入力とその使用箇所、各帰着の証明図は個別記事にまとめた。

## 原典・確認範囲

引用キーはすべてOpenAI著、September 23, 2026版を指す。OpenAI26aは *A torsion-free counterexample to reduced Baum–Connes injectivity*（85頁）、OpenAI26bは *A torsion-free counterexample to the Kadison–Kaplansky projection conjecture*（76頁）、OpenAI26cは *An irrational-trace counterexample to reduced Baum–Connes*（23頁）。

[公式目次](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/CONTENTS.md)と[公式overviewの31頁](https://github.com/openai/math/blob/1581d4cbdd69a0faf34b2089614fe2a814316a6a/overview.pdf)のOperator algebras（285–303）に従った。固定commitは `1581d4cbdd69a0faf34b2089614fe2a814316a6a`。この案内は主張の対象・仮定・結論と、記事間の直接引用の有無を照合したもので、3本の全証明を独立検証したものではない。詳細な読解箇所と未確認部分は各記事の末尾に記録する。
