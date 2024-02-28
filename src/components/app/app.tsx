import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import Main from '../../pages/main/main';
import Favorites from '../../pages/favourites/favourites';
import Login from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import Offer from '../../pages/offer/offer';
import PrivateRoute from '../private-route/private-route.tsx';
import { HelmetProvider } from 'react-helmet-async';

type CardProps = {
    cardsNumber: number;
  };

function App ({cardsNumber}: CardProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main cardsNumber = {cardsNumber} />}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
