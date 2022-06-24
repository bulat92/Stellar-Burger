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
          getedResponse: response,
        });
        return response;
      })
      .then((response) => {
        console.log('1');
        let authToken;
        response.headers.forEach((header) => {
          if (header.indexOf("Bearer") === 0) {
            authToken = header.split("Bearer ")[1];
          }
        });
        console.log('2')
        if (authToken) {
          setCookie("token", authToken);
        }
      })
      .catch((e) => {
        dispatch({
          type: LOGIN_FETCH_FAILED,
        });
      });
  };
};
