export function isNumber(target: unknown): target is number {
  return typeof target === 'number';
}
