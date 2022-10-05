import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  changedEmail: string;
  changedName: string;
  changedPassword: string;

  successProfileFetch: boolean;

  request: boolean;
  failed: boolean;
}

export const initialState: IInitialState = {
  changedEmail: "",
  changedName: "",
  changedPassword: "",
  successProfileFetch: false,

  request: false,
  failed: false,
};

export const profileReducer = createSlice({
  name: "burgerIngrediends",
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
    getIngrediendsFailed: (state) => {
      state.failed = true;
    },
  },
});

export const {
  profileRequest,
  profileSuccess,
  getIngrediendsFailed,
} = profileReducer.actions;
export default profileReducer.reducer;
