#!/usr/bin/env python3
"""Prepare lossless comic assets; never overwrite a different existing edition."""
import argparse
from concurrent.futures import ThreadPoolExecutor
import hashlib
import json
from pathlib import Path
import shutil
import subprocess

from PIL import Image

ROOT = Path(__file__).resolve().parents[2]


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def prepare(original):
    catalog = original.parent.parent.name
    output = ROOT / 'public/images/comics' / catalog / 'v1'
    output.mkdir(parents=True, exist_ok=True)
    png, webp = output / 'page-001.png', output / 'page-001.webp'
    with Image.open(original) as image:
        pixels = image.convert('RGBA').tobytes()
        dimensions = image.size
        # Keep unusual PNG transfer curves intact. cwebp may apply gamma
        # conversion, while a PNG re-save may discard the original gAMA chunk.
        png_only = 'gamma' in image.info and abs(image.info['gamma'] - 0.45455) > 0.00001
        if not png.exists():
            if png_only:
                shutil.copyfile(original, png)
            else:
                options = {'icc_profile': image.info['icc_profile']} if image.info.get('icc_profile') else {}
                image.save(png, optimize=True, compress_level=9, **options)
    if png_only and png.read_bytes() != original.read_bytes():
        raise RuntimeError(f'Gamma-tagged PNG differs from original: {png}')
    if not png_only and not webp.exists():
        subprocess.run([CWEBP, '-quiet', '-lossless', '-exact', '-z', '9', '-mt', '-metadata', 'icc',
                        str(original), '-o', str(webp)], check=True)
    assets = []
    for path in [original, png] + ([] if png_only else [webp]):
        with Image.open(path) as image:
            identical = image.size == dimensions and image.convert('RGBA').tobytes() == pixels
        if not identical:
            raise RuntimeError(f'Pixels differ: {path}. Use a new edition directory for changed images.')
        assets.append({'path': str(path.relative_to(ROOT)), 'size': path.stat().st_size,
                       'dimensions': list(dimensions), 'sha256': digest(path), 'pixelsIdentical': True})
    record = ROOT / 'coordination/comics' / catalog / 'IMAGE_BUILD.json'
    record.parent.mkdir(parents=True, exist_ok=True)
    # Existing verified records (including the 034 prototype) remain intact.
    if not record.exists():
        record.write_text(json.dumps({'sourceSha256': digest(original), 'tool': TOOL,
            'webpArguments': None if png_only else ['-lossless', '-exact', '-z', '9', '-mt', '-metadata', 'icc'],
            'pngTool': 'original-byte-copy' if png_only else 'Pillow',
            'pngOptions': {} if png_only else {'optimize': True, 'compress_level': 9},
            'pngOnlyReason': 'Preserve nonstandard PNG gamma without color conversion.' if png_only else None,
            'images': assets}, ensure_ascii=False, indent=2) + '\n')
    print(f'{catalog}: verified original / PNG' + ('' if png_only else ' / lossless WebP'), flush=True)
    return {'catalogId': catalog.removeprefix('catalog-'), 'images': assets}


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--catalog', help='Three-digit catalogue number; omit to process all preserved originals.')
    parser.add_argument('--report', default='tmp/comics-batch/images.json')
    args = parser.parse_args()
    if args.catalog and (len(args.catalog) != 3 or not args.catalog.isdigit()):
        parser.error('--catalog must have three digits')
    CWEBP = shutil.which('cwebp')
    if not CWEBP:
        parser.error('Install cwebp (libwebp) first.')
    TOOL = 'cwebp ' + subprocess.check_output([CWEBP, '-version'], text=True).strip()
    pattern = f'catalog-{args.catalog or "[0-9][0-9][0-9]"}/original/Catalog_*.png'
    originals = sorted((ROOT / 'assets/comics').glob(pattern))
    if not originals:
        parser.error('No preserved comic originals found.')
    with ThreadPoolExecutor(max_workers=3) as executor:
        results = list(executor.map(prepare, originals))
    report = ROOT / args.report
    report.parent.mkdir(parents=True, exist_ok=True)
    report.write_text(json.dumps(results, ensure_ascii=False, indent=2) + '\n')
