# カタログ074 第3段階 公開記録

ユーザーの「第3段階をお願いします」に基づき、本部/rootが公開作業を担当。新たな数学執筆・内容レビュー・サブエージェント起動は行っていない。第1段階のAstra/high担当記録はmodel-provenance.jsonを参照。

## 差分の限定と公開前検査

- ブランチmain、基点a9969c0182e03bbed780f5ed4881d3cd0610eef5。リモートmainとの一致を確認。
- git archiveから独立した公開候補を作成し、074専用ファイルとsite.mjs・pdf-editions.jsonの074追加だけを採用。168ファイル。shared-074.patch、candidate.json、commit-audit.jsonに記録。
- 公開commit：49470c7236da9e0b9e2393229f3a3dca7c4dbfad。通常pushでmainに反映。
- 39テスト、引用同期69レジストリ/248ファイル、191ページbuild、46版PDF整合性が成功。
- 内部参照233,430件の検査成功。手元のリンク検査は標準スクリプトのreadFileだけをキャッシュ化し、検査判定を維持。Actionsでは標準コマンドを実行する。
- 第2段階の101ファイルのhashを再照合し、すべて一致。PDFは再生成していない。図内リンク各40件の補完を保持。
- git diff --checkはPDFの構造上の末尾空白と生成ログの末尾空白で停止したため、それら2種を除外して再検査し成功。本文・コード・引用・TeX/SVGには空白警告なし。PDFのbytesは変更していない。
- 開始後に並行作業によるsrc/pages/[lang]/index.astroの変化を検知。074commitには含めず保持。他担当の制作ルール差分・原稿も含めていない。共通PDF管理の既存キー順は作業ツリーで保持し、commitでは既存値を変えず074のみ追加した。

## 公開反映確認

完了：2026-10-16T20:33:19.906324+09:00。Actionsのbuild/deployともsuccess。標準check:linksとcheck:pdfもsuccess。実行URL：https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/38892670923。

- 公開日英の案内・2記事・分野ページの8 HTML、SVG/TeX 28ファイル、PDF 2ファイルの計38件が、検査済み候補のSHA-256と完全一致。live-assets.json。
- 実際の公開CDN MathJaxで、案内・2記事×日英×1280/375pxの12画面条件を検査。数式エラー・横はみ出し・JavaScriptエラー・HTTP失敗・欠落アンカー・未展開トークンなし。
- 28回の図表示・fit・拡大・閉じる操作、12回の日英切替でアンカー保持、日英PDFリンクのHTTP 200、日英の分野入口を確認。screen-checks.jsonとlogs/live-browser.log。
- 76画面画像を保存。PC/375pxの全12冒頭画面をコンタクトシートで目視し、3D日本語PC図・4D英語モバイル図も個別確認。本文・図原本・PDFに追加修正なし。コンタクトシートは記録commitへ含め、個別PNGはローカル保存。
- 公開案内：[日本語](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/074/)／[English](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/074/)。PDF：日本語30頁、英語32頁、各3章7図。

## 維持する数学的な確認範囲

4D原典の[24, Lemma 2.3]と固定3D版Lemma 3.3の条件・結論の対応を確認済み。番号変更の版履歴は未調査。全技術証明や外部入力の全証明の独立認定ではない。4D §11の追加帰結は記事対象外。日英記事の確認範囲は変更していない。
