import { useParams } from 'react-router';
import { SongPreview } from '@entities/songPreview';
import { SongPlayerControls } from '@features/SongPlayerControls';
import { Divider, Icon, IconButton, Spinner } from '@shared/ui';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { LoadStatus } from '@shared/api';
import { NotesWithInfo } from '../model';
import { useRequestAnimationFrame, useSongsNotes } from '../lib';
import { getNotesDuration, SongNotes, ScrollerHandle } from '@entities/songNotes';

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

interface SongProps {
  notesWithInfo: NotesWithInfo;
  id: string;
}

const Song: React.FC<SongProps> = observer(({ notesWithInfo, id }) => {
  const scrollerRef = React.useRef<ScrollerHandle>(null);
  const { notes, info } = notesWithInfo;

  const notesDuration = React.useMemo(() => {
    return getNotesDuration(notes);
  }, [notes]);

  const resetScroll = React.useCallback(() => {
    const scroller = scrollerRef.current;

    if (scroller) {
      scroller.resetScroll();
      scroller.enableScroll();
    }
  }, []);

  const onAnimationTick = React.useCallback((time: number) => {
    const scroller = scrollerRef.current;

    if (scroller) {
      scroller.setScroll(time);
    }
  }, []);

  const {
    setActive,
    resetAnimation,
    isAnimationActive: active,
    time,
  } = useRequestAnimationFrame({ onReset: resetScroll, onAnimationTick }, notesDuration, [id]);

  const handlePlay = React.useCallback(() => {
    const scroller = scrollerRef.current;

    if (scroller) {
      scroller.disableScroll();
    }

    setActive(true);
  }, [setActive]);

  const handleStop = React.useCallback(() => {
    const scroller = scrollerRef.current;

    if (scroller) {
      scroller.enableScroll();
    }

    setActive(false);
  }, [setActive]);

  const handleReset = React.useCallback(() => {
    resetAnimation();
  }, [resetAnimation]);

  const handleRecord = React.useCallback(() => {}, []);

  return (
    <div className="flex w-3/4 flex-grow flex-col">
      <div className="flex justify-between px-9">
        <div className="basis-96 overflow-hidden">
          <SongPreview interractable={false} song={info} />
        </div>
        <SongPlayerControls
          active={active}
          onPlay={handlePlay}
          onStop={handleStop}
          onReset={handleReset}
          onRecord={handleRecord}
          renderSettings={renderSettings}
        />
      </div>
      <Divider />
      <SongNotes notesDuration={notesDuration} ref={scrollerRef} time={time.value} notes={notes} />
    </div>
  );
});

export const SongContainer: React.FC = observer(() => {
  const { id } = useParams();

  if (!id) {
    return null;
  }

  const [state, setState] = React.useState<FetchNotesState>({ loadStatus: LoadStatus.LOADING });
  const songsNotes = useSongsNotes();

  React.useEffect(() => {
    setState({ loadStatus: LoadStatus.LOADING });

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

  switch (loadStatus) {
    case LoadStatus.LOADING:
      return <Spinner />;
    case LoadStatus.ERROR:
      return <Icon name="error" />;
    case LoadStatus.SUCCESS:
      return <Song notesWithInfo={state.notesWithInfo} id={id} />;
  }
});
