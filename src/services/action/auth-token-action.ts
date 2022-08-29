import { userURL, baseURL, tokenURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { getCookie, setCookie } from "../cookie/cookie-functions";
import {
  LOGIN_FETCH_SUCCESS,
  LOGIN_FETCH_REQUEST,
  LOGIN_FETCH_FAILED,
} from "./login-action";
import { AppDispatch, AppThunk } from "../../interface-and-types/types";

export const AUTH_TOKEN_FETCH_SUCCESS = "AUTH_TOKEN_FETCH_SUCCESS",
  AUTH_TOKEN_FETCH_REQUEST = "AUTH_TOKEN_FETCH_REQUEST",
  AUTH_TOKEN_FETCH_FAILED = "AUTH_TOKEN_FETCH_FAILED";

  

export const AuthTokenFetch = (): AppThunk => (dispatch: AppDispatch) => {
   
    dispatch({
      type: LOGIN_FETCH_REQUEST,
    });


    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    const notUndefined = getCookie("token");

     
    if(notUndefined !== undefined){// если не Undefined то добавится в заголовок 
      requestHeaders.set('Authorization', notUndefined  )
    }

    fetch(`${baseURL}${userURL}`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then(checkResponse)
      .then((response) => {
        dispatch({
          type: LOGIN_FETCH_SUCCESS,
 
          success: response.success,
          name: response.user.name,
          email: response.user.email
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({
          type: LOGIN_FETCH_FAILED,
        });
        if (e.message === "jwt expired") {
          dispatch({
            type: AUTH_TOKEN_FETCH_REQUEST,
          });
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
              dispatch({
                type: AUTH_TOKEN_FETCH_SUCCESS,
              });
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
                type: AUTH_TOKEN_FETCH_FAILED,
              });
            });
        }
      });
  };

