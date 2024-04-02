import { createAction } from '@reduxjs/toolkit';
import { TOffer, TCityName } from '../types/offers';

export const changeCity = createAction<{ city: TCityName }>('city/change');

export const setOffersList = createAction(
  'offers/change',
  (offers: TOffer[]) => ({
    payload: offers,
  })
);
