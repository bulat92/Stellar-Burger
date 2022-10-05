import { IIngredient } from "../../interface-and-types/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  OrderIngredients: ReadonlyArray<IIngredient>;
  readonly bun: IIngredient | null;
}

export const initialState: IInitialState = {
  OrderIngredients: [],

  bun: null,
};

const burgerConstructor = createSlice({
  name: "burgerConstructor",
  initialState,
  reducers: {
    addIngredients: (state, action: PayloadAction<IIngredient>) => {
      state.OrderIngredients.push(action.payload);
    },
    addBun: (state, action: PayloadAction<IIngredient>) => {
      state.bun = action.payload;
    },
    deleteIngredient: (state, action: PayloadAction<number>) => {
      state.OrderIngredients.filter((el, index) => index !== action.payload);
    },
    sortIngredient: (
      state,
      action: PayloadAction<{ hoverIndex: number; dragIndex: number }>
    ) => {
      state.OrderIngredients.splice(
        action.payload.hoverIndex,
        0,
        state.OrderIngredients.splice(action.payload.dragIndex, 1)[0]
      );
    },
  },
});

export const { addIngredients, addBun, sortIngredient, deleteIngredient } =
  burgerConstructor.actions;
export default burgerConstructor.reducer;
