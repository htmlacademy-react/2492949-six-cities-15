import { Helmet } from 'react-helmet-async';
import { CITIES } from '../../consts';
import { OffersList } from '../../components/offers-list/offers-list';
import Header from '../../components/header/header';
import { useAppSelector, useAppDispatch } from '../../hooks';
import CitiesItem from '../../components/cities-item/cities-item';
import { TCityName, TOffer } from '../../types/offers';
import { changeCity } from '../../store/action';
import Spinner from '../../components/spinner/spinner';

function Main(): JSX.Element {
  const cityName = useAppSelector((state) => state.offers.city);
  const offers = useAppSelector((state) => state.offers.offers);
  const cityOffers = offers.filter(
    (offer: TOffer) => offer.city.name === cityName
  );

  const isOffersDataLoading = useAppSelector(
    (state) => state.offers.loadingStatus
  );

  const dispatch = useAppDispatch();

  const handleCityClick = (isSelected: boolean, newCity: TCityName) => {
    if (!isSelected) {
      dispatch(changeCity({ city: newCity }));
    }
  };

  return (
    <div>
      <Helmet>
        <title>Шесть городов. Главная</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((item) => (
                <CitiesItem key={item} name={item} />
              ))}
            </ul>
          </section>
        </div>
        {isOffersDataLoading ? (
          <Spinner />
        ) : (
          <OffersList offersData={cityOffers} activeCity={cityName} />
        )}
      </main>
    </div>
  );
}

export default Main;
