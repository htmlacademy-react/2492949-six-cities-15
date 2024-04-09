import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import ErrorMessage from './components/error-message/error-message.tsx';
import { fetchAllOffers } from './store/thunks/offers.ts';
import { checkAuthAction } from './store/api-actions.ts';

store.dispatch(fetchAllOffers());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>
);
