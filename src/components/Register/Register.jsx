import { Button } from '@mui/material';
import css from './/Register.module.css';
import { signUp } from 'services/autharization/autharization';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/thunk';
import { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onInputHandler = evt => {
    const { value } = evt.currentTarget;

    switch (evt.currentTarget.name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const { name } = e.target.elements;

    const newUser = {
      name: name.value,
      email,
      password,
    };
    console.log(newUser);
    signUp(newUser)
      .then(() => {
        Notify.success('Cool, you are finish the registration');
        dispatch(loginThunk({ email, password }));
      })
      .catch(error => console.log(error.message));
  };

  return (
    <>
      <form className={css.contactForm} onSubmit={onFormSubmit}>
        <label htmlFor="name" className={css.contactLabel}>
          Name
          <input
            className={css.contactInput}
            type="text"
            name="name"
            required
          />
        </label>
        <label htmlFor="email" className={css.contactLabel}>
          Email
          <input
            className={css.contactInput}
            type="text"
            name="email"
            required
            onChange={onInputHandler}
          />
        </label>
        <label htmlFor="password" className={css.contactLabel}>
          Password
          <input
            className={css.contactInput}
            type="tel"
            name="password"
            required
            onChange={onInputHandler}
          />
        </label>
        <Button variant="contained" type="submit">
          Sign Up
        </Button>
      </form>
    </>
  );
};

export default Register;
