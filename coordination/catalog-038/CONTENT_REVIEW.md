# カタログ038 内容・形式の受領記録

担当：本部兼記事担当。2026-10-10。制作セット1.3。単独制作につき別担当による独立査読ではない。原稿の主張の紹介と編集上の照合を区別する。

## 主張から全結論への対応

| 対象・原典 | 保持した仮定・量化・結論 | 日英の説明先 | 照合結果 |
|---|---|---|---|
| Theorem 1.1、p. 1 | smooth / connected / projective / complex、n≥1、ample L。K_X+(n+1)Lの大域生成 | proof-overview-step-1〜4、特にstep-4 | §§3–6を読み、狭義性→達成→全中心の点性→等号因子→H¹消滅→s(x)≠0を接続。Lの大域生成やvery amplenessを加えていない |
| Proposition 5.1、p. 13 | 非生成点x、一つの固定0<t<n+1、任意に大きいm、すべての最小化対 | proof-1-step-1〜3 | 中心によらないLemma 5.2、特殊化、固定mでの微分、固定lでm→∞の後l→∞を保持。存在する一対だけへ弱めていない |
| Lemma 6.2、pp. 21–22 | (6.5)–(6.9)の構成を主張欄に記載。S≠0、各成分の像{x}、S上の係数等号、隣接する他成分の狭義性 | proof-2-step-1〜3 | step-2で点像と等号、step-3でr_F=0 / >0、正係数の平均＝最小値、零座標を含むprofile一致を説明。主定理のstep-4へ接続 |
| Corollary 6.3、p. 23 | 同じ仮定、すべての整数m≥n+1 | proof-3-step-1〜2 | r=m−n−1、X×P^r、外積の随伴束、fiber制限。r=0を明記 |

主張欄はTheorem 1.1とCorollary 6.3を主要結果に、Proposition 5.1とLemma 6.2を各詳細図の前に配置。citations.jsonのmainResults / proofTargets / statements / conclusionCoverageを共通表示の実在アンカーと照合した。主張の全補助計算を再証明したという意味ではない。

## 直接入力と方法上の参照

原稿の§§2–6（pp. 3–23）を閲覧した。外部4入力の版・ページ・記述・適用箇所を照合し、sources.jsonとoverview/connections.jsonに記録した。

- Demailly–Kollár：arXiv v2（2000-05-01）、Theorem 3.1 / Lemma 3.2、pp. 14–15。e^φがHölderである局所idealの形と、本稿が別途補うconstructibilityを区別。
- Fujino：lecture note v1.04（2009-07-22）、Theorem 0.1、p. 1。nef and bigとSNC fractional boundary、丸め、H¹消滅から持上げへの適用を比較。
- Gardner：Bulletin AMS 39 (2002)、Theorem 4.1、誌面p. 362 / PDF p. 8。有限格子集合を立方体で厚くした集合の有界性・可測性と和集合を確認。
- Włodarczyk：JAMS 18 (2005)、Theorem 1.0.1（781/3）、Definition 2.1.3（783/5）、Theorem 2.4.1（786/8）。既存SNC境界とprincipalization、抽出済み因子を保持する用途を比較。
- Fujita：arXiv v1（1993-11-30）、§1(1.6)、p. 3。局所discrepancyと持上げの方法上の参照。三次元の主定理を高次元へ適用した直接辺にはしない。

入力定理の証明全体と再帰的な依存文献は未検証。§3の格子近似・initial formsの選択と§5の漸近評価は原稿の論証を読んだ範囲であり、完全な独立再構成・形式検証は未実施。他カタログの全依存関係は未調査。

## 制作セット1.3の受領

| 項目 | 入力元 → 表示先 | 自動検査 | 目視証拠 | 未完了 |
|---|---|---|---|---|
| 公式順4列表 | inventory.json + overview/presentation.json → 共通renderCatalogInventory | 公式順1行、4列、必須値、記事入口 | validation/screensのoverview/034 detail・rightを日英1280/375で比較 | サイト登録後の再確認、冊子PDF |
| 図前の文献一覧・引用区別 | 記事citations.json + sources.json → 本文・TeX | text-only引用検査、日英39マーカー一致、図中リンク集合一致 | article-diagram-sourcesとOrbifold referenceを比較。8図の表示名・ページも閲覧 | publicへの複写後の全体check:citations、PDF |
| 証明対象と主張欄 | proofTargets / statements / conclusionCoverage → 各証明節 | 4対象・4図、2主要結果、主張アンカー、12説明段階の存在 | article-proof-1/-2とSchnell argument、図末尾と直後の文章 | 登録後の画面、PDF |
| 原典読書案内 | readingList → 末尾8項目 | 日英の結果・ページ・目的、sourcesアンカー | 共通生成と表示構造を確認、確認範囲の本文を照合 | PDF |

## 表示と生成の確認範囲

サイト本体を変更せず、共通renderDraft / renderCatalogInventoryと既存distの共通CSSを使ってlocalhostの作業用HTMLを生成した。本文は今回のMarkdown、図は今回のSVG、MathJaxもローカルの同じライブラリを使用。参考画面は既存distの034・Schnell・Orbifold Iitaka。サイト登録・本番ルート・公開版の検査とは区別する。

日英×1280px/375px×記事・案内・3見本の20条件でページ横はみ出し、MathJaxエラー、JavaScript例外、欠損画像なし。4列表は375pxで表の中だけ横スクロール。定理の淡い背景、出典行、本文と補足の書体・サイズ、図前後の順序は共通表示。今回の長いLemma 6.2の主張は記号の構成を省けないため、複数段落の同じ定理欄に収めた。単論文なので一覧は1行、総括図・選択UIは設けない。

8枚すべてのSVGを画像で閲覧し、矢印・引用・箱・文字の重なりと欠けなし。TeX生成でもOverfull / Missing characterなし。表示数式16組、本文引用マーカー39組が日英一致。図の生成対象24ファイルのSHA-256と図中原典リンク集合を検査。validation/content-checks.json、structure.json、visual-checks.json、inventory-visual.jsonを参照。

未登録のためpublicの図コピーはまだなく、全体のcheck:citations / npm test / build / check:linksはサイト本部の組込み工程で実施する。引用のtext-only検査を全体検査済みと置き換えない。図の拡大操作・言語切替のアンカー維持・PDFリンクは登録後に確認する。
