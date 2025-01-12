import React from 'react';
import { observer } from 'mobx-react-lite';

interface SongSlicerProps {
  horizontalOffset: number;
}

export const SongSlider: React.FC<SongSlicerProps> = observer(({ horizontalOffset }) => {
  return (
    <div
      style={{ transform: `translate(${horizontalOffset}px, 0)` }}
      className="absolute -left-2 z-10 flex h-full w-4 flex-col items-center"
    >
      <div className="w-6 basis-4 rounded-md bg-accent"></div>
      <div className="w-1 grow bg-accent"></div>
    </div>
  );
});
