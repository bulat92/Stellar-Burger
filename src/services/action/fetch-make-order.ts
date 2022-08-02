import { ordersURL, baseURL } from '../url';
import { checkResponse } from '../check-response/check-response'
import { AppDispatch, AppThunk } from "../../interface-and-types/types";

export const
    POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS',
    POST_ORDER_REQUEST = 'POST_ORDER_REQUEST',
    POST_ORDER_FAILED = 'POST_ORDER_FAILED';

interface IPostOrderRequestPostOrderFailed{
    readonly type: typeof POST_ORDER_REQUEST | typeof POST_ORDER_FAILED;
}
interface IPostOrderSuccess{
    readonly type: typeof POST_ORDER_SUCCESS;
    readonly number: string;
}

export type TFetchMakeOrder = IPostOrderRequestPostOrderFailed | IPostOrderSuccess;


export const fetchMakeOrder = (idIngredients: string[]): AppThunk => (dispatch: AppDispatch) => {
 
        dispatch({
            type: POST_ORDER_REQUEST
        })
        fetch(`${baseURL}${ordersURL}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                ingredients: idIngredients
            })
        })
        .then(checkResponse).then( response => {
            dispatch({
              type: POST_ORDER_SUCCESS,
              number: response.order.number
          })
        })
          .catch( e => {
            dispatch({
                type: POST_ORDER_FAILED
            })
          }); 
 
  }    