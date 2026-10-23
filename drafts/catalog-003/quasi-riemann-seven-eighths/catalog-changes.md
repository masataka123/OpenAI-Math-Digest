# カタログ案内への申し送り（Astra執筆A）

- 対象：公式順1、199ページ原稿、paper ID `quasi-riemann-seven-eighths`。固定版はcoordination/catalog-003/inventory.jsonに従う。
- 主結果：Theorem 1.1 p.4。F=Q(sqrt(-3))上のすべての有限位数Hecke指標と、すべてのDirichlet指標（ζを含む）についてRe(s)>7/8に零点なしと主張。導手・虚部に制限なし、非原始指標を含む。主指標のs=1の極は許容。Re(s)=7/8には主張しない。一般の数体に拡張しない。
- 帰結：Corollary 1.2 p.7。奇素数pの最小二次非剰余について絶対定数付きpolylog上界（証明では指数32）、任意δ>0のOδ(p^δ)、決定的poly(log p)平方根抽出／不存在判定。
- 方法：完成添字cn^3の三次テータ反射とPoisson表示の同一和比較。Part IのTheorem 3.1が内部で11/12を与え、Part IIは素数補償と非対称尺度、inverse二乗／plain四乗モーメントを追加して7/8へ改善。Proposition 2.1が族に共通の指数幅を逆数の解析接続へ変える。
- 定数依存：正の指数余裕は対象指標に共通。固定指標に依存する除外素数・定数・半ノルム次数・高さ指数・外部尾部次数・開始尺度は許容する。全導手の一様有界定数を証明したとは紹介しない。Lemma 13.1の素数漸近も固定ray classのみ。
- カタログ内の関係：この原稿内部の11/12結果を、別の49ページ原稿からの直接依存として描かない。読んだ主定理の帰着・終結・参考文献には他2本の使用なし。全199ページの引用関係を網羅調査したとはしない。
- 形式上の結果包含を示すなら、同じ族・厳密な不等号・主極を対応させて7/8が11/12を含むことを明示し、証明入力と区別する。Landau–Siegelの一様定数や明示値との比較は担当Bの原典照合に委ねる。
- 確認範囲：sources.jsonを参照。Prop2.1、低評価、主行の正規化、モーメントの仮定・帰納の入口/終結、行数・端点・パラメータ選択順、全族への移行、Cor1.2を照合。§§17–18全再帰、Prop5.1全計算、§§8–10全検出器/積分路/尾部の独立再検証は未完了。
- 外部入力：DR24 cusp公式、GL13二次大篩、TZ19固定体Chebotarev、BIMS17弱GRH帰結、Gal18 Tonelli–Shanksを記述/使用箇所の水準で確認。記録はsources/citations、取得PDFはexternal/。
- 本文の共通アンカー：results, theorem-1-1, corollary-1-2, diagram-sources, proof-1（4段階）, proof-2（Prop2.1・2段階）, proof-3（Cor1.2・2段階）, dependencies, sources。
- 日英図：main / continuation / nonresidue。生成済みSVG・自己完結TeXとハッシュをdiagrams/に保存。publicコピー・冊子PDF・公開は未実施。
