import './index.css';
import { Layout } from './Layout';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Progress } from '@pages/progress/Progress';
import { Song } from '@pages/song/Song';
import { Main } from '@pages/main/Main';
import { Routers } from '@shared/constants';
import './svg';
import { QueryClient, QueryClientProvider } from 'react-query';

const rootElement = document.getElementById('root');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js').catch();
}

const root = ReactDOM.createRoot(rootElement!);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={Routers.MAIN} element={<Layout />}>
            <Route index element={<Main />} />
            <Route path={Routers.SONG} element={<Song />} />
            <Route path={Routers.PROGRESS} element={<Progress />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
