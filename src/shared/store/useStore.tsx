import React from 'react';
// https://qna.habr.com/q/1302414
// eslint-disable-next-line import/no-restricted-paths
import { StoreContext } from '@app/store';

export const useStore = () => React.useContext(StoreContext);
