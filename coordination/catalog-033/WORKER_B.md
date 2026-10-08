# カタログ033 担当Bの指示書

担当は02の1篇。これは制作開始前に準備した指示書であり、記事は未着手。ユーザーから開始指示を受けた後、[共通要領](README.md)に沿って進める。

## 対象と保存先

**Logarithmic Kodaira dimension and whole-fiber variation**

- 033内の掲載順：02。内部ID：`whole-fiber-variation`。共通略号：`[WV]`。
- 原稿：2026-09-26、75ページ。
- [固定原典](https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/Logarithmic-Kodaira-dimension-and-whole-fiber-variation-September-26-2026/paper.pdf)
- SHA-256：`9b1b750b309e5c5a37fa1b472836f98c8eeffe69e4e7604452de18128a479e4a`。
- PDFキャッシュ：`/tmp/math-digest-033-preparation/2-current.pdf`。抽出本文：同じ場所の `2-current.txt`。
- 成果物の保存先：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-033/whole-fiber-variation/`。

キャッシュ消失時の取得URLは [inventory.json](inventory.json)。[SOURCE_NOTES.md](SOURCE_NOTES.md)が準備調査の入口となる。

## 記事の重点

Theorem 1.1の対数的な底の非負性と、**whole geometric generic fiber**の双有理的定義体によるvariationを保つ。period像や飯高底だけのvariationへ置き換えない。Corollary 1.2と、LA・Tajiを追加で使うCorollary 1.3を主定理から分け、原典順で示す。

主定理では、対数的切断の比から得るparameter fieldと、ファイバー全体をその体上へ降ろす二つのconstancyの接続を優先する。各constancyが何を固定し、なお何が残るかを図と文章で追えるようにする。

## 読む順序の候補

最長の75ページを均等に要約しない。下表は読解候補であり、全範囲の精読を要求するものではない。

| 優先 | 箇所 | 確認する接続 |
|---|---|---|
| 1 | Theorem 1.1 / Corollary 1.2 p.2、Corollary 1.3 p.5、主定理の完結§7 pp.52–59 | 主定理の到達点と、追加の帰結の区別 |
| 2 | §2 pp.6–14 | 対数的下界からparameter fieldを取り出す箇所 |
| 3 | §3 pp.14–25、§4 pp.25–43の主要結果と適用 | root cover、Hodge line、制限後のflatness、双有理的constancy |
| 4 | §§5–7 pp.43–59の合流点 | markings、有限normalization、whole fiberの降下 |
| 別枠 | §§8–9 pp.59–73 | 追加の数値的second Iitaka構成と通常の相対飯高への適用。主定理の必須経路とは分ける |

主定理の証明に使う非自明な接続を実際に読む。細部の全再現より、入力の仮定・供給内容・利用箇所を優先する。§§8–9は初稿で未読なら未読と記載し、タイトルだけで概説済みにしない。

## 入力と確認上の注意

- OI Corollary 6.2 → 本稿Theorem 2.1 p.6。対数的下界の入力。
- OI Theorem 3.1 → 本稿Theorem 3.8 / Proposition 3.9 p.21。integral ambient variationのcomplex summandとentire highest lineを混同しない。
- LA Corollary 11.2 pp.73–74 → 本稿Corollary 1.3 p.5。good modelからTajiへ進む帰結であり、Theorem 1.1への入力ではない。LAの原典は [旧固定版](https://github.com/openai/math/blob/adc7f1241b42e322a6451854ab7e4b4c146bf78a/preprints/Log-abundance-in-characteristic-zero-September-24-2026/paper.pdf)。
- RA Corollary 1.2と本稿p.5の比較はsmooth familyについての別経路。負の底や全てのspecial baseの主張へ無条件に広げない。
- PH Lemma 8.4 / Theorem 8.1を引用するp.25は、準備段階では受け手の引用のみ確認。実際の役割を読んでから接続種別を付ける。
- §§8–9で使うOIのreduced-root結果は追加結果への入力として分ける。Aの完成は待たず固定原典で照合する。

## 引き渡し

日英本文、図、sources.json、status.mdを保存する。主定理、追加のCorollary 1.3、§§8–9の追加結果の確認範囲を分ける。全ファイバーの定義体を捉えた箇所と、確認できず保留した接続を特定する。75ページを理由に60分枠を自動延長しない。

## 制作開始後に使うプロンプト

```text
OpenAI Math Digestのカタログ033を担当する窓口Bとして、02の初稿制作を開始してください。
作業先は /Users/iwai/Desktop/GitHub/OpenAI-Math-Digest です。
最初に PROJECT_PLAN.md、AGENTS.md、coordination/catalog-033/README.md、SOURCE_NOTES.md、WORKER_B.mdを読んでください。後ろ3件は同じcatalog-033フォルダ内です。
Logarithmic Kodaira dimension and whole-fiber variationについて、固定原典の証明本文と直接入力を確認し、Schnell形式の日英本文、引用付きTeX図、出典記録を作成してください。
主定理とLA・Tajiを使うCorollary 1.3、追加結果の§§8–9を分けてください。
原典確認・執筆・図・確認を含め最大60分、下限なし。開始・締切・終了時刻をJSTで記録し、未確認は明記して区切ってください。
リポジトリ内の変更先は drafts/catalog-033/whole-fiber-variation/ のみ。PDF取得や図の中間生成には担当専用の一時領域を使えます。共通コード、034、他担当、Git、公開には変更を加えず、別チャットやサブエージェントの作成・別チャットへの送信も行わないでください。
共通表示の改修や他担当の完成を待たず原典で進め、成果物・時間・確認範囲・未完成箇所をstatus.mdとこのチャットへ報告してください。
```
