import { httpTransport } from '@shared/api';
import { AxiosResponse } from 'axios';
import { SongGroup, SongPreviewModel } from '../model';

export const getSongsPreviews = (
  group: SongGroup,
): Promise<AxiosResponse<SongPreviewModel[]>> => {
  return httpTransport.get(`/songs/${group}.json`);
};
