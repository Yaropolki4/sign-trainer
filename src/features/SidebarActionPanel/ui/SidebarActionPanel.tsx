import { SongGroup, SongPreviewModel } from '@entities/songPreview';
import { LoadStatus } from '@shared/api';
import { useStore } from '@shared/store';
import { Input, IconButton } from '@shared/ui';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useQuery } from 'react-query';

const EMPTY_ARRAY: SongPreviewModel[] = [];
const SEARCH_REQUEST_STALE_TIME = 30000;

export const SidebarActionPanel: React.FC = observer(() => {
  const {
    selectedGroupState: { setSelectedGroup },
    searchSongsState,
  } = useStore();

  const [query, setQuery] = React.useState<string>('');

  const { data, isLoading, error } = useQuery(
    ['search', query],
    ({ signal }) => searchSongsState.fetchSongs(signal, query),
    {
      enabled: Boolean(query.trim()),
      staleTime: SEARCH_REQUEST_STALE_TIME,
    },
  );

  searchSongsState.setSongs(data?.data || EMPTY_ARRAY);
  searchSongsState.setStatus(
    isLoading
      ? LoadStatus.LOADING
      : error
        ? LoadStatus.ERROR
        : LoadStatus.SUCCESS,
  );

  const selectRecentSongs = React.useCallback(() => {
    setSelectedGroup(SongGroup.RECENT);
  }, [setSelectedGroup]);

  const selectFavoriteSongs = React.useCallback(() => {
    setSelectedGroup(SongGroup.FAVORITE);
  }, [setSelectedGroup]);

  const controls = React.useMemo(
    () => (
      <div className="flex gap-1">
        <IconButton
          name="recent"
          onClick={selectRecentSongs}
          paddingless
          transparent
          hoverable
        />
        <IconButton
          name="heart"
          onClick={selectFavoriteSongs}
          paddingless
          transparent
          hoverable
        />
        <IconButton name="add" paddingless transparent hoverable />
      </div>
    ),
    [selectFavoriteSongs, selectRecentSongs],
  );

  const handleChange = React.useCallback(
    (value: string) => {
      setQuery(value);

      if (value) {
        setSelectedGroup(SongGroup.SEARCH);
      } else {
        setSelectedGroup(SongGroup.RECENT);
      }
    },
    [setSelectedGroup],
  );

  return (
    <div className="hoverable px-3 py-4">
      <Input controls={controls} onChange={handleChange} />
    </div>
  );
});
