import React from 'react';
import { Note } from '../model';
import { getNoteHeight, getNotesBoundsAndDurations, getNotesColors, getNoteTopOffset, getNoteWidth } from '../lib';
import { observer } from 'mobx-react-lite';

const DEFAULT_SIZE = 0;

interface SongNotesProps {
  notes: Note[];
}

export const SongNotes: React.FC<SongNotesProps> = observer(({ notes }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = React.useState(DEFAULT_SIZE);
  const [containerHeight, setContainerHeight] = React.useState(DEFAULT_SIZE);

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

  const { upperNotesBound, lowerNotesBound, sumDurations } = getNotesBoundsAndDurations(notes);
  const noteHeight = getNoteHeight(containerHeight, { lowerNotesBound, upperNotesBound });

  const { notesColors, columnsColors } = React.useMemo(
    () => getNotesColors({ lowerNotesBound, upperNotesBound }),
    [lowerNotesBound, upperNotesBound],
  );

  return (
    <div ref={containerRef} className="flex grow overflow-x-scroll">
      {notes.map((_, index) => {
        const { tone, duration } = notes[index];
        const offset = getNoteTopOffset(noteHeight, upperNotesBound, tone);
        const noteWidth = getNoteWidth(duration, sumDurations, containerWidth);
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
});
