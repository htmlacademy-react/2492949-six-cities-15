import { CITIES } from '../../consts';
import { TOffer } from '../../types/offers';
import { OffersBlock } from '../offers-block/offers-block';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

export type TCityName = (typeof CITIES)[number];

type TCityOfferListProps = {
  cityName: TCityName;
  offersList: TOffer[];
};

export function FavoritesList({
  cityName,
  offersList,
}: TCityOfferListProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to={AppRoute.Main} className="locations__item-link">
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <OffersBlock offers={offersList} page="favorites" />
    </li>
  );
}

export default FavoritesList;
