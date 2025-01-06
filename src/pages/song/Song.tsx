import { useParams } from 'react-router';
import { SongPreview } from '@entities/songPreview';
import { SongPlayerControls } from '@features/SongPlayerControls';
import { Divider, IconButton } from '@shared/ui';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { SongNotesContainer } from '@features/SongNotes';

const renderSettings = () => {
  return (
    <div className="ml-16">
      <IconButton name="settings" paddingless transparent size="xl" />
    </div>
  );
};

export const Song: React.FC = observer(() => {
  const { id } = useParams();

  if (!id) {
    return null;
  }

  return (
    <div className="flex w-3/4 flex-grow flex-col">
      <div className="flex justify-between px-9">
        <div className="basis-96 overflow-hidden">
          <SongPreview
            interractable={false}
            song={{
              title: 'song',
              author: 'author',
              songId: '2',
            }}
          />
        </div>
        <SongPlayerControls onPlay={() => {}} onStop={() => {}} onRecord={() => {}} renderSettings={renderSettings} />
      </div>
      <Divider />
      <SongNotesContainer songId={id} />
    </div>
  );
});
