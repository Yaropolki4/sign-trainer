import React from 'react';
import { NotesStoreContext } from '../model';

export const useSongsNotes = () => React.useContext(NotesStoreContext);
