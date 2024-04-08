import { Map } from '../map/map';
import Reviews from '../reviews/reviews';
import { TOffer } from '../../types/offers';
import FavoritesButton from '../favorites-button/favorites-button';

type TSingleOffer = {
  currentOffer: TOffer;
  offersNearby: TOffer[];
};

function SingleOfferBlock({
  currentOffer,
  offersNearby,
}: TSingleOffer): JSX.Element {
  let images = currentOffer.images;
  if (images !== undefined && images.length > 6) {
    images = images?.slice(0, 6);
  }

  const ratingPercent: string = `${Math.round(+currentOffer.rating) * 20}%`;
  const isFavorite = currentOffer.isFavorite;
  const id = currentOffer.id;

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {images &&
            images.map((imageURL) => (
              <div className="offer__image-wrapper" key={`${imageURL}+${id}`}>
                <img
                  className="offer__image"
                  src={imageURL}
                  alt="Photo studio"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {currentOffer.isPremium && (
            <div className="offer__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">{currentOffer.title}</h1>
            <FavoritesButton
              id={id}
              isFavorite={isFavorite}
              page="offer"
              width={'31'}
              height={'33'}
            />
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{ width: ratingPercent }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">
              {currentOffer.rating}
            </span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {currentOffer.type}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {currentOffer.bedrooms}{' '}
              {currentOffer.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {currentOffer.maxAdults}{' '}
              {currentOffer.maxAdults === 1 ? 'adult' : 'adults'}
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{currentOffer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {currentOffer.goods?.map((item) => (
                <li className="offer__inside-item" key={`${item}name`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img
                  className="offer__avatar user__avatar"
                  src={currentOffer.host?.avatarUrl}
                  width="74"
                  height="74"
                  alt="Host avatar"
                />
              </div>
              <span className="offer__user-name">
                {currentOffer.host?.name}
              </span>
              {currentOffer.host?.isPro && (
                <span className="offer__user-status">Pro</span>
              )}
            </div>
            <div className="offer__description">
              <p className="offer__text">{currentOffer.description}</p>
            </div>
          </div>
          <Reviews id={currentOffer.id} />
        </div>
      </div>
      <Map activeOfferId={currentOffer.id} page="offer" offers={offersNearby} />
    </section>
  );
}

export default SingleOfferBlock;
