import { SongPreview, SongPreviewModel } from '@entities/songPreview';
import { getSongsByQuery, SidebarSongsList } from '@entities/songsList';
import { LoadStatus } from '@shared/api';
import { Routers } from '@shared/constants';
import { t } from '@shared/lib';
import { Icon, Input, ListTitle } from '@shared/ui';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';

interface SidebarSearchPanelProps {
  renderControls(): React.ReactNode;
  searchListOffset: number;
}

const EMPTY_ARRAY: SongPreviewModel[] = [];
const SEARCH_REQUEST_STALE_TIME = 30000;
const SEARCH_SONG_ITEM_HEIGHT = 72;

export const SidebarSearchPanel: React.FC<SidebarSearchPanelProps> = observer(
  ({ renderControls, searchListOffset }) => {
    const [query, setQuery] = React.useState<string>('');

    const { data, isLoading, error } = useQuery(
      ['search', query],
      ({ signal }) => getSongsByQuery<SongPreviewModel[]>(signal, { query }),
      {
        enabled: Boolean(query.trim()),
        staleTime: SEARCH_REQUEST_STALE_TIME,
      },
    );

    const songs = data?.data || EMPTY_ARRAY;
    const status = isLoading ? LoadStatus.LOADING : error ? LoadStatus.ERROR : LoadStatus.SUCCESS;

    const handleChange = React.useCallback((value: string) => {
      setQuery(value);
    }, []);

    const title = React.useMemo(() => {
      return <ListTitle text={t('sidebar.search.title')} leftAddon={<Icon name={'search'} size="m" />} />;
    }, []);

    const navigate = useNavigate();

    const handleNavigate = React.useCallback(
      (id: string) => {
        navigate(Routers.SONG.replace(':id', id));
      },
      [navigate],
    );

    const renderSongComponent = React.useCallback(
      (song: SongPreviewModel) => {
        return <SongPreview song={song} onNavigate={handleNavigate} />;
      },
      [handleNavigate],
    );

    return (
      <>
        <div className="hoverable px-3 py-4.5">
          <Input renderControls={renderControls} onChange={handleChange} />
        </div>
        {query ? (
          <div style={{ top: searchListOffset }} className="absolute bottom-0 z-10 w-1/4">
            <SidebarSongsList
              title={title}
              songs={songs}
              status={status}
              emptyScreenText={t('sidebar.search.empty')}
              songItemHeight={SEARCH_SONG_ITEM_HEIGHT}
              renderSongComponent={renderSongComponent}
            />
          </div>
        ) : null}
      </>
    );
  },
);
