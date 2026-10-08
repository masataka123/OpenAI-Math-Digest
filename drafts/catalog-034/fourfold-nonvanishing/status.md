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

## 公開完了（2026-10-08）

追加のユーザー指示「とりあえずアップロードしてください」に従い、別作業コピー `/private/tmp/math-digest-worker-c-publish` で既存サイトへ組み込み、commit `c995de60cc40f86a4bb6a192869f9a6242c3d148` をmainへpush。先行する窓口Bの公開 `2d729cd` を保持。GitHub Actions run 37733582047 は成功し、日英8記事の公開URLがHTTP 200で応答。公開サイトの本文・数式・図も確認した。

- 公開日本語: https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/fourfold-nonvanishing/
- 公開英語: https://masataka123.github.io/OpenAI-Math-Digest/en/papers/fourfold-nonvanishing/
- 公開処理: https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/37733582047
- 検査: 8テスト、統合後29ページ、737件の内部参照。追加日英8ページは1280pxと375pxで数式描画エラー・ページ全体の横はみ出しなし。日英切替で節アンカーを保持。
- 統合: 共通のレイアウト・案内役・AI表示を使用。図中の引用をクリックでき、SVG拡大・TeX取得に対応。依存表を20件へ更新し、本文の前提・未検証範囲を維持。
- 本部への注意: 元作業フォルダの共通コードとローカルmainは先行作業を保護して更新していない。次回編集はremote mainを取得し、公開済みのB/C原稿とローカル未追跡原稿を照合してから行うこと。Aの公開はこの窓口では行っていない。

## Schnell形式への全篇統一編集

- 記録日時: 2026-10-08T15:21:07+09:00
- 最新指示により担当4篇の編集・検査・公開まで実施。旧1篇停止・本部公開限定の制限は撤回。
- 本文: 正式英語名、副題・導入、主要結果、引用キー、証明導入、図直後の番号付き説明、段落末の出典へ日英を統一。
- 再照合: Theorems 1.1 / Corollary 1.2, p. 2; Proposition 5.1, p. 14; (5.9)–(5.12), pp. 18–19; Theorem 7.1, p. 31。その他の初稿の照合記録と未確認範囲を保持。
- 本部共通表示commit: 51909924b0913511512ae3f11afa66710d5d75c7。独立checkoutへ取り込み済み。
- 状態: 本文編集・全図再生成完了。数式・画面検査と公開を継続中。

### 統一編集・公開前検査完了

- 記録日時: 2026-10-08T15:32:21+09:00
- 担当4篇の日英本文をSchnell形式へ統一。全26図を再生成・目視確認し、本文数式のTeX構文、引用・画像、SVG構文を確認。
- ブラウザー: 日英8ページを1280px / 375pxで確認。数式描画エラー0、ページ全体の横はみ出し0。PCで言語切替が証明節アンカーを保持することを確認。
- 公開前検査: 13テスト、29ページのビルド、757件の内部リンク・画像・アンカーに成功。
- 外部原典の確認範囲・未確認点は本文末尾とsources.jsonを参照。今回の書き換えを全外部定理の証明検証とはしない。
- 最新origin/main（5190992）を確認し、他担当と本部共通表示を保持。担当原稿・対応図だけを公開する。
