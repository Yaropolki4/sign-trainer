import { httpTransport } from '@shared/api';
import { AxiosResponse } from 'axios';
import { SongGroup } from '../model';

export const getSongsPreviews = <T>(group: SongGroup): Promise<AxiosResponse<T>> => {
  return httpTransport.get(`/songs/${group}`);
};
