import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { fn } from '@storybook/test';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    onChange: fn(),
  },
};

export const WithControls: Story = {
  args: {
    controls: <div className="bg-accent h-4 w-10" />,
    onChange: fn(),
  },
};
