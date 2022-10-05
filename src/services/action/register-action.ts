import { registerURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import {
  loginRequest,
  loginRequestSuccess,
  loginRequestFailed,
} from "../reducers/login-reducer";
import { setCookie } from "../cookie/cookie-functions";
import { AppDispatch, AppThunk } from "../../interface-and-types/types";

  

export const registerFetch =
  (email: string, password: string, name: string): AppThunk => (dispatch: AppDispatch) => {
    dispatch(loginRequest());
    fetch(`${baseURL}${registerURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then((response) => {
        return checkResponse(response);
      })
      .then((response) => {
        const name = response.user.name,
          email = response.user.email;
        dispatch(loginRequestSuccess({ name, email }));
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
        dispatch(loginRequestFailed());
      });
  };
