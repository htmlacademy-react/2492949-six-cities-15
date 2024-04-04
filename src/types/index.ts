import { TCityName, TOffer } from './offers';
import { AuthorizationStatus } from '../consts';
import { store } from '../store';

export type TState = {
  city: TCityName;
  offers: TOffer[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
};

export type TAppDispatch = typeof store.dispatch;
