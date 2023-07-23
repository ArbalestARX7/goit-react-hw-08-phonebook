import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';

function PublicRoute({ children }) {
  const isAuth = useSelector(selectToken);
  const { state } = useLocation();

  return !isAuth ? children : <Navigate to={state ? state : '/contacts'} />;
}

export default PublicRoute;
