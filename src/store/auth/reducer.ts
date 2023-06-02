import { createSlice } from '@reduxjs/toolkit';

export type authState = {
  authState: boolean;
};

export enum peremLS {
  authLS = 'authLS',
}

const initialState: authState = {
  authState: false,
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeStatusOfLoginAction: (state: authState) => {
      state.authState = !state.authState;
    },
  },
});

export const { changeStatusOfLoginAction } = auth.actions;

export default auth.reducer;
