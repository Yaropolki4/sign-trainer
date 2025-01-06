import { formatToCssRGB, generateGradient, hexToRgb } from '../colorUtils';

describe('colorUtils', () => {
  describe('generateGradient', () => {
    test('generates a gradient with 2 steps (start and end colors only)', () => {
      const result = generateGradient('#000000', '#FFFFFF', 2);
      expect(result).toEqual([
        [0, 0, 0],
        [255, 255, 255],
      ]);
    });

    test('generates a gradient with 3 steps', () => {
      const result = generateGradient('#000000', '#FFFFFF', 3);
      expect(result).toEqual([
        [0, 0, 0],
        [128, 128, 128],
        [255, 255, 255],
      ]);
    });

    test('returns the end color for a single step', () => {
      const result = generateGradient('#000000', '#FF0000', 1);
      expect(result).toEqual([[255, 0, 0]]);
    });

    test('handles non-trivial gradients', () => {
      const result = generateGradient('#0000FF', '#00FF00', 4);
      expect(result).toEqual([
        [0, 0, 255],
        [0, 85, 170],
        [0, 170, 85],
        [0, 255, 0],
      ]);
    });
  });
  describe('formatToCssRGB', () => {
    test('formats [255, 0, 0] to rgb(255, 0, 0)', () => {
      expect(formatToCssRGB([255, 0, 0])).toBe('rgb(255, 0, 0)');
    });

    test('formats [0, 255, 0] to rgb(0, 255, 0)', () => {
      expect(formatToCssRGB([0, 255, 0])).toBe('rgb(0, 255, 0)');
    });

    test('formats [0, 0, 255] to rgb(0, 0, 255)', () => {
      expect(formatToCssRGB([0, 0, 255])).toBe('rgb(0, 0, 255)');
    });

    test('formats [255, 255, 255] to rgb(255, 255, 255)', () => {
      expect(formatToCssRGB([255, 255, 255])).toBe('rgb(255, 255, 255)');
    });

    test('formats [255, 0, 0, 0.5] to rgb(255, 0, 0, 0.5)', () => {
      expect(formatToCssRGB([255, 0, 0, 0.5])).toBe('rgb(255, 0, 0, 0.5)');
    });
  });
  describe('hexToRgb', () => {
    test('converts #000000 to [0, 0, 0]', () => {
      expect(hexToRgb('#000000')).toEqual([0, 0, 0]);
    });

    test('converts #FFFFFF to [255, 255, 255]', () => {
      expect(hexToRgb('#FFFFFF')).toEqual([255, 255, 255]);
    });

    test('converts #FF0000 to [255, 0, 0]', () => {
      expect(hexToRgb('#FF0000')).toEqual([255, 0, 0]);
    });

    test('converts #00FF00 to [0, 255, 0]', () => {
      expect(hexToRgb('#00FF00')).toEqual([0, 255, 0]);
    });

    test('converts #0000FF to [0, 0, 255]', () => {
      expect(hexToRgb('#0000FF')).toEqual([0, 0, 255]);
    });
  });
});
