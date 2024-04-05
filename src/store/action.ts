import { createAction } from '@reduxjs/toolkit';
import { TOffer, TCityName } from '../types/offers';

export const changeCity = createAction<{ city: TCityName }>('city/change');

export const setOffersList = createAction(
  'offers/change',
  (offers: TOffer[]) => ({
    payload: offers,
  })
);

// export const setError = createAction<string | null>('offers/setError');

export const setOffersDataLoadingStatus = createAction<boolean>(
  'data/setOffersDataLoadingStatus'
);

export const getOffer = createAction<TOffer>('offer/getOffer');
