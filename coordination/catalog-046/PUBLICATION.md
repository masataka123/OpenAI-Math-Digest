# カタログ046 公開確認

- 状態：**公開確認済み**。確認日時：2026-10-14T00:26:35.003379+09:00。第3段階の依頼に基づきcommit・push・Actions・公開反映確認を完了。
- 公開commit：`e885fdd775d0a16ed7414f208bbf2b0a3b18f88b`、ブランチ `main`。
- [GitHub Actions](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/38420104251) のbuild/deploy成功。

## 公開対象

- [日本語カタログ](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/046/)
- [English catalogue](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/046/)
- [日本語PDF・36ページ](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-046-ja.pdf)
- [English PDF・37 pages](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-046-en.pdf)
- 日英の公式順2記事、各言語10図（案内1＋四次元4＋曲面5）、各言語3章。

## 公開前の検査と対象分離

046だけを既存HEADへ加えた固定候補を `/private/tmp/catalog046-publication` に作成し、39テスト、引用検査、121ページbuild、138309内部リンク・素材参照、全冊子PDF版情報の整合を確認した。リンク検査は既存スクリプトのファイル読取りをキャッシュして実行し、判定内容を変更していない。日英PDFは第2段階で全73ページを画像点検した版のまま。

公開commitは173ファイル。共有4ファイルの046の差分だけをindexへ取り込み、067の登録・PDF版情報・テスト期待値の差分を作業ツリーに保持した。制作ルール類の既存変更も対象外。保護対象4913ファイルのバイト不変を確認した。ブランチ切替・他担当変更の巻戻しなし。

原典PDF・作業用HTML・大きな確認画像はローカルに保持し、このcommitには含めない。Web公開に必要な日英原稿、台帳、引用記録、図の生成元、20SVG＋20TeX、2冊PDFを含む。証拠はstage3/candidate.json、commit-scope.json、tests.log、citations.log、build.log、links.log、pdf-check.log。

## 数学的確認の限界

四次元論文の局所経路判定の全定数、全モデルの核整合性・一様双曲性、算術配置・ambient blowdownの全計算、曲面論文の全Frattini/Magnus・モノドロミー計算と完備代数の再構成は独立には完全検証していない。一部の外部原典の定理記述も未照合で、LP25/Milnor経由の照合と原論文自体の照合を区別する。詳細はREVIEW.mdとSTAGE2_HANDOFF.md、両記事末尾に保持。外部証明の再帰的検証・全証明の独立検証・専門家査読の認定は行わない。

## 公開後の反映確認

6 HTML（案内2・記事4）＋20 SVG＋20 TeX＋2 PDFの計48リソースがHTTP 200で、検査済み候補とSHA-256が全件一致。日本語36ページ・英語37ページのPDFも一致した。公開サイトの実ブラウザーで日英×1280/375pxのトップ・分野・案内・2記事の20条件と4操作経路を検査。実際のMathJax CDNを使用し、ページ横はみ出し・数式エラー・画像欠落・JavaScriptエラーなし。分野→案内→記事、言語切替時のアンカー維持、TeX取得、図の拡縮・全体表示、原典popup、一覧への復帰を確認した。

公開画面の代表画像を目視し、PDF導線、長い正式タイトル、AI注意書き、右上言語切替を確認。数学的な主張・図・PDFは第2段階の確認版と同じであり、公開操作に伴う内容改訂はない。証拠はstage3/actions-runs.json・actions-jobs.json・live-resources.json・live-browser.json・VISUAL_REVIEW.md、ローカル画像はstage3/screens/。

## 並行公開の追記

046公開後、別担当が067をcommit `1dc14d2d6483bfbf27c5f3da963b619d4e9dc93a` としてmainへ追加・pushした。046の公開対象分離と保全の記録は046のcommit時点を指す。067の公開作業を本担当の成果には含めない。公開確認記録はこの後続HEAD上へ046の文書だけ追加する。
