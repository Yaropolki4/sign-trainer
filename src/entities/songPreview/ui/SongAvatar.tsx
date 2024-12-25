import { AjaxImage } from '@shared/ui/Image/AjaxImage';
import { observer } from 'mobx-react-lite';
import { getSongAvatar } from '../api';

interface SongAvatarProps {
  songId: string;
}

export const SongAvatar: React.FC<SongAvatarProps> = observer(({ songId }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <AjaxImage request={() => getSongAvatar(songId)} />
    </div>
  );
});