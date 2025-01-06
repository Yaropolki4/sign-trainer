import { Note, useSongsNotes } from '@entities/songNotes';
import { LoadStatus } from '@shared/api';
import { Icon, Spinner } from '@shared/ui';
import { SongNotes } from '@entities/songNotes';
import React from 'react';

type FetchNotesState =
  | { loadStatus: LoadStatus.LOADING }
  | { loadStatus: LoadStatus.ERROR }
  | { loadStatus: LoadStatus.SUCCESS; notes: Note[] };

interface SongNotesProps {
  songId: string;
}

export const SongNotesContainer: React.FC<SongNotesProps> = ({ songId }) => {
  const [state, setState] = React.useState<FetchNotesState>({ loadStatus: LoadStatus.LOADING });
  const songsNotes = useSongsNotes();

  React.useEffect(() => {
    const songNotes = songsNotes.getNotesBySongId(songId);

    if (songNotes) {
      setState({ loadStatus: LoadStatus.SUCCESS, notes: songNotes });

      return;
    }

    songsNotes
      .fetchNotesBySongId(songId)
      .then(response => {
        setState({ loadStatus: LoadStatus.SUCCESS, notes: response.data });
      })
      .catch(() => {
        setState({ loadStatus: LoadStatus.ERROR });
      });
  }, [songId, songsNotes]);

  const { loadStatus } = state;

  switch (loadStatus) {
    case LoadStatus.LOADING:
      return <Spinner />;
    case LoadStatus.ERROR:
      return <Icon name="error" />;
    case LoadStatus.SUCCESS:
      return <SongNotes notes={state.notes} />;
  }
};
