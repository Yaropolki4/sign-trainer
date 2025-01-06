import { createContext } from 'react';
import { NotesStore } from './store';
import { observer } from 'mobx-react-lite';

const store = new NotesStore();

export const NotesStoreContext = createContext(store);

export const NotesStoreProvider: React.FC<React.PropsWithChildren> = observer(({ children }) => {
  return <NotesStoreContext.Provider value={store}>{children}</NotesStoreContext.Provider>;
});
