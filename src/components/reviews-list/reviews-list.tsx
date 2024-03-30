import { ReviewsItem } from '../reviews-item/reviews-item';
import { TReviews } from '../../types/reviews';

type TReviewsProps = {
  reviews: TReviews[];
};

function ReviewsList({ reviews }: TReviewsProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">1</span>
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