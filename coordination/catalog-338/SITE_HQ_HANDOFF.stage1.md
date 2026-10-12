# カタログ338 第1段階からの引継ぎ

## 現在の状態と作業場所

第1段階「記事制作・内容点検・カタログ案内」を完了して停止。単独執筆・自己点検であり独立査読ではない。依頼は第1段階まで。第2段階の再開指示後にサイト組込み・日英PDF・公開前検査を行って再度停止し、第3段階は公開指示後に行う。

- 作業先：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest`
- ブランチ：`main`、開始HEAD：`68a2b0bf8537d45ce45d0675630331348f35d534`
- 338の変更範囲：`coordination/catalog-338/`、`drafts/catalog-338/`のみ。未コミット。
- 開始時の既存変更はevidence/git-status-start.txt。034の休止記録、037原稿、AGENTS/PROJECT_PLAN/productionの既存編集を保持。共通src/public、他記事、PDF、commit・push・公開には手を付けていない。
- 採用仕様：制作セット1.4と2026-10-11/12補足。

## 対象と成果物

公式338「Yau's uniformization conjecture」、分野Differential geometry（微分幾何学、公式順16、333–361）。公式概要は2026-10-06版、分野開始PDFp.36、338はp.37。固定commit `fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb`。

収録はOpenAI著 *Uniformization of complete Kähler manifolds with positive bisectional curvature*、2026-09-23版、77ページの1本。重複記事なし。新paper IDは`yau-uniformization`。完全なURL・SHA-256はinventory.json参照。

| 成果物 | リポジトリ内の場所 |
|---|---|
| 唯一の公式順台帳、制作計画、チェックリスト | coordination/catalog-338/inventory.json、README.md、RELEASE_CHECKLIST.md |
| 日英記事 | drafts/catalog-338/yau-uniformization/article.{ja,en}.md |
| 日英3図（計6SVGと6TeX） | 同ディレクトリのdiagrams/{main,joint,coordinates}.{ja,en}.{svg,tex} |
| 記事別の引用・版・読解・未確認・時間 | 同ディレクトリのcitations.json、sources.json、status.md |
| 日英案内、公式順共通表データ | drafts/catalog-338/overview/article.{ja,en}.md、presentation.json |
| 外部6入力の接続記録、案内引用 | overview/connections.json、citations.json、sources.json、status.md |
| 自己点検と見本比較 | coordination/catalog-338/CONTENT_REVIEW.md |
| 検査・画面・固定原典の証拠 | coordination/catalog-338/evidence/ |

single構成。案内は短い入口と共通4列表1行。カタログの分類・総括図・選択UIは省略した。単論文内の解析・幾何・座標の接続は記事全体図へ集約し、入口への複製は避ける。外部依存を「なし」としていない。

## 完了事項と検査

主定理の仮定・結論・規約、Theorem 6.3とProposition 9.2の全結論、核心の証明箇所、6外部文献の入力記述・用途を固定原典と照合。日英で同じ主張欄、7節、3図、引用列、184の数式を用意。説明は全体図を先に、核心の二節を後に置く。著者の主張と編集側の確認範囲を区別。

338限定の引用同期（text-only）、図生成と19ハッシュ、内部アンカー、共通表、MathJaxは成功。日英PC1440px・375pxを共通レンダラーで実表示し、034の表、Schnell、033 Orbifold Iitakaと比較。全6図も目視。詳細と画像名はCONTENT_REVIEW.md。

全体nodeテストは37/38成功。残る1件と全体check:citationsは037の公開SVG未配置で停止した。037を変更して解消していない。338も公開資産未配置の段階なので全体検査の成功とは扱わない。npmコマンドは環境にないためpackage.jsonと同一のnodeコマンドで検査した。サイトbuild・全実ルート・言語切替/拡大操作・PDF表示は未確認。

## 数学的な未確認

本文末尾とsources.jsonに記載済み。Hodge熱の外部入力、円板コンパクト性・変形の全補助評価、同時粘性接触の全正則化、§§8.2–8.4のrate順序・macro-grid・alignmentの全見積り、教科書等の全外部入力の原典照合が残る。77ページ全体の独立検証や専門家査読は行っていない。これらを未確認のまま正しさ認定へ言い換えない。追加調査を行う場合は初稿の時間に加算せず別の編集記録を残す。

## 第2段階で行うこと

1. 最新Git状態と034・037等の共通ファイル作業を照合し、共有変更を順番に統合する。読解・執筆を初めからやり直さない。
2. `src/data/site.mjs`には既に`differential-geometry`の空の分野枠がある。公式順・公式英語名を維持して338を登録し、新paper IDを1本登録する。新しい独自分類は作らない。トップ→分野→338→記事の導線、日英掲載数を更新する。
3. 共通CatalogMarkdownOverview/公式順表で案内・presentation.jsonを読み込む。CATALOGINVENTORYTOKENを共通表へ展開し、Markdown内相対記事リンクを共通ルートへ解決する。短いsingle入口で不要な分類・選択UIを作らない。
4. 記事diagramsの6SVG・6TeXを`public/diagrams/catalog-338/yau-uniformization/`へ配置する。これは今回未実施。引用レジストリは記事別所有を維持し、author-key形式を使う。公開リンク・拡大・TeXダウンロードを実ルートで確認する。
5. PDF担当＝サイト本部。日英とも**未生成**。各冊子は案内1章＋記事1章、記事図3個。冒頭に対応言語のPDFリンクを置き、生成したPDFと`src/data/pdf-editions.json`を同時更新する。原典PDFを成果物PDFと混同しない。
6. RELEASE_CHECKLISTに従いcheck:citations、テスト、build、check:links、日英pdf:catalog、再build、check:pdf・linksを実施。037など他制作の未配置が全体検査を止める場合は担当範囲を分けて調整する。
7. サイトの共通16px/14px表示、AI注意書き、原典確認案内、案内キャラクター、右上言語切替とスクロール中/375px操作、図拡大を維持。既存の記事・図・PDFの旧引用形式は変更しない。
8. 日英PDFの全図・主張・式・リンク、サイトの1440/375px、033/034との比較を記録し、第2段階の結果を報告して停止する。commit/pushは第3段階の公開指示後。

維持する記事アンカー：results、diagram-sources、proof-overview、proof-1、proof-2、dependencies、sources、theorem-1-1、theorem-6-3、proposition-9-2、およびproof-overview-step-1〜5、proof-1-step-1〜3、proof-2-step-1〜3。案内はpapers、guide、sources。

## 第1段階の再現用コマンド

```sh
export PATH=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Library/TeX/texbin:$PATH
node scripts/sync-citations.mjs --check --text-only --registry drafts/catalog-338/yau-uniformization/citations.json
node scripts/sync-citations.mjs --check --text-only --registry drafts/catalog-338/overview/citations.json
python3 drafts/catalog-338/yau-uniformization/diagrams/render.py
node coordination/catalog-338/validate-stage1.mjs
node coordination/catalog-338/check-preview.mjs
```

引用を編集した場合は先に各レジストリのsyncを`--check`なしで実行してから図を再生成する。図はXeLaTeXの-no-pdfでXDVからSVGへ変換する。Chromeのローカル起動にはこの環境でサンドボックス外実行が必要だった。確認HTMLはstage1用の仮ルートであり公開サイトではない。

公開URL・公開commit・Actions・実サイト反映確認：すべて未実施。日英PDF未生成のため、カタログ全体の公開準備完了とは報告しない。
