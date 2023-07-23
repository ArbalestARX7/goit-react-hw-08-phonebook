import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { removeToken } from 'services/services';
import { logoutThunk } from 'redux/auth/thunk';
import { selectProfile } from 'redux/auth/selectors';

export const SharedLayout = () => {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutThunk());
    removeToken();
    localStorage.removeItem('persist:auth');
  };

  return (
    <>
      <header className={css.header}>
        <nav className={css.navigation}>
          <NavLink className={css.link} to="/" end>
            Home
          </NavLink>
          {profile && <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>}
          {!profile && (
            <NavLink className={css.link} to="/login">
              Login
            </NavLink>
          )}
          {profile && (
            <>
              <p className={css.userName}>Hello, {profile.data.name}</p>
              <Button onClick={handleLogOut} variant="secondary">
                Log Out
              </Button>
            </>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
};
