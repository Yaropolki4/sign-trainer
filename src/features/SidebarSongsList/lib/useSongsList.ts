import React from 'react';
import { SongsListContext } from '../model';

export const useSongsList = () => React.useContext(SongsListContext);
