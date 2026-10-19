# カタログ357 公開URLブラウザー確認

公開後の技術表示QAを完了。残指摘なし。

- 担当: 本部継承モデル。数学内容の執筆・変更・検証は行っていない。
- 準備開始: 2026-10-19 09:46:17 JST。
- 公開URL検査: 2026-10-19 10:23:30–10:24:01 JST。待機時間と実検査時間を区別する。
- 公開対象commit: `892cd7baed4cda2326fc67b0d372b2a4b8c499cc`。
- Actions run `39182616123`のbuild/deploy成功を本部から受領後に検査を開始。
- 所有範囲: stage3/browser-*、stage3/screens/、本記録。Git操作・共有ファイル編集なし。

## 公開URLと検査条件

- [日本語カタログ357](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/357/)
- [English catalogue 357](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/357/)
- [日本語論文概説](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/regular-rcd-coordinates/)
- [English paper overview](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/regular-rcd-coordinates/)

各ページを1280px/375px（高さ900px）で検査し、全8条件が成功。Chromeで実際のGitHub Pagesにアクセスし、ページ・CSS・JavaScript・MathJaxを公開ネットワークから取得した。ローカルdistへの置換や通信の差替えは行っていない。再現可能な撮影のため滑らかなスクロールだけを無効にした。

## 結果

| 検査 | 結果 |
|---|---|
| ページ表示 | 全8条件HTTP200。ページ横はみ出し、MathJaxエラー、未解釈TeX、JavaScriptエラー、欠落ページ内アンカーは0 |
| カタログ一覧 | 日英とも公式順1行・共通4列。375pxは表内横スクロール。原典/記事への導線を保持 |
| 記事 | 各言語5主張欄・5証明図。図前の文献案内、証明対象、図直後の説明が表示 |
| 言語切替 | 8回成功。カタログ`#inventory`、記事`#sources`を保持。下方スクロール中も右上に表示 |
| 図拡大 | 5図×日英×両幅=20回、開く→拡大→全体表示→閉じるが成功。1000→1300pxの拡大を実測。各図の原典リンク群を複製後も保持 |
| 長い数式 | 375pxのTheorem 1.1は専用数式コンテナ内で横スクロールし、右端の量化まで到達。ページ幅を押し広げない |
| 公開リソース | 30 URLをHTTP取得し全件200。公開SVG/TeXと日英PDFを含む |
| PDF導線 | カタログ冒頭に言語別リンク各1件、20ページ表示。未生成告知なし。両PDFはHTTP200、application/pdf、PDFヘッダーを確認 |

PDF取得結果:

- [日本語PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-357-ja.pdf): 1,313,064 bytes。
- [English PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-357-en.pdf): 959,714 bytes。

公開assetと期待commit/ローカル成果物のSHA-256照合は本部担当。本記録のバイト数/HTTP応答検査と区別する。

## 目視証拠

計60枚を`screens/`へ保存。日英・両幅の主張/文献/図/数式/一覧/PDF入口を撮影し、実際に画像も閲覧した。第2段階の画面と同じ共通表示が公開版に反映されており、新たな崩れを認めなかった。

- `catalog.*.pdf-entry.png`: 公開PDF冒頭導線。
- `catalog.*.inventory.png`、`catalog.*.375.inventory-right.png`: 共通4列表と右端。
- `article.*.results.png`、`article.*.references.png`、`article.*.normalization.png`: 主張・文献・平均積分表記。
- `article.*.375.math-right.png`: 数式コンテナの右端。
- `viewer.*.1.png`〜`.5.png`: 公開図拡大ダイアログ。

## 再現と限界

```sh
CATALOG357_EXPECTED_COMMIT=892cd7baed4cda2326fc67b0d372b2a4b8c499cc /Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node coordination/catalog-357/stage3/browser-check-live.mjs > coordination/catalog-357/stage3/browser-live.log
```

数値と操作記録は`browser-checks.json`、実行ログは`browser-live.log`。Chrome起動は許可されたサンドボックス外実行を使用。

この担当の検査に未完了事項はない。原典の数学的妥当性・外部URL全件の到達性・PDF本文の再読・asset全件SHA照合は本ブラウザー検査とは別範囲。公開操作や数学内容の変更は行っていない。
