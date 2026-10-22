# 漫画034のローカル試作

2026-10-22。ユーザーの「じゃあ一回お願いしましょう。試作してください」により、034の漫画ページ単体を作成した。公開・commit・pushは未実施。

## 採用した範囲

- 独立URL：`/OpenAI-Math-Digest/comics/catalog/034/`。通常の日英ルートとは別。漫画の日英UI・英語漫画・漫画PDFは作成していない。
- 台帳：`src/data/comics.json`。画像順と対象論文・範囲・補足状態を持ち、`src/data/comics.mjs`と共通の `[id].astro` から生成する。複数画像に対応する構造。
- 漫画専用の `ComicsLayout.astro` / `ComicPage.astro` / `ComicViewer.astro` / `comics.css` を追加。既存の共通色・書体・ヘッダーの意匠を利用し、通常版のLayout・CSS・記事・登録・PDFは編集していない。
- 表示：正式題名、対象範囲、漫画画像、拡大dialog、岩井の補足、通常版034と対象論文の記事・固定版原典へのリンク。
- 漫画トップ・分野別一覧は今回未作成。試作中のブランドは本文先頭、漫画版入口は現在の漫画へつなぎ、存在しないページへのリンクを作っていない。
- 補足は `awaiting-author`。原文未提供のため、見出しと準備中の編集状態のみ表示する。編集側の対象範囲・確認状況を岩井の補足として扱っていない。
- 原画像を `assets/comics/catalog-034/original/Catalog_034.png`へ無変更で保管。掲載WebP・PNGは1024×1536の同じ画素を保つ。変換条件・SHA・容量は [IMAGE_BUILD.json](IMAGE_BUILD.json)。原本フォルダは通常の公開出力に含まれない。

## プレビューと再開

今回の表示用ビルド：`tmp/comics-preview/dist/`。通常の `dist/`は上書きしていない。

実行時はNodeがPATHにないため、利用可能な次のNodeで直接起動した：

`/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node`（v24.19.0）。

通常の環境では、ローカル確認用に次のように起動できる：

```sh
COMICS_PREVIEW=1 npm run dev -- --host 127.0.0.1
```

今回の環境で同じビルドを再作成する場合：

```sh
COMICS_PREVIEW=1 /Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node node_modules/astro/astro.js build --outDir ./tmp/comics-preview/dist
```

現在の一時サーバーURL：`http://127.0.0.1:59599/OpenAI-Math-Digest/comics/catalog/034/`。停止後はこのポートを固定の再開先として扱わず、再起動時の表示URLを使う。サーバーは既存の `scripts/browser/site-server.mjs`を利用し、127.0.0.1だけにbindする。

`COMICS_PREVIEW=1`を付けない通常ビルドではprototypeの漫画ページを生成しない。公開対象へ切り替える操作は今回行っていない。

## 確認結果

- 既存テスト57件成功。引用検査は85カタログ・308ファイル成功。
- 試作用ビルド232ページ成功。リンク・画像等286,510参照でエラーなし。画像のWebP候補も読込と実在を別途確認。
- 通常ビルド231ページには漫画034が含まれず、明示指定した試作用ビルドにだけ含まれる。
- 日英230ページのHTMLは通常ビルドと試作用ビルドでバイト一致。保護対象の通常Layout・siteデータ・PDF台帳・ヘッダー／文字サイズCSSも作業前のSHAと一致。[ビルド照合記録](prototype/build-checks.json)を参照。
- in-app browserで1280×900、375×812、320×812を確認。ページ横はみ出しなし、画像全体を幅に収める表示、拡大・縮小・100%・全体表示・縦横スクロール、Esc／閉じる、フォーカス復帰を確認。スクロール中も右上3入口を表示。
- 通常版034の日英リンクを実際に開き、通常版には従来の2言語切替があり漫画用のナビが追加されていないことを確認。
- 原画像・掲載PNG・WebPをRGBに復号して全画素一致を確認。掲載WebPは1,808,356 bytesで、原画像2,448,284 bytesから約26%削減した。
- 画面画像を目視確認。記録は [ブラウザー検査](prototype/browser-checks.json)、[PC全体](prototype/screens/1280-page.jpg)、[375px全体](prototype/screens/375-page.jpg)、[375px拡大](prototype/screens/375-actual.jpg)、[320px全体表示](prototype/screens/320-fit.jpg)。

新たな数学的説明は展開していない。対象範囲・確認状況・altは、明示指定したAstra `comics_034_prototype_copy`（`gpt-6-astra` / `high`）から受領した。以前の同一画像のAstra予備照合を再利用し、原典の全読解・証明検証は繰り返していない。担当記録は [MODEL_PROVENANCE.json](../MODEL_PROVENANCE.json)。

## 残作業・制約

- これは034単体の表示・操作を確認するローカル試作。漫画トップ・分野一覧と掲載の全体導線は次の作業範囲を決めてから実装する。
- 実機iPhone／Safariの確認、画像全文のテキスト化、公開前の別担当による数学的内容点検は未実施。コマ4の既知結果の独立照合など、[受領記録](INTAKE.md)の保留事項は維持する。
- 岩井の補足は未提供。画像差替え・補足追加は内容確定後に行う。
- 日英の記事・図・冊子PDFの再生成は行っていない。既存の `pdf-editions.json` の未コミット変更には触れていない。
- ユーザーが試作を確認した後、必要な画面修正や漫画トップ／一覧の制作範囲を決める。公開は現在の依頼に含まれない。
