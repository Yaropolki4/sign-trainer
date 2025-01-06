import { isEven } from '../isEven';

describe('Number utils', () => {
  it('isEven', () => {
    expect(isEven(2)).toEqual(true);
    expect(isEven(1)).toEqual(false);
    expect(isEven(0)).toEqual(true);
    expect(isEven(2.5)).toEqual(false);
    expect(isEven(-2)).toEqual(true);
    expect(isEven(-1)).toEqual(false);
  });
});
