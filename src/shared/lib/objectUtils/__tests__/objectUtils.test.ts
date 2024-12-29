import { deepEqual } from '../deepEqual';
import { deepKeysEqual } from '../deepKeysEqual';

describe('Object utils', () => {
  describe('deepEqual', () => {
    test('Should return true for identical primitives', () => {
      expect(deepEqual(1, 1)).toBe(true);
      expect(deepEqual('abc', 'abc')).toBe(true);
      expect(deepEqual(true, true)).toBe(true);
      expect(deepEqual(null, null)).toBe(true);
      expect(deepEqual(undefined, undefined)).toBe(true);
    });

    test('Should return false for different primitives', () => {
      expect(deepEqual(1, 2)).toBe(false);
      expect(deepEqual('abc', 'def')).toBe(false);
      expect(deepEqual(true, false)).toBe(false);
      expect(deepEqual(null, undefined)).toBe(false);
    });

    test('Should return true for identical objects', () => {
      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { a: 1, b: { c: 2 } };
      expect(deepEqual(obj1, obj2)).toBe(true);
    });

    test('Should return false for objects with different structures', () => {
      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { a: 1, b: { d: 2 } };
      //@ts-ignore
      expect(deepEqual(obj1, obj2)).toBe(false);
    });

    test('Should return true for identical arrays', () => {
      const arr1 = [1, [2, 3], { a: 4 }];
      const arr2 = [1, [2, 3], { a: 4 }];
      expect(deepEqual(arr1, arr2)).toBe(true);
    });

    test('Should return false for arrays with different contents', () => {
      const arr1 = [1, [2, 3], { a: 4 }];
      const arr2 = [1, [2, 4], { a: 4 }];
      expect(deepEqual(arr1, arr2)).toBe(false);
    });

    test('Should return false for objects with identical keys but different value types', () => {
      const obj1 = { a: 1 };
      const obj2 = { a: '1' };
      //@ts-ignore
      expect(deepEqual(obj1, obj2)).toBe(false);
    });

    test('Should correctly handle nested objects and arrays', () => {
      const obj1 = { a: [{ b: 1 }, { c: 2 }], d: 3 };
      const obj2 = { a: [{ b: 1 }, { c: 2 }], d: 3 };
      const obj3 = { a: [{ b: 1 }, { c: 3 }], d: 3 };
      expect(deepEqual(obj1, obj2)).toBe(true);
      expect(deepEqual(obj1, obj3)).toBe(false);
    });
  });

  describe('deepKeysEqual', () => {
    test('Should return true for identical primitives', () => {
      expect(deepKeysEqual(1, 1)).toBe(true);
      expect(deepKeysEqual('abc', 'abc')).toBe(true);
      expect(deepKeysEqual(true, true)).toBe(true);
      expect(deepKeysEqual(undefined, undefined)).toBe(true);
    });

    test('Should return true for identical objects', () => {
      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { a: 1, b: { c: 2 } };
      expect(deepKeysEqual(obj1, obj2)).toBe(true);
    });

    test('Should return false for objects with different structures', () => {
      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { a: 1, b: { d: 2 } };
      //@ts-ignore
      expect(deepKeysEqual(obj1, obj2)).toBe(false);
    });

    test('Should return true for identical arrays', () => {
      const arr1 = [1, [2, 3], { a: 4 }];
      const arr2 = [1, [2, 3], { a: 4 }];
      expect(deepKeysEqual(arr1, arr2)).toBe(true);
    });

    test('Should true for objects with identical keys but different value types', () => {
      const obj1 = { a: 1 };
      const obj2 = { a: '1' };
      //@ts-ignore
      expect(deepKeysEqual(obj1, obj2)).toBe(true);
    });

    test('Should true for objects with identical keys but different value types', () => {
      const obj1 = { a: 1 };
      const obj2 = { a: 2 };
      //@ts-ignore
      expect(deepKeysEqual(obj1, obj2)).toBe(true);
    });
  });
});
