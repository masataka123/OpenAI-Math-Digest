# カタログ197 第1段階・別担当内容点検

- 担当：reviewer（執筆者とは別担当）。指定モデル `gpt-6-astra`、reasoning_effort `high`。
- 開始：2026-10-18 13:10:43 JST。終了：2026-10-18T13:31:50+09:00。
- 原典版：OpenAI math commit `1581d4cbdd69a0faf34b2089614fe2a814316a6a`。公式4本を `../sources/` のPDF・layout抽出で新規に読解。旧Solの原稿・図・解釈・点検結果は根拠に使用していない。
- 制作規約：PROJECT_PLAN.md、AGENTS.md、production/README.md、FORMAT_CONTRACT.md、ARTICLE_TEMPLATE.md、CATALOG_TEMPLATE.md、CITATIONS.md、RECORDS.md、WORKER_TEMPLATE.md、RELEASE_CHECKLIST.md。
- 本記録は原典の記述・主要な証明箇所と記事の接続の照合であり、全証明の独立検証・専門家査読・数学的正しさの認定ではない。
- 状態：第1段階の別担当内容点検完了。4記事・カタログ案内の指摘は修正後まで照合済み。

## 原典先行点検

### 公式順1 torsion-free-direct-finiteness

Theorem 1.1（p.1）は有限表示torsion-free群、F2上のスカラーa,b,c、ab=1/ac=0/c≠0、従ってba≠1、有限2次元classifying complexの存在を併せて主張する。§7（p.30）は成功する有限matching outcomeの存在選択であり、具体的な辺リストを与えない。

読解箇所：§2 pp.3–4の積一定性とhandshake parity、§3.1 pp.4–6のFano補集合による例外一点の設計、Theorem4.1 pp.10–11の量化順と§4末尾の合成、Definition5.1/Theorem5.2 p.19、Lemma5.5および§5.4 pp.22–24、§6 pp.24–30のcone picture・4種のband surgery・asphericity・torsion排除、§7 p.30。

接続確認：3.1の交わりparityと5.2の成功matchingを6.1へ適用し、root protectionと有限aspherical complexを得て2.1へ渡す。cの恒等元係数が1であることにはB側root protectionを使う。π2=0だけでtorsion-freeとせず、2次元単連結被覆のacyclicity→Hurewicz/Whitehead→contractibility→長さ2の自由分解をC_lに制限→周期コホモロジーとの矛盾という経路を確認。

注意：標数2 companionは比較であり直接存在入力ではない。別カタログのzero-divisor論文は方法の系譜で、今回の原典は必要な推定とトポロジーを再提示する。Theorem4.1の全一様評価・全確率計数の再導出は未実施。bounded path estimateのεをK0,C,Iより先に選ぶ順序を記事で保持する。

### 公式順2 direct-finiteness-characteristic-two

Theorem1.1（p.1）は有限体K（F2そのものとは主張しない）、有限表示群G、奇素数位数元、スカラーa_out b_out=1≠b_out a_out、停止する有限手順。Theorem3.1（p.6）にはprimitive lth root、incidence degree l+1、girth≥12、0<m<t≤ml²、全体/line pairingが必要。

読解箇所：§2 pp.4–6の補間・line sums・holes pairing、§3 pp.6–9のlocal group injectivityと平面balance、§4 pp.9–14のHNN embedding/character packing/reverse defect/scalar block/finite presentation、Theorem5.1 p.15、§5.4–5.5 pp.19–22のlocal lemma/trade/short cycles、§6 pp.22–25の有限探索停止、§7 pp.25–27のCAおよびF∞帰結。

接続確認：girthによるlocal injection→subgroup averagesのUT=I_m→character packing J0C=eP→square inverse→J0ΔC=e(TU−P)を埋込み部分群環K[H]でのみspecialize→X^TX−I_t≠0→finite matrix unitsと補単位でscalar化。specializationをK[L]全体へ延長してはならない。有限表示は§4.6で別途示され、支持からの有限生成とは異なる。

CA：T_c x(g)=Σ c_u x(gu)、T_cT_d=T_cd。T_aT_b=idで全configuration上の単射、im(T_b)=Fix(T_ba)、defect非零係数hでδ_hが像にない。有限支持configurationのみに制限しない。Cor7.4は外部のF∞ embedding theoremを必要とし、主反例とは別帰結。

未確認：§5の全hole選択・polygon分類・確率計数の再導出、有限探索の実行、外部F∞入力のstatement。

### 公式順3 group-ring-determinant

全本文pp.1–8と参考文献p.9を読解。Theorem1.1 p.2は有限生成G_D、整数群環のsquare A、Q[G_D]上可逆、0<det(A)<1、有限かつ負のlog integral。finite presentation/torsion-freeは主張されず、G_DはC3座標を含む。

直接入力は標数2 companion Theorem1.1（本稿Theorem1.2 p.2）。有限体をbinary regular representationへ写し、C=I−YX≠0を得る（Lemma2.1 p.3）。Prop2.2 pp.3–4のp=p_1 Π(1−p_s)でpsp=0、θ=(1/3)(2/3)^|S|、P=diag(I_d,p)、τ(P)=d+θ、mod2 factorization through d。Lemma3.1 p.5はeven ideal内のW^k=0を使うcorner inverseであり、corner全体のnilpotenceやambient inverseではない。Lemma3.2 p.6はq≡1 modDとUV≡P modqでintegralityを得る。L_xBR_xのrational inverseとLemma4.1/4.2 pp.6–7のtrace derivative→Prop4.3 p.7→§5 p.8、n=2d+1、det=q^{-θ}、normalized integral=−2θ logq/(2d+1)。

初期入力後の代数・解析の主要等式と行列サイズを照合。sofic determinant theoremは反例構成後のnonsofic帰結にだけ使う。odd characteristic theoremへの置換は今回のbinary構成の入力にならない。

### 公式順4 direct-finiteness-odd-characteristic

Theorem1.1 p.1のp=min divisor>1 of (m!)²+1、m=binom(1200,600)は一つの指定された奇素数。Kの位数はp⁴。群は有限生成でtorsionを含む（torsion groupとは別）、scalar pairを有限式で指定する。すべての奇標数やprime field F_pを主張しない。

読解箇所：Lemma2.1/Prop2.2 pp.3–4、Prop3.1および§3 pp.5–8、Lemma4.1/Prop4.2 pp.9–13、Prop5.1/§5 pp.14–18、§§6–8 pp.18–23。

接続確認：triangle-free fit t/m<1/100とregular rank d/w>1/96を直接比較するだけでは不十分。§4のlocal embeddingsを経て§5で共通非零corner S=fK[G1]（単位f）へ移し、Y_iJ_i=fI_d/J_iY_i=P_iI_wという環上の恒等式を得る。stabilizerはelementary abelian p-groupでnontrivialも許す。nilpotent augmentation ideal上のbasis liftによりd=d0|T|,w=s|T|を通常整数として確保する。i<jのedge annihilationのみでtriangular compression（Lemma6.1）を行い、wt<mdからLemma6.2のkernel vectorによるreverse defect、§7のinjective Heisenberg blockとcomplementで同じKを保ってscalar化する。§8はchar2と同じ全configuration CA計算。

未確認：全finite blockの係数の独立再計算・全sphere diagram caseの完全独立検証・finite prescriptionの実行。char2論文は比較対象で直接入力ではない。

## 外部一次文献の照合

- Elek–Szabó, *Sofic groups and direct finiteness*: [arXiv:math/0305440v2](https://arxiv.org/pdf/math/0305440v2)、PDF本文日付19 Apr 2004、9pp。Cor4.7 p.8/PDF8のsofic群・division ringに対するstable finiteness statementを確認。各有限体はdivision ring、スカラーはsize1なのでcontrapositiveでnonsofic。証明全体は再検証しない。検索メタデータの日付2007-05-23は採用しない。
- Elek–Szabó, *Hyperlinearity, essentially free actions and L2-invariants. The sofic property*: [arXiv:math/0408400v2](https://arxiv.org/pdf/math/0408400v2)、本文日付7 Oct 2014、20pp。§1.5 p.5/PDF5のpositive self-adjoint integer group-ring determinant convention、Theorem5 p.18/PDF18を確認。det記事のA* Aへの適用とtrace正規化を照合。証明全体は再検証しない。
- Hatcher, *Algebraic Topology*, [著者公開Chapter4 PDF](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)、84pp、2026-10-18参照。Theorem4.5 Whitehead 誌面346/PDF10、Theorem4.32 Hurewicz 誌面366/PDF30のstatementを確認。torsion-free原典§6.1/§6.3の単連結acyclic CW/被覆での適用に対応。全巻版とPDFページ位置を混同しない。
- Lipton–Tarjan, *A separator theorem for planar graphs*: [SIAM公式ページ](https://epubs.siam.org/doi/10.1137/0136016)のabstractで2√(2n) separator、残り各≤2n/3というstatementを確認。torsion-free Lemma5.5がloop/parallel除去後のsimple planar graphへ適用していることを確認。誌面本文の頁・証明は未取得。未確認頁を推測で記入しない。
- Xylouris (2011), *On the least prime in an arithmetic progression and estimates for the zeros of Dirichlet L-functions*: [出版社PDF](https://www.impan.pl/shop/en/publication/transaction/download/product/83078)を取得。Theorem1.1 誌面66/PDF2は P(a,q)≤Cq^{5.18}（effectively computable C）。p.65/PDF1のcoprime positive a,qという定義を含めて照合。char2 §5の法q^{100}と剰余q^{100}−1は互いに素なので適用可。s=⌊log_q(ℓ+1)⌋の一様上界を得る役割を確認。証明は検証範囲外。保存PDF SHA-256: 42b5397015a174a49c3769888cbcb068f686fd604d48bae53e272d51e642fd3b。

## 原稿受領後の点検

日英本文・図・citations.jsonのmainResults/statements/conclusionCoverage、主要主張全結論、引用ページ、原典読書案内を順次照合し、この節へ追記する。実画面比較・サイト組込み・日英冊子PDF・公開は本担当範囲外（本部/サイト本部）。

### 受領途中点検：torsion-free / determinant

2026-10-18：日英記事の初稿本文を全読し、原典記述と主要式を照合した。torsion-freeはTheorem1.1→全体図予定→Proposition2.1/Theorem5.2/Proposition6.1の独立主張欄と直後の説明、全5結論のconclusionCoverageを確認。Theorem5.2のL,n,mとmatching modelの定義を記事に補足するよう著者へ依頼。determinantはTheorem1.1/Propositions2.2,4.3の全仮定・行列サイズ・二つのtrace正規化・有限性の説明を確認し、3図のTikZ原本の式と矢印の用途も照合した。日英の主要式は対応する。

形式上、determinant英語のoverview見出しだけが特別アンカー判定になる恐れを著者へ通知し、両言語の見出し・proofリンク・conclusionCoverageを統一して生成HTML確認を依頼した。本文はまだ引用生成中のため、完成稿の引用マーカー生成・SVG整合性の最終再照合は保留。

### torsion-free / determinant 修正後照合

- torsion-free：Theorem5.2の $v=16513,n=vm,L=\lfloor c_0\log n\rfloor$ と独立一様matching/girth条件付けが日英に追記された。4図の共通TikZ原本を全読し、parity→配置排除→cone topology→scalar対の役割、epsilonの量化順、H2における同一cone liftのsurgery説明、torsion obstructionを原典に照合。mainResults/main、proofTargets/main-parity-exclude-cone、5項目のconclusionCoverageに対応する本文を確認。Hatcher全巻PDFも独立に確認し、記事のThm4.5=誌面346/PDF355、Thm4.32=誌面366/PDF375の対応と一致。LT79 abstractのみという留保は本文・図前guide・source/dependency・末尾範囲で一貫する。
- determinant：完成した日英全文を再読。EN見出しを通常proof-1に統一した修正を確認。Theorem1.1→3図→説明、独立Propositions2.2/4.3の前提・結論・サイズと2件のconclusionCoverage（有限生成/rational inverse、detの両不等式/有限負積分）を照合。3図の数式・矢印用途は原典の該当箇所に一致。OpenAI26twoの正式題・28頁版・Theorem1.1 p1、ES05のTheorem5 p18を記録と照合。追加の数学的修正要求はない。
- 生成SVGの視覚的レイアウトとHTMLアンカーの実装検査は本部担当。ここでの図点検はTeXの数学的内容と本文への対応を対象とする。

### 外部確認の進行履歴

- Xyl11は初期の原典先行点検では外部statement取得待ちであった。その後出版社PDFを取得し、Thm1.1と必要な定義を直接読んで解消した。著者Aも同PDFの誌面65–66を確認済みと連絡。第2論文初稿には解消後の範囲を記録する。
- LT79は出版社abstractで必要statementを確認した段階に留まり、外部PDF本文・頁対応の未確認は解消していない。確定した本文確認と同列に扱わない。

### odd-characteristic 完成稿照合

日英本文を全読し、4図のTikZ内容、sources/citations、mainResults/main-automaton、proofTargets/main-local-sector-automaton、4件のcoverageを照合した。Prop8.1の一般形はab=1のみを仮定するため、見出しの無条件な非全射の読みを避け、ba≠1なら非全射と本文に明示するよう依頼。日英の見出し変更と条件追記を確認した。Prop3.1の全s・左右消滅・regular rank、Prop5.1の任意係数体・Mの素性条件・可算G0・正整数共通rank・corner単位fと二つの矩形恒等式を原典に照合。主定理の全条件/結論とProp8.1の両向き像記述・欠ける各δ_hに説明がある。定理ごとの主張→図→文章、独立命題の主張欄、引用と読む入口、日英の式・確認範囲に追加修正要求なし。

全4本の結論単位の照合は `CONCLUSION_COVERAGE.md` に別表として記録する。アンカーの存在だけでなく、群条件・係数・量化・適用先の本文と原典頁を記録した。

### characteristic-two 完成途中の照合

日英全文と4図のTikZ内容を読解し、Theorem1.1/Corollary7.3の2主要結果、Theorems3.1/5.1の独立主張、6件のconclusionCoverageを照合。index simplex S_dの未定義を指摘し、日英初出での定義追記を確認。Xylouris適用式のC,Lについて絶対定数であることの明示も依頼し、C>0とL=5.18の日英追記を確認した。群の有限表示性とtorsionは局所埋込み/有限relatorsへ、scalar対はmatrix unitsの単射性と補単位へ、停止はTheorem5.1と§6へ、CA全結論は§7の右隣接合成と欠損係数へ対応する。Corollary7.4は主要結果に入れず確認範囲外とする日英表示を確認。引用元のXyl11誌面66/PDF2とES04v2 p8、原典結果の頁を照合した。生成完了の連絡を受け、軽微補足も反映確認済み。追加の数学的修正要求はない。

生成過程の本部発見事項：torsion-free図のSVG属性引用符が共通rendererのglyph ID prefix処理に適合せず、複数図で字体が混ざる問題があった。著者AがXML属性を正規化し再生成。本担当はTeX内容への影響がないこととexclusion図のtext-mode修正後も量化順が保持されることを確認した。実画面での解消確認は本部の形式・画面点検記録に委ねる。

### カタログ案内・接続記録

日英案内、presentation.jsonの公式順4行、総括図connections.tikz、sources/citationsを読解。公式overview p.21のAlgebra/197/名称とCONTENTSの順序を照合した。共通表の各行は群条件・係数・scalar/matrix・量化を保持し、日英一致。直接入力はtwo Theorem1.1 p.1→det Theorem1.2/Lemma2.1/§5 pp.2–3,8の1件。CAはtwo Proposition7.2/Corollary7.3 p.26とodd Proposition8.1 p.23の2内部帰結で、出力群を同一視しない。ES04の3群、ES05のdet群への4非sofic帰結は逆向きの構成入力にされていない。tf/twoとtwo/oddの2背景比較は直接辺に含まれない。

connections.jsonの図採否はFORMAT第6節に対応する。単独の直接辺だけで判断せず、twoからdet/CAへの分岐とoddから同型の帰結への合流をまとめ、tf独立boxを置く図を採用。非sofic全矢印は混雑/重複のため文章へ、詳細仮定は表へ分担する。固定分類cards/選択UIは公式表との重複を避けて省略し、理由を記録している。この採否判断に異論はない。未記録を依存なしとせず、type-F∞外部入力は確認対象から除外している。

接続記録中、two/oddのCA利用先リンクがともにproof-1だったため、それぞれproof-3/proof-4への修正を依頼し、日英とも反映を確認した。背景比較のhypothesesも対象ごとの条件へ分けた修正を確認した。案内本文の数学的修正要求はない。

## 最終結果・引継ぎ

- 第1段階の内容点検を完了。4記事の日英全文、6主要結果、15証明対象と15図のTeX、各主張・引用記録・全結論の説明、日英案内と総括図1枚、公式順表、9関係の記録と図/分類採否を照合した。指摘した主張条件・記号定義・見出し/利用先アンカーは修正反映まで確認した。
- 今回読んだ核心の証明箇所および説明との対応で、未解消の重大な論理欠落・明白な疑義は見つかっていない。この記述は原典全体の数学的正しさの認定ではない。
- 継続する留保：LT79の外部PDF本文/頁対応は未確認（必要statementは出版社abstractで確認）。各確率定数・grid/位相場合分け・巨大有限計算を完全に独立再計算しておらず、有限処方を実行していない。外部証明の再帰的確認は範囲外。char2 Corollary7.4と外部type-F∞結果は確認済み主要結果に含めない。これらは記事側にも対応する範囲を記載した。
- 実画面・SVG表示・HTMLアンカーの自動検査は本部担当。本担当はTeXの数学的内容を点検した。サイト組込み、日英冊子PDF、公開前後の反映検査は第2/3段階へ残る。
- `CONCLUSION_COVERAGE.md` は結論ごとの本文アンカーと原典頁/根拠、`reviewed-files.json` は点検対象テキストのSHA-256、`REVIEW_HANDOFF.json` は引継ぎ状態を記録する。以後内容を変更した場合は対応差分を再照合する。

追加最終照合：本部からの指摘を受け、ES04→tf/two/oddおよびES05→detの4帰結リンクを各記事の既存`#dependencies`へ変更するよう担当Bへ依頼。生成previewで当該節に外部定理の利用説明があること、connections.jsonの全8言語リンクが修正されたことを確認した。`#proof-1`への存在確認だけで十分とはしていない。CAの2リンクと合わせ、利用内容に対応する既存節への導線を確保した。

### 最終受領前の追加差分確認（2026-10-18T13:31:50+09:00）

本部指定の2変更に限って現物と先行点検内容を再照合した。総括図はdet/caノードのstyle指定を`half,result`から`result,text width=6.45cm,minimum height=2.9cm`へ改め、result側の幅上書きを回避する配置変更。ノードの数式・群/係数条件・日英説明・引用キー、two→det実線とtwo/odd→CA破線の方向・種別は変化していない。日英の生成TeXが同一の修正後TikZ本文を含むことも確認した。SVGの視覚的な重なり解消は本部の実画面記録に委ねる。

行列式記事は外部入力の案内リンクを裸の`../direct-finiteness-characteristic-two/`から日英それぞれの`article.ja.md`/`article.en.md`へ変更している。リンクラベル・前後の数学的説明・入力対象は同じ。両言語のファイルへの参照と裸リンクの消失を確認した。追加の数学的修正要求はない。

既存39件のfingerprintはこの追加確認開始時点ですでに現ファイルと一致していたが、明示的な追加内容確認を終えた時刻へ更新した。生成TeX/SVG4ファイルは別枠`generatedArtifacts`へハッシュを保存し、数学内容照合と実画面検査を区別する。
