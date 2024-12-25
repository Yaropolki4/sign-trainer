import { observer } from 'mobx-react-lite';

interface ImageProps {
  src: string;
}

export const Image: React.FC<ImageProps> = observer(({ src }) => {
  return <img className="h-full w-full" src={src} />;
});
