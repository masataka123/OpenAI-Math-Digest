# カタログ060 独立数学内容点検

- 担当：`/root/astra_review_060`。指定 `gpt-6-astra` / `high`、執筆担当とは別担当。実際の指定記録は本部のMODEL_PROVENANCEを参照。
- 点検開始：2026-10-22 15:40:38 JST（06:40:38 UTC）。終了・対象原稿版・最終判定は末尾の確定記録を参照。
- 制作セット1.4、2026-10-20モデル分担、WORKER_REVIEW.mdを適用。PDFスキルを適用し、原典の関連ページをレンダリングして確認。担当原稿は編集しない。
- 書誌・原典版・ハッシュ：`../inventory.json`、`../SOURCE_MANIFEST.json`を唯一の台帳として参照。
- 現在の状態：第1段階の独立内容点検を完了。明示した未照合範囲付きで初稿を受領可。最終対象版と判定は末尾を参照。

## 原典の先行照合

原典GSSの§§2–7.1本文を読み、以下の接続を照合した。独立した全証明検証・専門家査読ではない。本文の逐一の評価計算と外部結果の証明全体は検証対象外。

| 対象 | 原典で照合した内容 | 原稿への点検項目 |
|---|---|---|
| Theorem 1.1 p.1 | 連結・コンパクト複素曲面、b1=1、b2>0、κ=−∞、極小。UはC²\{0}内の標準S³の開近傍、Σ⊂Xは開、φ:U→Σは双正則、X\Σは連結 | すべての仮定と結論を主張欄・図・終段落へ対応させる |
| Proposition 2.1 p.5、主定理証明p.37 | 有効平方零因子があればEnoki。それ以外では(2.2)の下で曲線を作り、ちょうどb2本を得てDOT判定 | 平方零の分岐、DOTの正則的球殻・補集合条件を省略しない |
| Lemmas 2.2–2.5 pp.5–8 | canonical basis、曲線のK次数非負、非自明指標のacyclicity、正の複素Laplacianをもつproper height、有限巡回被覆Xnの極小class VIIとb2(Xn)=nb2(X) | π1(X)=Zを最初から仮定せず、その原始的Z商を使う |
| Lemma 3.1 pp.8–9 | 固定seamの有限torsion群を用いd≥nb2−C0個の独立なコンパクト支持Chern類、e_i²=K_Y·e_i<0 | 単なる位相類と有効因子を同一視しない |
| Propositions 4.1, 4.6, 4.8, 4.10, 4.11 pp.11–20 | Fredholm・重み付き双対・正端一意性・任意の有限減衰率の正則構造・指数1から正端1の切断。負端非零なら相対類eのコンパクト因子がK次数負となる矛盾 | s→1/0、Dは上に有界・局所有限で通常類j(e)を表す。D全体のコンパクト性は主張しない |
| Lemma 5.1, Theorem 5.2, Propositions 5.3–5.4 pp.21–26 | geometryのみの共通指数A、γ>2A+10、scalar residue cohomologyの零とE係数の有限次元性、局所分布による独立性、L²微分不存在から種数零 | 各平行移動で定数は変わってよいが指数と重みとEを固定する |
| Lemmas 6.1–6.2、Proposition 6.3 pp.27–31 | nonflat stripの固定energy cost、flat chainで角方向定数Fourier modeなし、source chain長に依らない和の上界、target slab上でのmultiplier付き評価 | source cylinder座標とtarget heightを混同しない |
| Corollary 6.4、Lemma 6.5、Theorem 6.6 pp.31–34 | 2点以上欠けるsphere domainでdz/zをscalar obstructionに使用。残るCの場合、(f_k* s)dzのgauge補正・∞でO(1/z)・L² multiplierから同一H^{2,1}(Y,E)内の無限独立類に矛盾 | 非コンパクト成分を両段階で排除し、全成分がcompact rationalへ至る |
| Lemmas 7.1–7.2、Proposition 7.3、Lemma 7.4 pp.34–37 | rational curveは特異でもnormalizationを持ち上げる。Λ=Q[t,t⁻¹], F=Q(t)でGram行列非退化、d>nrの矛盾からr≥b2。(2.2)から全曲線数≤b2 | 非コンパクト局所有限因子はコンパクトtest classとのみpairingする。ちょうどb2本→DOT |
| 主定理証明 p.37 | DOTのGSSはholomorphic sphere neighborhood。core complementで定義した場合も小さなannular collarへ縮めてX\Σの連結性を得る | 純位相的なS³の存在で終わらず、U・Σ・φ・connected complementへ明示接続 |
| §7.1 pp.37–38 | Corollaries 1.2–1.3は主定理後の別入力を伴う帰結 | 主要結果として掲げない場合は、今回証明対象外と正確に記す |

### 042への接続

042原典§10.2、Corollary 10.2 p.54、参考文献[26]を照合した。060 Theorem 1.1は、連結・極小・コンパクトclass VII曲面のb2>0の場合にGSS/Katoであることを供給する。042は既存のclass VII分類とOka判定[16, Theorem 4]を併用してHopf/Enokiの場合にちょうどOkaとなる結論を得る。K3主定理・Enriquesおよびκ=0の枝には060を使わない。関係種別は主定理後の帰結への入力 `consequence` が適切。

042を今回編集しない。現行記事の関連アンカーは本部EXISTING_LINKS.jsonで実在確認済み。060の引用結果の版は042参考文献[26]と一致する表記だが、同一ファイルの照合は本部台帳による。

### 原典PDFの視覚確認

`source-pages/gss-p01.png`、`gss-p37.png`、`k3-p54.png`を作成・表示し、抽出テキストの主張・最終接続・042利用箇所が元ページに存在することを確認。数式・不等号・除外集合・頁番号を目視照合した。

## 継続して未確認・範囲外とする事項

最終修正版のTeX/SVG視覚確認と対象版記録は下記の通り完了。
- Donaldson原典Theorem 1、Harvey–Shiffman Theorems 3.9–3.10の完全な記述、Trudingerの全W¹,²ノルムを用いた帯上の定式化は未照合。Enoki/DOT/Hemasundarは下記の通り原典記述を追加照合済み。
- 第2段階のサイト・冊子PDF・画面検査は本部の担当。

## 直接外部入力の追加照合（2026-10-22）

- **Dloussky–Oeljeklaus–Toma 2003**：本部取得のJ-STAGE刊行版（`../sources/external/dot03.pdf`、取得証拠は本部EXTERNAL_ACQUISITION.json）。Main Theorem誌面p.283/PDF1、GSS定義誌面p.284/PDF2を本文と画像で照合。極小class VII、b2>0、b2本の有理曲線からGSSを得る。定義はC²\{0}内S³の近傍の正則埋込みと連結補集合。GSS Proposition 2.1(ii) p.5と主定理証明p.37の適用はこの内容・条件に一致する。外部定理の証明は検証していない。
- **Teleman 2010**：本部取得刊行版の誌面p.1758/PDF11を照合。b2>0の極小class VIIで非零有効平方零因子を持つEnoki曲面がEnoki Main TheoremによりGSSを持つという引用記述を確認。誌面p.1756/PDF9にはDonaldsonによるcanonical basisもある。GSS Proposition 2.1(i)との整合を確認したが、これはEnoki原典自体の照合ではなくTelemanでの定式化の照合である。
- **Hemasundar 2011**：出版社PDFのTheorem 1.1、誌面p.77/PDF1を本文と画像で照合。すべてのJordan曲線が分離するというplanarityの定義を併せて確認し、任意のconnectivityのplanar Riemann surfaceがP¹内domainに双正則であるという内容を確認。GSS Proposition 5.4 p.26の適用条件・結論と一致する。証明の再検証はしていない。取得原記録は下記。
- **Harvey–Shiffman 1974**：GSS Lemma 6.1 p.28がTheorems 3.9–3.10, pp.585–586を使う箇所を読んだ。著者サイトPDFの検索索引でTheorem 3.9の局所mass有界によるholomorphic chain部分列収束は読めたが、3.10全記述は未照合。本部へ取得補助を依頼した。索引による一部確認だけで両定理の原典照合済みとはしない。

### Hemasundar取得原記録

- 取得日：2026-10-22。
- 出版社URL：<https://www.impan.pl/shop/en/publication/transaction/download/product/84985>。
- 正式書誌：Gollakota V. V. Hemasundar, *Koebe’s general uniformisation theorem for planar Riemann surfaces*, Annales Polonici Mathematici 100.1 (2011), 77–85, DOI 10.4064/ap100-1-7。
- ファイル：`source-pages/hemasundar11.pdf`、抽出`hemasundar11.txt`、点検画像`hemasundar11-p01.png`。
- SHA-256：`62edb96a62b37375e19c9ab07c5fd1037478ca7472adfd7eafe81aa8e5c3a089`。

### 042既存記事との比較

今回のGSS Theorem 1.1 p.1とK3 Corollary 10.2 p.54を先に原典照合したうえで、既存042日英記事のCorollary 10.2「Class VII with b₂>0」段階を比較した。極小性・連結性・コンパクト性は前掲主張から継承し、b1=1・κ=−∞・b2>0でGSSを適用、Kato分類の網羅性から既存Oka判定へ進む構成は整合する。K3主定理の入力ではないという区別も日英で正しい。原典同一性は本部SOURCE_MANIFEST.jsonのcomparisonsを参照。060から既存アンカー`proof-4-step-4`へ案内可能（実在は本部EXISTING_LINKS.json）。今回訂正必須の相違は見つからず、042を編集しない。

### Enoki原典の追加取得・照合

Telemanによる定式化に加えて、Enoki刊行原典のMain Theorem誌面p.454/PDF2を直接照合した。極小class VII、b2=n>0、非零平方零因子Dの存在からSがS_{n,α,t}に双正則という結論であり、同頁note(3)がこの系列をGSSを含むKatoの系列に置いている。したがってGSS原稿Proposition 2.1(i)の平方零枝と整合する。主定理の文面に直接GSSが書かれていると置き換えず、Main Theoremとnote(3)、Telemanでの定式化を区別する。外部証明本体は検証対象外。

- 取得日：2026-10-22。
- 出版社URL：<https://www.jstage.jst.go.jp/article/tmj1949/33/4/33_4_453/_pdf/-char/en>。
- 正式書誌：Ichiro Enoki, *Surfaces of class VII₀ with curves*, Tohoku Mathematical Journal 33 (1981), 453–492, DOI 10.2748/tmj/1178229349。
- ファイル：`source-pages/enoki81.pdf`、抽出`enoki81.txt`、点検画像`enoki81-p02.png`。
- SHA-256：`d0dd1dea074ecbebe79e7acf53a8bff8e3d0726ab403ab5556d9d9262a3b8a45`。

## 原稿初回照合と返却指摘

対象：`drafts/catalog-060/global-spherical-shells/article.ja.md`・`article.en.md`の引用未生成初稿（2026-10-22受領）。主定理の仮定・全結論と6段階の数学内容を原典本文と日英相互で照合した。正式な対象版ハッシュは修正完了時に記録する。

| ID | 優先度 | 対象・原典箇所 | 指摘 | 状態 |
|---|---|---|---|---|
| R1 | P2 | 日英副題、GSS Theorem 6.6 pp.33–34 | 「成分をコンパクト化／Compactifying」は付点等の操作を示唆する。実際は元の成分のコンパクト性を証明するので表現を修正 | 執筆者へ返却 |
| R2 | P2 | 日英第1段階、GSS Lemmas 2.2/2.5 pp.5,7–8 | canonical basisとK=ΣuはH²/Torsでの主張。torsionを除くことを表示 | 執筆者へ返却 |
| R3 | P3 | 日英第2–3段階、GSS Propositions 4.10/4.11・Theorem 5.2 | 指数1とdimH00は両端の正の重みの空間。留数ではε>0・β>εを簡潔に明示 | 補足推奨として返却 |
| R4 | P2 | 日英第4段階、GSS pp.33–34 | H=e^gσが∞で0となる接続を、e^{Re g}のstrip L²上界とσ→0、平均値評価から説明する。gの点wise有界性を暗に使わない | 執筆者へ返却 |
| R5 | P2 | main.tikzのstart→classes日本語矢印、GSS Lemma 3.1 p.9 | 切断面で自明にするのは単独基底元ではなく基底元の和。英語sumsに日本語を揃える | 執筆者へ返却 |
| R6 | P3 | sources.jsonのHemasundar著者名 | Gollokotaを出版社表記Gollakotaへ | 修正済みを確認 |

上記以外に、初回本文で原典との実質的な不一致は見つからなかった。原稿は主要結果をTheorem 1.1に限定し、Corollaries 1.2–1.3を対象外と明示する。独立中間命題の証明節を設けず、一つの主定理証明節の各段階として使う構成はFORMAT_CONTRACTに適合する。TeX/SVG・引用・案内はこの時点で未照合。

## 確定版の内容点検・最終判定

- 点検終了：2026-10-22T15:58:36+09:00。点検開始15:40:38 JST。執筆担当の初稿終了15:56:05 JST後に追加された図前の記号案内も照合済み。
- 対象版：同ディレクトリの `REVIEWED_FILES.json` に日英本文・引用・出典・TeX/SVG・案内・接続記録と確認画像のSHA-256を保存。そこに列挙したファイルに限る。管理用statusや本部検査記録への以後の追記は数学対象版を変更しないが、本文・図・接続の変更には影響範囲の再確認が必要。
- `citation-build.json` が列挙する9ファイルの実体ハッシュとの一致を確認。生成・コンパイルの再実行はせず、確定版を再利用した。

### 修正反映と日英一致

R1–R6は全件反映済み。R2はH²/TorsとK mod Torsの明示に加えて整数コホモロジーへの持ち上げを選ぶ点まで確認。R4は対数円筒の単位帯S_jを定義し、帯上L²評価とσ→0からHの帯L²ノルムが0へ、平均値評価から一様に0へ、∞の除去可能性とO(1/z)へ進む接続を確認した。共通指数A・固定重み・固定束Eと、平行移動ごとに変わり得るC_kの区別も日英で一致する。

最終追記のh、Y_ℓ、j、R、S=T^nは原典の定義と図の使い方に一致し、追加の数学的主張や証明対象を導入していない。主定理の仮定・数式・結論、1証明節6段階、出典・確認状況は日英で対応する。図の7箱は本文の6段階を細分しており、不一致ではない。

### 主要結果の全結論との対応

| Theorem 1.1の項目 | 記事・図での対応 | 判定 |
|---|---|---|
| 連結・極小・コンパクト、b1=1、κ=−∞、b2>0 | 日英主張欄、図第1箱、本文第1段階。DOT適用時まで保持 | 一致 |
| 標準S³⊂U⊂C²\{0}、U開 | 日英主張欄、本文第6段階、図第7箱。DOTのGSS定義を使用 | 一致 |
| 開集合Σ⊂Xと双正則φ:U→Σ | 同上。位相的な球面だけで終わらず正則近傍として回収 | 一致 |
| X\Σ連結 | 同上。必要ならcore complementから小さいannular collarへの接続を説明 | 一致 |
| 平方零因子が存在する分岐 | 本文第1段階、図第1箱、Enoki Main Theorem＋note (3)・Teleman定式化 | 一致 |

### 図・引用・案内・接続

最終 `source-check/diagram.ja.png`・`diagram.en.png` および本部生成 `validation/figures/main.ja.svg.png`・`main.en.svg.png` を目視した。数式・箱・矢印の役割・引用内容はTeX原本と本文に対応し、数学情報の欠落、文字・引用・矢印の重なり、切れを認めない。英語第5箱の改行と最後の引用矢印の余白を含めて確定版を確認。ページへの組込み・小画面・冊子PDFの画面検査は本部の別記録で扱う。

図前の文献一覧は著者由来キー・正式題名・版・確認状況を持ち、内部番号と外部引用を区別している。共有引用から生成された表示の結果番号・誌面/PDFページを原典の該当箇所と照合した。外部入力表・sources.json・案内・connections.jsonは確認済みと未照合の範囲を過大表示していない。

単論文の案内は公式順の4列表1行と短い接続案内を持つ。分類・カタログ総括図・依存表・選択UIの省略は、外部2判定と042への帰結を合わせた分岐・合流を検討した上で、個別証明図との重複を理由としてconnections.jsonに記録している。060→042はCorollary 10.2のclass VII b2>0の帰結への入力であり、K3主定理への入力とはしていない。現行042の意味との不一致はなく、本体の改訂は不要。

### 最終判定

**第1段階の原典に基づく証明概説初稿として受領可（独立内容点検完了・明示した未照合範囲付き）。修正必須の内容指摘は残っていない。**

これは主定理の完全な独立証明検証の認定ではない。原典§§2–7.1の証明経路と全結論への接続を読んだ上での記事照合であり、§§4–6の全評価、特にLemma 6.1の解析サイクル極限の全条件の独立検証は未了。Donaldson原典Theorem 1、Harvey–Shiffman Theorems 3.9–3.10の完全な記述、Trudingerの全W¹,²ノルムを用いた帯上の定式化は引き続き原典未照合として保留する。HS74の著者PDFはweb経由のアクセス・スクリーンショット呼出成功を本部が記録したが、点検担当は該当頁画像の内容を取得・目視できず、ローカルPDFの保存・ハッシュも未取得である。このアクセス記録を内容照合に読み替えない。

外部定理の証明全体、標準理論の再帰的検証、Corollaries 1.2–1.3の詳説、042の別のOka分類定理の再検証は対象外。第2段階の組込み・日英冊子PDF・公開前検査、および第3段階の公開は未実施であり、本判定に含めない。
