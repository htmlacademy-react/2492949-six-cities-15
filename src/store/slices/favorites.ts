import { createSlice } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers';
import { PayloadAction } from '@reduxjs/toolkit';
import { fetchFavorites } from '../api-actions';
import { FetchStatus } from '../../consts';

type TFavoritesState = {
  favoriteOffer: TOffer[] | [];
  favoriteOffers: TOffer[] | [];
  fetchStatus: FetchStatus | null;
};

const initialState: TFavoritesState = {
  favoriteOffer: [],
  favoriteOffers: [],
  fetchStatus: null,
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
    builder.addCase(fetchFavorites.pending, (state) => {
      state.fetchStatus = FetchStatus.Pending;
    });
  },
});

export default favoritesSlice.reducer;
