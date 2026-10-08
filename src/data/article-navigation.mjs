import {articleNavigationLabel as legacyLabel} from './catalog-034-navigation.mjs';
const proofLabels={
 'orbifold-logarithmic-iitaka':[['主定理の全体像','Main theorem'],['捻りの相殺','Cancel the twist'],['対数劣加法性','Logarithmic subadditivity'],['標数0への移行','Characteristic zero'],['WVへの追加結果','Additional inputs to WV']],
 'whole-fiber-variation':[['全体図','Overview'],['Parameter field','Parameter field'],['最初のconstancy','First constancy'],['全ファイバーの降下','Whole-fiber descent'],['境界のない場合','Empty boundaries'],['Smooth familyの帰結','Smooth-family consequence'],['追加結果','Additional results']],
 'reverse-logarithmic-additivity':[['上界の全体像','Upper-bound route'],['切断の構成','Constructing sections'],['捻りの除去','Removing the twist'],['下界から加法性へ','Additivity']],
 'projective-hodge-lines':[['随伴正値性','Adjoint positivity'],['標準束比較','Canonical comparison'],['二つの底と補間','Two bases and interpolation']],
 'kahler-b-semiampleness':[['全体図','Overview'],['閾値と延長','Thresholds and extension'],['積分解の族','A product family'],['因子の半豊富性','Semiample factors'],['延長と降下','Extension and descent']],
};
export function articleNavigationLabel(paperId,heading,lang){
 const n=heading.slug.match(/^proof-(\d+)$/)?.[1];
 return proofLabels[paperId]?.[Number(n)-1]?.[lang==='en'?1:0]??legacyLabel(paperId,heading,lang);
}
