import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';

type TReviewsProps = {
  isAuth: boolean;
};

function Reviews({ isAuth }: TReviewsProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <ReviewsList />
      {isAuth && <ReviewsForm />}
      {!isAuth && (
        <p>Только авторизованные пользовател могут оставлять комментарии</p>
      )}
    </section>
  );
}

export default Reviews;
