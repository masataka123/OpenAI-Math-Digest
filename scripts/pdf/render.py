"""Render the prepared HTML locally, then validate its destinations and pages."""
import json
import logging
import sys
from pathlib import Path
from urllib.parse import urlparse
from weasyprint import HTML, default_url_fetcher
from pypdf import PdfReader

source, output = map(Path, sys.argv[1:])
# Embedded figures and fonts only: hyperlinks are preserved without fetching them.
def local_fetch(url, *args, **kwargs):
    if urlparse(url).scheme not in ('file', 'data'):
        raise ValueError(f'Unexpected external PDF resource: {url}')
    return default_url_fetcher(url, *args, **kwargs)

errors = []
class CaptureErrors(logging.Handler):
    def emit(self, record):
        if record.levelno >= logging.ERROR:
            errors.append(record.getMessage())
logging.getLogger('weasyprint').addHandler(CaptureErrors())
doc = HTML(filename=str(source), url_fetcher=local_fetch).render()
if errors:
    raise ValueError(f'PDF resource/render errors: {errors}')
# A missing merged anchor must not silently become a dead PDF link.
anchors = {anchor for page in doc.pages for anchor in page.anchors}
missing = sorted({target for page in doc.pages for kind, target, *_ in page.links
                  if kind == 'internal' and target not in anchors})
if missing:
    raise ValueError(f'Missing PDF anchors: {missing}')
doc.write_pdf(str(output))
reader = PdfReader(output)
if len(reader.pages) < 15 or sum(isinstance(item, dict) for item in reader.outline) != 15:
    raise ValueError('Missing chapters or PDF bookmarks')
print(json.dumps({'pages': len(reader.pages), 'anchors': len(anchors)}))
