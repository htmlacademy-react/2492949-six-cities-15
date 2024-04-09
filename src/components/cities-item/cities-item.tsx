import { TCityName } from '../../types/offers';
import { offersSlice } from '../../store/slices/offers';
import { useAppDispatch, useAppSelector } from '../../hooks';

type TCityItemProps = {
  name: TCityName;
};

function CitiesItem({ name }: TCityItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.offers.city);
  const classActive = activeCity === name && 'tabs__item--active';
  return (
    <li className="locations__item">
      <div
        className={`locations__item-link tabs__item ${classActive}`}
        onClick={() => dispatch(offersSlice.actions.changeCity(name))}
      >
        <span>{name}</span>
      </div>
    </li>
  );
}

export default CitiesItem;
