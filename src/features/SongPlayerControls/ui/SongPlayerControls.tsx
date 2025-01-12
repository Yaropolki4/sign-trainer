import { IconButton } from '@shared/ui';
import { observer } from 'mobx-react-lite';
import React from 'react';

interface SongPlayerControlsProps {
  onPlay(): void;
  onStop(): void;
  onRecord(): void;
  onReset(): void;
  renderSettings(): React.ReactNode;
  active: boolean;
}

export const SongPlayerControls: React.FC<SongPlayerControlsProps> = observer(props => {
  const { onPlay, onStop, onRecord, renderSettings, onReset, active } = props;

  return (
    <div className="flex items-center gap-10 pl-4">
      {active ? (
        <IconButton name="stop" onClick={onStop} paddingless transparent size="xl" />
      ) : (
        <IconButton name="play" onClick={onPlay} paddingless transparent size="xl" />
      )}
      <IconButton name="reset" onClick={onReset} paddingless transparent size="xl" />
      <IconButton name="record" onClick={onRecord} paddingless transparent size="xl" />
      <div className="ml-16">{renderSettings()}</div>
    </div>
  );
});
