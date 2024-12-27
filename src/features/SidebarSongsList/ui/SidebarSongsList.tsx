import { SongsList } from '@entities/songPreview';
import { useStore } from '@shared/store';
import { SongGroup } from '@entities/songPreview';
import { observer } from 'mobx-react-lite';
import { t } from '@shared/i18n';
import { Icon, ListTitle } from '@shared/ui';
import AutoSizer from 'react-virtualized-auto-sizer';
import React from 'react';

export const SidebarSongsList: React.FC = observer(() => {
  const { recentSongsState, favoriteSongsState, selectedGroupState } =
    useStore();
  const { songs: recentSongs, loadStatus: recentSongsLoadStatus } =
    recentSongsState;
  const { songs: favoriteSongs, loadStatus: favoriteSongsLoadStatus } =
    favoriteSongsState;
  const { group } = selectedGroupState;
  const isRecent = group === SongGroup.RECENT;

  const emptyScreen = React.useMemo(
    () => (
      <div className="flex flex-col items-center justify-center">
        <Icon name="empty" size="auto" />
        <span className="text-xxl font-semibold text-secondary">
          {t(isRecent ? 'sidebar.recent.empty' : 'sidebar.favorite.empty')}
        </span>
      </div>
    ),
    [isRecent],
  );

  return (
    <>
      <ListTitle
        text={t(isRecent ? 'sidebar.recent.title' : 'sidebar.favorite.title')}
        leftAddon={<Icon name={isRecent ? 'recent' : 'heart'} size="m" />}
      />
      <div className="grow">
        <AutoSizer>
          {({ height, width }) => {
            return (
              <SongsList
                songs={isRecent ? recentSongs : favoriteSongs}
                status={
                  isRecent ? recentSongsLoadStatus : favoriteSongsLoadStatus
                }
                songWidth={width}
                emptyScreen={emptyScreen}
                listHeight={height}
              />
            );
          }}
        </AutoSizer>
      </div>
    </>
  );
});
