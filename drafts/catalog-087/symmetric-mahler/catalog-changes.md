# カタログ本部への申し送り（gpt-6-astra）

- 公式順1、正式題名 The symmetric Mahler conjecture and its equality cases、OpenAI、September 22, 2026、26頁。台帳の版・SHA-256一致。
- 日本語の要旨案：原点対称凸体の全次元Mahler下界 $4^n/n!$ と、等号が線形Hanner体に限ることを主張する。等角lensの境界分布と孤立零点の質量を実現可能単体の積分へ移し、等号では1次元liftと共通witnessから極体のmedian・3球交差性へ帰着する。偶関数型 $4^n$ と対称entropy–transportの系も扱う。
- English summary: Claims the all-dimensional symmetric bound $4^n/n!$ and precisely the linear Hanner equality cases. A conformal lens law and isolated-zero mass produce a feasible-simplex integral; equality is lifted by one dimension and converted through a common witness to medians and the three-ball property of the polar. Includes the even functional constant $4^n$ and a symmetric entropy–transport consequence.
- 役割：対称凸体の不等式と全等号族を扱う幾何・解析経路。general-mahlerと同じ体積積問題の関連論文だが、本稿§1.1 p.3は証明の独立性を明記する。general→symmetricの直接依存矢印は作らない。一般版の定数だけから対称版は従わない。
- symplectic-polar-products側の引用・適用は利用先担当／本部が原典で確認する。本稿からの直接入力と推定しない。
- 核心外部入力：HL81 Corollary 7.4, p.15 → Theorem8.3/Proposition8.4, p.23。有限次元実Banach空間／任意半径の閉球という適用条件を照合済み。分類定理自体の全証明未検証。
- 帰結外部入力：FM08 Proposition1(a)（誌面1433/PDF5）→ Cor1.2；CEK15 Lemma4（3840/7）・Prop7証明（3844/11）、FGZ21v3 Theorem1.3（p.3）→ Cor1.3。後2件の有限性を主結論として本文・coverageにも対応。関数版の等号分類は未主張。
- Gross lens／Demailly generalized Lelongは背景であり、本稿が必要な性質を内部証明する。参考文献の存在だけで外部入力の辺を作らない。
- 総括図採否への情報：対称／一般／symplecticの独立した出発点と結論の一致・差異を比較する図は有用になり得る。三者を一本の依存鎖にはしない。主に「中心・定数・等号の扱い・核心手法」で比較することを推奨。最終採否は利用先照合後に本部が第6節で記録。
- 外部原典取得先：coordination/catalog-087/sources/symmetric-external/（HL81,FM08,CEK15,FGZ21の日付付き書誌・hashはsources.json）。一般版の外部照合に同一原典を使う場合、FM08は著者personal copyに表紙があり誌面1433=PDF5。CEK15誌面3840=PDF7。
- 共通rendererで proof-overview / proof-1…proof-5 を確認済み。6証明対象、日英12図、17 display式一致。各中間命題に原典の主張欄あり。
- 本部で必要：独立Astra交差点検、033/034見本とのPC/375px画面比較。サイト組込み・日英冊子PDF・public copy・公開は本依頼範囲外。full check:citationsはpublicコピーを要求するためStage1では実行対象外、text-only＋manifest個別照合を実施。
