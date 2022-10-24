import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState { 
  successProfileFetch: boolean;

  request: boolean;
  failed: boolean;
}

export const initialState: IInitialState = { 
  successProfileFetch: false,

  request: false,
  failed: false,
};

export const profileReducer = createSlice({
  name: "profileReducer",
  initialState,
  reducers: {
    profileRequest: (state) => {
      state.request = true;
    },
    profileSuccess: (state, action: PayloadAction<boolean>) => {
      state.request = false;
      state.failed = false;

      state.successProfileFetch = action.payload;
    },
    profileRequestFailed: (state) => {
      state.failed = true;
    },
  },
});

export const {
  profileRequest,
  profileSuccess,
  profileRequestFailed,
} = profileReducer.actions;
export default profileReducer.reducer;
