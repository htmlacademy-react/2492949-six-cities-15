import notFoundStyle from './not-found-style.module.css';
import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

function NotFound(): JSX.Element {
  return (
    <div className={`${notFoundStyle.notFoundBlock}`}>
      <Helmet>
        <title>Шесть городов. 404 Not found</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <h1 className={`${notFoundStyle.heading}`}>
        OOPS! Error 404, page is not found.
      </h1>
      <p className={`${notFoundStyle.regularText}`}>
        To go to the main page, please click below:
      </p>
      <Link className={`${notFoundStyle.button}`} to={AppRoute.Main}>
        MAIN
      </Link>
    </div>
  );
}

export default NotFound;
