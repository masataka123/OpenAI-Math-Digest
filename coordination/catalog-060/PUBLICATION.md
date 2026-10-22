# カタログ060 公開記録

第3段階を進行中。ユーザーの「第3段階をお願いします.」を受領し、本部 `/root` が検査済みの060を公開する。モデル指定・担当境界は [MODEL_PROVENANCE.json](MODEL_PROVENANCE.json)、開始状態は [stage3/receipt.json](stage3/receipt.json)。

数学本文・案内・引用・図・PDFは、第2段階の確認済み版を照合して再利用する。[stage3/preflight.json](stage3/preflight.json)、[STAGE2_HANDOFF.md](STAGE2_HANDOFF.md) を参照。原典の再読・再執筆・PDFの再生成は行わない。

公開対象だけの隔離コピーで検査し、通常のcommit・pushで反映する。対象ファイルは [stage3/core-paths.txt](stage3/core-paths.txt)、検査は [stage3/release-checks.json](stage3/release-checks.json)。開始時の無関係な未追跡ファイルは一括追加しない。原典PDF・全文抽出等の取得キャッシュはローカルに保持し、公開用commitには含めない。画面・紙面等の証拠はサイト本体と分けて通常の追補commitで保存する。

公開後にActionsのbuild/deploy、日英の案内・記事・SVG/TeX・PDFの同一版の配信、公開画面の表示と操作を確認し、本書を完了記録へ更新する。

数学的な保留は [reviews/CONTENT_REVIEW.md](reviews/CONTENT_REVIEW.md) と記事末尾から変更しない。Donaldson原典Theorem 1、Harvey–Shiffman Theorems 3.9–3.10の完全な記述、Trudingerの帯上定式化、全解析評価・外部証明の独立検証は確認済みと扱わない。
