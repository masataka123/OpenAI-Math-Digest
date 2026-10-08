# 窓口A — カタログ034の4本の原稿

博士院生以上・研究者向けの日本語・英語の概説です。主定理と仮定、引用付きTeX証明図、その直後の説明、外部入力、原典・確認範囲を掲載しています。

| 034内の順番 | 論文 | 日本語 | English |
|---|---|---|---|
| 10 | Uniform Pluricanonical Iitaka Fibrations | [本文](article.ja.md) | [Article](article.en.md) |
| 07 | Lifting sections from the reduced support of an adjoint | [本文](../lifting-adjoint-sections/article.ja.md) | [Article](../lifting-adjoint-sections/article.en.md) |
| 13 | Uniform effective log Iitaka fibrations for fourfolds | [本文](../effective-log-iitaka-fourfolds/article.ja.md) | [Article](../effective-log-iitaka-fourfolds/article.en.md) |
| 14 | Abundance after nonvanishing for compact Kähler fourfolds | [本文](../abundance-after-nonvanishing/article.ja.md) | [Article](../abundance-after-nonvanishing/article.en.md) |

各フォルダの `sources.json` に原典版・証明箇所・直接入力・未確認点、`status.md` に作業記録、`catalog-changes.md` に本部向けの修正候補があります。`diagrams/` に日英のTeX/TikZ原本と生成済みSVG・PNGがあります。

## 閲覧版

各フォルダの `preview.ja.html` / `preview.en.html` は本文とSVG図を埋め込んだ閲覧版です。4フォルダの配置を保ってダウンロードし、ブラウザーで開くと記事・言語を切り替えられます。数式表示はMathJaxのCDNへの通信を使用します。GitHubのファイル画面ではHTMLそのものが表示されます。

リポジトリのルートで `node drafts/catalog-034/uniform-pluricanonical-iitaka/serve-preview.mjs` を実行すると、このMac/PCだけで使う閲覧用URLを出力します。HTMLの再生成は依存パッケージをインストールした環境で `node drafts/catalog-034/uniform-pluricanonical-iitaka/build-preview.mjs` を実行してください。

## 本部への申し送り

2026年10月8日の追加指示により、担当4篇をSchnell形式に改訂し、本部の共通表示を使って公開します。各revision-review.mdに再照合範囲と留保を記録しています。記事が紹介する著者の主張と編集側の確認範囲を区別しており、全証明の正しさの認定や独立検証を意味しません。

## Schnell形式の公開（2026-10-08）

担当4篇の日英改訂をcommit `0d3ae7a1bbfc88215cc467d163d83a97b854196c`でmainへ反映。GitHub Actions成功、公開日英8ページで表示確認済み。

- [uniform-pluricanonical-iitaka](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/uniform-pluricanonical-iitaka/)
- [lifting-adjoint-sections](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/lifting-adjoint-sections/)
- [effective-log-iitaka-fourfolds](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/effective-log-iitaka-fourfolds/)
- [abundance-after-nonvanishing](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/abundance-after-nonvanishing/)
