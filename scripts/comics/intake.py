#!/usr/bin/env python3
"""Inventory PNG attachments/ZIPs and prepare only the selected comic pages."""
import argparse
from concurrent.futures import ThreadPoolExecutor
import hashlib
import importlib.util
import io
import json
import os
from pathlib import Path, PurePosixPath
import re
import shutil
import subprocess
import zipfile

from PIL import Image

NAME = re.compile(r'^Catalog_(\d{3})(?:_(\d{1,3}))?\.png$', re.I)
MAX_IMAGE_BYTES = 100 * 1024 * 1024


def read_source(source):
    file = Path(source['file'])
    if source.get('member'):
        with zipfile.ZipFile(file) as archive:
            item = archive.getinfo(source['member'])
            if item.file_size > MAX_IMAGE_BYTES:
                raise ValueError('ZIP image exceeds 100 MiB')
            return archive.read(item)
    if file.stat().st_size > MAX_IMAGE_BYTES:
        raise ValueError('Image exceeds 100 MiB')
    return file.read_bytes()


def inventory(inputs):
    candidates = []
    for value in inputs:
        file = Path(value).resolve(strict=True)
        if file.is_dir():
            candidates.extend({'file': str(p)} for p in sorted(file.rglob('*'))
                              if p.is_file() and NAME.fullmatch(p.name))
        elif file.suffix.lower() == '.zip':
            with zipfile.ZipFile(file) as archive:
                for item in archive.infolist():
                    name = PurePosixPath(item.filename)
                    if item.is_dir() or '__MACOSX' in name.parts or name.name.startswith('._'):
                        continue
                    if NAME.fullmatch(name.name):
                        if name.is_absolute() or '..' in name.parts:
                            raise ValueError('Unsafe ZIP entry')
                        candidates.append({'file': str(file), 'member': item.filename})
        elif NAME.fullmatch(file.name):
            candidates.append({'file': str(file)})
        else:
            raise ValueError(f'Expected Catalog_NNN.png, a directory, or ZIP: {file}')
    rows = []
    seen = set()
    for source in candidates:
        name = PurePosixPath(source.get('member', source['file'])).name
        match = NAME.fullmatch(name)
        number, page = match[1], int(match[2] or 1)
        if page < 1 or (number, page) in seen:
            raise ValueError(f'Duplicate/invalid catalogue page: {name}')
        seen.add((number, page))
        data = read_source(source)
        with Image.open(io.BytesIO(data)) as image:
            if image.format != 'PNG':
                raise ValueError(f'Not a PNG: {name}')
            image.load()
            rows.append({'catalogId': number, 'page': page, 'input': source,
                         'sha256': hashlib.sha256(data).hexdigest(), 'bytes': len(data),
                         'width': image.width, 'height': image.height,
                         'mode': image.mode, 'gamma': image.info.get('gamma')})
    if not rows:
        raise ValueError('No named comic PNGs found')
    for number in {r['catalogId'] for r in rows}:
        pages = sorted(r['page'] for r in rows if r['catalogId'] == number)
        if pages != list(range(1, len(pages) + 1)):
            raise ValueError(f'Page sequence must start at 1 without gaps: {number}')
    return sorted(rows, key=lambda r: (r['catalogId'], r['page']))


def prepare(manifest, root):
    spec = importlib.util.spec_from_file_location('comic_images', Path(__file__).with_name('prepare-images.py'))
    images = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(images)
    images.ROOT = root
    images.CWEBP = shutil.which('cwebp')
    if not images.CWEBP:
        raise RuntimeError('cwebp is required')
    images.TOOL = 'cwebp ' + subprocess.check_output([images.CWEBP, '-version'], text=True).strip()
    results = []
    # Validate every source before creating anything, including replays.
    sources = []
    for comic in manifest['catalogs']:
        for page_number, page in enumerate(comic['pages'], 1):
            data = read_source(page['input'])
            if hashlib.sha256(data).hexdigest() != page['sha256']:
                raise ValueError(f'Input changed: {comic["catalogId"]}/{page_number}')
            with Image.open(io.BytesIO(data)) as image:
                if image.format != 'PNG' or image.size != (page['width'], page['height']):
                    raise ValueError(f'Input format/dimensions differ: {comic["catalogId"]}/{page_number}')
            suffix = '' if page_number == 1 else f'_{page_number:03d}'
            edition = comic.get('edition', 'v1')
            if not re.fullmatch(r'v[1-9][0-9]*', edition):
                raise ValueError('Invalid image edition')
            edition_suffix = '' if edition == 'v1' else f'-{edition}'
            original = root / f'assets/comics/catalog-{comic["catalogId"]}/original/Catalog_{comic["catalogId"]}{suffix}{edition_suffix}.png'
            if original.exists() and original.read_bytes() != data:
                raise ValueError(f'Existing original differs; use an explicit new edition: {original}')
            sources.append((comic, page_number, original, data))
    def prepare_one(source):
        comic, number, original, data = source
        original.parent.mkdir(parents=True, exist_ok=True)
        reused = original.exists()
        if not reused:
            temporary = original.with_name(f'.{original.name}.{os.getpid()}.tmp')
            temporary.write_bytes(data)
            temporary.replace(original)
        result = images.prepare(original, number, comic.get('edition', 'v1'))
        return {**result, 'page': number, 'originalReused': reused}
    with ThreadPoolExecutor(max_workers=3) as executor:
        return list(executor.map(prepare_one, sources))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('command', choices=['inventory', 'prepare'])
    parser.add_argument('--input', action='append', default=[])
    parser.add_argument('--manifest')
    parser.add_argument('--root', default=str(Path(__file__).resolve().parents[2]))
    parser.add_argument('--output', required=True)
    args = parser.parse_args()
    result = inventory(args.input) if args.command == 'inventory' else prepare(
        json.loads(Path(args.manifest).read_text()), Path(args.root).resolve())
    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n')
