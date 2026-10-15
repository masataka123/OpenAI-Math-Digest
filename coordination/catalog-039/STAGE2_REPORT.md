# カタログ039 第2段階記録

2026-10-15、本部。対象はサイト組込み・日英PDF・公開前検査。共有ブランチmainを維持し、commit・push・公開は行わない。

## 組込み

- `src/data/site.mjs`へ039と公式順4記事を登録。分野はAlgebraic and complex geometry、038と042の間。第1段階の固定commit・原稿版・タイトル・ページ数を維持。
- 既存CatalogMarkdownOverview / CatalogDraftArticleと共通表示を利用。案内の節IDはpapers / connections / sources、共通表4行4列、方法関係図1枚。固定3分類や直接依存の矢印は追加していない。
- 日英26SVG・26TeXを`public/diagrams/catalog-039/`へコピー。引用記録、TeX原本、公開用図の一致を完全check:citationsで確認。
- `public/pdf/catalog-039-ja.pdf`（52ページ）と`catalog-039-en.pdf`（57ページ）を生成。各5章・13図。案内冒頭から対応言語の実PDFを参照する。src/data/pdf-editions.jsonは039だけ追加し、既存14カタログの全記録が不変であることを比較した。
- 案内本文の日英10か所のリンクを、共通レンダラーがサイトパス付きに変換する相対Markdown形式へ修正。数学的内容を変更していない。Chow49原著の記述・位置の未照合を日英本文・冊子に保持。

## 検査と証拠

| 検査 | 結果・証拠 |
|---|---|
| 引用 | 公開コピーを含む全登録対象の同期・図hash照合成功。stage2/logs/citations.txt（47 registry群、170生成ファイル） |
| テスト | 全39件成功。stage2/logs/tests-final.txt。初回の2失敗は分野の固定期待配列に039が未登録だったため。033/063テスト各1行の期待値に039を追加し、既存検証を維持 |
| build | 135ページ成功、日英039案内と4記事を生成。stage2/logs/build-final.txt |
| PDF | 全15カタログ30冊のcheck:pdf成功。stage2/logs/pdf-check.txt。039の出力は各5章13図。全章bookmark、内部destination、外部URL、非空ページを検査。stage2/pdf-review/structure.json |
| Web画面 | 日英トップ・分野・039案内・4記事×1280/375px＝28条件。ページ横はみ出し0、MathJaxエラー0、画像欠落0、JSエラー0。stage2/browser.json |
| 操作 | 4記事×日英の8経路で分野→039→記事、#proof-1保持で言語切替、右上固定スイッチ、TeX取得、図拡大・縮小・fit、図中引用popup、一覧へ戻るアンカーを確認。各PDF導線はHTTP200かつpublicの実ファイルとバイト一致 |
| 原典リンク | 図中引用クリックのURL遷移を検査。応答をローカル差替えした操作試験なので外部原典サーバーの稼働確認とは区別。原典内容の照合範囲は第1段階CONTENT_REVIEW |
| 指定見本 | 新buildの034表、Schnell証明節、033 Orbifold Iitaka文献案内を日英PC/375pxで撮影し比較。stage2/screenshots/*model*。039の主張欄・引用行・証明図直後の文章・文献案内は共通表示。051を標準見本にしていない |
| Git | stage2開始時の全tracked file hashと照合し、変更はsite.mjs / pdf-editions.json / catalog-033.test.mjs / catalog-063.test.mjsの4ファイルのみ。他担当の既存変更を維持。新規追加は039専用図・PDF・記録 |

## 紙面の目視

全109ページを1500px PNGへ展開し、19枚のコンタクトシートで全ページ・全26図、表紙、目次、主張欄、引用、文献案内、数式、改ページ、末尾の確認範囲を点検した。密な平面図と正標数図は原寸画像でも確認。欠落・重なり・切断なし。表は印刷用の項目一覧へ展開され、公式順と主張・役割・原典情報を保持する。図は紙面内に収まり、本文と図の引用は共通記録に由来する。

図掲載ページ：日本語7,12,15,16,23,26,28,34,37,39,45,47,49。英語8,14,17,18,25,29,31,38,41,43,49,52,54。証拠はstage2/pdf-review/{ja,en}-NN.pngとcontact-N.png。改ページによる余白はあるが、内容・可読性の欠陥はなく、共通組版へ追加調整は行わない。

## 実行環境

npmがないためpackage.jsonと同じNodeエントリを直接実行。NodeはCodex bundled runtime。PDFは既存の`/private/tmp/catalog-052-pdf-x86/bin/python`（WeasyPrint68.1、pypdf6.19.0）、`DYLD_FALLBACK_LIBRARY_PATH=/usr/local/lib`、`XDG_CACHE_HOME=$PWD/tmp/font-cache`。別の冊子生成系や共通CSSの変更なし。PDFスキルの操作開始マーカーを出力2冊として一度実行した。

最初のリンク検査は再buildと重なってdistが一時的に消えたため中断した。再build終了後の独立した最終リンク検査を正式結果とする。初回ログは診断資料として残す。

## 残る確認範囲

Chow49の原著の定理記述・番号・該当ページは未照合。外部入力の証明全体、全解析評価の独立再証明、全背景文献、網羅的な他カタログ接続は未検証。これは第1段階から明記された数学的照合範囲であり、今回の機械検査を正しさの認定として扱わない。

第3段階のcommit・push、Actions、公開URLでの日英記事・全図・PDF反映確認は未実施。公開指示後の手順はSTAGE3_HANDOFF.md。

## 最終リンク検査での修正

初回の完走したcheck:linksで、案内本文の日英計10リンクが`/ja/papers/...`または`/en/papers/...`で始まりPagesのbase外へ出ることを検出した。039案内だけを`../paper-id/article.<lang>.md#anchor`形式に修正し、共通renderDraftによるbase展開を使用。HTMLの10リンクを確認し、PDFも再生成してそれらを冊子内destinationへ変換した。数学本文・図・共通レンダラーの変更なし。最初の28内部リンクに加え5か所ずつが冊子内リンクになる。最終ログ・画像は修正後のもの。

## 最終判定

2026-10-15T15:55:13.671666+09:00：第2段階完了、公開準備完了として停止。最終check:links成功：Checked 159867 internal links/assets across 135 HTML pages (including anchors and language switches).。再生成後の全109ページPNGは目視済み版とSHA-256がすべて一致し、紙面の変化はない。PDF内部リンクは日英各33件で、修正した案内5リンクを含め全destinationが解決。全30冊のcheck:pdf、修正後28画面・8操作経路、39テストも成功。commit・push・公開未実施。
