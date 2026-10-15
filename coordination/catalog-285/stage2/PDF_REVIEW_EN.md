# Catalog 285 英語PDF 全紙面QA

- 担当：gpt-6-astra（明示指定、injectivity担当）。
- 工程：第2段階。記事初稿・第1段階の内容照合とは別枠。PDF skillを読んだread-only QA。PDF・原稿・共通表示は編集していない。
- 対象：public/pdf/catalog-285-en.pdf、A4・41頁、4章、8証明図。
- 初版QA：全頁を90dpiでPNG化し、7枚のcontact sheetでp.1–41の全紙面を視認。8図の掲載頁を140dpiでも個別画像化して拡大確認。
- 初版状態：欠け・重なり・文字化け・図の不可読箇所は見つからない。下記4か所の改ページ調整を本部へ依頼、再生成後の確認待ち。

## 画像証拠

`coordination/catalog-285/stage2/pdf-qa-en/`

- page-01.png〜page-41.png：全41頁。
- contact-1-6.jpg、contact-7-12.jpg、contact-13-18.jpg、contact-19-24.jpg、contact-25-30.jpg、contact-31-36.jpg、contact-37-41.jpg：全頁の配置確認。
- detail-11.png、13、16、23、25、28、34、38：全8図の拡大確認。
- text.txt：初版PDF抽出テキスト。視覚確認の代用にはしていない。
- math-counts.json、math-language-diff.json：式数差の確認。

## 全頁点検

| 初版頁 | 内容と結果 |
| --- | --- |
| 1–2 | 表紙・AI生成注意・目次。4章のリンク表示と章開始頁3/9/21/32が実ページに一致。 |
| 3–8 | 全体案内、公式順3項目、2つのassembly写像、整数/有理trace障害、projection→injectivity方法参照、確認範囲。長い表の印刷用項目化は情報を保持。3頁下の余白は分割しない一覧項目のためで、欠落なし。 |
| 9–20 | injectivity主張・3証明図・外部入力・未確認範囲。p12末尾の見出し分離のみ調整依頼。主張がp9–10に続く点は本文も続いており引用1行だけの分離ではない。 |
| 21–31 | projection主張・3証明図・matrix/scalar区別・trace規格・未確認範囲。p27末尾見出し分離のみ調整依頼。 |
| 32–41 | irrational trace主張・2証明図・定義域・有理化後の非全射・未確認範囲。p33冒頭引用1行、p36末尾見出し分離を調整依頼。 |

全頁のヘッダー・フッター・頁番号・欄外に欠けを認めない。表や図の境界からはみ出す本文は認めない。長い数式（Heisenberg積、指数ペアリング、trace和、スペクトルgapを含む）は幅内に配置される。

## 8証明図の個別拡大確認

- injectivity：p11 main、p13 detector、p16 Bott。
- projection：p23 main、p25 matrix、p28 scalar。
- irrational trace：p34 main、p38 spectral。

すべて引用・矢印説明・箱内数式を読み取れる。矢印と文字の衝突、欠け、文字化けなし。原稿の8図の役割・内容が保持されている。縮小contact sheetだけで判定せず、各図の140dpiページ画像を個別に開いた。

## 改ページの指摘（初版）

1. p12末尾：§3 Proposition 7.11の見出しとProof targetだけが残り、主張欄はp13。
2. p27末尾：§4 Proposition 2.2の見出しとProof targetだけが残り、主張欄はp28。
3. p36末尾：§3 Proposition 5.5の見出しとProof targetだけが残り、主張欄はp37。
4. p33冒頭：前頁Theorem 1.1の引用1行だけが枠ごと分離。

本部がカタログ285限定の改ページラッパーで修正し再生成する予定。数学内容の変更要請ではない。

## 本文収録の照合

- 主張：injectivity p9–10（有限生成torsion-free、整数検出、Bott消滅、無限位数核、係数C）；projection p21（scalar射影、0<τ<1/2）；irrational p32–33（proper-action domain、無理trace、assembly像外）。原稿の主張と対応。
- 中間主張：Prop7.11 p13、Prop8.8 p15、Theorem3.1 p24、Prop2.2 p28、Prop5.5 p37が図より前に収録。
- 未確認：injectivity p20の全確率/recovery/pruning/Fourier評価、projection p31のlabel/probability/diagram/kernel/template推定、irrational p41のplane-diagram/disk-filling/外部証明をそれぞれ保持。全証明検証済みという文言への置換なし。
- 図前文献案内、図後説明、原典読書案内も3記事で収録。

## 日英の式数差

生成HTMLの各chapter内のmjx-containerを数えた結果：

| 章 | JA | EN |
| --- | ---: | ---: |
| overview | 14 | 14 |
| injectivity | 95 | 95 |
| projection | 114 | 115 |
| irrational trace | 148 | 146 |
| 合計 | 371 | 370 |

projectionはJAのe≠0,1をENではe=0とe=1の2 inlineに分ける等の言語表現差。irrational traceはJAのdim C_P=k_i、距離≤、0<τ<1等をENではdimension k_i、no farther、strictly between zero and one等の文章にする差を含む。multiset差を対応する原稿段落で照合し、合計1式差だけから数学的不一致とは扱わない。display式の主要内容と結論は一致している。

- 初版PDF SHA-256：`f0a64e7b99ca298b45d6640b40aa67be98e972304ced3934f3138a4e21fad68c`（2026-10-15 22:06 JST確認）。


## 再生成版の全頁再確認・QA終了

- 対象：A4・43頁、1,693,123 bytes。SHA-256 `1a462002b439c3fb4593bdc11c70ee2c3b18a252f48a8ff398d7b95ffe0ca539`。
- 別保存先：`coordination/catalog-285/stage2/pdf-qa-en/revised/`。page-01.png〜page-43.png、8枚のcontact sheet、text.txtを保存。初版画像は削除せず維持。
- 全43頁を90dpi画像のcontact sheetで再び視認。修正対象のp13・29・35・39を個別画像でも開き、前後の頁と照合した。
- 旧指摘1：旧p12末尾のProp7.11見出しとProof targetは新版p13で主張欄と同頁になり解消。
- 旧指摘2：旧p27末尾のProp2.2見出しとProof targetは新版p29で主張欄と同頁になり解消。
- 旧指摘3：旧p36末尾のProp5.5見出しとProof targetは新版p39で主張欄と同頁になり解消。
- 旧指摘4：旧p33冒頭のTheorem1.1引用のみ分離は、新版p35で定義域説明末尾3行と引用がまとまり解消。主張枠はp34–35に続くが、引用1行だけの孤立ではない。
- 新版目次4章の頁3/9/22/34は実際の章開始と一致。
- 新版8図はp11/14/17、p24/26/30、p36/40に存在。全体配置と図前後の順序を確認。図原本内容は変更なく、前回の全8図140dpi拡大検査と併せて可読性を確認。
- 未確認範囲は新版p21/p33/p43にそれぞれ保持。主要主張と数式の消失なし。本部のlayout-content-check.jsonは6原稿すべてcontentUnchanged=trueであり、改ページラッパー以外の内容変更がないことを補助確認した。
- p13・16・29等は主張欄と図を切らずに配置するため余白が大きいが、読めない配置・内容欠けとは区別する。追加の最適化を必須とはしない。
- 全頁再確認で新たな欠け・重なり・文字化け・孤立見出し・不可読な図は見つからない。4件の指摘は解消し、英語PDFの視覚QAを終了する。数学原典全証明の新たな検証や公開確認を行ったという意味ではない。
