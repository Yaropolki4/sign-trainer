import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { HttpError } from './errors/HttpError';
import { isClientErrorStatus, isServerErrorStatus } from './utils';
import { isNumber, isObject } from '../typeUtils';

interface ValidError {
  response: {
    status: number;
  };
}

export class HttpTransport {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
    });

    this.client.interceptors.response.use(
      response => response,
      (error: unknown) => {
        if (!this.ensureIsValidError(error)) {
          throw new HttpError('Unknown http error', {});
        }

        const { status } = error.response;

        if (isClientErrorStatus(status)) {
          throw new HttpError('Client error', { status });
        }

        if (isServerErrorStatus(status)) {
          throw new HttpError('Server error', { status });
        }

        throw new HttpError('Unknown status', { status });
      },
    );
  }

  public get(url: string, config: AxiosRequestConfig = {}) {
    return this.client.get(url, config);
  }

  public post(url: string, data: unknown, params: object = {}) {
    return this.client.post(url, data, { params });
  }

  public put(url: string, data: unknown, params: object = {}) {
    return this.client.put(url, data, { params });
  }

  public delete(url: string, params: object = {}) {
    return this.client.delete(url, { params });
  }

  public patch(url: string, data: object = {}, params: object = {}) {
    return this.client.patch(url, data, { params });
  }

  private ensureIsValidError(error: unknown): error is ValidError {
    if (!isObject(error)) {
      return false;
    }

    const errorObject = error as Record<string, unknown>;

    const response = errorObject.response as Maybe<Record<string, unknown>>;

    if (!isObject(response)) {
      return false;
    }

    const { status } = response;

    if (!isNumber(status)) {
      return false;
    }

    return true;
  }
}
