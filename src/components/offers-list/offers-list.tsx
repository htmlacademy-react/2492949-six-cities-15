import { useState } from 'react';
import { TOffer } from '../../types/offers';
import { OffersBlock } from '../offers-block/offers-block';
import { Map } from '../map/map';
import { TCityName } from '../../types/offers';
import { OffersSorting } from '../offers-sorting/offers-sorting';
import { getSortedOffers } from '../../utils';

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

  const [sortingType, setSortingType] = useState('Popular');
  const sortedOffers = getSortedOffers(offersData, sortingType);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offersData.length} {offersData.length === 1 ? 'place' : 'places'}{' '}
            to stay in {activeCity}
          </b>
          <OffersSorting
            setSortingType={setSortingType}
            sortingType={sortingType}
          />
          <OffersBlock
            offers={sortedOffers}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            page="main"
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
    </div>
  );
}
