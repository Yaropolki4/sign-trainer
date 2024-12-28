import { observer } from 'mobx-react-lite';
import { SidebarSongsList } from './SongsList';
import { t } from '@shared/i18n';
import { Icon, ListTitle } from '@shared/ui';
import React from 'react';
import { useStore } from '@shared/store';

export const SearchSongsList: React.FC = observer(() => {
  const { searchSongsState } = useStore();
  const { songs, loadStatus } = searchSongsState;

  const title = React.useMemo(() => {
    return (
      <ListTitle
        text={t('sidebar.search.title')}
        leftAddon={<Icon name={'search'} size="m" />}
      />
    );
  }, []);

  return (
    <SidebarSongsList
      title={title}
      songs={songs}
      status={loadStatus}
      emptyScreenText={t('sidebar.search.empty')}
    />
  );
});
