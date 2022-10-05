import { ingredientsURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { IIngredient } from '../../interface-and-types/interface';
import { AppDispatch, AppThunk } from "../../interface-and-types/types";
import { getIngrediendsRequest, getIngrediends, getIngrediendsFailed } from '../reducers/burger-ingrediends'

export interface IGetIngredients {
  readonly type: string;
  readonly payload: IIngredient[];
} 

export const fetchGetIngredients = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(getIngrediendsRequest());

  fetch(`${baseURL}${ingredientsURL}`)
    .then(checkResponse)
    .then((response) => {
      dispatch(getIngrediends(response.data));
    })
    .catch((e) => {
      console.log(e);
      dispatch(getIngrediendsFailed());
    });
};
