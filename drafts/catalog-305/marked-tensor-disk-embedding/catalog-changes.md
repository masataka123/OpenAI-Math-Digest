# 305案内への引継ぎ：marked tensor

- 公式順2、正式タイトルはinventory.json参照。主要結果Theorem 1.1 p.2、結論の範囲はRemark7.1 p.48。
- JA要点：framedな代数的双対球面をもつ有限円板配置に対し、同じ境界写像と誘導normal framingを保つdisjoint locally flat replacementsが存在しないと主張する。相対ホモトピー類は不指定。
- EN claim: A finite disc configuration with framed algebraic dual spheres has no disjoint locally flat replacements preserving its boundary maps and induced normal framings; relative homotopy classes are not prescribed.
- JA役割：二頂点への切断、非被約critical schemeのbased holonomyを保持する代数化、両側の三次gradient-ideal所属を有限tensor障害へ接続する。
- EN role: Two-vertex cuts, algebraization preserving based holonomy on nonreduced critical schemes, and source/target triple gradient-ideal memberships feed a finite tensor obstruction.

## 二本の円板原稿の原典比較

|観点|boundary-only|marked tensor|
|---|---|---|
|主定理|Theorem1.1 p.3|Theorem1.1 p.2|
|入力|proper generic discs＋framed algebraic dual spheres。各sphere個別embedded可|proper generic discs＋generic framed spheres。Lemma2.4 pp11–13の構成では各sphere個別embedded可|
|対角条件|λ(g_i,g_j)=0に対角を含む、μ̃(g_i)=0|同じ。対角を明示している|
|仮想出力の境界|given boundary circles、境界像|same boundary maps|
|仮想出力framing|不指定。全境界充填を排除|f_iが誘導するnormal framingを保持|
|相対homotopy類|不指定|不指定|
|output dual sphere|不要|不要|
|marking|構成した語と経路。出力円板への追加条件なし|based曲線・経路とholonomy。出力円板への追加条件なし|
|framingが使われる核心|入力球面と代数的条件。仮想出力のframingは切断に使わない|底面を仮想置換capで圧縮する際の局所平坦性・product collar (§2.4 p13)|
|切断|graph型Gからd壁。切断後Xや壁は非連結/閉成分を許す (Prop2.8 p16)|parity商に2連結頂点A,B・2m連結辺。m active (Prop2.2 pp7–8)|
|代数化|勾配jetの単一代数chartとTaylor tuple降下、任意ideal冪近似、補正graph (Lemma5.3 pp33–34, Thm5.8 pp36–38)|shifted symplectic/Darboux chartとfull relative trace比較。Jac(f)^2誤差をcritical quotient恒等flowで除去 (Thm5.1 pp30–36, AppA pp48–52)|
|正標数の矛盾|二つの三次則からunit residueに対しw b_s=0 (Thm6.1 pp39–46)|右三次則でtensor分解、左三次則で各tensorの定数pairingを零化 (Thm3.1 pp16–23)|
|別の帰結|F2 nongood (Cor1.2 p4)、無制限surgeryとs-cobordismの両立否定 (Cor1.3 p5)|ordinary/simple surgery・5D s-cobordismの個別反例は主張しない (Remark7.1 p48)|

境界写像のparametrizationを合わせることとnormal framingを合わせることは別。両稿の相対homotopy類不指定を「任意の相対類での解の存在/不存在」の定理へ言い換えず、仮想出力に類保持の条件を課さないという量化を保持する。

## カタログ関係の判断

2本の間で証明の直接引用を確認しなかった。上表は結果の要求条件・方法の比較であり、同一幾何配置の改訂関係や一方の定理から他方への証明依存を認定しない。共通する入力条件・三次則・finite tensorという着眼点を比較線で示すことは可能だが、direct-dependency矢印にしない。

PD4原稿との直接依存は、同稿の原典と担当の記録によって判断する。本稿Remark7.1から、円板障害だけをWall manifold conjectureの反例の証明とする矢印は作らない。
