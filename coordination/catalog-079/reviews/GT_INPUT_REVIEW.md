# GT 正則性入力の独立照合

担当：reviewer、gpt-6-astra / high。2026-10-28。EW 初稿後の追加内容編集として実施。

**判定：U-EW-GTを解消。** 引用された定理の記述・仮定とAppendix A pp.39–40の適用条件を照合した。これはGT定理自体の証明の再検証やTheorem A.1の全計算の独立再証明ではない。

## 版と取得

David Gilbarg / Neil S. Trudinger, *Elliptic Partial Differential Equations of Second Order*, Springer, 2001, reprint of the 1998 edition, ISBN 3-540-41160-7, DOI 10.1007/978-3-642-61798-0。EW [31]の引用版に対応する。

- 公式書誌：https://link.springer.com/book/10.1007/978-3-642-61798-0
- 大学図書館の公開PDFは書誌・目次7頁のみ。本文は得られず、これを定理照合には使っていない。
- 本文の別ミラー：https://djvu.online/file/jxRRleAzbYjsl 。同版のタイトル・copyright・ISBN・頁番号を確認。OCRを読んだ後、下記5頁の原書誌面画像を目視して微分次数・閉包・構造条件を確定した。二次的な解説の数学的解釈は根拠にしていない。
- ローカル資料は全巻PDFでなく個別誌面のWebP。PDFページ番号は未取得であり推測しない。画像のsource URL/hashはGT_SOURCE_IMAGES.json。
- 取得経過：通常sandbox内curlはDNS失敗。許可されたネットワークcurlで必要画像取得成功。Python urllibはローカル証明書設定で失敗したため、TLS検証付きcurlを使用。取得失敗を数学的未確認として残す必要はなくなった。

## 入力の記述（原書の要約、逐語引用なし）

6.14 (p.107): On a bounded C^(2,alpha) domain, strict ellipticity, nonpositive zeroth-order coefficient, C^alpha coefficients/right side and C^(2,alpha) boundary data give a unique C^(2,alpha) Dirichlet solution. 6.19 (p.111): C^(k,alpha) coefficients/right side and C^(k+2,alpha) domain/data upgrade an existing continuous-up-to-boundary classical solution to C^(k+2,alpha).

17.14 (p.461): A C^4 solution for a C^2 operator satisfying (i)′ and (ii)′ has an interior Hessian Hölder bound. The conditions (p.456) are uniform ellipticity along the solution and concavity in the Hessian variable on its range. 17.26′ (p.481): For a bounded C^3 domain, C^3 boundary data and a C^3-up-to-boundary/C^4-interior solution, the same conditions give a global C^(2,alpha) bound. The estimate uses the C^2 bound and controlled operator derivatives. This primed version does not impose (17.85).

## EWへの適用条件との対応

1. **線形化**：EW p.39のLはQ^(-1):H(w)、零次項は0。rank-one symbolから実楕円性を確認する説明があり、各smooth solutionの閉包上Q>0とcompactnessが正の下限を与える。係数・データ・境界は滑らかなので6.14/6.19の正則性条件を満たす。平坦な周期商は書籍のEuclidean domainそのものではないが、原稿は有限局所被覆、共通strict barrier、最大原理のC0評価、Dirichlet Laplacianからのcontinuityによって可逆性を組み立てており、定理を無説明で商へ転用していない。
2. **非線形入力**：p.40で先に全実HessianのC2上界を得て、det Q>=c0と組み合わせQの固有値を[c,C]に閉じ込める。この順序は、先に正則性を仮定してC2評価を得る循環ではない。連続法の既存smooth solutionsは17.14/17.26′の事前正則性を満たす。
3. **構造条件**：原稿のcompact convex Kは全解Hessianを含む。log det H(M)は正値錐上で凹、rank-one微分は[C^(-1)|xi|²,c^(-1)|xi|²]。従って(i)′(ii)′と対応する。K近傍で1のcutoffを掛けた全行列空間への拡張はK上の関数・微分を変えない。全行列空間で凹性・楕円性を保つことを要求する別定理と取り違えていない。
4. **右辺・境界と定数**：log g_tは正の一様下限を持つ滑らかな族、B0と境界も滑らか。有限チャート内で必要な係数微分を制御できる。原稿の局所境界評価＋内部評価から有限被覆で全体評価へ進む説明は、書籍p.481の局所境界帰着と整合する。限界後の接線微分・法線回収・Schauder bootstrappingは原稿自身の段階として区別されている。

以上はGT→Theorem A.1→Theorem 1.2という直接入力接続の記述・適用条件の確認である。全boundary calculation、cofactorの全成分計算、GT内の証明の再帰検証は確認対象外として残す。

## 著者へ返す変更範囲

本文の日英依存表・確認範囲、sourcesのGT依存状態と照合箇所、引用案内の用途、overview末尾/checkingScopeを更新する。初稿時点の未照合記録は履歴として残し、追加編集で解消した日時・独立担当を付す。引用版の誌面107/111/456/461/481を記録し、未取得のPDFページは埋めない。既存TeX図にGT定理を追加する必要はない（図はA.1自体を引用している）。
