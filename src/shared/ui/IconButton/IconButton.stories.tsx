import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { fn } from '@storybook/test';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    name: 'close',
    onClick: fn(),
  },
};

export const Small: Story = {
  args: {
    name: 'close',
    size: 's',
    onClick: fn(),
  },
};

export const WithText: Story = {
  args: {
    name: 'close',
    text: 'text',
    onClick: fn(),
  },
};

export const WithLargeText: Story = {
  args: {
    name: 'close',
    text: 'text'.repeat(10),
    onClick: fn(),
  },
};

export const Transparent: Story = {
  args: {
    name: 'close',
    transparent: true,
    onClick: fn(),
  },
};

export const Paddingless: Story = {
  args: {
    name: 'close',
    paddingless: true,
    onClick: fn(),
  },
};
