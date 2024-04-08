import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus } from '../../consts';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { setFavorites } from '../../store/api-actions';
import { useState } from 'react';

type TFavoritesButton = {
  isFavorite: boolean;
  id: string;
  // page?: string;
  width: string;
  height: string;
};

function FavoritesButton({
  isFavorite,
  id,
  // page,
  width,
  height,
}: TFavoritesButton): JSX.Element {
  const authStatus = useAppSelector((state) => state.user.authStatus);
  // const [isAddedToFavorites, setIsAddedToFavorites] = useState(isFavorite);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const changeFavoritesButton = () => {
    if (
      authStatus !== AuthorizationStatus.NoAuth &&
      authStatus !== AuthorizationStatus.Unknown
    ) {
      dispatch(setFavorites({ id: id, status: isFavorite }));
      // setIsAddedToFavorites(!isAddedToFavorites);
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button
      className={
        isFavorite
          ? 'place-card__bookmark-button place-card__bookmark-button--active button'
          : 'place-card__bookmark-button button'
      }
      type="button"
      onClick={changeFavoritesButton}
    >
      <svg className="place-card__bookmark-icon" width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default FavoritesButton;
