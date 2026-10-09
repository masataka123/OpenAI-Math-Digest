# 日英記事の雛形

制作セット1.1。[制作手順](README.md)と併用する。以下のコードブロックを各 `article.ja.md` / `article.en.md` にコピーし、`{{...}}` を原典に基づいて置き換える。雛形の説明やプレースホルダーは公開しない。

引用は [CITATIONS.md](CITATIONS.md) に従う。以下のマーカーはcitations.jsonから生成して完成させる。本文・TeXへURLとページを別々に転記しない。

## 固定するもの・変えるもの

- 固定：主要結果 → 引用案内 → 証明の道筋・図と直後の説明 → 外部入力 → 原典・確認範囲。日英で結果・仮定・数式・節・図・確認範囲を一致させる。
- 可変：採り上げる主要結果、証明節・段階・図の数と長さ。原論文の論理に合わせる。Schnellの3図をそのまま要求しない。
- 主要結果のH3は `Theorem 1.1 — …` 等、原典の種別・番号から始める。原典に番号がない場合は番号を創作せず、サイト本部へアンカー対応を申し送る。
- 初めの証明節に「証明の道筋」を置く。詳細節へのリンクは存在する場合だけ付ける。短い記事は一つの証明節・一つの図でよく、節を水増ししない。
- 図は対応する説明の直前に置く。複数の図を一節にまとめた後で一括説明せず、通常は図と説明を一組の証明節にする。
- 引用は説明の次に空行を挟み、リンクだけの独立段落にする。共通表示がこの段落を出典行として扱う。独立段落へ `出典：` 等の文字を加えない。
- 数式だけの箱や引用だけの矢印にしない。何を得るか・何を適用するか・適用仮定がどこで成立するかを図と文章で対応させる。
- 原稿の主張を紹介する表現と、編集側で照合した範囲を区別する。標準用語の長い定義、読者へのQ&A、作業時間、ローカルパスは本文に入れない。
- 正式タイトルは共通ヘッダーに表示される。H1は原稿識別用として維持するが、著者・版・AI注意書きは共通ヘッダーと重複させない。

## 日本語

```markdown
# {{正式英語タイトル}}

**{{方法と帰着を伝える短い副題}}**

{{何を、どの仮定の下で、どの方法で示す原稿か。短い導入。}}

## 1. 主要結果

### Theorem {{原典の番号}} — {{内容}}

{{原典に沿った仮定、量化、記号、結論。条件付きの主張は条件を保つ。}}

<!-- cite:main-result -->{{共通記録から生成する引用 / Generated citation}}<!-- /cite -->

### Corollary {{原典の番号}} — {{内容}}

{{必要な系がある場合だけ置く。主要結果は原典順。}}

<!-- cite:main-corollary -->{{共通記録から生成する引用 / Generated citation}}<!-- /cite -->

## 図の矢印に付した引用

{{略号のない結果は本稿内であること、外部文献の表示名と引用キーの対応を示す。外部入力がなければその旨を短く記す。}}

## 2. {{主定理の証明 — 核心の帰着}}

**証明の道筋。** {{目標から結論までの道筋。場合分け、主要入力、後の詳細節との対応。}}

{{図で使う記号とこの節の狙い。}}

![{{何を示す図か}}](diagrams/main.ja.svg)

### 1. {{最初の非自明な移行}}

{{どの結果を何のために使うか。その仮定をここで満たす理由、得る結論。}}

<!-- cite:step-one -->{{共通記録から生成する引用 / Generated citation}}<!-- /cite -->

### 2. {{次の帰着と結論}}

{{前段で得たものをどう使い、主張へ至るか。}}

<!-- cite:step-two -->{{共通記録から生成する引用 / Generated citation}}<!-- /cite -->

## 3. どの論文が、どの段階を担うか

| 供給元と結果 | 利用箇所 | 使用内容・必要な仮定 | 確認範囲 |
|---|---|---|---|
| {{表示名・結果・原典リンク}} | {{本稿の結果・ページと概説の段階リンク}} | {{用途と適用仮定}} | {{照合した範囲}} |

## 4. 原典を読む入口と確認範囲

{{核心の節・定理・ページへの案内。読んだ証明箇所、入力の照合、残る未確認を簡潔に記す。外部証明の全検証とは区別する。}}

<!-- cite:reading-scope -->{{共通記録から生成する引用 / Generated citation}}<!-- /cite -->



```

## English

```markdown
# {{Official English title}}

**{{A short subtitle identifying the method and reduction}}**

{{State what the manuscript proves, under which hypotheses, and by which method.}}

## 1. Main results

### Theorem {{original number}} — {{Result}}

{{Preserve the original hypotheses, quantifiers, notation, and conclusion.}}

<!-- cite:main-result -->{{共通記録から生成する引用 / Generated citation}}<!-- /cite -->

### Corollary {{original number}} — {{Result}}

{{Include only a relevant corollary; keep the original order.}}

<!-- cite:main-corollary -->{{共通記録から生成する引用 / Generated citation}}<!-- /cite -->

## References on the arrows

{{Identify results internal to this manuscript and map external citation keys to readable paper names.}}

## 2. {{Proof of the main theorem — the central reduction}}

**Proof route.** {{Explain the route, cases, main inputs, and links to later proof sections where applicable.}}

{{Introduce the goal and notation used in this diagram.}}

![{{Purpose of the diagram}}](diagrams/main.en.svg)

### 1. {{The first nontrivial step}}

{{Identify the input, its purpose, why its hypotheses apply, and the resulting conclusion.}}

<!-- cite:step-one -->{{共通記録から生成する引用 / Generated citation}}<!-- /cite -->

### 2. {{The next reduction and conclusion}}

{{Explain how the preceding conclusion yields the target statement.}}

<!-- cite:step-two -->{{共通記録から生成する引用 / Generated citation}}<!-- /cite -->

## 3. Which papers supply which steps

| Source and result | Used at | Role and required hypotheses | Checking scope |
|---|---|---|---|
| {{Readable name, result, source link}} | {{Result, page, link to the overview step}} | {{Use and hypotheses}} | {{What was checked}} |

## 4. Return to the sources

{{Guide readers to the key sections, results, and pages. State the passages read, inputs checked, and unresolved points, separately from independent verification of complete proofs.}}

<!-- cite:reading-scope -->{{共通記録から生成する引用 / Generated citation}}<!-- /cite -->



```

## 適用上の注意

- 証明節を増減したら、番号付きH2を連番にする。「図の矢印に付した引用」だけ番号なし。外部入力がない場合、入力表の空行を残さず、確認した範囲を短い文章にする。
- 図は `diagrams/<stem>.ja.svg` / `.en.svg` と同名の `.tex` を用意する。再生成手順はstatusへ。本文の画像記法は上の形に保つ。
- 共通表示の節IDは通常 `results`、`diagram-sources`、`proof-1`、`proof-2`、`dependencies`、`sources`。説明段階は `proof-1-step-1` 等。定理の番号付きIDは `theorem-1-1` 等。生成HTMLで実在を確認してからリンクする。既存の記事のIDは変更せず、別名アンカーを保持する。
- `証明の道筋`を独立H2にすると通常は証明節として数えられるため、雛形どおり証明節冒頭の太字段落にする。
- 原典への通常リンクは固定commitのGitHub閲覧ページを使い、番号・ページをリンク表示に含める。GitHub閲覧ページの `#page=` によるページ移動を前提にしない。ダウンロード用URLは台帳に分離する。
- 日英の図と記事を実際に表示して確認する。図内の長い表示名は改行・余白で収め、謎の略号や極端な縮小で解決しない。
