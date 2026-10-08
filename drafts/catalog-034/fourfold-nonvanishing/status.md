# fourfold-nonvanishing
- 担当: C
- 開始: 2026-10-08 13:43 JST
- 終了: 2026-10-08 13:50 JST（約7分、上限60分以内）
- 状態: 本部確認待ち
- 成果物: article.ja.md / article.en.md、sources.json、catalog-changes.md、diagrams/（3種×日英のTikZ・TeX・SVG、preamble、build.pyとdiagrams.json）
- 確認済み: 固定PDFのSHA-256一致。本文の固定反例・scalar次数・符号付き台・二因子の主要場合分け・有限データ・行列式・lcへの有理化を読解。MM両定理、LA五補題と独立Theorem 9.1、CT停止、GM判定、Hashizume還元の記述と使用箇所を照合。日英対応、本文数式のTeX構文、画像・引用定義、SVG XMLを確認。全6図を生成し欠字・はみ出しなし、全6図のPNGを目視確認。
- 未確認・申し送り:
  - Fujino Corollary 4.10の外部原記述は取得できず保留。
  - HMX、Ambro、generic semipositivity、旗の制限などの外部原記述、およびLAの全Frobenius証明は未照合・未検証。
  - MMの解析証明の残る確認事項は前稿を継承。切断持ち上げと非零切断の存在を分離して掲載。
  - LAの入力は独立した道具。supported liftingは非消滅後の帰結。共通データへの追加候補はcatalog-changes.mdに記録。
  - 共通コード・公開ページ・他担当原稿は変更せず、commit・push・公開は未実施。サイト統合・最終画面確認は本部へ。

## 閲覧用プレビュー追記（2026-10-08）

ユーザーの閲覧希望に対応し、本文から `preview.ja.html` / `preview.en.html` を生成。担当4記事間の移動、固定配置の日英切替、MathJax数式表示、SVG図の拡大リンクを設けた。日本語プレビュー4本をブラウザーで確認し、数式描画エラー0・全図読込成功。日本語第1記事の画面を `minimal-metrics-injectivity/preview.png` に保存。公開サイトの統合ではなくローカル閲覧用。数学本文・調査範囲は変更していない。

## 公開組込み（2026-10-08）

追加のユーザー指示「とりあえずアップロードしてください」により、別作業コピーで共通サイトへ組込み。日英本文・26図、原典と確認範囲を維持し、カタログ導線を追加。8テスト、21ページのビルド、523件の内部参照が成功。日英8ページの全数式が描画され、375px幅で横はみ出しなし・固定言語切替が表示されることを確認。公開ページは `/OpenAI-Math-Digest/{ja,en}/papers/fourfold-nonvanishing/`。先行する他担当の更新は送信前に取り込み、公開完了はGitHub Pagesのデプロイで確認する。

先行する窓口Bの公開commit `2d729cd` を保持して統合。統合後は8テスト、29ページのビルド、737件の内部参照チェックが成功。担当4本の本文と図、Bの4本、既存LA・Schnellのルートを共存させた。
