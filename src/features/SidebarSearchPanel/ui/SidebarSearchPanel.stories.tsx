import type { Meta, StoryObj } from '@storybook/react';
import { SidebarSearchPanel } from './SidebarSearchPanel';
import { QueryClient, QueryClientProvider } from 'react-query';

const meta: Meta<typeof SidebarSearchPanel> = {
  component: SidebarSearchPanel,
};

export default meta;

const queryClient = new QueryClient();

type Story = StoryObj<typeof SidebarSearchPanel>;

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
