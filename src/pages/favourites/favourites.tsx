import React from 'react';
import { TOffer } from '../../types/offers';
import { FavoritesBlock } from '../../components/favorites-block/favorites-block';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';

type TFavoritesProps = {
  offersData: TOffer[];
};

function Favorites({ offersData }: TFavoritesProps): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>Шесть городов. Избранное</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesBlock offerList={offersData} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

const MemoizedFavorites = React.memo(Favorites);
export default MemoizedFavorites;
