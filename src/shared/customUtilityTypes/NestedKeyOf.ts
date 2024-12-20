export type NestedKeyOf<TObj extends object> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends object
    ? `${TKey}.${NestedKeyOf<TObj[TKey]>}`
    : TKey;
}[keyof TObj & string];
