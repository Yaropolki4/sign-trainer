import type { Meta, StoryObj } from '@storybook/react';
import { SongPreview } from './SongPreview';

const meta: Meta<typeof SongPreview> = {
  component: SongPreview,
};

export default meta;

type Story = StoryObj<typeof SongPreview>;

export const Default: Story = {
  args: {
    song: {
      title: 'Title',
      author: 'Author',
      songId: 'id',
    },
  },
};

export const LongText: Story = {
  args: {
    song: {
      title: 'Title'.repeat(20),
      author: 'Author'.repeat(20),
      songId: 'id',
    },
  },
};

export const Active: Story = {
  args: {
    song: {
      title: 'Title',
      author: 'Author',
      songId: 'id',
    },
    active: true,
  },
};
