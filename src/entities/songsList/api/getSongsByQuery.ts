import { httpTransport } from '@shared/api';
import { AxiosResponse } from 'axios';

interface GetSongsByQueryParams {
  query: string;
}

export const getSongsByQuery = <T>(
  signal: Maybe<AbortSignal>,
  params: GetSongsByQueryParams,
): Promise<AxiosResponse<T>> => {
  return httpTransport.get(`/songs/search`, { params, signal });
};
