# カタログPDFの共通生成

第2段階で使う共通工程です。カタログごとの `collect-svg-links` や
`add-pdf-figure-links` をコピーする必要はありません。既存の
`npm run pdf:catalog -- --catalog NNN` が、日英PDFの生成、図中引用のリンク補完、
整合性検査、版情報の更新まで行います。

## 初回の環境準備

Nodeの依存は `npm ci` で導入します。図の位置取得には固定版の
`playwright-core` とインストール済みのGoogle Chromeを使います。
別のChromium実行ファイルを使う場合は `PDF_BROWSER_PATH` を指定してください。
日常の `check:pdf` とGitHub Actionsの照合ではブラウザーもPythonも起動しません。

PDF生成にはPython 3.12以上、Pango、Fontconfig、日本語フォント
（ヒラギノ、またはNoto Serif/Sans CJK JP）が必要です。
PythonとPangoのCPUアーキテクチャを合わせてください。

```sh
python3 -m venv tmp/pdf-venv
tmp/pdf-venv/bin/python -m pip install -r scripts/pdf/requirements.txt
export PDF_PYTHON="$PWD/tmp/pdf-venv/bin/python"
export XDG_CACHE_HOME="$PWD/tmp/font-cache"
# macOSでPangoの場所を指定する必要がある場合は、利用する環境に合わせる。
# export DYLD_FALLBACK_LIBRARY_PATH=/usr/local/lib
```

Python依存は `requirements.txt` の版と一致させます。カタログ固有の一時venvを
次のカタログの必須パスとして引き継がないでください。

## 通常の第2段階

`NNN` を対象の公式カタログ番号に置き換えます。次のコマンドは順番に実行します。

```sh
npm run build
npm run pdf:catalog -- --catalog NNN   # 日英を生成し、図中リンクも付ける
npm run build                         # 最終PDFと版情報をdistへ反映
npm run check:pdf -- --catalog NNN
npm run check:links
```

- 日本語だけの再生成は `--lang ja`、英語だけは `--lang en`。通常は両言語です。
- `--catalog` を省くと全登録カタログを再生成します。通常の制作では対象を指定します。
- `PDF_EDITION_DATE=YYYY-MM-DD` で収録日を固定できます。既定は日本時間の当日です。
- 出力は `public/pdf/catalog-NNN-{ja,en}.pdf`、版情報は `src/data/pdf-editions.json`。
- 生成した両言語の検査が終わってから公開用ファイルへコピーします。組版・リンク検査で
  失敗した場合、以前の公開用PDFと版情報はそのままです。ディスク障害時の完全な
  トランザクションや同時実行の制御は実装していません。共有作業場の組込み・PDF生成は
  引き続き順番に実行してください。
- 新しい共通処理の後に、古いカタログ専用のリンク追加スクリプトを重ねて実行しません。

PDF生成は記事の数学的内容を編集しません。目次・しおり・章順・確認範囲を保ち、
同じ言語・冊子内への参照はPDF内移動、原典・他カタログ・他言語への参照はWebリンクにします。

## 自動処理と確認記録

1. ビルド済みページの本文から冊子HTMLを作り、数式をSVG化。
2. `.proof-diagram > svg` 内の引用リンクの領域をChromeで取得。参照先への通信は行いません。
3. WeasyPrintで一度だけ組版。その配置からPDF上のリンク領域を計算して付与。
4. 引用領域、内部参照先、図の配置漏れ、ページ数・しおり・ページ内容の保持を検査。
5. PDFのハッシュ・サイズ・図中リンク数・生成方式を版情報に記録。

中間ファイルは `tmp/pdfs/`（Git対象外）に保存されます。

| ファイル | 用途 |
|---|---|
| `catalog-NNN-ja.html` / `-en.html` | 実際に組版した本文 |
| `catalog-NNN-ja.svg-links.json` / `-en.svg-links.json` | HTMLハッシュと図中引用の位置 |
| `catalog-NNN-ja.pdf.links.json` / `-en.pdf.links.json` | 各引用のURL・PDFページ・矩形、検査結果 |

図は正の `viewBox` を持つインラインSVGを共通の `.proof-diagram` に置きます。
空のリンク領域、ページ外へのはみ出し、図の分割・重複、未対応のリンク、
存在しない冊子内参照はエラーになります。エラーを避けるためにリンクを黙って捨てません。

引継ぎには実行コマンド、対象、PDFのページ数、`svgLinks`、検査記録のパスと
紙面の確認範囲を記録します。自動検査だけで完成扱いにせず、日英の表紙・数式・図・
改ページを画像で確認してください。本文・図が変わらず検査済みなら、公開直前に
同じPDFを再生成する必要はありません。

## 既存PDFとの互換性

今回の共通化だけで既存PDFを一括更新しません。`pipeline` がない従来の版は
`legacy-generator-v1.txt` に保存した旧生成コードを使い、従来と同じ内容ハッシュを
照合します。このファイルは実行用ではなく固定の照合資料なので編集しません。
本文・図・共通の組版CSS・準備処理・PDFファイルの変更は引き続き検出します。

新しく生成した版は `pipeline: "svg-links-v1"` を記録し、現在の生成・リンク測定処理も
ハッシュに含めます。未知の生成方式はエラーにします。従来版の検査成功は、
その版に新方式の図中リンクがあることを保証するものではありません。

## 共通処理を変更したときのテスト

```sh
npm test
# 上記のPDF_PYTHONなどを設定し、Chromeを利用できる環境で実行
npm run test:pdf
"$PDF_PYTHON" scripts/pdf/test_geometry.py
```

統合テストは実際のPDFで、変形を含む図、同じ図の複数ページへの配置、外部引用、
冊子内移動、図なしの文書、壊れた参照・位置情報の検出を確認します。
変更後は対象カタログでの生成・`check:pdf`・紙面確認も実施します。
