import { observer } from 'mobx-react-lite';
import { SongPreviewModel } from '../model';
import { FixedSizeList as List } from 'react-window';
import { SongPreview } from './SongPreview';

interface SongsListProps {
  songs: SongPreviewModel[];
  emptyScreen: React.ReactNode;
  songWidth: number;
  listHeight: number;
}

const SONG_PREVIEW_HEIGHT = 72;

export const SongsList: React.FC<SongsListProps> = observer(
  ({ songs, songWidth, emptyScreen, listHeight }) => {
    return (
      <div
        className="flex items-center justify-center"
        style={{ width: songWidth, height: listHeight }}
        role="list"
      >
        {songs.length ? (
          <List
            height={listHeight}
            itemCount={songs.length}
            itemSize={SONG_PREVIEW_HEIGHT}
            width={songWidth}
          >
            {({ index, style }) => (
              <div style={style}>
                <SongPreview
                  key={songs[index].songId}
                  song={{
                    title: songs[index].title,
                    author: songs[index].author,
                    songId: songs[index].songId,
                  }}
                />
              </div>
            )}
          </List>
        ) : (
          emptyScreen
        )}
      </div>
    );
  },
);
