import {
  SongPreview,
  SongPreviewModel,
  getSongsPreviews,
} from '@entities/songPreview';
import { Spinner } from '@shared/ui/Spinner/Spinner';
import React from 'react';
import { Outlet } from 'react-router';

export const Layout: React.FC = () => {
  const [songs, setSongs] = React.useState<SongPreviewModel[]>([]);

  React.useEffect(() => {
    getSongsPreviews().then(response => {
      setSongs(response.data);
    });
  }, []);

  return (
    <div className="bg-fill-primary fixed bottom-0 left-0 right-0 top-0">
      <div className="flex w-full flex-row flex-nowrap">
        <div className="w-3/12">
          {songs.map(song => {
            return (
              <SongPreview
                key={song.songId}
                song={{
                  title: song.title,
                  author: song.author,
                  songId: song.songId,
                }}
              />
            );
          })}
          <Spinner />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
