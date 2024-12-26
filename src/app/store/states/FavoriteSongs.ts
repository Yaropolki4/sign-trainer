import {
  getSongsPreviews,
  SongGroup,
  type SongPreviewModel,
} from '@entities/songPreview';
import { bind } from '@shared/decorators';
import { makeAutoObservable } from 'mobx';

enum LoadStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export class FavoriteSongs {
  public songs: SongPreviewModel[] = [];
  public loadStatus: LoadStatus = LoadStatus.LOADING;

  constructor() {
    makeAutoObservable(this);
  }

  @bind
  public fetchSongs() {
    return getSongsPreviews(SongGroup.FAVORITE)
      .then(response => {
        this.songs = response.data;
        this.loadStatus = LoadStatus.SUCCESS;
      })
      .catch(() => {
        this.loadStatus = LoadStatus.ERROR;
      });
  }
}
