import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  email: string;
  name: string;
  success: boolean;
  request: boolean;
  failed: boolean;
  logoutRequest: boolean;
}

export const initialState: IInitialState = {
  email: "",
  name: "",
  success: false,

  request: false,
  failed: false,

  logoutRequest: true,

};

export const loginReducer = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.request = true;
    },
    loginRequestSuccess: (
      state,
      action: PayloadAction<{ name: string; email: string }>
    ) => {
      state.request = false;
      state.failed = false;

      state.success = true;
      state.logoutRequest = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    loginRequestFailed: (state) => {
      state.failed = true;
    },
    logoutRequest: (state) => {
      state.email = "";
      state.name = "";
      state.success = false;
      state.logoutRequest = false;
    },
  },
});

export const {
  loginRequest,
  loginRequestSuccess,
  loginRequestFailed,
  logoutRequest,
} = loginReducer.actions;
export default loginReducer.reducer;
