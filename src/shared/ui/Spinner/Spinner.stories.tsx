import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
Default.decorators = [
  Story => (
    <div className="h-16 w-16">
      <Story />
    </div>
  ),
];
