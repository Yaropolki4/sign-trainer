import { SidebarActionPanel } from '@features/SidebarActionPanel';
import { SidebarSongsList } from '@features/SidebarSongsList';
import { Divider } from '@shared/ui';
import { observer } from 'mobx-react-lite';
import React from 'react';

export const Sidebar: React.FC = observer(() => {
  return (
    <div className="flex h-lvh w-3/12 flex-col border-r-1 border-divider">
      <SidebarActionPanel />
      <Divider />
      <SidebarSongsList />
    </div>
  );
});
