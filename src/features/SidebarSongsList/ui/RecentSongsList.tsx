import { observer } from 'mobx-react-lite';
import { SidebarSongsList } from '@entities/songsList';
import { t } from '@shared/i18n';
import { Icon, ListTitle } from '@shared/ui';
import React from 'react';
import { useStore } from '@shared/store';

export const RecentSongsList: React.FC = observer(() => {
  const { recentSongsState } = useStore();
  const { songs, loadStatus } = recentSongsState;

  const title = React.useMemo(() => {
    return (
      <ListTitle
        text={t('sidebar.recent.title')}
        leftAddon={<Icon name={'recent'} size="m" />}
      />
    );
  }, []);

  return (
    <SidebarSongsList
      title={title}
      songs={songs}
      status={loadStatus}
      emptyScreenText={t('sidebar.recent.empty')}
    />
  );
});
