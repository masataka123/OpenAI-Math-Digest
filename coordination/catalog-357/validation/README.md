# カタログ357 第1段階の表示QA

担当: 本部継承モデル。技術表示QAのみ。数学記事の執筆・内容点検ではない。

書込範囲はこのvalidationディレクトリのみ。src/public/設定/別カタログを変更せず、サイト登録・冊子PDF生成・commit/pushは行わない。

## 再現コマンド

作業ディレクトリ: `/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`

```sh
export PATH="/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH"
node coordination/catalog-357/validation/build-preview.mjs
node coordination/catalog-357/validation/capture-preview.mjs > coordination/catalog-357/validation/capture-preview.log
python3 coordination/catalog-357/validation/check-preview-links.py > coordination/catalog-357/validation/preview-links.log
node coordination/catalog-357/validation/validate-stage1.mjs > coordination/catalog-357/validation/stage1-checks.log
```

画面撮影は既存Playwright依存とGoogle Chromeのヘッドレスモードを使用。通常のサンドボックスではChrome起動がSIGABRTになったため、ローカル表示検査として実行権限を上げて実行した。Web公開・外部送信はしない。MathJaxは既存node_modulesのローカルファイルを使用。

## 共通表示の適用と見本

- `src/lib/render-draft.mjs`（内部でarticle-structure.mjsを使用）、`src/lib/catalog-inventory.mjs`、共通CSSを読取専用で使用。
- 新規原稿は `drafts/catalog-357` から生成。記事・図の編集は行わない。
- 034カタログ、034 Schnell、033 Orbifold Iitakaは既存distから比較専用プレビューを生成。既存数学原稿を新規制作の根拠にしない。
- 見本ソースとCSSのハッシュを `reference-manifest.json` に記録。
- 新規ページはプレビュー内のみリンクを書き換え、公開URLや登録を変更しない。
- `validate-stage1.mjs` は共有の引用本文検査・guide検査・renderDraftを未登録357へ局所適用し、citation-buildの全入力/出力SHAを照合する。公開コピーを必須とする通常のfull check:citationsは第2段階で行う。
- 画面数値は `screen-checks.json`、目視画像は `screens/`、内部参照は `preview-link-checks.json` に記録。

## この検査の限界

第1段階の静的プレビューであり、Astroへの実登録・公開版・日英冊子PDFの検査を代替しない。言語切替はプレビュー内の局所ファイルリンクのみを確認し、言語切替・公開ルートの実動作は第2段階で再確認する。数学的な主張、入力定理の妥当性、外部証明の検証は別担当。外部URLの全件HTTP到達性はこの局所リンク検査の対象外。

最終の実施結果と目視比較は `REPORT.md` に記録済み。原稿・生成図の受領後に新規357の日英記事/案内と指定見本を検査した。
