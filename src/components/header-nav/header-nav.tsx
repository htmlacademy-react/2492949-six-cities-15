import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AuthorizationStatus } from '../../consts';

export function HeaderNav(): JSX.Element {
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
              <span className="header__favorite-count">3</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link
              className="header__nav-link"
              to={AppRoute.Main}
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
