export function bind(
  _: unknown,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  if (!descriptor || typeof descriptor.value !== 'function') {
    throw new TypeError(
      'Only methods can be decorated with @bind. <' +
        propertyKey +
        '> is not a method!',
    );
  }
  return {
    configurable: true,
    get() {
      return descriptor.value.bind(this);
    },
  };
}
