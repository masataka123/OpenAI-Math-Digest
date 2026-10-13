# カタログ067 公開確認

**公開確認済み。** 確認日時：2026-10-14T00:33:03.730085+09:00。ユーザーの「第3段階をお願いします」に基づき、本部がサイト公開と反映確認を実施した。

- 公開commit：`1dc14d2d6483bfbf27c5f3da963b619d4e9dc93a`、ブランチ`main`。
- [GitHub Actions](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/38420559969)：build / deployとも成功。
- [日本語カタログ](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/067/) ／ [English catalogue](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/067/)
- [日本語PDF・20頁](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-067-ja.pdf) ／ [English PDF・23頁](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-067-en.pdf)

正式名称は The Campana–Peternell conjecture in dimension six。公式順の案内と単論文の記事を日英で公開し、各言語6図のSVGとTeXを配置した。冊子は各2章6図。数学的本文・図・冊子は第2段階で点検した版と同じで、追加の内容編集・PDF再生成は行っていない。

## 検査

公開前の固定候補で39テスト、引用42記録・150ファイル、125ページbuild、143927内部参照、全28PDFの整合性検査が成功。内部リンク検査は固定候補に限りファイル読込みをキャッシュして、既存check-links.mjsを実行した。CIの通常コマンドも成功した。

公開後は日英トップ・分野・案内・記事の8HTML、12SVG、12TeX、2PDFの計34リソースでHTTP 200と検査済み候補とのSHA-256一致を確認した。日英1280/375pxの16画面では実CDNのMathJaxを使い、ページ横はみ出し・数式エラー・破損画像・JavaScriptエラーなし。2操作経路で分野→案内→記事、日英切替と証明アンカー保持、TeX取得、図の拡大・縮小・全体表示、図中引用の原典popup URL、案内の該当行へ戻る操作を確認した。

証拠：stage3/tests.log、citations.log、build.log、links.log、pdf-check.log、actions-runs.json、actions-jobs.json、live-resources.json、live-browser.json、VISUAL_REVIEW.md。公開画面はstage3/screens/にローカル保存。全43頁・全12図の紙面点検は第2段階のstage2/pdf-review/とstage2/VISUAL_REVIEW.mdに記録し、今回は公開PDFが同じハッシュであることを確認した。

## 変更範囲と保持

046の公開commit e885fddを起点に067の141ファイルをcommitした。共有4ファイル（site、PDF版情報、分野一覧を検査する2テスト）は067追加分だけ。制作ルール類11ファイルの未コミット変更と、他カタログの作業資料を保持した。ブランチの切替や他担当の変更取消しは行っていない。stage3/commit-scope.json、preservation.json参照。

原典PDF・抽出全文・作業HTML・大きな画面／紙面画像はローカル検証資料として保持し、公開commitに含めていない。公開用の原稿・生成元・引用・SVG/TeX・日英冊子はcommit済み。公開確認の追記は記録専用commitとして保存する。

## 数学的な確認限界

[CONTENT_REVIEW.md](CONTENT_REVIEW.md)の確認範囲を維持。Griffithsの相対Hodge–de Rham同定の原典、GAGA等の標準入力の原証明、Alekseevskii–Perelomovの1986年原典は未照合。Fischer–Grauertと正KE計量は再掲で確認した。036・052等との追加の包含・一般化関係は未調査。内容点検は単独の自己点検であり、全証明の独立検証・専門家査読ではない。
