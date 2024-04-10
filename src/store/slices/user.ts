import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../consts';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { UserData } from '../../types/user-data';

type TUserState = {
  authStatus: AuthorizationStatus;
  user: UserData | null;
  isServerDataReceived: boolean;
};

const initialState: TUserState = {
  authStatus: AuthorizationStatus.NoAuth,
  user: null,
  isServerDataReceived: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.isServerDataReceived = true;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.isServerDataReceived = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      });
  },
});

export default userSlice.reducer;
