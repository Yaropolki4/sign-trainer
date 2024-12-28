import { httpTransport } from '@shared/api';
import { AxiosResponse } from 'axios';
import { SongPreviewModel } from '../model';

interface GetSongsByQueryParams {
  query: string;
}

export const getSongsByQuery = (
  signal: Maybe<AbortSignal>,
  params: GetSongsByQueryParams,
): Promise<AxiosResponse<SongPreviewModel[]>> => {
  return httpTransport.get(`/songs/search`, { params, signal });
};
