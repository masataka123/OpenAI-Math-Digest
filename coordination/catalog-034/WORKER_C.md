# 窓口C — 担当4篇

最初にAGENTS.md、PROJECT_PLAN.md、coordination/catalog-034/README.mdを読み、共通仕様に従う。以下の順番で1篇ずつ進める。各篇最大60分、下限なし。共通サイトの組込みと公開は本部が担当する。

着眼点はカタログ調査に基づく出発点であり、原典の証明を読まずに記事へ転記しない。

## 1本目 · 034内 05

**Minimal metrics and interior injectivity for nef adjoints**

- ID: `minimal-metrics-injectivity`
- ページ数: 21
- 原典: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Minimal-metrics-and-interior-injectivity-for-nef-adjoints-September-27-2026/paper.pdf
- 取得済みPDF: `/tmp/math-034/Minimal-metrics-and-interior-injectivity-for-nef-adjoints-September-27-2026.pdf`
- 抽出本文: `/tmp/catalog034-reading/05.txt`
- SHA-256: `b2a7d738f44a3d34e5d22e0a7fb8a8d38e97b6e2858f6c77d70cb9b03193fbd6`
- 保存先: `drafts/catalog-034/minimal-metrics-injectivity/`

### 執筆の着眼点

Theorems 1.1–1.2のLelong数消滅と内部H¹単射性を区別する。klt/nef随伴、端点計量、内部のSNC境界の仮定と、Fourfold nonvanishingが必要とする全被約境界からの持ち上げへの接続を明確にする。

## 2本目 · 034内 06

**Fourfold nonvanishing by minimal metrics and moving jets**

- ID: `fourfold-nonvanishing`
- ページ数: 38
- 原典: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Fourfold-nonvanishing-by-minimal-metrics-and-moving-jets-September-27-2026/paper.pdf
- 取得済みPDF: `/tmp/math-034/Fourfold-nonvanishing-by-minimal-metrics-and-moving-jets-September-27-2026.pdf`
- 抽出本文: `/tmp/catalog034-reading/06.txt`
- SHA-256: `1946d50201ab1ae0c02a6ba95143b55528b2525d45673a2985404aee4d8f2cb4`
- 保存先: `drafts/catalog-034/fourfold-nonvanishing/`

### 執筆の着眼点

滑らかな四次元のcanonical nonvanishingからlc nefの場合への帰着を分離する。Minimal metricsの端点計量・内部単射性と、LA Theorem 9.1の独立した有限データFrobenius定理がどこで使われるかを追う。LAの豊富性主定理を入力と取り違えない。

## 3本目 · 034内 02

**Uniform indices for semi-log-canonical log Calabi–Yau pairs**

- ID: `uniform-slc-indices`
- ページ数: 42
- 原典: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Uniform-indices-for-semi-log-canonical-log-Calabi-Yau-pairs-October-5-2026/uniform-slc-index.pdf
- 取得済みPDF: `/tmp/math-034/Uniform-indices-for-semi-log-canonical-log-Calabi-Yau-pairs-October-5-2026.pdf`
- 抽出本文: `/tmp/catalog034-reading/02.txt`
- SHA-256: `588f61707a03040f0265823b76aa32e17f238bfed772f79bdcd8f9867746a126`
- 保存先: `drafts/catalog-034/uniform-slc-indices/`

### 執筆の着眼点

normal lc指数から正規化の各成分を自明化し、体積形式の指標・conductor上の留数を制御してslcへ貼り合わせる流れを追う。成分数に依存しない共通次数という結論と、LAがHodge rankの段階へ入る箇所を説明する。

## 4本目 · 034内 03

**Conditional good minimal models for compact Kähler fourfolds**

- ID: `conditional-kahler-fourfolds`
- ページ数: 138
- 原典: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Conditional-good-minimal-models-for-compact-Kahler-fourfolds-October-5-2026/paper.pdf
- 取得済みPDF: `/tmp/math-034/Conditional-good-minimal-models-for-compact-Kahler-fourfolds-October-5-2026.pdf`
- 抽出本文: `/tmp/catalog034-reading/03.txt`
- SHA-256: `ac000b352a0abe8e1a2dfd99bef21dcbf232fae995e2395048a528c02157270c`
- 保存先: `drafts/catalog-034/conditional-kahler-fourfolds/`

### 執筆の着眼点

Assumptions 2.2–2.4の3前提を維持し、MMPのnef終点での非消滅から良い極小モデルへ至る流れを追う。033・056の入力を確認した範囲だけ記録し、未照合の仮定を成立済みと扱わない。strongly Q-factorial等の条件を落とさない。

## 本部への引き渡し

1本ごとにarticle.ja.md、article.en.md、図、sources.json、status.mdを保存する。statusには原典読解・引用照合・図の生成と目視のうち実施した内容と未確認点を記載する。その後は確認待ちで停止せず次の担当へ進む。4本終了時に、成果物のパスと残る課題をこのチャットで報告する。別チャットへの自動送信は必要なく、本部がファイルから受け取る。
