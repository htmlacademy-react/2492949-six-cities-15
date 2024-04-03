import { TOffer } from './types/offers';

export function getSortedOffers(
  offers: TOffer[],
  sortingType: string
): TOffer[] {
  switch (sortingType) {
    case 'Price: high to low':
      return offers.slice().sort((a, b) => b.price - a.price);
    case 'Price: low to high':
      return offers.slice().sort((a, b) => a.price - b.price);
    case 'Popular':
      return offers;
    case 'Top rated first':
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }
  return offers;
}
