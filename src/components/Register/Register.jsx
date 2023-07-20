import { Button } from '@mui/material';
import css from './/Register.module.css';
import { signUp } from 'services/auth/auth';
import { Notify } from 'notiflix';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const onFormSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const newUser = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    signUp(newUser)
      .then(() => {
        Notify.success('Cool, you are finish the registration');
        navigate('/login');
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
          />
        </label>
        <label htmlFor="password" className={css.contactLabel}>
          Password
          <input
            className={css.contactInput}
            type="tel"
            name="password"
            required
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
