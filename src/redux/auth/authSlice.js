import { logoutThunk, getProfileThunk, loginThunk } from './authThunk';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = { token: '', isLoading: false, error: '', profile: null };

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.token = payload.data.token;
};

const handleFulfilledProfile = (state, { payload }) => {
  console.log(payload);
  state.isLoading = false;
  state.error = '';
  state.profile = payload;
};

const handleLogOut = state => {
  state.profile = null;
  state.token = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginThunk.fulfilled, handleFulfilled);
    builder.addCase(getProfileThunk.fulfilled, handleFulfilledProfile);
    builder.addCase(logoutThunk.fulfilled, handleLogOut);
    builder.addMatcher(
      isAnyOf(loginThunk.pending, getProfileThunk.pending, logoutThunk.pending),
      handlePending
    );
    builder.addMatcher(
      isAnyOf(
        loginThunk.rejected,
        getProfileThunk.rejected,
        logoutThunk.rejected
      ),
      handleRejected
    );
  },
});

export const authReducer = authSlice.reducer;
