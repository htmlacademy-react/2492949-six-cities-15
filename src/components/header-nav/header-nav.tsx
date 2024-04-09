import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AuthorizationStatus } from '../../consts';

type THeaderNav = {
  favoritesCount: number;
};

export function HeaderNav({ favoritesCount }: THeaderNav): JSX.Element {
  const authStatus = useAppSelector((state) => state.user.authStatus);
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  return (
    <nav className="header__nav">
      {authStatus !== AuthorizationStatus.Auth ? (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Login}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              to={AppRoute.Favorites}
              className="header__nav-link header__nav-link--profile"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">
                {user.user?.email}
              </span>
              <span className="header__favorite-count">{favoritesCount}</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link
              to={AppRoute.Login}
              className="header__nav-link"
              onClick={(e) => {
                e.preventDefault();
                dispatch(logoutAction());
              }}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
