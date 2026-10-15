# Catalogue 187 — 第3段階公開・反映確認

状態：**第3段階完了。commit・push・Actions成功・公開反映を確認済み。**

確認時刻：2026-10-15T11:48:39.045775+00:00

- ブランチ：main
- 公開commit：f837bf8fe6b2e4116ee1b72f47b2949038424b3f
- Actions：https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/38727474829
- 採用原稿：Astra新稿（gpt-6-astra / high）の第2段階確定成果物。旧Sol稿は不採用。
- 第2段階の54成果物のハッシュを照合。数学本文、TeX/SVG、日英PDFの追加変更なし。
- 公開対象だけの固定ツリーで39テスト、引用54台帳／194ファイル、155ページのビルド、183,482内部リンク・資産、全PDF台帳・内容・ファイルハッシュ検査が合格。
- 先行246公開commitを履歴として保持。今回の差分は187専用ファイルと共有台帳の187登録のみ。共通ルール・他カタログの未commit作業を保持。
- 変更一覧：COMMITTED_FILES.txt。公開前検査：logs/。選択根拠：selection.json。

## 公開先

- 日本語案内：https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/187/
- 英語案内：https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/187/
- 日本語記事：https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/snaky-in-21-maker-moves/
- 英語記事：https://masataka123.github.io/OpenAI-Math-Digest/en/papers/snaky-in-21-maker-moves/
- 日本語PDF：https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-187-ja.pdf
- 英語PDF：https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-187-en.pdf

## 確認範囲

全証明書の手検算、専用局所応手suite、全中間集合突合、方策の対局実行、探索、Lean監査・コンパイル、25／35手経路・Proposition 7、他カタログ関係は未実施。公開検査を数学的な独立レビューや全計算の再現確認とは呼ばない。詳細はCONTENT_REVIEW.mdとCOMPUTATIONAL_REVIEW.md、および日英本文・PDFに記載。

## 公開反映の検査結果

- Actionsのbuild・deployがともにsuccess。全テスト、引用、ビルド、リンク、PDF検査をGitHub上でも通過（actions-jobs.json）。
- 日英の案内・記事・組合せ論分野ページ、SVG 8点、TeX 8点、PDF 2点の計24 URLがHTTP 200。18資産のSHA-256が確定版と完全一致（live-http.json）。
- 公開サイトの日英・1280px／375pxの計8ケースで横はみ出し、MathJaxエラー、欠落アンカー、重複ID、JavaScriptエラー、画像欠落なし。拡大図16回、読書導線16回、PDF取得、sourcesアンカーを保った言語切替を確認（browser.json、screens/）。
- 日本語モバイル冒頭・英語PC案内・日本語有限盤図・英語モバイル拡大図を目視確認。全PDF43ページと全図の詳細な目視確認は第2段階の記録を継承し、今回の配信バイト一致で接続。
- 初回のブラウザ検査では共通キャラクター画像の読み込み完了前に画像欠落判定が出た。画像decodeを待つよう検査を修正し、全8ケースを再実行して合格。初回結果も保存。サイト本体の修正は不要。
- Pythonのローカル証明書ストア不足による取得失敗は、証明書検証を有効にしたOSのcurlに切り替えて解消。GitHub未認証APIのレート制限後はGitHub接続ツールで対象runの最終結果を取得。
- 配信後の記録commitは[skip ci]で保存する。公開本文・図・PDFは公開commit f837bf8のまま。並行担当の246公開確認commit c1a1aa6も保持する。

## 引継ぎ

公開工程の残作業はない。数学的な追加検証は上記未確認事項を別作業として扱う。更新時は現行Astra稿と第2段階の修正済み図を基準にし、図の再生成には現行diagrams/render.pyを用いる。共通ルール・他カタログの未commit差分は残してある。
