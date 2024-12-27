import { observer } from 'mobx-react-lite';
import { SongPreviewModel } from '../model';
import { FixedSizeList as List } from 'react-window';
import { SongPreview } from './SongPreview';
import React from 'react';
import { LoadStatus } from '@shared/api';
import { Icon, Spinner } from '@shared/ui';

interface SongsListProps {
  songs: SongPreviewModel[];
  emptyScreen: React.ReactNode;
  songWidth: number;
  listHeight: number;
  status: LoadStatus;
}

const SONG_PREVIEW_HEIGHT = 72;

export const SongsList: React.FC<SongsListProps> = observer(
  ({ songs, songWidth, emptyScreen, listHeight, status }) => {
    const content = React.useMemo(() => {
      const renderSongs = () => {
        return songs.length ? (
          <List
            height={listHeight}
            itemCount={songs.length}
            itemSize={SONG_PREVIEW_HEIGHT}
            width={songWidth}
          >
            {({ index, style }) => (
              <div key={songs[index].songId} style={style}>
                <SongPreview key={songs[index].songId} song={songs[index]} />
              </div>
            )}
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
    }, [emptyScreen, listHeight, songWidth, songs, status]);

    return (
      <div
        className="flex items-center justify-center"
        style={{ width: songWidth, height: listHeight }}
        role="list"
      >
        {content}
      </div>
    );
  },
);
