import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { removeToken } from 'services/auth/auth';
import { getProfileThunk, logoutThunk } from 'redux/auth/authThunk';
import { useEffect } from 'react';

export const SharedLayout = () => {
  const { profile, token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutThunk());
    removeToken();
  };

  useEffect(() => {
    token && dispatch(getProfileThunk());
  }, [token]);

  return (
    <>
      <header className={css.header}>
        <nav>
          <NavLink className={css.link} to="/" end>
            Home
          </NavLink>
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
          {!profile && (
            <NavLink className={css.link} to="/login">
              Login
            </NavLink>
          )}
          {profile && (
            <>
              <p>{profile.data.name}</p>
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
