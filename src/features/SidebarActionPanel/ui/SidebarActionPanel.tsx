import { SongGroup } from '@entities/songPreview';
import { useStore } from '@shared/store';
import { Input, IconButton } from '@shared/ui';
import { observer } from 'mobx-react-lite';
import React from 'react';

export const SidebarActionPanel: React.FC = observer(() => {
  const {
    selectedGroupState: { setSelectedGroup },
  } = useStore();

  const selectRecentSongs = React.useCallback(() => {
    setSelectedGroup(SongGroup.RECENT);
  }, [setSelectedGroup]);

  const selectFavoriteSongs = React.useCallback(() => {
    setSelectedGroup(SongGroup.FAVORITE);
  }, [setSelectedGroup]);

  const controls = (
    <div className="flex gap-1">
      <IconButton name="recent" onClick={selectRecentSongs} paddingless />
      <IconButton name="heart" onClick={selectFavoriteSongs} paddingless />
      <IconButton name="add" paddingless />
    </div>
  );

  return (
    <div className="px-3 py-4">
      <Input controls={controls} />
    </div>
  );
});
