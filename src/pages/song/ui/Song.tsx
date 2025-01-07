import { useParams } from 'react-router';
import { SongPreview } from '@entities/songPreview';
import { SongPlayerControls } from '@features/SongPlayerControls';
import { Divider, Icon, IconButton, Spinner } from '@shared/ui';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { LoadStatus } from '@shared/api';
import { NotesWithInfo } from '../model';
import { useSongsNotes } from '../lib';
import { SongNotes } from '@entities/songNotes';

type FetchNotesState =
  | { loadStatus: LoadStatus.LOADING }
  | { loadStatus: LoadStatus.ERROR }
  | { loadStatus: LoadStatus.SUCCESS; notesWithInfo: NotesWithInfo };

const renderSettings = () => {
  return (
    <div className="ml-16">
      <IconButton name="settings" paddingless transparent size="xl" />
    </div>
  );
};

export const Song: React.FC = observer(() => {
  const { id } = useParams();

  if (!id) {
    return null;
  }

  const [state, setState] = React.useState<FetchNotesState>({ loadStatus: LoadStatus.LOADING });
  const songsNotes = useSongsNotes();

  React.useEffect(() => {
    const songNotes = songsNotes.getNotesBySongId(id);

    if (songNotes) {
      setState({ loadStatus: LoadStatus.SUCCESS, notesWithInfo: songNotes });

      return;
    }

    songsNotes
      .fetchNotesBySongId(id)
      .then(response => {
        setState({ loadStatus: LoadStatus.SUCCESS, notesWithInfo: response.data });
      })
      .catch(() => {
        setState({ loadStatus: LoadStatus.ERROR });
      });
  }, [id, songsNotes]);

  const { loadStatus } = state;

  const renderSongNotes = () => {
    switch (loadStatus) {
      case LoadStatus.LOADING:
        return <Spinner />;
      case LoadStatus.ERROR:
        return <Icon name="error" />;
      case LoadStatus.SUCCESS:
        return (
          <>
            <div className="flex justify-between px-9">
              <div className="basis-96 overflow-hidden">
                <SongPreview interractable={false} song={state.notesWithInfo.info} />
              </div>
              <SongPlayerControls
                onPlay={() => {}}
                onStop={() => {}}
                onRecord={() => {}}
                renderSettings={renderSettings}
              />
            </div>
            <Divider />
            <SongNotes notes={state.notesWithInfo.notes} />
          </>
        );
    }
  };

  return <div className="flex w-3/4 flex-grow flex-col">{renderSongNotes()}</div>;
});
