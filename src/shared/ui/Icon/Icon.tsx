import { observer } from 'mobx-react-lite';
import { mapIconSizes } from './utils';
import type { IconSizes } from './utils';
import './index.css';

export interface IconProps {
  name: string;
  size?: IconSizes;
  hoverable?: boolean;
}

export const Icon: React.FC<IconProps> = observer(
  ({ name, size, hoverable }) => {
    const formattedSize = mapIconSizes[size ?? 'm'];

    return (
      <div>
        <svg
          width={formattedSize}
          height={formattedSize}
          className={hoverable ? 'hoverable-icon' : ''}
        >
          <use href={`#icon-${name}`}></use>
        </svg>
      </div>
    );
  },
);
