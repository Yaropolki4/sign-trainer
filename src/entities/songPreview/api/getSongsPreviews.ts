import { httpTransport } from '@shared/api';
import { AxiosResponse } from 'axios';
import { SongGroup, SongPreviewModel } from '../model';

export const getSongsPreviews = (
  group: SongGroup,
  signal: Maybe<AbortSignal>,
  params: object = {},
): Promise<AxiosResponse<SongPreviewModel[]>> => {
  return httpTransport.get(`/songs/${group}`, { params, signal });
};
