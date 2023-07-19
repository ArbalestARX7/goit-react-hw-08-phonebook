import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  getContactsThunk,
  removeContactThunk,
} from './contactsThunk';

const handlePanding = state => {
  state.isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = payload;
  state.error = '';
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  contacts: [],
  isLoading: false,
  error: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePanding)
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(addContactThunk.pending, handlePanding)
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: '',
          contacts: [...state.contacts, payload],
        };
      })
      .addCase(addContactThunk.rejected, handleRejected)
      .addCase(removeContactThunk.pending, handlePanding)
      .addCase(removeContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
      })
      .addCase(removeContactThunk.rejected, handleRejected);
  },
});

export const getContacts = state => state.contacts.contacts;
