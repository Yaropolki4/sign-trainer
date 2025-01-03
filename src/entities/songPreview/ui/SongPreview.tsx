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
        className={`flex w-full p-3 ${shadow} hover:bg-fill-hover-primary active:bg-fill-active-primary cursor-pointer items-center overflow-hidden`}
      >
        <div className="mr-3 h-12 w-12 min-w-12 border-1 border-fill-secondary">
          <SongAvatar songId={songId} />
        </div>
        <div className="mx-1 flex flex-col overflow-hidden text-nowrap">
          <div className="overflow-hidden text-ellipsis text-xl">{title}</div>
          <div className="overflow-hidden text-ellipsis text-sm text-secondary">
            {author}
          </div>
        </div>
      </div>
    );
  },
);
