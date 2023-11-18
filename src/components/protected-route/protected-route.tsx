import {Navigate} from 'react-router-dom';
import AuthStatus from '../../types/auth-status';

type ProtectedRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

function ProtectedRoute({authStatus, children}: ProtectedRouteProps): JSX.Element {
  return authStatus === AuthStatus.Authorized ? children : <Navigate to={'/login'} />;
}

export default ProtectedRoute;
