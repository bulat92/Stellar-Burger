import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  successForgotPassword: boolean;
  message: string;
  request: boolean;
  failed: boolean;
}

export const initialState: IInitialState = {
  successForgotPassword: false,
  message: "",

  request: false,
  failed: false,
};

export const forgotPasswordReducer = createSlice({
  name: "forgotPasswordReducer",
  initialState,
  reducers: {
    forgotPasswordRequest: (state) => {
      state.request = true;
    },
    forgotPasswordFailed: (state) => {
      state.failed = true;
    },
    forgotPasswordSuccess: (state, action: PayloadAction<string>) => {
      state.request = false;
      state.failed = false;
      state.successForgotPassword = true;
      state.message = action.payload;
    },
  },
});

export const {
  forgotPasswordRequest,
  forgotPasswordFailed,
  forgotPasswordSuccess,
} = forgotPasswordReducer.actions;
export default forgotPasswordReducer.reducer;
