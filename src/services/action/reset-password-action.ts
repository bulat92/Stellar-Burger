import { resetPasswordURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { AppDispatch, AppThunk } from "../../interface-and-types/types";
import {
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailed,
} from "../reducers/reset-password-reducer";

export interface IResetPassword {
  readonly type: string;
  readonly payload: boolean;
}

export const resetPasswordFetch =
  (password: string, token: string): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(resetPasswordRequest());
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
        dispatch(resetPasswordSuccess(response.success));
      })
      .catch((e) => {
        console.log(e);
        dispatch(resetPasswordFailed());
      });
  };
