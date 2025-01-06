import { Note } from '../model';
import { formatToCssRGB, generateGradient } from './colorUtils';

interface NotesBounds {
  lowerNotesBound: number;
  upperNotesBound: number;
}

export const getNotesBoundsAndDurations = (notes: Note[]) => {
  let sumDurations = 0;
  let lowerNotesBound = Infinity;
  let upperNotesBound = -Infinity;

  for (const note of notes) {
    sumDurations += note.duration;
    lowerNotesBound = Math.min(lowerNotesBound, note.tone);
    upperNotesBound = Math.max(upperNotesBound, note.tone);
  }

  return {
    lowerNotesBound,
    upperNotesBound,
    sumDurations,
  };
};

export const VERTICAL_NOTES_OFFSET = 2;

export const getNoteHeight = (containerHeight: number, bounds: NotesBounds) => {
  return containerHeight / (bounds.upperNotesBound - bounds.lowerNotesBound + 1 + VERTICAL_NOTES_OFFSET * 2);
};

const LOWER_COLOR_BOUND = '#FFD29D';
const UPPER_COLOR_BOUND = '#FA971B';
const BACKGROUND_ALPHA = 0.1;

export const getNotesGradient = (bounds: NotesBounds) => {
  return generateGradient(LOWER_COLOR_BOUND, UPPER_COLOR_BOUND, bounds.upperNotesBound - bounds.lowerNotesBound + 1);
};

export const getNotesColors = (bounds: NotesBounds) => {
  const gradient = getNotesGradient(bounds);

  const columnsColors = gradient.map(color => {
    return formatToCssRGB([color[0], color[1], color[2], BACKGROUND_ALPHA]);
  });

  const notesColors = gradient.map(color => {
    return formatToCssRGB(color);
  });

  return {
    columnsColors,
    notesColors,
  };
};

export const getNoteTopOffset = (noteHeight: number, upperNotesBound: number, tone: number) => {
  return noteHeight * (upperNotesBound + VERTICAL_NOTES_OFFSET - tone);
};

export const MAX_VISIBLE_DURATION = 5000;

export const getNoteWidth = (duration: number, fullDuration: number, containerWidth: number) => {
  return (duration / Math.min(MAX_VISIBLE_DURATION, fullDuration)) * containerWidth;
};
