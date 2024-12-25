import { httpTransport } from '@shared/api';
import { AxiosResponse } from 'axios';
import { SongPreviewModel } from '../model';

export const getSongsPreviews = (): Promise<
  AxiosResponse<SongPreviewModel[]>
> => {
  return httpTransport.get('/songs.json');
};
