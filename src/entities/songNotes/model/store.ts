import { makeAutoObservable } from 'mobx';
import { Note } from './Note';
import { getSongNotes } from '../api';

export class NotesStore {
  private songsNotes = new Map<string, Note[]>();

  constructor() {
    makeAutoObservable(this);
  }

  public getNotesBySongId(id: string) {
    return this.songsNotes.get(id);
  }

  public fetchNotesBySongId(id: string) {
    return getSongNotes(id).then(data => {
      this.songsNotes.set(id, data.data);

      return data;
    });
  }
}
