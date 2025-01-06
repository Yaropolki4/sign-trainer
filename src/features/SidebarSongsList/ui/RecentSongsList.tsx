import { observer } from 'mobx-react-lite';
import { SidebarSongsList } from '@entities/songsList';
import { t } from '@shared/lib';
import { Icon, ListTitle } from '@shared/ui';
import React from 'react';
import { useSongsList } from '../lib';
import { SongPreview, SongPreviewModel } from '@entities/songPreview';
import { useNavigate } from 'react-router';
import { Routers } from '@shared/constants';

const RECENT_SONG_ITEM_HEIGHT = 72;

export const RecentSongsList: React.FC = observer(() => {
  const { recent } = useSongsList();
  const { songs, loadStatus } = recent;

  const navigate = useNavigate();

  const title = React.useMemo(() => {
    return <ListTitle text={t('sidebar.recent.title')} leftAddon={<Icon name={'recent'} size="m" />} />;
  }, []);

  const handleNavigate = React.useCallback(
    (id: string) => {
      navigate(Routers.SONG.replace(':id', id));
    },
    [navigate],
  );

  const renderSongComponent = React.useCallback((song: SongPreviewModel) => {
    return <SongPreview song={song} onNavigate={handleNavigate} />;
  }, []);

  return (
    <SidebarSongsList
      title={title}
      songs={songs}
      status={loadStatus}
      emptyScreenText={t('sidebar.recent.empty')}
      renderSongComponent={renderSongComponent}
      songItemHeight={RECENT_SONG_ITEM_HEIGHT}
    />
  );
});
