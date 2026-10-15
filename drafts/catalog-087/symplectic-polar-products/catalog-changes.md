# カタログ087への申し送り

- 執筆：gpt-6-astra。公式順3、19pp、September 22, 2026、固定commitはsources.json参照。
- 主結果：Theorem 1.1 (p.1), n≥2、原点対称な任意の凸体のLagrangian極体積のGromov幅は4。各c<4の滑らかな埋込みを構成。cは容量、半径はsqrt(c/π)、実次元は2n。
- 方法：Theorem 2.1（pp.4–7）の正則零点から容量πk未満の球とProposition 3.2（pp.9–12）の全レンズ一様評価をProposition 4.1（pp.12–14）で合流。有限極体近似と倍率相殺で一般体へ。上界は支持円柱＋nonsqueezingで独立。
- 帰結：Corollary 5.3（pp.16–17）で4^n/n!。n=1は別に直接計算。Remark5.4は立方体の鋭さ例、全等号例の分類ではない。
- Corollary5.5（p.17）はn≥3の有限球充填の十分条件。OpenAI *Symplectic Ball Packings in Higher Dimensions* Theorem1.1 p.2（固定commit、43pp）を帰結だけに使う。外部引用キーOpenAI26p。閉球の近傍上の埋込み、厳密不等式、有限個の近傍縮小を維持。

## カタログ内の関係

1. symmetric-mahler → symplectic-polar-products：背景（同じレンズ）としてp.2、§3 p.7に引用。原稿はcompanionの体積定理も等号分類も証明に使わないと明記。直接依存矢印を作らない。
2. Symplectic Cor5.3とSymmetric主定理の体積下界部分：対象と結論の比較／別経路。Symplecticは等号分類を含まない。Symmetric側の番号・仮定は本部が別担当の原典読解と照合する。
3. general-mahler：本稿で読んだ証明中に直接入力は記録なし。全関係を調査済みとしない。
4. ball-packings（カタログ外）：Thm1.1 p.2 → Symplectic Cor5.5 p.17、kind=consequence。幅定理・Mahler不等式の入力へ混ぜない。

## 本部の次の作業

- 本稿5証明節：Theorem1.1、Theorem2.1、Proposition3.2、Corollary5.3、Corollary5.5。主要結果の全結論はconclusionCoverage、補助結果はintermediateConclusionCoverageに記録。
- 共通rendererのアンカーはproof-1～proof-5。図前の中間主張欄theorem-2-1/proposition-3-2は完全な仮定・結論付き。
- 日英本文・5種の日英TeX/SVG・author-key citations・外部の誌面/PDF対応・manifestを用意済み。publicコピーは未実施。
- 別Astraによる内容点検、Schnell／Orbifold Iitakaとの隔離preview画面比較、日英375px確認を本部で実施する。
- 第2段階でサイト組込みと日英PDF冊子。第3段階で公開。これらは未実施でありカタログ全体の完成を意味しない。
