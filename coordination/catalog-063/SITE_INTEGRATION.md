# カタログ063 サイト組込み・日英PDF確認

> 本書は組込み工程終了時点の記録。後続の公開依頼に基づく公開確認済みの結果は [PUBLICATION.md](PUBLICATION.md) を参照。

2026-10-09、サイト本部（このチャット）。ユーザーの「サイト本部での組込みと日英PDF作成をお願いします」に基づく作業。**公開準備完了（未公開）**。初稿の原典確認・制作記録は [VALIDATION.md](VALIDATION.md) に分離し、本工程で数学的確認の範囲を広げたとは扱わない。

## 組み込んだ内容

- 公式分野 Algebraic and complex geometry に063を登録。サイトは3カタログ・20記事、日英を含む51ページ。追加ルートは `/{ja,en}/catalog/063/` と `/{ja,en}/papers/generalized-mukai/`（サイトのbase pathは `/OpenAI-Math-Digest/`）。
- 短い日英カタログ案内、公式順01の記事入口、原典への別リンク、対応言語のPDFリンクを配置。`CatalogMarkdownOverview.astro` は対象カタログの原稿を読む。033固有の表示と034の表示を保持。
- 単論文なので総括図・重複した定理・空の依存表・論文選択UI・固定3分類を置かない。分野カードと案内役の文言も1本に対応。
- 初稿の検査済み図を `public/diagrams/catalog-063/generalized-mukai/` に配置（自己完結TeX8点、SVG8点）。記事からの戻り先 `paper-generalized-mukai` を案内に追加。
- PDFの表紙・目次を「案内＋記事1本」に対応。案内の説明を短くし、公式出典リンクを本文へまとめて日英とも1ページに収めた。個別記事の定理・数式・証明本文・図・確認範囲は初稿から変更していない。

## PDF成果物

| 言語 | ファイル | ページ | 章 | 証明図 | 本文数式 |
|---|---|---:|---:|---:|---:|
| 日本語 | [catalog-063-ja.pdf](../../public/pdf/catalog-063-ja.pdf) | 16 | 2 | 4 | 130 |
| English | [catalog-063-en.pdf](../../public/pdf/catalog-063-en.pdf) | 16 | 2 | 4 | 130 |

2026-10-09版。案内はp. 3、個別記事はp. 4から。ページ数・容量・SHA-256・内容ハッシュは [pdf-editions.json](../../src/data/pdf-editions.json) の063と一致し、[検査台帳](site-integration.json) に今回の値を保存した。

既存のMathJax＋WeasyPrint生成処理を使用（WeasyPrint 68.1、pypdf 6.19.0）。生成器のハッシュが変わるため033・034の4冊も再生成して版台帳を更新した。その4冊のPDFファイル自体は作業前のSHA-256と一致する。既存カタログ・記事42ページについても、印刷用に準備した本文HTMLが作業前と一致。

## 実行結果

`npm` がPATHにない環境のため、`package.json` に指定された実体をbundled Nodeで直接実行した。別の検査手順へ置換したものではない。

```sh
TASK_NODE=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node
"$TASK_NODE" --test scripts/*.test.mjs
"$TASK_NODE" node_modules/astro/astro.js build
"$TASK_NODE" scripts/check-links.mjs
PDF_PYTHON=/private/tmp/math-digest-pdf-runtime/bin/python XDG_CACHE_HOME="$PWD/tmp/font-cache" "$TASK_NODE" scripts/build-catalog-pdf.mjs --catalog 063
"$TASK_NODE" node_modules/astro/astro.js build
"$TASK_NODE" scripts/build-catalog-pdf.mjs --check
"$TASK_NODE" scripts/check-links.mjs
```

| 検査 | 結果 | 再取得可能なローカルログ |
|---|---|---|
| テスト | 24件成功・失敗0 | `tmp/catalog-063-integration/tests.log` |
| Astro build | 51ページ成功 | `tmp/catalog-063-integration/build-final.log` |
| 内部リンク／資産・アンカー・言語切替 | 7,242件確認・欠落0 | `tmp/catalog-063-integration/links.log` |
| PDF現行性・ファイルハッシュ | 033・034・063、日英全6冊成功 | `tmp/catalog-063-integration/pdf-check.log` |
| 既存本文 | 42ページ変更なし | `tmp/catalog-063-integration/content-preservation.json` |
| 既存PDF・ルート文書 | PDF4冊、AGENTS・PROJECT_PLAN・READMEは開始時とハッシュ一致 | `tmp/catalog-063-integration/unchanged-files.json` |

## 実画面・紙面の確認

ローカルのAstro previewをChromeの一時プロファイルで確認。日英のトップ・分野・063案内・記事×1440px／375pxの16条件で、横はみ出し・欠落画像・MathJaxエラー・ページスクリプトエラーは0。各記事に数式130、図4、定理カード1を確認。本文16px・出典14px、ヘッダー・AI注意書き・案内役・MIT帰属を保持。

分野→案内→記事→案内の往復、`proof-4` を保持する日英切替、拡大図の拡大率変更／全体表示／引用先を開く操作、重複IDなしを確認した。375pxの拡大枠は画面内。最終PDFカード4条件では各16ページの表示、HTTP 200、配信されたPDFと版台帳のSHA-256一致を確認。ブラウザー検査ではMathJaxをローカルの同梱ファイルから読み、引用先を開く操作はURLを照合した。CDNや外部サイトの稼働確認、公開サイトの検査とは区別する。

PDFは全32ページをPopplerで画像化して一覧点検し、両言語の案内・主定理・全8図・長い式・末尾を拡大確認。欠け・重なり・文字化けなし。各冊子に2章のしおり、内部リンク19注釈、外部リンク53注釈を確認（折返しで1リンクが複数注釈になるため、URLの種類数とは異なる）。目次・本文内参照の宛先欠落なし。紙面から操作用ナビゲーションを除き、Web図／TeX・原典リンクと数学的確認範囲は残した。

計測の永続記録は [site-integration.json](site-integration.json)。スクリーンショット・紙面画像と検査スクリプトはGit対象外の `tmp/catalog-063-integration/` と `tmp/pdfs/qa-063-final/`。

## 公開と数学的確認の境界

公開準備26項目を完了、公開4項目は未実施。[公開チェックリスト](RELEASE_CHECKLIST.md) に担当と根拠を反映した。commit・push・GitHub Actions・公開URLでの反映確認は今回の依頼範囲外である。

数学的な未確認範囲は初稿のまま保持：仮想基本類・結合律の基礎、族の縮約と降下の全技術的整合性、Lemma 5.1の交換子全項の独立検算、外部結果の全証明、他カタログとの全依存関係。原稿全体の独立した正しさの認定や専門家査読済みとはしていない。
