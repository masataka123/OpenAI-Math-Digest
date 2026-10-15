# カタログ039 公開・反映確認

本部root。完了：2026-10-15T16:24:12.197599+09:00。ユーザーの第3段階依頼に基づき、mainでcommit・pushと公開反映確認を完了した。

- 公開commit：`9b35972f17d2e92a938731752f2bae86809a00de`（252ファイル）。変更範囲は`stage3/commit-scope.json`。
- [GitHub Actions](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/38697184496)：build・deployとも成功。
- [日本語案内](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/039/)／[English](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/039/)。公式順4記事を日英で公開。
- [日本語PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-039-ja.pdf)：52ページ。[English PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-039-en.pdf)：57ページ。2026-10-15版、各5章13図。

## 検査

公開するファイルだけをHEADへ重ねた隔離ツリーで39テスト、引用47群170ファイル、135ページbuild、159,867内部参照、全30PDFの整合性を確認した。リンク検査は既存検査のHTML読み込みをキャッシュした同じ判定を使用。元の検査は第2段階とActionsで実行済み。ログの保存時に行末空白だけを正規化した。

公開URLの68リソース（案内2＋記事8＋トップ・分野4＋SVG26＋TeX26＋PDF2）はすべてHTTP200、候補buildとSHA-256一致。日英の28表示条件（1280px／375px）と8導線操作を実ブラウザーで確認。実際のMathJax CDNを利用し、数式エラー・画像欠落・ページ横はみ出し・JavaScript例外・失敗リクエストはなし。言語切替のアンカー、図拡大、TeX取得、記事から一覧へ戻る操作を確認。図中引用はポップアップ先URLの検査であり、応答を置き換えて確認している。外部原稿の内容は第1段階の範囲を引き継ぐ。

PDF SHA-256：
- ja：`05ad9097646538d020efa2cfb01aaa4ac33c5bf8fa142688098c2dad49bcc8da`
- en：`9d4756ab85533d9e19d3eea28f4a9b0bd2be212a4000bea27ff314bf5b5ae57b`

第2段階で目視済みの全109ページと同一のPDFが公開された。画面・図の比較と確認範囲はFORMAT_REVIEW.md、STAGE2_REPORT.md、stage3/VISUAL_REVIEW.md。数値検査だけで紙面を目視済みと扱っていない。

## 保存・保留

作業先は`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、ブランチmain。039原稿／図／引用／台帳／確認記録／日英PDFと、共有4ファイルの039登録差分だけを公開した。他担当の未コミット変更は保持し、作業開始時の追跡済み4,911ファイルは内容不変（stage3/preservation.json）。原典ダウンロード・画面画像・中間生成物はローカルに保存している。

数学的保留：Chow49原著の定理記述・番号・正確な該当ページの照合。全証明の独立検証・専門家査読・形式証明の完了は主張しない。詳細はCONTENT_REVIEW.md。

第3段階は完了。追補する場合は本記録・CONTENT_REVIEW.mdを読み、039の該当原稿／引用記録を更新して必要な図・日英PDFと公開検査を再実行する。今回の公開確認記録のみの保存commitには`[skip ci]`を付け、公開内容は上記commitのままとする。
