# Projection記事の別担当による原典照合

担当：gpt-6-astra（irrational-trace担当、作者とは別）。2026-10-15、初稿読解12:41 UTC開始、修正後文言の最終確認12:51 UTC（途中に自身の記事引用修正を含む。専用の実作業時間は分離計測していない）。全証明の独立検証ではない。

固定原典：inventory.jsonの2026-09-23版、76頁。日英原稿・3組のTikZ・引用記録を対象に、原典の主張と以下の証明接続を照合した。

- Theorem 1.1 p.2、§2 pp.4–6：有限生成torsion-free群、実際のscalar Cr*内の非自明射影、0<τ(p)<1/2。行作用素の下界sqrt(1−a)−sqrt(a)>0、cornerでの逆元、自由積内の有限行からscalar射影への圧縮を確認。
- Theorem 3.1 p.6、Theorem 7.1 pp.26–27：中間群Γ_projの行列射影と正の非整数（非正規化）トレース。主定理のG_proj=Γ_proj*F_Nとの区別を確認。
- §§5–6 pp.18–20,24：Moser–Tardos条件、towerの正規化評価。外部MT Theorem1.1 p.1の記述と有限LLLへの適用を確認。
- §7 pp.36–38,41：stabilizer/acyclic coneの議論と整数中心拡大のtorsion排除を確認。長さ2の自由分解と有限巡回群の周期性の矛盾という接続を確認。個々のdiagram手術は独立再構築していない。
- §§8–9 pp.47–53：磁気項のabsorption、weighted評価、pruning圧縮、Theorem9.2とLemma9.3のfull norm帰着を確認。
- §§10–11 pp.65–73：一様gap、全コピーのequivariant restrictionによるトレース上界、正値性、scalar圧縮を確認。非equivariantな局所projection同値だけからトレース比較をしない記事記述を確認。
- §11 p.73のtrivial-coefficient assembly非全射と、外部BGW Proposition10.3（著者版PDF p.36）のtorsion-free群に対する像の整数トレースを照合。これはΓ_projの行列射影からの帰結であり、別論文のirrational-trace群や有理化後の非全射性と同一視しない。

修正1件：記事§3 step1のtowerによる定数保存を、原典Proposition6.3どおりpruning前のY^0に限定するよう依頼。作者は日英でY^0を明示し、pruning後Yには後続のΠOΠ圧縮評価を使うことを追記、引用再生成を完了した。修正後の文言を確認。

結論：上記範囲で主要結果の各結論への接続を確認し、未解消の重大な記事誤記は見つからなかった。確率評価の全定数、Schwartz kernelの全展開、templateの丸め誤差、外部定理の証明そのもの、全diagram surgeryの独立検証は対象外。画面・リンク・PDFの検査は本部に委ねる。
