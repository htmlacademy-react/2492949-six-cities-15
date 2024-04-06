import { TCityName } from '../../types/offers';
import { offersSlice } from '../../store/slices/offers';
import { useAppDispatch } from '../../hooks';

type TCityItemProps = {
  name: TCityName;
};

function CitiesItem({ name }: TCityItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <li className="locations__item">
      <a
        className="locations__item-link tabs__item"
        href="#"
        onClick={() => dispatch(offersSlice.actions.changeCity(name))}
      >
        <span>{name}</span>
      </a>
    </li>
  );
}

export default CitiesItem;
