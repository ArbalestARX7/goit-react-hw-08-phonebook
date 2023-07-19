import axios from 'axios';
axios.defaults.baseURL = 'https://64ab147c0c6d844abedf2a5f.mockapi.io';

export const fetchContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addContact = async newContact => {
  const response = await axios.post('/contacts', newContact);
  return response.data;
};

export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
