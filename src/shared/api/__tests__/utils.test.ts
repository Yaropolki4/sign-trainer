import { isClientErrorStatus, isServerErrorStatus } from '../utils';

describe('api utils', () => {
  test('isClientErrorStatus', () => {
    expect(isClientErrorStatus(300)).toBe(false);
    expect(isClientErrorStatus(400)).toBe(true);
    expect(isClientErrorStatus(430)).toBe(true);
    expect(isClientErrorStatus(499)).toBe(true);
    expect(isClientErrorStatus(500)).toBe(false);
    expect(isClientErrorStatus(550)).toBe(false);
  });

  test('isServerErrorStatus', () => {
    expect(isServerErrorStatus(300)).toBe(false);
    expect(isServerErrorStatus(450)).toBe(false);
    expect(isServerErrorStatus(499)).toBe(false);
    expect(isServerErrorStatus(500)).toBe(true);
    expect(isServerErrorStatus(540)).toBe(true);
    expect(isServerErrorStatus(599)).toBe(true);
    expect(isServerErrorStatus(600)).toBe(false);
    expect(isServerErrorStatus(610)).toBe(false);
  });
});
