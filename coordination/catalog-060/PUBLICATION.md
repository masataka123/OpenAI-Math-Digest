# カタログ060 公開記録

第3段階を完了。ユーザーの「第3段階をお願いします.」に基づき、本部 `/root` が検査済みの060を公開し、反映を確認した。モデル指定・担当境界は [MODEL_PROVENANCE.json](MODEL_PROVENANCE.json)、開始状態は [stage3/receipt.json](stage3/receipt.json)、最終判定は [stage3/final-state.json](stage3/final-state.json)。

数学本文・案内・引用・図・PDFは、第2段階の確認済み版を照合して再利用する。[stage3/preflight.json](stage3/preflight.json)、[STAGE2_HANDOFF.md](STAGE2_HANDOFF.md) を参照。原典の再読・再執筆・PDFの再生成は行わない。

公開対象だけの隔離コピーで、全テスト・引用・ビルド・内部リンク・全PDF版照合が成功した。対象は [stage3/core-paths.txt](stage3/core-paths.txt)、検査は [stage3/release-checks.json](stage3/release-checks.json)。隔離コピーの初回検査では既存漫画の原画像がコピーから漏れていたため、追跡済み画像を補って再実行した。サイトの修正は不要だった。初回ログも履歴として保持する。

公開本文commitは [5841bfa](https://github.com/masataka123/OpenAI-Math-Digest/commit/5841bfab931d3169748d808c1251e414628dc31c)。通常のcommit・pushで反映し、[GitHub Actions](https://github.com/masataka123/OpenAI-Math-Digest/actions/runs/39742867929) のbuild/deployが成功した。[Actions原記録](stage3/actions-final.json)と[jobs](stage3/actions-jobs-final.json)を参照。

画面・紙面等の証拠はサイト本体と分け、送信量を抑えた通常の追補commitで保存した。[計画](stage3/evidence-plan.json)と[送信結果](stage3/evidence-pushes.json)を参照。追補は `[skip ci]` とし、公開した本文・図・PDF・共通実装を変更していない。原典PDF・全文抽出等の取得キャッシュはローカルに保持し、公開用commitには含めなかった。機械ログや原典READMEの行末空白等は原記録のまま保持し、[差分検査の記録](stage3/staged-whitespace.log)で区別している。

## 公開先と反映確認

- [日本語カタログ060](https://masataka123.github.io/OpenAI-Math-Digest/ja/catalog/060/) ／ [English catalogue 060](https://masataka123.github.io/OpenAI-Math-Digest/en/catalog/060/)
- [日本語記事](https://masataka123.github.io/OpenAI-Math-Digest/ja/papers/global-spherical-shells/) ／ [English article](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/global-spherical-shells/)
- [日本語PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-060-ja.pdf) ／ [English PDF](https://masataka123.github.io/OpenAI-Math-Digest/pdf/catalog-060-en.pdf)

日英のトップ・分野・カタログ・記事・接続先042、060のSVG/TeX・PDFを公開URLから取得し、HTTP応答・配信形式・検査済み版とのバイト一致を確認した。[live-resources.json](stage3/live-resources.json)を参照。042の記事本体は変更していない。

公開カタログ・記事の日英PC/375pxを、共通の表示検査・図ビューア・言語切替の処理で確認した。実際のMathJax CDNを使用し、共通4列表・PDF導線・数式・画像・ページ幅、図の拡大と全体表示・終了・引用保持、スクロール中の日英切替と共通アンカーが正常だった。[live-browser.json](stage3/live-browser.json)、[公開画面](stage3/screens/)、[目視の判定](stage3/visual-review.json)を参照。PDFの紙面は、第2段階の同一版の全ページ確認を参照し、再生成していない。

## 保存・保全・残作業

無関係な開始時の作業ファイルは一括追加せず、内容の同一性を照合した。[preservation.json](stage3/preservation.json)とその原記録を参照。060の内容点検済み本文・図・引用・PDFも変更していない。確認した数値・ハッシュ・ログは各原記録を参照し、本書へ再転記しない。

依頼された3段階の残作業はない。将来の改訂は、台帳・内容点検・本書を読み、数学的な変更をAstraへ戻す。同一版の図・PDFは照合して再利用し、変更の影響範囲だけ再検査する。

数学的な保留は [reviews/CONTENT_REVIEW.md](reviews/CONTENT_REVIEW.md) と記事末尾から変更しない。Donaldson原典Theorem 1、Harvey–Shiffman Theorems 3.9–3.10の完全な記述、Trudingerの帯上定式化、全解析評価・外部証明の独立検証は確認済みと扱わない。
