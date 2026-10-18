# カタログ197 公開・反映確認報告

第3段階完了。確認日時：2026-10-18T14:19:56.188305+09:00。担当root。ユーザーの「第３段階をお願いします.」を公開指示として実施した。

- 公開commit：`5f9ec8ad432ebcd3745af185c523d83ca390b581`（main）。
- [GitHub Actions build/deploy成功](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/39099005744)。2026-10-18 14:17:17 JST完了。全サイトの内部リンク検査を含み、開始から17分23秒。テスト・引用・build・links・PDFの全検査が成功した。
- [日本語カタログ](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/197/) / [English catalogue](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/197/)。
- [日本語PDF・51頁](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-197-ja.pdf) / [English PDF・54 pages](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-197-en.pdf)。各5章16図、2026-10-18版。

## 公開後の確認

- 日英トップ・Algebra分野・案内・公式順4記事の14HTML、32SVG、32TeX、2PDF、計80件が公開候補とSHA-256完全一致。`live-assets.json` / `logs/live-assets.log`。
- 公開URLを実Chromeで1280/375px表示、14ルート×2幅＝28表示。ページ横はみ出し・MathJax/JSエラー・欠落アンカー・重複ID・失敗HTTP応答0。
- 全16図×日英×2幅＝64回、図を開く・拡大・全体表示・閉じる操作を確認。引用を保持。全ルートの日英切替はアンカーを保持。案内の公式順4行・対応言語PDF導線を確認。`browser-checks.json` / `logs/live-browser.log`。
- 本部が日本語PC案内、英語375px案内、TF日本語主要主張、標数2英語375px図拡大を目視。第2段階の画面・紙面と公開実体が一致する。画像はローカル `screens/` に保持。
- 日本語PDF SHA：`be8a039fbc1f4ba93499f52fd26388d83f9404c44a1cf178131db407f1440263`。
- 英語PDF SHA：`fd84cbe8ceb27a2a8529c958d8422e76a4dbff3b50110259bc7feb3cf493b936`。
- PDFは第2段階点検済みのバイト列をそのまま公開した。全頁・全図紙面と各65図内引用リンクの点検結果は第2段階の記録を維持。再生成や内容改訂はしていない。

## 差分・検査・保持

公開対象だけをHEADに重ねた隔離候補で、テスト39件、引用74記録/268ファイル、205ページbuild、250,107内部参照、PDF48冊を検査してからcommitした（`logs/snapshot-*.log`）。共有登録の差分は197追加のみ。pdf-editions.jsonの他カタログは値も保持し、作業場にあった整形差分はcommitから外した。

開始時15,605ファイルを照合し、他担当のファイルの変更・削除なし。ブランチ切替・reset・一括stageなし。原典のダウンロード・レンダー画像・隔離HTMLはローカルに保持し、原典URL/版/SHA・点検記録・再現手順を公開commitへ収録した。最終確認記録は別の記録専用commit（`[skip ci]`）で保存し、公開コンテンツは変更しない。

Git全差分の空白検査は生成PDF/ログの末尾空白等を検出したため合格とは記録していない。共有ソース2ファイルの空白検査は成功。検証済みのPDFバイト列を空白修正しない。`staged-audit.json`。

## 数学的確認範囲と残作業

制作・公開の残作業なし。数学的確認範囲は第1段階から拡張していない。LT79は出版社要旨の必要statementまでで本文/頁対応は未確認。確率評価・位相の場合分け・有限block全係数の完全独立再計算、有限処方の実行、外部証明の再帰検証は未実施。標数2Cor7.4/type-F∞埋込みは確認済み主要結果外。記事の留保を公開版にも保持した。全証明の独立検証や専門家査読の完了とは呼ばない。

次の改訂時は公開commitと第2段階のPDF生成・図内注釈補完手順を起点とし、変更箇所に応じて再点検する。
