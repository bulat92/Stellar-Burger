import { tokenURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";
import { useCookies } from "react-cookie";
import { useMemo } from "react";

export const TOKEN_FETCH_SUCCESS = "TOKEN_SUCCESS",
  TOKEN_FETCH_REQUEST = "TOKEN_REQUEST",
  TOKEN_FETCH_FAILED = "TOKEN_FAILED";

 

export const TOKENFetch = (email, password, name) => {
  
  return function (dispatch) {
    
    dispatch({
      type: TOKEN_FETCH_REQUEST,
    });
    fetch(`${baseURL}${tokenURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        "token": "{{refreshToken}}"
      })
    })
      .then(checkResponse)
      .then((response) => {
        dispatch({
          type: TOKEN_FETCH_SUCCESS,
          getedResponse: response,
        });
      })
      .catch((e) => {
        dispatch({
          type: TOKEN_FETCH_FAILED,
        });
      });
  };
};
