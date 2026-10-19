import importlib.util
import unittest
from pathlib import Path
spec = importlib.util.spec_from_file_location('render_linked', Path(__file__).with_name('render-linked.py'))
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

class GeometryTests(unittest.TestCase):
    def test_letterbox_and_nonuniform_scaling(self):
        f = {'viewBox': [0, 0, 200, 100], 'preserveAspectRatio': 'xMidYMid meet'}
        a = {'x': 0, 'y': 0, 'width': 1, 'height': 1}
        self.assertEqual(module.pdf_rect(f, a, (0, 0, 200, 200), 600), [0, 487.5, 150, 562.5])
        f['preserveAspectRatio'] = 'none'
        self.assertEqual(module.pdf_rect(f, a, (0, 0, 200, 200), 600), [0, 450, 150, 600])
    def test_invalid_rectangles(self):
        f = {'viewBox': [0, 0, 200, 100], 'preserveAspectRatio': 'xMidYMid meet'}
        with self.assertRaises(ValueError):
            module.pdf_rect(f, {'x': 0, 'y': 0, 'width': 0, 'height': 1}, (0, 0, 200, 100), 600)

if __name__ == '__main__':
    unittest.main()
