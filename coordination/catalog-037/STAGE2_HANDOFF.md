# カタログ037 第2段階引継ぎ

**公開準備完了・未公開。第2段階で停止。** 2026-10-12、サイト本部 `/root`。ユーザーの第2段階再開指示により、既存の日英記事・案内を組み込み、日英PDF生成と公開前検査を完了した。commit・push・公開操作は行っていない。

## 作業場所と成果物

- `/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`、ブランチ `main`。開始HEAD `68a2b0bf8537d45ce45d0675630331348f35d534`。共有作業場を切替えていない。
- 制作セット1.4＋補足。第1段階の原典・本文・数学的確認範囲は維持。今回の作業は組込み・PDF・表示検査であり、数学的独立検証範囲を拡大していない。
- 登録：`src/data/site.mjs` に037、公式順2記事、Algebraic and complex geometryの入口を追加。
- ルート：`/{ja,en}/catalog/037/`、`/{ja,en}/papers/ordinary-double-point-gap/`、`/{ja,en}/papers/normalized-volume-gap-four/`。base pathは `/OpenAI-Math-Digest/`。
- 本文・案内・引用記録：`drafts/catalog-037/`を再利用。共通のCatalogMarkdownOverview/CatalogDraftArticle、共通表・定理・出典行・図拡大を使用。
- 公開図：`public/diagrams/catalog-037/{overview,ordinary-double-point-gap,normalized-volume-gap-four}/`、SVG16枚・自立TeX16枚。原稿側の生成物と一致。
- PDF：`public/pdf/catalog-037-ja.pdf`、`public/pdf/catalog-037-en.pdf`。`src/data/pdf-editions.json`の037に版・頁数・ハッシュを記録。カタログ冒頭の共通PDFカードから対応言語へリンク。

| 言語 | ページ | 章 | 図 | 本文数式 | 容量 | SHA-256 |
|---|---:|---:|---:|---:|---:|---|
| 日本語 | 35 | 3 | 8 | 412 | 2,070,502 bytes | `9ec6acbce3439b8f61420b553b25c49a6dd5754f943ed29a3ae75bca8102ca3b` |
| English | 41 | 3 | 8 | 401 | 1,606,273 bytes | `bed4a2dcd6d9408692defe9f7a8c7f843e5abd29c89260f86510c7098a42ed28` |

2026-10-12版。章開始は日本語3/7/24頁、英語3/9/28頁。図の全体像と詳細を保持し、長い図は紙面の高さに収まるよう既存PDF組版が縮小する。各図を画像で読解して欠け・重なりを確認した。

## 検査結果

npm実行ファイルがないため、package.jsonが指定するNode実体を直接実行した。検査の除外はしていない。

| 検査 | 結果 | 証拠 |
|---|---|---|
| 完全なテスト | 39件成功、失敗/skip 0 | `stage2/tests.log` |
| 引用・生成図・公開コピー | 29レジストリ、100ファイル成功 | `stage2/citations.log` |
| Astro build | 99ページ成功（並行作業338も含む現在の登録状態） | `stage2/build-final.log` |
| 内部リンク・資産・アンカー・日英切替 | 96,869件、欠落0 | `stage2/links.log` |
| 全登録PDF | 10カタログ・日英20冊で内容/ファイルハッシュ現行 | `stage2/pdf-check.log` |
| 実サイト画面 | 日英のトップ/分野/037/2記事×1280px/375px＝20条件、横はみ出し/数式エラー/画像欠落/JSエラー0 | `stage2/browser.json`、`stage2/screenshots/` |
| 実サイト操作 | 2記事×日英4経路で分野→037→記事、アンカー保持の言語切替、図拡大/縮小/全体表示、図引用、TeX取得、037への復帰成功 | 同上 |
| PDF構造 | 各3章、空白頁なし、内部22リンク・外部193リンク/言語、内部destination正常 | `stage2/pdf-qa.log`、`stage2/pdf-review/structure.json` |
| PDF画像 | 日英全76ページ、全16図、表紙/目次/主張/長い数式/出典/改ページを確認 | `stage2/pdf-review/`全頁PNG・contact画像 |
| 既存PDF | 開始時の16冊と版情報を保持 | `stage2/preservation.json` |

本文16px・出典14px、共通書体、AI注意書き、案内役、右上言語切替、MIT帰属を保持。034の公式順共通表、Schnellの主張・証明節、033 Orbifold Iitakaの文献案内を日英PC/375pxの実ルートで比較し、証拠画像を保存した。375pxの表と長い数式は各表示領域内でスクロールできる。図は拡大UIで詳細を読む。

ブラウザー検査はローカルのbuild成果物をHTTP配信。MathJaxは同梱ファイルを使い、外部原典を開く操作はURLを照合して応答を差替えた。CDN・外部原典サイト・公開GitHub Pagesの稼働確認とは区別する。PDFカードはHTTP200と配信bytesの一致も確認。

## 第2段階で修正した検査コード

並行中の未組込み338原稿まで公開コピー検査が探索し、public資産未配置で全体検査が停止した。`scripts/sync-citations.mjs`の無指定・公開コピーを含むcheckを**サイト登録済みカタログ**へ揃えた。明示的なカタログ/registry指定、text-only検査、生成は従来どおり未組込みdraftも扱える。検査項目そのものを弱めたのではなく、第1/第2段階の検査対象を区別した。`scripts/citations.test.mjs`へ探索範囲の回帰確認を追加し、033/063のテストにある登録順期待値へ037を追加した。

第1段階と異なり、今回は完全なテストと公開コピー照合を実行して成功。別カタログの記事本文や共通の画面部品は本部から変更していない。

## 他担当の変更と差分の分離

- 作業開始時のAGENTS/PROJECT_PLAN/production変更11ファイル、034休止記録を保持。
- 並行担当が338を `src/data/site.mjs` と `src/data/pdf-editions.json` に追加し、`src/components/CatalogDraftArticle.astro` の分野パンくず一般化、`src/pages/[lang]/index.astro` の単論文分野案内を変更している。これらは037担当の編集ではなく、保持した。
- `stage2/baseline.json` と `stage2/preservation.json` に開始時・差分を記録。既存の16冊のPDFファイル/版情報、他カタログの記事・図・固定原典は037担当から変更していない。
- **共有ファイルの差分には037と338が混在する。第3段階でファイル全体を無条件にstageしない。** 最新Git状態と双方の公開指示・統合状態を確認して対象hunkを扱う。別担当の差分を消したり、未依頼の公開範囲に含めたりしない。

## 残作業と再開手順

第2段階の必須成果物・検査に未完了はない。残りは第3段階の公開と反映確認。

1. 明示的な公開指示を受けた後、AGENTS/productionと本書、最新Git状態を確認する。
2. 037の原稿/図/記録・公開資産、サイト登録・PDF版情報、検査コード変更を確認する。共有ファイルの338変更を保持し、公開対象を切り分ける。
3. 停止後に本文・図・共有組版が変わった場合にのみ、影響範囲の生成/検査を再実行する。PDF現行性は公開直前にも確認。
4. 対象変更をcommit・pushし、Actions build/deploy成功を待つ。
5. 公開された日英037案内・2記事・図・PDFの版、内容、リンクを確認し、URL/commit/結果を報告する。

未検証の数学的細部は `SOURCE_REVIEW.md` と各記事末尾に保持。全証明の独立検証、専門家査読、外部結果の再帰的証明検証はしていない。

## 再現環境

```sh
export PATH=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH
node scripts/sync-citations.mjs --check
node --test scripts/*.test.mjs
node node_modules/astro/astro.js build
node scripts/check-links.mjs
PDF_PYTHON=/private/tmp/math-digest-pdf-runtime/bin/python XDG_CACHE_HOME="$PWD/tmp/font-cache" node scripts/build-catalog-pdf.mjs --catalog 037
node node_modules/astro/astro.js build
node scripts/build-catalog-pdf.mjs --check
node coordination/catalog-037/stage2/browser.mjs
/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 coordination/catalog-037/stage2/pdf-qa.py
```

ブラウザー検査はこの環境ではHTTP listen/Chrome起動のためサンドボックス昇格が必要。PDF生成は既存WeasyPrint 68.1/pypdf 6.19.0環境。再生成しない場合はPDF生成コマンドを省略する。
