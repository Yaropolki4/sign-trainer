import type { Meta, StoryObj } from '@storybook/react';
import { ListTitle } from './ListTitle';

const meta: Meta<typeof ListTitle> = {
  component: ListTitle,
};

export default meta;

type Story = StoryObj<typeof ListTitle>;

export const Default: Story = {
  args: {
    text: 'text',
  },
};

export const WithLeftAddon: Story = {
  args: {
    text: 'text',
    leftAddon: <div className="h-2 w-2 bg-accent" />,
  },
};
