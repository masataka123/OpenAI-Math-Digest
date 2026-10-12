# カタログ338 内容点検・表示比較

- 2026-10-12、本部兼執筆担当による自己点検。執筆者と別人による独立査読ではない。
- 固定原典：OpenAI、2026-09-23、77ページ。版・SHA-256・URLはinventory.json。本文頁とPDF頁は一致。
- 判定：第1段階の概説原稿として引渡し可能。全証明の正しさを認定したという判定ではない。

## 主張と結論の照合

| 原典 | 仮定・結論で確認したこと | 日英説明先 | 照合の限界 |
|---|---|---|---|
| Theorem 1.1, p.2; conventions p.5 | 連結・非コンパクト、複素次元n≥1、滑らかな完備Kähler計量、点ごとの狭義正の正則二断面曲率。双正則C^nが結論。曲率上界・体積成長・単連結性は仮定でない。 | #theorem-1-1、#proof-overview、特にstep-5 | 完全な独立証明ではない。下記の入力・技術的評価は保留。 |
| Theorem 6.3, p.48 | Theorem 3.1の流れ。全有限時間上限Tの円板包絡v=N、対数時間を複素化した双対ノルムの共同psh性。 | #theorem-6-3、#proof-1-step-1〜3 | Proposition 6.2の全同時接触正則化、円板の全補助評価は未検証。 |
| Proposition 9.2, p.71 | §§7–9のchart/modelと定数選択。局所一様極限、原点固定、単射・非特異性・開像への双正則性、像内コンパクト上の前向き小ささ、逆像球包含の全結論。 | #proposition-9-2、#proof-2-step-1〜3 | Proposition 8.1のrate順序、alignmentなど全見積りを独立検証したとはしない。 |

主定理の結論は一つ（双正則C^n）。Stein性・可縮性はその帰結として明示した。独立した証明節は主定理、Theorem 6.3、Proposition 9.2の三つで、後二者の主張欄を図の前に置いた。全体の解析→幾何→座標→全射性の図を詳細節より先に置いた。

## 非自明な接続の照合

- pp.12–16,18–20：完備Hermitian近似での短時間存在、固定コンパクト上の両側計量評価、局所C∞極限の順序。極限の完備性をこの時点で結論しない。χ重み・余因子評価と非線形質量のGronwallを区別。
- pp.31–35,38–48：面積罰則の内部コンパクトと誤差係数の境界依存を区別。後ろ向き時間変形、Schur補元の非負majorant、共通baseの接触、行列式差F0=0、生の円板submeanへの復帰を照合。
- pp.49–50,52–61：Harnackの経路積分は大域最短測地線を前提としない。退出長から完備性。局所C∞極限のHarnack等号とループ収縮、pshのL1部分列極限から固定コンパクトに共通の指数へ。開始時刻や定数のコンパクト依存を残した。
- pp.62–63,67–74：全モデルとshearのJacobianを区別。前向き次数上界は部分列上であり逆次数上界ではない。パラメータをν→d→h→遅い時刻の順に選ぶ。逆反復を有効球内で閉じ、Cauchy評価による非特異性と球包含を別に説明。次数評価・像内小ささ・球包含の三つで全射性を閉じる。

6外部文献（CZ05、Dem82、LT20、Chu16、BR03、FL14）の入力記述と使用箇所を原典で照合した。結果・誌面/PDF頁・用途・仮定・版・hashはsources.json、接続はoverview/connections.json。FL14はshear記述を使用し、Oka定理全体への依存にはしない。先行するHarnack/chart/吸引域の文献を引用だけで直接辺にしない。

## 未確認として残す範囲

Hodge熱の自己共役性・有限伝播の外部入力、円板コンパクト性・変形の全補助評価（特にpp.24–30,36–37）、同時粘性接触の全正則化、§§8.2–8.4のrate順序・macro-grid・alignment（特にpp.64–66）、教科書の正則性・熱核・平均値評価・局所Ricci流微分評価などの全外部原典照合は未完了。本文末尾とsources.jsonにも同じ範囲を記載。追加の独立検証は今回の概説制作とは別作業である。

## 制作セット1.4の表示比較

共通render-draft.mjsとcatalog-inventory.mjs、既存7 CSSをそのまま読み、338専用evidence/preview/へ確認用HTMLを出力。既存distの日英034、Schnell、033 Orbifold Iitakaを同じCSS・MathJaxで描画して比較した。共有ソースとdistは変更していない。独自の公開テンプレートではない。

| 対象 | 見本と比較した項目 | 結果・証拠 |
|---|---|---|
| 日英案内、1440/375px | 034の4列表、正式タイトル、版・ページ数、原典別リンク、主要結果と役割、記事入口 | 共通表1行。狭い幅では表内横スクロール、文書全体の横はみ出しなし。screenshots/overview-* と reference-034-*。 |
| 日英文献案内、1440/375px | Orbifold Iitakaの図前文献案内、著者・正式名・用途・版・リンク | 共通reference-guide表示。新規author-keyを維持。screenshots/article-*-diagramsources と reference-orbifold-*。 |
| 日英主張・証明、1440/375px | Schnellの主張カード、出典行、図→説明、読書案内。見本の不足は引き継がず中間主張欄も実装。 | screenshots/article-*-results、theorem63、proposition92、proof1step1、proof2step1 と reference-schnell-*。 |
| 日英3図 | 数式、操作見出し、矢印の役割と引用、専用余白 | 全6SVGをPNG化して目視。箱・矢印・引用の重なり／欠けなし。figure-{main,joint,coordinates}-{ja,en}.png。375pxでは共通の全体表示となるため、拡大の操作確認は第2段階で行う。 |

見本側は保存済みdistを利用しており公開最新版への再照会はしていない。338のサイトヘッダー、言語切替、図拡大操作、実ルート、公開PDFは第2段階の確認対象。原典PDFの主定理p.2およびBR03の誌面p.887/PDFp.4もページ画像で確認した。

## 検査結果

- validate-stage1.mjs：2レジストリのtext-only引用同期、19図生成ハッシュ、日英各3主張・3図・7節、184数式の正規化multiset一致、引用列一致、内部アンカー欠落0、共通表4列1行、MathJaxエラー0。evidence/stage1-validation.json。
- check-preview.mjs：日英×1440/375px×338記事・案内・見本3種の20状態で文書幅超過0、MathJaxエラー0。evidence/screen-validation.json。スクリーンショットは数値検査と別に目視した。
- 図生成：XeLaTeX -no-pdf→XDV→SVG、日英3図成功。Overfull box・欠落glyphなし。公開用PDFは生成していない。
- 全体テスト：npm実行ファイルが環境にないため同一scriptのnode --test scripts/*.test.mjsを実行。38中37成功、1失敗。全レジストリ引用検査が037の未配置public/diagrams/catalog-037/normalized-volume-gap-four/overview.en.svgで停止。evidence/node-test.log。
- 全体check:citations相当（node scripts/sync-citations.mjs --check）も同じ037で停止。338の公開コピーも第2段階まで作らないため、全体成功とは報告しない。evidence/check-citations-node.log。
- build、サイトcheck:links、日英PDF生成・check:pdf、公開は今回の依頼範囲外で未実施。

機械検査と画面比較は表記・構造の検査であり、数学的正しさの証明ではない。
