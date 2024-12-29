import { SongGroup } from '@entities/songsList';
import { bind } from '@shared/lib/decorators';
import { makeAutoObservable } from 'mobx';

export class SelectedGroup {
  public group = SongGroup.RECENT;

  constructor() {
    makeAutoObservable(this);
  }

  @bind
  public setSelectedGroup(group: SongGroup) {
    this.group = group;
  }
}
