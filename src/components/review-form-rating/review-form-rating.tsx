type TReviewsFormRating = {
  value: number;
  label: string;
  handleRating: (element: React.ChangeEvent<HTMLInputElement>) => void;
  isRatingSubmitted: boolean;
};

function ReviewsFormRating({
  value,
  label,
  handleRating,
  isRatingSubmitted,
}: TReviewsFormRating): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input  visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        disabled={isRatingSubmitted}
        onChange={(e) => handleRating(e)}
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={label}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default ReviewsFormRating;
