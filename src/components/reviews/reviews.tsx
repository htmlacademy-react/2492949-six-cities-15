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
  const reviews = useAppSelector((state) => state.singleOffer.reviews);
  const isAuth = useAppSelector((state) => state.user.authStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getReviews(id));
    }
  }, [id, dispatch]);

  return (
    <section className="offer__reviews reviews">
      <ReviewsList reviews={reviews} />
      {isAuth === AuthorizationStatus.Auth && <ReviewsForm id={id} />}
      {!isAuth && (
        <p>Только авторизованные пользовател могут оставлять комментарии</p>
      )}
    </section>
  );
}

export default Reviews;
