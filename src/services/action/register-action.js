import { registerURL, baseURL } from "../url";
import { checkResponse } from "../check-response/check-response";

export const REGISTER_FETCH_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_FETCH_REQUEST = "REGISTER_REQUEST",
  REGISTER_FETCH_FAILED = "REGISTER_FAILED";

export const registerFetch = (email, password, name) => {
  return function (dispatch) {
    dispatch({
      type: REGISTER_FETCH_REQUEST,
    });
    fetch(`${baseURL}${registerURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      })
    })
      .then(checkResponse)
      .then((response) => {
        dispatch({
          type: REGISTER_FETCH_SUCCESS,
          getedResponse: response,
        });
      })
      .catch((e) => {
        dispatch({
          type: REGISTER_FETCH_FAILED,
        });
      });
  };
};
