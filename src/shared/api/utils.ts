const CLIENT_ERROR_LOWER_BOUNDARY = 400;
const CLIENT_ERROR_UPPER_BOUNDARY = 500;
const SERVER_ERROR_LOWER_BOUNDARY = 500;
const SERVER_ERROR_UPPER_BOUNDARY = 600;

export function isClientErrorStatus(status: number) {
  return (
    status >= CLIENT_ERROR_LOWER_BOUNDARY &&
    status < CLIENT_ERROR_UPPER_BOUNDARY
  );
}

export function isServerErrorStatus(status: number) {
  return (
    status >= SERVER_ERROR_LOWER_BOUNDARY &&
    status < SERVER_ERROR_UPPER_BOUNDARY
  );
}

export enum LoadStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
