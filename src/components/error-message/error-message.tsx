import { useAppSelector } from '../../hooks';
import errorMessageStyle from './error-message.module.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.offers.error);

  return error ? (
    <div className={`${errorMessageStyle.errorMessage}`}>{error}</div>
  ) : null;
}

export default ErrorMessage;
