# カタログ357 第2段階 技術表示QA

担当: 本部継承モデル。数学内容の執筆・検証・変更は行っていない。
開始: 2026-10-19 09:13:02 JST。初回実サイト検査終了: 09:15:28 JST。最終差分検査終了: 09:18:46 JST。

## 実施方法

実際の`dist/`を`serve.mjs`で127.0.0.1:8357に配信し、Chrome/PlaywrightでHTTPアクセスした。第1段階の静的プレビューは用いていない。共有CSS/JavaScript/図拡大部品は生成された実サイトのものを読み、MathJaxも実LayoutのCDN URLから取得（ローカル置換なし）。画面撮影時のみ滑らかなスクロールを無効化し、配置には手を加えていない。

## 初回検査結果

- 日本語/英語、1280px/375pxで、トップ、微分幾何学分野、357カタログ、357記事、034カタログ、034 Schnell、033 Orbifold Iitakaの計28条件を検査。全条件成功。
- ページ全体の横はみ出し、MathJaxエラー、未解釈TeXコマンド、JavaScriptエラー、欠落したページ内アンカーはいずれも0。
- トップ→微分幾何学→357カタログ→個別記事→主定理の証明概略まで、日英/両幅の4条件でリンクを実クリックして遷移を確認。
- 記事/カタログ/分野の言語切替12回成功。記事`#sources`とカタログ`#inventory`のアンカーを保持し、スクロール後も右上の切替が画面内に残る。
- 全5図×日英×両幅で20回、拡大ダイアログを開く→拡大→全体表示→閉じる操作に成功。拡大幅1000→1300pxを実測。全図で原典リンク群が複製時にも保持される。
- 新規記事と案内にある局所参照28 URLをHTTP取得し全件200。公開コピーした10 SVG/10 TeXを含む。原典リンクは宣言した固定commitの公式原稿URLとの一致と図中リンク保持を確認。外部サーバーの全URL到達性の再監査は行っていない。
- 375pxのTheorem 1.1表示式は共通数式コンテナ内部で横スクロール。右端の量化まで表示できる。ページ全体のoverflow0を、すべての長い式が初期画面に収まることとは区別した。

## 指定見本との目視比較

| 項目 | 357の証拠 | 指定見本の証拠 | 結果 |
|---|---|---|---|
| 公式順4列表 | `screens/catalog.*.inventory.png`、375pxのinventory-right | `screens/catalog034.*.inventory.png` | 1行でも番号/論文・版・ページ/結果/役割・概説の4列を保持。狭幅は表内スクロール |
| 主張と証明対象 | `screens/article.*.results.png`、proof | `screens/schnell.*.results.png`、proof | 共通定理欄、出典行、証明対象→図→説明の骨格 |
| 図前の文献案内 | `screens/article.*.references.png` | `screens/orbifold.*.references.png` | 自論文/外部キーを区別し、著者・正式表示名・版・使用内容を前置。出典行は共通14px |
| 実際の図拡大 | `screens/viewer.*.1.png`～`.5.png` | 共通DiagramViewer | 日英PC/375pxで全図を開ける。引用リンクを保持 |
| 長い数式 | `screens/article.*.375.math-right.png` | 共通数式ラッパー | 横スクロールで量化まで到達し、本文幅を押し広げない |

100枚の初回画面証拠と10枚の最終差分画面、計110枚を保存。画像の閲覧と数値検査は別に実施した。

## 第1段階からの差分

第1段階では未登録原稿の共通レンダラーによる静的プレビューを検査した。今回は実登録された分野導線、パンくず、言語切替のアンカー保持、図拡大のJavaScript、公開図・TeXのHTTP配信を確認した。数学内容の変更はない。

初回検査時点で日英PDFリンクは未登録（0件）だった。最終ビルド後、日英/両幅の4条件でPDF冒頭導線と表を再検査し全件成功。各言語のPDFリンクは1件、20ページの表示、未生成告知の除去を確認。HTTP200・application/pdfで取得したバイト数とSHA-256がpublicファイルに一致した。

- 日本語: 1,313,064 bytes、SHA-256 `ab673f28e15aeb9d4e82b2ea03abe5c7a7c86426cb2a4a7ff8dcd90471c0f5f0`
- 英語: 959,714 bytes、SHA-256 `865d2dada1c0eab087d16384e591a8a8c2593612b1edea716a671ffd254982f0`

本部がPDFで発見したUnicode添字の欠字に伴い、一覧の`Lₙ`は標準TeX `$L_n$`へ変更された。最終4条件で表内の2数式がMathJaxとして描画されること、未解釈コマンド0、4列表と375pxの表内スクロールを維持することを確認した。PDF本文・紙面は本部の別検査。

初回検査の14 HTMLハッシュと最終ビルドを比較し、変更は日英357カタログの2ページだけ。記事・トップ・分野・指定見本は不変。`final-diff.json`に記録。

再build中に最終差分検査が一時404で停止したが、最終build完了通知後の再実行ではすべて成功。初回PDF差分スクリプトの375px設定を修正し、最終実行は実viewport375/1280で測定している。製品側の残指摘はない。

## 未実施・担当外

GitHub Pages公開版の反映確認、commit/pushは第3段階。PDF本文/紙面と数学の内容点検は本部の担当。実装の共有ファイルは変更せず、Astro buildも実行していない。

## 再現

```sh
export PATH="/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH"
node coordination/catalog-357/stage2/serve.mjs
# 別の端末で
node coordination/catalog-357/stage2/check-browser.mjs > coordination/catalog-357/stage2/browser-checks.log
node coordination/catalog-357/stage2/check-final-diff.mjs > coordination/catalog-357/stage2/final-diff.log
```

Chrome起動とローカルHTTP待受にはサンドボックス外の実行を使用した。証拠は`browser-checks.json`（全28条件、局所リソース、HTML SHA-256）、`screens/`、ログを参照。
