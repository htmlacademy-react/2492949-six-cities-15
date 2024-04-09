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

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">{cities}</ul>;
        </section>
      </div>
    </main>
  );
}

export default FavoritesList;
