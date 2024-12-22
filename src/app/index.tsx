import './index.css';
import { Layout } from './Layout';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Progress } from '@pages/progress/Progress';
import { Song } from '@pages/song/Song';
import { Main } from '@pages/main/Main';
import { Routers } from '@shared/routes';
import './svg';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={Routers.MAIN} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={Routers.SONG} element={<Song />} />
          <Route path={Routers.PROGRESS} element={<Progress />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
