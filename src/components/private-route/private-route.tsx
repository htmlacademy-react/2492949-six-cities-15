import { AppRoute, AuthorizationStatus } from '../../consts';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  page: string;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children, page } = props;

  const isDataReceived = useAppSelector(
    (state) => state.user.isServerDataReceived
  );
  if (
    page === 'favorites' &&
    isDataReceived &&
    authorizationStatus !== AuthorizationStatus.Auth
  ) {
    return <Navigate to={AppRoute.Login} />;
  }

  return children;
}

export default PrivateRoute;
