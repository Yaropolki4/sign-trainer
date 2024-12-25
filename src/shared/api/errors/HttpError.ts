import { BaseError } from '../../errors';

export class HttpError extends BaseError {
  // eslint-disable-next-line no-useless-constructor
  constructor(message: string, params: { status?: number; message?: string }) {
    super(message, params);
  }
}
