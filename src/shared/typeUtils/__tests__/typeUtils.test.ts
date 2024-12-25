import { isNumber } from '../isNumber';
import { isObject } from '../isObject';

describe('type Urils', () => {
  test('isNumber', () => {
    expect(isNumber(4)).toBe(true);
    expect(isNumber('4')).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(NaN)).toBe(true);
  });

  describe('isObject', () => {
    it('returns true for plain objects', () => {
      expect(isObject({})).toBe(true);
      expect(isObject({ key: 'value' })).toBe(true);
    });

    it('returns true for arrays', () => {
      expect(isObject([])).toBe(true);
      expect(isObject([1, 2, 3])).toBe(true);
    });

    it('returns false for null', () => {
      expect(isObject(null)).toBe(false);
    });

    it('returns false for primitive types', () => {
      expect(isObject('string')).toBe(false);
      expect(isObject(42)).toBe(false);
      expect(isObject(true)).toBe(false);
      expect(isObject(undefined)).toBe(false);
      expect(isObject(Symbol('sym'))).toBe(false);
    });

    it('returns false for functions', () => {
      expect(isObject(() => {})).toBe(false);
      expect(isObject(function test() {})).toBe(false);
    });

    it('returns true for instances of classes', () => {
      expect(isObject(new Date())).toBe(true);
      expect(isObject(new Map())).toBe(true);
    });

    it('returns true for global object', () => {
      expect(isObject(globalThis)).toBe(true);
    });

    it('returns true for Object.create(null)', () => {
      expect(isObject(Object.create(null))).toBe(true);
    });

    it('returns true for numeric objects', () => {
      // eslint-disable-next-line no-new-wrappers
      expect(isObject(new Number(42))).toBe(true);
    });

    it('returns true for string objects', () => {
      // eslint-disable-next-line no-new-wrappers
      expect(isObject(new String('hello'))).toBe(true);
    });
  });
});
