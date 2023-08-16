import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthenticationSliceState } from './AuthenticationSliceType';

const initialState: IAuthenticationSliceState = {
  userToken: null,
};

export const { actions, reducer } = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    updateAuthState: (
      state,
      action: PayloadAction<IAuthenticationSliceState>,
    ) => {
      state.userToken = action.payload.userToken;
    },
    logoutUser: (state) => {
      state.userToken = initialState.userToken;
    },
  },
});

export const { updateAuthState, logoutUser } = actions;
