import { forgotPasswordURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { AppDispatch, AppThunk } from "../../interface-and-types/types";

export const FORGOT_PASSWORD_FETCH_SUCCESS = "FORGOT_PASSWORD_SUCCESS",
  FORGOT_PASSWORD_FETCH_REQUEST = "FORGOT_PASSWORD_REQUEST",
  FORGOT_PASSWORD_FETCH_FAILED = "FORGOT_PASSWORD_FAILED";

interface IforgotPasswordRequestORFailed{
  readonly type: typeof FORGOT_PASSWORD_FETCH_REQUEST | typeof FORGOT_PASSWORD_FETCH_FAILED ;
}
interface IforgotPasswordSuccess{
  readonly type: typeof FORGOT_PASSWORD_FETCH_SUCCESS;
  readonly message: string
}

export type TForgotPasswordReducer = IforgotPasswordRequestORFailed | IforgotPasswordSuccess;
 
export const forgotPasswordFetch = (email: string): AppThunk => (dispatch: AppDispatch) => {
  dispatch({
    type: FORGOT_PASSWORD_FETCH_REQUEST,
  });
  fetch(`${baseURL}${forgotPasswordURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then(checkResponse)
    .then((response) => {
      dispatch({
        type: FORGOT_PASSWORD_FETCH_SUCCESS,
        message: response.message,
      });
    })
    .catch((e) => {
      dispatch({
        type: FORGOT_PASSWORD_FETCH_FAILED,
      });
    });
};
