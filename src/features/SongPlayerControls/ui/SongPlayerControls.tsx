import { IconButton } from '@shared/ui';

interface SongPlayerControlsProps {
  onPlay(): void;
  onStop(): void;
  onRecord(): void;
  renderSettings(): React.ReactNode;
}

export const SongPlayerControls: React.FC<SongPlayerControlsProps> = props => {
  const { onPlay, onStop, onRecord, renderSettings } = props;

  return (
    <div className="flex items-center gap-10 pl-4">
      <IconButton name="play" onClick={onPlay} paddingless transparent size="xl" />
      <IconButton name="stop" onClick={onStop} paddingless transparent size="xl" />
      <IconButton name="record" onClick={onRecord} paddingless transparent size="xl" />
      <div className="ml-16">{renderSettings()}</div>
    </div>
  );
};
