import type { Meta, StoryObj } from '@storybook/react';
import { SongPlayerControls } from './SongPlayerControls';
import { fn } from '@storybook/test';
import { IconButton } from '@shared/ui';

const meta: Meta<typeof SongPlayerControls> = {
  component: SongPlayerControls,
};

export default meta;

type Story = StoryObj<typeof SongPlayerControls>;

const renderSettings = () => {
  return (
    <div className="ml-16">
      <IconButton name="settings" paddingless transparent size="xl" />
    </div>
  );
};

export const Default: Story = {
  args: {
    onPlay: fn(),
    onStop: fn(),
    onRecord: fn(),
    renderSettings,
  },
};
