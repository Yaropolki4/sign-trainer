import React from 'react';
import { Note } from '../model';
import {
  getNoteHeight,
  getNotesBounds,
  getNotesColors,
  getNotesDuration,
  getNoteTopOffset,
  getNoteWidth,
  MAX_VISIBLE_DURATION,
} from '../lib';
import { observer } from 'mobx-react-lite';
import { SongSlider } from './SongSlider';

const DEFAULT_SIZE = 0;

interface SongNotesProps {
  notes: Note[];
  notesDuration: number;
  time?: number;
}

export interface ScrollerHandle {
  setScroll: (time: number) => void;
  resetScroll: () => void;
  disableScroll: () => void;
  enableScroll: () => void;
}

function preventDefault(e: Event) {
  e.preventDefault();
}

export const SongNotes = observer(
  // eslint-disable-next-line react/display-name
  React.forwardRef<ScrollerHandle, SongNotesProps>(({ notes, time = 0 }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = React.useState(DEFAULT_SIZE);
    const [containerHeight, setContainerHeight] = React.useState(DEFAULT_SIZE);
    const notesDuration = React.useMemo(() => {
      return getNotesDuration(notes);
    }, [notes]);

    const horizontalOffset = (time / MAX_VISIBLE_DURATION) * containerWidth;

    React.useImperativeHandle(ref, () => ({
      setScroll: (currentTime: number) => {
        const container = containerRef.current;

        if (!container) {
          return;
        }

        const scrollerWidth = container.offsetWidth;

        if (currentTime >= MAX_VISIBLE_DURATION / 2) {
          container.scrollLeft = ((currentTime - MAX_VISIBLE_DURATION / 2) / MAX_VISIBLE_DURATION) * scrollerWidth;

          return;
        }

        container.scrollLeft = 0;
      },
      resetScroll: () => {
        const container = containerRef.current;

        if (container) {
          container.scrollLeft = 0;
        }
      },
      disableScroll: () => {
        const container = containerRef.current;

        if (container) {
          container.addEventListener('scroll', preventDefault);
          container.addEventListener('wheel', preventDefault);
          container.addEventListener('touchmove', preventDefault);
        }
      },
      enableScroll: () => {
        const container = containerRef.current;

        if (container) {
          container.removeEventListener('scroll', preventDefault);
          container.removeEventListener('wheel', preventDefault);
          container.removeEventListener('touchmove', preventDefault);
        }
      },
    }));

    React.useLayoutEffect(() => {
      const width = containerRef.current?.clientWidth;
      const height = containerRef.current?.clientHeight;

      if (width) {
        setContainerWidth(width);
      }

      if (height) {
        setContainerHeight(height);
      }
    }, []);

    const { upperNotesBound, lowerNotesBound } = getNotesBounds(notes);
    const noteHeight = getNoteHeight(containerHeight, { lowerNotesBound, upperNotesBound });

    const { notesColors, columnsColors } = React.useMemo(
      () => getNotesColors({ lowerNotesBound, upperNotesBound }),
      [lowerNotesBound, upperNotesBound],
    );

    return (
      <div ref={containerRef} className="relative flex grow overflow-x-scroll">
        <SongSlider horizontalOffset={horizontalOffset} />
        {notes.map((_, index) => {
          const { tone, duration } = notes[index];
          const offset = getNoteTopOffset(noteHeight, upperNotesBound, tone);
          const noteWidth = getNoteWidth(duration, notesDuration, containerWidth);
          const noteColor = notesColors[tone - lowerNotesBound];
          const columnColor = columnsColors[tone - lowerNotesBound];

          return (
            <div
              style={{ width: noteWidth, background: columnColor }}
              key={index}
              className="relative h-full shrink-0 border-r-0.5 border-divider"
            >
              <div
                style={{ height: noteHeight, top: offset, background: noteColor }}
                className="absolute w-full rounded-lg opacity-100"
              />
            </div>
          );
        })}
      </div>
    );
  }),
);
