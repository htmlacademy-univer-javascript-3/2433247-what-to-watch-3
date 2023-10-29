import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './components/app/app';
import { mediaList } from './data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App mediaList={mediaList} />
  </React.StrictMode>
);
