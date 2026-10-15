> 更新：2026-10-15、第2段階を完了。[完了報告](stage2/REPORT.md)と[第3段階の引継ぎ](stage2/PUBLICATION_HANDOFF.md)を参照。以下は第1段階終了時の引継ぎ履歴。

# カタログ087 第2段階への引継ぎ

## 依頼範囲と作業状態

現依頼は第1段階（記事制作・内容点検・カタログ案内）のみ。第2段階のサイト組込み・日英冊子PDF生成はユーザーの次の依頼で再開する。commit・push・公開は第3段階であり、今回実施しない。

作業先 `/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、ブランチ `main`。開始HEADは `5042e9f0dcf62a6c2e23a8660644038de377a287`。開始時点で多数の他担当差分あり（git-status-start.txt）。共有ブランチの切替や他差分の取消をしない。

採用仕様は制作セット1.4＋段階補足、Astra指定。執筆・数学的点検担当はmodel-provenance.json、時間は各status.md。既存Solの原稿・解釈・点検を制作根拠にしていない。共通表示基盤・指定見本・公式原典は利用した。

## 公式台帳と成果物

- `inventory.json`：固定版 `1581d4cbdd69a0faf34b2089614fe2a814316a6a`、正式見出し、CONTENTS別名、公式分野・番号範囲・ページ・原稿SHA。
- 公式分類：公式掲載順4（内部ID subject8）`Convex and metric geometry`（087–101）、概要PDF p.10。
- `drafts/catalog-087/symmetric-mahler/`：公式順1、26頁。
- `drafts/catalog-087/general-mahler/`：公式順2、72頁。
- `drafts/catalog-087/symplectic-polar-products/`：公式順3、19頁。
- 各記事：article.ja.md / article.en.md、sources.json、citations.json、status.md、diagrams/（TikZ・TeX・SVG・引用・hash・生成手順）。
- `drafts/catalog-087/overview/`：日英案内、presentation.json（共通表3行）、connections.jsonと採否理由。
- `reviews/`、CONTENT_REVIEW.md：Astraの原典との交差点検、反映と残る範囲。
- FORMAT_REVIEW.md、validation.json、screen-checks.json、screens/：形式・表示の証拠。

既存公開記事との重複なし。paper IDは上記3件で固定し、同じ論文を他分野へ重複登録しない。

## 第2段階の具体的な再開手順

1. README、CONTENT_REVIEW、FORMAT_REVIEW、RELEASE_CHECKLISTと各statusを読み、完了した読解・執筆を最初からやり直さない。最新Git状態・原稿hashを確認する。記録された未確認範囲を保持する。
2. サイト本部として `src/data/site.mjs` 等へ087と公式順3記事を登録。`CatalogMarkdownOverview.astro` と既存共通rendererを使い、共通4列表、引用案内、主張、証明対象、図、原典読書案内を表示する。087専用の独自CSSや分類固定を追加しない。
3. 対象のTeX/SVGのみpublicへ配置。引用・記事・図の生成記録を照合。全体の `check:citations` はpublic配置後に実行する。第1段階の `--text-only` 成功と区別する。
4. 日英の図と本文・相互リンク・内部アンカー、分野→087→記事の導線を確認する。AI生成注意書き、原典確認案内、白と緑の案内役、右上の言語切替を共通部品で維持する。
5. 既存 `scripts/pdf/README.md` の方式で案内1章＋公式順3記事＝4章の日英冊子を生成し、`src/data/pdf-editions.json` を成果物とともに更新する。カタログ冒頭に各言語の実PDFリンクを設置する。初稿図生成中間PDFと冊子成果物を混同しない。
6. `npm run check:citations`、`npm test`、`npm run build`、`npm run check:links`、`npm run check:pdf`、日英PC/375pxと紙面の目視を行う。033文献案内・034表・Schnell主張→図→説明との比較を統合状態で再確認する。本文・図・PDFの一致、図拡大、引用リンク、言語切替アンカーを検査する。
7. 必要な検査を満たしたら第2段階の成果物・残る未確認事項を報告して停止。公開指示前にcommit/pushしない。

## 原稿プレビューの再現（サイト登録不要）

この環境では通常PATHにnode/npmがない。利用可能なNodeは `/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node`。以下のスクリプトはそのNodeで実行できる。

- `coordination/catalog-087/validate-stage1.mjs`：087対象の引用text-only、図manifest、日英節・引用・アンカー・公式表検査。
- `coordination/catalog-087/build-preview.mjs`：現行共通renderer/CSSを使って087専用領域へ静的プレビューを出力。
- `python3 -m http.server 8877 --bind 127.0.0.1 --directory coordination/catalog-087/preview`
- `coordination/catalog-087/capture-preview.mjs`：独立headless Chromeで1280/375pxを記録。

このプレビューはサイト登録・公開の代替ではない。第1段階ではpublicコピー、統合ルート、冊子PDF、公開URL、Actionsは未実施。

## 第1段階の最終状態

内容編集・4件のAstra交差点検・指摘反映を終了。一般版G1（系の有限性説明）、対称版S1（近傍の包含条件）は再照合で解決済み。未解決の原稿修正要求なし。数学的確認の限界はCONTENT_REVIEWと各記事末尾に保持。

対象4レジストリの引用text-only検査、96ファイルの図生成manifest、日英構造・結論アンカー、公式順3行、内部120リンクは成功。原稿8ページ×2幅の16条件と指定見本12条件を比較し、横はみ出し・MathJaxエラー・ページ内リンク切れなし。最後のS1補足後は対称版の4条件だけを再確認。

共通site.mjsには並行作業による159登録、pdf-editions.jsonにも開始時からの変化を検出した。これらを変更・巻戻ししていない。087は未登録で、087冊子PDFも未生成。再開時は最新の他担当差分を保持して統合する。

注意：各記事/総括のmake-records.pyは初回台帳生成用で、後続の修正を上書きし得る。通常の再生成では実行せず、現在のsources/citations JSONを正本として引用同期→diagrams/render.pyを行う。全96図manifest検査済みの成果物をそのまま利用できる。
