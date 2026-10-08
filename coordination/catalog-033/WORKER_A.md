# カタログ033 担当Aの指示書

担当は01の1篇。これは制作開始前に準備した指示書であり、記事は未着手。ユーザーから開始指示を受けた後、[共通要領](README.md)に沿って進める。

## 対象と保存先

**Orbifold and logarithmic Iitaka subadditivity**

- 033内の掲載順：01。内部ID：`orbifold-logarithmic-iitaka`。共通略号：`[OI]`。
- 原稿：2026-09-26、55ページ。
- [固定原典](https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/Orbifold-and-logarithmic-Iitaka-subadditivity-September-26-2026/paper.pdf)
- SHA-256：`b143366cc99615e19783fa075caafd8c9565e7bf5a554a612e086657c2aeeb79`。
- PDFキャッシュ：`/tmp/math-digest-033-preparation/1-current.pdf`。抽出本文：同じ場所の `1-current.txt`。
- 成果物の保存先：`/Users/iwai/Desktop/GitHub/OpenAI-Math-Digest/drafts/catalog-033/orbifold-logarithmic-iitaka/`。

キャッシュ消失時の取得URLは [inventory.json](inventory.json)。まず原典の版を確認する。[SOURCE_NOTES.md](SOURCE_NOTES.md)の既存記録を確認済みの証明として転記しない。

## 記事の重点

Theorem 1.1のorbifold劣加法性に至る帰着と二つの正値性入力を中心にする。Fujiki class C、有理SNC境界の係数1、normalな底、不変なorbifold基底という範囲を維持する。Corollaries 6.2–6.3の対数・通常・標数0の帰結を、主定理と区別して原典順に記す。

相対飯高の中間空間から出る元の底への射とperiod側への射は役割が異なる。両底の間に原典にない射を描かない。切断比較が元の参照モデルで何を保つか、ampleな捻りの打消しで何を得るかを説明する。

## 読む順序の候補

以下は60分枠での読解を選ぶための案。全範囲の精読が完了条件ではない。

| 優先 | 箇所 | 確認する接続 |
|---|---|---|
| 1 | Theorem 1.1と基底定義 pp.2–3、主定理の証明§6 pp.39–40 | 仮定、目標、最後に合流する入力 |
| 2 | Lemma 2.6 p.9、Proposition 2.7 p.10以降 | 相対飯高とrank-one比較。境界、元のモデル、実際の切断空間 |
| 3 | §3 pp.17–20と、そこから参照する§4 / §5の核心 | 随伴正値性、log-general-typeの加法、weak effectivity、補間 |
| 4 | Corollaries 6.2–6.3 pp.40–41 | 対数的底との比較、零境界、幾何学的一般ファイバー、体の変更 |
| 必要時 | §7 pp.43–48、Appendix A pp.48–53 | WVへ渡す追加のreduced-root結果。主定理の必須経路と混ぜない |

主定理が引用する外部結果は、その記述と本稿での使用箇所を優先して照合する。§4 / §5の全補題と全外部証明を再帰的に追わない。核心の接続を読めなかった場合はその箇所を明示する。

## 担当間で共有する接続

- Bへ：Corollary 6.2とTheorem 3.1。追加結果についてはProposition 2.7、§7の結果を別枠にする。
- Cへ：Corollary 6.2。RAの加法性に使うもので、RAの上界自体への入力にしない。
- 034へ：LA Lemma 6.1、Conditional Kähler models Assumption 2.2、Kähler abundance §5の入力を [準備記録](SOURCE_NOTES.md) から引き継ぐ。
- PHは通常劣加法性の別の証明経路として比較する。OIにLAの紹介・引用があることだけでLA → OIの主定理依存を作らない。

入力結果の番号・仮定・ページ・確認範囲が確定した時点で、担当フォルダ内のsourcesとstatusへ先に記録する。別チャットへの自動通知はせず、本部がファイルから共有する。他担当の原稿完成を待つ必要はない。

## 引き渡し

日英本文、図、sources.json、status.mdを共通要領の形式で保存する。原典の不変な底と任意のモデル上の底、Hodge lineのnef性・随伴正値性とsemiampleness、入力の記述照合と全証明の検証を区別できているか確認する。各図の数・各節の分量は内容に合わせる。

## 制作開始後に使うプロンプト

```text
OpenAI Math Digestのカタログ033を担当する窓口Aとして、01の初稿制作を開始してください。
作業先は /Users/iwai/Desktop/GitHub/OpenAI-Math-Digest です。
最初に PROJECT_PLAN.md、AGENTS.md、coordination/catalog-033/README.md、SOURCE_NOTES.md、WORKER_A.mdを読んでください。後ろ3件は同じcatalog-033フォルダ内です。
Orbifold and logarithmic Iitaka subadditivityについて、固定原典の証明本文と直接入力を確認し、Schnell形式の日英本文、引用付きTeX図、出典記録を作成してください。
原典確認・執筆・図・確認を含め最大60分、下限なし。開始・締切・終了時刻をJSTで記録し、未確認は明記して区切ってください。
リポジトリ内の変更先は drafts/catalog-033/orbifold-logarithmic-iitaka/ のみ。PDF取得や図の中間生成には担当専用の一時領域を使えます。共通コード、034、他担当、Git、公開には変更を加えず、別チャットやサブエージェントの作成・別チャットへの送信も行わないでください。
共通表示の改修や他担当の完成を待たず原典で進め、成果物・時間・確認範囲・未完成箇所をstatus.mdとこのチャットへ報告してください。
```
