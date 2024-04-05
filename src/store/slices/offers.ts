import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers';
import { fetchAllOffers } from '../thunks/offers';
import { TCityName } from '../../types/offers';
import { CITIES } from '../../consts';

type TOffersState = {
  city: TCityName;
  offers: TOffer[] | [];
  fetchStatus: boolean;
};

const initialState: TOffersState = {
  city: CITIES[0],
  offers: [],
  fetchStatus: false,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.fetchStatus = true;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.fetchStatus = false;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.fetchStatus = false;
      });
  },
});

export default offersSlice.reducer;
