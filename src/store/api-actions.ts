import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../consts';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';
import { TOffer } from '../types/offers';
import { TReviews, TReviewComment } from '../types/reviews';
import { TAppDispatch, State } from '../types';

export const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  { extra: AxiosInstance }
>('user/checkAuth', async (_arg, { extra: api }) => {
  const response = await api.get<UserData>('/login');
  return response.data;
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
});

export const getOffer = createAsyncThunk<
  TOffer,
  string | undefined,
  {
    extra: AxiosInstance;
  }
>('offers/get-offer', async (offerID, { extra: api }) => {
  const { data } = await api.get<TOffer>(`/offers/${offerID}`);
  // `${AppRoute.Offer}/${offerID}`
  return data;
});

export const getOffersNear = createAsyncThunk<
  TOffer[],
  string | undefined,
  {
    extra: AxiosInstance;
  }
>('offers/get-offersNear', async (offerID, { extra: api }) => {
  const { data } = await api.get<TOffer[]>(`/offers/${offerID}/nearby`);
  return data;
});

export const getReviews = createAsyncThunk<
  TReviews[],
  string | undefined,
  {
    extra: AxiosInstance;
  }
>('offers/get-reviews', async (offerID, { extra: api }) => {
  const { data } = await api.get<TReviews[]>(`/comments/${offerID}`);
  return data;
});

export const submitReview = createAsyncThunk<
  void,
  { id: string; review: TReviewComment },
  {
    dispatch: TAppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('review/submit-review', async ({ id, review }, { extra: api }) => {
  await api.post<TReviews>(`/comments/${id}`, {
    review,
  });
});
