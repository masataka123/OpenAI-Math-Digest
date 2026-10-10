import inventory033 from '../../coordination/catalog-033/inventory.json' with { type: 'json' };
import inventory034 from '../../research/catalog-034-inventory.json' with { type: 'json' };
import inventory038 from '../../coordination/catalog-038/inventory.json' with { type: 'json' };
import inventory051 from '../../coordination/catalog-051/inventory.json' with { type: 'json' };
import inventory063 from '../../coordination/catalog-063/inventory.json' with { type: 'json' };
import subjectSource from './catalog-subjects.json' with { type: 'json' };
export const text = (ja, en) => ({ ja, en });
export const languages = ['ja', 'en'];
export const sourceCommit = 'adc7f1241b42e322a6451854ab7e4b4c146bf78a';
export const sourceRoot = `https://github.com/openai/math/blob/${sourceCommit}`;
export const officialCatalog = `${sourceRoot}/CONTENTS.md`;
// Subject names and order follow overview.tex / overview.pdf at sourceCommit.
export const officialOverview = `https://raw.githubusercontent.com/openai/math/${sourceCommit}/overview.pdf`;
export const overviewTitle = 'OpenAI Research Catalog';
const fieldTranslations = [
  {
    "id": "number-theory",
    "ja": "数論",
    "catalogIds": []
  },
  {
    "id": "algebraic-complex-geometry",
    "ja": "代数幾何学・複素幾何学",
    "catalogIds": [
      "033", "034", "038", "051", "063"
    ]
  },
  {
    "id": "real-complex-analysis",
    "ja": "実解析・複素解析",
    "catalogIds": []
  },
  {
    "id": "convex-metric-geometry",
    "ja": "凸幾何学・距離幾何学",
    "catalogIds": []
  },
  {
    "id": "theoretical-computer-science",
    "ja": "理論計算機科学",
    "catalogIds": []
  },
  {
    "id": "dynamical-systems-ergodic-theory",
    "ja": "力学系・エルゴード理論",
    "catalogIds": []
  },
  {
    "id": "combinatorics",
    "ja": "組合せ論",
    "catalogIds": []
  },
  {
    "id": "algebra",
    "ja": "代数学",
    "catalogIds": []
  },
  {
    "id": "probability-statistical-mechanics",
    "ja": "確率論・統計力学",
    "catalogIds": []
  },
  {
    "id": "mathematical-logic",
    "ja": "数理論理学",
    "catalogIds": []
  },
  {
    "id": "group-theory",
    "ja": "群論",
    "catalogIds": []
  },
  {
    "id": "mathematical-physics",
    "ja": "数理物理学",
    "catalogIds": []
  },
  {
    "id": "operator-algebras",
    "ja": "作用素環",
    "catalogIds": []
  },
  {
    "id": "topology",
    "ja": "トポロジー",
    "catalogIds": []
  },
  {
    "id": "functional-analysis",
    "ja": "関数解析",
    "catalogIds": []
  },
  {
    "id": "differential-geometry",
    "ja": "微分幾何学",
    "catalogIds": []
  },
  {
    "id": "partial-differential-equations",
    "ja": "偏微分方程式",
    "catalogIds": []
  }
];
export const fields = subjectSource.subjects.map((subject,index) => {
  const translation=fieldTranslations[index];
  const range=`${subject.ids[0]}–${subject.ids.at(-1)}`;
  return {
    ...translation,
    title: text(translation.ja,subject.name), subtitle: subject.name,
    description: text(`公式カタログ ${range}。`,`Official catalogue ${range}.`),
    officialIds: subject.ids, range, page: subject.page,
  };
});
// Official catalogue numbers and internal manuscript IDs are different identifiers.
const manuscriptIds034 = [
  'kahler-log-abundance', 'uniform-slc-indices', 'conditional-kahler-fourfolds',
  'log-abundance-characteristic-zero', 'minimal-metrics-injectivity', 'fourfold-nonvanishing',
  'lifting-adjoint-sections', 'schnell-fiber-spaces', 'uniform-log-iitaka',
  'uniform-pluricanonical-iitaka', 'relative-denominators', 'arithmetic-stein-degree',
  'effective-log-iitaka-fourfolds', 'abundance-after-nonvanishing',
];
const papers034 = inventory034.manuscripts.map((entry, index) => {
  const [, month, day, year] = entry.path.match(/(September|October)-(\d+)-(\d{4})/);
  return {
    id: manuscriptIds034[index], catalogId: '034', sourceCommit, title: entry.title, path: entry.path.replace(/^preprints\//, ''),
    version: `${year}-${month === 'September' ? '09' : '10'}-${day.padStart(2, '0')}`,
    pages: entry.pdfPages, order: entry.order, featured: ['schnell-fiber-spaces', 'log-abundance-characteristic-zero', 'arithmetic-stein-degree', 'relative-denominators', 'uniform-log-iitaka', 'kahler-log-abundance', 'minimal-metrics-injectivity', 'fourfold-nonvanishing', 'uniform-slc-indices', 'conditional-kahler-fourfolds', 'uniform-pluricanonical-iitaka', 'lifting-adjoint-sections', 'effective-log-iitaka-fourfolds', 'abundance-after-nonvanishing'].includes(manuscriptIds034[index]),
  };
});
export const papers = [...inventory033.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '033', sourceCommit: inventory033.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...papers034, ...inventory038.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '038', sourceCommit: inventory038.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory051.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '051', sourceCommit: inventory051.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
})), ...inventory063.manuscripts.map(entry => ({
 id: entry.paperId, catalogId: '063', sourceCommit: inventory063.sourceCommit,
 title: entry.title, path: entry.path.replace(/^preprints\//, ''), version: entry.version,
 pages: entry.pdfPages, order: entry.order, featured: true,
}))];
export const catalogs = [{
 id: '033', sourceCommit: inventory033.sourceCommit,
 title: text('Campanaのorbifold飯高予想と対数的劣加法性', inventory033.overviewTitle),
 contentsTitle: inventory033.contentsTitle,
 description: text('劣加法性、全ファイバーの変動、加法性と半豊富性を、5篇の結果と証明の接続から読む。', 'Read the results and proof connections of five manuscripts on subadditivity, whole-fiber variation, additivity, and semiampleness.'),
 paperIds: inventory033.manuscripts.map(p => p.paperId),
}, {
  id: '034', sourceCommit, title: text('対数的豊富性と有効飯高ファイブレーション', 'Log abundance and effective Iitaka fibrations'),
  titlePhrases: {ja: ['対数的豊富性と', '有効飯高', 'ファイブレーション']},
  contentsTitle: 'Log abundance for compact Kähler spaces under logarithmic Iitaka subadditivity',
  description: text('豊富性と良い極小モデルに関する論文群を、仮定と結論、証明の関係から整理する。', 'A guide to manuscripts on abundance and good minimal models, organized by hypotheses, conclusions, and arguments.'),
  paperIds: manuscriptIds034,
}, {
  id: '038', sourceCommit: inventory038.sourceCommit, mode: 'single',
  title: text(inventory038.titleJa, inventory038.overviewTitle),
  contentsTitle: inventory038.contentsTitle,
  description: text('指数型最小化と局所的な持上げから、藤田の自由性予想の主張と証明の接続を読む。', 'Follow exponential minimization and local lifting through the claimed proof of Fujita’s freeness conjecture.'),
  paperIds: inventory038.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'connections', 'sources'],
}, {
  id: '051', sourceCommit: inventory051.sourceCommit, mode: 'single',
  title: text(inventory051.titleJa, inventory051.overviewTitle),
  contentsTitle: inventory051.contentsTitle,
  description: text('円板変分から標準束の豊富性へ至る証明と、大域生成・有限被覆の二つの系を読む。', 'Follow disc variations to canonical ampleness and its consequences for global generation and finite covers.'),
  paperIds: inventory051.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'connections', 'sources'],
}, {
  id: '063', sourceCommit: inventory063.sourceCommit, mode: 'single',
  title: text(inventory063.titleJa, inventory063.overviewTitle),
  contentsTitle: inventory063.contentsTitle,
  description: text('一般化向井不等式と等号の場合の分類を、point descendant・量子乗法・最小有理曲線族の接続から読む。', 'Follow point descendants, quantum multiplication, and minimal rational curves through the generalized Mukai inequality and its equality case.'),
  paperIds: inventory063.manuscripts.map(p => p.paperId),
  overviewSectionIds: ['papers', 'connections', 'sources'],
}];
export const paperSource = paper => `https://github.com/openai/math/blob/${paper.sourceCommit ?? sourceCommit}/preprints/${paper.path}`;
export const catalogsForField = id => fields.find(field => field.id === id).catalogIds.map(id => catalogs.find(catalog => catalog.id === id));
export const fieldsForCatalog = id => fields.filter(field => field.catalogIds.includes(id));
export const catalogsForPaper = id => catalogs.filter(catalog => catalog.paperIds.includes(id));
