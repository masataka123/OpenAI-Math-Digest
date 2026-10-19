# カタログ356 第3段階公開記録

- 公開指示：2026-10-19のユーザー「第3段階をお願いします」。
- 基準HEAD：be0ef01ea65a56649d5ff2907c411fcf5b040d39、main。
- 公開対象：公式順2記事の日英本文、総括、9図の日英SVG/TeX、原典/引用/点検記録、356サイト登録、日英PDFと356版情報。
- 他担当の357、共有制作ルール、他カタログの未コミット差分は公開対象から除外し、作業場に保持。
- 公開対象だけを/private/tmp/math-digest-release-356へ複製して検査。39テスト成功、完全引用検査成功、211ページbuild、全登録PDF現行性検査成功、内部参照検査成功。ログはstage3/。
- 日英PDF：日本語34ページ／英語36ページ、各3章9図。第2段階で点検済みのファイルを変更せず配布。
- 数学的留保：全証明の独立再証明は未実施、AKPの2026-09-24 snapshotとの同一性は未確認。本文・PDFの留保を保持。
- 公開commit：`1b9166a26ed02cd6d66c91f95d67d32beb55bdb6`。mainへ通常push済み。
- Actions：https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/39182430182。build/deployとも成功。
- 公開反映：2026-10-19T01:05:06.172478+00:00に10ページHTTP成功、SVG/TeX/PDF計38ファイルを取得し全件SHA/バイト一致。日英6ページの実ブラウザー375pxで数式・図数・PDF導線・注意書き・スクロール後の言語切替/アンカー保持を確認。
- 日本語案内：https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/356/
- 英語案内：https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/356/
- 日英PDF：https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-356-ja.pdf 、 https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-356-en.pdf
- 証拠：stage3/deployment-summary.json、public-check.json、public-browser.json。
- 作業場の既存146ファイルは356公開commit時点で不変。その後、別担当が357をcommit/pushしたことを確認。357をこちらの公開commitへ混入していない。
- 第3段階完了。未確認の数学的範囲は本文・PDFに保持。
