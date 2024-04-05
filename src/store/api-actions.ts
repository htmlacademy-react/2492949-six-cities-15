import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppRoute, APIRoute, TIMEOUT_SHOW_ERROR } from '../consts';
import { setError } from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';
import { store } from '.';
import { TOffer } from '../types/offers';

// export const checkAuthAction = createAsyncThunk<
//   void,
//   undefined,
//   {
//     dispatch: TAppDispatch;
//     state: TState;
//     extra: AxiosInstance;
//   }
// >('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
//   try {
//     const response = await api.get(APIRoute.Login);
//     dispatch(requireAuthorization(AuthorizationStatus.Auth));
//   } catch {
//     dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
//   }
// });

export const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  { extra: AxiosInstance }
>('user/checkAuth', async (_arg, { extra: api }) => {
  const response = await api.get<UserData>('/login');
  return response.data;
});

export const clearErrorAction = createAsyncThunk('offers/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

export const loginAction = createAsyncThunk<
  UserData,
  AuthData,
  { extra: AxiosInstance }
>('user/login', async (body, { extra: api }) => {
  const { data } = await api.post<UserData>(APIRoute.Login, body);
  saveToken(data.token);
  return data;
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  // dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export const getOffer = createAsyncThunk<
  TOffer,
  string | undefined,
  {
    extra: AxiosInstance;
  }
>('offers/get-offer', async (offerID, { extra: api }) => {
  const { data } = await api.get<TOffer>(`${AppRoute.Offer}/${offerID}`);
  return data;
});
