import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  ADD_BUN,
  SORT_INGREDIENT,
} from "../action/burger-constructor";

const initialState = {
  OrderIngredients: [],

  bun: {}
};

export const burgerConstructorReducer = (state = initialState, action) => {
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
 