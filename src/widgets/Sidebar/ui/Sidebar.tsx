import { SongGroup } from '@entities/songsList';
import { SidebarSearchPanel } from '@features/SidebarSearchPanel';
import {
  SelectedGroupProvider,
  SidebarInputControls,
  useSelectedGroup,
} from '@features/SidebarInputControls';
import {
  FavoriteSongsList,
  RecentSongsList,
  SongsListProvider,
  useSongsList,
} from '@features/SidebarSongsList';
import { Divider } from '@shared/ui';
import { observer } from 'mobx-react-lite';
import React from 'react';

const Sidebar: React.FC = observer(() => {
  const selectedGroupState = useSelectedGroup();

  const renderSongsList = () => {
    switch (selectedGroupState.group) {
      case SongGroup.FAVORITE:
        return <FavoriteSongsList />;
      case SongGroup.RECENT:
        return <RecentSongsList />;
      default:
        return <div>UNKNOWN SONGS LIST</div>;
    }
  };

  const renderControls = React.useCallback(() => {
    return <SidebarInputControls />;
  }, []);

  const topNodeRef = React.useRef<HTMLDivElement>(null);
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const topNode = topNodeRef.current;

    if (topNode) {
      setOffset(topNode.clientHeight);
    }
  }, []);

  const {
    recent: { fetchSongs: fetchRecent },
    favorite: { fetchSongs: fetchFavorite },
  } = useSongsList();

  React.useEffect(() => {
    fetchRecent();
    fetchFavorite();
  }, [fetchRecent, fetchFavorite]);

  return (
    <div className="flex h-lvh w-3/12 flex-col border-r-1 border-divider">
      <div ref={topNodeRef}>
        <SidebarSearchPanel
          searchListOffset={offset}
          renderControls={renderControls}
        />
        <Divider />
      </div>
      {renderSongsList()}
    </div>
  );
});

export const SidebarContainer: React.FC = observer(() => {
  return (
    <SongsListProvider>
      <SelectedGroupProvider>
        <Sidebar />
      </SelectedGroupProvider>
    </SongsListProvider>
  );
});
