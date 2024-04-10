import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { TOffer } from '../../types/offers';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import OfferCard from '../../components/offer-card/offer-card';
import { getOffer, getOffersNear } from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner';
import SingleOfferBlock from '../../components/single-offer-block/single-offer-block';
import NotFound from '../not-found/not-found';

function Offer(): JSX.Element {
  const dispatch = useAppDispatch();
  const { offerId } = useParams();
  const currentOffer = useAppSelector((state) => state.singleOffer.offer);
  const offersNearby = useAppSelector((state) => state.singleOffer.offersNear);
  const fetchStatus = useAppSelector((state) => state.singleOffer.fetchStatus);
  const loadingFailed = useAppSelector((state) => state.singleOffer.isFailed);
  const threeOffersNearby = offersNearby.slice(0, 3);
  const offersPlusCurrent = [currentOffer, ...threeOffersNearby];

  useEffect(() => {
    if (offerId) {
      dispatch(getOffer(offerId));
      dispatch(getOffersNear(offerId));
    }
  }, [offerId, dispatch]);

  if (currentOffer === null && loadingFailed === true) {
    return <NotFound />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>Шесть городов. Предложение аренды</title>
      </Helmet>
      <Header />
      {fetchStatus ? (
        <main className="page__main page__main--offer">
          {currentOffer && (
            <SingleOfferBlock
              currentOffer={currentOffer}
              offersNearby={offersPlusCurrent}
            />
          )}
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                {threeOffersNearby.map((offerNear: TOffer) => (
                  <OfferCard
                    offersData={offerNear}
                    key={offerNear.id}
                    page="offer"
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

const MemoizedOffer = React.memo(Offer);
export default MemoizedOffer;
