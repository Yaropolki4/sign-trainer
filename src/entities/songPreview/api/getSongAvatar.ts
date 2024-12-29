import { httpTransport } from '@shared/api';

export const imagesPath = 'images/';

export const getSongAvatar = (songId: string) => {
  return httpTransport.get(`${imagesPath}${songId}`, { responseType: 'blob' });
};
