import { Note } from '@entities/songNotes';
import {
  getNoteHeight,
  getNotesBounds,
  getNoteTopOffset,
  getNoteWidth,
  MAX_VISIBLE_DURATION,
  VERTICAL_NOTES_OFFSET,
  getNotesDuration,
} from '../notesLayoutUtils';

describe('notesLayoutUtils', () => {
  describe('getNotesDuration', () => {
    it('should return 0 for an empty array', () => {
      const notes: Note[] = [];
      const result = getNotesDuration(notes);
      expect(result).toBe(0);
    });

    it('should return the correct sum of durations', () => {
      const notes: Note[] = [
        { duration: 2, tone: 60 },
        { duration: 3, tone: 60 },
        { duration: 5, tone: 60 },
      ];
      const result = getNotesDuration(notes);
      expect(result).toBe(10);
    });

    it('should return the correct sum when there is only one note', () => {
      const notes: Note[] = [{ duration: 7, tone: 60 }];
      const result = getNotesDuration(notes);
      expect(result).toBe(7);
    });

    it('should return 0 for an array of notes with duration 0', () => {
      const notes: Note[] = [
        { duration: 0, tone: 60 },
        { duration: 0, tone: 60 },
        { duration: 0, tone: 60 },
      ];
      const result = getNotesDuration(notes);
      expect(result).toBe(0);
    });
  });
  describe('getNotesBounds', () => {
    test('calculates duration for a list of notes', () => {
      const notes = [
        { tone: 60, duration: 1 },
        { tone: 62, duration: 2 },
        { tone: 58, duration: 1.5 },
        { tone: 65, duration: 3 },
      ];

      const result = getNotesBounds(notes);

      expect(result).toEqual({
        lowerNotesBound: 58,
        upperNotesBound: 65,
      });
    });

    test('handles a single note correctly', () => {
      const notes = [{ tone: 60, duration: 4 }];

      const result = getNotesBounds(notes);

      expect(result).toEqual({
        lowerNotesBound: 60,
        upperNotesBound: 60,
      });
    });

    test('returns Infinity and -Infinity for empty notes list', () => {
      //@ts-ignore
      const notes = [];

      //@ts-ignore
      const result = getNotesBounds(notes);

      expect(result).toEqual({
        lowerNotesBound: Infinity,
        upperNotesBound: -Infinity,
      });
    });

    test('handles mixed tones', () => {
      const notes = [
        { tone: -10, duration: 1 },
        { tone: 20, duration: 2 },
        { tone: 0, duration: 0 },
      ];

      const result = getNotesBounds(notes);

      expect(result).toEqual({
        lowerNotesBound: -10,
        upperNotesBound: 20,
      });
    });

    test('handles fractional tones and durations', () => {
      const notes = [
        { tone: 60.5, duration: 1.25 },
        { tone: 59.2, duration: 0.75 },
      ];

      const result = getNotesBounds(notes);

      expect(result).toEqual({
        lowerNotesBound: 59.2,
        upperNotesBound: 60.5,
      });
    });
  });
  describe('getNoteHeight', () => {
    test('calculates height for valid bounds and container height', () => {
      const containerHeight = 100;
      const bounds = { lowerNotesBound: 58, upperNotesBound: 65 };

      const result = getNoteHeight(containerHeight, bounds);

      expect(result).toBe(100 / (65 - 58 + 1 + VERTICAL_NOTES_OFFSET * 2));
    });

    test('returns correct height when bounds are the same (single note)', () => {
      const containerHeight = 50;
      const bounds = { lowerNotesBound: 60, upperNotesBound: 60 };

      const result = getNoteHeight(containerHeight, bounds);

      expect(result).toBe(50 / (1 + VERTICAL_NOTES_OFFSET * 2));
    });
  });
  describe('getNoteTopOffset', () => {
    const VERTICAL_NOTES_OFFSET = 2;

    test('calculates top offset for a note within bounds', () => {
      const noteHeight = 10;
      const upperNotesBound = 65;
      const tone = 60;

      const result = getNoteTopOffset(noteHeight, upperNotesBound, tone);

      expect(result).toBe(10 * (65 + VERTICAL_NOTES_OFFSET - 60));
    });

    test('returns zero for the highest tone in bounds', () => {
      const noteHeight = 15;
      const upperNotesBound = 70;
      const tone = 70;

      const result = getNoteTopOffset(noteHeight, upperNotesBound, tone);

      expect(result).toBe(15 * (70 + VERTICAL_NOTES_OFFSET - 70));
    });

    test('calculates top offset for a tone below upper bound', () => {
      const noteHeight = 20;
      const upperNotesBound = 75;
      const tone = 60;

      const result = getNoteTopOffset(noteHeight, upperNotesBound, tone);

      expect(result).toBe(20 * (75 + VERTICAL_NOTES_OFFSET - 60));
    });
  });
  describe('getNoteWidth', () => {
    test('calculates width correctly when fullDuration is less than MAX_VISIBLE_DURATION', () => {
      const duration = 2000;
      const fullDuration = 3000; // Less than MAX_VISIBLE_DURATION
      const containerWidth = 1000;

      const result = getNoteWidth(duration, fullDuration, containerWidth);

      expect(result).toBeCloseTo((duration / fullDuration) * containerWidth);
    });

    test('calculates width correctly when fullDuration exceeds MAX_VISIBLE_DURATION', () => {
      const duration = 2000;
      const fullDuration = 6000; // Greater than MAX_VISIBLE_DURATION
      const containerWidth = 1000;

      const result = getNoteWidth(duration, fullDuration, containerWidth);

      expect(result).toBeCloseTo((duration / MAX_VISIBLE_DURATION) * containerWidth);
    });

    test('returns 0 when duration is 0', () => {
      const duration = 0;
      const fullDuration = 3000;
      const containerWidth = 1000;

      const result = getNoteWidth(duration, fullDuration, containerWidth);

      expect(result).toBe(0);
    });

    test('returns 0 when containerWidth is 0', () => {
      const duration = 2000;
      const fullDuration = 3000;
      const containerWidth = 0;

      const result = getNoteWidth(duration, fullDuration, containerWidth);

      expect(result).toBe(0);
    });
  });
});
