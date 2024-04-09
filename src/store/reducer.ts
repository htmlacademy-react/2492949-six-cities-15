import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/user';
import offersReducer from './slices/offers';
import singleOfferReducer from './slices/single-offer';
import favorites from './slices/favorites';

const rootReducer = combineReducers({
  user: userReducer,
  offers: offersReducer,
  singleOffer: singleOfferReducer,
  favorites: favorites,
});

export default rootReducer;
