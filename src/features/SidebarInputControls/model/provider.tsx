import { createContext } from 'react';
import { SelectedGroup } from './store';
import { observer } from 'mobx-react-lite';

const store = new SelectedGroup();

export const SelectedGroupContext = createContext(store);

export const SelectedGroupProvider: React.FC<React.PropsWithChildren> = observer(({ children }) => {
  return <SelectedGroupContext.Provider value={store}>{children}</SelectedGroupContext.Provider>;
});
