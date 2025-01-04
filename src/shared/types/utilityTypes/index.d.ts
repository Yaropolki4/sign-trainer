export { NestedKeyOf } from './NestedKeyOf';

declare global {
  type NestedKeyOf<TObj extends object> = {
    [TKey in keyof TObj & string]: TObj[TKey] extends object ? `${TKey}.${NestedKeyOf<TObj[TKey]>}` : TKey;
  }[keyof TObj & string];

  type Maybe<T> = T | undefined;
}
