import test from 'node:test';
import assert from 'node:assert/strict';
import {renderDraft} from '../src/lib/render-draft.mjs';

const options={lang:'ja',paperId:'example',base:'/OpenAI-Math-Digest/',diagramSource:()=>'<svg><defs><path id="g0"/></defs><use href="#g0"/><a href="https://example.org/paper"><text>Lemma 2</text></a></svg>'};
const draft=String.raw`# Official title

**副題**

論証の狙い。

## 1. 主要結果

### Theorem 1.1

$X_1$ と $X^2$。

\[H^0(X,L) \ne 0,\quad a < b\]

[Theorem 1.1 · p. 1](https://example.org/paper)

## 図の矢印に付した引用

外部入力の略号。

## 2. Theorem 1.1 の証明

帰着。

![図1](diagrams/one.ja.svg)

### 1. モデルを得る

得た対象を次の入力へ使う。

[Lemma 2 · p. 3](https://example.org/paper)

## 3. 別の結果の証明

![図2](diagrams/two.ja.svg)

### 1. 次の接続

説明。

## 4. どの論文が、どの段階を担うか

入力の使い方。

## 5. 原典を読む入口と確認範囲

未確認範囲を維持する。
`;

test('Schnell structure preserves mathematical statements and source links',async()=>{
 const result=await renderDraft(draft,options);
 assert.equal(result.subtitleHtml,'副題');
 assert.equal(result.ledeHtml,'論証の狙い。');
 assert.equal(result.introHtml,'');
 assert.match(result.html,/class="theorem-statement"/);
 assert.match(result.html,/\$X_1\$/);
 assert.ok(result.html.includes('$$H^0(X,L) \\ne 0,\\quad a &lt; b$$'));
 assert.match(result.html,/class="source-line"><a href="https:\/\/example.org\/paper">Lemma 2/);
 assert.ok(result.html.indexOf('</figure>')<result.html.indexOf('class="article-prose proof-explanation"'));
 assert.match(result.html,/未確認範囲を維持する/);
});

test('Japanese and English headings share section anchors',async()=>{
 const ja=await renderDraft(draft,options);
 const en=await renderDraft(draft.replace('主要結果','Main results').replace('図の矢印に付した引用','References on the arrows').replace('どの論文が、どの段階を担うか','Which papers supply which steps').replace('原典を読む入口と確認範囲','Return to the sources'),{...options,lang:'en'});
 assert.deepEqual(ja.headings.map(h=>h.slug),['results','diagram-sources','proof-1','proof-2','dependencies','sources']);
 assert.deepEqual(ja.headings.map(h=>h.slug),en.headings.map(h=>h.slug));
 for(const result of [ja,en]){
  assert.match(result.html,/id="theorem-1-1"/);
  assert.match(result.html,/id="proof-1-step-1"/);
  assert.match(result.html,/id="proof-2-step-1"/);
  assert.match(result.html,/id="theorem-11"/); // The old Markdown heading remains addressable.
 }
});

test('public article links remain local in previews and print editions',async()=>{
 const {html}=await renderDraft(draft+'\nRead [the result](https://masataka123.github.io/OpenAI-Math-Digest/en/papers/example/#theorem-1-1).',options);
 assert.match(html,/href="\/OpenAI-Math-Digest\/en\/papers\/example\/#theorem-1-1"/);
});

test('multiple inline TeX figures have unique IDs and intact citations',async()=>{
 const {html}=await renderDraft(draft,options);
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(new Set(ids).size,ids.length);
 assert.match(html,/href="#example-0-g0"/);
 assert.match(html,/href="#example-1-g0"/);
 assert.equal([...html.matchAll(/href="https:\/\/example.org\/paper"/g)].length,4);
 assert.match(html,/one.ja.tex/);
});

test('older introductions and both math syntaxes are retained',async()=>{
 const {introHtml,html}=await renderDraft('# Title\n\n> 未確認の入力。\n\n背景。\n\n## 主要結果\n\n$$a_1=b_2$$\n\n\\(c<d\\) を使う。',options);
 assert.match(introHtml,/未確認の入力/);
 assert.match(introHtml,/背景/);
 assert.ok(html.includes('$$a_1=b_2$$'));
 assert.ok(html.includes('$c&lt;d$'));
});

test('missing diagrams stop the build instead of publishing an empty figure',async()=>{
 await assert.rejects(renderDraft(draft,{...options,diagramSource:()=>undefined}),/Missing proof diagram/);
});
