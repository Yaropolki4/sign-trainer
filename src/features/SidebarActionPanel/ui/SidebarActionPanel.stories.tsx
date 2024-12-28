import type { Meta, StoryObj } from '@storybook/react';
import { SidebarActionPanel } from './SidebarActionPanel';
import { QueryClient, QueryClientProvider } from 'react-query';

const meta: Meta<typeof SidebarActionPanel> = {
  component: SidebarActionPanel,
};

export default meta;

const queryClient = new QueryClient();

type Story = StoryObj<typeof SidebarActionPanel>;

export const Default: Story = {};
Default.decorators = [
  Story => {
    return (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    );
  },
];
