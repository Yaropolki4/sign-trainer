import { IconButton } from '@shared/ui';
import { useSelectedGroup } from '../lib';
import React from 'react';
import { SongGroup } from '@entities/songsList';
import { useNavigate } from 'react-router';
import { Routers } from '@shared/constants';

export const SidebarInputControls: React.FC = () => {
  const navigate = useNavigate();
  const { setSelectedGroup } = useSelectedGroup();

  const handleRecentSongsButtonClick = React.useCallback(() => {
    setSelectedGroup(SongGroup.RECENT);
  }, [setSelectedGroup]);

  const handleFavoriteSongsButtonClick = React.useCallback(() => {
    setSelectedGroup(SongGroup.FAVORITE);
  }, [setSelectedGroup]);

  const handleCreateButtonClick = React.useCallback(() => {
    navigate(Routers.CREATE);
  }, [navigate]);

  return (
    <div className="flex gap-1">
      <IconButton name="recent" onClick={handleRecentSongsButtonClick} paddingless transparent hoverable />
      <IconButton name="heart" onClick={handleFavoriteSongsButtonClick} paddingless transparent hoverable />
      <IconButton name="add" onClick={handleCreateButtonClick} paddingless transparent hoverable />
    </div>
  );
};
