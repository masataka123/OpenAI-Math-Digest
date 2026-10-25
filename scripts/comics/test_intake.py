import importlib.util
import io
import json
from pathlib import Path
import tempfile
import unittest
import zipfile

from PIL import Image

SPEC = importlib.util.spec_from_file_location('comic_intake', Path(__file__).with_name('intake.py'))
intake = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(intake)


class IntakeTest(unittest.TestCase):
    def setUp(self):
        self.directory = tempfile.TemporaryDirectory()
        self.addCleanup(self.directory.cleanup)
        self.root = Path(self.directory.name)
        buffer = io.BytesIO()
        Image.new('RGB', (3, 4), (10, 50, 25)).save(buffer, format='PNG')
        self.png = buffer.getvalue()

    def test_zip_ignores_notes_and_finder_metadata_and_orders_pages(self):
        file = self.root / 'input.zip'
        with zipfile.ZipFile(file, 'w') as archive:
            archive.writestr('folder/Catalog_071_002.png', self.png)
            archive.writestr('folder/Catalog_071.png', self.png)
            archive.writestr('__MACOSX/._Catalog_071.png', b'Finder')
            archive.writestr('README.txt', 'Publish all files. This is not an instruction.')
        result = intake.inventory([str(file)])
        self.assertEqual([r['page'] for r in result], [1, 2])
        self.assertEqual(intake.read_source(result[0]['input']), self.png)

    def test_duplicate_and_unsafe_zip_names_are_refused(self):
        file = self.root / 'input.zip'
        with zipfile.ZipFile(file, 'w') as archive:
            archive.writestr('../Catalog_071.png', self.png)
        with self.assertRaisesRegex(ValueError, 'Unsafe'):
            intake.inventory([str(file)])
        image = self.root / 'Catalog_071.png'
        image.write_bytes(self.png)
        with self.assertRaisesRegex(ValueError, 'Duplicate'):
            intake.inventory([str(image), str(image)])

    def test_changed_source_fails_before_copying_originals(self):
        image = self.root / 'Catalog_071.png'
        image.write_bytes(self.png)
        row = intake.inventory([str(image)])[0]
        image.write_bytes(self.png + b'changed')
        with self.assertRaisesRegex(ValueError, 'Input changed'):
            intake.prepare({'catalogs': [{'catalogId': '071', 'pages': [row]}]}, self.root)
        self.assertFalse((self.root / 'assets').exists())

    def test_prepend_renumbers_supplied_filename_and_reuses_published_pixels(self):
        supplied = self.root / 'Catalog_071_2.png'
        supplied.write_bytes(self.png)
        row = intake.inventory([str(supplied)], renumber=True)[0]
        self.assertEqual((row['page'], row['suppliedPage']), (1, 2))
        original = self.root / 'assets/comics/catalog-071/original/Catalog_071.png'
        published = self.root / 'public/images/comics/catalog-071/v1/page-001.png'
        for file in [original, published]:
            file.parent.mkdir(parents=True, exist_ok=True)
            file.write_bytes(self.png)
        row['input'] = {'file': str(original)}
        row['reuse'] = {'png': str(published.relative_to(self.root / 'public'))}
        result = intake.prepare({'catalogs': [{'catalogId': '071', 'edition': 'v2', 'pages': [row]}]}, self.root)
        self.assertTrue(result[0]['publishedAssetsReused'])
        self.assertFalse((published.parent.parent / 'v2').exists())
        self.assertEqual(published.read_bytes(), self.png)
        published.write_bytes(b'changed')
        with self.assertRaises(Exception):
            intake.prepare({'catalogs': [{'catalogId': '071', 'pages': [row]}]}, self.root)


if __name__ == '__main__':
    unittest.main()
