import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, logIn, logOut } from 'services/auth/auth';

export const loginThunk = createAsyncThunk('auth/login', async user => {
  return await logIn(user);
});

export const getProfileThunk = createAsyncThunk(
  'auth/getProfile',
  async () => await getProfile()
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async () => await logOut()
);
