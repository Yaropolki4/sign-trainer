import { observer } from 'mobx-react-lite';

interface ListTitleProps {
  text: string;
  leftAddon?: React.ReactNode;
}

export const ListTitle: React.FC<ListTitleProps> = observer(
  ({ text, leftAddon }) => {
    return (
      <div className="flex h-10 w-full items-center gap-1 border-b-1 border-b-secondary p-3">
        {leftAddon}
        <div>{text}</div>
      </div>
    );
  },
);
