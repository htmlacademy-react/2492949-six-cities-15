import { TCityName } from '../../types/offers';

type TCityItemProps = {
  isActive: boolean;
  name: TCityName;
  onClick: (selectCity: boolean, newCity: TCityName) => void;
};

function CitiesItem({ name, isActive, onClick }: TCityItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a
        className="locations__item-link tabs__item"
        href="#"
        onClick={() => onClick(isActive, name)}
      >
        <span>{name}</span>
      </a>
    </li>
  );
}

export default CitiesItem;
