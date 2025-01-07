import { httpTransport } from '@shared/api';
import { AxiosResponse } from 'axios';
import { NotesWithInfo } from '../model';

const songNotesPath = 'notes/';

export const getSongNotesWithInfo = (songId: string): Promise<AxiosResponse<NotesWithInfo>> => {
  return httpTransport.get(`${songNotesPath}${songId}`);
};
