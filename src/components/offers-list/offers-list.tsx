import { useState } from 'react';
import { TOffer } from '../../types/offers';
import { OffersBlock } from '../offers-block/offers-block';
import { Map } from '../map/map';
import { TCityName } from '../../types/offers';

type TOffersListProps = {
  offersData: TOffer[];
  activeCity: TCityName;
};

export function OffersList({
  offersData,
  activeCity,
}: TOffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  function handleMouseEnter(id: string) {
    setActiveOfferId(id);
  }

  function handleMouseLeave() {
    setActiveOfferId(null);
  }
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offersData.length} places to stay in {activeCity}
        </b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>
              Popular
            </li>
            <li className="places__option" tabIndex={0}>
              Price: low to high
            </li>
            <li className="places__option" tabIndex={0}>
              Price: high to low
            </li>
            <li className="places__option" tabIndex={0}>
              Top rated first
            </li>
          </ul>
        </form>

        <OffersBlock
          offers={offersData}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          page="offers"
        />
      </section>
      <div className="cities__right-section">
        <Map
          offers={offersData}
          activeOfferId={activeOfferId}
          page="main"
          activeCity={activeCity}
        />
      </div>
    </div>
  );
}
