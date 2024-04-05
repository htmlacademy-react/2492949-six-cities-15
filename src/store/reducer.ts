// import { createReducer } from '@reduxjs/toolkit';
// import { CITIES, AuthorizationStatus } from '../consts';
// import {
//   changeCity,
//   setOffersList,
//   requireAuthorization,
//   setError,
//   setOffersDataLoadingStatus,
//   getOffer,
// } from './action';
// import { TState } from '../types/index';

// const initialState: TState = {
//   city: CITIES[0],
//   offers: [],
//   authorizationStatus: AuthorizationStatus.NoAuth,
//   isOffersDataLoading: false,
//   error: null,
//   singleOffer: null,
// };

// export const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(changeCity, (state, action) => {
//       state.city = action.payload.city;
//     })
//     .addCase(setOffersList, (state, action) => {
//       state.offers = action.payload;
//     })
//     .addCase(requireAuthorization, (state, action) => {
//       state.authorizationStatus = action.payload;
//     })
//     .addCase(setError, (state, action) => {
//       state.error = action.payload;
//     })
//     .addCase(setOffersDataLoadingStatus, (state, action) => {
//       state.isOffersDataLoading = action.payload;
//     })
//     .addCase(getOffer, (state, action) => {
//       state.singleOffer = action.payload;
//     });
// });
