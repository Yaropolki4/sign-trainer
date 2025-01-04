import { SongPreview } from '@entities/songPreview';
import { SongPlayerControls } from '@features/SongPlayerControls';
import { Divider, IconButton } from '@shared/ui';

const renderSettings = () => {
  return (
    <div className="ml-16">
      <IconButton name="settings" paddingless transparent size="xl" />
    </div>
  );
};

export const Main: React.FC = () => {
  return (
    <div className="flex w-3/4 flex-grow flex-col">
      <div className="flex justify-between px-9">
        <div className="basis-96 overflow-hidden">
          <SongPreview
            interractable={false}
            song={{
              title:
                'sondknfosdinfodisnfoisdnfoidsnfoisnfernifneroifneroinfoiernfoiernfoiernfoineriofnerfoienrfdfoinsdofisdng',
              author: 'autor',
              songId: '2',
            }}
          />
        </div>
        <SongPlayerControls onPlay={() => {}} onStop={() => {}} onRecord={() => {}} renderSettings={renderSettings} />
      </div>
      <Divider />
    </div>
  );
};
