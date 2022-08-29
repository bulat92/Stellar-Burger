import { ingredientsURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { IIngredient } from '../../interface-and-types/interface';
import { AppDispatch, AppThunk } from "../../interface-and-types/types";


export const GET_INGREDIENTS = "GET_INGREDIENTS",
  GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED",
  GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";

interface IGetIngredientsRequsetGetIngredientFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED | typeof GET_INGREDIENTS_REQUEST;
}
interface IGetIngredients {
  readonly type: typeof GET_INGREDIENTS;
  readonly ingredients: IIngredient[];
}

export type TBurgersReducer = IGetIngredients | IGetIngredientsRequsetGetIngredientFailed;



export const fetchGetIngredients = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch({
    type: GET_INGREDIENTS_REQUEST,
  });

  fetch(`${baseURL}${ingredientsURL}`)
    .then(checkResponse)
    .then((response) => {
      dispatch({
        type: GET_INGREDIENTS,
        ingredients: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({
        type: GET_INGREDIENTS_FAILED,
      });
    });
};
