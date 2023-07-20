import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeToken = () => {
  delete axios.defaults.headers.common['Authorization'];
};

export const signUp = newUser => {
  return axios.post('/users/signup', newUser);
};

export const logIn = async user => {
  console.log(user);
  const response = await axios.post('/users/login', user);
  setToken(response.data.token);
  return response;
};

export const getProfile = async () => {
  const data = await axios.get('/users/current');
  return data;
};

export const logOut = async () => {
  await axios.post('/users/logout');
};
