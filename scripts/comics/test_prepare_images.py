"""Regression checks for color metadata and invisible RGB preservation."""
import importlib.util
from pathlib import Path
import shutil
import struct
import tempfile
import unittest
from unittest.mock import patch

from PIL import Image, PngImagePlugin

SPEC = importlib.util.spec_from_file_location('comic_images', Path(__file__).with_name('prepare-images.py'))
images = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(images)


class PrepareImagesTest(unittest.TestCase):
    def setUp(self):
        self.directory = tempfile.TemporaryDirectory()
        self.addCleanup(self.directory.cleanup)
        images.ROOT = Path(self.directory.name)
        images.CWEBP = shutil.which('cwebp')
        images.TOOL = 'regression-test'
        self.original = images.ROOT / 'assets/comics/catalog-999/original/Catalog_999.png'
        self.original.parent.mkdir(parents=True)

    def test_unusual_gamma_preserves_original_bytes_and_omits_webp(self):
        metadata = PngImagePlugin.PngInfo()
        metadata.add(b'gAMA', struct.pack('>I', 219998))
        Image.new('RGB', (2, 2), (10, 58, 52)).save(self.original, pnginfo=metadata)
        result = images.prepare(self.original)
        png = images.ROOT / result['images'][1]['path']
        self.assertEqual(png.read_bytes(), self.original.read_bytes())
        self.assertFalse(png.with_suffix('.webp').exists())
        self.assertEqual(len(result['images']), 2)

    def test_lossless_webp_retains_rgb_even_in_transparent_pixels(self):
        if not images.CWEBP:
            self.skipTest('cwebp is required')
        Image.new('RGBA', (2, 2), (255, 34, 56, 0)).save(self.original)
        result = images.prepare(self.original)
        self.assertEqual(len(result['images']), 3)
        for item in result['images']:
            with Image.open(images.ROOT / item['path']) as image:
                self.assertEqual(image.convert('RGBA').getpixel((0, 0)), (255, 34, 56, 0))

    def test_failed_png_encoding_does_not_leave_a_partial_published_image(self):
        Image.new('RGB', (2, 2), (12, 45, 67)).save(self.original)
        with patch.object(Image.Image, 'save', side_effect=OSError('encoding interrupted')):
            with self.assertRaisesRegex(OSError, 'interrupted'):
                images.prepare(self.original)
        self.assertFalse((images.ROOT / 'public/images/comics/catalog-999/v1/page-001.png').exists())

    def test_new_edition_and_second_page_preserve_the_previous_files(self):
        if not images.CWEBP:
            self.skipTest('cwebp is required')
        Image.new('RGB', (2, 2), (12, 45, 67)).save(self.original)
        first = images.prepare(self.original)
        old = {r['path']: (images.ROOT / r['path']).read_bytes() for r in first['images']}
        images.prepare(self.original, page_number=2, edition='v2')
        for name, data in old.items():
            self.assertEqual((images.ROOT / name).read_bytes(), data)
        self.assertTrue((images.ROOT / 'public/images/comics/catalog-999/v2/page-002.webp').exists())


if __name__ == '__main__':
    unittest.main()
