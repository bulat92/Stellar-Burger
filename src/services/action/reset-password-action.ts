import { resetPasswordURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { AppDispatch, AppThunk } from "../../interface-and-types/types";

export const RESET_PASSWORD_FETCH_SUCCESS = "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FETCH_REQUEST = "RESET_PASSWORD_REQUEST",
  RESET_PASSWORD_FETCH_FAILED = "RESET_PASSWORD_FAILED";

interface IResetPasswordRequestORFailed {
  readonly type:
    | typeof RESET_PASSWORD_FETCH_REQUEST
    | typeof RESET_PASSWORD_FETCH_FAILED;
}
interface IResetPasswordSuccess {
  readonly type: typeof RESET_PASSWORD_FETCH_SUCCESS;
  readonly success: boolean;
}
export type TResetPasswordReducer =
  | IResetPasswordRequestORFailed
  | IResetPasswordSuccess;

export const resetPasswordFetch =
  (password: string, token: string): AppThunk => (dispatch: AppDispatch) => {
    dispatch({
      type: RESET_PASSWORD_FETCH_REQUEST,
    });
    fetch(`${baseURL}${resetPasswordURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        password: password,
        token: token,
      }),
    })
      .then(checkResponse)
      .then((response) => {
        dispatch({
          type: RESET_PASSWORD_FETCH_SUCCESS,
          success: response.success,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({
          type: RESET_PASSWORD_FETCH_FAILED,
        });
      });
  };
