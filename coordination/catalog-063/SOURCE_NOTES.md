# カタログ063 — 準備の確認記録

確認日：2026-10-09（JST）。対象は書誌・公式掲載・重複・制作構成の確認。書誌と表示名の管理元は [inventory.json](inventory.json)。本書はその照合証拠と範囲を記録する。

## 固定した原典

GitHub API の `repos/openai/math/commits/main` で取得した参照コミットは `fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb`。同コミットに固定して `CONTENTS.md`、`overview.tex`、`overview.pdf`、063の原稿PDFを取得した。各URL・SHA-256は台帳に保存した。

- `CONTENTS.md` の063は1597行目、論文リンクは1604行目。次の064の開始までに原稿リンクは **1本**。
- `overview.tex` の200行目の `resultentry{063}` にも同じ1本が載る。英語見出しはCONTENTSと一致。
- `overview.pdf` は41ページ、063はPDF物理ページ・紙面ページともに **8**。p. 8を画像化して番号・見出し・論文リンクを目視確認した。
- 分野は `Algebraic and complex geometry`。分野の一覧順は2番目、見出しはPDF p. 5、番号範囲は032–069。所属番号をTeXから抽出し、既存 `src/data/catalog-subjects.json` の所属番号列と一致を確認した。欠番を埋めたり063を独自の分野へ分類し直したりしない。
- 概要の印字日付は2026-10-06、採用コミットは2026-10-08の版。原稿自身の版日は2026-09-24。これらを区別する。

原稿PDFは `pdfinfo` で **19ページ**。p. 1を画像化し、正式タイトル・著者 OpenAI・September 24, 2026・目次を確認した。PDF全体のSHA-256は台帳の `manuscripts[0].sha256` に記録済み。形式的な取得・ページ数・ハッシュの確認であり、証明検証ではない。

## 既存記事との重複

照合時のサイトHEADは `7614ea8441da0c71482a2307130e77cdea361fcf`。登録済みは033の5本、034の14本、計19本。

1. `src/data/site.mjs` を読み込み、登録済み全19記事に正式タイトル（大文字小文字を正規化）・原典パス・候補paper IDの一致がないことを確認した。
2. `coordination/catalog-033/inventory.json` と `research/catalog-034-inventory.json` の全19記録を、正式タイトル・原典パス・PDF SHA-256で照合。いずれも一致なし。
3. 準備文書作成前の `src/data/`、`research/`、`coordination/`、`drafts/`、`prototype/` を `rg` で検索。JSON・Markdown・MJS・TeX・TikZの `mukai`、`ムカイ`、`向井`、`generalized-mukai`（大文字小文字を区別しない）に該当なし。試作を完成記事として数えていない。
4. 同じ原稿パスは公式CONTENTS全体でも1回のみ出現した。

結論：調査した作業場には再利用する既存記事がないため、paper ID **`generalized-mukai`** を新規予約する。既存記事との原稿版差分は該当なし。別チャットの未引渡し原稿や作業場外の記事は対象外。重複がないことから、既存論文との数学的接続がないとは結論しない。

## 今回の原稿参照と未確認

原稿p. 1の表題・目次、§1（pp. 2–3）の Theorem 1.1 と証明方針の案内を準備用に参照した。§2冒頭の設定も抽出テキストに含まれたが、証明読解として記録しない。[README.md](README.md) の着眼点はこの範囲から作成した次回の読解候補である。

**未調査**：§§2–6の証明本文、外部文献の結果記述・原稿での適用、他カタログとの直接依存、証明全体の独立検証。外部文献の正式書誌・版・ページはまだ照合していない。空の接続表を作ったり、「外部依存なし」と表示したりしない。

初稿の開始時刻・締切・終了は未設定。今回の書誌調査を記事初稿として扱わない。次回の実作業開始時に記録する。

## 再取得・形式確認

原典キャッシュ：`tmp/catalog-063-preparation/`（Git対象外、再取得可能）。固定URL・ハッシュの永続記録は台帳にある。キャッシュの消失は台帳の参照版を変更する理由にならない。

```sh
curl -fLsS 'https://raw.githubusercontent.com/openai/math/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/The-Generalized-Mukai-Conjecture-September-24-2026/article.pdf' -o /private/tmp/catalog-063-article.pdf
pdfinfo /private/tmp/catalog-063-article.pdf
shasum -a 256 /private/tmp/catalog-063-article.pdf
```

本部は準備成果物のJSON構文・必須項目・固定URL・ハッシュ・公式順・ローカル文書リンク・未記入雛形の残存を確認する。サイト本文・コードを変更していないため、この準備段階ではサイトのビルド・数式表示検査・解説PDF生成は行わない。実施結果は [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md) の準備検査に記録する。

## 記事制作への引継ぎ（2026-10-09）

本書の準備時の確認範囲は履歴として保持する。その後のユーザーの制作依頼に基づく証明本文・外部入力の読解記録は [sources.json](../../drafts/catalog-063/generalized-mukai/sources.json)、日英・図・表示の検査は [VALIDATION.md](VALIDATION.md)、現在の工程は [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md) を参照。準備の概要確認を証明検証へ読み替えていない。
