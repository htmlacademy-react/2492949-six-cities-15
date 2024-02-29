import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CARDS_COUNT } from './consts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cardsNumber={CARDS_COUNT} />
  </React.StrictMode>
);
