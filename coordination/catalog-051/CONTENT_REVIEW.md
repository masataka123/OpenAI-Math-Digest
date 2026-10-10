# カタログ051 内容・形式の受領記録

> 公開工程の更新（2026-10-10）：ユーザーの「じゃあ公開しましょう」により、本チャットがサイト本部を兼任して組込み・PDF・公開を担当。以下は原稿引渡し時点の履歴。後続結果は[PUBLICATION.md](PUBLICATION.md)を参照。

本部兼記事担当、2026-10-10、制作セット1.3。単独制作であり別担当の独立査読ではない。著者の主張の紹介と、編集側が行った原典との照合を区別する。

## 主張・全結論・説明先

| 対象と原典ページ | 保持した条件・結論 | 日英の説明先 | 照合内容 |
|---|---|---|---|
| Theorem 1.1、p.1 | コンパクト連結Kähler、n≥1、全C→Xが定数。K_X ampleと正の冪の射影埋込み | proof-overview-step-1〜4、最終結論はstep-4 | 円板変分の二用途→nef＋正の交点→big→Moishezon＋Kähler→射影性→有理曲線なし＋klt錐定理→ample。埋込みまで記述 |
| Proposition 5.2、pp.17–18、前提pp.16–17 | f,B,Fの境界W^{1,p0}、p0>2、非特異な正規化枠、中心固定と指定変分、任意の閉実q。3恒等式 | proof-1-step-1〜3 | 達成と尾評価、枠と実際の族、積分微分、弱い境界極限。図前に全3式を記載 |
| Proposition 6.4、p.21 | 任意のε>0の滑らかな近似とnef性 | proof-2-step-1〜3 | 固定テスト円板でδ→0、行列式束上包絡、双対の符号、付録Aの平滑化。連続性を仮定しない |
| Proposition 7.1、p.22 | 全hでR_h≥−h、hによらない明示定数 | proof-3-step-1〜2 | 定数円板との比較→行列式下界とtrace上界→比で枠を消去。補助量の一様性と混同しない |
| Proposition 8.2、pp.23–24 | 主定理の仮定、正の最高自己交点 | proof-4-step-1〜2 | 任意の体積形式に対する存在、Ricciの符号、計量収束を使わない交点多項式の極限 |
| Corollary 10.1、p.26 | 全整数m≥n+2の大域生成 | proof-5-step-1〜2 | 038 Corollary 6.3、L=K_X、指数m−1≥n+1。最小指数のみの主定理へ置換しない |
| Corollary 10.2、pp.26–27 | 半代数的な通常の普遍被覆という追加仮定、連結有限étale積被覆、因子・群作用の全条件、点因子 | proof-6-step-1〜3 | 射影化後に058、C^m除去、Fの滑らかさ・双曲性、Aut(F)有限、積作用、有限指数核、自由性・固有不連続性・離散性・余コンパクト性 |

主要結果3件、証明対象7件、全結論の対応7件。独立した中間命題4件は、仮定・量化・結論・引用を図前の共通主張欄に配置。7図の後に合計19の説明段階がある。主定理全体を中間命題の詳細より先に置いた。

## 外部文献と確認範囲

sources.jsonとoverview/connections.jsonに12文献の版・ページ・供給結果・利用箇所・適用条件を記録。内訳は主定理への直接入力8件、比較参照1件、系への入力3件。

- Oka原理、Cauchy–Green右逆、複素Banach陰関数定理：Stein円板のGL_n枠束、p>2での中心評価、可逆な線形化との適用を照合。
- Poletsky–Rosay：連結複素多様体の連続重みと包絡の有限上下界を照合。
- Monge–Ampère：Bermanに明記された任意の正の体積形式の存在記述と規約を照合。体積の事前正規化を加えていない。
- DemaillyのMorse不等式：指数≤1の積分判定と、超平面上の切断増大の評価。Namikawa：滑らかさによる1-rational条件とKähler性を照合。
- Diverio–Trapaniは同じample判定の比較参照。本稿はProposition 9.3をFujinoの錐定理・klt判定・Kleimanから再証明しているので、DTの証明への必須の矢印とはしない。
- 038の全指数版と058の分類は系だけへの入力。Kobayashi 1959のc1(F)<0による自己同型群の有限性と、Fが点の場合を区別。

原稿§§3–10と付録Aの使用箇所を読んだが、全関数解析的評価・Sobolev置換・弱い境界極限・平滑化評価の独立再証明はしていない。Kollárの解消定理の原典、別経路のDemailly正則化定理、全方法的背景は未照合。外部定理の全証明、とくに038・058の全証明は今回の対象外。完全な依存監査や数学的正しさの認定ではない。この範囲を日英本文にも記載。

## 制作セット1.3の受領

| 項目 | 入力元 → 表示先 | 自動確認 | 目視証拠 | 残作業 |
|---|---|---|---|---|
| 公式順共通4列表 | inventory＋overview/presentation → renderCatalogInventory | 公式順1行、4列、必須情報と記事・原典別リンク | validation/screensのoverview/034 detail・right、日英1280/375 | 登録後再確認、PDF導線・冊子 |
| 図前文献一覧・引用区別 | sources＋citations → 本文・TeX | 本文71引用マーカーの日英一致、外部12件、図中リンク集合一致 | article-diagram-sourcesと033 Orbifoldの比較、全14SVG | 公開コピー配置後の全体check:citations、冊子 |
| 証明対象・主張欄 | mainResults/proofTargets/statements/conclusionCoverage | 3主結果、7対象、全主張・説明アンカーの存在、図前配置 | article-proof-1/-2とSchnellの主張→図→文章 | サイト実ルートとPDFで再確認 |
| 原典読書案内 | readingList → 記事末尾 | 日英11件の結果・ページ・読む目的 | article-sourcesの表示、確認範囲の本文照合 | 冊子への反映 |

## 表示・図・検査

サイト本体を変えず、共通renderDraft／renderCatalogInventoryと既存distのレイアウト・CSSを用いたローカルプレビューで確認した。MathJaxはローカルの同ライブラリ。見本は既存distの034、Schnell、033 Orbifold Iitaka。サイト登録・公開版・PDFの確認とは区別する。

日英×1280/375px×記事・案内・3見本の20条件で、ページ横はみ出し・MathJaxエラー・JavaScript例外・欠損画像なし。変更後の記事4条件は再点検した。4列表は狭幅で表の中だけ横スクロール。中間命題は共通の淡色主張欄とし、図前に必要な仮定を明記。既存Schnellの旧形式を完全仕様とはせず、FORMAT_CONTRACTを優先した。

14SVGを画像で閲覧し、箱・矢印・説明・引用の重なりや欠けを確認。長い引用は分行し専用余白を設けた。TeXのOverfull／Missing characterなし。本文の表示数式13組と引用マーカー71組は日英一致。39生成関連ファイルのSHA-256と図内リンク集合を確認した。図のタップ拡大・言語切替・公開PDF導線は、サイト本部が登録後の実ルートで確認する。

検査証拠：validation/content-checks.json、structure.json、visual-checks.json、visual-recheck.json、inventory-visual.json。全体npm test／check:citations／build／check:linksは未登録状態で合格を装わず、サイト本部の組込み工程へ残す。
