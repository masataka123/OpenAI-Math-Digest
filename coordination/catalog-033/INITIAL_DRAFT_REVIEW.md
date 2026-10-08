# カタログ033 初稿確認結果

**後続作業**：本書は初稿受領時の記録。ここで挙げたWVの記号・引用表示・出典項目は本部編集で対応し、OI追加結果の入力照合も補った。現在の成果物・確認範囲は [SYNTHESIS_HANDOFF.md](SYNTHESIS_HANDOFF.md) を参照。

2026年10月8日、033本部による担当A〜Dの成果物確認。5篇とも初稿として受領できる状態で、今回重点照合した主要定理の仮定・結論に重大な取り違えは見つからなかった。掲載前には、WV記事の記号説明と引用表示の補足、出典・接続記録の統一、サイト共通表示の033対応が必要である。

この確認では日英本文・図・記録を読み、固定原典の主要箇所を照合した。全証明の独立検証を意味しない。記事本文・図・共有コードは変更していない。担当への追加依頼、Git操作、掲載・公開も行っていない。

## 受領した成果物

| 順序 | 担当 | 正式タイトル | 原稿版・ページ数 | 図の種類数／日英SVG合計 | 担当記録の初稿時間 |
|---|---|---|---|---:|---:|
| 01 | A | Orbifold and logarithmic Iitaka subadditivity | 2026-09-26・55ページ | 4／8 | 26分57秒 |
| 02 | B | Logarithmic Kodaira dimension and whole-fiber variation | 2026-09-26・75ページ | 5／10 | 29分04秒 |
| 03 | C | The reverse logarithmic Kodaira inequality and additivity | 2026-09-26・51ページ | 4／8 | 27分37秒 |
| 04 | D | Projective Hodge lines and ordinary Iitaka subadditivity | 2026-09-27・40ページ | 3／6 | 13分54秒 |
| 05 | D | B-semiampleness for compact log-smooth Kähler fibrations | 2026-09-10・38ページ | 4／8 | 19分49秒 |

5篇すべてに日英本文、TikZ／TeX／SVG、sources.json、status.md、catalog-changes.mdがある。合計10本文・20組40枚のSVG。全篇で担当記録の初稿時間は60分以内である。

成果物への入口：

- [01 OIの状態と成果物](../../drafts/catalog-033/orbifold-logarithmic-iitaka/status.md)
- [02 WVの状態と成果物](../../drafts/catalog-033/whole-fiber-variation/status.md)
- [03 RAの状態と成果物](../../drafts/catalog-033/reverse-logarithmic-additivity/status.md)
- [04 PHの状態と成果物](../../drafts/catalog-033/projective-hodge-lines/status.md)
- [05 BSの状態と成果物](../../drafts/catalog-033/kahler-b-semiampleness/status.md)

[inventory.json](inventory.json)と[SITE_HQ_HANDOFF.md](SITE_HQ_HANDOFF.md)の「未着手」「準備のみ」は準備時点の記録。今回の受領状況は本書を参照する。書誌・版・ハッシュは引き続きinventoryを基準とする。

## 記事の局所修正

### WVで写像と定数モデルを導入する

対象は[日本語本文](../../drafts/catalog-033/whole-fiber-variation/article.ja.md)と[英語本文](../../drafts/catalog-033/whole-fiber-variation/article.en.md)の149〜157行、§4の導入と最初の説明段階。

155行で使う `a_0`、157行で使う `C_*` が本文で導入されていない。降下の核心部分で、どのファイバーへの制限とどの関数体を扱うかが読者に伝わりにくい。原典のLemma 6.1（p.46）は `a_0:H_0→P_0` と `p_I:H_0→I` を定義し、p.50は有限parameter拡大後に得た、b上の一定なmarked model pairの台となる正規射影多様体を `C_*` と呼んでいる。

対応は、149行の導入で二つの写像を命名し、155行末で一定なmarked modelの台を `C_*` と置くこと。日英を同時に補う。定理の変更や証明の全面的な書き直しは不要である。

### WVの引用を独立した出典段落に揃える

WVでは多くの出典が説明文と同じ段落にあり、現行の `articleStructure` がSchnell形式の `source-line` として扱えない。試験描画で出典専用段落は日英それぞれ1個で、他の4篇では11〜20個だった。引用自体の欠落ではなく、出典と説明の見分けやすさの問題である。

例えば139・143・145・155・157行の末尾の出典リンクを、空行で分けた独立段落にする。161・187行のように未確認の説明が続く箇所は、出典リンクと確認状況の文章を分け、確認範囲の記述を削除しない。日英とも同じ処理を行う。

## 033本部で統一する記録

### 出典データの項目

WVの[sources.json](../../drafts/catalog-033/whole-fiber-variation/sources.json)は、書誌を `manuscript` 内、主張と証明の読解を `readingPassages`、関係種別を `relationship` に保存している。他の4篇と[制作要領](README.md)では、書誌を上位項目、読解を `statements`／`proofPassages`、種別を `kind`、確認範囲を `checking` に分けている。

必要な情報の多くは既にあるため、出典情報がないとは判定しない。統合時には項目を対応付け、WVの詳細な確認フラグ・未確認点を保持して共通形式へ揃える。`externalProofIndependentlyVerified: false` を確認済みに変換しない。

### 追加結果の依存種別

OI → WV Proposition 9.1（pp.69–70）の追加経路は、Aが `consequence`、Bが `direct（追加経路）`／`direct-additional-result` と記録している。両者ともWV Theorem 1.1の主証明と別であることを明記しており、数学的な矛盾ではない。

制作要領の語彙に合わせ、統合表では `consequence` に揃え、`usedAt` に「WV Proposition 9.1／§§8–9の追加経路」と明記する案が適切である。追加結果内部で直接用いられることは役割欄に残す。OI Lemma 7.4の入力側の未確認範囲は保持する。

PH → WV Remark 3.17は両担当とも `alternative`。Bは入力側照合を保留し、DはPH Theorem 8.1／Lemma 8.4の記述と受け手の段落を照合している。統合表にはDを出典として確認結果を加え、B自身が確認した記録へ書き換えない。PH Lemma 8.4の証明自体の未検証は残す。

Bの[catalog-changes.md](../../drafts/catalog-033/whole-fiber-variation/catalog-changes.md)にある「KBなど」は、033の共通略号に合わせ「BSなど」へ直す。

## 原典照合と接続の評価

033固定commitは `fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb`。使用した全5PDFのSHA-256がinventoryと一致することを本部でも再確認した。

| 原典 | 今回の重点照合箇所 | 記事で保持されている重要な区別 |
|---|---|---|
| [OI](https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/Orbifold-and-logarithmic-Iitaka-subadditivity-September-26-2026/paper.pdf) | pp.2–3、19–20、40–41 | orbifold底の不変量、係数1の境界、同じモデル上での補間、対数的・標数0の帰結 |
| [WV](https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/Logarithmic-Kodaira-dimension-and-whole-fiber-variation-September-26-2026/paper.pdf) | pp.2、5、21、25、46–50 | 全ファイバーのvariation、制限後のHodge比較、主定理とCorollary 1.3および追加結果の区別 |
| [RA](https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/The-reverse-logarithmic-Kodaira-inequality-and-additivity-September-26-2026/paper.pdf) | pp.2–3、49–50 | stratum smoothnessと境界支持条件、上界の証明、OIを加える加法性の帰結 |
| [PH](https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/Projective-Hodge-lines-and-ordinary-Iitaka-subadditivity-September-27-2026/paper.pdf) | pp.2、26–27 | entire highest line、full period imageとの区別、補間、標数0への移行 |
| [BS](https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/B-semiampleness-for-compact-log-smooth-Kahler-fibrations-September-10-2026/paper.pdf) | pp.2–3、35–37 | lctによるdiscriminant、実際のmoduli line、全高次モデルへの引戻しと全点での大域生成 |

特にOI → RAはCorollary 1.2の加法性に使う辺であり、RA Theorem 1.1の上界への直接入力とはされていない。WV p.5のLA → Corollary 1.3も主定理とは分離されている。RAから得るWVの別経路はsmooth・非負底等の適用範囲を保持しており、負の底やすべてのspecial baseまで主張を広げていない。

034との既存接続は[SOURCE_NOTES.md](SOURCE_NOTES.md)の確認範囲を引き継ぐ。今回の本部確認は034の入力・受け手の全原典を再検証したものではない。公開034の参照commit `adc7f1241b42e322a6451854ab7e4b4c146bf78a` と原稿版は維持し、OI → LA → Schnellを直接辺へ短絡しない。

各担当が明記した外部定理の未照合、解析的評価・境界退化等の独立検証未了、追加節の部分調査は残る。本文を概説として受領する条件に、全外部証明の再帰的検証を追加しない。

## 本部で実施した表示と構造の検査

- 10本文を現行 `renderDraft`／`articleStructure` で変換し、MathJaxで1,399個の数式入力を処理。数式処理エラーは0件。
- 日英の節構成・生成された節ID・参照URL定義が各篇で一致。65組の独立行数式を比較し、PHの2組にある文章部分の日英差も同じ内容と確認した。全インライン数式の機械的一対一照合を意味しない。
- 本文が参照するSVGと対応TeXの欠落、未解決のMarkdown引用キーは見つからなかった。
- 全40SVGのXML、内部ID・内部参照を検査し、新たに画像化して全図を目視。目立つ箱・矢印・出典の重なりや文字欠落は見つからなかった。SVG内の外部リンク236件の存在を確認したが、全URLのHTTP応答は検査していない。
- 専用の一時Chromeで10本文を幅1,280pxと375px、計20条件で表示。ページ全体の横はみ出しとMathJaxエラーは0件。代表画面を目視した。幅の長い数式は共通CSSによる数式領域内の横スクロールを使う。

試験表示は既存の記事用CSSと本文・図を使った一時HTMLであり、サイト共通ヘッダー・言語切替・033の実ルートを含む掲載確認ではない。全体ビルド、公開URL、図の拡大UIへの実組込み、TeX全図の再コンパイルは今回の本部確認に含めていない。担当側の検査記録とは区別する。

## サイト全体本部へ渡す対応事項

既存の[SITE_HQ_HANDOFF.md](SITE_HQ_HANDOFF.md)に挙げた共通表示の033対応が引き続き必要。ページ全体のデザイン変更は必要ない。

1. [CatalogDraftArticle.astro](../../src/components/CatalogDraftArticle.astro)の7〜10行では原稿・図の読込先が034固定。14・16・26行のパンくず、カタログ番号、全14篇表示、戻り先も033の全5篇へ切り替えられるようにする。
2. [render-draft.mjs](../../src/lib/render-draft.mjs)の19行では図拡大・TeX取得のパスが034固定。今回033を試験変換すると、40枚×2の計80リンクが誤った034パスになる。33行のsources／statusリンクにも同じ固定がある。カタログ指定に合わせて生成する必要がある。
3. 033のカタログ・記事登録、分野からの導線、033用の案内、結果単位の依存表を組み込む。原稿版と確認範囲を保持し、034の参照版を巻き込んで更新しない。
4. 組込み後に日英切替、注意書き、MIT帰属、図の拡大・TeX取得、モバイル表示、既存034への影響を確認する。

033本部の次工程はWVの局所修正と記録の統一、その後のカタログ総括・依存表の編集。サイト全体本部には、本書と5篇の成果物を掲載準備の引き継ぎ材料として渡せる。
