import type { SongPreviewModel } from '@entities/songPreview';
import { getSongsByQuery } from '@entities/songsList';
import { LoadStatus } from '@shared/api';
import { bind } from '@shared/decorators';
import { makeAutoObservable } from 'mobx';

export class SearchSongs {
  public songs: SongPreviewModel[] = [];
  public loadStatus: LoadStatus = LoadStatus.LOADING;

  constructor() {
    makeAutoObservable(this);
  }

  @bind
  public fetchSongs(signal: Maybe<AbortSignal>, query: string) {
    return getSongsByQuery<SongPreviewModel[]>(signal, { query });
  }

  @bind
  public setSongs(songs: SongPreviewModel[]) {
    this.songs = songs;
  }

  @bind
  public setStatus(status: LoadStatus) {
    this.loadStatus = status;
  }
}
