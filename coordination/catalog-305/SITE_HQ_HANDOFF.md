# カタログ305 第1段階・サイト本部への引継ぎ

**最新状況（2026-10-21）：第3段階・公開確認済み。** [PUBLICATION_REPORT.md](PUBLICATION_REPORT.md) がcommit・push・Actions・公開日英本文／図／PDF反映確認の記録。[PREPARATION_REVIEW.md](PREPARATION_REVIEW.md) と同一版を再利用した。以下の第1段階の内容引継ぎは履歴として維持し、数学的な確認範囲・未確認事項は変更していない。

## 現在の状態と依頼範囲

第1段階（記事・別担当の内容点検・日英カタログ案内）の成果物を受領。状態は**内容編集済み**。今回はここで停止する。サイト登録・公開用資産の配置・日英冊子PDF・公開準備の総合検査は第2段階、commit・push・公開反映確認は第3段階として未実施。

作業先は `/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、ブランチは `main`。開始時HEADはGIT_HEAD.txt、既存の他カタログの未コミット差分はGIT_BASELINE.txtを参照。305の制作物はdrafts/catalog-305とcoordination/catalog-305だけに保存した。共有src/public/scriptsの同一性検査はstage1-checks.json参照。作業場のブランチを切り替えず、他担当の差分を消さない。

採用仕様は制作セット1.4、MODEL_ROLESの2026-10-20補足。今回の担当・明示指定の受付根拠・取得できない実行情報は**MODEL_PROVENANCE.json**を唯一の担当台帳とする。Astra執筆2担当と、そのどちらとも別のAstra内容点検担当を `model=gpt-6-astra, reasoning_effort=high, fork_turns=none` で起動した。本部の希望設定はgpt-6.1-sol/xhighだが、正確な実行設定の読戻しAPIはなく、希望値をactual値として転記していない。

## 公式名称・版と成果物

唯一の書誌・順序・PDFページ数・SHA-256台帳は**inventory.json**。2026-10-21に公式mainを確認し、参照commit `1581d4cbdd69a0faf34b2089614fe2a814316a6a` へ固定した。根拠はsources/official-reference.json、実ファイル照合はSOURCE_CHECK.json。原稿は全3本ともSeptember 24, 2026版。

公式分野はTopology（304–321）、overviewの誌面/PDF p.33。公式overview見出しは **Counterexamples to disk embedding and Wall’s manifold conjecture**、CONTENTSおよび今回の依頼名は **Four-dimensional disk embedding and Wall's conjecture**。両方を台帳に保持し、表示はoverviewに準拠する。日本語見出し「円板埋め込みとWallの多様体予想に対する反例」はAstra案内担当が確認した。

| 公式順 | paper ID／成果物フォルダ | 原典PDFページ数 |
|---|---|---|
| 1 | `drafts/catalog-305/boundary-only-disk-embedding/` | 48 |
| 2 | `drafts/catalog-305/marked-tensor-disk-embedding/` | 53 |
| 3 | `drafts/catalog-305/pd4-no-aspherical-model/` | 32 |

各記事にarticle.ja.md / article.en.md、sources.json、citations.json、status.md、diagramsのTikZ・日英TeX/SVG・citation-build.jsonがある。各3図、案内は1図で、合計10種類・20SVGと対応する20TeX。図数を先に固定した制作ではない。最初の2記事にはcatalog-changes.mdもある。既存記事との重複・旧公開アンカーはなく、今回の安定paper IDを維持する。

日英案内は`drafts/catalog-305/overview/`。共通4列表のpresentation.json、結果単位のconnections.json、sources/citations、日英本文、総括図とstatusが揃う。初稿時間と後続編集は各status参照。各論文の初稿は60分以内に区切り、案内・独立点検・本部作業は別枠で記録した。

## 内容点検とカタログ構成

**CONTENT_REVIEW.md**が独立Astraの照合・修正・再確認・限界の記録。`review/{boundary,marked,pd4,overview}-reviewed-manifest.json`が受領した対象版を特定する。現在のファイルとの一致はREVIEW_IDENTITY_CHECK.jsonで確認する。Sol本部は数学の修正をしていない。

境界像／境界写像、入力と出力のframing、相対ホモトピー類の不指定は、両円板稿のcatalog-changesと案内で比較済み。論文間の接続判断はAstraのconnections.jsonとCONTENT_REVIEWを参照する。markedからPD4への3記録は一つの論文間依存の異なる入力であり、3本の流れではない。別構成の比較と直接入力を区別し、同一例の包含やboundary-onlyからPD4への未確認の辺を加えていない。

構成は短い概要→PDF（第2段階に挿入）→公式順共通表→全体図→詳細接続表→帰結の範囲と原典。FORMAT_CONTRACT第6節の判断はoverview/status.md。総括図1枚は比較の破線と入力の実線を区別する役割を持つ。分類カードと選択UIは省いた。

## 検査と再利用

- 引用同期の共通検査：citation-check.log。4つの担当registryを明示して検査し、図前文献一覧・本稿内/外部引用・証明対象・読書案内を確認した。
- 必須形式・公式順表・全結論の説明先・図生成manifest・内部リンク：stage1-checks.json / stage1-validation.log。共通のvalidateGuide、renderDraft、renderCatalogInventory等を利用した。
- 共通表示の回帰検査：shared-tests.log。
- 日英8ページの未公開プレビュー：preview/、preview-checks.json。PC/375pxの画像・数式・ページ幅・リンクの検査：screens/、screen-checks.json。034の表、Schnellの主張欄、033 Orbifold Iitakaの文献案内との実画面比較はFORMAT_REVIEW.md。
- 原典の共通ファイルはsources/、外部資料の取得記録はsources/external/acquisition.json。取得と実際の数学的照合を混同しない。

図の生成記録は各diagrams/citation-build.jsonを唯一のハッシュ台帳とする。今回確認済みの同一版TeX/SVGをそのまま使い、本部の変更や公開のためだけに再生成しない。本文と図の引用は担当citations.jsonから生成済み。番号のないPTVV offprintは引用版にせず、番号付きarXiv:1111.3209v4をAstraが再照合して採用した。

この段階のプレビューはサイト登録を伴わない。実サイトの経路、図拡大UI、表の操作、日英切替のアンカー保持、公開コピー、冊子紙面の確認を済ませたとは扱わない。publicコピーを要求する完全なcheck:citationsは第2段階に実施する。

## 残る数学的未確認

各記事末尾・sources・CONTENT_REVIEWが詳細の参照先。特にPD4のQuinn83相対安定積は原典本文未取得で、引用先の結果記述を未照合。CAT(0)・Farrell–Jones・穿孔平滑化も本稿の使用箇所は読んだが外部原文の結果記述は未照合。これらを確認済みの入力に変更しない。

両円板稿にも、全局所幾何操作、cochain transferや導来比較の全符号、著者が対象外とした外部結果などの未検証範囲がある。全証明の独立検証・専門家査読・形式検証は実施していない。今回の受領可は、記録した主張・核心の帰着・直接入力・日英・図・接続の照合範囲についての判定である。

## 第2段階の再開手順

1. 本書、MODEL_PROVENANCE、CONTENT_REVIEW、REVIEW_IDENTITY_CHECK、各statusと最新Git差分を確認する。確認済み同一版の読解・執筆を繰り返さない。内容変更が必要ならAstra/highへ返す。
2. `src/data/site.mjs`へinventoryから3 paperとcatalog 305を登録する。既存Topology分野を使い、公式順を保持。paperのpathはsourcePathの`preprints/`を除いた部分。案内は共通CatalogMarkdownOverview、記事は共通Markdown本文表示へ登録する。独自CSSを作らない。
3. 案内のoverviewSectionIdsは`inventory, connections, dependencies, sources`。記事の主張・証明段階IDは現稿とstage1-checksを参照し維持する。日英のbase pathを共通変換する。
4. 各担当の確認済み`.ja/.en.svg`と`.ja/.en.tex`を`public/diagrams/catalog-305/<paperId>/`（案内はoverview）へ配置する。引用検査で原本・生成条件・公開コピーを照合し、一致する図を再コンパイルしない。
5. 日英冊子を案内＋公式順3記事の4章で生成する。予定出力は`public/pdf/catalog-305-ja.pdf`と`catalog-305-en.pdf`。共通PDF版情報とともに登録し、短い概要の直後・公式順表より前へ対応言語のPDF導線を置く。日英冊子は現在どちらも未生成、担当はサイト本部。
6. 登録後に **`npm run catalog:prepare -- --catalog 305`** を使う。npmがPATHにない現環境ではREADME記載のbundled Nodeで`scripts/prepare-catalog.mjs --catalog 305`を直接実行できる。通常は強制再生成オプションを付けない。
7. 共通処理のHANDOFF.md、report.json、画像一覧と日英PDFを確認し、REVIEW_ENTRYからPREPARATION_REVIEW.mdへ今回の版・担当・目視結果・残作業を追記する。033/034比較、本文/図/PDF一致、全体テスト・リンク・PC/375px・実UIを確認して第2段階の結果を報告し停止する。

Node・Python・TeX・Popplerの確認済みパスはREADME.md。第1段階プレビューは必要な場合だけbuild-preview.mjs、validate-stage1.mjs、capture-preview.mjsを使える。これらは第2段階の共通catalog:prepareの代替ではない。

## 公開状態

305のサイト組込み、日英冊子PDF、公開commit、push、Actions、公開URL反映確認はすべて**未実施**。公開準備完了・公開確認済みとは報告しない。次のユーザー指示まで第2段階へ進まない。
