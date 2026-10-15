# カタログ039 第3段階への引継ぎ

今回のユーザー依頼は第2段階。039のサイト登録・日英PDF・公開前検査を実施して停止し、commit・push・公開はしていない。作業先は/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest、ブランチmain。詳細と最終状態はSTAGE2_REPORT.mdとstage2/completion.json。

公開指示を受けたら次を行う。

1. 現在のAGENTS.md、PROJECT_PLAN.md、production/README.md、039のCONTENT_REVIEW・STAGE2_REPORT・RELEASE_CHECKLISTを読む。最新Git状態を確認。第1段階と第2段階の開始時スナップショットにある他カタログ・制作ルールの未コミット変更を039の公開へ混ぜず、消さない。
2. 第1段階の039原稿・引用・台帳はまだ未コミットである。`drafts/catalog-039/`と必要な`coordination/catalog-039/`記録、`public/diagrams/catalog-039/`、日英2冊のPDF、`src/data/site.mjs`・`src/data/pdf-editions.json`の039追加、登録順を更新したテスト2ファイルを対象として差分を選ぶ。再現・読解に必要な原稿／TeX／引用を欠かさない。作業用巨大画像・HTML・中間物の扱いは既存のignoreと運用に従う。
3. 最新差分に応じて必要な検査を行う。共有変更があれば競合部分を両者照合する。今回の39テスト、135ページbuild、引用・リンク・全PDF検査のログはstage2/logs。039以外のPDF版情報・ファイルを変更していない。
4. 正常なcommit・pushで公開する。pushはGitHub Pagesへ反映するため、今回の第2段階指示から自動実行しない。
5. Actionsのbuild/deploy成功と公開URL上の039日英案内・4記事・26SVG・日英PDFを確認。日英PDFは2026-10-15版、日本語52ページ・英語57ページ、各5章13図。SHA-256はsrc/data/pdf-editions.jsonと照合する。
6. 公開URL・commit・反映確認・残るChow49原著照合を報告し、RELEASE_CHECKLISTの第3段階だけを更新する。

想定URL（現時点の公開反映は未確認）：
- https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/039/
- https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/039/
- https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-039-ja.pdf
- https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-039-en.pdf

再生成が必要な場合：通常の`node scripts/build-catalog-pdf.mjs --catalog 039`で2冊のみ生成し再build。環境固有のPDF_PYTHON、DYLD_FALLBACK_LIBRARY_PATH、XDG_CACHE_HOMEはSTAGE2_REPORT.mdを参照。一時Python環境が失われたらscripts/pdf/README.mdの依存関係を再構成する。
