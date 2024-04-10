import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getReviews, submitReview } from '../../store/api-actions';
import { FormEvent } from 'react';
import { ChangeEvent } from 'react';
import ReviewsFormRating from '../review-form-rating/review-form-rating';
import { RATING_STARS, fetchStatus } from '../../consts';
import { useRef } from 'react';

type TReviewsForm = {
  id: string;
};

function ReviewsForm({ id }: TReviewsForm): JSX.Element {
  const dispatch = useAppDispatch();
  const [review, setReview] = useState({ comment: '', rating: 0 });
  const isReviewSubmitted = useAppSelector(
    (state) => state.singleOffer.isReviewPending
  );
  const reviewSubmitStatus = useAppSelector(
    (state) => state.singleOffer.reviewSubmitStatus
  );
  const reviewForm = useRef<HTMLFormElement>(null);

  function handleInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    setReview({
      ...review,
      comment: e.target.value,
    });
  }

  function handleRatingChange(e: ChangeEvent<HTMLInputElement>) {
    setReview({
      ...review,
      rating: Number(e.target.value),
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (id) {
      dispatch(
        submitReview({
          id: id,
          comment: review.comment,
          rating: review.rating,
        })
      );
    }
  }

  useEffect(() => {
    if (
      reviewSubmitStatus === fetchStatus.fullfield &&
      reviewForm.current !== null
    ) {
      reviewForm.current.reset();
      setReview({ comment: '', rating: 0 });
    }
    if (reviewSubmitStatus === fetchStatus.fullfield) {
      dispatch(getReviews(id));
    }
    console.log(isReviewSubmitted);
  }, [reviewSubmitStatus, isReviewSubmitted]);
  console.log(review.rating);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
      ref={reviewForm}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATING_STARS.map(({ value, label }) => (
          <ReviewsFormRating
            key={value}
            value={value}
            label={label}
            checked={review.rating === value}
            handleRating={handleRatingChange}
            isRatingSubmitted={isReviewSubmitted}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        value={review.comment}
        disabled={isReviewSubmitted}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleInputChange}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            isReviewSubmitted ||
            review.comment.length < 50 ||
            review.comment.length > 300 ||
            review.rating === 0
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default ReviewsForm;
