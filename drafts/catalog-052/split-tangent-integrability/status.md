# 作業記録

- カタログ／paper ID／担当：052／split-tangent-integrability／記事担当サブエージェント integrability
- 制作セット：1.4（2026-10-11の構成補足、2026-10-12の3段階運用を含む）
- ブランチ：main。共有作業先のブランチ切替・commit・pushなし。
- 初稿開始：2026-10-13 20:04:04 JST
- 初稿締切：2026-10-13 21:04:04 JST
- 初稿終了：2026-10-13 20:17:12 JST（13分08秒）
- 状態：日英初稿・図・引用記録の引渡し。記事担当の作業範囲を終了。本部による最終受領・共通表示比較は別記録。

## 成果物

- `article.ja.md`、`article.en.md`：Theorem 1.1、Corollaries 1.2・5.1の全結論、Proposition 2.1の完全な主張欄、4証明節、外部入力表、原典案内と確認範囲。
- `sources.json`：固定commit・原稿版・SHA-256、読んだ証明箇所、2外部文献、3依存記録、背景と未確認。
- `citations.json`：author-key、articleGuides（主要結果・独立命題・全結論の説明先・読書案内）。本稿は固定commit GitHub閲覧URL、外部PDFは誌面/PDF位置対応を使用。
- `diagrams/`：`main`、`box`、`product`、`quotient`の4枚のTikZ原本、日英の自己完結TeX・SVG、日英引用マクロ、`preamble.tex`、`render.py`、`citation-build.json`。
- `diagrams/preview/`：全8図の白背景PNG確認用出力と再生成スクリプト。
- `source/horing07.pdf/.txt`、`source/horing08.pdf/.txt`：取得した外部原典。これらは既存PDFの確認用キャッシュであり、今回生成した冊子PDFではない。
- `validation.json`：限定引用検査、24入力/生成物のhash整合、SVG XML・リンク、図数と証明対象、目視範囲、次段階の検査。

## 読解と内容点検

本稿のTheorem 1.1とCorollaries 1.2・5.1を原典順で掲載し、各結論の説明先を登録した。§§2–5、Appendices A–Bを読み、形式解→切断数による有理化→例外曲線の縮約→相対接続による束の分離→二点評価によるbracket消滅を確認した。P2.1は可積分性を仮定せず、tangent boxは座標系ではない。P3.1の接続がflatとなるのはP1ファイバー上に制限したときである。Cor1.2は指定分裂に適合するX本体の積、Cor5.1は一般RCファイバー上での可積分性と構造定理であり、周囲のViの可積分性や一般の普遍被覆の積を補っていない。

直接入力の照合：

- Höring arXiv:math/0505327v3、Theorem 1.4、p.2。PDFのmarginは9 Nov 2017、本文内部dateはNovember 2, 2018であり、その表示差をsourcesに保存。Hor07は公刊年に由来する文献キーであり、版の年月ではない。
- Höring公刊版Osaka J. Math.45 (2008)：Theorems 1.3–1.4（誌面1068/PDF3）、Definitions 2.8–2.9とTheorem 2.10（誌面1070/PDF5）、Proposition 3.16（誌面1073/PDF8）、Theorem 1.3の恒等写像の場合（誌面1074/PDF9）。今回の取得版には表紙1枚がある。
- G3と形式関数の文献は背景。原典Remark 2.4が外部G3定理を使わないと明記するので依存辺にしない。

内容点検サブエージェント source_review は、執筆者とは別に原典の主要結果・帰着・外部入力と日英本文を照合し、`coordination/catalog-052/REVIEW_SOURCE.md`へ記録する。図の「span」が日本語で落ちた点の指摘を受け、`span{u(b)}=E_{i,g(b)}`へ修正して再生成した。専門家査読や全証明の独立検証とは呼ばない。

## 実施済みの検査

- `node scripts/sync-citations.mjs --check --registry drafts/catalog-052/split-tangent-integrability/citations.json --text-only` 成功。
- XeLaTeX `-no-pdf -no-shell-escape` → dvisvgm による日英8図の再生成に成功。Overfull box・Missing characterなし。
- `citation-build.json` の24ファイルのSHA-256一致。8 SVGのXML構文と全34引用リンクを確認。GitHub閲覧URLにpage fragmentを付けていない。
- 図の白背景PNG全8枚を記事担当が目視。本文・数式・矢印・引用の重なりや欠落は確認した範囲でなし。日本語図は日本語説明を保持。
- 日英とも主要結果3、証明対象4、図4、管理引用31。主張・結論の登録と生成は引用検査成功。画面上のアンカーやMathJaxは本部の隔離プレビューで別途点検する。
- Schnellの主張→図→直後の説明、033 Orbifold Iitakaの図前文献案内を読んで骨格を合わせた。最終画面の033・034との比較を数値検査で代用しない。

## 残る未確認と第2段階への申し送り

- 外部定理の全証明と、その先の再帰的文献調査は未実施。Campanaの射影性はHöring公刊版の引用記述の確認まで。
- 形式貼合せ、surface base ideal、輸送の正則パラメータ依存の全技術事項を独立再構成したわけではない。本文の確認範囲とsourcesの未確認を保持する。
- 未記録の他カタログへの接続は未調査。
- publicコピー・サイト登録・共通部品の変更なし。`check:citations`のpublicコピー照合は第2段階に実行する。現在はコピーしないためtext-only検査を使った。
- 第2段階は日英記事を共通rendererへ組込み、8 SVG/8 TeXを所定のpublic図ディレクトリへ配置し、日英冊子PDFへこの記事と4図すべてを収録する。
- 日英PDFは未生成。PC/375px、共通表示・原典/内部リンク・日英切替と日英PDFの全体検査、公開はサイト本部が担当する。

## 再生成手順

この環境ではnodeをPATHへ追加する。図生成にはXeLaTeX、xeCJK/Harano Aji、TikZ、dvisvgmが必要。

```sh
export PATH=/Users/iwai/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Library/TeX/texbin:$PATH
node scripts/sync-citations.mjs --registry drafts/catalog-052/split-tangent-integrability/citations.json
python3 drafts/catalog-052/split-tangent-integrability/diagrams/render.py
node scripts/sync-citations.mjs --check --registry drafts/catalog-052/split-tangent-integrability/citations.json --text-only
node drafts/catalog-052/split-tangent-integrability/diagrams/preview/render-previews.mjs
```

`render.py`はpublicコピーを行わない。TeX原本・引用記録を編集した後は必ず再生成し、生成物だけを直してhashを更新しない。PNG用スクリプトはこの環境のbundled sharpを使用する。

## 後続編集

初稿終了後の本部修正・追加照合・検査は、初稿時間と区別してここへ追記する。

## 本部の受領後編集（初稿と別）
- 2026-10-13 20:19–20:20 JST：文献案内の末尾句点重複だけをcitations.jsonのguideRoleで修正し本文再生成。数学・引用番号・TeX定義は不変。統合前の全日英HTML確認を本部で実施。

## 第2段階の組込み（2026-10-13、本部）

- 日英サイトへ登録し、TeX/SVGをpublicへ配置。案内＋公式順2記事を日英PDF（28/32ページ、各3章・8図）へ収録。
- 数学的本文・引用・図原本は保持。案内だけPDF生成予定の文を削除し、共通PDFリンクを表示。
- 検査・未確認範囲・次段階：coordination/catalog-052/STAGE2_HANDOFF.md。commit・push・公開は未実施。

## 第3段階の公開確認

2026-10-13T21:05:16.060645+09:00、本部。commit abbbc326a8e097c750414874237fd82979e125f3をmainへ公開し、Actions・公開ページ・図・PDFの反映を確認。数学的な未確認事項は保持。coordination/catalog-052/PUBLICATION.md参照。
