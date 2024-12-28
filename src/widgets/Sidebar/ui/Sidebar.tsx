import { SongGroup } from '@entities/songPreview';
import { SidebarActionPanel } from '@features/SidebarActionPanel';
import {
  FavoriteSongsList,
  SearchSongsList,
  RecentSongsList,
} from '@features/SidebarSongsList';
import { useStore } from '@shared/store';
import { Divider } from '@shared/ui';
import { observer } from 'mobx-react-lite';
import React from 'react';

export const Sidebar: React.FC = observer(() => {
  const { selectedGroupState } = useStore();

  const renderSongsList = () => {
    switch (selectedGroupState.group) {
      case SongGroup.FAVORITE:
        return <FavoriteSongsList />;
      case SongGroup.RECENT:
        return <RecentSongsList />;
      case SongGroup.SEARCH:
        return <SearchSongsList />;
      default:
        return <div>UNKNOWN SONGS LIST</div>;
    }
  };

  return (
    <div className="flex h-lvh w-3/12 flex-col border-r-1 border-divider">
      <SidebarActionPanel />
      <Divider />
      {renderSongsList()}
    </div>
  );
});
