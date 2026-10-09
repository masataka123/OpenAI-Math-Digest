# 引用の共通仕様と生成手順

制作セット **1.1（2026-10-09）**。063を初めの適用例とする。033・034は既存表示を保持し、後日必要な範囲で移行する。新しいカタログはこの仕様を採用する。

## 読者に見せる書式

- 本文・表・図とも `論文の表示名 · 結果・節番号 · p. / pp. ページ`。
- 本稿内の引用も論文名を示す。Theorem / Proposition / Corollary / Lemmaは省略形を混在させない。複数の箇所は `; ` で区切る。
- 誌面番号とPDF内のページ位置が異なる場合は `誌面 p. 623 / PDF p. 23`、英語は `print p. 623 / PDF p. 23`。一致する場合は `p. 5` のみ。単一ページはp.、複数はpp.、範囲はen dash。
- PDFへのページ指定には**PDFのページ位置**を使う。誌面623ページだから `#page=623` としない。GitHubのファイル閲覧URLとDOIにはページ移動を仮定したfragmentを付けない。
- 図の幅に収まらない引用は改行する。論文名を未定義の頭文字へ置き換えたり、極端に縮小したりしない。
- 図の箱・矢印には、引用のほかに「何をするか・どの内容を使うか」を残す。共通化するのは引用表示であり、説明を引用ラベルだけに置換しない。

## 原典・引用・生成物の関係

1. 記事の `sources.json` は版・URL・PDFハッシュ・照合箇所の根拠。外部原典ごとに `id`, `displayName`, `sourceUrl`, `pdfPages`, `checkedLocations` を持つ。
2. `checkedLocations` に `{ "printedPage": "623", "pdfPage": 23 }` のように、実際に照合した対応を記録する。未確認の対応をオフセットの推測だけで埋めない。
3. `citations.json` はその出典記録を参照し、読者に見せる結果番号とページを一度だけ定義する。
4. 本文の引用マーカーとTeXの `\Cite{ID}` は同じ記録から生成する。PDFは生成済みのWeb本文と図を収録する。

複数担当では**各記事フォルダにそれぞれのcitations.json**を置く。記事担当がカタログ共通ファイルを同時に編集しない。本部の総括用記録はoverviewフォルダに置き、必要に応じて記事のsources.jsonを参照する。同じMarkdownを複数の記録から書き換えない。

063は1本を本部で改訂したため、`drafts/catalog-063/citations.json` が記事と案内をまとめて管理している。複数担当でこの配置をそのままコピーしない。

## 記録の最小例

記事フォルダに置く場合の例。結果番号とページは実際の原典に置き換える。

```json
{
  "schemaVersion": 1,
  "catalogId": "NNN",
  "sources": {
    "P": {
      "recordFile": "sources.json",
      "recordId": "self",
      "displayName": "Readable paper name",
      "pagination": "same"
    },
    "INPUT": {
      "recordFile": "sources.json",
      "recordId": "external-source-id"
    }
  },
  "citations": {
    "main-result": {
      "source": "P",
      "locations": [{"result": "Theorem 1.1", "printed": "2", "pdf": "2"}]
    },
    "external-input": {
      "source": "INPUT",
      "locations": [{"result": "Theorem 5.2", "printed": "623", "pdf": "23"}]
    }
  },
  "markdownFiles": ["article.ja.md", "article.en.md"],
  "diagramDirectories": ["diagrams"]
}
```

`recordFile`・Markdown・図のパスはcitations.jsonからの相対パス。`recordId: self` は出典ファイル自体、その他のIDは `externalSources` の該当項目を指す。公式カタログ出典はinventory.jsonを `recordFile`、`overview` を `recordId` として参照できる。

`pagination: same` は実際に誌面とPDFページの一致を確認した原稿にだけ指定する。表紙等でずれる原稿では指定せず、`checkedLocations` に対応を記録する。通常のページ表記は `5–6, 17–18` のように入力する。

## 記事担当の手順

本文では、引用の置き場所に次のマーカーを書く。マーカーはサイト上では表示されず、リンクだけの独立段落は既存の出典行になる。

```markdown
<!-- cite:main-result -->生成前<!-- /cite -->
```

担当フォルダだけを指定して更新・確認する。

```sh
npm run citations -- --registry drafts/catalog-NNN/paper-id/citations.json
npm run check:citations -- --registry drafts/catalog-NNN/paper-id/citations.json --text-only
```

TeX図の生成時には、生成された `diagrams/citations.ja.tex` または `.en.tex` の内容をプリアンブルへ組み込み、本文で `\Cite{main-result}` を使う。`\refurl{URL}{文字列}` のリンク定義は063のプリアンブルを参考にする。引用ごとにURL・ページを手書きしたマクロは新設しない。

図の生成スクリプトは063の `diagrams/render.py` を参考にし、番号・担当パス・出力先を対象に合わせる。生成前には担当記録の `--text-only` 照合を行い、配布用TeXへ必要なマクロを埋め込む。**記事担当はpublicへのコピーを行わず**、担当範囲内でTeX/SVGまで生成する。063のpublicコピー処理はサイト本部用なので、そのまま担当へ流用しない。

生成後、`citation-build.json` に `render.py`, `preamble.tex`, `citations.ja.tex`, `citations.en.tex`, 全 `.tikz` と対応する日英 `.tex` / `.svg` のSHA-256を記録する。生成物を編集してからハッシュだけ更新せず、原本から生成し直す。再生成コマンドをstatusに残す。

## サイト本部の手順と検査

1. 記事担当の生成物を公開用フォルダへ配置。日英の図・TeXを対応させる。
2. `npm run check:citations` と `npm test`。未知の引用ID、ページ対応の不一致、本文・TeX定義の更新漏れ、図の原本と生成物の不一致、公開コピー漏れを確認する。
3. 033・034と並べて、定理・証明段階・出典行の共通表示を確認。単論文の短いカタログ構成は維持し、見た目を揃えるために不要な節を増やさない。
4. 図の配置、長い表示名、誌面／PDF併記を日英・PC・375px幅で確認する。
5. 対象カタログの日英PDFを再生成し、改訂した引用と全図を紙面でも点検する。

新規登録カタログの記事・総括に引用記録がない場合、または一つの本文を複数の記録が管理する場合はテストで止める。GitHub Actionsでも引用の検査を行う。

別カタログで既に記事化した論文を再利用する場合は、元のpaper ID・担当カタログ・本文・引用記録を保つ。新しいカタログ側に同じ記事を複製せず、その案内から既存記事へリンクする。

この検査は引用表示と生成物の整合性を検査するもので、引用元の数学的正しさや入力定理の適用の妥当性を自動で認定するものではない。結果と使用箇所の照合は担当と本部が行う。
