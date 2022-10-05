import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IInitialState {
  successReset: boolean;

  request: boolean;
  failed: boolean;
}

export const initialState: IInitialState = {
  successReset: false,

  request: false,
  failed: false,
};

export const resetPasswordReducer = createSlice({
  name: "resetPasswordReducer",
  initialState,
  reducers: {
    resetPasswordRequest: (state) => {
      state.request = true;
    },
    resetPasswordSuccess: (state, action: PayloadAction<boolean>) => {
      state.request = false;
      state.failed = false;
      state.successReset = action.payload;
    },
    resetPasswordFailed: (state) => {
      state.failed = true;
    },
  },
});

export const {
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailed,
} = resetPasswordReducer.actions;
export default resetPasswordReducer.reducer;
