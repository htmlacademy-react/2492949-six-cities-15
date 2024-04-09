import React from 'react';

import { Helmet } from 'react-helmet-async';
import { CITIES } from '../../consts';
import { OffersList } from '../../components/offers-list/offers-list';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import CitiesItem from '../../components/cities-item/cities-item';
import { TOffer } from '../../types/offers';
import Spinner from '../../components/spinner/spinner';
import { MainEmpty } from '../../components/main-empty/main-empty';

function Main(): JSX.Element {
  const cityName = useAppSelector((state) => state.offers.city);
  const offers = useAppSelector((state) => state.offers.offers);
  const fetchStatus = useAppSelector((state) => state.offers.fetchStatus);
  const cityOffers = offers.filter(
    (offer: TOffer) => offer.city.name === cityName
  );

  const isOffersDataLoading = useAppSelector(
    (state) => state.offers.loadingStatus
  );

  const mainEmptyClass =
    offers.length === 0 && fetchStatus === true && 'page__main--index-empty';

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Шесть городов. Главная</title>
      </Helmet>
      <Header />
      <main className={` page__main page__main--index ${mainEmptyClass}`}>
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
        {isOffersDataLoading && offers.length === 0 && <Spinner />}
        {fetchStatus && offers.length !== 0 && (
          <OffersList offersData={cityOffers} activeCity={cityName} />
        )}
        {offers.length === 0 && fetchStatus === true ? <MainEmpty /> : null}
      </main>
    </div>
  );
}

const MemoizedMain = React.memo(Main);
export default MemoizedMain;
