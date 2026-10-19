# 第2段階の検査・PDF再生成

作業ディレクトリはリポジトリroot。第3段階の公開時は現在ファイルに変更がないならPDFの再生成は不要。再生成するとSVG内部リンクの後処理も必須。

```sh
export PATH=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH
export PDF_PYTHON=/private/tmp/catalog-197-pdf-x86/bin/python3
export XDG_CACHE_HOME=/private/tmp/math-digest-pdf-cache
export DYLD_FALLBACK_LIBRARY_PATH=/usr/local/lib
export PDF_EDITION_DATE=2026-10-19
node scripts/sync-citations.mjs --check
node --test scripts/*.test.mjs
node node_modules/astro/astro.js build
node scripts/build-catalog-pdf.mjs --catalog 357
node coordination/catalog-357/stage2/collect-svg-links.mjs
"$PDF_PYTHON" coordination/catalog-357/stage2/add-pdf-figure-links.py
node node_modules/astro/astro.js build
node scripts/build-catalog-pdf.mjs --check
node scripts/check-links.mjs
"$PDF_PYTHON" coordination/catalog-357/stage2/audit-pdf.py
```

通常npmの各package scriptと同じ実体を実行している。上記Pythonは今回既に存在したローカル環境で、requirements.txtと一致するWeasyPrint 68.1 / pypdf 6.19.0。tmp環境が失われた場合はscripts/pdf/requirements.txtから同じ版を復元する。PDF用フォントは既存共通CSSを使用。

collect-svg-links.mjsは一時Chromeのheadless起動が必要。add-pdf-figure-links.pyは現HTMLから配置を再計算し、既存の357注釈のみ除去して追加するので重複を避ける。ページ数と各コンテンツstream・named destinations保持を検査し、357だけのpdf-editionsハッシュを更新する。最終manifestを更新後、必ず再buildして配信PDFと一致させる。

実サイト検査はserve.mjs、check-browser.mjs、check-final-diff.mjs。検査中にdistを再buildしない。今回リンク検査と最終差分検査が再buildと重なった一時ENOENT/404は、build完了後に再実行した。最終結果は各finalログを参照。

図や本文を変えた場合は、該当図のみ再生成・publicコピーし、引用full検査と独立内容点検の対象hashを更新する。画面/紙面も変更箇所と影響範囲を再確認する。既存の他カタログPDFを一括再生成しない。

全リンク検査はSVG glyph参照に伴う同一HTMLの再読込みで時間がかかったため、最終検査では同じ全条件にread-only file-content cacheだけを加えたcheck-links-cached.mjsも使用した（356/197と同じ既存技術補助）。変更のないdist snapshotへ実行し、href/src/fragmentの走査・ファイル存在・base・旧名検査の範囲は削っていない。通常版の最終runは約4分で中断し、最終結果はlinks-cached-final.log。
