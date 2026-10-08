# OpenAI Math Digest

数学の分野から、公式カタログ番号、個別論文へ進む日英の非公式読解サイト。Geometry Paper Digest の Astro 構成・配色・書体・数式表示を継承しています。

## 現在の構成

- 日英トップ：公式概要PDFの17分野を同じ順序・英語名・番号範囲で表示。公式の該当ページを別タブで参照可能。代数幾何学・複素幾何学で収録開始。
- 右上に常時表示する日英切替、AI生成の注意書き、ユーザー提供のキャラクターによる各ページのガイド。
- 分野ページ → カタログ034 → LA・Schnell論文の日英概説。
- 034の全14篇を公式順・正式タイトル・ページ数付きで掲載。今回未調査の役割・依存は明示。
- Schnellの概説改訂稿：原典に準拠したTheorem / Corollary、3枚の引用付きTeX証明図と説明文、034内1件・外部2件の直接入力。引用元のモデル存在証明全体は未検証。
- LAの概説初稿：主定理・非消滅ステップ・実係数の良いモデルを記述し、次元帰納法、境界の幾何、Frobeniusの行列式の3図と説明を掲載。033からの入力とSchnellへの接続を区別。独立した証明全体の検証は未実施。
- 051/052の試作と証明表・図の実装は `prototype/` に保存し、公開ページからは除外。

## 開発

Node.js 22を使用します。

```sh
npm ci
npm test
npm run dev
npm run build
npm run check:links
```

証明図を変更した場合は、XeLaTeX・xeCJK・Harano Ajiフォント・TikZ・standaloneを含むTeX環境とdvisvgmが利用できる状態で `npm run diagrams` を実行します。両論文の日本語版と英語版のSVG・TeXを生成します。`node scripts/render-proof-diagrams.mjs la` または `schnell` で対象を絞れます。生成物は `public/diagrams/` に保存するため、通常のサイトビルドやGitHub ActionsでTeX環境は不要です。

入口は `/OpenAI-Math-Digest/ja/` と `/OpenAI-Math-Digest/en/`。`npm run preview` でビルド結果を確認できます。

## ページとデータ

- `src/data/catalog-subjects.json`：公式概要の英語見出し・掲載番号・PDFページ（出典URL付き）。
- `src/components/ReadingGuide.astro`：日英の案内役。画像は `public/images/`。
- `src/data/site.mjs`：分野、カタログ、論文、参照版の日英共通データ。
- `src/data/schnell.mjs`：Schnell概説の日英本文・定理記述・依存関係。
- `src/data/la.mjs`：LA概説の日英本文・定理記述・外部参照。
- `src/diagrams/schnell/` と `src/diagrams/la/`：TikZの図とプリアンブル。`scripts/render-proof-diagrams.mjs` が引用リンク付きSVGと配布用TeXを生成。
- `src/components/ProofDiagram.astro`：図の表示、原典リンク、拡大表示とTeXダウンロード。
- `src/components/DependencyTable.astro`：カタログと個別記事で共有する依存表。
- `src/components/SchnellArticle.astro` / `LogAbundanceArticle.astro`：各記事の本文レイアウト。
- `research/la-reading-notes.json`：LA初稿の原典・直接入力・照合範囲。
- `research/catalog-034-inventory.json`：全14篇の公式順・ページ数・PDFハッシュ。
- `src/pages/[lang]/index.astro`：分野一覧。
- `src/pages/[lang]/fields/[id].astro`：分野ごとのカタログ。
- `src/pages/[lang]/catalog/[id].astro`：公式番号ごとの共通ページ。
- `src/pages/[lang]/papers/[id].astro`：内部の論文IDごとの共通ページ。

分野の `catalogIds` で共通のカタログを参照するため、複数分野に同じカタログを登録しても記事は重複しません。カタログの `paperIds` も共通の論文レコードを参照します。公式番号と論文IDは別の識別子です。記事のない分野は公式PDFへのリンクのみを表示します。分野の順番・英語名は公式概要に合わせ、和訳や掲載状況とは分けて管理します。

## GitHub Pages

remote: `https://github.com/masataka123/OpenAI-Math-Digest.git`

`astro.config.mjs` の `site` と `base` はこのremoteに対応しています。Settings → Pages → Source を **GitHub Actions** に設定すると、mainへのpushでテスト・ビルド・内部リンク確認後にデプロイします。この移行作業ではpush・公開は行っていません。

## 出典と今後の作業

原稿の参照commit: `adc7f1241b42e322a6451854ab7e4b4c146bf78a`（確認日：2026-10-08）。Schnell本文§§2–4と直接入力の記述・適用箇所を照合しました。LAについては主要結果と核心の証明経路を概説し、選んだ直接入力の記述を照合しました。LAの85ページ全体、外部入力の原証明、034の他の依存関係の独立検証は未完了です。初稿へのフィードバックを受けて記事の型を調整し、残る役割・依存表を増やします。本文は博士院生以上・研究者向けに、証明戦略・帰着・引用付きの図と説明文・論文間の依存表を中心とします。1論文の初稿は最大60分で区切り、下限は設けません。詳細な証明再現は標準要件にしません。詳細は `PROJECT_PLAN.md` と `AGENTS.md` を参照。

## Attribution

Styles adapted from [Geometry Paper Digest](https://github.com/masataka123/geometry-paper-digest), MIT licensed. See `LICENSE`. Original manuscripts and cited works remain the property of their authors/rightsholders. This project is not affiliated with OpenAI.

キャラクター画像はユーザー提供素材です。コードのMITライセンスは適用せず、元の権利者に帰属します。
