import { Button } from '@mui/material';
import css from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/thunk';
import { Notify } from 'notiflix';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    const user = {
      email: email.value,
      password: password.value,
    };

    dispatch(loginThunk(user))
      .unwrap()
      .catch(() => Notify.failure('Some error:('));
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
