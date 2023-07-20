import { Button } from '@mui/material';
import css from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/auth/authThunk';
import { useEffect } from 'react';

const Login = () => {
  const isAuth = useSelector(state => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    isAuth && navigate('/');
  }, [dispatch, isAuth, navigate]);

  const onFormSubmit = e => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    const user = {
      email: email.value,
      password: password.value,
    };

    dispatch(loginThunk(user));
  };

  const onRegisetrButton = e => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <>
      <form className={css.contactForm} onSubmit={onFormSubmit}>
        <label htmlFor="email" className={css.contactLabel}>
          Email
          <input
            className={css.contactInput}
            type="email"
            name="email"
            required
          />
        </label>
        <label htmlFor="password" className={css.contactLabel}>
          Password
          <input
            className={css.contactInput}
            type="password"
            name="password"
            required
          />
        </label>
        <Button variant="contained" type="submit">
          LogIn
        </Button>
        <Button
          onClick={onRegisetrButton}
          variant="outlined"
          type="button"
          sx={{ marginTop: 3 }}
        >
          Sign Up
        </Button>
      </form>
    </>
  );
};

export default Login;
