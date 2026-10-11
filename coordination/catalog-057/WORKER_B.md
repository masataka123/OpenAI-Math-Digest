# カタログ057 担当B指示書（提案・未依頼）

この文書は制作開始後に使用するための準備物。現在は記事制作・チャット作成・送信・公開を開始しない。

- 制作セット1.4と2026-10-11の補足・補足追記を適用。
- 公式順：2。正式タイトル：**Two-step monodromy of special quasi-projective varieties**。
- 表示名：Two-step monodromy。paper ID：`two-step-monodromy`。
- 版：2026-09-24、19頁、著者OpenAI。
- 原典：[固定PDF閲覧](https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/Two-step-monodromy-of-special-quasi-projective-varieties-September-24-2026/paper.pdf)。SHA-256：`dbc966a951e13d2e0a3184321968aa7c569d102c90759e1868024cdf8734cbe4`。
- 台帳：[inventory.json](inventory.json)。構成：[ARTICLE_PLAN.md](ARTICLE_PLAN.md)の第2記事。
- 将来の編集可能範囲：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-057/two-step-monodromy/` のみ。
- 担当順：この1本。別の記事やカタログ共通ファイルは変更しない。

## 制作開始後の作業

1. AGENTS、PROJECT_PLAN、production/READMEと制作セット、[本部計画](README.md)を読み、status.mdへ初稿開始JST・開始＋60分の締切を記す。既存の準備メモの範囲を引き継ぎ、今回の照合と区別する。
2. PDFハッシュを台帳と比較し、主要結果の仮定・量化・各結論・番号・ページ、必要な証明本文と直接外部入力の原典記述・使用箇所を確認する。
3. Theorems 1.1–1.3とCorollary 3.1を扱う。canonical completion、線形像、通常の基本群全体を区別する。曲面例のspecialness・quasi-Albanese普遍性・基本群同型とファイバー群の像の全結論を対応させる。先行研究との比較は指定版に限定。
4. Schnellの骨格、Orbifold Iitakaの図前文献案内を参照し、FORMAT_CONTRACTを優先する。詳細に先立つ主定理全体図、独立命題の主張欄、図直後の文章を用意する。主要結果の既出主張は参照でよい。
5. citations.jsonに `citationStyle: "author-key"`、articleGuides、mainResults、proofTargets、statements、conclusionCoverage、readingListを用意する。本文・TeX・日英は共通記録から生成する。図前に外部キー・著者・正式タイトル・用途・参照版・リンクを定義する。
6. sources.jsonへ実際の誌面/PDF対応、読んだ証明箇所、供給結果→利用箇所→目的→仮定、未確認を記す。引用の存在のみで直接依存としない。
7. 下記の担当レジストリだけを指定して引用を生成・検査し、担当図だけを生成する。publicへのコピーや他カタログの再生成はサイト本部へ引き継ぐ。diagram原本・TeX/SVGとcitation-build.jsonの生成ハッシュ・再生成コマンドを残す。
8. 初稿は最大60分、下限なし。開始・終了・経過と未確認／未完成をstatusへ記録して区切る。自動延長せず、追加編集は別記する。全結論を説明しきれなければ未完成と明示する。

```sh
npm run citations -- --registry drafts/catalog-057/two-step-monodromy/citations.json
npm run check:citations -- --registry drafts/catalog-057/two-step-monodromy/citations.json --text-only
```

## 成果物と受領

`article.ja.md`、`article.en.md`、`diagrams/`（原本・日英TeX/SVG・生成記録）、`sources.json`、`citations.json`、`status.md`。接続・命名提案があればcatalog-changes.md。paper ID・版は変えない。新規引用キーの本部割当は自論文が `OpenAI26b`、自論文内での番号引用は無略号とする。

本部は結果の原典照合と全結論の対応、日英、図前後の配置、引用・確認範囲を受領ごとに点検する。034の共通表、Schnellの主張・図・文章、Orbifold Iitakaの文献案内との実画面比較は制作後の必須作業。日英PDF・組込み・公開確認はサイト本部担当で、未実施ならPDF待ちを残す。

## 貼り付け用プロンプト（まだ送信しない）

```text
OpenAI Math Digest のカタログ057、担当Bをお願いします。
作業先は /Users/iwai/Desktop/GitHub/OpenAI-Math-Digest です。
AGENTS.md、PROJECT_PLAN.md、production/README.mdと制作セット1.4・補足ルール、coordination/catalog-057/README.md、ARTICLE_PLAN.md、WORKER_B.mdを読み、公式順2「Two-step monodromy of special quasi-projective varieties」の制作を開始してください。
固定原典と台帳を照合し、drafts/catalog-057/two-step-monodromy/だけに日英記事・引用付きTeX/SVG・sources.json・citationStyle: author-keyのcitations.json・status.mdを作成してください。
主要結果の全結論を証明概略と直後の文章へ対応させ、独立した中間命題節では図前に仮定・結論・番号・原典ページを記してください。初稿は読解・執筆・図・確認を含め最大60分、下限なし。開始・締切・終了と未確認／未完成を記録し、自動延長しないでください。
成果物と照合範囲・未完成を担当チャットで報告してください。チャット作成・他チャットへの送信・共通ファイル変更・公開は依頼に含めません。
```

> 2026-10-11 第1段階完了。本文書は準備時の計画・指示履歴。実施結果はSTAGE1_REPORT.mdと各記事status.mdを参照。
