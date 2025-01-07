import { makeAutoObservable } from 'mobx';
import { getSongNotesWithInfo } from '../api';
import { NotesWithInfo } from './SongWithInfo';

export class NotesStore {
  private songsNotes = new Map<string, NotesWithInfo>();

  constructor() {
    makeAutoObservable(this);
  }

  public getNotesBySongId(id: string) {
    return this.songsNotes.get(id);
  }

  public fetchNotesBySongId(id: string) {
    return getSongNotesWithInfo(id).then(data => {
      this.songsNotes.set(id, data.data);

      return data;
    });
  }
}
