import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { HeaderNav } from '../header-nav/header-nav';

function Header(): JSX.Element {
  const currentPath = useLocation().pathname;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className={`${
                currentPath === '/'
                  ? 'header__logo-link header__logo-link--active'
                  : 'header__logo-link'
              }`}
              to={AppRoute.Main}
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          {currentPath !== AppRoute.Login && <HeaderNav />}
        </div>
      </div>
    </header>
  );
}

export default Header;
