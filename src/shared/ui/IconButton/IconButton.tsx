import { observer } from 'mobx-react-lite';
import { Button } from '../Button';
import { Icon, IconProps } from '../Icon/Icon';
import { ButtonProps } from '../Button/Button';

type IconButtonProps = Pick<
  ButtonProps,
  'text' | 'transparent' | 'paddingless' | 'onClick'
> &
  Pick<IconProps, 'name' | 'size'>;

export const IconButton: React.FC<IconButtonProps> = observer(props => {
  const leftAddon = <Icon name={props.name} size={props.size} />;

  return (
    <Button
      onClick={props.onClick}
      leftAddon={leftAddon}
      text={props.text ?? ''}
      transparent={props.transparent}
      paddingless={props.paddingless}
    />
  );
});
