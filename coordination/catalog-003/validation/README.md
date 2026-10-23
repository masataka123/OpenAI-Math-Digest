# 第1段階の形式・表示確認

本部は数学の内容を修正しない。内容確認は../reviews/と各記事のsources/statusを参照する。

## 原典と担当

- 固定原典・書誌：../inventory.json、../sources/acquisition.json。
- 原典の同一性・公式順・公式overviewの書誌的目視：source-checks.json、official-overview-p2.png。
- モデル指定：../MODEL_PROVENANCE.json。設定が明示受理された事実と、非公開の実行情報を区別する。
- 共有ファイル保護：shared-baseline.jsonを最終時点と照合する。

## ローカルプレビュー

build-preview.mjsとcapture-preview.mjsは先行第1段階の検査ハーネスを機械的に適用したもの。既存のrenderDraft、renderCatalogInventory、articleStructure、共通CSS、scripts/browser/inspect-page.mjsを使う。公開用ルートの登録、src/public編集、サイトビルドは行わない。dist内の見本は読み取り専用で、元ファイルと共通CSSの同一性はreference-manifest.jsonを参照する。

Nodeの場所は../README.md。リポジトリルートで次を実行する。

```sh
node coordination/catalog-003/validation/build-preview.mjs
node coordination/catalog-003/validation/capture-preview.mjs
```

Chromeには専用の一時プロファイルを用いる。sandboxで起動できなければ許可されたexecのエスカレーション手順を使う。MathJaxはローカル依存を使う。これは公開時のCDN確認やスマートフォン実機試験ではない。

見本：034共通4列表、Schnellの主張・証明対象・図と直後の説明、033 Orbifold Iitakaの文献案内。日英PC/375pxのreference-screen-checks.jsonとscreens/を保持する。原稿受領後は同じ表示系で比較し、今回版の確認結果をFORMAL_REVIEWへ記録する。

## 引用・図

第1段階では各記事のレジストリへ共通check:citationsを--text-onlyで実行する。TeX/SVGと原本の同一性はcitation-build.jsonを照合する。通常の非text-only検査が要求するpublicコピーは第2段階で配置し、その後に完全な共通検査を行う。公開コピー未配置を生成漏れの成功扱いにはしない。

## 第2段階へ残す確認

サイト登録・公開用図配置・日英冊子PDF生成後に、共通のnpm run catalog:prepare -- --catalog 003を使う。日英サイトの実ルート、CDN、図の拡大UI、内部リンク、PDF、言語切替を検査する。今回のプレビュー結果を公開準備完了とは扱わない。
