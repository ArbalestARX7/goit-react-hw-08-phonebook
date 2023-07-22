import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProfile,
  logIn,
  logOut,
} from 'services/autharization/autharization';
import { setToken } from 'services/services';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const data = await logIn(user);
      thunkAPI.dispatch(getProfileThunk());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProfileThunk = createAsyncThunk(
  'auth/getProfile',
  async (_, thunkAPI) => {
    try {
      return await getProfile();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setToken(state.auth.token);
      await logOut();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
