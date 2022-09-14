import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  ADD_BUN,
  SORT_INGREDIENT,
  IBurgerConstructorReducer
} from "../action/burger-constructor";
import { IIngredient } from '../../interface-and-types/interface';

interface IInitialState{
  OrderIngredients: ReadonlyArray<IIngredient>;
  readonly bun: IIngredient | null;
}

export const initialState: IInitialState = {
  OrderIngredients: [],

  bun: null
};

export const burgerConstructorReducer = (state = initialState, action: IBurgerConstructorReducer) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        OrderIngredients: [...state.OrderIngredients, action.item],
      };
    }
    case ADD_BUN: {
      return {
        ...state,
        bun: action.item,
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        OrderIngredients: [
          ...state.OrderIngredients.filter(
            (el, index) => index != action.index
          ),
        ],
      };
    }
    case SORT_INGREDIENT: {
      const ingredients = [...state.OrderIngredients];
      ingredients.splice(action.hoverIndex , 0, ingredients.splice(action.dragIndex, 1)[0]);
      return {
        ...state,
        OrderIngredients: ingredients
    }
  }
    default: {
      return state ;
    }
  }
};
 