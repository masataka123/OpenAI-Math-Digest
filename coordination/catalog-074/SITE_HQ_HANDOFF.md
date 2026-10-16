# カタログ074 第3段階への引継ぎ

## 現在の状態

**第2段階完了・公開準備完了、未公開。** 2026-10-16。作業先/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest、ブランチmain。ユーザー指示は第2段階まで。commit・push・Actions・公開反映確認は未実施。

第1段階の引継ぎはstage2/stage1-SITE_HQ_HANDOFF.mdに保持。公式名称074 Kakeya in three and four dimensions、分野Real and complex analysis、公式順2論文。固定原典commitは1581d4cbdd69a0faf34b2089614fe2a814316a6a。台帳はinventory.json。

## 完了した組込みと成果物

- src/data/site.mjs：074の台帳、2論文、カタログ、分野所属。既存の共通部品・書体・言語切替・図ビューアを使用。
- drafts/catalog-074/{overview,kakeya-maximal-three,kakeya-hausdorff-four}/：第1段階の日英原稿・引用・出典・図原本を変更せず採用。
- public/diagrams/catalog-074/：7図×日英×SVG/TeX＝28ファイル、原本とのhash一致。
- public/pdf/catalog-074-ja.pdf：30ページ、3章、7図。
- public/pdf/catalog-074-en.pdf：32ページ、3章、7図。
- src/data/pdf-editions.json：074の日英版だけを追加。他カタログ版情報は開始時点と一致。
- カタログ冒頭に実PDFと対応言語のリンクを共通部品から表示。
- 検査詳細：stage2/REVIEW.md、stage2/completion.json。変更一覧：stage2/changed-files.txt。開始状態・差分保全：stage2/baseline.json、preservation.json、git-status-start.txt。

## 検査結果

全テスト39件、引用同期（ツール表示69 catalogue(s)・248ファイル）、ビルド191ページ、全登録PDF46版、内部参照233,430件が適合。内部参照は標準と同一判定・readFileキャッシュのみ追加の専用検査で完了し、標準版の重複実行は中断した（stage2/link-check-status.json）。

074日英PC/375pxの12条件＋指定見本の12条件、図28操作、日英切替のアンカー保持、PDFリンク、分野入口を確認。PDF全62ページと全14図を画像確認。詳しくはstage2/REVIEW.md。公開URLでの検査はまだ行っていない。

## 次回・第3段階の手順

1. ユーザーの公開指示を確認してから再開する。README.md、RELEASE_CHECKLIST.md、stage2/REVIEW.md、reviews/CONTENT_REVIEW.mdと最新Git状態を読む。共有ブランチを切り替えず、他担当の既存差分を保持する。
2. stage2/changed-files.txtとsite-registration.diff、pdf-edition-074.jsonで074の公開差分を限定する。site.mjsとpdf-editions.jsonに他担当差分があれば、必要な074の項目だけを含める。git add -A等で他カタログの変更を一括採用しない。依存する074原稿・inventory・presentation・引用記録・公開図・PDFを漏らさない。
3. 第2段階後の差分があれば、影響する引用・図・PDF hash・テスト・ビルド・リンク・画面を再確認する。既存他カタログの変更を取り消さない。
4. 通常のcommit・pushで公開し、GitHub Actionsのbuild/deploy成功を確認する。
5. 公開された日英/catalog/074/、/papers/kakeya-maximal-three/、/papers/kakeya-hausdorff-four/、/fields/real-complex-analysis/、図・日英PDFが今回の版に一致することを確認する。公開CDNのMathJax、PDF導線、言語切替も確認する。
6. 公開URL・commit・検査結果・数学的保留を報告して完了する。

## 074のPDFを再生成する場合

共通生成器は図のSVG内部リンクをPDF注釈へ引き継がないため、074は専用のリンク補完を含む。第2段階の最終PDFは図内各40か所がクリック可能。再生成時は次の順序を守る。

```sh
node scripts/build-catalog-pdf.mjs --catalog 074
node coordination/catalog-074/stage2/collect-svg-links.mjs
XDG_CACHE_HOME=/private/tmp/catalog-074-cache /private/tmp/catalog-052-pdf-x86/bin/python coordination/catalog-074/stage2/add-pdf-figure-links.py
node node_modules/astro/astro.js build
node scripts/build-catalog-pdf.mjs --check --catalog 074
```

共通PDF生成にもPDF_PYTHON=/private/tmp/catalog-052-pdf-x86/bin/pythonと上記XDG_CACHE_HOMEを指定する。Nodeは/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/binをPATHに加える。ブラウザ座標取得にはローカルChrome・Playwrightを使用する。補完スクリプトは図のhashが古ければ停止し、実配置を再取得して074の注釈と版情報だけを更新する。第3段階で本文・図・組版を変更しなければ、生成済み最終PDFをそのまま公開できる。

## 数学的保留

4Dが引用する[24,Lemma2.3]は今回固定3DのLemma3.3に条件・結論が対応するが、番号変更の版履歴は未調査。全技術証明や外部入力の全証明を認定したものではない。各sources.json、本文末尾、reviews/SOURCE_REVIEW.mdの範囲を維持する。第2段階では数学本文・図原本の追加改稿をしていない。
