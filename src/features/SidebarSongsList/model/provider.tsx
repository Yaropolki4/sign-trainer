import { createContext } from 'react';
import { FavoriteSongsStore } from './FavoriteSongsStore';
import { RecentSongsStore } from './RecentSongsStore';
import { observer } from 'mobx-react-lite';

const store = {
  recent: new RecentSongsStore(),
  favorite: new FavoriteSongsStore(),
};

export const SongsListContext = createContext(store);

export const SongsListProvider: React.FC<React.PropsWithChildren> = observer(
  ({ children }) => {
    return (
      <SongsListContext.Provider value={store}>
        {children}
      </SongsListContext.Provider>
    );
  },
);
