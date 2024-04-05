import { createAPI } from '../services/api';
import { configureStore } from '@reduxjs/toolkit';
import { offersSlice } from './slices/offers';
import { userSlice } from './slices/user';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    offers: offersSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
