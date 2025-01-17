import { observer } from 'mobx-react-lite';

interface ListTitleProps {
  text: string;
  leftAddon?: React.ReactNode;
}

export const ListTitle: React.FC<ListTitleProps> = observer(({ text, leftAddon }) => {
  return (
    <div className="flex h-10 w-full items-center gap-1.5 border-b-1.5 border-b-divider-secondary bg-fill-primary px-3 py-2 text-xl">
      {leftAddon}
      <div>{text}</div>
    </div>
  );
});
