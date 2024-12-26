import { SongsList } from '@entities/songPreview';
import { useStore } from '@shared/store';
import { SongGroup } from '@entities/songPreview';
import { observer } from 'mobx-react-lite';
import { t } from '@shared/i18n';
import { Icon, ListTitle } from '@shared/ui';
import AutoSizer from 'react-virtualized-auto-sizer';

export const SidebarSongsList: React.FC = observer(() => {
  const { recentSongsState, favoriteSongsState, selectedGroupState } =
    useStore();
  const { songs: recentSongs } = recentSongsState;
  const { songs: favoriteSongs } = favoriteSongsState;
  const { group } = selectedGroupState;
  const isRecent = group === SongGroup.RECENT;

  return (
    <>
      <ListTitle
        text={t(isRecent ? 'sidebar.recent' : 'sidebar.favorite')}
        leftAddon={<Icon name={isRecent ? 'recent' : 'heart'} size="m" />}
      />
      <div className="grow">
        <AutoSizer>
          {({ height, width }) => {
            return (
              <SongsList
                songs={isRecent ? recentSongs : favoriteSongs}
                songWidth={width}
                emptyScreen={<div>EMPTY</div>}
                listHeight={height}
              />
            );
          }}
        </AutoSizer>
      </div>
    </>
  );
});
