# 窓口A — 担当4篇

最初にAGENTS.md、PROJECT_PLAN.md、coordination/catalog-034/README.mdを読み、共通仕様に従う。以下の順番で1篇ずつ進める。各篇最大60分、下限なし。共通サイトの組込みと公開は本部が担当する。

着眼点はカタログ調査に基づく出発点であり、原典の証明を読まずに記事へ転記しない。

## 1本目 · 034内 10

**Uniform Pluricanonical Iitaka Fibrations**

- ID: `uniform-pluricanonical-iitaka`
- ページ数: 44
- 原典: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Uniform-Pluricanonical-Iitaka-Fibrations-October-3-2026/paper.pdf
- 取得済みPDF: `/tmp/math-034/Uniform-Pluricanonical-Iitaka-Fibrations-October-3-2026.pdf`
- 抽出本文: `/tmp/catalog034-reading/10.txt`
- SHA-256: `88c226e29ee72119478882f48b674d5bd0d4813a331dfa35067fef758e0e4df8`
- 保存先: `drafts/catalog-034/uniform-pluricanonical-iitaka/`

### 執筆の着眼点

Theorems 1.1–1.2の仮定と結論を分離し、飯高次数とnormal lc指数の同時帰納法を追う。LAの良いモデル、Stein次数、Fourfold Iitakaの任意次元の鎖の補題が入る位置を説明する。Log Iitakaとslc指数へ供給する結果も短く示す。

## 2本目 · 034内 07

**Lifting sections from the reduced support of an adjoint**

- ID: `lifting-adjoint-sections`
- ページ数: 40
- 原典: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Lifting-sections-from-the-reduced-support-of-an-adjoint-September-27-2026/paper.pdf
- 取得済みPDF: `/tmp/math-034/Lifting-sections-from-the-reduced-support-of-an-adjoint-September-27-2026.pdf`
- 抽出本文: `/tmp/catalog034-reading/07.txt`
- SHA-256: `ecbc1b8c73fefb32ddbd51ef6fcc0cb2a91e935bea46075c557f07bcc86fb9ed`
- 保存先: `drafts/catalog-034/lifting-adjoint-sections/`

### 執筆の着眼点

Theorem 1.1の全被約台からの切断持ち上げを中心に、Theorem 1.2（非消滅後）とCorollary 1.4（非消滅も加えた帰結）を区別する。Fourfold nonvanishingが入る箇所を取り違えない。

## 3本目 · 034内 13

**Uniform effective log Iitaka fibrations for fourfolds**

- ID: `effective-log-iitaka-fourfolds`
- ページ数: 52
- 原典: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Uniform-effective-log-Iitaka-fibrations-for-fourfolds-September-26-2026/paper.pdf
- 取得済みPDF: `/tmp/math-034/Uniform-effective-log-Iitaka-fibrations-for-fourfolds-September-26-2026.pdf`
- 抽出本文: `/tmp/catalog034-reading/13.txt`
- SHA-256: `8036215575dbf6199927ae50571f50d8e89928b091dc07fa723fec2cbfe5a41e`
- 保存先: `drafts/catalog-034/effective-log-iitaka-fourfolds/`

### 執筆の着眼点

四次元の標準指数とlog Iitakaの2結果を分離する。LAの定性的な非消滅、Supported liftingの半豊富性、Relative denominatorsの有効性が合流する場所を説明する。本文の鎖の補題と四次元の主定理の範囲を区別する。

## 4本目 · 034内 14

**Abundance after nonvanishing for compact Kähler fourfolds**

- ID: `abundance-after-nonvanishing`
- ページ数: 92
- 原典: https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Abundance-after-nonvanishing-for-compact-Kahler-fourfolds-September-27-2026/paper.pdf
- 取得済みPDF: `/tmp/math-034/Abundance-after-nonvanishing-for-compact-Kahler-fourfolds-September-27-2026.pdf`
- 抽出本文: `/tmp/catalog034-reading/14.txt`
- SHA-256: `89b5dd1a939cd7a67bbc90c83fe34ac5398d08f9103aa1cf8351bb3825e09273`
- 保存先: `drafts/catalog-034/abundance-after-nonvanishing/`

### 執筆の着眼点

非消滅を仮定してからsemiamplenessへ至るKähler四次元の解析的境界の議論を追う。射影性・Q-factorialityを勝手に加えない。射影的な持ち上げとLAへの背景引用を直接入力と混同しない。

## 本部への引き渡し

1本ごとにarticle.ja.md、article.en.md、図、sources.json、status.mdを保存する。statusには原典読解・引用照合・図の生成と目視のうち実施した内容と未確認点を記載する。その後は確認待ちで停止せず次の担当へ進む。4本終了時に、成果物のパスと残る課題をこのチャットで報告する。別チャットへの自動送信は必要なく、本部がファイルから受け取る。
