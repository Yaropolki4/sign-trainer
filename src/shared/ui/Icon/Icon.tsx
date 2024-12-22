import { observer } from 'mobx-react-lite';
import { mapIconSizes } from './utils';
import type { IconSizes } from './utils';

export interface IconProps {
  name: string;
  size?: IconSizes;
}

export const Icon: React.FC<IconProps> = observer(({ name, size }) => {
  const formattedSize = mapIconSizes[size ?? 'm'];

  return (
    <svg width={formattedSize} height={formattedSize}>
      <use href={`#icon-${name}`}></use>
    </svg>
  );
});
