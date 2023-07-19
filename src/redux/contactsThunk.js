import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  fetchContacts,
  deleteContact,
} from '../services/contactsAPI';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    return await fetchContacts();
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    return await addContact(newContact);
  }
);

export const removeContactThunk = createAsyncThunk(
  'contacts/daleteContact',
  async id => {
    return await deleteContact(id);
  }
);
