import { IIngredient } from "../../interface-and-types/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  ingredients: IIngredient[] | [];
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
}

export const initialState: IInitialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

const burgerIngrediends = createSlice({
  name: "burgerIngrediends",
  initialState,
  reducers: {
    getIngrediendsRequest: (state) => {
      state.ingredientsRequest = true;
    },
    getIngrediends: (state, action: PayloadAction<IIngredient[]>) => {
      state.ingredients = action.payload;
      state.ingredientsRequest = false;
      state.ingredientsFailed = false;
    },
    getIngrediendsFailed: (state) => {
      state.ingredientsFailed = true;
    },
  },
});

export const { getIngrediendsRequest, getIngrediends, getIngrediendsFailed } =
  burgerIngrediends.actions;
export default burgerIngrediends.reducer;
