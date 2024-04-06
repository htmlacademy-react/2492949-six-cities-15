import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { getReviews } from '../../store/api-actions';

type TReviewsProps = {
  isAuth: boolean;
};

function Reviews({ isAuth }: TReviewsProps): JSX.Element {
  const offerId = useAppSelector((state) => state.singleOffer.offer.id);
  const reviews = useAppSelector((state) => state.singleOffer.reviews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (offerId) {
      dispatch(getReviews(offerId));
    }
  }, [offerId, dispatch]);

  return (
    <section className="offer__reviews reviews">
      <ReviewsList reviews={reviews} />
      {isAuth && <ReviewsForm />}
      {!isAuth && (
        <p>Только авторизованные пользовател могут оставлять комментарии</p>
      )}
    </section>
  );
}

export default Reviews;
