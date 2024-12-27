import { observer } from 'mobx-react-lite';
import React from 'react';

export interface ButtonProps {
  onClick?(): void;
  leftAddon?: React.ReactNode;
  transparent?: boolean;
  paddingless?: boolean;
  text?: string;
}

export const Button: React.FC<ButtonProps> = observer(props => {
  const { text, leftAddon, transparent, paddingless } = props;
  const background = transparent ? '' : 'bg-fill-secondary';
  const padding = paddingless ? '' : 'p-3';

  return (
    <div
      onClick={props.onClick}
      className={`${background} flex-column flex w-fit cursor-pointer items-center gap-x-2 rounded-md text-button ${padding}`}
    >
      {leftAddon}
      {text ? <button className="font-bold">{text}</button> : null}
    </div>
  );
});
