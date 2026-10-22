# 漫画トップ・分野別一覧のローカル制作

2026-10-22。ユーザーの「じゃあ作ってください」により、漫画版のトップ・分野別一覧を作り、034へ接続した。**ローカル制作・確認まで。commit・push・公開は未実施。**

## 導線

- `/OpenAI-Math-Digest/comics/`：漫画トップ・公式17分野の一覧。
- `/OpenAI-Math-Digest/comics/fields/algebraic-complex-geometry/`：この分野の漫画一覧。現在は034だけ。
- `/OpenAI-Math-Digest/comics/catalog/034/`：先に作成した漫画ページ。

トップから分野名、分野一覧から番号・題名・「漫画を読む」で034へ進む。034のパンくずと末尾から分野やトップへ戻れる。全漫画ページのヘッダーのブランド・漫画版入口は漫画トップへ戻る。「分野一覧」は漫画トップの分野節を開く。

右上の日本語・Englishは通常版トップへの入口であり、漫画の言語切替ではない。既存の日本語版・英語版のヘッダー、分野一覧、カタログ・記事へのリンクを変更していない。

## データと変更範囲

- 新設：`src/pages/comics/index.astro`、`src/pages/comics/fields/[id].astro`。
- 更新：`src/data/comics.mjs`、`ComicsLayout.astro`、`ComicPage.astro`、`comics.css`。
- `src/data/comics.json`の表示対象だけを公式分野の `officialIds` と照合し、所属・掲載数・カタログ順を生成する。通常版の `field.catalogIds` を漫画の収録状況に流用しない。
- 全17分野は通常版と同じ英語名・順序・番号範囲で表示する。漫画のある分野だけに一覧ページへのリンクを付け、漫画のないカタログ番号は一覧に並べない。
- 公式名称・出典版は既存の `catalog-subjects.json`、`site.mjs`を読取参照。共通メタデータの変更は行っていない。
- 新しい漫画を追加するときは登録情報を追加する。分野ごと・番号ごとのページファイルは複製しない。
- 320pxで見出しの末尾だけが折り返さないよう文字サイズを調整し、折り返した分野リンクも全領域を押せるようにした。

## 担当

担当指定：`gpt-6.1-sol` / `xhigh`。ユーザーの「Astra不要」の指示に従い、今回のトップ・一覧・接続・検査ではAstraその他のサブエージェントを起動していない。数学的な本文・034画像・補足の執筆は追加していない。

指定と過去の制作履歴は [MODEL_PROVENANCE.json](MODEL_PROVENANCE.json)。現チャットの取得できない実設定を指定値から推測していない。

## ローカル起動

今回のビルド先は `tmp/comics-preview/dist/`。通常の `dist/`は上書きしていない。現在のサーバーは既存のローカル試作サーバーを継続利用する。

漫画トップ：`http://127.0.0.1:59599/OpenAI-Math-Digest/comics/`

通常環境では：

```sh
COMICS_PREVIEW=1 npm run dev -- --host 127.0.0.1
```

今回のNodeで再ビルドする場合：

```sh
COMICS_PREVIEW=1 /Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node node_modules/astro/astro.js build --outDir ./tmp/comics-preview/dist
```

サーバー停止後は59599を恒久ポートとして扱わず、再起動時の表示先を使う。Nodeや起動方法の詳細は [034試作記録](catalog-034/PROTOTYPE.md)を参照する。

prototypeの034とその分野ページは明示したプレビューだけに含める。通常ビルドの漫画トップは公開対象0件であり、prototypeの034・分野ページへのリンクやページを生成しない。

## 検査

- 既存テスト57件成功。引用検査87カタログ・314ファイル成功。
- 試作用ビルド238ページ、通常ビルド236ページ成功。
- 日英234ページのHTMLは制作前の通常ビルドと試作用ビルドで一致。通常版のソース・記事・図・冊子PDF等95ファイルも作業前のSHAと一致。既存の未コミット変更は保持した。
- 公式17分野の英語名と順序、漫画のある分野だけへのリンク、分野一覧に034だけを表示することをビルド済みHTMLで検査。
- 通常ビルドにはprototypeの034・その分野ページとリンクがないことを検査。
- 内部リンク・資産参照の検査にエラーなし。
- in-app browserの1280×900、375×812、320×812で、トップ→分野→034、ヘッダー・パンくず・末尾による戻り、横はみ出しなしを確認。狭幅の分野名リンクは押下領域を調整後に再確認した。

機械記録：[ビルド・保護対象照合](navigation/build-checks.json)、[リンク検査](navigation/links.json)、[ブラウザー検査](navigation/browser-checks.json)。画面：[PCトップ](navigation/screens/1280-home.jpg)、[PC分野](navigation/screens/1280-field.jpg)、[375pxトップ](navigation/screens/375-home.jpg)、[375px分野](navigation/screens/375-field.jpg)、[320pxトップ](navigation/screens/320-home.jpg)、[320px分野](navigation/screens/320-field.jpg)。

## 残る範囲

- 公開は未実施。通常版側への漫画入口の追加も行っていない。
- 岩井の補足は引き続き未提供。034の対象範囲・原典照合の保留事項は [受領記録](catalog-034/INTAKE.md)を維持する。
- 実機iPhone／Safariの確認は未実施。今回の画面検査はデスクトップブラウザーの指定幅である。
- 次に追加・差替えを行う場合は [共通運用](../../production/COMICS.md)に従い、変更した版と画面を確認する。

## トップ末尾の追記（2026-10-22）

ユーザー指定により、公式分野一覧の後へ、日本語版と同じ「論文群を支える先行研究」（Fujino先生の記述）とリーフェ紹介を追加した。リーフェ紹介は既存の `CharacterIntro.astro` を日本語で利用し、紹介文・設定へのリンク・画像・表示を共用する。日本語版のソースや共通部品は編集していない。

続いて「漫画版について」の見出しを追加した。本文はユーザーが執筆するため、空のまま余白だけを確保し、準備中等の代替文も入れていない。公開は未実施。今回もサブエージェントは使用していない。
