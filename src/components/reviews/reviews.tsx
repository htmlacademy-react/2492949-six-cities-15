import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { getReviews } from '../../store/api-actions';
import { AuthorizationStatus } from '../../consts';

type TReviews = {
  id: string;
};

function Reviews({ id }: TReviews): JSX.Element {
  let reviews = useAppSelector((state) => state.singleOffer.reviews);
  const reviewsCount = reviews.length;
  const isAuth = useAppSelector((state) => state.user.authStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getReviews(id));
    }
  }, [id, dispatch]);

  if (reviews.length !== 0) {
    reviews = reviews.slice().reverse().slice(0, 10);
  }

  return (
    <section className="offer__reviews reviews">
      {reviews.length !== 0 && (
        <ReviewsList reviews={reviews} reviewsCount={reviewsCount} />
      )}
      {isAuth === AuthorizationStatus.Auth && <ReviewsForm id={id} />}
      {!isAuth && (
        <p>Только авторизованные пользовател могут оставлять комментарии</p>
      )}
    </section>
  );
}

export default Reviews;
