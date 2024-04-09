import React from 'react';
import { FavoritesBlock } from '../../components/favorites-block/favorites-block';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { useNavigate } from 'react-router-dom';

function Favorites(): JSX.Element {
  const favoriteOffers = useAppSelector(
    (state) => state.favorites.favoriteOffers
  );
  const navigate = useNavigate();

  const authStatus = useAppSelector((state) => state.user.authStatus);

  if (authStatus !== AuthorizationStatus.Auth) {
    navigate(AppRoute.Login);
  }

  const emptyPage = favoriteOffers.length === 0 && 'page--favorites-empty';
  return (
    <div className={`page ${emptyPage}`}>
      <Helmet>
        <title>Шесть городов. Избранное</title>
      </Helmet>
      <Header />
      {favoriteOffers.length !== 0 ? (
        <FavoritesBlock offerList={favoriteOffers} />
      ) : (
        <FavoritesEmpty />
      )}
      <Footer />
    </div>
  );
}

const MemoizedFavorites = React.memo(Favorites);
export default MemoizedFavorites;
