# 060 Astra執筆担当への制作指示

- 役割：`gpt-6-astra` / `high`。060の1論文の日英記事、TeX/SVG、引用・出典記録、日英の短いカタログ案内、042との接続の数学的内容。公式原典から新規制作する。
- 作業先：`drafts/catalog-060/global-spherical-shells/`、`drafts/catalog-060/overview/`。担当以外の原稿・共有ファイル・src/public/site/PDF版情報を変更しない。台帳の変更提案は本部へ返す。
- 最初にPROJECT_PLAN.md、AGENTS.md、production/README.mdと参照するARTICLE_TEMPLATE、CATALOG_TEMPLATE、FORMAT_CONTRACT、CITATIONS、RECORDS、MODEL_ROLESを読む。共通仕様1.4・2026-10-20補足。
- 書誌の唯一の台帳：`coordination/catalog-060/inventory.json`。取得の原記録：同じフォルダのSOURCE_MANIFEST.json。原典PDF・抽出本文：`sources/paper.pdf`、`sources/paper.txt`。公式一覧：同じsourcesのCONTENTS.md、overview.tex/pdf/txt。固定commitと版・ハッシュは台帳参照。
- 初稿実作業の開始時刻と開始＋60分の締切をstatus.mdへ即記録。読解・執筆・図・確認を合わせ最大60分、下限なし。完了または時間到達で区切り、未確認を残す。追加編集は別枠で開始・終了・影響を追記する。

## 内容

1. Theorem 1.1の連結・極小・コンパクト複素class VII（b1=1, κ=-∞）・b2>0の仮定、およびU、Σ、双正則写像、補集合の連結性を正確に示す。原稿の主張と編集側の確認を区別し、全証明の正しさを認定しない。
2. 原典証明本文を読み、主定理までの全体図と直後の文章、核心の帰着・中間結果・構成、正則的構造と補集合条件への最終接続を説明する。推測で経路を補わない。各独立証明節には仮定・結論・原典番号・ページを図の前に記す。
3. 主結果として掲げた全結論へ証明概略を対応させる。主定理後の分類・系とは区別する。系を主結果として掲載する場合は全結論を説明する。直接外部入力の記述・使う内容・適用箇所・必要条件を照合し、外部証明の再帰的全検証はしない。
4. 日英の仮定・結論・数式・節構成・図・確認状態を揃える。図は日本語版に日本語説明、箱に操作の見出しと数式、矢印に引用と使用内容、専用余白を確保。
5. citations.jsonはcitationStyle: author-key。sources.jsonから著者・正式タイトル・版・誌面/PDFページを参照。本文の引用マーカー、TeXのCiteを共通生成する。reference-guide、proof-target、reading-list、articleGuidesのmainResults/statements/conclusionCoverageを満たす。図の再生成手順・citation-build.jsonを残す。共通の機械処理と指定見本は再利用可、旧Solの数学的原稿・図・解釈は根拠にしない。

## 042との接続

- 旧記録は探索の手掛かりのみ：`drafts/catalog-042/every-complex-k3-oka/`、`coordination/catalog-042/external-sources.preparation.json`。原典の今回取得版は`coordination/catalog-060/sources/k3-oka.pdf`とtxt。
- GSS Theorem 1.1（p.1）→042原典Corollary 10.2（p.54）が候補。実際の引用・版・使用目的・必要条件を今回の公式原典で照合する。060の版と042記録版のハッシュ同一性は本部台帳で確認する。
- 確認できれば060の本文・案内・connections.jsonから042記事の該当アンカーへ案内。未確認は保留。042自体は編集せず、改訂が必要なら理由を申し送る。

## カタログ案内と引渡し

- overview/article.ja.md、article.en.md、presentation.json、connections.json、status.md。最初の内容節にCATALOGINVENTORYTOKENを1回。公式順の共通4列表1行、短い入口。PDFは第2段階で冒頭へ日英各版を置く配置計画を制作記録へ。未生成PDFへの壊れたリンクを完成済みとして置かない。
- 不要な分類・空の依存表・論文間の総括図・選択UIは省く。個別記事の全体証明図は必要。FORMAT_CONTRACT §6による省略理由をconnectionsのomittedSectionsへ。
- できた原稿から本部と点検担当へ所在を知らせる。独立点検の指摘は原典で照合して修正し、変更と影響範囲を記録する。
- 第1段階で停止。サイト登録、公開資産配置、日英冊子PDF生成、公開はしない。
