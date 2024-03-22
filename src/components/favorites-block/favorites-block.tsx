import { CITIES } from '../../consts';
import { TOffer } from '../../types/offers';
import FavoritesList from '../favorites-list/favorites-list';

type TFavoritesListProps = {
  offerList: TOffer[];
};

export function FavoritesBlock({
  offerList,
}: TFavoritesListProps): JSX.Element {
  const cities: React.ReactNode[] = [];
  let offersCityList: TOffer[] = [];
  CITIES.forEach((cityName) => {
    offersCityList = offerList.filter((offer) => offer.city?.name === cityName);
    if (offersCityList.length > 0) {
      cities.push(
        <FavoritesList
          cityName={cityName}
          key={cityName}
          offersList={offersCityList}
        />
      );
    }
  });

  return <ul className="favorites__list">{cities}</ul>;
}

export default FavoritesList;
