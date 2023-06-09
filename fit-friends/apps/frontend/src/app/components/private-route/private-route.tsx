import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../utils/constants';

type PrivateRouteProps = {
  authorizationStatus: string;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Intro}/>
  );
}

export default PrivateRoute;
