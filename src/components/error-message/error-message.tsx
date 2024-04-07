import React from 'react';
import { useAppSelector } from '../../hooks';
import errorMessageStyle from './error-message.module.css';

export function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.offers.error);

  return error ? (
    <div className={`${errorMessageStyle.errorMessage}`}>{error}</div>
  ) : null;
}

const MemoizedErrorMessage = React.memo(ErrorMessage);
export default MemoizedErrorMessage;
