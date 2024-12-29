import { observer } from 'mobx-react-lite';
import { SidebarSongsList } from '@entities/songsList';
import { t } from '@shared/lib';
import { Icon, ListTitle } from '@shared/ui';
import React from 'react';
import { useSongsList } from '../lib';
import { SongPreview, SongPreviewModel } from '@entities/songPreview';

const FAVORITE_SONG_ITEM_HEIGHT = 72;

export const FavoriteSongsList: React.FC = observer(() => {
  const { favorite } = useSongsList();
  const { songs, loadStatus } = favorite;

  const title = React.useMemo(() => {
    return (
      <ListTitle
        text={t('sidebar.favorite.title')}
        leftAddon={<Icon name={'heart'} size="m" />}
      />
    );
  }, []);

  const renderSongComponent = React.useCallback((song: SongPreviewModel) => {
    return <SongPreview song={song} />;
  }, []);

  return (
    <SidebarSongsList
      title={title}
      songs={songs}
      status={loadStatus}
      emptyScreenText={t('sidebar.favorite.empty')}
      renderSongComponent={renderSongComponent}
      songItemHeight={FAVORITE_SONG_ITEM_HEIGHT}
    />
  );
});
