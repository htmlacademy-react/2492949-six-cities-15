import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import { AppRoute } from '../../consts.ts';
import Main from '../../pages/main/main';
import Favorites from '../../pages/favourites/favourites';
import Login from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import Offer from '../../pages/offer/offer';
import PrivateRoute from '../private-route/private-route.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { fetchAllOffers } from '../../store/thunks/offers.ts';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.user.authStatus);

  useEffect(() => {
    dispatch(fetchAllOffers());
  }, [dispatch]);

  const offers = useAppSelector((state) => state.offers.offers);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authStatus}>
                <Favorites offersData={offers} />
              </PrivateRoute>
            }
          />
          <Route path={`${AppRoute.Offer}/:offerId`} element={<Offer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
