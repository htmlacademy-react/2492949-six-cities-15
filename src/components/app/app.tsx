import Main from '../../pages/main/main';


type CardProps = {
    cardsNumber: number;
  };

function App ({cardsNumber}: CardProps): JSX.Element {
  return (
    <Main cardsNumber = {cardsNumber} />
  );
}

export default App;
