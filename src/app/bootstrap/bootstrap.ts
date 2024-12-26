import { store } from '../store';

export function bootstrap() {
  store.favoriteSongsState.fetchSongs();
  store.recentSongsState.fetchSongs();
}
