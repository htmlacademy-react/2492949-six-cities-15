import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../consts';
import { Offers } from '../mocks/offers';
import { changeCity, setOffersList } from './action';
import { TState } from '../types/offers';

const initialState: TState = {
  city: CITIES[0],
  offers: Offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(setOffersList, (state, action) => {
      state.offers = action.payload;
    });
});
