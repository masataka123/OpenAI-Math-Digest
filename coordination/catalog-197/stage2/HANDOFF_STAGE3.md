# カタログ197 第2段階完了・第3段階への引継ぎ

2026-10-18、サイト本部root。ユーザーの「第二段階をお願いします」に基づき、サイト組込み・日英PDF・公開前検査を完了。ここで停止する。commit・push・公開は未実施。第3段階は公開指示後に開始する。

## 成果物と組込み

- 公式分野Algebra、公式順4記事を `src/data/site.mjs` に登録。原典固定commitは `1581d4cbdd69a0faf34b2089614fe2a814316a6a`。共通表示・既存ルートを使用し、トップ→Algebra→197→記事の導線を確認。
- 日英カタログ2ページ＋記事8ページ。正本は `drafts/catalog-197/`。4記事の本文・引用記録・図は第1段階受領版から変更なし。案内本文は「PDF生成予定」の一段落だけを削除し、共通の実PDFリンクを表示した。
- `public/diagrams/catalog-197/` に日英計32SVG・32TeXを配置。案内1図＋個別15図＝16図/言語。
- `public/pdf/catalog-197-ja.pdf` と `catalog-197-en.pdf` を作成し、`src/data/pdf-editions.json` の197のみ追加。案内＋4記事＝5章/言語。版日は2026-10-18。

| PDF | 頁 | bytes | SHA-256 |
|---|---:|---:|---|
| 日本語 | 51 | 3,180,641 | be8a039fbc1f4ba93499f52fd26388d83f9404c44a1cf178131db407f1440263 |
| 英語 | 54 | 2,579,765 | fd84cbe8ceb27a2a8529c958d8422e76a4dbff3b50110259bc7feb3cf493b936 |

日本語紙面担当reviewer、英語紙面担当author_direct。両者 `gpt-6-astra / reasoning_effort high` を明示指定した既存担当を継続。英語の紙面点検を追加の独立数学点検とは呼ばない。新たな数学的執筆はしていない。

## 検査結果

| 検査 | 結果・証拠 |
|---|---|
| 引用・公開コピー | 74引用記録/268生成ファイル成功：citations.log |
| 共通テスト | 39件成功：tests.log |
| 最終build | 205ページ成功：build-final-annotated.log |
| 内部リンク・アンカー | 250,107参照/205ページ成功：links-final.log。注釈反映後も同条件を読込キャッシュだけ追加して成功：links-cached-final.log |
| 全PDF整合 | 登録24カタログの日英48冊すべてcurrent：pdf-check-all-final.log |
| 実サイト画面 | 40表示、欠落・JS/MathJaxエラー・横はみ出し0。64図拡大操作。BROWSER_REVIEW.md、browser-checks.json、screens/ |
| 指定見本 | 034の公式順表/Schnell主張欄、033 Orbifold Iitaka文献案内を実画面比較。reference*-results/diagram-sources/manuscripts画像 |
| PDF紙面 | 全51/54頁のコンタクトシート、全16図/言語・主要主張・長式・確認範囲を拡大確認。PDF_REVIEW_JA.md / PDF_REVIEW_EN.md。未解消の紙面修正要求なし |
| 図内リンク | SVG内の引用が初回PDFでは注釈にならなかったため、各言語65件を補完。両担当が実PDFのURIと矩形をSVGと照合し解消確認 |
| 最終配布物 | HTTP200・PDF MIME・bytes・SHAがpublic/dist/版台帳で一致：served-pdf-check.json |
| 他作業保持 | 開始時15,013ファイルのハッシュ比較、対象外変更/削除0。旧PDF版情報は全件不変：preservation-check.json |

`links-initial.log` はビルドと同時に走らせたためdist再生成中のENOENT、`browser-overview.log` はPDFメタデータ反映前、`pdf-check-197-final.log` は最終ビルド中のENOENTを含む履歴。これらを成功扱いしない。ビルド終了後の上表の最終ログで解消を確認した。共有スクリプトの改変はない。

## 再生成が必要な場合

現時点では再生成不要。環境のNodeは以下、PDF用Pythonは197専用の一時環境を使った。npmがPATHにないためpackage.jsonのコマンド本体を直接実行した。

```sh
NODE197=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node
export PDF_PYTHON=/private/tmp/catalog-197-pdf-x86/bin/python
export DYLD_FALLBACK_LIBRARY_PATH=/usr/local/lib
export XDG_CACHE_HOME=/private/tmp/math-digest-197-fontcache
export PDF_EDITION_DATE=2026-10-18
"$NODE197" scripts/sync-citations.mjs --check
"$NODE197" --test scripts/*.test.mjs
"$NODE197" node_modules/astro/astro.js build
"$NODE197" scripts/build-catalog-pdf.mjs --catalog 197
"$NODE197" coordination/catalog-197/stage2/collect-svg-links.mjs
"$PDF_PYTHON" coordination/catalog-197/stage2/add-pdf-figure-links.py
"$NODE197" node_modules/astro/astro.js build
"$NODE197" scripts/build-catalog-pdf.mjs --check
"$NODE197" scripts/check-links.mjs
```

各コマンドは順次実行する。build中にdistを読む検査を並行実行しない。Python環境が失われた場合は `scripts/pdf/requirements.txt`（WeasyPrint68.1/pypdf6.19.0）と `scripts/pdf/README.md` に従って再構築する。この機械ではx86 Python `/usr/local/bin/python3.12` と `/usr/local/lib` のPangoを用いた。既存の他担当仮想環境は改変していない。

図内注釈補完は197限定。共有のPDF生成後に毎回再適用が必要で、`collect-svg-links.mjs` はブラウザを使って32SVGの座標を取得する。`add-pdf-figure-links.py` はWeasyPrintの図配置を再取得して全65件/言語を注釈化し、ページ内容stream不変・宛先数保持をassert、197のPDF bytes/SHAのみ更新する。既存の197専用注釈を除いてから追加するため重複しない。`*-before-annotations.pdf` は初回のみ保存する履歴であり、将来再生成分の比較基準として流用しない。

再生成時は新SHAを取得し、本文・画像の差分、全図内リンク位置と原典URI、日英の長式・改ページ、最終配信SHAを再検査する。新しい紙面の確認を古い点検記録で代用しない。PDF入力HTMLはignoredの `tmp/pdfs/catalog-197-*.html` で、再生成可能。

## 第3段階の再開

1. ユーザーの公開指示を確認し、この記録・RELEASE_CHECKLIST.md・SITE_HQ_HANDOFF.mdの数学的留保を読む。
2. 最新Git状態と差分を読む。第2段階開始時はmain、HEAD `74b07ccc3d9f8cbe7605da7239de332d24e62739`。ブランチ切替・reset・一括stageをしない。
3. 公開対象は `drafts/catalog-197/`、`public/diagrams/catalog-197/`、日英PDF、197用coordination、`src/data/site.mjs` の197追加、`src/data/pdf-editions.json` の197追加。共有PDF版情報には第2段階以前から別担当の差分がある。Git HEADからの差分全体を197変更と扱わず、stage2/*.beforeと比較して対象を切り出す。
4. 原稿/PDF/共通表示が変わっていなければ生成を繰り返さず、必要な最新検査後に対象差分をcommit/push。別担当成果を保持する。
5. GitHub Actionsのbuild/deploy成功を確認。公開サイトの日英197案内、4記事、32SVG/TeX、日英PDFの応答と内容・SHAを点検する。
6. 公開commit・URL・反映結果と数学的未確認事項を報告。第2段階のローカルHTTP検査を公開確認と呼ばない。

## 維持する数学的未確認事項

第1段階から拡張していない。LT79は出版社要旨の必要statementまでで、外部本文・誌面/PDF頁対応は未確認。確率評価・位相の場合分け・有限block全係数の完全独立再計算、有限処方の実行、外部証明の再帰検証は未実施。標数2Corollary7.4/type-F∞埋込みは確認済み主要結果に含めない。非sofic性は構成後の外部定理による帰結であり、逆向きの含意を追加していない。

公開前の制作上の未完項目はない。残作業は明示指示後の第3段階（commit・push・公開・反映確認）。これを数学的正しさの認定や専門家査読済みという意味での「完了」とはしない。
