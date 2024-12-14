import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { fn } from '@storybook/test';
 
const meta: Meta<typeof Button> = {
    component: Button,
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const Primary: Story = {
    args: {
        text: 'primary',
        onClick: fn(),
    },
};

export const Secondaty: Story = {
    args: {
        text: 'secondary',
        onClick: fn(),
    }
};
