# カタログ338 第2段階完了・公開待ち

## 現在の状態

第2段階「サイト組込み・日英PDF・公開前検査」を完了し、**公開準備完了**として停止。今回のユーザー指示は「第二段階に進んでください」。commit・push・公開は行っていない。第3段階は明示的な公開指示後に進める。

作業先 `/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、ブランチ`main`。第1段階の引継ぎをSITE_HQ_HANDOFF.stage1.mdに保持。初稿25.8分の記録はそのまま維持し、今回の組込み・PDF・検査とは分けた。数学的内容の追加認定・全証明の再検証は行っていない。

## 組込み済み成果物

- 公式338、Differential geometryの既存分野枠（公式順16、333–361）に登録。トップ→微分幾何学→338→yau-uniformizationの双方向導線と日英ルートを作成。
- 共通CatalogMarkdownOverviewに短い案内と4列1行表を組込み、記事1本へ接続。分類・総括図・選択UIを追加しない。
- 日英記事と3図を共通表示へ組込み。`public/diagrams/catalog-338/yau-uniformization/`に6SVG・6TeX。
- PDFは`public/pdf/catalog-338-ja.pdf`（18ページ）と`catalog-338-en.pdf`（20ページ）。各2章・3図・184数式、2026-10-12版。対応言語のカタログ冒頭にPDFリンクあり。`src/data/pdf-editions.json`の338記録とファイルhashが一致。
- 記事のパンくずにあった代数幾何学の固定表示を所属分野参照へ修正。トップの単論文分野は「証明概説と外部入力」と表示する。共通CSS・図表示・AI注意書き・案内役・MIT帰属は維持。

原典の固定commit・版・URL・77頁・SHA-256はinventory.json。日英本文と引用台帳はdrafts/catalog-338/。数学の確認範囲はCONTENT_REVIEW.mdと記事末尾。

## 検査結果

| 検査 | 結果・証拠 |
|---|---|
| テスト | 39/39成功。evidence/stage2-tests.log |
| 全体check:citations | 29レジストリ・100ファイル成功。evidence/stage2-citations-all.log。338公開SVG/TeXの一致も確認 |
| Astro build | 99ページ成功。evidence/stage2-build-isolated.log |
| 内部リンク・画像・アンカー・言語切替リンク | 96,869件／99ページ成功。evidence/stage2-links-cached-final.log |
| 全カタログPDF鮮度とhash | 日英20冊がcurrent、338も各2章。evidence/stage2-pdf-check-final.log |
| 実ブラウザー | 日英1440/375px×トップ・分野・338案内・記事・034・Schnell・Orbifold Iitakaの28状態。横はみ出し・MathJaxエラー0。evidence/stage2-browser.json |
| 操作 | 日英両幅の全3図で開く・拡大・全体表示・閉じる。スクロール中の言語切替と#sources維持。375px表の右端までの横スクロール。evidence/stage2-screenshots/ |
| PDF紙面・構造 | 全38ページを画像で目視、全6図は単ページ画像でも点検。目次・主張・数式・文献・読書案内・確認範囲に欠け／重なりなし。日本語94、英語91のリンク注釈、各2章のbookmark。evidence/pdf-pages/とstage2-pdf-structure.json |

サイトとPDFは既存の共通制作系を使用。数式や引用の検査は数学的正しさの認定ではない。原典PDFと概説冊子PDFは別物。

## 並行作業と検査環境

037も同時に組込み中だったため、共有distが更新された途中に最初のcheck:links/check:pdfがENOENTになった。その出力を最終検査に使わず、`.astro/catalog338-stage2-dist/`へ別ビルドを作り直した。検査用cwd `/private/tmp/catalog338-stage2-verify`のdistだけがこの固定出力を参照し、他のディレクトリは元作業先へのsymlinkである。

リンク検査は未変更の`scripts/check-links.mjs`を実行し、固定ビルドの同一HTML再読込みだけを338専用ラッパーでキャッシュした。検査条件・参照範囲は変更していない。キャッシュ前の長時間実行は終了し、最終の全件成功ログを残した。ブラウザーはこのビルドをローカル応答として配信し、MathJaxも同じローカルライブラリを使った。実際の公開URLに公開したわけではない。

037側で公開引用検査とテストの変更・公開資産配置が進み、全体テスト／引用検査の第1段階の失敗は解消された。当担当はその変更を行っていない。共有site.mjsとpdf-editions.jsonの037差分を保持。開始前に存在した全PDF版記録が変化していないことも照合した。

## 変更の所有範囲

338の成果物：coordination/catalog-338、drafts/catalog-338、public/diagrams/catalog-338、public/pdf/catalog-338-{ja,en}.pdf。

338による共有変更：src/data/site.mjsの338 import・論文・カタログ・分野登録、src/data/pdf-editions.jsonの338記録、src/components/CatalogDraftArticle.astroの所属分野パンくず、src/pages/[lang]/index.astroの単論文分野文言。

037の登録・PDF版記録・公開資産、scripts/{sync-citations,citations.test,catalog-033.test,catalog-063.test}.mjs、および開始時からのAGENTS/PROJECT_PLAN/production/034記録は他作業として保持。当担当の変更に一括混入させない。証拠用の原典PDF・全画面画像・検査HTMLはローカル検査資料であり、公開用アセットではない。

## 未確認事項と残作業

数学：第1段階と同じ。Hodge熱の外部入力、円板コンパクト性・変形の全補助評価、粘性接触の全正則化、§§8.2–8.4のrate順序・macro-grid・alignment、全外部原典の再帰的照合は未完了。本文にも明示済みで、今回の形式検査で解消したとは扱わない。

工程：第2段階の必須残作業なし。第3段階のcommit・push・Actions・公開URL反映確認のみ未実施。公開指示後、最新Git状態と他カタログ差分を再確認し、共有ファイルは行単位で調整して338の対象変更を公開する。既存の未コミット変更を破棄しない。

## 再開・再検査

1. 公開指示後、RELEASE_CHECKLISTと本書、最新Git状態、037等の公開状況を確認。
2. 共有変更が進んでいれば再ビルドし、check:citations・テスト・リンク・PDF鮮度を確認。図・本文が変わらなければ読解とPDF生成をやり直す必要はない。
3. 338の必要成果物と対応する共有差分だけをcommit/push。保存原典・画面証拠・他カタログの変更を無差別にaddしない。
4. Actions成功後、公開サイトの日英分野・338・記事・全図・日英PDFの反映を確認し、公開commitと結果を報告。

ローカル再検査の環境：Node `/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node`、PDF Python `/private/tmp/math-digest-pdf-runtime/bin/python3`（WeasyPrint68.1、pypdf6.19.0）。npm executableがないためpackage.jsonと同一のnodeコマンドを使用。TeX図の再生成手順は記事status.md。PDFスクリプトは既存scripts/build-catalog-pdf.mjs、338指定で生成し、他の版記録を保持する。

公開URL・公開commit・Actions・公開サイト確認：未実施。公開準備済みのローカル成果物として引き渡す。
