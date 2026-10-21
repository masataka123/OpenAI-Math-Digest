# 305案内への引継ぎ：boundary-only

- 公式順1、正式タイトルはinventory.json参照。主要結果Theorem 1.1 p.3、Corollary 1.2 p.4、Corollary 1.3 p.5。
- JA要点：framedな代数的双対球面をもつ有限の円板配置を構成し、その境界円周には出力framingも相対ホモトピー類も指定しない互いに素な局所平坦充填が存在しないと主張する。
- EN claim: Constructs a finite disc configuration with framed algebraic dual spheres whose boundary circles admit no disjoint locally flat filling, with no output framing or relative homotopy class prescribed.
- JA役割：境界円板の実像から切断面を取り、表現変形の全defect idealと二つの三次所属を正標数の有限複体へ渡して矛盾を得る。
- EN role: Cuts away from actual filling images yield the full deformation defect ideal and two cubic memberships; algebraic replacement and specialization feed a finite-complex contradiction.

## 境界・framing・相対類の原典照合

1. Theorem 1.1 p.3の境界はgiven boundary circles（境界像）。Lemma 2.7 pp.14–15は同じ境界写像で表すが、境界像の充填を再parameterizationして使用できる。出力にnormal framing・relative homotopy class・geometric dualを要求しないことはProposition 2.8 p.16および§7 p.47で明記。
2. 入力：proper generically immersed discs、境界の和はembedded。framed sphere maps g_i がalgebraic dualでλ(g_i,g_j)=0=μ̃(g_i)。各g_iは個別smooth embeddedに選べ、互いには交差可。入力f_iのλ/μの消滅は条件ではない。実際の構成は各f_i個別embedded (§2.3 p.12)で、それぞれ誘導boundary framingをもつ。
3. 出力：境界像を充填するpairwise disjoint proper locally flat discs自体を排除。入力framingの保持を非存在の仮定に加えない。
4. F2のnongoodnessは部分群・商閉性を使うCorollary1.2の帰結。π1(M)=F2とは示していない。
5. surgery/s-cobordismは両立否定だけ（Cor1.3）。単独の失敗・Wall予想の反例への直接依存とはしない。

## カタログ内関係

本稿の§7の証明連鎖は本稿内で閉じ、他の2稿を直接入力として引用しない。markedとの差は同稿の原典照合後に同稿側catalog-changesへ追記する。現時点で単純な包含矢印や同一構成の改訂関係は認定しない。
