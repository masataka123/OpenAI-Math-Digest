# カタログ305 制作記録

**現在：第2段階・公開準備完了（2026-10-21）。** ユーザーの「では第二段階をお願いします.」に基づき、サイト登録・確認済み図の公開コピー・日英冊子・共通検査と目視を完了した。結果と同一版の再利用、証拠、残作業は [PREPARATION_REVIEW.md](PREPARATION_REVIEW.md) を参照。commit・push・公開確認は未実施で、第3段階の指示を待つ。

以下は第1段階の担当・制作時の記録。第2段階で数学的内容は変更していない。

制作セット1.4、MODEL_ROLES 2026-10-20を採用。今回の依頼は記事・内容点検・日英案内と引継ぎまで。サイト登録、公開用資産への配置、日英冊子PDF、commit/pushは次段階。

唯一の書誌台帳は inventory.json。公式mainをGitHub connectorで確認し、固定commitから原典を取得した。CONTENTSは依頼名、overviewは別見出しを用いるため、公式overview見出しを表示基準にして双方を保持する。掲載順は3本とも依頼と一致。既存記事なし。

## 担当と分担

- 本部 `/root`：進行、取得・台帳、受領、機械処理と形式検査、引継ぎ。希望設定Sol 6.1 / xhigh。モデルの確認可能範囲はMODEL_PROVENANCE.jsonに記録。
- author-disks：Astra / highを明示指定。最初の2論文の日英記事・TeX/SVG・引用・読解記録。境界、入力・出力framing、相対ホモトピー類の違いを公式原典で比較する。
- author-pd4：Astra / highを明示指定。3本目の記事。全記事の数学的カタログ案内、公式順presentation、connections、総括図の判断と制作も担当。
- content-review：別のAstra / highを明示指定。3記事・図・案内を公式原典と照合し、執筆者へ修正を返す。修正後の影響確認も担当。

数学的内容はAstraだけが編集する。各担当は担当外・src・public・共通設定へ書き込まない。必要資料と詳細はWORKER_DISKS.md / WORKER_PD4.md / WORKER_REVIEW.md。モデル指定根拠はMODEL_PROVENANCE.jsonを参照。

## 第2段階への配置計画

カタログの短い概要の直後、共通公式順表の前に対応言語の冊子PDFリンクを置く。予定先はpublic/pdf/catalog-305-ja.pdfと-en.pdf。未生成のリンクを実サイトへ登録しない。章数は案内＋3記事。034の共通4列表を再利用し、数学的な内容・接続・分類と総括図の採否はAstra案内担当がFORMAT_CONTRACT第6節に従い判断する。

## 環境

- Node: /Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node
- Bundled Python: /Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3
- System Python: /Library/Frameworks/Python.framework/Versions/3.13/bin/python3
- Poppler: /usr/local/bin/pdfinfo, pdftotext, pdftoppm
- TeX: /Library/TeX/texbin/xelatex, dvisvgm

PATHにnode/npmがないため、上記Nodeでscripts/sync-citations.mjsを直接実行できる。図は共通例の生成方式を使い、各担当フォルダにだけ保存する。確認済み同一版を再生成しない。

既存mainには他カタログの未コミット差分あり。GIT_BASELINE.txtとGIT_HEAD.txtを参照し、共有ブランチを切り替えない。

## 第2段階の実施記録

`src/data/site.mjs` に台帳から305・3記事を登録し、Topologyと共通の日英ルートから案内した。図は同一版をコピーし、再生成していない。日英PDFと版情報は共通 `scripts/prepare-catalog.mjs --catalog 305` で生成・再ビルド・照合した。組版・表示・ブラウザー・引用の共通処理は変更していない。

共通実行IDは `2026-10-21T11-57-18.894Z-70208`。機械記録のHANDOFF/report、画面画像、冊子の中間リンク記録は `stage2/preparation-evidence.tar.gz` に保存した。再開時はPREPARATION_REVIEWを読み、同一性を確認して既存成果物を使う。実行環境は共通HANDOFF記載のNode、`tmp/pdf-venv`、`tmp/pdf-runtime.json`。必要な再検査だけ同じ共通コマンドで行い、変更がない図・冊子を作り直さない。
