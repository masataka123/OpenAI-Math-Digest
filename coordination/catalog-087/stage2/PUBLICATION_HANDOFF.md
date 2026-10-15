# 第3段階への再開手順

第2段階は完了。2026-10-15のREPORT.md、検査ログ、紙面・画面証拠を参照。現在の許可は公開前までであり、commit・pushは未実施。

1. ユーザーから第3段階の公開指示を受けてから再開する。AGENTS.md、PROJECT_PLAN.md、最新git statusを読み、mainのまま他担当変更を保持する。
2. `stage2/baseline.json`、`preservation.json`、`changed-files.txt`と最新の差分を比較する。対象は087のdrafts/、coordination/、public/diagrams/、日英PDFと、site.mjs/pdf-editions.jsonの087登録部分。共通ファイルには他担当の未コミット変更があるので、ファイル単位で無関係な変更をまとめてcommitしない。
3. 日英本文・引用・図は第1段階のAstra完成稿。原稿再制作は不要。数学的変更が必要になった場合だけAstraの執筆・内容点検へ戻す。make-records.pyは後続修正を上書きし得るため実行しない。
4. 最新サイト全体をビルドして引用・テスト・リンク・全PDF照合を再確認する。並行ビルドがあれば別outDirを使い、同じ固定出力を検査する。今回の最終出力は `/private/tmp/math-digest-087-final/dist`。この一時出力の恒久保存は保証しない。

```bash
export PATH=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH
node scripts/sync-citations.mjs --check
node --test scripts/*.test.mjs
node node_modules/astro/astro.js build
node scripts/check-links.mjs
node scripts/build-catalog-pdf.mjs --check
```

5. 内容が変わらなければPDF再生成は不要。必要な場合は087のみ生成する。`XDG_CACHE_HOME=/private/tmp/math-digest-087-fontcache`、`DYLD_FALLBACK_LIBRARY_PATH=/usr/local/lib`、`PDF_PYTHON=/private/tmp/catalog-052-pdf-x86/bin/python`を利用した。共有pdf-editions.jsonの同時書込を避ける。独立した生成用CWD・台帳へ出力後、087項目だけを最新台帳へ統合し、日英PDFと一緒に再照合する。
6. 公開対象差分を選択してcommit・pushし、Actions build/deploy成功を確認する。公開日英案内・3記事・全図・TeX・日英PDFが今回のhashと一致し、導線・スマートフォン幅・言語切替が機能することを確認して公開結果を記録する。

現在の未実施：commit、push、Actions、公開URLへの反映検査。数学的な未確認範囲は第1段階から継続して記事に記載済み。
