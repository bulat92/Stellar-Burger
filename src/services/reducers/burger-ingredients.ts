import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  TBurgersReducer
} from "../action/burger-ingredients";
import { IIngredient } from '../../interface-and-types/interface';

interface IInitialState{
  ingredients: IIngredient[] | [];
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
}

const initialState: IInitialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const burgersReducer = (state = initialState, action: TBurgersReducer) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENTS: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredients: action.ingredients,
        ingredientsFailed: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    default: {
      return state;
    }
  }
};