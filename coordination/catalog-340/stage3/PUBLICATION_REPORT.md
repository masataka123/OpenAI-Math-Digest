# カタログ340 公開・反映確認

2026-11-04、ユーザーの「第３段階をお願いします.」に基づき、サイト本部 `/root` が第3段階を実施した。指定モデル・思考量の根拠と取得限界は `../MODEL_PROVENANCE.json`。**公開・反映確認済み。必須の未完成・残作業なし。**

## 公開版と対象

公開内容commitは `publication-commit.json`。通常のmainへのcommit・pushで反映し、force push・履歴書換え・他担当成果物の削除は行っていない。公開差分は `commit-scope.json`、ステージ照合は `staged-audit.json`、実行結果は `commit.log` と `push.log` を参照する。公開後の検査記録は別の記録用commit（`[skip ci]`）で保存し、サイト内容を変えない。

第2段階の検査済み本文・図・日英PDFを同一性照合して再利用した。数学的な執筆・修正、図の再コンパイル、PDF再生成は行っていない。原稿版・原典URL・書誌とハッシュの台帳は `../inventory.json`、Astraの最終内容点検版は `../review/final-reviewed-files.json`、組込み後の対応は `../stage2/content-identity-final.json`。今回のクリーンな公開候補と第2段階の画面対象との一致は `release-html.json`。

原典PDF・抽出テキスト・画面画像・静的プレビュー・全作業場のbaseline/Git一覧は既存ローカル保存先に保持した。共有ファイルは340追加だけを含めた。保全結果は `preservation.json`。開始時からある無関係な未追跡ファイル全体のバイト検査は実施しておらず、Git状態の全パス比較と書込み範囲を確認した。

## Actionsと公開物

[GitHub Actionsの対象run](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/41789756729)で、公開内容commitに対するbuildとdeployの成功を確認した。取得原記録は `actions-run.json` と `actions-jobs.json`、所要時間はその記録から生成した `timing.json`。クリーンな公開候補での共通テスト・引用・ビルド・リンク・全PDF照合も成功し、`release-checks.json` と `release-*.log` に保存した。

公開URLから取得した日英トップ・分野・カタログ・記事、全TeX/SVG資産、日英PDFの計26資源がHTTP 200かつ検査済み公開候補とSHA-256一致。取得時点・URL・ハッシュ・結果は `live-resources.json` が原記録。PDFの版・ページ数・章数・図数は `../PREPARATION_REVIEW.md` とそこから参照する第2段階の機械記録を参照する。

| 成果物 | 日本語 | English |
|---|---|---|
| カタログ案内 | [340](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/340/) | [340](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/340/) |
| 個別記事 | [記事](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/nearby-lagrangian-counterexample/) | [Article](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/nearby-lagrangian-counterexample/) |
| 冊子 | [PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-340-ja.pdf) | [PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-340-en.pdf) |

## 公開画面と操作

実際のGitHub PagesとMathJax CDNを使い、共通の画面・図拡大・言語切替検査関数を呼び出した。日英×PC/375px×カタログ/記事の8条件が成功。文書幅、数式、画像、公式順4列表、PDF導線、記事の全4図の拡大・全体表示・閉じる操作と引用リンクの保持、スクロール後の言語切替とアンカー保持を確認した。結果は `live-browser/report.json`。公開画面の目視記録は `live-browser/VISUAL_REVIEW.md`。

初回の検査は日本語PCカタログの案内画像が読込み途中で、画像未完了として1条件が失敗した（`live-browser/report-initial.json`）。画像単体のHTTP 200と検査済み版との同一性は `guide-image-check.json`。画面内の画像が読込み完了するまで待つ処理を検査用スクリプトだけに加え、8条件を再確認した。サイト本文・共通実装・画像の変更や再deployは行っていない。

## 数学的確認範囲と今後

第1段階の別Astraによる内容点検結果と限界を維持する。原典の主張・証明経路と直接入力の記述・適用箇所を照合した範囲であり、全証明の独立検証・外部結果の証明の再帰検証・専門家査読を意味しない。WJRの参照版と2013年出版版の逐語比較、tube模型比較・corner rounding等の全技術、輸送の全cutoff評価等の未検証範囲は `../CONTENT_REVIEW.md` と公開日英記事に残っている。今回のビルド・画面・PDF・反映検査を数学的正しさの認定として扱わない。

依頼された3段階は完了。将来の改訂では `../SITE_HQ_HANDOFF.md` の「第3段階完了・今後の再開」に従い、変更された数学的内容を指定Astraへ返し、影響範囲だけ再確認する。公開済み同一版を理由なく再執筆・再生成しない。
