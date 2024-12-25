import type { SongPreviewModel } from '../model';
import { observer } from 'mobx-react-lite';
import { SongAvatar } from './SongAvatar';

interface SongPreviewProps {
  song: SongPreviewModel;
  active?: boolean;
}

export const SongPreview: React.FC<SongPreviewProps> = observer(
  ({ song, active }) => {
    const { title, author, songId } = song;
    const shadow = active ? 'shadow-accent' : '';

    return (
      <div
        className={`flex w-full p-3 ${shadow} cursor-pointer items-center overflow-hidden`}
      >
        <div className="border-1 border-fill-secondary mr-3 h-12 w-12 min-w-12">
          <SongAvatar songId={songId} />
        </div>
        <div className="mx-1 my-2 flex flex-col overflow-hidden text-nowrap">
          <div className="overflow-hidden text-ellipsis text-xl">{title}</div>
          <div className="text-secondary overflow-hidden text-ellipsis text-sm">
            {author}
          </div>
        </div>
      </div>
    );
  },
);
