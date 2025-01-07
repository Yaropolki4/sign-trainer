import { Note } from '@entities/songNotes';
import { SongPreviewModel } from '@entities/songPreview';

export interface NotesWithInfo {
  notes: Note[];
  info: SongPreviewModel;
}
