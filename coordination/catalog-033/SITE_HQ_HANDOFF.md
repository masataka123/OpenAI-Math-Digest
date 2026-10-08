# サイト全体本部への033引き継ぎ

2026年10月8日更新。担当A〜Dの5篇を受領し、033本部で**総括の日英本文、接続図、全5篇の日英統一編集、ローカル表示確認まで完了**した。共有コードの変更・サイト登録・Git操作・公開は行っていない。

成果物、結果単位の接続、残る確認事項、共通機能への要望は [SYNTHESIS_HANDOFF.md](SYNTHESIS_HANDOFF.md) に集約した。

- 総括：[日本語](../../drafts/catalog-033/overview/article.ja.md)／[English](../../drafts/catalog-033/overview/article.en.md)
- 全5篇の日英記事一覧：[総括の公式順一覧](../../drafts/catalog-033/overview/article.ja.md)
- 確認した接続：[connections.json](../../drafts/catalog-033/overview/connections.json)
- 書誌・版・PDFハッシュ：[inventory.json](inventory.json)
- 表示・数式・リンクの検査：[validation.json](../../drafts/catalog-033/overview/validation.json)

## 共通機能に必要な対応

既存の数式、定理、図、引用の表示を使う。共通CSSの追加要望は現時点ではない。

1. `CatalogDraftArticle.astro` と `render-draft.mjs` の034固定読込先・図／TeXパス・catalog番号・全篇数・戻り先をcatalog別にする。
2. `site.mjs`、記事／分野ルート、catalogページ、ReadingGuideに033・公式順5篇・033の総括を登録する。原典commitは033と034で分ける。
3. `CatalogDependencies.astro`と関連データに結果単位の033内／033↔034接続を反映する。前提・別証明・背景を直接依存と混ぜない。
4. 草稿内のSVG52枚と同名TeXを配備し、正式レイアウトの言語切替、図の拡大、AI注意書き、原典案内、MIT帰属を確認する。

詳細な対象・用途・注意点は [SYNTHESIS_HANDOFF.md](SYNTHESIS_HANDOFF.md) の「全体本部への共通機能の要望」にある。

## 持ち帰り用の連絡文

```text
カタログ033の総括と5篇の日英記事の統一編集が完了しました。
coordination/catalog-033/SYNTHESIS_HANDOFF.md に、総括・記事一覧・確認した12入力・残る未確認事項・共通機能への要望をまとめました。
記事は「目標 → 引用付き図 → 番号付き説明 → 得られた結果の使い道」に揃え、長い議論の全体図を保持・追加しています。直接依存、帰結・追加結果への入力、条件付き前提、別証明、類似手法、背景を区別しました。
ローカル12ページの日英、PC／スマートフォン幅を確認済みです。共有コード・Git・公開には触れていません。
掲載時には034固定パスのcatalog別対応、033の登録・導線、接続データ、図の配備が必要です。共通CSSの追加要望はありません。034の参照版を変更せず、統合後の実サイト検査をお願いします。
```
