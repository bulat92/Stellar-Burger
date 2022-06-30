import { userURL, baseURL, tokenURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { getCookie, setCookie } from "../cookie/cookie-functions";
import {
  LOGIN_FETCH_SUCCESS,
  LOGIN_FETCH_REQUEST,
  LOGIN_FETCH_FAILED,
} from "./login-action";

export const
  AUTH_TOKEN_FETCH_SUCCESS = 'AUTH_TOKEN_FETCH_SUCCESS',
  AUTH_TOKEN_FETCH_REQUEST = 'AUTH_TOKEN_FETCH_REQUEST',
  AUTH_TOKEN_FETCH_FAILED = 'AUTH_TOKEN_FETCH_FAILED';

 
export const AuthTokenFetch = () => {
  return function (dispatch) { 
 
    dispatch({
      type: LOGIN_FETCH_REQUEST,
    });
    dispatch({
      type: AUTH_TOKEN_FETCH_REQUEST,
    });
    fetch(`${baseURL}${userURL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        'Authorization': getCookie("token")
      }
    })
      .then(checkResponse)
      .then((response) => {
        dispatch({
          type: AUTH_TOKEN_FETCH_SUCCESS,
        });
        dispatch({
          type: LOGIN_FETCH_SUCCESS,
          success: response.success,
          name: response.user.name,
          email: response.user.email
        });
      })
      .catch((e) => {
        console.log(e)
        dispatch({
          type: LOGIN_FETCH_FAILED,
        });
        dispatch({
          type: AUTH_TOKEN_FETCH_FAILED,

          success: e.success
        });
        if(/* e.message === 'jwt expired' */ true){
          dispatch({
            type: LOGIN_FETCH_REQUEST,
          });
          fetch(`${baseURL}${tokenURL}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
              token: getCookie('refreshToken'),
            }),
          })
            .then(checkResponse)
            .then((response) => {
              dispatch({
                type: AUTH_TOKEN_FETCH_SUCCESS,
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
        }
      });
  };
};
