import { Route, Routes } from 'react-router-dom';
import Contacts from './Contacts/Contacts';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Login from './Login/Login';
import Register from './Register/Register';
import PrivateRoute from './PrivetRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
}
