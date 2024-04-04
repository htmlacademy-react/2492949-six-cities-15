import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers';
import { setOffersList, setOffersDataLoadingStatus } from '../action';

export const fetchAllOffers = createAsyncThunk<
  TOffer[],
  void,
  { extra: AxiosInstance }
>('offers/fetch-offers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const { data } = await api.get<TOffer[]>('/offers');
  dispatch(setOffersDataLoadingStatus(false));
  dispatch(setOffersList(data));
  return data;
});
