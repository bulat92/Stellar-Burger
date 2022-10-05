import { userURL, baseURL, tokenURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { getCookie, setCookie } from "../cookie/cookie-functions";
import { AppDispatch, AppThunk } from "../../interface-and-types/types";
import {
  authTokenRequest,
  authTokenSuccess,
  authTokenFailed,
} from "../reducers/auth-token-reducers";
import {
  loginRequest,
  loginRequestSuccess,
  loginRequestFailed,
} from "../reducers/login-reducer";

export const AuthTokenFetch = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(loginRequest());

  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("Content-Type", "application/json");
  const token = getCookie("token");

  if (token !== undefined) {
    // если не Undefined то добавится в заголовок
    requestHeaders.set("Authorization", token);
  } 
  fetch(`${baseURL}${userURL}`, {
    method: "GET",
    headers: requestHeaders,
  })
    .then(checkResponse)
    .then((response) => {
      const name = response.user.name,
        email = response.user.email;
      dispatch(loginRequestSuccess({ name, email }));
    })
    .catch((e) => {
      console.log(e);
      dispatch(loginRequestFailed());
      if (e.message === "jwt expired") {
        dispatch(authTokenRequest());
        fetch(`${baseURL}${tokenURL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            token: getCookie("refreshToken"),
          }),
        })
          .then(checkResponse)
          .then((response) => {
            dispatch(authTokenSuccess());
            if (response.accessToken) {
              setCookie("token", response.accessToken);
            }
            if (response.refreshToken) {
              setCookie("refreshToken", response.refreshToken);
            }
          })
          .catch((e) => {
            console.log(e);
            dispatch(authTokenFailed());
          });
      }
    });
};
