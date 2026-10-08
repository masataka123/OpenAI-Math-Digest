# カタログ033 総括・統一編集の引き継ぎ

2026年10月8日。033本部で総括の日英本文、接続図、5篇の記事の統一編集とローカル表示確認を完了した。サイト登録・共有部品の変更・Git操作・公開は未実施。確認したのは原典の記述と使用箇所、記事との対応であり、原稿の主張の正しさや全証明を保証するものではない。

## 総括と記事

- **総括ページ**：[日本語](../../drafts/catalog-033/overview/article.ja.md)／[English](../../drafts/catalog-033/overview/article.en.md)。公式順一覧、4種類の日英接続図、番号付き説明、12入力の一覧、版と未確認範囲を収録。
- **接続の記録**：[connections.json](../../drafts/catalog-033/overview/connections.json)。各入力の結果・ページ、利用先・ページ、役割、仮定、記事内の対応節、確認範囲を保持。
- **再生成・配置の説明**：[overview/README.md](../../drafts/catalog-033/overview/README.md)。図は日英の自己完結TeXとSVGを用意。
- **検査結果**：[validation.json](../../drafts/catalog-033/overview/validation.json)、[diagram-checks.json](../../drafts/catalog-033/overview/diagram-checks.json)。

033の公式見出しは *Campana's orbifold Iitaka conjecture and logarithmic subadditivity*。分野は **Algebraic and complex geometry**、公式overview p.5。CONTENTSの別表記は *Iitaka subadditivity, variation, and logarithmic additivity*。全5篇・259ページ。

| 公式順・略号 | 正式タイトルと記事 | 原稿版・ページ | 日英それぞれの図数 |
|---|---|---|---:|
| 01 OI | Orbifold and logarithmic Iitaka subadditivity — [日](../../drafts/catalog-033/orbifold-logarithmic-iitaka/article.ja.md)／[英](../../drafts/catalog-033/orbifold-logarithmic-iitaka/article.en.md) | 2026-09-26・55 | 4 |
| 02 WV | Logarithmic Kodaira dimension and whole-fiber variation — [日](../../drafts/catalog-033/whole-fiber-variation/article.ja.md)／[英](../../drafts/catalog-033/whole-fiber-variation/article.en.md) | 2026-09-26・75 | 6 |
| 03 RA | The reverse logarithmic Kodaira inequality and additivity — [日](../../drafts/catalog-033/reverse-logarithmic-additivity/article.ja.md)／[英](../../drafts/catalog-033/reverse-logarithmic-additivity/article.en.md) | 2026-09-26・51 | 4 |
| 04 PH | Projective Hodge lines and ordinary Iitaka subadditivity — [日](../../drafts/catalog-033/projective-hodge-lines/article.ja.md)／[英](../../drafts/catalog-033/projective-hodge-lines/article.en.md) | 2026-09-27・40 | 3 |
| 05 BS | B-semiampleness for compact log-smooth Kähler fibrations — [日](../../drafts/catalog-033/kahler-b-semiampleness/article.ja.md)／[英](../../drafts/catalog-033/kahler-b-semiampleness/article.en.md) | 2026-09-10・38 | 5 |

## 今回の統一編集

各証明節を「目標 → 引用付き図 → 番号付き説明 → 得られた結果の使い道」に揃えた。OI・RAの全体図を維持し、WVとBSには全体図を追加。詳細図は残した。PHは既存の3図で3段階を扱う。章数・図数は統一していない。

WVでは `a_0`、`p_I`、`C_*` の導入を補い、出典を独立段落にした。sourcesの共通項目を補い、OIから追加結果への入力を `kind: consequence` に統一した。追加結果の内部で直接使うことを消してはいない。初稿時点の未確認は `initialDraftChecking` に保存し、今回の照合は `hqSynthesisChecks` に結果別に記録した。

各記事のstatusに本部編集を追記した。担当の初稿時間・確認実績は、その後の本部作業と分離して保持した。

## 確認した接続

次の12件はカタログ内と033↔034の主要入力。各記事で扱う外部文献すべての件数ではない。入力の記述・受け手の使用箇所・対応記事を照合した範囲を、総括とconnections.jsonに示した。

| ID | 入力 → 使用箇所 | 何のために使うか |
|---|---|---|
| c01 | OI Cor. 6.2 → WV Thm. 2.1、Lemmas 2.8–2.9 | 対数下界、飯高ファイバー上の消滅、parameter fieldの構成 |
| c02 | OI Thm. 3.1 → WV Thm. 3.8／Prop. 3.9、Prop. 3.12 | 制限した最高lineの随伴正値性と有理自明性 |
| c03 | OI Cor. 6.2 → RA Cor. 1.2、Thm. 7.8／§7.6 | 完成した上界に同じ対の下界を加えて加法性を得る |
| c04 | OI Prop. 2.7 → WV Prop. 9.1(i), (iii) | 元の参照空間で切断と比を保ち、相対bignessを得る |
| c05 | OI Lemma 7.1／Cor. 7.2 → WV Prop. 9.1(iv), (v) | 被約境界で全最高部分をrank oneにする |
| c06 | OI Lemma 7.4 → WV Prop. 9.1の初期境界 | 実際の成分の最小値と全付値のlctを比較して正規化する |
| c07 | OI Cor. 6.2 → LA Thm. 1.2／Lemma 6.1 | 境界0のAlbanese帰着で非消滅反例を排除する |
| c08 | OI Lemma 2.6 → KA §5.1、Lemma 5.7 | 相対飯高底と小平次元0の一般ファイバーへ帰着する |
| c09 | OI Lemma 5.2 → KA §5.1 | bigなファイバーを射影的stable familyに比較する |
| c10 | OI Prop. 2.7／Thm. 3.1 → KA Lemma 5.2 | 切断空間と実際の有理lineを比較し、随伴bignessを得る |
| c11 | OI Lemma 3.3 → KA Lemma 5.7 | 非零切断を作り、有効因子の補間に使う |
| c12 | LA Cor. 11.2 → WV Cor. 1.3 | BDPP・canonical性の確認と合わせ、Tajiの仮定を満たす |

c03・c12は帰結への入力、c04–c06は追加結果への入力であり、受け手の主定理の必須経路に移さない。c06は今回入力記述を追加照合したが、付値比較・モデル変更の全証明は未検証である。

実線の依存と分けたもの：

- **前提対応1件**：OI Theorem 1.1と不変な底の規約 → CK Assumption 2.2。図では破線。CKの他のMMP・abundanceの前提まで解消したとは扱わない。
- **別経路3件**：PH Lemma 8.4／Theorem 8.1によるWVの代替随伴比較、RA＋WVから得るsmooth・非負底のvariation上界、PHとOIの通常劣加法性の別証明。PHの入力側は担当Dの照合を引き継ぎ、Bや今回の本部が新たに全証明を検証した記録にはしない。
- **類似手法2件**：OIとPHの弱正値性・補間、OIとBSのroot eigenline・境界次数・実際のline。仮定や底の定義の違いを明記。
- **背景1件**：RAのconnection-formによるAx–Schanuel論証の出典。方法の背景と外部定理の直接入力を分ける。

PHとBSの直接外部入力は各記事の図・説明・入力表に残した。PHはBBT／BC、Fujino–Mori／Ambro、Fujino、Hashizumeを役割別に扱う。BSはFF Theorem 1.1、MWWZ Corollary 1.3、Toma Corollary 5.3、BFMTの代数的半豊富性とGriffiths延長の結果を別の段階へ使う。これら外部入力の原典照合実績は担当記録を引き継いでおり、全体を今回再調査したわけではない。

## 固定版と確認範囲

033は `fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb`、034は公開記事と同じ `adc7f1241b42e322a6451854ab7e4b4c146bf78a` を使う。LAは2026-09-24、KAは2026-10-04、CKは2026-10-05版。8PDFのSHA-256を台帳と再照合した。034のKA・CKの10月6日版への移行は含めない。

OI → LA → SchnellをOI → Schnellの直接辺にはしない。BS p.3の「orbifold Iitakaを使わない」はその入力についての記述であり、他の033／034稿との全関係を調べた結論ではない。図にない関係は未調査・未記録として扱う。

| 記事 | 残る主要な未確認事項 |
|---|---|
| OI | 全rank-loss論証、stable family比較の全構成、§7の全付値比較・BFMTとの全接続、coreの帰結 |
| WV | 正則化・L²評価の全検算、Hanamura原定理・SGA1 purity原文、§8の中間評価・§9全体 |
| RA | 斉次置換・compact flag・有限monodromy、全境界評価・表現論、入力文献の全証明 |
| PH | 多変数Hodge延長、全補助結果、§§8–9の別証明。WVとの代替関係は記述・用途の確認に限定 |
| BS | 全parameter-space構成、偏極変更・延長の全整合性、算術商・コンパクト化の外部理論 |

## 検査したこと

- 12本文を既存rendererとMathJaxで処理。数式1,492箇所、エラー0。
- 日英6組の節番号・節ID・出典URLが一致。独立行数式65組は句読点と翻訳された文章を除いて一致し、PHの文章部分も内容を照合。inline数式すべての機械的一対一比較ではない。
- 26組52枚のSVGと対応TeXが揃い、XML・ID・内部参照を検査。図内の外部原典リンク318件。新規12枚はXeLaTeX／dvisvgmで生成し、overfull・欠字なし、全12枚を画像で目視確認。
- 隔離したChromeのローカルプレビューで12ページ×1280／375px＝24画面を検査。ページ全体の横はみ出し、数式エラー、ローカルファイル・内部アンカーの欠落なし。日英切替を確認。長い図・表・数式は既存の局所スクロールを使用。
- 固定PDFの存在・ハッシュとリンクの組立てを確認。外部リンク全件へのHTTP疎通検査ではない。

ローカルプレビューは現行rendererの034固定アセットURLを一時HTML内だけで補正している。サイト本体の導線、拡大表示のJavaScript、共通ヘッダー、公開URLは統合後の検査対象。サイト全体のビルド成功や公開済みとは扱わない。

## 全体本部への共通機能の要望

| 優先 | 対象 | 必要な変更 |
|---|---|---|
| 掲載に必要 | `src/components/CatalogDraftArticle.astro` | 原稿・図のglob、catalog番号、全篇数、戻り先、記事内ナビのデータをcatalog別に選ぶ。現状は034・14篇固定。033は5篇 |
| 掲載に必要 | `src/lib/render-draft.mjs` | 図拡大・TeX取得、sources/statusの034固定パスをcatalog別にする。総括の相対articleリンクを掲載URLへ解決する |
| 掲載に必要 | `src/data/site.mjs`、記事／分野のルート | 公式順の5篇と033を登録し、分野→033→記事の導線を追加。原典commitを論文／catalog別に保持して034の版を変えない |
| 掲載に必要 | `src/pages/[lang]/catalog/[id].astro`、`ReadingGuide.astro` | 033の総括・一覧・確認範囲・案内文を選択。034の「14篇」「3つの流れ」を流用しない |
| 掲載に必要 | `CatalogDependencies.astro`と関連データ | 結果・使用箇所単位で033内／033↔034を扱い、主証明・帰結・追加・前提・別証明・背景を区別。図と表で同じconnectionsの記録を使う |
| 掲載に必要 | 図アセットの配備処理 | 033記事44枚と総括8枚のSVG、および同名TeXを033の配備先へコピー。現時点ではdrafts内に保存 |
| 統合時の確認 | 共通Layout・図の拡大・言語切替 | モバイル・スクロール中の言語切替、AI注意書き、原典確認案内、MIT帰属を既存仕様で維持。034の既存URL・表示も確認 |

**現時点で共通CSSの追加要望はない。** 今回の本文・図は既存の定理、引用、図、表のスタイルで表示できた。共通CSS・共有部品の変更は全体本部に集約する。

## 次の引き継ぎ単位

1. 上記の登録・パス対応とアセット配備を全体本部で行う。
2. 033↔034の接続を同じ固定版・同じ種別で統合し、033と既存034の日英導線を確認する。
3. 公開前に実サイトのリンク・数式・画面を検査する。公開やGit操作は、その段階のユーザー指示に従う。
