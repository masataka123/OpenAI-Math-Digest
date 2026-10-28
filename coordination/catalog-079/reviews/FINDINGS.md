# 079 独立点検の修正往復

担当：reviewer（gpt-6-astra/high、執筆者とは別）。原典はSOURCE_CHECKLIST.mdとSOURCE_HASHES.json参照。

## 2026-10-28 初稿制作中の予備点検

この段階は執筆中ファイルへの早期フィードバックであり最終受領ではない。最終ファイルは別途ハッシュを固定する。

1. **CW 数式escape破損**：日本語本文のvarepsilonにVT制御文字、Delta/mathcal/ell/lambda等のslash脱落があり、英語もinline delimiterが通常括弧のみだった。著者へ返却。著者は全inlineを`$...$`に統一、制御文字0件、関連記号を修復したと報告。最終版を再点検する。
2. **CW hyperquadricの訳語**：日本語§4の「双曲二次曲面」は原典Definition 8.2の対象を誤って狭める（k=0の超平面も許す）。「二次超曲面」へ修正を依頼し、著者は変更済みと報告。英語hyperquadricとの対応を再点検する。
3. **EW random signsの接続**：Cor9.1証明step2の「二乗の期待値が管の指示関数の和になる」は等号に読める。無作為符号でΣ|Eh_j|²を得て、各管上のextension下界から指示関数和を下から抑える2段階へ修正依頼。数学的内容を著者が修正し、最終版で再点検する。

主要結果の範囲、Sobolev損失、全主要帰結と説明の対応、核心の帰着は予備読解時点で原典と整合。図と生成済み引用、案内は未受領のため留保。

## 正式版への反映

- CWの1・2は最終本文で再照合して解消。CRITICAL_REVIEW.mdとCRITICAL_REVIEWED_HASHES.jsonに正式版を記録。
- EWの3は日英で期待二乗→二乗和→管指示関数の下界へ変更され、kakeya図も下界を明記。解消。
- EW critical図の最終矢印が周期除去まで説明するのに§7.1の引用がなかったため追加依頼。著者がCite{period-removal}を追加し、対象日英2図を再生成。原典§7.1との対応とPNGに追加引用があることを確認。
- U-EW-GTは修正可能な誤記とは別の、主証明に必要な外部正則性入力の仮定照合未了。EUCLIDEAN_REVIEW.mdに明記し本部へ共有。依存記録と案内でも同じ留保を保つよう著者へ依頼。

## GT追加点検での解消

初稿後、reviewerが引用版GTの5誌面を取得して定理記述・仮定とAppendix Aの使用条件を照合。U-EW-GTを解消した。GT_INPUT_REVIEW.mdとGT_SOURCE_IMAGES.jsonが根拠。著者へ本文日英・引用案内・source依存状態・overview確認範囲の更新を返した。初稿時の未確認は履歴として保持する。
