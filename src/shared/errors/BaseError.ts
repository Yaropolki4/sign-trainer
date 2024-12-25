export type Constructor<T> = {
  new (...args: any[]): T;
};

export class BaseError extends Error {
  public params: object;

  constructor(message: string, params: Object = {}) {
    super(message, params);
    this.params = params;
  }

  public static is<E extends Error>(
    this: Constructor<E>,
    error: unknown,
  ): error is E {
    return error instanceof this;
  }
}
