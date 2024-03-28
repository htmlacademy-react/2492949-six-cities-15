import { Helmet } from 'react-helmet-async';
import { CITIES } from '../../consts';
import { TOffer } from '../../types/offers';
import { OffersList } from '../../components/offers-list/offers-list';
import Header from '../../components/header/header';

type TPlacesToStay = {
  offersData: TOffer[];
};

function Main({ offersData }: TPlacesToStay): JSX.Element {
  const cityName = offersData[0].city.name;
  const cityOffers = offersData.filter((item) => item.city.name === cityName);
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
              {CITIES.map((title: string) => (
                <li className="locations__item" key={title}>
                  <a className="locations__item-link tabs__item" href="#">
                    <span>{title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <OffersList offersData={cityOffers} />
        </div>
      </main>
    </div>
  );
}

export default Main;
