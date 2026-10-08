import records from '../../drafts/catalog-033/overview/connections.json' with {type:'json'};
import {text} from './site.mjs';
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
const notes=Object.entries(records.papers).map(([short,p])=>({id:p.paperId,short,catalogId:p.catalogId}));
const entries=records.connections.filter(c=>['direct','consequence','premise'].includes(c.kind)).map(c=>({
 id:c.id,fromId:records.papers[c.source].paperId,toId:records.papers[c.target].paperId,
 result:`${c.sourceResult} · pp. ${c.sourcePages}`,url:records.papers[c.source].sourceUrl,
 use:`${c.usedAt} · pp. ${c.usedAtPages}`,to:{url:records.papers[c.target].sourceUrl},
 kind:c.kind==='consequence'&&c.scope==='additional'?'additional':c.kind,
 role:c.supplies,
 check:text('入力の記述・使用箇所を照合。入力定理・利用先の全証明の独立検証ではありません。','Statement and receiving use compared; complete source and receiving proofs have not been independently verified.'),
}));
export const dependencyConfig={
 notes,entries,sections:connectionSections,defaultPaper:'whole-fiber-variation',
 kinds:{direct:text('直接入力','Direct input'),consequence:text('帰結への入力','Input to a consequence'),additional:text('追加結果への入力','Input to an additional result'),premise:text('前提との対応','Premise match')},
 hint:text('番号はカタログ番号／掲載順。帰結・追加結果の入力は主定理の入力と区別し、前提との対応も明示しています。別経路・類似手法・背景は上の比較節を参照してください。','Numbers give catalogue / paper order. Inputs to consequences and additional results are distinguished from main-proof inputs; premise matches are labelled separately. Alternatives, similar methods, and background are discussed above.'),
};
export {records};
