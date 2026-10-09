# カタログ063本部 — The generalized Mukai conjecture

- 採用仕様：制作セット **1.0（2026-10-09）**。[制作手順](../../production/README.md)、[記事雛形](../../production/ARTICLE_TEMPLATE.md)、[カタログ雛形](../../production/CATALOG_TEMPLATE.md)、[記録仕様](../../production/RECORDS.md)に従う。
- 準備・制作日：2026-10-09（JST）。状態：**公開確認済み。サイト組込み・日英PDF・公開サイト検査済み**。
- 現在の依頼：「GitHub Pagesへの公開しましょう！」。準備・記事制作・サイト組込みに続き、このチャットで公開と反映確認を担当した。
- 制作構成：**single**。本部が記事担当を兼任する。別の記事窓口や WORKER_A 等は作らず、下記を本部兼記事担当の指示書とする。
- PDF担当：**サイト本部**。このチャットで日本語・英語とも生成済み。各16ページ・2章（短いカタログ案内＋記事1本）・4図。引継ぎは [SITE_HQ_HANDOFF.md](SITE_HQ_HANDOFF.md) に作成済み。別チャットへの自動送信は未実施。
- 成果物：[日本語記事](../../drafts/catalog-063/generalized-mukai/article.ja.md)・[英語記事](../../drafts/catalog-063/generalized-mukai/article.en.md)、各4点のTeX/SVG、短い日英案内、出典・接続・検査記録。サイト登録・公開用図の配置・日英解説PDFと版台帳を整えた。[サイト本部の検査記録](SITE_INTEGRATION.md)を参照。commit・push・公開確認まで完了。[公開記録](PUBLICATION.md)を参照。原論文PDFと解説PDFは別の成果物である。

## 台帳と公式順

書誌・表示名の管理元は [inventory.json](inventory.json)。調査証拠・照合範囲は [SOURCE_NOTES.md](SOURCE_NOTES.md)、各工程と担当は [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md) に記録する。

| 公式順 | 正式タイトル | 表示名 | paper ID | 原稿版・ページ | 既存記事 | 担当案 |
|---|---|---|---|---|---|---|
| 01 | The generalized Mukai conjecture | Generalized Mukai（日：一般化向井予想） | `generalized-mukai` | 2026-09-24・19ページ | 照合済み、該当なし | カタログ063本部が兼任 |

- 公式カタログ名：**The generalized Mukai conjecture**。CONTENTS と overview の見出しは一致。日本語訳は「一般化向井予想」。公式番号 `063` と paper ID を区別する。
- 公式分野：**Algebraic and complex geometry**（代数幾何学・複素幾何学）。公式分野順は2番目、番号範囲032–069（欠番を含む。実際の所属番号は台帳に列挙）。分野見出しは概要PDF p. 5、063は **p. 8**。
- 固定参照版：`fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb`。概要の表紙日付と論文自身の版日は別に台帳へ記録した。
- [公式一覧](https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/CONTENTS.md)、[概要PDF](https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/overview.pdf)、[原稿PDF](https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/The-Generalized-Mukai-Conjecture-September-24-2026/article.pdf)。取得URLは台帳に分離した。

## 構成と責任分担

| 役割 | 担当 | 制作開始後の責任・変更範囲 |
|---|---|---|
| 記事担当 | カタログ063本部（このチャット） | `drafts/catalog-063/generalized-mukai/` の日英本文、TeX/SVG、出典・時間・未確認記録 |
| カタログ本部 | このチャット | `coordination/catalog-063/` と `drafts/catalog-063/overview/`。台帳、統一編集、外部接続の照合、短い日英案内、サイト本部への引継ぎ |
| サイト本部 | このチャット（今回担当） | 共通表示・登録・導線、日英PDF生成、画面・リンク・PDF検査、依頼範囲に応じた公開確認 |

準備文書・記事に加え、063の登録・共通表示・図・PDFを組み込んだ。具体的な変更範囲は [SITE_INTEGRATION.md](SITE_INTEGRATION.md)。原典キャッシュは Git 対象外の `tmp/catalog-063-preparation/` に保持している。

19ページの単論文であり、証明の不等式部分と等号分類を同じ担当が追う。分担人数・分類数・図数を033・034から引き継がない。カタログは「短い概要 → 対応言語の解説PDF → 公式順の記事入口 → 必要な外部接続 → 原典・確認範囲」とする。大きな総括図、論文選択UI、空の依存表、記事の証明図の重複掲載は省く。記事内の図数は原典読解に基づき4点／言語とした。

## 本部兼記事担当の指示書（準備時の記録）

本節以下の指示・読解候補は準備時に策定した記録。ユーザーの制作依頼を受けて実行した。実際の読解・時間・検査・残る範囲は [status.md](../../drafts/catalog-063/generalized-mukai/status.md) と [sources.json](../../drafts/catalog-063/generalized-mukai/sources.json) を正とする。準備時間と記事初稿時間は分離した。

- 担当：カタログ063本部兼記事担当。
- 担当順：公式順01のみ。
- 記事編集可能範囲：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-063/generalized-mukai/`。
- 本部編集範囲：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/coordination/catalog-063/` と `drafts/catalog-063/overview/`。
- 原典台帳：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/coordination/catalog-063/inventory.json` の `manuscripts[0]`。
- 初稿：原典確認・執筆・図・確認を合わせ **最大60分、下限なし**。開始・開始＋60分の締切・終了・経過分を `status.md` に記録する。残る未確認を記して区切り、自動延長しない。後続編集は別枠に記録する。

### 読解の着眼点（準備段階の候補）

以下は原稿の目次・§1の主張と案内に基づく**読解予定**。証明本文や外部入力の記述・適用を確認した結果ではない。

| 優先箇所 | 読解時に確認する内容 |
|---|---|
| Theorem 1.1、p. 2 | smooth connected complex projective Fano、正次元、Picard数・pseudoindexの仮定と不等式、等号の場合の分類を原文どおり記載。pseudoindex と index を混同しない。 |
| §2（p. 3から）・§3（p. 5から） | quantum divisor の対応と次数、descendant recurrence、point descendant の下界。評価ファイバー・重み付き射影スタック・境界の処理がどの入力と仮定を使うかを確認する。 |
| §4（p. 11から）・§5（p. 13から） | 下界と漸化式から joint eigenvalue の代数的独立性へ進む箇所、その独立性から曲線次数の非零積へ移る箇所を優先。非半単純の場合の扱いと次数評価を分けて追う。 |
| §6（p. 16から） | 等号時の最小次数、proper な有理曲線族、chain と covering の条件が得られる箇所。最終的な射影空間の積の特徴付けへの適用条件を確認する。 |

外部入力の候補は、序論で示される Bonavero–Casagrande–Debarre–Druel の ordered-chain bound（原稿内 [4, Corollary 5.3]）とその erratum [3]、Occhetta の積の特徴付け [20]。書誌の正式名称・対象結果番号・供給元の仮定・§6内の適用箇所を次回に照合する。これらは**引用候補**であり、現時点で確認済みの依存辺にしない。§§2–5に必要な直接入力も、読解時に特定する。既存033・034への接続も未調査とする。

### 作業と成果物

1. [AGENTS.md](../../AGENTS.md)、[PROJECT_PLAN.md](../../PROJECT_PLAN.md)、制作セットとこの指示書を再確認し、原典の固定版と SHA-256 を台帳に照合する。キャッシュがなくても固定URLから取得できる。
2. 証明の核心に必要な本文を読み、直接使う外部結果は記述と適用箇所を照合する。外部結果の証明全体、その先の依存の再帰調査は標準作業にしない。
3. [記事雛形](../../production/ARTICLE_TEMPLATE.md)に従い、原典順の主要結果、引用案内、TeX図と直後の文章、外部入力、原典と確認範囲を日英で作成する。基本用語の長い定義・Q&A導入は設けない。
4. 図の箱には操作の見出しと数式、矢印には使用内容・原典の補題／定理／節／式番号を置く。日本語図には日本語説明を入れる。引用・矢印・箱の余白を確保し、図ごとに直後の説明と対応させる。
5. 画面上の論文名は台帳の表示名と対応させる。外部論文にも読みやすい表示名を付け、引用キーだけで案内しない。引用リンクは固定版の閲覧URLにし、ページ・番号はリンク表示に記す。
6. 数式・仮定・量化・節・図・出典・確認範囲を日英で照合する。原稿著者の主張の紹介、編集側の記述と適用の確認、証明全体の独立検証を分ける。
7. `sources.json` と `status.md` に今回実際に読んだ範囲・依存・未確認・検査・図の再生成手順を残す。準備の目次・序論確認を証明検証へ読み替えない。

```text
drafts/catalog-063/generalized-mukai/
  article.ja.md
  article.en.md
  diagrams/             原本、再生成可能な日英TeX、日英SVG
  sources.json
  status.md
  catalog-changes.md    接続・命名等の提案がある場合

drafts/catalog-063/overview/
  article.ja.md
  article.en.md
  connections.json
  status.md
```

`overview/connections.json` は単論文でも作成する。空の場合は未調査か照合範囲内で該当なしなのかを `checkingScope` へ、省略理由を `omittedSections` へ記録する。外部接続とカタログ内の接続を区別する。準備段階ではこれらの原稿ファイルを作らない。

本部は完成した内容を点検してから `coordination/catalog-063/SITE_HQ_HANDOFF.md` を作り、PDF待ち・共通表示で必要な省略条件を明記する。サイト本部は [既存PDF手順](../../scripts/pdf/README.md) を使い、日英とも案内1章＋記事1章の冊子を生成する。新しいPDF生成系は設けない。`CatalogDraftOverview.astro` の033固定参照は単純に番号置換しない。`site.mjs` と `pdf-editions.json` はサイト本部が順番に変更する。

## 制作開始プロンプト（準備時の記録・実行済み）

以下は準備時に用意した文面。現在はユーザーの制作依頼を受けて成果物を作成済み。今後の操作はサイト本部引継ぎを参照する。

```text
カタログ063の制作を開始してください。
作業先は /Users/iwai/Desktop/GitHub/OpenAI-Math-Digest です。
AGENTS.md、PROJECT_PLAN.md、production/README.md、coordination/catalog-063/README.md と inventory.json を読み、この本部が記事担当を兼任してください。
固定版の The generalized Mukai conjecture 1本について、原典の核心箇所・直接入力を確認し、日英記事・TeX/SVG・sources.json・status.md を drafts/catalog-063/generalized-mukai/ へ保存してください。初稿は開始・締切・終了を記録し、最大60分、下限なしで区切ってください。
短い日英カタログ案内と確認状態付き connections.json を drafts/catalog-063/overview/ に作成し、内容を点検したうえで coordination/catalog-063/SITE_HQ_HANDOFF.md と RELEASE_CHECKLIST.md を更新してください。
日英PDF・サイト組込み・公開確認はサイト本部の担当として未実施なら明記し、初稿引渡し・内容編集・公開準備・公開確認を区別して報告してください。
```

## 準備時のGit状態

ブランチ `main`、HEAD `7614ea8441da0c71482a2307130e77cdea361fcf`。開始時点で `AGENTS.md`・`PROJECT_PLAN.md`・ルート `README.md` に未コミット変更、`production/` に未追跡ファイルがあった。これらを保持し、ブランチ切替・既存記事の改名・共有データの更新は行っていない。
