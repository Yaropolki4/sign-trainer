import React, { createContext } from 'react';
import { store } from './combinedStore';

export const StoreContext = createContext(store);

export const StoreProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
