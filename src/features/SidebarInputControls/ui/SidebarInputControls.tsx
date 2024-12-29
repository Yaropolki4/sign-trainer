import { IconButton } from '@shared/ui';
import { useSelectedGroup } from '../lib';
import React from 'react';
import { SongGroup } from '@entities/songsList';

export const SidebarInputControls: React.FC = () => {
  const { setSelectedGroup } = useSelectedGroup();

  const setRecentSongs = React.useCallback(() => {
    setSelectedGroup(SongGroup.RECENT);
  }, [setSelectedGroup]);

  const setFavoriteSongs = React.useCallback(() => {
    setSelectedGroup(SongGroup.FAVORITE);
  }, [setSelectedGroup]);

  return (
    <div className="flex gap-1">
      <IconButton
        name="recent"
        onClick={setRecentSongs}
        paddingless
        transparent
        hoverable
      />
      <IconButton
        name="heart"
        onClick={setFavoriteSongs}
        paddingless
        transparent
        hoverable
      />
      <IconButton name="add" paddingless transparent hoverable />
    </div>
  );
};
