import { FavoriteSongs } from './states/FavoriteSongs';
import { RecentSongs } from './states/RecentSongs';
import { SelectedGroup } from './states/SelectedGroup';

export const store = {
  favoriteSongsState: new FavoriteSongs(),
  recentSongsState: new RecentSongs(),
  selectedGroupState: new SelectedGroup(),
};
