import { AppRoute } from '../../consts';
import { TOffer } from '../../types/offers';
import { Link } from 'react-router-dom';

type CardProps = {
  offersData: TOffer;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  page: string;
};

const OfferCard = ({
  offersData,
  onMouseEnter,
  onMouseLeave,
  page,
}: CardProps) => {
  const { title, isFavorite, isPremium, previewImage, price, rating, type } =
    offersData;
  const ratingPercent: string = `${Math.round(+rating) * 20}%`;

  return (
    <article
      className={
        page === 'favorites'
          ? 'favorites__card place-card'
          : 'near-places__card place-card'
      }
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={
          page === 'favorites'
            ? 'favorites__image-wrapper place-card__image-wrapper'
            : 'cities__image-wrapper place-card__image-wrapper'
        }
      >
        <Link to={`${AppRoute.Offer}/${offersData.id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={page === 'favorites' ? 150 : 260}
            height={page === 'favorites' ? 110 : 200}
            alt="Place image"
          />
        </Link>
      </div>
      <div
        className={
          page === 'favorites'
            ? 'favorites__card-info place-card__info'
            : 'place-card__info'
        }
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={
              isFavorite
                ? 'place-card__bookmark-button place-card__bookmark-button--active button'
                : 'place-card__bookmark-button button'
            }
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingPercent }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default OfferCard;
