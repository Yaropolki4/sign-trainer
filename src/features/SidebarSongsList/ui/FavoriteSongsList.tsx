import { observer } from 'mobx-react-lite';
import { SidebarSongsList } from '@entities/songsList';
import { t } from '@shared/i18n';
import { Icon, ListTitle } from '@shared/ui';
import React from 'react';
import { useStore } from '@shared/store';

export const FavoriteSongsList: React.FC = observer(() => {
  const { favoriteSongsState } = useStore();
  const { songs, loadStatus } = favoriteSongsState;

  const title = React.useMemo(() => {
    return (
      <ListTitle
        text={t('sidebar.favorite.title')}
        leftAddon={<Icon name={'heart'} size="m" />}
      />
    );
  }, []);

  return (
    <SidebarSongsList
      title={title}
      songs={songs}
      status={loadStatus}
      emptyScreenText={t('sidebar.favorite.empty')}
    />
  );
});
