import React from 'react';
import { SelectedGroupContext } from '../model';

export const useSelectedGroup = () => React.useContext(SelectedGroupContext);
