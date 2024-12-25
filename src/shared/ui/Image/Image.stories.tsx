import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';
import testImage from './testAssets/test.jpg';

const meta: Meta<typeof Image> = {
  component: Image,
  decorators: [
    Story => (
      <div style={{ maxWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: testImage,
  },
};
