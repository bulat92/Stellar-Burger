import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  orderNumber: string;
  orderNumberRequest: Boolean;
  orderNumberFailed: Boolean;
}

export const initialState: IInitialState = {
  orderNumber: "",
  orderNumberRequest: false,
  orderNumberFailed: false,
};
export const orderReducer = createSlice({
  name: "orderReducer",
  initialState,
  reducers: {
    postOrderRequest: (state) => {
      state.orderNumberRequest = true;
    },
    postOrderSuccess: (state, action: PayloadAction<string>) => {
      state.orderNumberRequest = false;
      state.orderNumberFailed = false;
      state.orderNumber = action.payload;
    },
    postOrderFailed: (state) => {
      state.orderNumberFailed = true;
    },
    postOrderClearing: (state) => {
      state.orderNumberRequest = false;
      state.orderNumberFailed = false;
      state.orderNumber = "";
    },
  },
});

export const {
  postOrderRequest,
  postOrderFailed,
  postOrderClearing,
  postOrderSuccess,
} = orderReducer.actions;
export default orderReducer.reducer;
