import { forgotPasswordURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { AppDispatch, AppThunk } from "../../interface-and-types/types";
import {
  forgotPasswordRequest,
  forgotPasswordFailed,
  forgotPasswordSuccess,
} from '../reducers/forgot-password-reducer'
 
export interface IforgotPassword{
  readonly type: string;
  readonly payload: string
}
 
export const forgotPasswordFetch = (email: string): AppThunk => (dispatch: AppDispatch) => {
  dispatch(forgotPasswordRequest());
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
      dispatch(forgotPasswordSuccess(response.message));
    })
    .catch((e) => {
      dispatch(forgotPasswordFailed());
    });
};
