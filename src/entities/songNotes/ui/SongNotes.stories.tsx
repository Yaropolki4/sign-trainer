import type { Meta, StoryObj } from '@storybook/react';
import { SongNotes } from './SongNotes';
import { within } from '@storybook/test';
import defaultCase from './testCases/default.json';
import scrollCase from './testCases/scroll.json';
import { MAX_VISIBLE_DURATION } from '../lib';

const meta: Meta<typeof SongNotes> = {
  component: SongNotes,
  decorators: [
    Story => (
      <div className="flex flex-col" role="list" style={{ width: '100%', height: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SongNotes>;

export const Default: Story = {
  args: {
    notes: defaultCase,
  },
};

export const Scroll: Story = {
  args: {
    notes: scrollCase,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const scrollerContainer = canvas.getByRole('list');
    const scroller = scrollerContainer.childNodes?.[0] as HTMLDivElement;

    scroller.scrollBy(2000, 0);
  },
};

export const MaxScreenDuration: Story = {
  args: {
    notes: [
      {
        tone: 33,
        duration: MAX_VISIBLE_DURATION,
      },
    ],
  },
};

export const MaxSongDurationLessThanMaxVisibleDuration: Story = {
  args: {
    notes: [
      {
        tone: 33,
        duration: MAX_VISIBLE_DURATION / 3,
      },
    ],
  },
};

export const LargeDifference: Story = {
  args: {
    notes: [
      {
        tone: 10,
        duration: 2000,
      },
      {
        tone: 46,
        duration: 2000,
      },
    ],
  },
};
