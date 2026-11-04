# カタログ340 第3段階

ユーザーの2026-11-04「第３段階をお願いします.」を公開指示として、340のcommit・push・Actions・公開反映確認を行う。本部のモデル指定はMODEL_PROVENANCE.jsonを参照する。

第2段階の本文・図・日英PDFを照合し、同じ版を再利用した。数学的な再執筆、図の再コンパイル、PDF再生成は行わない。数学的な確認範囲はCONTENT_REVIEW.mdのまま維持する。

公開対象は340の記事・案内・引用/出典・TeX/SVG原本と生成物・日英PDF・台帳と制作/検査記録、共有ファイルの340追加だけ。commit-scope.jsonに選択ファイルと同一性を記録した。原典PDF・抽出テキスト・画面画像・静的プレビュー・共有ファイルのbaselineコピー・全作業場のGit一覧・raw共通実行フォルダは、既存のローカル保存先に保持し、公開commitから除外する。無関係なカタログや未追跡成果物を削除しない。

公開候補だけをHEADへ重ねたtmp/catalog-340-releaseで、共通のテスト・引用・ビルド・リンク・全PDF照合を実施し、成功した。第2段階の確認対象HTMLとの一致はrelease-html.json。工程結果とログはrelease-checks.json、release-*.log。ブランチは切り替えず、通常のmainへのcommit・pushを使う。

公開後はActionsの該当run/jobs、日英トップ・分野・カタログ・記事・全図資産・PDFのHTTPとSHA-256、実ブラウザーの表示・言語切替・図拡大・PDF導線を確認する。結果はPUBLICATION_REPORT.mdへ記録し、検証記録だけの後続commitには[skip ci]を用いる。
