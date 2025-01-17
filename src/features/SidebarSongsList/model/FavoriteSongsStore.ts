import { type SongPreviewModel } from '@entities/songPreview';
import { getSongsPreviews, SongGroup } from '@entities/songsList';
import { LoadStatus } from '@shared/api';
import { bind } from '@shared/lib';
import { makeAutoObservable } from 'mobx';

export class FavoriteSongsStore {
  public songs: SongPreviewModel[] = [];
  public loadStatus: LoadStatus = LoadStatus.LOADING;

  constructor() {
    makeAutoObservable(this);
  }

  @bind
  public fetchSongs() {
    return getSongsPreviews<SongPreviewModel[]>(SongGroup.FAVORITE)
      .then(response => {
        this.songs = response.data;
        this.loadStatus = LoadStatus.SUCCESS;
      })
      .catch(() => {
        this.loadStatus = LoadStatus.ERROR;
      });
  }
}
