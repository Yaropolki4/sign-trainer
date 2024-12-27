import { AxiosResponse } from 'axios';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Image } from './Image';
import { Spinner } from '../Spinner';
import { Icon } from '../Icon';
import { LoadStatus } from '@shared/api';

type AjaxImageState =
  | { loadStatus: LoadStatus.LOADING }
  | { loadStatus: LoadStatus.ERROR }
  | { loadStatus: LoadStatus.SUCCESS; url: string };

interface AjaxImageProps {
  request(): Promise<AxiosResponse<any, any>>;
}

export const AjaxImage: React.FC<AjaxImageProps> = observer(({ request }) => {
  const [imageState, setImageState] = React.useState<AjaxImageState>({
    loadStatus: LoadStatus.LOADING,
  });

  React.useEffect(() => {
    request()
      .then(response => {
        const data = response.data as unknown;

        if (!(data instanceof Blob)) {
          setImageState({ loadStatus: LoadStatus.ERROR });

          return;
        }

        const imageURL = URL.createObjectURL(data);

        setImageState({ loadStatus: LoadStatus.SUCCESS, url: imageURL });
      })
      .catch(() => {
        setImageState({ loadStatus: LoadStatus.ERROR });
      });
  }, [request]);

  const { loadStatus } = imageState;

  if (loadStatus === LoadStatus.ERROR) {
    return (
      <div className="flex items-center justify-center">
        <Icon name="error" size="auto" />
      </div>
    );
  }

  if (loadStatus === LoadStatus.LOADING) {
    return <Spinner />;
  }

  return <Image src={imageState.url} />;
});
