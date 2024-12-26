import type { Meta, StoryObj } from '@storybook/react';
import { SidebarActionPanel } from './SidebarActionPanel';

const meta: Meta<typeof SidebarActionPanel> = {
  component: SidebarActionPanel,
};

export default meta;

type Story = StoryObj<typeof SidebarActionPanel>;

export const Default: Story = {};
