import { loginURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { setCookie } from "../cookie/cookie-functions";
import { AppDispatch, AppThunk } from "../../interface-and-types/types";
import {
  loginRequest,
  loginRequestSuccess,
  loginRequestFailed,
} from "../reducers/login-reducer";

export interface ILoginRequestWithPayload {
  readonly type: string;
  readonly payload: {
    readonly name: string;
    readonly email: string;
  };
}
export interface ILoginRequest {
  readonly type: string;
  readonly payload: undefined;
}

export type TLoginRequest = ILoginRequestWithPayload | ILoginRequest;

export const loginFetch =
  (email: string, password: string): AppThunk =>
  (dispatch: AppDispatch) => {
    
    dispatch(loginRequest());
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
        if (response.accessToken) {
          setCookie("token", response.accessToken);
        }
        if (response.refreshToken) {
          setCookie("refreshToken", response.refreshToken);
        }
        const name = response.user.name,
          email = response.user.email;
        dispatch(loginRequestSuccess({ name, email }));
        return response;
      })
      .catch((e) => {
        console.log(e);
        dispatch(loginRequestFailed());
      });
  };
