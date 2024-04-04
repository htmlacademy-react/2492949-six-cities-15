import { createReducer } from '@reduxjs/toolkit';
import { CITIES, AuthorizationStatus } from '../consts';
import {
  changeCity,
  setOffersList,
  requireAuthorization,
  setError,
  setOffersDataLoadingStatus,
} from './action';
import { TState } from '../types/index';

const initialState: TState = {
  city: CITIES[0],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(setOffersList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

// export const offersSlice = createSlice({
//   name: 'offers',
//   initialState,
//   reducers: {
//     changeCity: (state, action) => {
//       state.city = action.payload;
//     },
//     setOffersList: (state, action: PayloadAction<TOffer[]>) => {
//       state.offers = action.payload;
//     },
//   },
// });

// export const { changeCity, setOffersList } = offersSlice.actions;
