import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers';
import { fetchAllOffers } from '../thunks/offers';
import { TCityName } from '../../types/offers';
import { CITIES } from '../../consts';

type TOffersState = {
  city: TCityName;
  offers: TOffer[] | [];
  fetchStatus: boolean;
  loadingStatus: boolean;
  error: string | null;
};

const initialState: TOffersState = {
  city: CITIES[0],
  offers: [],
  fetchStatus: false,
  loadingStatus: false,
  error: null,
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setOffersList: (state, action: PayloadAction<TOffer[]>) => {
      state.offers = action.payload;
    },
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload as string;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.loadingStatus = true;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.fetchStatus = true;
        state.loadingStatus = false;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.fetchStatus = false;
        state.loadingStatus = false;
      });
  },
});

export const { setError } = offersSlice.actions;
export default offersSlice.reducer;
