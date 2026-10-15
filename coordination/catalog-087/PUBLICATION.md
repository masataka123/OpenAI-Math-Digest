# カタログ087 公開確認

確認日時：2026-10-15T22:49:52.018673+09:00。ユーザーの第3段階依頼に基づき、commit・push・GitHub Pages反映確認まで完了。

- 本文公開commit：`4a50cc8854f1f3c9669199b356c4d1e5d78291b4`。作業ブランチmain。
- [Actions build / deploy成功](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/38742533184)。配信commit `6aa567296d095899d398f96fce58337e5688e910`。087単独run 38742059034は待機中に後続285のpushで置換され、この後続runが087を含め配信した。
- [日本語案内](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/087/) / [English guide](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/087/)。各案内から公式順3記事へ移動できる。
- [日本語PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-087-ja.pdf)：53ページ、4章、16図。
- [English PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-087-en.pdf)：56ページ、4章、16図。

## 公開前と公開後の検査

公開予定のGitツリーで39 tests、175ページのbuild、62引用レジストリ・222ファイル、211,472内部リンク/資産、全42冊のPDF照合が成功。公開基点は先行して公開された287を含むcfe584d。087の本文8ページは第2段階の確認済みmain HTMLと一致し、commit内の成果物も検査対象と一致。

公開後は74リソース（案内・3記事の日英HTML8、SVG32、TeX32、PDF2）をHTTP200で取得し、HTMLを含む全74リソースのSHA-256一致を確認。公開URLの16表示条件（日英・1280px/375px）でページ横はみ出し・MathJaxエラー・リンク欠落0。図拡大・閉じる・引用保持、右上の言語切替・スクロール中の表示・アンカー保持、PDF導線を確認。

詳細：stage3/public-resource-checks.json、site-checks.json、actions.json、actions-jobs.json、commit-tree-check.json。画面画像はローカルstage3/screens/に保存。

## 保持した範囲

第1段階のAstra執筆・別担当点検、原典固定版、日英の仮定・結論・引用・全32図を維持。第3段階で数学的本文は改稿していない。全証明の独立再構成、一般版Appendix A/Bの有理証明書・補間・尾部評価の全再実行、外部定理の全証明・再帰的依存の検証は未実施で、記事末尾とCONTENT_REVIEW.mdに明記した。公開検査成功は数学的正しさの認定ではない。

共有作業先の制作仕様・285等の未コミット差分を保持。087登録だけを選択してcommitし、他担当の変更は取り消していない。公開確認記録は本文を変えない別commit（skip ci）で保存する。
