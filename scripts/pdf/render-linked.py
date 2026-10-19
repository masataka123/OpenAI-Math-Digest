"""Render once, then attach SVG citations using that exact paginated layout."""
import hashlib
import io
import json
import logging
import math
from importlib.metadata import version
import sys
from pathlib import Path
from urllib.parse import unquote, urlparse
from weasyprint import HTML, default_url_fetcher
from pypdf import PdfReader, PdfWriter
from pypdf.annotations import Link
from pypdf.generic import Fit, NameObject, TextStringObject


def pdf_rect(figure, link, box, page_height):
    """Map normalized viewBox coordinates through SVG preserveAspectRatio to PDF."""
    x, y, width, height = box
    vw, vh = figure['viewBox'][2:]
    parts = figure['preserveAspectRatio'].split()
    align = parts[0]
    if align != 'none':
        if align not in {f'x{a}Y{b}' for a in ('Min', 'Mid', 'Max') for b in ('Min', 'Mid', 'Max')}:
            raise ValueError(f'Unsupported preserveAspectRatio: {parts}')
        mode = parts[1] if len(parts) > 1 else 'meet'
        if mode not in ('meet', 'slice'):
            raise ValueError(f'Unsupported preserveAspectRatio: {parts}')
        scale = (max if mode == 'slice' else min)(width / vw, height / vh)
        draw_w, draw_h = vw * scale, vh * scale
        offset = {'Min': 0, 'Mid': .5, 'Max': 1}
        x += (width - draw_w) * offset[align[1:4]]
        y += (height - draw_h) * offset[align[5:8]]
        width, height = draw_w, draw_h
    left = .75 * (x + width * link['x'])
    right = left + .75 * width * link['width']
    top = page_height - .75 * (y + height * link['y'])
    bottom = top - .75 * height * link['height']
    if not all(math.isfinite(v) for v in (left, right, top, bottom)) or not left < right or not bottom < top:
        raise ValueError('Invalid SVG citation rectangle')
    return [left, bottom, right, top]


def render(source, output, chapters, geometry_path):
    for requirement in Path(__file__).with_name('requirements.txt').read_text().splitlines():
        package, expected = requirement.split('==')
        if version(package) != expected:
            raise ValueError(f'{package} must be {expected}; install scripts/pdf/requirements.txt')
    source, output = Path(source), Path(output)
    geometry = json.loads(Path(geometry_path).read_text())
    if hashlib.sha256(source.read_bytes()).hexdigest() != geometry['htmlSha256']:
        raise ValueError('Prepared HTML changed after SVG link measurement')
    figures = {f['id']: f for f in geometry['figures']}
    if len(figures) != len(geometry['figures']):
        raise ValueError('Duplicate SVG figure IDs')

    def local_fetch(url, *args, **kwargs):
        if urlparse(url).scheme not in ('file', 'data'):
            raise ValueError(f'Unexpected external PDF resource: {url}')
        return default_url_fetcher(url, *args, **kwargs)

    errors = []
    class CaptureErrors(logging.Handler):
        def emit(self, record):
            if record.levelno >= logging.ERROR:
                errors.append(record.getMessage())
    handler = CaptureErrors()
    logger = logging.getLogger('weasyprint')
    logger.addHandler(handler)
    try:
        doc = HTML(filename=str(source), url_fetcher=local_fetch).render()
        anchors = {anchor for page in doc.pages for anchor in page.anchors}
        missing = {target for page in doc.pages for kind, target, *_ in page.links
                   if kind == 'internal' and target not in anchors}
        if missing:
            raise ValueError(f'Missing PDF anchors: {sorted(missing)}')
        raw = doc.write_pdf()
    finally:
        logger.removeHandler(handler)
    if errors:
        raise ValueError(f'PDF resource/render errors: {errors}')
    reader = PdfReader(io.BytesIO(raw))
    if len(reader.pages) < chapters or sum(isinstance(item, dict) for item in reader.outline) != chapters:
        raise ValueError('Missing chapters or PDF bookmarks')
    writer = PdfWriter(clone_from=reader)
    located, annotations = set(), []
    for page_index, page in enumerate(doc.pages):
        for box in page._page_box.descendants():
            if 'Replaced' not in type(box).__name__ or box.element is None:
                continue
            ident = box.element.attrib.get('data-pdf-figure')
            if ident not in figures:
                continue
            if ident in located:
                raise ValueError(f'SVG split/repeated across pages: {ident}')
            located.add(ident)
            figure = figures[ident]
            pdf_page = reader.pages[page_index]
            for index, link in enumerate(figure['links']):
                rect = pdf_rect(figure, link, (box.content_box_x(), box.content_box_y(), box.width, box.height), float(pdf_page.mediabox.height))
                if not (0 <= rect[0] < rect[2] <= float(pdf_page.mediabox.width) and 0 <= rect[1] < rect[3] <= float(pdf_page.mediabox.height)):
                    raise ValueError(f'SVG citation outside PDF page: {ident}')
                url = link['url']
                if url.startswith('#'):
                    dest = reader.named_destinations.get(unquote(url[1:]))
                    if dest is None:
                        raise ValueError(f'Missing SVG internal destination: {url}')
                    annotation = Link(rect=rect, target_page_index=reader.get_destination_page_number(dest), fit=Fit.xyz(dest.left, dest.top, dest.zoom))
                elif urlparse(url).scheme in ('http', 'https', 'mailto'):
                    annotation = Link(rect=rect, url=url)
                else:
                    raise ValueError(f'Unsupported SVG destination: {url}')
                annotation[NameObject('/NM')] = TextStringObject(f'digest-svg-{ident}-{index}')
                writer.add_annotation(page_number=page_index, annotation=annotation)
                annotations.append({'page': page_index + 1, 'figure': ident, 'url': url, 'rect': rect})
    if located != set(figures):
        raise ValueError(f'Unplaced proof figures: {sorted(set(figures) - located)}')
    final_bytes = io.BytesIO()
    writer.write(final_bytes)
    final = PdfReader(final_bytes)
    if len(final.pages) != len(reader.pages) or len(final.named_destinations) != len(reader.named_destinations):
        raise ValueError('PDF structure changed during SVG annotation')
    if [p.get_contents().get_data() for p in final.pages] != [p.get_contents().get_data() for p in reader.pages]:
        raise ValueError('PDF page content changed during SVG annotation')
    recorded = [a.get_object() for page in final.pages for a in page.get('/Annots', [])
                if str(a.get_object().get('/NM', '')).startswith('digest-svg-')]
    if len(recorded) != len(annotations):
        raise ValueError('Missing SVG annotations in final PDF')
    output.write_bytes(final_bytes.getvalue())
    report = {'pages': len(reader.pages), 'anchors': len(anchors), 'figures': len(figures),
              'svgLinks': len(annotations), 'pageContentStreamsUnchanged': True, 'annotations': annotations}
    Path(str(output) + '.links.json').write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
    return {k: v for k, v in report.items() if k != 'annotations'}


if __name__ == '__main__':
    print(json.dumps(render(sys.argv[1], sys.argv[2], int(sys.argv[3]), sys.argv[4])))
