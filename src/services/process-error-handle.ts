import { store } from '../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setError } from '../store/slices/offers';
import { TIMEOUT_SHOW_ERROR } from '../consts';

// export const processErrorHandle = (message: string): void => {
//   store.dispatch(setError(message));
//   store.dispatch(clearErrorAction());
// };

export const clearErrorAction = createAsyncThunk('clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
