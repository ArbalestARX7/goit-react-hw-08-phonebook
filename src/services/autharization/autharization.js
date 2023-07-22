import { instance, setToken } from '../services';

export const signUp = newUser => {
  return instance.post('/users/signup', newUser);
};

export const logIn = async user => {
  console.log(user);
  const response = await instance.post('/users/login', user);
  setToken(response.data.token);
  console.log(instance.defaults.headers);
  return response;
};

export const getProfile = async () => {
  const data = await instance.get('/users/current');
  return data;
};

export const logOut = async () => {
  await instance.post('/users/logout');
};
