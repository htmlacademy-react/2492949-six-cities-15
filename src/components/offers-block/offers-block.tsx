import { TOffer } from '../../types/offers';
import Card from '../offer-card/offer-card';

type TOffersListProps = {
  offers: TOffer[];
  handleMouseEnter?: (id: string) => void;
  handleMouseLeave?: () => void;
  page: string;
};

export function OffersBlock({
  offers,
  handleMouseEnter,
  handleMouseLeave,
  page,
}: TOffersListProps): JSX.Element {
  let offersList: React.ReactNode[] = [];
  if (handleMouseEnter && handleMouseLeave) {
    offersList = offers.map((offer) => (
      <Card
        offersData={offer}
        key={offer.id}
        onMouseEnter={() => handleMouseEnter(offer.id)}
        onMouseLeave={handleMouseLeave}
        page={page}
      />
    ));
  } else {
    offersList = offers.map((offer) => (
      <Card offersData={offer} key={offer.id} page={page} />
    ));
  }

  return (
    <div
      className={
        page === 'offers'
          ? 'near-places__list places__list'
          : 'favorites__places'
      }
    >
      {offersList}
    </div>
  );
}

export default OffersBlock;
