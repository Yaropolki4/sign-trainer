import type { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within } from '@storybook/test';
import { Input } from './Input';

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
    renderControls: () => <div className="h-4 w-10 bg-accent" />,
    onChange: fn(),
  },
};

export const InputWithText: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByRole('textbox');

    await userEvent.type(emailInput, 'example', {
      delay: 1,
    });
  },
};

export const InputWithLargeText: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByRole('textbox');

    await userEvent.type(emailInput, 'example'.repeat(20), {
      delay: 1,
    });
  },
};

export const InputWithLargeTextAndControls: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByRole('textbox');

    await userEvent.type(emailInput, 'example'.repeat(20), {
      delay: 1,
    });
  },
  args: {
    renderControls: () => <div className="h-4 w-10 bg-accent" />,
  },
};
