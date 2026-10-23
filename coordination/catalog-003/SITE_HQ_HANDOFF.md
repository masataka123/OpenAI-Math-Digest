# カタログ003のサイト組込み引継ぎ

## 段階と依頼範囲

第1段階の内容編集・独立内容点検・本部受領を完了し、2026-10-23にここで停止する。今回のユーザー指示は日英記事・TeX/SVG・引用記録・独立Astra内容点検・日英案内までで停止すること。サイト登録・日英冊子PDFは第2段階、公開と反映確認は第3段階の次の指示で進める。

作業先は /Users/iwai/Desktop/GitHub/OpenAI-Math-Digest。ブランチと開始時点のGit情報はgit-baseline.json。既存の多数の未追跡ファイルと他カタログの成果物を保持し、checkout/reset/commit/pushを行わない。

## 採用仕様・台帳・担当

- 制作セット1.4、2026-10-20モデル運用。共通見本は034の4列表、Schnellの証明表示、033 Orbifold Iitakaの文献案内。
- 公式名称・分野・公式順・参照版・URL・ページ数・SHA-256：inventory.jsonを唯一の台帳として参照。取得元記録はsources/acquisition.json、書誌的照合はvalidation/source-checks.json。
- 本部、数学の執筆2担当、独立内容点検のモデル・思考量・明示指定根拠：MODEL_PROVENANCE.json。実行時内部情報の取得限界も同記録に残す。
- 数学的内容修正は元のAstra担当へ返す。Sol本部は数学的な仮定・数式・結論・適用・日英の意味を変更しない。

## 成果物の入口

`drafts/catalog-003/` の次のフォルダを使用する。公式順はinventoryを参照する。

- quasi-riemann-seven-eighths/：日英article、sources、citations、status、図原本と生成物。
- quasi-riemann-eleven-twelfths/：同上。
- uniform-landau-siegel/：同上。
- overview/：日英案内、presentation、connections、引用・出典・構成判断・status。

各記事の読解箇所・入力適用・未確認はsources.json、初稿時間と編集はstatus.mdを参照する。公式一覧の説明タイトルとPDF本体の表題を混同しない。特に11/12稿を日付だけで7/8稿の改訂版とは扱わない。

## 内容点検と形式確認

独立Astra点検の最終受領はreviews/CONTENT_REVIEW.md、各記事・案内の詳細はreviews/の個別記録、確認版はarticle-content-manifest.jsonとoverview-content-manifest.jsonを参照する。原稿の主張を紹介することと、今回の主要帰着・直接入力・日英の照合を区別する。全外部証明の再帰検証や全原稿の正しさの認定は行わない。

本部の共通表示プレビュー、指定見本比較、図の目視と今回版の識別はvalidation/README.md、FORMAL_REVIEW.md、機械記録・画像を参照する。数値・ハッシュ・ログを本書へ転記しない。第1段階では共通引用検査をtext-onlyで実行し、図の生成manifestを照合する。publicコピーを要求する完全な引用検査は第2段階に実施する。

## 再開手順（第2段階の指示後）

1. 本書末尾の最終受領判定、reviews/の確認版、各記事のstatus/sources、inventoryとGit差分を確認する。完了した読解・執筆・数学点検を最初から繰り返さない。
2. inventoryのpaper ID・公式順・固定版を用い、共通のsite台帳・日英ルートへ登録する。overview/presentation.jsonをrenderCatalogInventoryへ渡し、共通CatalogMarkdownOverviewを使う。既存カタログ専用の分類・節数をコピーしない。アンカーは内容点検済みarticleGuidesとローカル生成HTMLを照合して保持する。
3. 図のcitation-build.jsonで原本・生成物を照合してpublic/diagrams/catalog-003/へ配置する。原本・引用・生成条件が同一なら再コンパイルしない。
4. 案内の図前文献案内は共通loadCitationsを使う `node drafts/catalog-003/overview/sync-reference-guide.mjs --check` で照合する。sourceやregistryを変更したときは同ヘルパーと共通引用同期を適用し、数学的変更はAstraへ返す。日英冊子PDFをサイト本部が生成し、カタログ冒頭へ各言語の導線を配置する。冊子とPDF版台帳は共通手順を使う。現在は未生成。
5. 共通の `npm run catalog:prepare -- --catalog 003` を実行する。環境の場所はvalidation/environment.json、必要時はtmp/pdf-runtime.jsonを参照する。通常は強制PDF再生成を付けない。
6. 実行ごとのHANDOFF/report・画像一覧を読み、REVIEW_ENTRYからPREPARATION_REVIEWへ今回版・実担当・目視と指定見本比較・PDF紙面・残作業・判定を追記する。旧確認を新版へ自動承継しない。
7. 第2段階の結果を報告して停止する。公開指示後にだけ第3段階の対象commit/push・Actions・公開反映を確認する。

## 未実施

サイト組込み、公開用資産の配置、日英冊子PDF、PDF版情報更新、公開前の実サイトルート検査、commit/push、Actions、公開反映確認は未実施。これらを第1段階の成果物完成やローカル表示成功と混同しない。


## 第1段階の最終受領

状態：内容編集済み。日英3記事・全図TeX/SVG・引用/出典・独立内容点検・日英案内・共通4列表・比較図・構成判断・引継ぎが揃った。内容の確認範囲と未確認はreviews/CONTENT_REVIEW.mdと個別記録を参照する。全主張・全証明の正しさを認定した状態ではない。

本部の4必須項目、指定見本との比較、版同一性、画面・図の確認はvalidation/FORMAL_REVIEW.md。機械結果はtechnical-check.json、final-screen-checks.json、diagram-checks.json、generation-refresh-check.json、citation-check.log、overview-guide-check.logへ集約する。過去の確認を新版へ自動承継せず、最終生成物との同一性を照合済み。

残る数学的確認は、199ページ稿の全再帰/検出器/尾部評価、49ページ稿の全変換・一様性とCorollary 1.2の外部明示公式・有効一様定数、LS稿の補助数値評価の全独立再計算等。各記事に明示した範囲を第2段階でも維持し、表示検査の成功で解消したことにしない。

次の操作はユーザーの第2段階指示後のサイト組込み・日英冊子PDF・共通catalog:prepare。PDF担当はSolサイト本部。現在は日英とも未生成。公開準備完了/公開確認済みとは報告しない。
