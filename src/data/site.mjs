import inventory034 from '../../research/catalog-034-inventory.json' with { type: 'json' };
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
      "034"
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
export const papers = inventory034.manuscripts.map((entry, index) => {
  const [, month, day, year] = entry.path.match(/(September|October)-(\d+)-(\d{4})/);
  return {
    id: manuscriptIds034[index], title: entry.title, path: entry.path.replace(/^preprints\//, ''),
    version: `${year}-${month === 'September' ? '09' : '10'}-${day.padStart(2, '0')}`,
    pages: entry.pdfPages, order: entry.order, featured: ['schnell-fiber-spaces', 'log-abundance-characteristic-zero', 'arithmetic-stein-degree', 'relative-denominators', 'uniform-log-iitaka', 'kahler-log-abundance', 'minimal-metrics-injectivity', 'fourfold-nonvanishing', 'uniform-slc-indices', 'conditional-kahler-fourfolds', 'uniform-pluricanonical-iitaka', 'lifting-adjoint-sections', 'effective-log-iitaka-fourfolds', 'abundance-after-nonvanishing'].includes(manuscriptIds034[index]),
  };
});
export const catalogs = [{
  id: '034', title: text('対数的豊富性と有効飯高ファイブレーション', 'Log abundance and effective Iitaka fibrations'),
  contentsTitle: 'Log abundance for compact Kähler spaces under logarithmic Iitaka subadditivity',
  description: text('豊富性と良い極小モデルに関する論文群を、仮定と結論、証明の関係から整理する。', 'A guide to manuscripts on abundance and good minimal models, organized by hypotheses, conclusions, and arguments.'),
  paperIds: manuscriptIds034,
}];
export const paperSource = paper => `${sourceRoot}/preprints/${paper.path}`;
export const catalogsForField = id => fields.find(field => field.id === id).catalogIds.map(id => catalogs.find(catalog => catalog.id === id));
export const fieldsForCatalog = id => fields.filter(field => field.catalogIds.includes(id));
export const catalogsForPaper = id => catalogs.filter(catalog => catalog.paperIds.includes(id));
