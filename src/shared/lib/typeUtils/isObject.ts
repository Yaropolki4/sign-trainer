export function isObject(target: unknown): target is Object {
  return typeof target === 'object' && target !== null;
}
