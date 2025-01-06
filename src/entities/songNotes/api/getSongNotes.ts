import { httpTransport } from '@shared/api';
import { AxiosResponse } from 'axios';
import { Note } from '../model';

const songNotesPath = 'notes/';

export const getSongNotes = (songId: string): Promise<AxiosResponse<Note[]>> => {
  return httpTransport.get(`${songNotesPath}${songId}`);
};
