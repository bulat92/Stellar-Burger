import { ordersURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { AppDispatch, AppThunk } from "../../interface-and-types/types";
import { getCookie } from "../cookie/cookie-functions";
import {
  postOrderRequest,
  postOrderFailed,
  postOrderClearing,
  postOrderSuccess,
} from "..//reducers/fetch-make-order";

export interface IPostOrder {
  readonly type: string;
  readonly payload: string;
}

export const fetchMakeOrder =
  (idIngredients: string[]): AppThunk =>
  (dispatch: AppDispatch) => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    const accessToken = getCookie("token");

    if (accessToken !== undefined) {
      // если не Undefined то добавится в заголовок
      requestHeaders.set("Authorization", accessToken);
    }

    dispatch(postOrderClearing());
    dispatch(postOrderRequest());
    fetch(`${baseURL}${ordersURL}`, {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify({
        ingredients: idIngredients,
      }),
    })
      .then(checkResponse)
      .then((response) => {
        dispatch(postOrderSuccess(response.order.number));
      })
      .catch((e) => {
        dispatch(postOrderFailed());
      });
  };
