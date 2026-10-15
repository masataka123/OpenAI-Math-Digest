> 更新：第2段階を完了。最新の検査・成果物は [第2段階の記録](stage2/FORMAT_AND_QA.md)、次の再開先は [第3段階への引継ぎ](stage2/HANDOFF_STAGE3.md)。以下の第1段階記述は当時の履歴として保持。

# カタログ285 第1段階の成果物案内

第1段階完了（2026-10-15）。日英記事・内容点検・カタログ案内を受領し、本段階で停止。サイト登録・日英冊子PDF・公開は後続段階。作業ブランチはmain、commit/pushなし。

[保存ファイル一覧](CHANGED_FILES.txt)。書込み対象はdrafts/catalog-285/とcoordination/catalog-285/のみ。共有表示部品・サイト登録・他カタログ・PDF管理ファイルは変更していない。

## 原稿

| 公式順 | 原稿 | 日本語 | English |
|---|---|---|---|
| 01 | A torsion-free counterexample to reduced Baum–Connes injectivity | [記事](../../drafts/catalog-285/baum-connes-injectivity/article.ja.md) | [Article](../../drafts/catalog-285/baum-connes-injectivity/article.en.md) |
| 02 | A torsion-free counterexample to the Kadison–Kaplansky projection conjecture | [記事](../../drafts/catalog-285/kadison-kaplansky-projection/article.ja.md) | [Article](../../drafts/catalog-285/kadison-kaplansky-projection/article.en.md) |
| 03 | An irrational-trace counterexample to reduced Baum–Connes | [記事](../../drafts/catalog-285/baum-connes-irrational-trace/article.ja.md) | [Article](../../drafts/catalog-285/baum-connes-irrational-trace/article.en.md) |
| 案内 | Counterexamples to Baum–Connes and Kadison–Kaplansky | [案内](../../drafts/catalog-285/overview/article.ja.md) | [Overview](../../drafts/catalog-285/overview/article.en.md) |

各記事の同じフォルダに `sources.json`、`citations.json`、`status.md`、`diagrams/` を保存。`diagrams/` に再生成可能なTikZ・TeX原本、日英SVG、引用生成マクロ、ハッシュ記録を収録。

## 原典・点検・引継ぎ

- [公式順・原稿版・原典URL・ハッシュ台帳](inventory.json)
- [制作方針・分担](README.md)、[指定モデル記録](model-assignments.json)
- `sources/`：固定commitの公式一覧・overview・3論文および担当が取得した直接入力原典
- [内容点検の受領と未確認事項](CONTENT_REVIEW.md)
- `review-*.md`：執筆者以外のAstraによる内容点検
- [形式・見本比較の結果](FORMAT_CHECKS.md)
- `preview/`：共通表示部品を使った未登録の日英HTML（冊子PDFではない）
- `screens/`：285原稿とSchnell・Orbifold Iitaka・034の表示比較画像
- `validation/`：原典ページ画像、構造・リンク・数式・表示・図ハッシュ検査
- [第2段階への引継ぎ](SITE_HQ_HANDOFF.md)
- [段階別チェックリスト](RELEASE_CHECKLIST.md)

最終状態・残る未確認事項は引継ぎおよび各記事のstatusを参照。図の確認用中間PDFと、未生成の日英冊子PDFを区別する。
