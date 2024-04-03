import { useState } from 'react';

type TOffersListProps = {
  setSortingType: (key: string) => void;
  sortingType: string;
};

export function OffersSorting({
  setSortingType,
  sortingType,
}: TOffersListProps): JSX.Element {
  const [isOpened, setOpened] = useState(false);

  function chooseSortingType(e: React.ChangeEvent<HTMLInputElement>) {
    setOpened(!isOpened);
    setSortingType(e.target.id);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setOpened(!isOpened)}
      >
        {sortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpened && (
        <ul className="places__options places__options--custom places__options--opened">
          <li
            className={
              sortingType === 'Popular'
                ? 'places__option places__option--active'
                : 'places__option'
            }
            tabIndex={0}
            id="Popular"
            onClick={chooseSortingType}
          >
            Popular
          </li>
          <li
            className={
              sortingType === 'Price: low to high'
                ? 'places__option places__option--active'
                : 'places__option'
            }
            tabIndex={0}
            id="Price: low to high"
            onClick={chooseSortingType}
          >
            Price: low to high
          </li>
          <li
            className={
              sortingType === 'Price: high to low'
                ? 'places__option places__option--active'
                : 'places__option'
            }
            tabIndex={0}
            id="Price: high to low"
            onClick={chooseSortingType}
          >
            Price: high to low
          </li>
          <li
            className={
              sortingType === 'Top rated first'
                ? 'places__option places__option--active'
                : 'places__option'
            }
            tabIndex={0}
            id="Top rated first"
            onClick={chooseSortingType}
          >
            Top rated first
          </li>
        </ul>
      )}
    </form>
  );
}
