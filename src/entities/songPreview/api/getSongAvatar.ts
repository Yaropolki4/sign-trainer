import { httpTransport } from '@shared/api';

export const getSongAvatar = (songId: string) => {
  return httpTransport.get(`/images/${songId}.png`, { responseType: 'blob' });
};