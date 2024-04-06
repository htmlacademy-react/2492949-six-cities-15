import { createSlice } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers';
import { getOffer, getReviews, submitReview } from '../api-actions';
import { getOffersNear } from '../api-actions';
import { TReviews } from '../../types/reviews';

type TSingleOfferState = {
  offer: TOffer | null;
  offersNear: TOffer[] | [];
  fetchStatus: boolean;
  reviews: TReviews[] | [];
  isFailed: boolean;
  isReviewSubmitted: boolean;
};

const initialState: TSingleOfferState = {
  offer: null,
  offersNear: [],
  fetchStatus: false,
  reviews: [],
  isFailed: false,
  isReviewSubmitted: false,
};

export const singleOfferSlice = createSlice({
  name: 'singleOffer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.fetchStatus = true;
      })
      .addCase(getOffer.rejected, (state) => {
        state.fetchStatus = false;
        state.isFailed = true;
      })
      .addCase(getOffersNear.fulfilled, (state, action) => {
        state.offersNear = action.payload;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(submitReview.fulfilled, (state) => {
        state.isReviewSubmitted = true;
      })
      .addCase(submitReview.rejected, (state) => {
        state.isReviewSubmitted = false;
      });
  },
});

export default singleOfferSlice.reducer;
