import { ReviewsItem } from '../reviews-item/reviews-item';
import { TReviews } from '../../types/reviews';
import { useAppSelector } from '../../hooks';

type TReviewsProps = {
  reviews: TReviews[];
};

function ReviewsList({ reviews }: TReviewsProps): JSX.Element {
  const reviewsCount = useAppSelector(
    (state) => state.singleOffer.reviews
  ).length;

  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviewsCount}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((item) => (
          <ReviewsItem key={item.id} review={item} />
        ))}
      </ul>
    </>
  );
}
export default ReviewsList;
