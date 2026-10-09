# カタログ063のサイト組込み引継ぎ

- 採用仕様：制作セット1.0（2026-10-09）。カタログ本部が記事を兼任。
- 状態：**公開確認済み。サイト組込み・日英解説PDF・公開サイト検査済み。**
- 依頼範囲：記事制作後、ユーザーの「サイト本部での組込みと日英PDF作成をお願いします」を受け、このチャットで組込みとPDF作成を実施。後続の「GitHub Pagesへの公開しましょう！」に基づき公開確認まで実施した。別チャットへの自動送信も行っていない。
- 対象Git状態：`main`、HEAD `7614ea8441da0c71482a2307130e77cdea361fcf`。既存の `AGENTS.md`、`PROJECT_PLAN.md`、ルート `README.md` の変更と未追跡 `production/` を保持。初稿成果物のほか、063の登録・表示・公開用図・PDFを追加。変更一覧と検査証拠は [SITE_INTEGRATION.md](SITE_INTEGRATION.md)。既存033・034の本文42ページ・PDF4冊、既存のルート3文書は開始時と一致。

## 台帳と成果物

正式名称は **The generalized Mukai conjecture**、日本語名「一般化向井予想」。公式番号063、分野は **Algebraic and complex geometry**（公式順2番目、overview p. 8）。一覧・原典はcommit `fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb` に固定。収録はOpenAIの2026-09-24版、19ページ、1本。

| 成果物 | パス |
|---|---|
| 唯一の書誌・表示名台帳 | [inventory.json](inventory.json) |
| 日本語記事 | [article.ja.md](../../drafts/catalog-063/generalized-mukai/article.ja.md) |
| 英語記事 | [article.en.md](../../drafts/catalog-063/generalized-mukai/article.en.md) |
| 日英カタログ案内 | [日本語](../../drafts/catalog-063/overview/article.ja.md)・[English](../../drafts/catalog-063/overview/article.en.md) |
| 原典・外部入力の照合 | [sources.json](../../drafts/catalog-063/generalized-mukai/sources.json) |
| 結果単位の接続 | [connections.json](../../drafts/catalog-063/overview/connections.json) |
| 記事の時間・状態 | [status.md](../../drafts/catalog-063/generalized-mukai/status.md) |
| 案内の省略理由・状態 | [overview/status.md](../../drafts/catalog-063/overview/status.md) |
| 本部の検査記録 | [VALIDATION.md](VALIDATION.md)・[validation.json](validation.json) |
| サイト組込み・PDF検査 | [SITE_INTEGRATION.md](SITE_INTEGRATION.md)・[site-integration.json](site-integration.json) |
| 日英解説PDF | [日本語](../../public/pdf/catalog-063-ja.pdf)・[English](../../public/pdf/catalog-063-en.pdf)（各16ページ・2章・4図） |
| 工程・残作業 | [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md) |

記事IDは `generalized-mukai`、表示名は **Generalized Mukai**／**一般化向井予想**。既存19記事とのタイトル・原典パス・ハッシュ照合に重複はなく、新規1記事とする。既存記事の別版への置換や改名はない。

## 図と論理構成

記事内の4段階に、それぞれ日英の図を用意した（SVG8点、自己完結したTeX8点）。

| stem | 証明節・役割 |
|---|---|
| `descendant` | `proof-1`：評価ファイバーの縮約、境界像、point descendantの下界 |
| `spectrum` | `proof-2`：漸化式・階乗正規化・減衰率の矛盾から固有値の独立性 |
| `trace` | `proof-3`：交代トレースから独立な曲線次数の非零積、不等式 |
| `equality` | `proof-4`：最小次数のfull proper components、covering、積の特徴付け |

原本と再生成スクリプトは `drafts/catalog-063/generalized-mukai/diagrams/`。再生成：

```sh
python3 drafts/catalog-063/generalized-mukai/diagrams/render.py
```

XeLaTeX、xeCJK／Harano Aji、TikZ、dvisvgmを使用。`.tikz` と `preamble.tex` を編集して再生成する。配布対象の `*.ja.tex`・`*.en.tex` は各々自己完結しており、共有preambleを別途ダウンロードさせない。SVGはglyph IDを区別し、共通レンダラーで再度prefix付与できる二重引用符へ正規化済み。図スタイルはリポジトリ内Schnell図に準拠し、MITの帰属を維持。

カタログは **single**。短い入口＋公式順01の記事1本とする。記事の主要定理や図は総括へ再掲しない。総括図、空のカタログ内依存表、論文選択UI、固定3分類は省略。外部入力9件、別構成2件は記録ファイルに保持し、記事の入力一覧と実際の証明段階へ案内する。未調査の他カタログ関係を「依存なし」に変えない。

## アンカーと共通表示

新規記事のため旧公開アンカーはない。共通 `renderDraft` の実出力で以下を確認した。

- H2：`results`、`diagram-sources`、`proof-1`～`proof-4`、`dependencies`、`sources`。
- 主結果：`theorem-1-1`。
- 説明段階：`proof-1-step-1`～`3`、`proof-2-step-1`～`4`、`proof-3-step-1`～`3`、`proof-4-step-1`～`3`。
- 日英の同じIDを保持する。カタログのタイトルリンクと接続記録はこれらを参照。
- カタログの公式順入口に `paper-generalized-mukai` を設ける。記事共通末尾の戻るリンクがこのIDを使う。

`src/data/site.mjs` と両言語ルートへ登録し、図の `.svg`・`.tex` を `public/diagrams/catalog-063/generalized-mukai/` に配置済み。新規の `CatalogMarkdownOverview.astro` は対象カタログの原稿を参照する。033固有の `CatalogDraftOverview.astro` と034の表示を保持し、063では単論文の短い入口を表示する。図は初稿の検査済み成果物とハッシュ一致。

プレビューでは共通レンダラーとCSSを再利用し、定理カード、出典行、証明段階、MathJaxを確認した。組込み後、最終ルートのPC／375px表示、図拡大UI、ヘッダーと言語切替、案内役、AI注意書き、分野一覧・掲載数をローカルサイトで確認済み。制作専用CSSは追加していない。公開サイトへの反映も確認済み。

## 数学的な確認範囲

原稿§§2–6（pp. 3–17）の証明本文を読み、核心を説明した。原典10ファイルを版・ページ・SHA-256で記録し、外部入力の記述と適用を照合。訂正後の曲線族の仮定、Tian–Zongのtwist −1、次数零の不安定項、仮想類の押し出し、同時三角化と半単純性の区別を反映した。

残る範囲は仮想基本類・結合律の基礎、族の縮約と降下の全技術的整合性、Lemma 5.1の交換子全項の独立検算、外部結果の全証明、他カタログとの全依存関係。記事末尾の日英両方に明記した。原稿全体の正しさを独立に認定した記事ではない。

## PDFと公開の状態

サイト本部（このチャット）が日英とも生成・確認済み。各16ページ・2章・4図・数式130箇所。カタログ冒頭に対応言語のPDFリンクを配置し、`src/data/pdf-editions.json` と一致するPDFがローカルサイトから開けることを確認した。

既存手順を使用し、単論文の表紙・目次を「案内＋記事1本」に対応させた。案内の重複説明を短くし、出典リンクを本文にまとめて両言語とも案内を1ページに収めた。個別記事の定理・証明本文・図・数学的確認範囲は変更していない。PDFの全32ページと全8図を画像で点検。24テスト、51ページのbuild、7,242リンク、6冊のPDF現行性確認が成功した。

公開URLへの反映・公開commit・Actions：**確認済み**。日英ページ・図・PDFの公開配信と実画面を確認した。詳細は [PUBLICATION.md](PUBLICATION.md) と [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md)。
