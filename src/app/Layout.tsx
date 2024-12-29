import React from 'react';
import { Outlet } from 'react-router';
import { SidebarContainer } from '@widgets/Sidebar';

export const Layout: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 bg-fill-primary">
      <div className="flex w-full flex-row flex-nowrap">
        <SidebarContainer />
        <Outlet />
      </div>
    </div>
  );
};
