import records from '../../drafts/catalog-033/overview/connections.json' with {type:'json'};
import {text} from './site.mjs';
// Keep source keys and all existing anchors stable; expand only reader-facing labels.
export const paperName=key=>records.papers[key]?.displayName??key;
export const readableNames=value=>value.replace(/(?<![A-Za-z0-9_])(?:OI|WV|RA|PH|BS|LA|KA|CK)(?![A-Za-z0-9_])/g,paperName);
export const readableHtml=html=>html.replace(/<[^>]*>|[^<]+/g,part=>part.startsWith('<')?part.replace(/(aria-label|alt)="([^"]*)"/g,(_,name,value)=>`${name}="${readableNames(value)}"`):readableNames(part));
const readableText=value=>Object.fromEntries(Object.entries(value).map(([lang,label])=>[lang,readableNames(label)]));
export const overviewSectionIds=['articles','diagram-sources','main-routes','additional-routes','models','kahler','comparisons','dependencies','sources'];
export const overviewLabels=[['記事一覧','Articles'],['図の引用','Diagram citations'],['下界・変動・上界','Main routes'],['追加結果','Additional results'],['034との接続','Models in 034'],['Kähler稿への入力','Kähler inputs'],['別経路・手法比較','Comparisons'],['接続の記録','Connections'],['原典・確認範囲','Sources and scope']];
// Anchors point to the proof step explaining the cited result, not merely to the paper.
export const connectionSections={
 c01:['proof-3','proof-2'],c02:['proof-1-step-4','proof-3'],c03:['proof-3','proof-4'],
 c04:['proof-1-step-3','proof-7'],c05:['proof-5','proof-7'],c06:['proof-5','proof-7'],
 c07:['proof-3','nonvanishing-explanation-1'],c08:['proof-1-step-2','proof-3'],
 c09:['proof-2-step-1','proof-3'],c10:['proof-1','proof-3'],c11:['proof-2','proof-3'],
 c12:['corollary-11-2','proof-6'],p01:['results','results'],
};
const notes=Object.entries(records.papers).map(([short,p])=>({id:p.paperId,short:paperName(short),catalogId:p.catalogId}));
const entries=records.connections.filter(c=>['direct','consequence','premise'].includes(c.kind)).map(c=>({
 id:c.id,fromId:records.papers[c.source].paperId,toId:records.papers[c.target].paperId,
 result:`${c.sourceResult} · pp. ${c.sourcePages}`,url:records.papers[c.source].sourceUrl,
 use:`${c.usedAt} · pp. ${c.usedAtPages}`,to:{url:records.papers[c.target].sourceUrl},
 kind:c.kind==='consequence'&&c.scope==='additional'?'additional':c.kind,
 role:readableText(c.supplies),
 check:text('入力の記述・使用箇所を照合。入力定理・利用先の全証明の独立検証ではありません。','Statement and receiving use compared; complete source and receiving proofs have not been independently verified.'),
}));
export const dependencyConfig={
 notes,entries,sections:connectionSections,defaultPaper:'whole-fiber-variation',
 kinds:{direct:text('直接入力','Direct input'),consequence:text('帰結への入力','Input to a consequence'),additional:text('追加結果への入力','Input to an additional result'),premise:text('前提との対応','Premise match')},
 hint:text('番号はカタログ番号／掲載順。帰結・追加結果の入力は主定理の入力と区別し、前提との対応も明示しています。別経路・類似手法・背景は比較節を参照してください。','Numbers give catalogue / paper order. Inputs to consequences and additional results are distinguished from main-proof inputs; premise matches are labelled separately. Alternatives, similar methods, and background are discussed in the comparison section.'),
};
export {records};

// The groups organize the synthesis without turning comparisons into dependencies.
export const overviewThemes=[
 {id:'main-routes',title:text('下界・変動・上界','Lower bounds, variation, upper bounds'),
  question:text('OIのどの結果がWVとRAへ入るか','Which OI results enter WV and RA'),
  body:text('対数劣加法性とHodge lineの随伴正値性を分け、RAが独立に得る上界と合わせる段階をたどります。','Separate logarithmic subadditivity from adjoint positivity of the Hodge line, then locate the step combining the lower bound with RA’s independent upper bound.'), papers:['OI','WV','RA']},
 {id:'additional-routes',title:text('相対飯高構成とKähler帰納法','Relative Iitaka constructions and Kähler induction'),
  question:text('切断・Hodge line・境界を何のために比較するか','Why compare sections, Hodge lines, and boundaries'),
  body:text('WVの追加経路と034のKAに渡す補助結果を整理します。主定理への入力と追加結果への入力は区別します。','Track auxiliary inputs to WV’s additional route and KA in catalogue 034, distinguishing them from inputs to the main theorem.'),papers:['OI','WV','KA']},
 {id:'models',title:text('モデル存在との接続と別の経路','Good models and alternative routes'),
  question:text('034との往復と、PH・BSの位置付け','Connections with 034 and the roles of PH and BS'),
  body:text('OIからLA・CKへ、LAからWVの帰結へ進みます。PHの別証明とBSの半豊富性は比較節で個別に扱います。','Follow OI into LA and CK, and LA into a consequence in WV. PH’s alternative proof and BS’s semiampleness argument are treated separately in the comparison section.'),papers:['LA','CK','PH','BS']},
].map(theme=>({...theme,question:readableText(theme.question),body:readableText(theme.body)}));

export const overviewStepConnections={
 'main-routes':['c01','c02','c03'],
 'additional-routes':['c04','c05','c06'],
 models:['c07','c12','p01'],
 kahler:['c08','c09','c10','c11'],
};
