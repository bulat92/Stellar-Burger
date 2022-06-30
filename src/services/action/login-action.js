import { loginURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { setCookie } from "../cookie/cookie-functions";

export const LOGIN_FETCH_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FETCH_REQUEST = "LOGIN_REQUEST",
  LOGIN_FETCH_FAILED = "LOGIN_FAILED",
  LOGOUT_FETCH = "LOGOUT_FETCH";

export const loginFetch = (email, password) => {
  return function (dispatch) {
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
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
          name: response.user.name,
          email: response.user.email
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
        console.log(e)
        dispatch({
          type: LOGIN_FETCH_FAILED,
        });
      });
  };
};
