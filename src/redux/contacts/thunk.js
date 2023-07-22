import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  fetchContacts,
  deleteContact,
} from '../../services/contactsAPI/contactsAPI';
import { setToken } from 'services/services';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      return await fetchContacts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      return await addContact(newContact);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContactThunk = createAsyncThunk(
  'contacts/daleteContact',
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      return await deleteContact(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
