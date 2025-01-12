import { SongSlider } from './SongSlider';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SongSlider> = {
  component: SongSlider,
  decorators: [
    Story => (
      <div className="flex flex-col" role="list" style={{ width: '100%', height: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SongSlider>;

export const Default: Story = {
  args: {
    horizontalOffset: 0,
  },
};
