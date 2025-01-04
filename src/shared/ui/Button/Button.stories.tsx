import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { fn } from '@storybook/test';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: 'default',
    onClick: fn(),
  },
};

export const DefaultLargeText: Story = {
  args: {
    text: 'default'.repeat(10),
    onClick: fn(),
  },
};

export const Paddingless: Story = {
  args: {
    text: 'paddingless',
    paddingless: true,
    onClick: fn(),
  },
};

export const Transparent: Story = {
  args: {
    text: 'trasparent',
    transparent: true,
    onClick: fn(),
  },
};

export const WithLeftAddon: Story = {
  args: {
    text: 'with left addon',
    onClick: fn(),
    leftAddon: <div className="h-4 w-4 bg-accent" />,
  },
};
