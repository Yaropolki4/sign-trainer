import { observer } from 'mobx-react-lite';
import { Icon, Spinner } from '@shared/ui';
import AutoSizer from 'react-virtualized-auto-sizer';
import React, { ComponentType } from 'react';
import { LoadStatus } from '@shared/api';
import { ListChildComponentProps } from 'react-window';
import { FixedSizeList as List } from 'react-window';

interface SongItem {
  songId: string;
}

interface SidebarSongsListProps {
  emptyScreenText: string;
  title: React.ReactNode;
  songs: SongItem[];
  status: LoadStatus;
  renderSongComponent(songs: SongItem): React.ReactNode;
  songItemHeight: number;
}

interface SongsListProps {
  songs: SongItem[];
  emptyScreen: React.ReactNode;
  songWidth: number;
  listHeight: number;
  status: LoadStatus;
  renderSongComponent(songs: SongItem): React.ReactNode;
  songItemHeight: number;
}

export const SongsList: React.FC<SongsListProps> = observer(
  ({ songs, songWidth, emptyScreen, listHeight, status, renderSongComponent, songItemHeight }) => {
    const ItemRenderer: ComponentType<ListChildComponentProps<ReturnType<typeof renderSongComponent>>> =
      React.useCallback(
        ({ index, style }) => {
          return (
            <div key={songs[index].songId} style={style}>
              {renderSongComponent(songs[index])}
            </div>
          );
        },
        [renderSongComponent, songs],
      );

    const songsLength = songs.length;

    const content = React.useMemo(() => {
      const renderSongs = () => {
        return songsLength ? (
          <List height={listHeight} itemCount={songsLength} itemSize={songItemHeight} width={songWidth}>
            {ItemRenderer}
          </List>
        ) : (
          emptyScreen
        );
      };

      switch (status) {
        case LoadStatus.SUCCESS:
          return renderSongs();
        case LoadStatus.LOADING:
          return (
            <div className="flex aspect-square w-1/2 items-center justify-center">
              <Spinner />
            </div>
          );
        case LoadStatus.ERROR:
        default:
          return <Icon name="error" size="auto" />;
      }
    }, [ItemRenderer, emptyScreen, listHeight, songItemHeight, songWidth, songsLength, status]);

    return (
      <div
        className="flex items-center justify-center bg-fill-primary"
        style={{ width: songWidth, height: listHeight }}
        role="list"
      >
        {content}
      </div>
    );
  },
);

export const SidebarSongsList: React.FC<SidebarSongsListProps> = observer(props => {
  const { emptyScreenText, title, songs, status, renderSongComponent, songItemHeight } = props;

  const emptyScreen = React.useMemo(
    () => (
      <div className="flex flex-col items-center justify-center">
        <Icon name="empty" size="auto" />
        <span className="text-xxl font-semibold text-secondary">{emptyScreenText}</span>
      </div>
    ),
    [emptyScreenText],
  );

  return (
    <>
      {title}
      <div className="h-full grow">
        <AutoSizer>
          {({ height, width }) => {
            return (
              <SongsList
                songs={songs}
                status={status}
                songWidth={width}
                emptyScreen={emptyScreen}
                listHeight={height}
                renderSongComponent={renderSongComponent}
                songItemHeight={songItemHeight}
              />
            );
          }}
        </AutoSizer>
      </div>
    </>
  );
});
