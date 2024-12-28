import {
  FavoriteSongs,
  RecentSongs,
  SearchSongs,
} from '@features/SidebarSongsList';
import { SelectedGroup } from '@features/SidebarActionPanel';

export const store = {
  favoriteSongsState: new FavoriteSongs(),
  recentSongsState: new RecentSongs(),
  selectedGroupState: new SelectedGroup(),
  searchSongsState: new SearchSongs(),
};
