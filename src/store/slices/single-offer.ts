import { createSlice } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers';
import { getOffer, getReviews, submitReview } from '../api-actions';
import { getOffersNear } from '../api-actions';
import { TReviews } from '../../types/reviews';
import { fetchStatus } from '../../consts';

type TSingleOfferState = {
  offer: TOffer | null;
  offersNear: TOffer[] | [];
  fetchStatus: boolean;
  reviews: TReviews[] | [];
  isFailed: boolean;
  isReviewPending: boolean;
  reviewFailed: boolean;

  reviewSubmitStatus: fetchStatus | null;
};

const initialState: TSingleOfferState = {
  offer: null,
  offersNear: [],
  fetchStatus: false,
  reviews: [],
  isFailed: false,
  isReviewPending: false,
  reviewFailed: false,

  reviewSubmitStatus: null,
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
        state.isReviewPending = false;
        state.reviewSubmitStatus = fetchStatus.fullfield;
      })
      .addCase(submitReview.rejected, (state) => {
        state.reviewFailed = true;
        state.isReviewPending = false;
        state.reviewSubmitStatus = fetchStatus.failed;
      })
      .addCase(submitReview.pending, (state) => {
        state.isReviewPending = true;
        state.reviewSubmitStatus = fetchStatus.pending;
      });
  },
});

export default singleOfferSlice.reducer;
