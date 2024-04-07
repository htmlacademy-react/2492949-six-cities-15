import React from 'react';

function Spinner(): JSX.Element {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h3>Еще чуть-чуть! Идет загрузка предложений.</h3>
        </section>
        <div className="cities__right-section" />
      </div>
    </div>
  );
}

const MemoizedSpinner = React.memo(Spinner);
export default MemoizedSpinner;
