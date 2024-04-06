import { createAPI } from '../services/api';
import { configureStore } from '@reduxjs/toolkit';
// import { offersSlice } from './slices/offers';
// import { userSlice } from './slices/user';
import rootReducer from './reducer';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
