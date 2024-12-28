import { SongPreviewModel, SongsList } from '@entities/songPreview';
import { observer } from 'mobx-react-lite';
import { Icon } from '@shared/ui';
import AutoSizer from 'react-virtualized-auto-sizer';
import React from 'react';
import { LoadStatus } from '@shared/api';

interface SongsListProps {
  emptyScreenText: string;
  title: React.ReactNode;
  songs: SongPreviewModel[];
  status: LoadStatus;
}

export const SidebarSongsList: React.FC<SongsListProps> = observer(props => {
  const { emptyScreenText, title, songs, status } = props;

  const emptyScreen = React.useMemo(
    () => (
      <div className="flex flex-col items-center justify-center">
        <Icon name="empty" size="auto" />
        <span className="text-xxl font-semibold text-secondary">
          {emptyScreenText}
        </span>
      </div>
    ),
    [emptyScreenText],
  );

  return (
    <>
      {title}
      <div className="grow">
        <AutoSizer>
          {({ height, width }) => {
            return (
              <SongsList
                songs={songs}
                status={status}
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
