import { loginURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { setCookie } from "../cookie/cookie-functions";
import { AppDispatch, AppThunk } from "../../interface-and-types/types";

export const LOGIN_FETCH_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FETCH_REQUEST = "LOGIN_REQUEST",
  LOGIN_FETCH_FAILED = "LOGIN_FAILED",
  LOGOUT_FETCH = "LOGOUT_FETCH";

interface ILoginFetchRequestORFailedORLogout{
  readonly type: typeof LOGIN_FETCH_REQUEST | typeof LOGIN_FETCH_FAILED | typeof LOGOUT_FETCH;
}
interface ILoginFetchSuccess{
  readonly type: typeof LOGIN_FETCH_SUCCESS;
  readonly success: boolean;
  readonly name: string;
  readonly email: string;
}
export type TLoginReducer = ILoginFetchRequestORFailedORLogout | ILoginFetchSuccess;





export const loginFetch = (email: string, password: string): AppThunk => (dispatch: AppDispatch) => {
  dispatch({
    type: LOGIN_FETCH_REQUEST,
  });
  fetch(`${baseURL}${loginURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      return checkResponse(response);
    })
    .then((response) => {
      dispatch({
        type: LOGIN_FETCH_SUCCESS,
        success: response.success,

        name: response.user.name,
        email: response.user.email,
      });
      return response;
    })
    .then((response) => {
      if (response.accessToken) {
        setCookie("token", response.accessToken);
      }
      if (response.refreshToken) {
        setCookie("refreshToken", response.refreshToken);
      }
    })
    .catch((e) => {
      console.log(e);
      dispatch({
        type: LOGIN_FETCH_FAILED,
      });
    });
};
