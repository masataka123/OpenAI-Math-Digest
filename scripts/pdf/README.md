# Catalogue booklets

Build the Astro site before exporting; the booklets read `dist/` and preserve the
rendered article content. Each registered catalogue in `src/data/site.mjs` supplies
its official paper order, own source snapshot, title, and chapter count.

```sh
npm run build
npm run pdf:catalog                    # all catalogues, Japanese and English
npm run pdf:catalog -- --catalog 033    # one catalogue, both languages
npm run pdf:catalog -- --catalog 034 --lang ja
npm run build                          # show new PDF edition metadata on site
npm run check:pdf                       # content and file hash verification
```

The renderer uses `PDF_PYTHON` (default `python3`) with the packages in
`requirements.txt`. `PDF_EDITION_DATE=YYYY-MM-DD` can fix the edition date; the
default is the current date in Asia/Tokyo. PDFs are published under `public/pdf/`;
intermediate HTML stays in `tmp/pdfs/`.

`src/data/pdf-editions.json` is keyed by catalogue ID and then language. Selected
exports retain the other editions. Every booklet contains the catalogue overview
and each of that catalogue's paper overviews. A single-paper catalogue uses a short
guide and one article (two chapters); its cover and contents use matching wording.
Links within the same language and
booklet become PDF destinations. Other catalogues, other languages, and original
manuscripts remain clickable web links. Cross-catalogue sources keep their pinned
versions.

The print preparation removes interactive controls and the duplicate
`catalog-audit` table while retaining all detailed connection records. Wide tables
become labelled entries with their row anchors preserved. The renderer rejects
missing internal destinations, resource errors, or an incorrect number of chapter
bookmarks. After generation, inspect representative rendered PDF pages for both
languages; passing structural checks does not replace visual review.
