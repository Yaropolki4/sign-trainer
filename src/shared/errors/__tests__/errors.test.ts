// eslint-disable-next-line max-classes-per-file
import { BaseError } from '../BaseError';

class ExtendedError extends BaseError {}
class SomeError {}

describe('error', () => {
  describe('BaseError', () => {
    test('is must return true for BaseError', () => {
      const error = new BaseError('');

      expect(BaseError.is(error)).toBe(true);
    });

    test('is must return true for class that extends BaseError', () => {
      const error = new ExtendedError('');

      expect(ExtendedError.is(error)).toBe(true);
      expect(BaseError.is(error)).toBe(true);
    });

    test("is must return false for class that doesn't extends BaseError", () => {
      const error = new SomeError();

      expect(BaseError.is(error));
    });
  });
});
