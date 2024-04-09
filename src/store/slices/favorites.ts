import { createSlice } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers';
import { PayloadAction } from '@reduxjs/toolkit';
import { fetchFavorites } from '../api-actions';

type TFavoritesState = {
  favoriteOffer: TOffer[] | [];
  favoriteOffers: TOffer[] | [];
};

const initialState: TFavoritesState = {
  favoriteOffer: [],
  favoriteOffers: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<TOffer[]>) => {
      state.favoriteOffer = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.favoriteOffers = action.payload;
    });
  },
});

export default favoritesSlice.reducer;
