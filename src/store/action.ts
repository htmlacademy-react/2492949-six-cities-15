import { createAction } from '@reduxjs/toolkit';
import { TOffer, TCityName } from '../types/offers';

export const changeCity = createAction(
  'city/changeCity',
  (city: TCityName) => ({
    payload: city,
  })
);

export const setOffersList = createAction(
  'offers/change',
  (offers: TOffer[]) => ({
    payload: offers,
  })
);
