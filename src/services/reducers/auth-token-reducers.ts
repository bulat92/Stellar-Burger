import { createSlice } from "@reduxjs/toolkit";

export type TAuthTokenReducerState = {
  successRefreshToken: boolean;
  request: boolean;
  failed: boolean;
};

const initialState: TAuthTokenReducerState = {
  successRefreshToken: false,
  request: false,
  failed: false,
};

export const authTokenReducer = createSlice({
  name: "authTokenReducer",
  initialState,
  reducers: {
    authTokenRequest: (state) => {
      state.request = true;
    },
    authTokenSuccess: (state) => {
      state.request = false;
      state.failed = false;

      state.successRefreshToken = true;
    },
    authTokenFailed: (state) => {
      state.failed = true;
    },
  },
});

export const { authTokenRequest, authTokenSuccess, authTokenFailed } =
  authTokenReducer.actions;
export default authTokenReducer.reducer;
