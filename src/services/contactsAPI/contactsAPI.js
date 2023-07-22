import { instance } from '../services';

export const fetchContacts = async () => {
  const response = await instance.get('/contacts');
  return response.data;
};

export const addContact = async newContact => {
  const response = await instance.post('/contacts', newContact);
  return response.data;
};

export const deleteContact = async id => {
  const response = await instance.delete(`/contacts/${id}`);
  return response.data;
};
